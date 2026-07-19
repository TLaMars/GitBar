import { AccountType } from "models/account";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import deriveNotificationEvents, {
  getPullRequestKey,
  NotificationSnapshot,
} from "utils/derive-notification-events";

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

const keysOf = (prs: PullRequest[]): Set<string> =>
  new Set(prs.map(getPullRequestKey));

// Runs one poll where every polled PR is also visible.
const poll = (previous: NotificationSnapshot | null, prs: PullRequest[]) =>
  deriveNotificationEvents(previous, prs, keysOf(prs));

describe("deriveNotificationEvents", () => {
  it("seeds silently on the first poll, even for already-true signals", () => {
    const pr = makePullRequest({ isReviewPendingFromMe: true });

    const { events, next } = poll(null, [pr]);

    expect(events).toEqual([]);
    expect(next[getPullRequestKey(pr)].reviewRequested).toBe(true);
  });

  it("fires on a rising edge", () => {
    const quiet = makePullRequest({});
    const { next } = poll(null, [quiet]);

    const { events } = poll(next, [
      makePullRequest({ isReviewPendingFromMe: true }),
    ]);

    expect(events).toHaveLength(1);
    expect(events[0].type).toBe("reviewRequested");
  });

  it("does not re-fire through content churn while the state holds", () => {
    const pending = makePullRequest({ isReviewPendingFromMe: true });
    const { next: seeded } = poll(null, [makePullRequest({})]);
    const { next } = poll(seeded, [pending]);

    const { events } = poll(next, [
      makePullRequest({
        isReviewPendingFromMe: true,
        title: "Retitled",
        amountOfComments: 12,
        updatedAt: "2026-07-11T00:00:00Z",
      }),
    ]);

    expect(events).toEqual([]);
  });

  it("re-arms on a falling edge and fires again on the next rise (review loop)", () => {
    const pending = makePullRequest({ isReviewPendingFromMe: true });
    const voted = makePullRequest({ isReviewPendingFromMe: false });

    const { next: seeded } = poll(null, [voted]);
    const { events: first, next: afterRequest } = poll(seeded, [pending]);
    const { events: silent, next: afterVote } = poll(afterRequest, [voted]);
    const { events: reRequested } = poll(afterVote, [pending]);

    expect(first).toHaveLength(1);
    expect(silent).toEqual([]);
    expect(reRequested).toHaveLength(1);
    expect(reRequested[0].type).toBe("reviewRequested");
  });

  it("keeps latches independent: conflicts latched, CI turning red still fires", () => {
    const conflicted = makePullRequest({
      isAuthoredByMe: true,
      hasConflicts: true,
    });

    const { next: seeded } = poll(null, [conflicted]);
    const { events } = poll(seeded, [
      makePullRequest({
        isAuthoredByMe: true,
        hasConflicts: true,
        ci: { state: CiState.Failure },
      }),
    ]);

    expect(events).toHaveLength(1);
    expect(events[0].type).toBe("ciFailed");
  });

  it("collapses same-poll rises to the most urgent event only", () => {
    const { next: seeded } = poll(null, [
      makePullRequest({ isAuthoredByMe: true }),
    ]);

    const { events, next } = poll(seeded, [
      makePullRequest({
        isAuthoredByMe: true,
        hasConflicts: true,
        ci: { state: CiState.Failure },
      }),
    ]);

    expect(events).toHaveLength(1);
    expect(events[0].type).toBe("conflicts");
    // The shadowed signal still latched: it must not fire later without
    // dropping and rising again.
    const key = getPullRequestKey(events[0].pullRequest);
    expect(next[key].ciFailed).toBe(true);
  });

  it("fires for a brand-new PR mid-session that already wants my review", () => {
    const { next: seeded } = poll(null, [makePullRequest({})]);

    const newcomer = makePullRequest({
      id: "pr-new",
      isReviewPendingFromMe: true,
    });
    const { events } = poll(seeded, [makePullRequest({}), newcomer]);

    expect(events).toHaveLength(1);
    expect(events[0].pullRequest.id).toBe("pr-new");
  });

  it("never fires for a suppressed PR and stays silent when it returns", () => {
    const quiet = makePullRequest({});
    const pending = makePullRequest({ isReviewPendingFromMe: true });

    const { next: seeded } = poll(null, [quiet]);
    // Signal rises while the PR is snoozed/hidden: polled, but not visible.
    const { events: whileSuppressed, next } = deriveNotificationEvents(
      seeded,
      [pending],
      new Set(),
    );
    // Un-snoozed with the signal still holding: the latch already advanced.
    const { events: onReturn } = poll(next, [pending]);

    expect(whileSuppressed).toEqual([]);
    expect(onReturn).toEqual([]);
  });

  it("stays silent when a PR vanishes for a poll and returns unchanged", () => {
    const pending = makePullRequest({ isReviewPendingFromMe: true });

    const { next: seeded } = poll(null, [pending]);
    const { next: afterHiccup } = poll(seeded, []);
    const { events } = poll(afterHiccup, [pending]);

    expect(events).toEqual([]);
  });

  it("latches the same PR id independently per account", () => {
    const mine = makePullRequest({ accountId: "account-1" });
    const twin = makePullRequest({
      accountId: "account-2",
      isReviewPendingFromMe: true,
    });

    const { next: seeded } = poll(null, [mine, twin]);
    const { events } = poll(seeded, [
      makePullRequest({ accountId: "account-1", isReviewPendingFromMe: true }),
      twin,
    ]);

    expect(events).toHaveLength(1);
    expect(getPullRequestKey(events[0].pullRequest)).toBe("account-1:pr");
  });
});
