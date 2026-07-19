import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import canMergePullRequest from "utils/can-merge-pull-request";
import hasChangesRequested from "utils/has-changes-requested";

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
  | "unresolvedThreadCount"
>;

/**
 * Derives the attention bucket. Priority: your own PR that you must fix >
 * someone else's PR blocked on your review > your own PR you can merge > waiting.
 * The actionable buckets are disjoint (needs-work and ready-to-merge are your own
 * PRs; blocked-on-you is someone else's), so ordering is unambiguous.
 */
const getAttentionReason = (pr: AttentionInput): AttentionReason => {
  const isFailing = pr.ci?.state === CiState.Failure;
  const hasUnresolvedThreads = pr.unresolvedThreadCount > 0;

  if (
    pr.isAuthoredByMe &&
    (pr.hasConflicts ||
      isFailing ||
      hasChangesRequested(pr.reviewers) ||
      hasUnresolvedThreads)
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

  // Your own PR you can merge right now (same gate as the Merge pill). Someone
  // else's mergeable PR is the author's to ship, so it falls through to waiting.
  if (pr.isAuthoredByMe && canMergePullRequest(pr)) {
    return AttentionReason.ReadyToMerge;
  }

  return AttentionReason.Waiting;
};

export default getAttentionReason;
