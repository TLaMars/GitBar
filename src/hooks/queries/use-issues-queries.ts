import { useQueries } from "@tanstack/react-query";
import { useContext } from "react";

import { SHOW_ISSUES } from "constants/feature-flag";
import { AccountsContext } from "contexts/accounts";
import useMacState from "hooks/use-mac-state";
import useSelector from "hooks/use-selector";
import { MacState } from "modules/app-module";
import { selectShowIssues } from "store/selectors/settings";

const useIssuesQueries = () => {
  const accounts = useContext(AccountsContext);
  const macState = useMacState();
  const showIssues = useSelector(selectShowIssues);

  return useQueries({
    queries: accounts.map((account) => ({
      queryKey: ["issues", account.id],
      queryFn: async () => account.getIssues(),
      refetchInterval: 900000, // 15 minutes
      enabled: SHOW_ISSUES && showIssues && macState === MacState.UNLOCKED,
    })),
  });
};

export default useIssuesQueries;
