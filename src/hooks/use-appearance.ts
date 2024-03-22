import { useEffect, useState } from "react";
import { useColorScheme } from "react-native";

export type AppearanceType = "light" | "dark" | "auto";

const useAppearance = () => {
  const [isDark, setIsDark] = useState(false);
  const appearance: AppearanceType = "auto";
  const colorScheme = useColorScheme();

  useEffect(() => {
    setIsDark(colorScheme === "dark");
  }, [colorScheme]);

  return { isDark, appearance };
};

export default useAppearance;
