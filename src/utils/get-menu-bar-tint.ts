import { THEME_COLORS_DARK } from "constants/theme";
import { PullRequest } from "models/pull-request";
import getAttentionReason, { AttentionReason } from "utils/get-attention-reason";

// Menu-bar tint for the most urgent attention state across your PRs (D15).
// Priority matches getAttentionReason's own resolution.
const TINT_PRIORITY: { reason: AttentionReason; color: string }[] = [
  { reason: AttentionReason.NeedsWork, color: THEME_COLORS_DARK.accentRed },
  {
    reason: AttentionReason.BlockedOnYou,
    color: THEME_COLORS_DARK.accentLightBlue,
  },
  { reason: AttentionReason.ReadyToMerge, color: THEME_COLORS_DARK.accentGreen },
];

/**
 * Returns the hex tint for the most urgent bucket that has any PR, or null when
 * nothing actionable applies (only `waiting` / empty) — i.e. no dot.
 */
const getMenuBarTint = (pullRequests: PullRequest[]): string | null => {
  const reasons = new Set(pullRequests.map(getAttentionReason));
  return TINT_PRIORITY.find(({ reason }) => reasons.has(reason))?.color ?? null;
};

export default getMenuBarTint;
