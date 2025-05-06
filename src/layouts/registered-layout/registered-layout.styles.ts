import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginRight: spacing(16),
    paddingVertical: spacing(2.5),
  },
}));
export default styles;
