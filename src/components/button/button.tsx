import React from "react";
import { Pressable, PressableProps } from "react-native";

import Text from "components/text/text";
import { AnyFunction } from "utils/generics";

import useStyles from "./button.styles";

type Props = {
  type?: "neutral" | "danger" | "secondary";
  boldText?: boolean;
  size?: "xs" | "s" | "m" | "l";
  label: string;
  alignmentLeft?: boolean;
  onPress?: AnyFunction;
} & PressableProps;

const Button: React.FC<Props> = ({
  type = "primary",
  boldText = true,
  disabled,
  label,
  size = "m",
  onPress,
  ...rest
}) => {
  const $ = useStyles();

  const textStyle = [
    { textAlign: $.text.textAlign },
    size === "l" && $.text.l,
    size === "m" && $.text.m,
    size === "s" && $.text.s,
    size === "xs" && $.text.xs,
    boldText && $.bold,
  ];

  return (
    <Pressable
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
      ]}
      disabled={disabled}
      onPress={(event) => {
        if (onPress) {
          onPress(event);
        }
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <Text style={textStyle}>{label}</Text>
    </Pressable>
  );
};

export default Button;
