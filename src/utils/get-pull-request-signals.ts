import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import canMergePullRequest from "utils/can-merge-pull-request";
import hasChangesRequested from "utils/has-changes-requested";

/**
 * Notification event types (D16), ordered most → least urgent. When several
 * signals rise on the same PR in one poll, only the most urgent one fires.
 */
export const NOTIFICATION_URGENCY = [
  "conflicts",
  "changesRequested",
  "ciFailed",
  "reviewRequested",
  "readyToMerge",
] as const;

export type NotificationSignal = (typeof NOTIFICATION_URGENCY)[number];

export type PullRequestSignals = Record<NotificationSignal, boolean>;

type SignalInput = Pick<
  PullRequest,
  | "isAuthoredByMe"
  | "isReviewPendingFromMe"
  | "isDraft"
  | "isFullyApproved"
  | "isApprovalRequired"
  | "hasConflicts"
  | "ci"
  | "reviewers"
  | "mergeRef"
>;

/**
 * The viewer-relative signal table behind notifications. Each signal is a
 * *state* — the notification engine turns them into edges. Own-PR signals are
 * gated on authorship so someone else's broken PR stays silent; the reviewer
 * signal mirrors the "Blocked on you" predicate; readyToMerge shares the
 * Merge-pill gate.
 */
const getPullRequestSignals = (pr: SignalInput): PullRequestSignals => ({
  conflicts: pr.isAuthoredByMe && pr.hasConflicts,
  changesRequested: pr.isAuthoredByMe && hasChangesRequested(pr.reviewers),
  ciFailed: pr.isAuthoredByMe && pr.ci?.state === CiState.Failure,
  reviewRequested:
    !pr.isAuthoredByMe &&
    pr.isReviewPendingFromMe &&
    !pr.isDraft &&
    !pr.isFullyApproved,
  readyToMerge: pr.isAuthoredByMe && canMergePullRequest(pr),
});

export default getPullRequestSignals;
