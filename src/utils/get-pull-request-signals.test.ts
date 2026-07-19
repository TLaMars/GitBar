import { AccountType } from "models/account";
import { Vote } from "models/attendee";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import getPullRequestSignals from "utils/get-pull-request-signals";

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

describe("getPullRequestSignals", () => {
  it("raises conflicts on my conflicted PR", () => {
    const signals = getPullRequestSignals(
      makePullRequest({ isAuthoredByMe: true, hasConflicts: true }),
    );

    expect(signals.conflicts).toBe(true);
  });

  it("raises ciFailed on my failing PR", () => {
    const signals = getPullRequestSignals(
      makePullRequest({ isAuthoredByMe: true, ci: { state: CiState.Failure } }),
    );

    expect(signals.ciFailed).toBe(true);
  });

  describe("changesRequested vote shapes", () => {
    it("raises on Vote.Rejected (Azure hard reject)", () => {
      const signals = getPullRequestSignals(
        makePullRequest({
          isAuthoredByMe: true,
          reviewers: [{ name: "R", avatarUrl: "", vote: Vote.Rejected }],
        }),
      );

      expect(signals.changesRequested).toBe(true);
    });

    it("raises on Vote.WaitingFor (GitHub/GitLab changes requested)", () => {
      const signals = getPullRequestSignals(
        makePullRequest({
          isAuthoredByMe: true,
          reviewers: [{ name: "R", avatarUrl: "", vote: Vote.WaitingFor }],
        }),
      );

      expect(signals.changesRequested).toBe(true);
    });
  });

  describe("own-PR gating", () => {
    it("keeps all own-PR signals false on someone else's broken PR", () => {
      const signals = getPullRequestSignals(
        makePullRequest({
          isAuthoredByMe: false,
          hasConflicts: true,
          ci: { state: CiState.Failure },
          reviewers: [{ name: "R", avatarUrl: "", vote: Vote.Rejected }],
        }),
      );

      expect(signals.conflicts).toBe(false);
      expect(signals.changesRequested).toBe(false);
      expect(signals.ciFailed).toBe(false);
      expect(signals.readyToMerge).toBe(false);
    });

    it("raises reviewRequested on someone else's PR awaiting my review", () => {
      const signals = getPullRequestSignals(
        makePullRequest({ isReviewPendingFromMe: true }),
      );

      expect(signals.reviewRequested).toBe(true);
    });

    it.each([
      ["my own PR", { isAuthoredByMe: true }],
      ["a draft", { isDraft: true }],
      ["a fully approved PR", { isFullyApproved: true }],
    ])("keeps reviewRequested false on %s", (_label, overrides) => {
      const signals = getPullRequestSignals(
        makePullRequest({ isReviewPendingFromMe: true, ...overrides }),
      );

      expect(signals.reviewRequested).toBe(false);
    });
  });

  describe("readyToMerge", () => {
    it("raises when my PR passes the merge gate", () => {
      const signals = getPullRequestSignals(
        makePullRequest({ isAuthoredByMe: true, isFullyApproved: true }),
      );

      expect(signals.readyToMerge).toBe(true);
    });

    it("respects the merge gate: no mergeRef means false", () => {
      const signals = getPullRequestSignals(
        makePullRequest({
          isAuthoredByMe: true,
          isFullyApproved: true,
          mergeRef: undefined,
        }),
      );

      expect(signals.readyToMerge).toBe(false);
    });
  });
});
