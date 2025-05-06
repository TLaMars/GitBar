import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    flex: 1,
    flexDirection: "row",
    gap: spacing(3),
    paddingHorizontal: spacing(2.5),
  },
}));
export default styles;
