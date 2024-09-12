import { requireNativeModule } from "expo-modules-core";

import { PopoverModuleType } from "./PopoverModule.types";

// It loads the native module object from the JSI or falls back to
// the bridge module (from NativeModulesProxy) if the remote debugger is on.
export default requireNativeModule<PopoverModuleType>("PopoverModule");
