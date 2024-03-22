const MODULE_RESOLVER = [
  "module-resolver",
  {
    alias: {
      app: "./app",
      assets: "./src/assets",
      components: "./src/components",
      constants: "./src/constants",
      contexts: "./src/contexts",
      hooks: "./src/hooks",
      models: "./src/models",
      pages: "./src/pages",
      utils: "./src/utils",
    },
    extensions: [".ts", ".tsx", ".js", ".json", ".svg"],
    root: ["."],
  },
];

module.exports = {
  presets: ["module:@react-native/babel-preset"],
  plugins: [MODULE_RESOLVER],
};
