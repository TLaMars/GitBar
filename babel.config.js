const MODULE_RESOLVER = [
  "module-resolver",
  {
    alias: {
      assets: "./src/assets",
      components: "./src/components",
      constants: "./src/core/constants",
      contexts: "./src/contexts",
      hooks: "./src/hooks",
      models: "./src/core/models",
      pages: "./src/pages",
      utils: "./src/utils",
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".svg"],
    root: ["."],
  },
];

module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [MODULE_RESOLVER, "module:react-native-dotenv"],
};
