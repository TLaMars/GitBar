import { AccountType } from "models/account";
import Profile, { AccountState } from "models/profile";
import {
  AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID,
  PolicyEvaluationStatus,
} from "services/api/azure/models/policy-evaluations-response";
import { AzurePullRequest } from "services/api/azure/models/pull-requests-response";
import transformAzurePullRequest from "transformers/azure/azure-pull-request";

const profile: Profile = {
  id: "user-1",
  avatarUrl: "",
  userName: "me@example.com",
  name: "Me",
  type: AccountType.Azure,
  state: AccountState.Valid,
};

const makeAzurePullRequest = (
  overrides: Partial<AzurePullRequest> = {},
): AzurePullRequest => ({
  repository: {
    id: "repo-guid-1",
    name: "repo",
    url: "https://dev.azure.com/org/project-guid-1/_apis/git/repositories/repo-guid-1",
    project: { id: "project-guid-1", name: "project", state: "wellFormed" },
  },
  pullRequestId: 7,
  codeReviewId: 7,
  status: "active",
  createdBy: {
    id: "author-1",
    displayName: "Author",
    uniqueName: "author@example.com",
    url: "",
    imageUrl: "",
  },
  creationDate: "2026-01-01T00:00:00Z",
  title: "Add feature",
  description: "",
  sourceRefName: "refs/heads/feature",
  targetRefName: "refs/heads/main",
  mergeStatus: "succeeded",
  mergeId: "merge-1",
  lastMergeSourceCommit: { commitId: "abc123", url: "" },
  lastMergeTargetCommit: { commitId: "def456", url: "" },
  lastMergeCommit: { commitId: "fed789", url: "" },
  reviewers: [],
  url: "",
  supportsIterations: true,
  isDraft: false,
  threads: [],
  policyEvaluations: [],
  ...overrides,
});

describe("transformAzurePullRequest", () => {
  it("builds a mergeRef from the repository, project, and merge-preview commit", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest(),
    );

    expect(pullRequest.mergeRef).toEqual({
      provider: AccountType.Azure,
      projectId: "project-guid-1",
      repositoryId: "repo-guid-1",
      pullRequestId: 7,
      lastMergeSourceCommitId: "abc123",
    });
  });

  it("omits the mergeRef while the merge preview has not been computed", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({ lastMergeSourceCommit: undefined }),
    );

    expect(pullRequest.mergeRef).toBeUndefined();
  });

  it("treats approval as not required without a minimum-approvers policy", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({ policyEvaluations: [] }),
    );

    expect(pullRequest.isApprovalRequired).toBe(false);
  });

  it("treats approval as required with a minimum-approvers policy", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({
        policyEvaluations: [
          {
            evaluationId: "eval-1",
            status: PolicyEvaluationStatus.Queued,
            configuration: {
              type: { id: AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID },
            },
          },
        ],
      }),
    );

    expect(pullRequest.isApprovalRequired).toBe(true);
  });
});
