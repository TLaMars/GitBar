import React, { PropsWithChildren } from "react";
import { StatusBar } from "react-native";
import { Appearance } from "react-native-macos";

import { THEME_DARK, THEME } from "constants/theme";
import useAppearance from "hooks/use-appearance";
/** Gets the theme based on if dark mode is enabled */
const getTheme = (isDark?: boolean) => {
  const themeApp = isDark ? THEME_DARK : THEME;
  return {
    isDark,
    ...themeApp,
  };
};

export const ThemeContext = React.createContext(getTheme());

/** Creates a theme object to provide the app with colors, font sizes, etc. */
const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { isDark } = useAppearance();
  const theme = React.useMemo(() => getTheme(isDark), [isDark]);

  StatusBar.setBarStyle(isDark ? "light-content" : "dark-content");
  Appearance.setColorScheme(isDark ? "dark" : "light");

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
