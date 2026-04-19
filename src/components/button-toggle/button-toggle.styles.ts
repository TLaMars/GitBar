import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors, borderRadiuses }) => ({
  container: {
    flexDirection: "row",
    padding: spacing(0.25),
    backgroundColor: colors.backgroundSurface,
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  activeButton: {
    backgroundColor: colors.backgroundCtaSecondary,
    paddingVertical: spacing(1),
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
  },
}));

export default styles;
