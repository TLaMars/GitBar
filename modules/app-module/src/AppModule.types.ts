export type AppModuleEvents = {
  onMacStateChange: (event: MacStateChangeEvent) => void;
};

export enum MacState {
  LOCKED = "Locked",
  UNLOCKED = "Unlocked",
}

export type MacStateChangeEvent = {
  state: MacState;
};

export enum DockIconState {
  VISIBLE = "visible",
  HIDDEN = "hidden",
}
