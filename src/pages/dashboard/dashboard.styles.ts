import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    paddingTop: spacing(2.5),
    gap: spacing(2),
    flex: 1,
    flexDirection: "column",
  },
}));
export default styles;
