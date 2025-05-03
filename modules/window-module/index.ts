import { AppRegistry } from "react-native";

import AppModule from "modules/app-module";

import WindowModule from "./src/WindowModule";
import {
  NativeWindowOptions,
  WindowOptions,
  WindowsConfig,
  WindowStyleMask,
} from "./src/WindowModule.types";

function getWindowStyleMaskValue(mask: WindowStyleMask) {
  switch (mask) {
    case WindowStyleMask.Borderless:
      return WindowModule.STYLE_MASK_BORDERLESS;
    case WindowStyleMask.Titled:
      return WindowModule.STYLE_MASK_TITLED;
    case WindowStyleMask.Closable:
      return WindowModule.STYLE_MASK_CLOSABLE;
    case WindowStyleMask.Miniaturizable:
      return WindowModule.STYLE_MASK_MINIATURIZABLE;
    case WindowStyleMask.Resizable:
      return WindowModule.STYLE_MASK_RESIZABLE;
    case WindowStyleMask.UnifiedTitleAndToolbar:
      return WindowModule.STYLE_MASK_UNIFIED_TITLE_AND_TOOLBAR;
    case WindowStyleMask.FullScreen:
      return WindowModule.STYLE_MASK_FULL_SCREEN;
    case WindowStyleMask.FullSizeContentView:
      return WindowModule.STYLE_MASK_FULL_SIZE_CONTENT_VIEW;
    case WindowStyleMask.UtilityWindow:
      return WindowModule.STYLE_MASK_UTILITY_WINDOW;
    case WindowStyleMask.DocModalWindow:
      return WindowModule.STYLE_MASK_DOC_MODAL_WINDOW;
    case WindowStyleMask.NonactivatingPanel:
      return WindowModule.STYLE_MASK_NONACTIVATING_PANEL;
    default:
      return WindowModule.STYLE_MASK_BORDERLESS;
  }
}

function convertMaskArrayToBitwiseOR(windowMask: WindowStyleMask[]) {
  return windowMask.reduce(
    // eslint-disable-next-line no-bitwise
    (result, mask) => result | getWindowStyleMaskValue(mask),
    0,
  );
}

function convertOptionsToNative(options?: WindowOptions): NativeWindowOptions {
  if (!options?.windowStyle?.mask) {
    return options as NativeWindowOptions;
  }

  const result = {
    ...options,
    windowStyle: {
      ...options.windowStyle,
      mask: convertMaskArrayToBitwiseOR(options.windowStyle.mask),
    },
  };

  return result;
}

function createWindowsNavigator<T extends WindowsConfig>(config: T) {
  Object.entries(config).forEach(([key, value]) => {
    AppRegistry.registerComponent(key, () => value.component);
  });

  // Store callbacks for each window - using a simple Map with window name as key and callback as value
  const windowCallbacks = new Map<keyof T, () => void>();

  const closeWindow = async (window: keyof T) => {
    await WindowModule.closeWindow(window.toString());
    AppModule.hideDockIcon();
    windowCallbacks.get(window)?.();
  };

  const subscribeToWindowClose = () => {
    const subscription = WindowModule.addListener(
      "onWindowClose",
      async ({ moduleName }) => {
        await closeWindow(moduleName);
      },
    );

    return subscription;
  };

  return {
    open: async (window: keyof T) => {
      await WindowModule.openWindow(
        String(window),
        convertOptionsToNative(config[window].options),
      );
      AppModule.showDockIcon();
      subscribeToWindowClose();
    },
    setCloseCallback: (window: keyof T, callback: () => void) => {
      windowCallbacks.set(window.toString(), callback);
    },
    close: closeWindow,
  };
}

export default createWindowsNavigator;
