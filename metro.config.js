const { getDefaultConfig, mergeConfig } = require("@react-native/metro-config");

const {
  withSentryConfig
} = require("@sentry/react-native/metro");

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig();

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
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
  },
};

module.exports = withSentryConfig(mergeConfig(getDefaultConfig(__dirname), config));