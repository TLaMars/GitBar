import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors, borderRadiuses }) => ({
  card: {
    overflow: "hidden",
    backgroundColor: colors.backgroundSurface,
    padding: spacing(2),
    borderRadius: borderRadiuses.card,
    flexDirection: "column",
    gap: spacing(1.5),
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    minHeight: spacing(5),
  },
  footer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    gap: spacing(1),
    alignItems: "center",
  },
}));
export default styles;
