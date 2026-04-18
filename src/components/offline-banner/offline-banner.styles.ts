import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors, borderRadiuses }) => ({
  container: {
    backgroundColor: colors.backgroundCtaDanger,
    paddingVertical: spacing(1),
    paddingHorizontal: spacing(3),
    borderRadius: borderRadiuses.sidebar,
    marginHorizontal: spacing(2.5),
    marginTop: spacing(2),
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(2),
  },
}));

export default styles;
