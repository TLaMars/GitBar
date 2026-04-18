import { useQueries } from "@tanstack/react-query";
import { useContext } from "react";

import { AccountsContext } from "contexts/accounts";
import useMacState from "hooks/use-mac-state";
import useSelector from "hooks/use-selector";
import { MacState } from "modules/app-module";
import { selectRefreshIntervalMinutes } from "store/selectors/settings";

const usePullRequestsQueries = () => {
  const accounts = useContext(AccountsContext);
  const macState = useMacState();
  const refreshIntervalMinutes = useSelector(selectRefreshIntervalMinutes);

  return useQueries({
    queries: accounts.map((account) => ({
      queryKey: ["pull-requests", account.id],
      queryFn: async () => account.getPullRequests(),
      refetchInterval: refreshIntervalMinutes * 60 * 1000,
      enabled: macState === MacState.UNLOCKED,
    })),
  });
};

export default usePullRequestsQueries;
