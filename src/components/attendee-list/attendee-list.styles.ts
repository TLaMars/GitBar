import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ borderRadiuses, spacing }) => ({
  stack: {
    flexDirection: "row",
    marginRight: spacing(2),
    alignItems: "center",
  },
  container: (size: number) => ({
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -1 * (size - spacing(4)),
  }),
  seperator: (size: number) => ({
    borderRadius: borderRadiuses.round,
    width: size + 2,
    height: size + 2,
  }),
  icon: (size: number) => ({
    marginLeft: -1 * size,
  }),
}));

export default styles;
