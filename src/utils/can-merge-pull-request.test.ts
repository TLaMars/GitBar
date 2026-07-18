import { AccountType } from "models/account";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import canMergePullRequest from "utils/can-merge-pull-request";

const mergeablePullRequest: PullRequest = {
  id: "pr-1",
  title: "Add feature",
  author: { name: "author", avatarUrl: "" },
  repoId: "repo-1",
  repoName: "repo",
  reviewers: [],
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-01-01T00:00:00Z",
  url: "https://example.com/pr/1",
  isDraft: false,
  accentColor: "accentTeal",
  isApprovedByMe: true,
  isCommentedByMe: false,
  isAuthoredByMe: false,
  isAssignedToMe: true,
  isReviewPendingFromMe: false,
  isFullyApproved: true,
  isApprovalRequired: true,
  hasConflicts: false,
  ci: { state: CiState.Success },
  accountId: "account-1",
  mergeRef: {
    provider: AccountType.GitHub,
    pullRequestId: "pr-1",
    mergeMethod: "MERGE",
    expectedHeadOid: "abc123",
  },
};

describe("canMergePullRequest", () => {
  it("allows merging in the strict ready-to-merge state", () => {
    expect(canMergePullRequest(mergeablePullRequest)).toBe(true);
  });

  it("blocks drafts", () => {
    expect(
      canMergePullRequest({ ...mergeablePullRequest, isDraft: true }),
    ).toBe(false);
  });

  it("blocks pull requests that need approval but are not approved", () => {
    expect(
      canMergePullRequest({
        ...mergeablePullRequest,
        isFullyApproved: false,
        isApprovalRequired: true,
      }),
    ).toBe(false);
  });

  it("allows merging an unapproved PR when approval is not required", () => {
    expect(
      canMergePullRequest({
        ...mergeablePullRequest,
        isFullyApproved: false,
        isApprovalRequired: false,
      }),
    ).toBe(true);
  });

  it("blocks pull requests with conflicts", () => {
    expect(
      canMergePullRequest({ ...mergeablePullRequest, hasConflicts: true }),
    ).toBe(false);
  });

  it.each([CiState.Pending, CiState.Failure, CiState.Cancelled])(
    "blocks while CI is %s",
    (state) => {
      expect(
        canMergePullRequest({ ...mergeablePullRequest, ci: { state } }),
      ).toBe(false);
    },
  );

  it("treats absent CI as passing", () => {
    expect(
      canMergePullRequest({ ...mergeablePullRequest, ci: undefined }),
    ).toBe(true);
    expect(
      canMergePullRequest({
        ...mergeablePullRequest,
        ci: { state: CiState.None },
      }),
    ).toBe(true);
  });

  it("blocks when the provider could not assemble a mergeRef", () => {
    expect(
      canMergePullRequest({ ...mergeablePullRequest, mergeRef: undefined }),
    ).toBe(false);
  });
});
