import { NativeModules } from "react-native";

const { LaunchAtLoginManager } = NativeModules;

const LaunchAtLogin = {
  checkStatus: async () => {
    const status = await LaunchAtLoginManager.checkStatus();
    return status as boolean;
  },
  setStatus: (isEnabled: boolean) => {
    LaunchAtLoginManager.setStatus(isEnabled);
  },
};

export default LaunchAtLogin;
