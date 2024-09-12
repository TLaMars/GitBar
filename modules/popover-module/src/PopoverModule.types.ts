export type PopoverModuleType = {
  show: () => void;
  hide: () => void;
  setAppearance: (isDark: boolean) => void;
  setStatusItemText: (text: string) => void;
};
