import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ borderRadiuses, colors, spacing }) => ({
  button: {
    justifyContent: "center",
    aspectRatio: 1,
    width: "100%",
    alignItems: "center",
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
    padding: spacing(2),
  },
  active: {
    backgroundColor: colors.backgroundSecondary,
  },
}));
export default styles;
