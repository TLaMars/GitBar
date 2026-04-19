import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors, borderRadiuses }) => ({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    padding: spacing(6),
    zIndex: 1000,
  },
  card: {
    width: "100%",
    maxWidth: 440,
    backgroundColor: colors.backgroundSurface,
    borderRadius: borderRadiuses.card,
    borderCurve: "continuous",
    padding: spacing(9),
  },
  wrapper: {
    gap: spacing(5),
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
  },
}));

export default styles;
