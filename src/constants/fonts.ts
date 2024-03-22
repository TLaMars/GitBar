import { FontFamily, FontStyles } from "models/font";

/* All fonts mapped to their resource */
export const FONT_RESOURCES = {
  /* eslint-disable global-require */
  "Rubik-Light": require("../assets/fonts/Rubik-Light.ttf"),
  "Rubik-LightItalic": require("../assets/fonts/Rubik-LightItalic.ttf"),
  "Rubik-Regular": require("../assets/fonts/Rubik-Regular.ttf"),
  "Rubik-RegularItalic": require("../assets/fonts/Rubik-RegularItalic.ttf"),
  "Rubik-Medium": require("../assets/fonts/Rubik-Medium.ttf"),
  "Rubik-MediumItalic": require("../assets/fonts/Rubik-MediumItalic.ttf"),
  "Rubik-SemiBold": require("../assets/fonts/Rubik-SemiBold.ttf"),
  "Rubik-SemiBoldItalic": require("../assets/fonts/Rubik-SemiBoldItalic.ttf"),
  "Rubik-Bold": require("../assets/fonts/Rubik-Bold.ttf"),
  "Rubik-BoldItalic": require("../assets/fonts/Rubik-BoldItalic.ttf"),
  "Rubik-ExtraBold": require("../assets/fonts/Rubik-ExtraBold.ttf"),
  "Rubik-ExtraBoldItalic": require("../assets/fonts/Rubik-ExtraBoldItalic.ttf"),
  "Rubik-Black": require("../assets/fonts/Rubik-Black.ttf"),
  "Rubik-BlackItalic": require("../assets/fonts/Rubik-BlackItalic.ttf"),
  /* eslint-enable global-require */
} as const;

/* Font mapping for all fonts with the available styles and weights */
export const FONT_MAPPING: Record<
  FontFamily,
  FontStyles<keyof typeof FONT_RESOURCES>
> = {
  Rubik: {
    normal: {
      300: "Rubik-Light",
      400: "Rubik-Regular",
      500: "Rubik-Medium",
      600: "Rubik-SemiBold",
      700: "Rubik-Bold",
      800: "Rubik-ExtraBold",
      900: "Rubik-Black",
    },
    italic: {
      300: "Rubik-LightItalic",
      400: "Rubik-RegularItalic",
      500: "Rubik-MediumItalic",
      600: "Rubik-SemiBoldItalic",
      700: "Rubik-BoldItalic",
      800: "Rubik-ExtraBoldItalic",
      900: "Rubik-BlackItalic",
    },
  },
};
