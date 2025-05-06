import { useGuavaClient } from "@guava-analytics/react-native";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";
import { useStyles } from "react-native-unistyles";

import Text from "components/text/text";

import styles from "./button.styles";

export type ButtonType = "neutral" | "danger" | "secondary";

type Props = {
  analyticsLabel: string;
  type?: ButtonType;
  boldText?: boolean;
  size?: "xs" | "s" | "m" | "l";
  label: string;
  alignmentLeft?: boolean;
} & TouchableOpacityProps;

const Button: React.FC<Props> = ({
  analyticsLabel,
  type = "neutral",
  boldText = true,
  disabled,
  label,
  size = "m",
  style,
  onPress,
  ...rest
}) => {
  const { styles: $ } = useStyles(styles, {
    type,
    size,
  });

  const client = useGuavaClient();

  return (
    <TouchableOpacity
      style={[$.button, disabled && $.disabled, style]}
      disabled={disabled}
      onPress={(e) => {
        onPress?.(e);
        client.trackEvent("button_clicked", {
          label: analyticsLabel,
        });
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <Text
        style={[{ textAlign: $.text.textAlign }, $.text, boldText && $.bold]}
      >
        {label}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
