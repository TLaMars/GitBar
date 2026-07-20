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
  // rn-macos 0.81 ships the OLD hermesc (rejects ES6 classes, #fields, async arrow/generator
  // funcs). SDK 56 defaults Hermes to the "hermes-stable" profile, which preserves that syntax
  // for a modern hermesc. Force the legacy "hermes-v0" profile so the bundle is downleveled to
  // what this hermesc accepts. Drop once rn-macos ships a modern hermesc.
  presets: [["babel-preset-expo", { unstable_transformProfile: "hermes-v0" }]],
  plugins: [MODULE_RESOLVER],
};
