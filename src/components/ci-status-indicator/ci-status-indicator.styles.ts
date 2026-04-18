import { createStyleSheet } from "react-native-unistyles";

import { ThemeColor } from "models/theme";

const BADGE_SIZE = 22;
const BORDER_WIDTH = 2;

// Same accent colors at low alpha — fills the ring with a soft tint so
// the badge reads as a coloured chip, not just an outline.
const BADGE_BACKGROUND: Partial<Record<ThemeColor, string>> = {
  accentGreen: "rgba(180, 224, 128, 0.18)",
  accentRed: "rgba(240, 80, 105, 0.18)",
  accentLightBlue: "rgba(175, 223, 243, 0.18)",
  textSecondary: "rgba(206, 216, 223, 0.15)",
};

const styles = createStyleSheet(({ colors }) => ({
  badge: (tone: ThemeColor) => ({
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    borderWidth: BORDER_WIDTH,
    borderColor: colors[tone],
    backgroundColor: BADGE_BACKGROUND[tone] ?? "transparent",
    alignItems: "center",
    justifyContent: "center",
  }),
}));

export default styles;
