import { useApolloClient } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

import { PullRequest } from "models/pull-request";
import QueryGetGithubPullRequests from "src/core/gql/github/queries/pull-requests";
import { selectAccounts } from "src/core/store/selectors/accounts";
import transformGithubPullRequest from "src/core/transformers/github-pull-request";

import useSelector from "./use-selector";

const usePullRequests = () => {
  const client = useApolloClient();
  const gitHubAccounts = useSelector(selectAccounts);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>();
  const [loading, setLoading] = useState(false);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);
    const githubPullRequests = (
      await Promise.all(
        gitHubAccounts.map(async (account) => {
          const { data } = await client.query({
            query: QueryGetGithubPullRequests,
            context: {
              headers: {
                Authorization: `bearer ${account.accessToken}`,
              },
            },
          });

          return data;
        }),
      )
    )
      .map(transformGithubPullRequest)
      .flat();

    setLoading(false);
    setPullRequests(githubPullRequests);
  }, [gitHubAccounts, client]);

  useEffect(() => {
    void fetchPullRequests();
  }, [fetchPullRequests]);

  return {
    pullRequests,
    fetchPullRequests,
    loading,
  };
};

export default usePullRequests;
