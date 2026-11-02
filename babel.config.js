const MODULE_RESOLVER = [
  "module-resolver",
  {
    alias: {
      assets: "./src/assets",
      components: "./src/components",
      constants: "./src/core/constants",
      contexts: "./src/contexts",
      gql: "./src/core/gql",
      hooks: "./src/hooks",
      layouts: "./src/layouts",
      models: "./src/core/models",
      pages: "./src/pages",
      utils: "./src/utils",
      services: "./src/core/services",
      store: "./src/core/store",
      transformers: "./src/core/transformers",
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".svg"],
    root: ["."],
  },
];

module.exports = {
  // Expo SDK 58 defaults Hermes to the "hermes-stable" profile, which keeps class private
  // fields (#x) for the Hermes that ships with RN 0.88. rn-macos 0.83 bundles hermes-engine
  // 0.14.1, whose hermesc still rejects them ("private properties are not supported"), so
  // force the legacy "hermes-v0" profile to downlevel the bundle. Re-test on each rn-macos bump.
  presets: [["babel-preset-expo", { unstable_transformProfile: "hermes-v0" }]],
  plugins: [MODULE_RESOLVER],
};
