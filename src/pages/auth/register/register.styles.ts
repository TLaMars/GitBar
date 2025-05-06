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
    maxWidth: 350,
    flexDirection: "row",
    gap: spacing(1),
  },
  input: {
    width: 350,
  },
}));

export default styles;
