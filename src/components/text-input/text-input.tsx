import React from "react";
import {
  TextInput as RNTextInput,
  TextInputProps,
  View,
} from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import useFontStyle from "hooks/use-font-style";

import styles from "./text-input.styles";

type Props = {
  label: string;
  state?: "neutral" | "error" | "valid";
  message?: string;
} & TextInputProps;

const TextInput: React.FC<Props> = ({
  label,
  style,
  state = "neutral",
  message,
  ...restProps
}) => {
  const {
    styles: $,
    theme: { fontFamilies, fontWeights, colors },
  } = useStyles(styles);

  const fontStyle = useFontStyle({
    fontFamily: fontFamilies.primary,
    fontWeight: fontWeights.normal,
  });

  return (
    <View style={$.wrapper}>
      <Body size="xs">{label}</Body>
      <RNTextInput
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...restProps}
        numberOfLines={1}
        placeholderTextColor={colors.textSecondary}
        enableFocusRing={false}
        style={[
          $.input,
          fontStyle,
          style,
          state === "error" && $.error,
          state === "valid" && $.valid,
        ]}
      />
      {message && (
        <Body size="x2s" bold color={state === "error" ? "textDanger" : "text"}>
          {message}
        </Body>
      )}
    </View>
  );
};

export default TextInput;
