import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import { PullRequest } from "models/pull-request";

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);

    const result = await Promise.all(
      accounts.map(async (account) => account.pullRequests()),
    );

    const sortedResult = result.flat().sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    });

    setPullRequests(sortedResult);
    setLoading(false);
  }, [accounts]);

  return {
    pullRequests,
    fetchPullRequests,
    loading,
  };
};

export default usePullRequests;
