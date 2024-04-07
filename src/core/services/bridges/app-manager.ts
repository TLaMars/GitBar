import { NativeModules } from "react-native";

const { AppManager } = NativeModules;

const App = {
  closeApp: () => {
    AppManager.closeApp();
  },
  setStatusBarText: (text: string) => {
    AppManager.setStatusBarText(text);
  },
};

export default App;
