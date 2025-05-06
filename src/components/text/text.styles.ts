import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ colors, fontSizes, fontFamilies }) => ({
  text: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.text,
    color: colors.text,
  },
}));

export default styles;
