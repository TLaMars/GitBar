import { useGuavaClient } from "@guava/react-native";
import React from "react";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import Text from "components/text/text";

import useStyles from "./button.styles";

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
  const $ = useStyles();
  const client = useGuavaClient();

  const textStyle = [
    { textAlign: $.text.textAlign },
    size === "l" && $.text.l,
    size === "m" && $.text.m,
    size === "s" && $.text.s,
    size === "xs" && $.text.xs,
    type === "secondary" && $.text.secondary,
    type === "danger" && $.text.danger,
    type === "neutral" && $.text.neutral,
    boldText && $.bold,
  ];

  return (
    <TouchableOpacity
      style={[
        $.button,
        size === "l" && $.button.l,
        size === "m" && $.button.m,
        size === "s" && $.button.s,
        size === "xs" && $.button.xs,
        type === "secondary" && $.button.secondary,
        type === "danger" && $.button.danger,
        type === "neutral" && $.button.neutral,
        disabled && $.disabled,
        style,
      ]}
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
      <Text style={textStyle}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
