import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors, borderRadiuses }) => ({
  card: {
    overflow: "hidden",
    backgroundColor: colors.backgroundSurface,
    padding: spacing(2),
    paddingLeft: spacing(6),
    borderRadius: borderRadiuses.card,
    borderCurve: "continuous",
    flexDirection: "column",
    gap: spacing(1.5),
    // Always reserve the border so the active state (D5) doesn't shift layout.
    borderWidth: 1,
    borderColor: "transparent",
  },
  cardActive: {
    borderColor: colors.borderActiveCard,
  },
  cardCompact: {
    overflow: "hidden",
    backgroundColor: colors.backgroundSurface,
    padding: spacing(2),
    paddingLeft: spacing(6),
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(2),
  },
  compactTitle: {
    flex: 1,
    minWidth: 0,
  },
  borderLine: (accentColor: keyof typeof colors) => ({
    position: "absolute",
    top: spacing(2.5),
    bottom: spacing(2.5),
    left: spacing(3),
    backgroundColor: colors[accentColor],
    width: 4,
    borderRadius: borderRadiuses.card,
  }),
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    minHeight: spacing(5),
  },
  title: {
    flex: 1,
    minWidth: 0,
  },
  footer: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
  },
  right: {
    flexDirection: "row",
    gap: spacing(2),
    alignItems: "center",
    // Fixed height so swapping comment count ↔ action pills never resizes the
    // card (D5); matches the 24px author avatar on the left.
    minHeight: 24,
  },
  actions: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
  },
  actionButton: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    height: 24,
    paddingHorizontal: spacing(2),
    borderRadius: borderRadiuses.round,
    borderCurve: "continuous",
    backgroundColor: colors.backgroundSecondary,
  },
  info: {
    flexDirection: "row",
    gap: spacing(1.5),
    marginLeft: spacing(5),
    alignItems: "center",
  },
  helper: {
    backgroundColor: colors.backgroundSecondary,
    color: colors.textSecondary,
    position: "absolute",
    width: 200,
    top: 2,
    right: 2,
    padding: spacing(1.5),
    borderRadius: borderRadiuses.sidebar,
    borderCurve: "continuous",
  },
}));

export default styles;
