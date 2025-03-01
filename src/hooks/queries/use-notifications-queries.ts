import { useQueries } from "@tanstack/react-query";
import { useContext } from "react";

import { AccountsContext } from "contexts/accounts";
import useMacState from "hooks/use-mac-state";
import useSelector from "hooks/use-selector";
import { MacState } from "modules/app-module";
import { selectIsGitNotificationsEnabled } from "store/selectors/user";

const useNotificationsQueries = () => {
  const accounts = useContext(AccountsContext);
  const macState = useMacState();
  const notificationsEnabled = useSelector(selectIsGitNotificationsEnabled);

  return useQueries({
    queries: accounts.map((account) => ({
      queryKey: ["notifications", account.id],
      queryFn: async () => account.getNotifications(),
      refetchInterval: 900000, // 15 minutes
      enabled: macState === MacState.UNLOCKED && !!notificationsEnabled,
    })),
  });
};

export default useNotificationsQueries;
