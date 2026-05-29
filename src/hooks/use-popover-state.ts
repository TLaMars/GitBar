import { useEffect, useState } from "react";

import PopoverModule from "modules/popover-module";
import { PopoverStateEvent } from "modules/popover-module/src/PopoverModule.types";

export enum PopoverState {
  OPEN = "Opened",
  CLOSED = "Closed",
}

const usePopoverState = () => {
  const [state, setState] = useState<PopoverState>(PopoverState.OPEN);

  useEffect(() => {
    const subscription = PopoverModule.addListener(
      "onPopoverState",
      ({ state: popoverState }: PopoverStateEvent) => {
        setState(popoverState as PopoverState);
      },
    );

    return () => {
      subscription.remove();
    };
  }, []);

  return state;
};

export default usePopoverState;
