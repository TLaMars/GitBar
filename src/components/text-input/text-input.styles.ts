import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(
  ({
    borderRadiuses,
    colors,
    spacing,
    fontSizes,
    fontFamilies,
    fontWeights,
  }) => ({
    input: {
      padding: spacing(2),
      paddingHorizontal: spacing(2.5),
      borderWidth: 2,
      borderColor: colors.border,
      backgroundColor: colors.backgroundSurface,
      borderRadius: borderRadiuses.round,
      fontSize: fontSizes.input,
      fontFamily: fontFamilies.primary,
      fontWeight: fontWeights.normal,
      color: colors.text,
    },
    error: {
      borderColor: colors.borderDanger,
    },
    valid: {
      borderColor: colors.borderValid,
    },
    wrapper: {
      minWidth: 200,
      gap: spacing(0.5),
    },
  }),
);
export default styles;
