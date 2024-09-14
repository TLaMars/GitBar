import { Subscription } from "expo-modules-core";

export type AppModuleType = {
  closeApp: () => void;
  enableLaunchAtLogin: (enabled: boolean) => Promise<void>;
};

export enum MacState {
  LOCKED = "Locked",
  UNLOCKED = "Unlocked",
}

export type AppOnMacStateChange = "onMacStateChange";

export type EventEmitter = {
  onMacStateChange: { state: MacState };
};

export type EmitterType = {
  addListener: <T extends keyof EventEmitter>(
    eventType: T,
    listener: (event: EventEmitter[T]) => void,
  ) => Subscription;
  removeAllListeners: (eventType: keyof EventEmitter) => void;
  removeSubscription: (subscription: Subscription) => void;
};
