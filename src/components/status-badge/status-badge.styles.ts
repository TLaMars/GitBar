import { createStyleSheet } from "react-native-unistyles";

import { ThemeColor } from "models/theme";

const BADGE_HEIGHT = 22;

const styles = createStyleSheet(({ colors, spacing }) => ({
  badge: (backgroundTone: ThemeColor) => ({
    height: BADGE_HEIGHT,
    borderRadius: BADGE_HEIGHT / 2,
    backgroundColor: colors[backgroundTone],
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
    paddingHorizontal: spacing(1.5),
  }),
}));

export default styles;
