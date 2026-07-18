import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(() => ({
  disabled: {
    opacity: 0.6,
  },
  spinner: {
    width: 12,
    height: 12,
    transform: [{ scale: 0.6 }],
  },
}));

export default styles;
