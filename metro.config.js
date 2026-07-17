const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");
const { withSentryConfig } = require("@sentry/react-native/metro");

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig();

// react-native-gesture-handler has no native module linked on macOS, so its
// TurboModule (RNGestureHandlerModule) can't be enforced there. Expo's Metro
// resolver treats macOS as iOS-like and would otherwise bundle
// @react-navigation/stack's native `GestureHandler.ios.js`, which calls
// getEnforcing('RNGestureHandlerModule') and crashes at runtime. Redirect that
// one module to the library's no-op `GestureHandler.js` fallback on macOS — the
// same variant the react-native CLI bundler already resolves. Navigation works;
// only the (macOS-irrelevant) swipe gestures are no-ops.
const macosGestureHandlerResolver = (context, moduleName, platform) => {
  const resolved = context.resolveRequest(context, moduleName, platform);
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

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * The `react-native` -> `react-native-macos` resolver alias and the
 * `getModulesRunBeforeMainModule` override that used to live here are no longer
 * needed: SDK 56's `outOfTreePlatforms` experiment (see app.json) handles macOS
 * module resolution and InitializeCore ordering natively.
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  transformer: {
    experimentalImportSupport: false,
    inlineRequires: true,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"],
    resolveRequest: macosGestureHandlerResolver,
  },
};

module.exports = withSentryConfig(
  mergeConfig(getDefaultConfig(__dirname), config),
);
