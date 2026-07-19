import { AccountType } from "models/account";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import { SnoozedPullRequest } from "store/slices/pull-requests";
import { filterSnoozed, isSnoozeActive } from "utils/is-pull-request-snoozed";

const NOW = new Date("2026-07-18T12:00:00Z").getTime();

const makePullRequest = (overrides: Partial<PullRequest>): PullRequest => ({
  id: "pr",
  title: "PR",
  author: { name: "author", avatarUrl: "" },
  repoId: "repo-1",
  repoName: "repo",
  reviewers: [],
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-07-18T10:00:00Z",
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
  unresolvedThreadCount: 0,
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

describe("isSnoozeActive", () => {
  const pr = makePullRequest({ updatedAt: "2026-07-18T10:00:00Z" });

  it("is active while a date snooze is in the future", () => {
    expect(
      isSnoozeActive({ type: "date", until: "2026-07-19T12:00:00Z" }, pr, NOW),
    ).toBe(true);
  });

  it("is inactive once a date snooze has passed", () => {
    expect(
      isSnoozeActive({ type: "date", until: "2026-07-18T11:00:00Z" }, pr, NOW),
    ).toBe(false);
  });

  it("stays active while updatedAt is unchanged", () => {
    expect(
      isSnoozeActive(
        { type: "updated", updatedAt: "2026-07-18T10:00:00Z" },
        pr,
        NOW,
      ),
    ).toBe(true);
  });

  it("clears once the PR has new activity", () => {
    expect(
      isSnoozeActive(
        { type: "updated", updatedAt: "2026-07-17T10:00:00Z" },
        pr,
        NOW,
      ),
    ).toBe(false);
  });
});

describe("filterSnoozed", () => {
  it("removes an actively-snoozed PR and keeps others", () => {
    const snoozedPr = makePullRequest({ id: "a" });
    const otherPr = makePullRequest({ id: "b" });
    const snoozed: SnoozedPullRequest[] = [
      {
        id: "a",
        repoName: "repo",
        snooze: { type: "date", until: "2026-07-19T12:00:00Z" },
      },
    ];

    const result = filterSnoozed([snoozedPr, otherPr], snoozed, NOW);

    expect(result.map((pr) => pr.id)).toEqual(["b"]);
  });

  it("keeps a PR whose snooze has expired", () => {
    const pr = makePullRequest({ id: "a" });
    const snoozed: SnoozedPullRequest[] = [
      {
        id: "a",
        repoName: "repo",
        snooze: { type: "date", until: "2026-07-18T11:00:00Z" },
      },
    ];

    expect(filterSnoozed([pr], snoozed, NOW)).toHaveLength(1);
  });

  it("matches on id and repoName together", () => {
    const pr = makePullRequest({ id: "a", repoName: "repo" });
    const snoozed: SnoozedPullRequest[] = [
      {
        id: "a",
        repoName: "other-repo",
        snooze: { type: "date", until: "2026-07-19T12:00:00Z" },
      },
    ];

    // Same id but a different repo — not the same PR, so it is not filtered.
    expect(filterSnoozed([pr], snoozed, NOW)).toHaveLength(1);
  });
});
