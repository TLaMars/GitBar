import { EventEmitter, requireNativeModule } from "expo-modules-core";
import { NativeModules } from "react-native";

import {
  AppModule,
  AppModuleType,
  EmitterType,
  LaunchAtLoginModuleType,
} from "./AppModule.types";

const emitter = new EventEmitter(requireNativeModule("AppModule"));

export const AppModuleEmitter: EmitterType = {
  addListener: (eventType, listener) =>
    emitter.addListener(eventType, listener),
  removeAllListeners: (eventType) => emitter.removeAllListeners(eventType),
  removeSubscription: (subscription) =>
    emitter.removeSubscription(subscription),
};

const appModule = requireNativeModule<AppModuleType>("AppModule");
// THIS IS A NATIVE MODULE IN THE macOS FOLDER
const launchAtLoginModule =
  NativeModules.LaunchAtLoginModule as LaunchAtLoginModuleType;

export default {
  closeApp: appModule.closeApp,
  setLaunchAtLoginStatus: launchAtLoginModule.setStatus,
  getLaunchAtLoginStatus: launchAtLoginModule.checkStatus,
} as AppModule;
