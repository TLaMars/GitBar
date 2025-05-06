import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors, borderRadiuses }) => ({
  errorContainer: {
    padding: spacing(2),
    paddingTop: spacing(1),
    borderRadius: borderRadiuses.input,
    backgroundColor: colors.backgroundCtaDanger,
  },
}));
export default styles;
