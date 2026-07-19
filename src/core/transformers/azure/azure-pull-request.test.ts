import { AccountType } from "models/account";
import Profile, { AccountState } from "models/profile";
import {
  AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID,
  PolicyEvaluationStatus,
} from "services/api/azure/models/policy-evaluations-response";
import { AzurePullRequest } from "services/api/azure/models/pull-requests-response";
import {
  CommentType,
  Thread,
  ThreadStatus,
} from "services/api/azure/models/thread-response";
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

const makeThread = (
  status: ThreadStatus,
  commentType: CommentType,
  isDeleted = false,
): Thread => ({
  id: "thread-1",
  comments: [
    {
      author: { id: "author-1", displayName: "Author", descriptor: "" },
      commentType,
      content: "comment",
      id: "comment-1",
      isDeleted,
      usersLiked: [],
      publishedDate: "2026-01-02T00:00:00Z",
      lastUpdatedDate: "2026-01-02T00:00:00Z",
      parentCommentId: 0,
      lastContentUpdatedDate: "2026-01-02T00:00:00Z",
    },
  ],
  identities: [],
  publisedDate: "2026-01-02T00:00:00Z",
  lastUpdatedDate: "2026-01-02T00:00:00Z",
  status,
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

  it("counts open text threads as unresolved, ignoring system and closed ones", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({
        threads: [
          makeThread(ThreadStatus.Active, CommentType.Text),
          makeThread(ThreadStatus.Pending, CommentType.Text),
          // Resolved discussion — not open anymore.
          makeThread(ThreadStatus.Fixed, CommentType.Text),
          // System thread (push/vote) — never a discussion.
          makeThread(ThreadStatus.Unknown, CommentType.System),
          // Open thread whose only comment was deleted.
          makeThread(ThreadStatus.Active, CommentType.Text, true),
        ],
      }),
    );

    expect(pullRequest.unresolvedThreadCount).toBe(2);
  });
});
