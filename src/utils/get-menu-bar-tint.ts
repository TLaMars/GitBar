import { PullRequest } from "models/pull-request";
import getAttentionReason, {
  AttentionReason,
} from "utils/get-attention-reason";

const TINT_PRIORITY: { reason: AttentionReason; color: string }[] = [
  { reason: AttentionReason.NeedsWork, color: "#F05069" },
  { reason: AttentionReason.BlockedOnYou, color: "#F59E0B" },
  { reason: AttentionReason.ReadyToMerge, color: "#3FB950" },
];

const getMenuBarTint = (pullRequests: PullRequest[]): string | null => {
  const reasons = new Set(pullRequests.map(getAttentionReason));
  return TINT_PRIORITY.find(({ reason }) => reasons.has(reason))?.color ?? null;
};

export default getMenuBarTint;
