import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  list: {
    gap: spacing(2),
    paddingBottom: spacing(0.5),
  },
}));
export default styles;
