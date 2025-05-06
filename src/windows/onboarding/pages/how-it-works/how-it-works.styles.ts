import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  wrapper: {
    gap: spacing(5),
  },
}));
export default styles;
