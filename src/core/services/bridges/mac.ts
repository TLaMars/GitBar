import { NativeModules } from "react-native";

const { MacManager } = NativeModules;

export enum MacEvents {
  MacStateChange = "MacStateChange",
}

export enum MacStates {
  Locked = "Locked",
  Unlocked = "Unlocked",
}

const Mac = MacManager;

export default Mac;
