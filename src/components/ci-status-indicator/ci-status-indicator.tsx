import React, { memo, useMemo } from "react";
import { Linking } from "react-native";
import { TouchableOpacity, View } from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import Icon, { IconName } from "components/icon/icon";
import useTranslation from "hooks/use-translation";
import { CiState, CiStatus } from "models/ci-status";
import { ThemeColor } from "models/theme";
import isAbsoluteUrl from "utils/is-absolute-url";

import styles from "./ci-status-indicator.styles";

type Props = {
  ci?: CiStatus;
};

type TooltipKey =
  | "PullRequestCard/CI/TooltipPassing"
  | "PullRequestCard/CI/TooltipFailing"
  | "PullRequestCard/CI/TooltipRunning"
  | "PullRequestCard/CI/TooltipCancelled";

type A11yKey =
  | "PullRequestCard/CI/Passing"
  | "PullRequestCard/CI/Failing"
  | "PullRequestCard/CI/Running"
  | "PullRequestCard/CI/Cancelled";

type Presentation = {
  tone: ThemeColor;
  iconName: IconName;
  tooltipKey: TooltipKey;
  a11yKey: A11yKey;
};

const PRESENTATIONS: Record<Exclude<CiState, CiState.None>, Presentation> = {
  [CiState.Success]: {
    tone: "accentGreen",
    iconName: "Check",
    tooltipKey: "PullRequestCard/CI/TooltipPassing",
    a11yKey: "PullRequestCard/CI/Passing",
  },
  [CiState.Failure]: {
    tone: "accentRed",
    iconName: "CrossBold",
    tooltipKey: "PullRequestCard/CI/TooltipFailing",
    a11yKey: "PullRequestCard/CI/Failing",
  },
  [CiState.Pending]: {
    tone: "accentLightBlue",
    iconName: "Clock",
    tooltipKey: "PullRequestCard/CI/TooltipRunning",
    a11yKey: "PullRequestCard/CI/Running",
  },
  [CiState.Cancelled]: {
    tone: "textSecondary",
    iconName: "Ban",
    tooltipKey: "PullRequestCard/CI/TooltipCancelled",
    a11yKey: "PullRequestCard/CI/Cancelled",
  },
};

const CiStatusIndicator: React.FC<Props> = ({ ci }) => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();

  const presentation = useMemo(() => {
    if (!ci || ci.state === CiState.None) return undefined;
    return PRESENTATIONS[ci.state];
  }, [ci]);

  if (!presentation || !ci) return null;

  const tooltip = t(presentation.tooltipKey);
  const a11y = t(presentation.a11yKey);

  const content = (
    <View
      style={$.badge(presentation.tone)}
      accessibilityLabel={a11y}
      accessibilityHint={tooltip}
      tooltip={tooltip}
    >
      <Icon name={presentation.iconName} size={12} color={presentation.tone} />
    </View>
  );

  // Only wrap in a touchable when we have a real http(s) URL to open.
  // A missing, relative, or malformed URL keeps the badge as a static,
  // non-interactive status glyph.
  const pipelineUrl = isAbsoluteUrl(ci.url) ? ci.url : undefined;
  if (!pipelineUrl) return content;

  return (
    <TouchableOpacity
      accessibilityRole="link"
      accessibilityLabel={a11y}
      accessibilityHint={tooltip}
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
