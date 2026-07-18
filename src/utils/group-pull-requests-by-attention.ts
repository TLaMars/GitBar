import { PullRequest } from "models/pull-request";
import getAttentionReason, {
  AttentionReason,
} from "utils/get-attention-reason";

export type AttentionGroup = {
  reason: AttentionReason;
  data: PullRequest[];
};

const REASON_ORDER: AttentionReason[] = [
  AttentionReason.NeedsWork,
  AttentionReason.ReadyToMerge,
  AttentionReason.BlockedOnYou,
  AttentionReason.Waiting,
];

const groupPullRequestsByAttention = (
  pullRequests: PullRequest[],
): AttentionGroup[] => {
  const byReason = new Map<AttentionReason, PullRequest[]>();

  for (const pullRequest of pullRequests) {
    const reason = getAttentionReason(pullRequest);
    const group = byReason.get(reason);
    if (group) {
      group.push(pullRequest);
    } else {
      byReason.set(reason, [pullRequest]);
    }
  }

  return REASON_ORDER.flatMap((reason) => {
    const data = byReason.get(reason);
    return data ? [{ reason, data }] : [];
  });
};

export const isActionableReason = (reason: AttentionReason): boolean =>
  reason !== AttentionReason.Waiting;

// PRs that need your action now — the tab chip and menu-bar badge share this so
// the two counts always agree.
export const countActionablePullRequests = (
  pullRequests: PullRequest[],
): number =>
  pullRequests.filter((pr) => isActionableReason(getAttentionReason(pr))).length;

export default groupPullRequestsByAttention;
