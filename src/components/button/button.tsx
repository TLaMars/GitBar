import React from "react";
import { ActivityIndicator, Pressable, PressableProps } from "react-native";

import Icon, { IconName } from "components/icon/icon";
import Spacer from "components/spacer/spacer";
import Text from "components/text/text";
import { ThemeSpacingScale } from "constants/theme";
import { AnyFunction } from "utils/generics";

import useStyles from "./button.styles";

export type ButtonSize = "xs" | "s" | "m" | "l";

type Props = {
  boldText?: boolean;
  iconLeft?: IconName;
  iconRight?: IconName;
  size?: ButtonSize;
  label: string;
  alignmentLeft?: boolean;
  loading?: boolean;
  onPress?: AnyFunction;
} & PressableProps;

const ICON_SIZE_MAPPING: Record<
  ButtonSize,
  { iconSize: number; iconMargin: ThemeSpacingScale; iconSizeRight?: number }
> = {
  xs: { iconSize: 12, iconMargin: 2 },
  s: { iconSize: 16, iconMargin: 2.5 },
  m: { iconSize: 16, iconMargin: 3 },
  l: { iconSize: 24, iconMargin: 4 },
};

const Button: React.FC<Props> = ({
  boldText = true,
  disabled,
  iconLeft = undefined,
  iconRight = undefined,
  label,
  size = "m",
  loading = false,
  onPress,
  onLongPress,
  ...rest
}) => {
  const $ = useStyles();

  const { iconSize, iconMargin, iconSizeRight } = ICON_SIZE_MAPPING[size];
  const getIconComponent = (iconName: IconName, rightIcon?: boolean) => (
    <Icon
      name={iconName}
      size={rightIcon ? iconSizeRight ?? iconSize : iconSize}
    />
  );

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
        (loading || disabled) && $.disabled,
      ]}
      disabled={loading || disabled}
      onPress={(event) => {
        if (onPress) {
          onPress(event);
        }
      }}
      onLongPress={(event) => {
        if (onLongPress) {
          onLongPress(event);
        }
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    >
      <>
        {iconLeft && (
          <Spacer mr={iconMargin}>{getIconComponent(iconLeft)}</Spacer>
        )}
        {!loading && <Text style={textStyle}>{label}</Text>}
      </>
      {iconRight && (
        <Spacer ml={iconMargin}>{getIconComponent(iconRight, true)}</Spacer>
      )}
      {loading && <ActivityIndicator />}
    </Pressable>
  );
};

export default Button;
