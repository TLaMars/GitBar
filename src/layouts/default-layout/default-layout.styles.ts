import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    flexDirection: "row",
    gap: spacing(3),
    paddingHorizontal: spacing(2.5),
    flex: 1,
  },
}));
export default styles;
