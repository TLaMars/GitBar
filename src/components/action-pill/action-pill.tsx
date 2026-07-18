import { useGuavaClient } from "@guava-analytics/react-native";
import React, { memo } from "react";
import { ActivityIndicator } from "react-native";
import { TouchableOpacity } from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import { IconName } from "components/icon/icon";
import Pill from "components/pill/pill";
import { ThemeColor } from "models/theme";

import styles from "./action-pill.styles";

type Props = {
  analyticsLabel: string;
  iconName: IconName;
  label: string;
  pendingLabel?: string;
  tone: ThemeColor;
  backgroundTone: ThemeColor;
  tooltip?: string;
  pending?: boolean;
  disabled?: boolean;
  onPress: () => void;
};

const ActionPill: React.FC<Props> = ({
  analyticsLabel,
  iconName,
  label,
  pendingLabel,
  tone,
  backgroundTone,
  tooltip,
  pending = false,
  disabled = false,
  onPress,
}) => {
  const { styles: $, theme } = useStyles(styles);
  const client = useGuavaClient();

  const tip = tooltip ?? label;
  const isDisabled = disabled || pending;

  return (
    <TouchableOpacity
      style={isDisabled && $.disabled}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityHint={tip}
      tooltip={tip}
      onPress={() => {
        client.trackEvent("action_pill_clicked", { label: analyticsLabel });
        onPress();
      }}
    >
      <Pill
        variant="pill"
        tone={tone}
        backgroundTone={backgroundTone}
        iconName={pending ? undefined : iconName}
        leading={
          pending ? (
            <ActivityIndicator
              size="small"
              color={theme.colors[tone]}
              style={$.spinner}
            />
          ) : undefined
        }
        label={pending ? (pendingLabel ?? label) : label}
      />
    </TouchableOpacity>
  );
};

export default memo(ActionPill);
