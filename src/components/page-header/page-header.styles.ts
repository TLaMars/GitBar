import { createStyleSheet } from "react-native-unistyles";

const styles = createStyleSheet(({ spacing }) => ({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  poller: {
    marginLeft: spacing(2),
    flexDirection: "row",
    alignItems: "center",
    gap: spacing(1),
  },
}));
export default styles;
