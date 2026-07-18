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

export default groupPullRequestsByAttention;
