import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(() => ({
  image: {
    width: "100%",
    borderRadius: 8,
    height: undefined,
    aspectRatio: 315 / 170,
  },
}));
export default styles;
