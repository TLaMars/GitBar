import { UnistylesRegistry } from "react-native-unistyles";

import { THEME } from "constants/theme";
import { Theme } from "models/theme";

type AppThemes = {
  dark: Theme;
};

// override library types
declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
}

UnistylesRegistry.addThemes({
  dark: THEME,
});

UnistylesRegistry.addConfig({
  initialTheme: "dark",
});
