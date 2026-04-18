import React, { memo } from "react";
import { View } from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import Icon, { IconName } from "components/icon/icon";
import { ThemeColor } from "models/theme";

import styles from "./status-badge.styles";

type Props = {
  // Foreground colour — icon and label share this tone.
  tone: ThemeColor;
  // Background tint behind the pill.
  backgroundTone: ThemeColor;
  iconName: IconName;
  label: string;
  // Optional override for the hover tooltip / a11y hint. Defaults to `label`
  // so callers only need to pass it when the short label needs elaboration.
  tooltip?: string;
};

const StatusBadge: React.FC<Props> = ({
  tone,
  backgroundTone,
  iconName,
  label,
  tooltip,
}) => {
  const { styles: $ } = useStyles(styles);
  const tip = tooltip ?? label;

  return (
    <View
      style={$.badge(backgroundTone)}
      tooltip={tip}
      accessibilityLabel={label}
      accessibilityHint={tip}
    >
      <Icon name={iconName} size={12} color={tone} />
      <Body size="xs" color={tone}>
        {label}
      </Body>
    </View>
  );
};

export default memo(StatusBadge);
