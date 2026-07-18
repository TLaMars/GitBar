import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  list: {
    gap: spacing(2),
    paddingBottom: spacing(0.5),
  },
  disclosure: {
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
  },
  chevron: (expanded: boolean) => ({
    transform: [{ rotate: expanded ? "90deg" : "0deg" }],
  }),
}));
export default styles;
