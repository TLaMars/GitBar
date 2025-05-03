import { NativeModule, requireNativeModule } from "expo";

import { AppModuleEvents } from "./AppModule.types";

declare class AppModule extends NativeModule<AppModuleEvents> {
  closeApp(): void;
  isLaunchAtLoginEnabled(): Promise<boolean>;
  setLaunchAtLoginEnabled(enabled: boolean): Promise<void>;
  isLaunchAtLoginSupported(): Promise<boolean>;
  showDockIcon(): void;
  hideDockIcon(): void;
  isDockIconVisible(): boolean;
}

export default requireNativeModule<AppModule>("AppModule");
