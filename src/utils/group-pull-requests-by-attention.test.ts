import { AccountType } from "models/account";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import { AttentionReason } from "utils/get-attention-reason";
import groupPullRequestsByAttention from "utils/group-pull-requests-by-attention";

const makePullRequest = (overrides: Partial<PullRequest>): PullRequest => ({
  id: "pr",
  title: "PR",
  author: { name: "author", avatarUrl: "" },
  repoId: "repo-1",
  repoName: "repo",
  reviewers: [],
  createdAt: "2026-01-01T00:00:00Z",
  url: "https://example.com/pr",
  isDraft: false,
  accentColor: "accentTeal",
  isApprovedByMe: false,
  isCommentedByMe: false,
  isAuthoredByMe: false,
  isAssignedToMe: false,
  isReviewPendingFromMe: false,
  isFullyApproved: false,
  isApprovalRequired: true,
  hasConflicts: false,
  ci: { state: CiState.Success },
  accountId: "account-1",
  mergeRef: {
    provider: AccountType.GitHub,
    pullRequestId: "pr",
    mergeMethod: "MERGE",
    expectedHeadOid: "abc123",
  },
  ...overrides,
});

describe("groupPullRequestsByAttention", () => {
  it("returns groups in display order regardless of input order", () => {
    const waiting = makePullRequest({ id: "waiting" });
    const blocked = makePullRequest({
      id: "blocked",
      isReviewPendingFromMe: true,
    });
    const needsWork = makePullRequest({
      id: "needsWork",
      isAuthoredByMe: true,
      hasConflicts: true,
    });
    const readyToMerge = makePullRequest({
      id: "ready",
      isAuthoredByMe: true,
      isFullyApproved: true,
    });

    const groups = groupPullRequestsByAttention([
      waiting,
      blocked,
      readyToMerge,
      needsWork,
    ]);

    expect(groups.map((g) => g.reason)).toEqual([
      AttentionReason.NeedsWork,
      AttentionReason.ReadyToMerge,
      AttentionReason.BlockedOnYou,
      AttentionReason.Waiting,
    ]);
  });

  it("omits empty groups", () => {
    const blocked = makePullRequest({ isReviewPendingFromMe: true });

    const groups = groupPullRequestsByAttention([blocked]);

    expect(groups).toHaveLength(1);
    expect(groups[0].reason).toBe(AttentionReason.BlockedOnYou);
  });

  it("collects multiple PRs into the same group", () => {
    const groups = groupPullRequestsByAttention([
      makePullRequest({ id: "a", isReviewPendingFromMe: true }),
      makePullRequest({ id: "b", isReviewPendingFromMe: true }),
    ]);

    expect(groups).toHaveLength(1);
    expect(groups[0].data).toHaveLength(2);
  });

  it("returns nothing for an empty list", () => {
    expect(groupPullRequestsByAttention([])).toEqual([]);
  });
});
