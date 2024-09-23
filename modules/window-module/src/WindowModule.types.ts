export type WindowModuleType = {
  openWindow: (moduleName: string, options: WindowOptions) => Promise<void>;
  closeWindow: (moduleName: string) => Promise<void>;
};

export enum WindowStyleMask {
  Borderless,
  Titled,
  Closable,
  Miniaturizable,
  Resizable,
  UnifiedTitleAndToolbar,
  FullScreen,
  FullSizeContentView,
  UtilityWindow,
  DocModalWindow,
  NonactivatingPanel,
}

export type WindowOptions = {
  title?: string;
  windowStyle?: {
    mask?: WindowStyleMask[];
    height?: number;
    width?: number;
    titlebarAppearsTransparent?: boolean;
  };
};
