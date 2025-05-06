import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    flexDirection: "row",
    gap: spacing(3),
    alignItems: "flex-start",
  },
  image: {
    width: 152,
    borderRadius: 4,
    aspectRatio: 112 / 60.44,
  },
  content: {
    marginTop: -spacing(1),
    flex: 1,
  },
}));
export default styles;
