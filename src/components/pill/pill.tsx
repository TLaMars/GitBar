import React, { ReactNode } from "react";
import { View } from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import Icon, { IconName } from "components/icon/icon";
import { ThemeColor } from "models/theme";

import styles, { PillVariant } from "./pill.styles";

type Props = {
  variant?: PillVariant;
  tone: ThemeColor;
  backgroundTone: ThemeColor;
  iconName?: IconName;
  leading?: ReactNode;
  label?: string;
  tooltip?: string;
};

const ICON_SIZE: Record<PillVariant, number> = {
  pill: 12,
  compact: 14,
  compactBordered: 12,
};

const Pill: React.FC<Props> = ({
  variant = "pill",
  tone,
  backgroundTone,
  iconName,
  leading,
  label,
  tooltip,
}) => {
  const { styles: $, theme } = useStyles(styles, { variant });

  return (
    <View
      style={[
        $.container,
        {
          backgroundColor: theme.colors[backgroundTone],
          borderColor: theme.colors[tone],
        },
      ]}
      tooltip={tooltip}
    >
      {leading ??
        (iconName && (
          <Icon name={iconName} size={ICON_SIZE[variant]} color={tone} />
        ))}
      {variant === "pill" && label != null && (
        <Body size="xs" color={tone}>
          {label}
        </Body>
      )}
    </View>
  );
};

export default Pill;
