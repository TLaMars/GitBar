import React from "react";
import { TextInput as RNTextInput, TextInputProps, View } from "react-native";

import Body from "components/body/body";
import useFontStyle from "hooks/use-font-style";
import useTheme from "hooks/use-theme";

import useStyles from "./text-input.styles";

type Props = {
  label: string;
} & TextInputProps;

const TextInput: React.FC<Props> = ({ label, style, ...restProps }) => {
  const $ = useStyles();
  const { fontFamilies, fontWeights, colors } = useTheme();

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
        style={[$.input, fontStyle, style]}
      />
    </View>
  );
};

export default TextInput;
