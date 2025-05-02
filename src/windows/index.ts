import createWindowsNavigator from "modules/window-module";
import { WindowStyleMask } from "modules/window-module/src/WindowModule.types";

import Onboarding from "./onboarding/onboarding";

const WindowNavigator = createWindowsNavigator({
  Onboarding: {
    component: Onboarding,
    options: {
      title: "",
      windowStyle: {
        mask: [
          WindowStyleMask.Titled,
          WindowStyleMask.FullSizeContentView,
          WindowStyleMask.Closable,
          WindowStyleMask.Miniaturizable,
        ],
        titlebarAppearsTransparent: true,
        height: 500,
        width: 440,
      },
    },
  },
});

export default WindowNavigator;
