import { Vote } from "models/attendee";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import canMergePullRequest from "utils/can-merge-pull-request";

/**
 * Viewer-relative "why does this need me" bucket for the "Needs you" tab (D3).
 * These map 1:1 to the D2 sections; `waiting` is the collapsed residual.
 */
export enum AttentionReason {
  NeedsWork = "needsWork",
  ReadyToMerge = "readyToMerge",
  BlockedOnYou = "blockedOnYou",
  Waiting = "waiting",
}

type AttentionInput = Pick<
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
 * Derives the attention bucket. Priority: your own PR that you must fix >
 * someone else's PR blocked on your review > a PR you can merge now > waiting.
 * The buckets are near-disjoint (needs-work is yours; blocked-on-you is others';
 * ready-to-merge requires an approved/clean state), so order only matters for
 * the rare approval-optional PR that is both mergeable and awaiting your review —
 * there, your pending review wins.
 */
const getAttentionReason = (pr: AttentionInput): AttentionReason => {
  const isFailing = pr.ci?.state === CiState.Failure;
  const hasChangesRequested = pr.reviewers.some(
    (reviewer) => reviewer.vote === Vote.Rejected,
  );

  if (
    pr.isAuthoredByMe &&
    (pr.hasConflicts || isFailing || hasChangesRequested)
  ) {
    return AttentionReason.NeedsWork;
  }

  if (
    !pr.isAuthoredByMe &&
    pr.isReviewPendingFromMe &&
    !pr.isDraft &&
    !pr.isFullyApproved
  ) {
    return AttentionReason.BlockedOnYou;
  }

  if (canMergePullRequest(pr)) {
    return AttentionReason.ReadyToMerge;
  }

  return AttentionReason.Waiting;
};

export default getAttentionReason;
