import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingHorizontal: spacing(9),
    paddingTop: spacing(16),
    paddingBottom: spacing(9),
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing(1.5),
  },
  button: {
    minWidth: 80,
  },
}));
export default styles;
