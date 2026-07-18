import type { IconName } from "components/icon/icon";
import { TranslationKey } from "contexts/intl";
import { ThemeColor } from "models/theme";
import { StatusBadge } from "utils/resolve-status-badge";

export type StatusBadgePresentation = {
  tone: ThemeColor;
  backgroundTone: ThemeColor;
  iconName: IconName;
  labelKey: TranslationKey;
};

/**
 * Visual vocabulary for the single collapsed status badge (D12). The keys match
 * the values returned by `resolveStatusBadge`; the priority itself lives there.
 */
export const STATUS_BADGE_PRESENTATION: Record<
  NonNullable<StatusBadge>,
  StatusBadgePresentation
> = {
  conflicts: {
    tone: "accentOrange",
    backgroundTone: "backgroundStatusWarning",
    iconName: "AlertCircle",
    labelKey: "PullRequestCard/Status/Conflicts",
  },
  changesRequested: {
    tone: "accentRed",
    backgroundTone: "backgroundStatusError",
    iconName: "CrossBold",
    labelKey: "PullRequestCard/Status/ChangesRequested",
  },
  draft: {
    tone: "textSecondary",
    backgroundTone: "backgroundStatusNeutral",
    iconName: "EditPencil",
    labelKey: "PullRequestCard/Status/Draft",
  },
  approved: {
    tone: "accentGreen",
    backgroundTone: "backgroundStatusSuccess",
    iconName: "Check",
    labelKey: "PullRequestCard/Status/Approved",
  },
};
