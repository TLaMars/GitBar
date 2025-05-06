import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    gap: spacing(1),
    flex: 1,
  },
  buttonGroup: {
    flexDirection: "column",
    gap: spacing(1),
  },
}));

export default styles;
