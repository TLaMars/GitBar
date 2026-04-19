import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, borderRadiuses, colors }) => ({
  topContainer: {
    position: "absolute",
    height: "100%",
    top: spacing(2.5),
    left: spacing(2.5),
    right: spacing(2.5),
  },
  message: { flex: 1 },
  toast: {
    borderRadius: borderRadiuses.round,
    padding: spacing(2),
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: colors.backgroundCta,
  },
  error: {
    backgroundColor: colors.backgroundCtaDanger,
  },
  toastTop: {
    flexDirection: "row",
  },
}));

export default styles;
