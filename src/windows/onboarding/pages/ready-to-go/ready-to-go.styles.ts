import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(() => ({
  wrapper: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderRadius: 8,
    height: undefined,
    aspectRatio: 315 / 170,
  },
}));
export default styles;
