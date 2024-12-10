import { useEffect, useState } from "react";

import { AppModuleEmitter, MacState } from "modules/app-module";

const useMacState = () => {
  const [state, setState] = useState<MacState>(MacState.UNLOCKED);

  useEffect(() => {
    AppModuleEmitter.addListener("onMacStateChange", (event) => {
      setState(event.state);
    });

    return () => {
      AppModuleEmitter.removeAllListeners("onMacStateChange");
    };
  }, []);

  return state;
};

export default useMacState;
