import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing, borderRadiuses }) => ({
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
  content: {
    justifyContent: "center",
    alignItems: "center",
    maxWidth: 300,
    marginTop: spacing(6),
  },
}));
export default styles;
