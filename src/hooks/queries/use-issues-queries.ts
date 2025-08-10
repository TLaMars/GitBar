import { useQueries } from "@tanstack/react-query";
import { useContext } from "react";

import { AccountsContext } from "contexts/accounts";
import useMacState from "hooks/use-mac-state";
import { MacState } from "modules/app-module";

const useIssuesQueries = () => {
  const accounts = useContext(AccountsContext);
  const macState = useMacState();

  return useQueries({
    queries: accounts.map((account) => ({
      queryKey: ["issues", account.id],
      queryFn: async () => account.getIssues(),
      refetchInterval: 900000, // 15 minutes
      enabled: macState === MacState.UNLOCKED,
    })),
  });
};

export default useIssuesQueries;
