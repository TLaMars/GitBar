import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ borderRadiuses, colors }) => ({
  button: {
    justifyContent: "center",
    aspectRatio: 1,
    alignItems: "center",
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
  },
  danger: {
    backgroundColor: colors.backgroundCtaDanger,
  },
  secondary: {
    backgroundColor: colors.backgroundCtaSecondary,
  },
  neutral: {
    backgroundColor: colors.backgroundCta,
  },
}));
export default styles;
