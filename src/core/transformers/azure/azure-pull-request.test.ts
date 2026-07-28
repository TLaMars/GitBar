import { AccountType } from "models/account";
import Profile, { AccountState } from "models/profile";
import {
  AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID,
  PolicyEvaluationStatus,
} from "services/api/azure/models/policy-evaluations-response";
import {
  AzurePullRequest,
  ReviewerVote,
} from "services/api/azure/models/pull-requests-response";
import {
  CommentType,
  Thread,
  ThreadStatus,
} from "services/api/azure/models/thread-response";
import transformAzurePullRequest from "transformers/azure/azure-pull-request";
import canMergePullRequest from "utils/can-merge-pull-request";

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

  it("requires approval when the policies could not be fetched at all", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({ policyEvaluations: undefined }),
    );

    // Fails closed: an unknown policy state must not read as "nothing to
    // satisfy", otherwise every conflict-free PR shows the Merge pill (KI-2).
    expect(pullRequest.isApprovalRequired).toBe(true);
    expect(canMergePullRequest(pullRequest)).toBe(false);
  });

  it("does not count a lone approval as fully approved when policies are unknown", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({
        policyEvaluations: undefined,
        reviewers: [
          {
            reviewerUrl: "",
            id: "r-1",
            displayName: "Reviewer",
            uniqueName: "reviewer@example.com",
            url: "",
            imageUrl: "",
            vote: ReviewerVote.Approved,
          },
        ],
      }),
    );

    // KI-6: reviewer votes cannot prove "fully" — the policy may require two.
    expect(pullRequest.isFullyApproved).toBe(false);
    expect(canMergePullRequest(pullRequest)).toBe(false);
  });

  it("recognises the minimum-approvers policy id Azure actually sends", () => {
    // Verbatim from a live policy/evaluations response — GitBar previously held
    // the "Require a merge strategy" guid here, so no approval policy ever
    // matched and every conflict-free PR looked mergeable (KI-6).
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({
        policyEvaluations: [
          {
            evaluationId: "06d170c3-37fa-4fa1-bbe9-b32ae7af8e01",
            status: PolicyEvaluationStatus.Queued,
            configuration: {
              isEnabled: true,
              isBlocking: true,
              isDeleted: false,
              type: {
                id: "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd",
                displayName: "Minimum number of reviewers",
              },
            },
          },
        ],
      }),
    );

    expect(pullRequest.isApprovalRequired).toBe(true);
    expect(pullRequest.isFullyApproved).toBe(false);
    expect(canMergePullRequest(pullRequest)).toBe(false);
  });

  it("merges once every blocking approval policy is approved", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({
        policyEvaluations: [
          {
            evaluationId: "eval-1",
            status: PolicyEvaluationStatus.Approved,
            configuration: {
              isEnabled: true,
              isBlocking: true,
              type: { id: AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID },
            },
          },
        ],
      }),
    );

    expect(pullRequest.isFullyApproved).toBe(true);
    expect(canMergePullRequest(pullRequest)).toBe(true);
  });

  it("ignores optional, disabled and out-of-scope approval policies", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({
        policyEvaluations: [
          {
            // Optional policy: Azure lets you complete without it.
            evaluationId: "eval-optional",
            status: PolicyEvaluationStatus.Queued,
            configuration: {
              isEnabled: true,
              isBlocking: false,
              type: { id: AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID },
            },
          },
          {
            evaluationId: "eval-disabled",
            status: PolicyEvaluationStatus.Queued,
            configuration: {
              isEnabled: false,
              isBlocking: true,
              type: { id: AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID },
            },
          },
          {
            // Scoped to another branch.
            evaluationId: "eval-not-applicable",
            status: PolicyEvaluationStatus.NotApplicable,
            configuration: {
              isEnabled: true,
              isBlocking: true,
              type: { id: AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID },
            },
          },
        ],
      }),
    );

    expect(pullRequest.isApprovalRequired).toBe(false);
    expect(canMergePullRequest(pullRequest)).toBe(true);
  });

  it("requires every minimum-approvers policy to pass, not just the first", () => {
    const pullRequest = transformAzurePullRequest(
      profile,
      makeAzurePullRequest({
        policyEvaluations: [
          {
            evaluationId: "eval-1",
            status: PolicyEvaluationStatus.Approved,
            configuration: {
              type: { id: AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID },
            },
          },
          {
            evaluationId: "eval-2",
            status: PolicyEvaluationStatus.Queued,
            configuration: {
              type: { id: AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID },
            },
          },
        ],
      }),
    );

    expect(pullRequest.isFullyApproved).toBe(false);
    expect(canMergePullRequest(pullRequest)).toBe(false);
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
