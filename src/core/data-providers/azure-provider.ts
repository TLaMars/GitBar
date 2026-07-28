import { AccountType } from "models/account";
import { AzureAuth } from "models/auth";
import { AccountState } from "models/profile";
import { MergeRef } from "models/pull-request";
import { Config } from "services/api/api-wrapper";
import azureApi from "services/api/azure/api";
import { AzurePullRequest } from "services/api/azure/models/pull-requests-response";
import transformAzurePullRequest from "transformers/azure/azure-pull-request";
import { azureConfig } from "utils/api-config";

import BaseProvider from "./base-provider";

class AzureProvider extends BaseProvider {
  auth: AzureAuth;

  #config: Config;

  constructor(id: string, auth: AzureAuth) {
    super(id, auth, auth.organization, AccountType.Azure);
    this.auth = auth;
    this.#config = azureConfig(
      {
        organization: this.auth.organization,
      },
      this.auth.token,
    );
  }

  #transformApiError(error: unknown): never {
    const err = error as { statusCode?: number; message?: string } | null;
    const statusCode = err?.statusCode;
    const errMessage = err?.message ?? "";
    const isTokenExpired =
      statusCode === 401 ||
      errMessage.includes("401") ||
      errMessage.toLowerCase().includes("unauthorized");
    const message = isTokenExpired
      ? "Your access token has expired. Please reconnect your account in Settings."
      : `failed with a ${statusCode ?? "unknown"}`;
    throw new Error(`${this.accountType} ${this.userIdentifier}: ${message}`);
  }

  async getProfile() {
    if (!this.profile) {
      const { data } = await azureApi
        .get("/:organization/_apis/profile/profiles/me", this.#config)
        .catch((error) => this.#transformApiError(error));

      this.profile = {
        id: data.id,
        avatarUrl: "",
        userName: data.emailAddress,
        name: data.displayName,
        type: this.accountType,
        state: AccountState.Valid,
        provider: this.auth.organization,
      };
    }

    return this.profile;
  }

  private async projects() {
    const { data } = await azureApi
      .get("/:organization/_apis/projects", this.#config)
      .catch((error) => this.#transformApiError(error));
    return data.value;
  }

  private async threads(
    projectId: string,
    repositoryId: string,
    pullRequestId: string,
  ) {
    const { data } = await azureApi
      .get(
        "/:organization/:projectId/_apis/git/repositories/:repositoryId/pullrequests/:pullRequesId/threads",
        azureConfig(
          {
            organization: this.auth.organization,
            projectId,
            pullRequesId: pullRequestId,
            repositoryId,
          },
          this.auth.token,
        ),
      )
      .catch((error) => this.#transformApiError(error));
    return data.value;
  }

  private async policyEvaluations(projectId: string, pullRequestId: string) {
    try {
      const { data } = await azureApi.get(
        "/:organization/:projectId/_apis/policy/evaluations",
        azureConfig(
          {
            organization: this.auth.organization,
            projectId,
            // Sent as a query param because no `:artifactId` placeholder
            // appears in the path — see utils/buildUrl behaviour.
            artifactId: `vstfs:///CodeReview/CodeReviewId/${projectId}/${pullRequestId}`,
            // Preview-only endpoint, so it overrides the "7.1" default in
            // azureConfig: plain "7.1" is rejected with a 400, which
            // is what made every policy lookup fail closed and hid the Merge
            // pill entirely (KI-6). The docs are explicit — "This should be set
            // to '7.1-preview.1' to use this version of the api."
            // https://learn.microsoft.com/en-us/rest/api/azure/devops/policy/evaluations/list?view=azure-devops-rest-7.1
            "api-version": "7.1-preview.1",
          },
          this.auth.token,
        ),
      );
      return data.value;
    } catch (error) {
      // `undefined`, not `[]` — a repo with no branch policies genuinely
      // returns an empty list, and the merge gate reads that as "no approval
      // required". Conflating it with a failed lookup made unmergeable Azure
      // PRs show the Merge pill (KI-2). Unknown fails closed instead.
      console.warn(
        `Azure policy evaluations unavailable for PR ${pullRequestId}:`,
        error,
      );
      return undefined;
    }
  }

  /**
   * Azure enrichment cost: threads + statuses + policy evaluations per PR
   * adds up quickly (3N extra round-trips). Most of those PRs aren't
   * interesting to the signed-in user anyway, so we only enrich the ones
   * they are directly involved in — authored or explicitly requested as
   * reviewer. Every other PR comes back with empty arrays so the
   * transformer still yields a valid card (just no comments / no CI badge).
   */
  #isRelevantToUser(pr: AzurePullRequest, profileName: string): boolean {
    if (pr.createdBy.displayName === profileName) return true;
    return pr.reviewers.some((r) => r.displayName === profileName);
  }

  async getPullRequests() {
    const profile = await this.getProfile();
    const projects = await this.projects();
    const pullRequests: AzurePullRequest[] = (
      await Promise.all(
        projects.map(async (project) => {
          const { data: pullRequestsData } = await azureApi
            .get(
              "/:organization/:projectId/_apis/git/pullrequests",
              azureConfig(
                {
                  organization: this.auth.organization,
                  projectId: project.id,
                },
                this.auth.token,
              ),
            )
            .catch((error) => this.#transformApiError(error));

          const data = pullRequestsData.value;
          const pullRequestsWithExtras = await Promise.all(
            data.map(async (pr) => {
              if (!this.#isRelevantToUser(pr, profile.name)) {
                // Same reasoning as the catch above: we never looked, so leave
                // policyEvaluations undefined rather than claiming "no policies".
                return {
                  ...pr,
                  threads: [],
                  policyEvaluations: undefined,
                };
              }
              const [threads, policyEvaluations] = await Promise.all([
                this.threads(
                  project.id,
                  pr.repository.id,
                  pr.pullRequestId.toString(),
                ),
                this.policyEvaluations(project.id, pr.pullRequestId.toString()),
              ]);
              return { ...pr, threads, policyEvaluations };
            }),
          );

          return pullRequestsWithExtras;
        }),
      )
    ).flat();

    return pullRequests.flat().map((pr) => ({
      ...transformAzurePullRequest(profile, pr),
      accountId: this.id,
    }));
  }

  async mergePullRequest(mergeRef: MergeRef) {
    if (mergeRef.provider !== AccountType.Azure) {
      throw new Error(
        `${this.accountType} ${this.userIdentifier}: pull request cannot be merged by this account`,
      );
    }

    await azureApi
      .patch(
        "/:organization/:projectId/_apis/git/repositories/:repositoryId/pullrequests/:pullRequestId",
        {
          status: "completed",
          lastMergeSourceCommit: { commitId: mergeRef.lastMergeSourceCommitId },
        },
        azureConfig(
          {
            organization: this.auth.organization,
            projectId: mergeRef.projectId,
            repositoryId: mergeRef.repositoryId,
            pullRequestId: mergeRef.pullRequestId.toString(),
          },
          this.auth.token,
        ),
      )
      .catch((error) => this.#transformApiError(error));
  }

  async getIssues() {
    // TODO: Implement Azure issues
    return [];
  }
}

export default AzureProvider;
