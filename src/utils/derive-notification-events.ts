import { PullRequest } from "models/pull-request";
import getPullRequestSignals, {
  NOTIFICATION_URGENCY,
  NotificationSignal,
  PullRequestSignals,
} from "utils/get-pull-request-signals";

/**
 * Last-seen signals per PR. Keys are `accountId:id` — PR ids are only unique
 * per account, and the same numeric id on two accounts must latch
 * independently.
 */
export type NotificationSnapshot = Record<string, PullRequestSignals>;

export type NotificationEvent = {
  type: NotificationSignal;
  pullRequest: PullRequest;
};

export const getPullRequestKey = (
  pr: Pick<PullRequest, "accountId" | "id">,
): string => `${pr.accountId}:${pr.id}`;

const DISARMED: PullRequestSignals = {
  conflicts: false,
  changesRequested: false,
  ciFailed: false,
  reviewRequested: false,
  readyToMerge: false,
};

/**
 * The notification engine (D16): a notification is an *edge*, not a state.
 * Each signal is an independent latch per PR that fires once on false → true
 * and re-arms only on true → false — content churn while a state holds never
 * re-fires. Per PR per poll at most one event fires: the most urgent rising
 * edge (D16.1a); the other latches still advance, so a shadowed signal only
 * fires after dropping and rising again.
 *
 * - `previous === null` is the silent seed: the first completed poll of a
 *   session records the baseline and fires nothing, so a (re)launch never
 *   bursts (D16.2).
 * - Every polled PR advances its latches, but only `visibleKeys` (PRs that
 *   survived snooze/hide/bot filtering) may emit — suppressed PRs never
 *   notify, and un-snoozing stays silent for whatever latched while
 *   suppressed (D16.3).
 * - `next` starts as a spread of `previous`, so a PR missing for a poll
 *   (provider hiccup) keeps its last-known state and its reappearance is not
 *   a rising edge. A PR never seen before starts all-false, so a brand-new PR
 *   that already wants your review fires.
 */
const deriveNotificationEvents = (
  previous: NotificationSnapshot | null,
  pullRequests: PullRequest[],
  visibleKeys: ReadonlySet<string>,
): { events: NotificationEvent[]; next: NotificationSnapshot } => {
  const next: NotificationSnapshot = { ...previous };
  const events: NotificationEvent[] = [];

  pullRequests.forEach((pr) => {
    const key = getPullRequestKey(pr);
    const armed = next[key] ?? DISARMED;
    const signals = getPullRequestSignals(pr);

    if (previous !== null && visibleKeys.has(key)) {
      const type = NOTIFICATION_URGENCY.find(
        (signal) => !armed[signal] && signals[signal],
      );

      if (type) {
        events.push({ type, pullRequest: pr });
      }
    }

    next[key] = signals;
  });

  return { events, next };
};

export default deriveNotificationEvents;
