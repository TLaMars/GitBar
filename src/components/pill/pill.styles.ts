import { createStyleSheet } from "react-native-unistyles";

export type PillVariant = "pill" | "compact" | "compactBordered";

const PILL_SIZE = 22;
const BORDER_WIDTH = 2;

const styles = createStyleSheet(({ spacing }) => ({
  container: {
    height: PILL_SIZE,
    borderRadius: PILL_SIZE / 2,
    borderCurve: "continuous",
    alignItems: "center",
    variants: {
      variant: {
        pill: {
          flexDirection: "row",
          gap: spacing(1),
          paddingHorizontal: spacing(1.5),
        },
        compact: {
          width: PILL_SIZE,
          justifyContent: "center",
        },
        compactBordered: {
          width: PILL_SIZE,
          borderWidth: BORDER_WIDTH,
          justifyContent: "center",
        },
      },
    },
  },
}));

export default styles;
