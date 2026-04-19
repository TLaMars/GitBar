import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ borderRadiuses }) => ({
  image: {
    width: "100%",
    borderRadius: borderRadiuses.card,
    borderCurve: "continuous",
    height: undefined,
    aspectRatio: 315 / 196,
  },
}));
export default styles;
