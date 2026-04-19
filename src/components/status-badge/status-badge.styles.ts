import { createStyleSheet } from "react-native-unistyles";

import { ThemeColor } from "models/theme";

const BADGE_SIZE = 22;

const styles = createStyleSheet(({ colors, spacing }) => ({
  badge: (backgroundTone: ThemeColor) => ({
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    borderCurve: "continuous",
    backgroundColor: colors[backgroundTone],
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    paddingHorizontal: spacing(1.5),
  }),
  badgeCompact: (backgroundTone: ThemeColor) => ({
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    borderCurve: "continuous",
    backgroundColor: colors[backgroundTone],
    alignItems: "center",
    justifyContent: "center",
  }),
}));

export default styles;
