import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors, borderRadiuses }) => ({
  container: {
    flexDirection: "row",
    alignSelf: "flex-end",
    padding: spacing(0.25),
    backgroundColor: colors.backgroundSurface,
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: spacing(2.5),
    paddingVertical: spacing(1),
  },
  activeButton: {
    backgroundColor: colors.backgroundCtaSecondary,
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
  },
  labelRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing(1),
  },
  countChip: {
    paddingHorizontal: spacing(1.5),
    paddingVertical: spacing(0.25),
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
    backgroundColor: colors.backgroundStatusInfo,
  },
}));

export default styles;
