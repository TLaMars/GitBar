// react-native-macos exposes a native `tooltip` prop on View / Pressable /
// TouchableWithoutFeedback (surfaces as a macOS hover tooltip) that its
// TypeScript definitions forget to declare. Augment the module here so
// the prop is type-safe everywhere we use it.
//
// The `import "react-native-macos"` below turns this file into a module,
// so the `declare module` block is treated as augmentation rather than
// a full re-declaration.
import "react-native-macos";

declare module "react-native-macos" {
  // View picks up `tooltip` via the macOS-specific prop bag that
  // ViewProps extends.
  interface ViewPropsMacOS {
    tooltip?: string;
  }

  // TouchableWithoutFeedbackProps has no MacOS-specific bag upstream,
  // so we augment it directly. TouchableOpacity / TouchableHighlight /
  // TouchableNativeFeedback all inherit from it.
  interface TouchableWithoutFeedbackProps {
    tooltip?: string;
  }

  interface PressableProps {
    tooltip?: string;
  }
}
