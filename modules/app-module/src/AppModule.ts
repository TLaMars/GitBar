import { EventEmitter, requireNativeModule } from "expo-modules-core";

import { AppModuleType, EmitterType } from "./AppModule.types";

const emitter = new EventEmitter(requireNativeModule("AppModule"));

export const AppModuleEmitter: EmitterType = {
  addListener: (eventType, listener) =>
    emitter.addListener(eventType, listener),
  removeAllListeners: (eventType) => emitter.removeAllListeners(eventType),
  removeSubscription: (subscription) =>
    emitter.removeSubscription(subscription),
};

export default requireNativeModule<AppModuleType>("AppModule");
