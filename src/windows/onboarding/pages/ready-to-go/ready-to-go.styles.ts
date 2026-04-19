import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ borderRadiuses }) => ({
  wrapper: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    borderRadius: borderRadiuses.card,
    borderCurve: "continuous",
    height: undefined,
    aspectRatio: 315 / 170,
  },
}));
export default styles;
