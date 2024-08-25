import { NativeModules } from "react-native";

const { AppManager } = NativeModules;

const App = {
  closeApp: () => {
    AppManager.closeApp();
  },
  setStatusBarText: (text: string) => {
    AppManager.setStatusBarText(text);
  },
  setAppAppearance: (isDark: boolean) => {
    AppManager.setAppAppearance(isDark);
  },
};

export default App;
