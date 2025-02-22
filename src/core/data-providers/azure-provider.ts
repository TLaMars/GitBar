import { AccountType } from "models/account";
import { AzureAuth } from "models/auth";
import Profile, { AccountState } from "models/profile";
import { Config } from "services/api/api-wrapper";
import azureApi from "services/api/azure/api";
import { AzurePullRequest } from "services/api/azure/models/pull-requests-response";
import transformAzurePullRequest from "transformers/azure/azure-pull-request";
import { azureConfig } from "utils/api-config";

import Provider from "./provider";

class AzureProvider implements Provider {
  id: string;

  auth: AzureAuth;

  #profile?: Profile;

  #config: Config;

  constructor(id: string, auth: AzureAuth) {
    this.id = id;
    this.auth = auth;
    this.#config = azureConfig(
      {
        organization: this.auth.organization,
      },
      this.auth.token,
    );
  }

  async getProfile() {
    if (!this.#profile) {
      const { data } = await azureApi
        .get("/:organization/_apis/profile/profiles/me", this.#config)
        .catch((error) => {
          throw new Error(
            `Azure ${this.auth.organization}: failed with a ${error.statusCode}`,
          );
        });

      this.#profile = {
        id: data.id,
        avatarUrl: "",
        userName: data.emailAddress,
        name: data.displayName,
        type: AccountType.Azure,
        state: AccountState.Valid,
      };

      return this.#profile;
    }

    return this.#profile;
  }

  private async projects() {
    const { data } = await azureApi.get(
      "/:organization/_apis/projects",
      this.#config,
    );

    return data.value;
  }

  private async threads(
    projectId: string,
    repositoryId: string,
    pullRequestId: string,
  ) {
    const { data } = await azureApi.get(
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
    );

    return data.value;
  }

  async getPullRequests() {
    const profile = await this.getProfile();
    const projects = await this.projects();
    const pullRequests: AzurePullRequest[] = (
      await Promise.all(
        projects.map(async (project) => {
          const { data: pullRequestsData } = await azureApi.get(
            "/:organization/:projectId/_apis/git/pullrequests",
            azureConfig(
              {
                organization: this.auth.organization,
                projectId: project.id,
              },
              this.auth.token,
            ),
          );

          const data = pullRequestsData.value;

          const pullRequestsWithComments = await Promise.all(
            data.map(async (pr) => {
              const threads = await this.threads(
                project.id,
                pr.repository.id,
                pr.pullRequestId.toString(),
              );

              return {
                ...pr,
                threads,
              };
            }),
          );

          return pullRequestsWithComments;
        }),
      )
    ).flat();

    return pullRequests
      .flat()
      .map((pr) => transformAzurePullRequest(profile, pr));
  }

  async getValidatedProfile() {
    try {
      return await this.getProfile();
    } catch {
      return {
        id: this.id,
        name: this.auth.organization,
        type: AccountType.Azure,
        state: AccountState.Invalid,
      };
    }
  }

  // NOTE: NOT IMPLEMENTED
  async getNotifications(): Promise<[]> {
    return [];
  }
}

export default AzureProvider;
