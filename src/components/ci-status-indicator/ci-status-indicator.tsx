import React, { memo, useMemo } from "react";
import { Linking } from "react-native";
import { TouchableOpacity } from "react-native-macos";

import { IconName } from "components/icon/icon";
import Pill from "components/pill/pill";
import useTranslation from "hooks/use-translation";
import { CiState, CiStatus } from "models/ci-status";
import { ThemeColor } from "models/theme";
import isAbsoluteUrl from "utils/is-absolute-url";

type Props = {
  ci?: CiStatus;
};

type TooltipKey =
  | "PullRequestCard/CI/TooltipPassing"
  | "PullRequestCard/CI/TooltipFailing"
  | "PullRequestCard/CI/TooltipRunning"
  | "PullRequestCard/CI/TooltipCancelled";

type Presentation = {
  tone: ThemeColor;
  backgroundTone: ThemeColor;
  iconName: IconName;
  tooltipKey: TooltipKey;
};

const PRESENTATIONS: Record<Exclude<CiState, CiState.None>, Presentation> = {
  [CiState.Success]: {
    tone: "accentGreen",
    backgroundTone: "backgroundCiSuccess",
    iconName: "Check",
    tooltipKey: "PullRequestCard/CI/TooltipPassing",
  },
  [CiState.Failure]: {
    tone: "accentRed",
    backgroundTone: "backgroundCiFailure",
    iconName: "CrossBold",
    tooltipKey: "PullRequestCard/CI/TooltipFailing",
  },
  [CiState.Pending]: {
    tone: "accentLightBlue",
    backgroundTone: "backgroundCiPending",
    iconName: "Clock",
    tooltipKey: "PullRequestCard/CI/TooltipRunning",
  },
  [CiState.Cancelled]: {
    tone: "textSecondary",
    backgroundTone: "backgroundCiCancelled",
    iconName: "Ban",
    tooltipKey: "PullRequestCard/CI/TooltipCancelled",
  },
};

const CiStatusIndicator: React.FC<Props> = ({ ci }) => {
  const { t } = useTranslation();

  const presentation = useMemo(() => {
    if (!ci || ci.state === CiState.None) return undefined;
    return PRESENTATIONS[ci.state];
  }, [ci]);

  if (!presentation || !ci) return null;

  const tooltip = t(presentation.tooltipKey);

  const content = (
    <Pill
      variant="compactBordered"
      tone={presentation.tone}
      backgroundTone={presentation.backgroundTone}
      iconName={presentation.iconName}
      tooltip={tooltip}
    />
  );

  // Only wrap in a touchable when we have a real http(s) URL to open.
  // A missing, relative, or malformed URL keeps the badge as a static,
  // non-interactive status glyph.
  const pipelineUrl = isAbsoluteUrl(ci.url) ? ci.url : undefined;
  if (!pipelineUrl) return content;

  return (
    <TouchableOpacity
      accessibilityRole="link"
      tooltip={tooltip}
      onPress={async () => {
        if (await Linking.canOpenURL(pipelineUrl)) {
          await Linking.openURL(pipelineUrl);
        }
      }}
    >
      {content}
    </TouchableOpacity>
  );
};

export default memo(CiStatusIndicator);
