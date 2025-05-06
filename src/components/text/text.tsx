import React from "react";
// eslint-disable-next-line no-restricted-imports
import { StyleSheet, Text as ReactNativeText, TextProps } from "react-native";
import { useStyles } from "react-native-unistyles";

import useFontStyle from "hooks/use-font-style";

import styles from "./text.styles";

const Text: React.FC<TextProps> = ({ children, style, ...rest }) => {
  const { styles: $ } = useStyles(styles);

  const textStyle = useFontStyle({
    ...$.text,
    ...StyleSheet.flatten(style),
  });

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <ReactNativeText style={textStyle} {...rest}>
      {children}
    </ReactNativeText>
  );
};

export default Text;
