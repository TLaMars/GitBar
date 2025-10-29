import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, colors }) => ({
  container: {
    height: spacing(12),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  border: {
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  toggle: {
    marginRight: spacing(0.5),
  },
}));
export default styles;
