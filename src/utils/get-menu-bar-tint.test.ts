import { AccountType } from "models/account";
import { Vote } from "models/attendee";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import getMenuBarTint from "utils/get-menu-bar-tint";

const RED = "#F05069"; // needsWork
const ORANGE = "#F59E0B"; // blockedOnYou
const GREEN = "#3FB950"; // readyToMerge

const makePullRequest = (overrides: Partial<PullRequest>): PullRequest => ({
  id: "pr",
  title: "PR",
  author: { name: "author", avatarUrl: "" },
  repoId: "repo-1",
  repoName: "repo",
  reviewers: [],
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-07-10T00:00:00Z",
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

const needsWork = makePullRequest({
  id: "needsWork",
  isAuthoredByMe: true,
  hasConflicts: true,
});
const blockedOnYou = makePullRequest({
  id: "blocked",
  isReviewPendingFromMe: true,
});
const readyToMerge = makePullRequest({
  id: "ready",
  isAuthoredByMe: true,
  isFullyApproved: true,
});
const waiting = makePullRequest({ id: "waiting" });

describe("getMenuBarTint", () => {
  it("returns null when nothing actionable applies", () => {
    expect(getMenuBarTint([waiting])).toBeNull();
    expect(getMenuBarTint([])).toBeNull();
  });

  it("tints red for needs-work", () => {
    expect(getMenuBarTint([waiting, needsWork])).toBe(RED);
  });

  it("tints orange for blocked-on-you", () => {
    expect(getMenuBarTint([waiting, blockedOnYou])).toBe(ORANGE);
  });

  it("tints green for ready-to-merge", () => {
    expect(getMenuBarTint([waiting, readyToMerge])).toBe(GREEN);
  });

  it("picks the most urgent when several apply (needs-work > blocked > ready)", () => {
    expect(getMenuBarTint([readyToMerge, blockedOnYou, needsWork])).toBe(RED);
    expect(getMenuBarTint([readyToMerge, blockedOnYou])).toBe(ORANGE);
  });
});

// Guard: the test's expected hexes match the theme accent tokens.
describe("getMenuBarTint colors", () => {
  it("uses changes-requested (a needs-work reason) → red too", () => {
    const changesRequested = makePullRequest({
      isAuthoredByMe: true,
      reviewers: [{ name: "r", avatarUrl: "", vote: Vote.Rejected }],
    });
    expect(getMenuBarTint([changesRequested])).toBe(RED);
  });
});
