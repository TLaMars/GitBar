import { createStyleSheet } from "react-native-unistyles";

import { ThemeColor } from "models/theme";

const BADGE_SIZE = 22;
const BORDER_WIDTH = 2;

const styles = createStyleSheet(({ colors }) => ({
  badge: (tone: ThemeColor, backgroundTone: ThemeColor) => ({
    width: BADGE_SIZE,
    height: BADGE_SIZE,
    borderRadius: BADGE_SIZE / 2,
    borderCurve: "continuous",
    borderWidth: BORDER_WIDTH,
    borderColor: colors[tone],
    backgroundColor: colors[backgroundTone],
    alignItems: "center",
    justifyContent: "center",
  }),
}));

export default styles;
