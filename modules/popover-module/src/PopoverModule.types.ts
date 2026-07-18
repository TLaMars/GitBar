import { EventSubscription } from "expo-modules-core";

export type PopoverState = "Opened" | "Closed";

export type PopoverStateEvent = {
  state: PopoverState;
};

export type PopoverModuleEvents = {
  onPopoverState: (event: PopoverStateEvent) => void;
};

export type PopoverModuleType = {
  open: () => void;
  close: () => void;
  setStatusItemText: (text: string) => void;
  // Hex color (e.g. "#F05069") for the menu-bar urgency dot, or null to clear it.
  setStatusItemTint: (hex: string | null) => void;
  addListener: <K extends keyof PopoverModuleEvents>(
    eventName: K,
    listener: PopoverModuleEvents[K],
  ) => EventSubscription;
  removeAllListeners: (eventName: keyof PopoverModuleEvents) => void;
};
