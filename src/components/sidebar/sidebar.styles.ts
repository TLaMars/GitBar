import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ colors, borderRadiuses, spacing }) => ({
  container: {
    alignSelf: "stretch",
    backgroundColor: colors.backgroundSurface,
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
    padding: spacing(1),
    width: 42,
    gap: spacing(1),
    justifyContent: "flex-start",
  },
}));
export default styles;
