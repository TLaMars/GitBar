// SVGR config consumed by react-native-svg-transformer (merged over its defaults).
//
// Why this exists: on macOS + the new architecture (Fabric), react-native-svg does
// not resolve the SVG `currentColor` keyword. The `color` prop set on the root <Svg>
// never reaches the native view's color (RCTUIColorFromSharedColor yields nil on
// macOS), so `stroke="currentColor"` / `fill="currentColor"` fall back to black and
// every <Icon> renders black regardless of the theme color passed in. Solid colors
// DO render correctly, so we rewrite `currentColor` to the component's `color` prop at
// transform time — each path then gets an explicit solid color and bypasses the broken
// native currentColor resolution entirely. Drop this once react-native-svg fixes
// currentColor on macOS Fabric.
module.exports = {
  replaceAttrValues: {
    currentColor: "{props.color}",
  },
};
