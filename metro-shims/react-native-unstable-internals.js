/* eslint-disable @typescript-eslint/no-unsafe-return -- untyped RN internals, mirrored 1:1 */
// Expo SDK 58 (built for RN 0.88) imports `react-native/unstable-internals-do-not-use`,
// a subpath export that react-native-macos 0.83 does not have yet. Mirror RN 0.88's
// `src/unstable-internals-do-not-use.js` on top of rn-macos's internal modules.
// metro.config.js redirects the bare import here. Drop once rn-macos ships the export.
module.exports = {
  get AppContainer() {
    return require("react-native-macos/Libraries/ReactNative/AppContainer")
      .default;
  },
  get AssetSourceResolver() {
    return require("react-native-macos/Libraries/Image/AssetSourceResolver")
      .default;
  },
  get customDirectEventTypes() {
    return require("react-native-macos/Libraries/Renderer/shims/ReactNativeViewConfigRegistry")
      .customDirectEventTypes;
  },
  get DevLoadingView() {
    return require("react-native-macos/Libraries/Utilities/DevLoadingView")
      .default;
  },
  get getDevServer() {
    return require("react-native-macos/Libraries/Core/Devtools/getDevServer")
      .default;
  },
  get HMRClient() {
    return require("react-native-macos/Libraries/Utilities/HMRClient").default;
  },
  get NativeExceptionsManager() {
    return require("react-native-macos/Libraries/Core/NativeExceptionsManager")
      .default;
  },
  get NativeRedBox() {
    return require("react-native-macos/Libraries/NativeModules/specs/NativeRedBox")
      .default;
  },
  get NativeSourceCode() {
    return require("react-native-macos/Libraries/NativeModules/specs/NativeSourceCode")
      .default;
  },
  get PressabilityDebugView() {
    return require("react-native-macos/Libraries/Pressability/PressabilityDebug")
      .PressabilityDebugView;
  },
};
