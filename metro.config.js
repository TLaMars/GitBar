const { getSentryExpoConfig } = require("@sentry/react-native/metro");

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * Built on Expo's Metro config (via Sentry's wrapper) so that BOTH bundle
 * paths — the dev server (`expo start`) and the release bundle embedded by
 * the Xcode "Bundle React Native code and images" phase (`expo export:embed`)
 * — resolve `react-native` to `react-native-macos` through SDK 56's
 * `outOfTreePlatforms` experiment (see app.json).
 *
 * The previous `@react-native/metro-config` base only applied to the release
 * bundler, which knew nothing about the macOS platform redirect: release
 * bundles contained BOTH the iOS `react-native` core and `react-native-macos`,
 * crashing at startup ("Cannot read property 'select' of undefined") and
 * shipping black-screen TestFlight builds while dev builds worked.
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = getSentryExpoConfig(__dirname);

// react-native-gesture-handler has no native module linked on macOS, so its
// TurboModule (RNGestureHandlerModule) can't be enforced there. Expo's Metro
// resolver treats macOS as iOS-like and would otherwise bundle
// @react-navigation/stack's native `GestureHandler.ios.js`, which calls
// getEnforcing('RNGestureHandlerModule') and crashes at runtime. Redirect that
// one module to the library's no-op `GestureHandler.js` fallback on macOS — the
// same variant the react-native CLI bundler already resolves. Navigation works;
// only the (macOS-irrelevant) swipe gestures are no-ops.
const expoResolveRequest = config.resolver.resolveRequest;
config.resolver.resolveRequest = (context, moduleName, platform) => {
  // Expo SDK 58 imports a react-native subpath export that only exists from RN 0.84 on;
  // react-native-macos 0.83 lacks it, so serve our mirror (see metro-shims/).
  if (
    /^react-native(-macos)?\/unstable-internals-do-not-use$/.test(moduleName)
  ) {
    return {
      type: "sourceFile",
      filePath: require.resolve(
        "./metro-shims/react-native-unstable-internals.js",
      ),
    };
  }
  const resolved = expoResolveRequest
    ? expoResolveRequest(context, moduleName, platform)
    : context.resolveRequest(context, moduleName, platform);
  if (
    platform === "macos" &&
    resolved?.type === "sourceFile" &&
    typeof resolved.filePath === "string" &&
    resolved.filePath.endsWith(
      "/@react-navigation/stack/lib/module/views/GestureHandler.ios.js",
    )
  ) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    return {
      ...resolved,
      filePath: resolved.filePath.replace(
        "GestureHandler.ios.js",
        "GestureHandler.js",
      ),
    };
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return resolved;
};

// Expo SDK 58 targets RN 0.88, whose package exports a `react-native/asset-registry`
// subpath. react-native-macos 0.83 has no such export, so every image import would fail to
// resolve. Point the asset transformer at the classic registry module, which the
// outOfTreePlatforms alias resolves inside react-native-macos. Drop once rn-macos >= 0.84.
config.transformer.assetRegistryPath =
  "react-native/Libraries/Image/AssetRegistry";
config.transformer.babelTransformerPath = require.resolve(
  "react-native-svg-transformer/expo",
);
// Expo's default leaves inlineRequires off; enable it like expo/orbit's
// menu-bar app does so modules evaluate lazily on first use (faster startup).
// The pre-Expo config set a bare `transformer.inlineRequires` key, which
// modern Metro ignores — this is the honored location.
config.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: true,
    inlineRequires: true,
  },
});
config.resolver.assetExts = config.resolver.assetExts.filter(
  (ext) => ext !== "svg",
);
config.resolver.sourceExts = [...config.resolver.sourceExts, "svg"];

module.exports = config;
