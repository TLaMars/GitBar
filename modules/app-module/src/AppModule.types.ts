export type AppModuleType = {
  closeApp: () => void;
  enableLaunchAtLogin: (enabled: boolean) => Promise<void>;
};
