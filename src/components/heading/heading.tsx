import React, { PropsWithChildren } from "react";
import { TextProps, TextStyle } from "react-native";
import { useStyles } from "react-native-unistyles";

import Text from "components/text/text";
import { ThemeColor, ThemeFontSizes } from "models/theme";

import styles from "./heading.styles";

type HeadingSize = "xl" | "l" | "m" | "s" | "xs" | "x2s";
type ThemeHeadingSize = keyof Pick<
  ThemeFontSizes,
  | "headingL"
  | "headingM"
  | "headingS"
  | "headingXL"
  | "headingXS"
  | "headingX2S"
>;
type StyleProps = Pick<TextStyle, "textAlign">;

export type Props = {
  capitalize?: boolean;
  color?: ThemeColor;
  size?: HeadingSize;
  fontSizeIsLineHeight?: boolean;
} & PropsWithChildren &
  Pick<TextProps, "testID" | "numberOfLines" | "onTextLayout"> &
  StyleProps;

const sizeMapping: Record<HeadingSize, ThemeHeadingSize> = {
  xl: "headingXL",
  l: "headingL",
  m: "headingM",
  s: "headingS",
  xs: "headingXS",
  x2s: "headingX2S",
};

const Heading: React.FC<Props> = ({
  capitalize = false,
  children,
  color: colorFromProps,
  size = "xl",
  testID,
  textAlign,
  numberOfLines,
  onTextLayout,
  fontSizeIsLineHeight,
}) => {
  const {
    styles: $,
    theme: { fontSizes, fontWeights, lineHeights, colors },
  } = useStyles(styles);
  const sizeKey = sizeMapping[size];
  const textTransform = capitalize ? "capitalize" : "none";
  const color = colorFromProps ? colors[colorFromProps] : colors.text;

  const fontSize = fontSizes[sizeKey];
  const lineHeight = lineHeights[sizeKey];

  return (
    <Text
      testID={testID}
      onTextLayout={onTextLayout}
      numberOfLines={numberOfLines}
      style={[
        {
          fontSize,
          fontWeight: fontWeights.bold,
          lineHeight: fontSizeIsLineHeight ? fontSize : lineHeight,
          textAlign,
          textTransform,
          color,
        },
        !!numberOfLines && $.numberOfLines,
      ]}
    >
      {children}
    </Text>
  );
};

export default Heading;
