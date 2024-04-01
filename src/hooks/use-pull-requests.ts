import { useApolloClient } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import { AccountType } from "models/account";
import { PullRequest } from "models/pull-request";
import { selectAccounts } from "store/selectors/accounts";
import transformGithubPullRequest from "transformers/github-pull-request";
import transformGitLabPullRequest from "transformers/gitlab-pull-request";

import useSelector from "./use-selector";

const usePullRequests = () => {
  const client = useApolloClient();
  const accounts = useSelector(selectAccounts);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>();
  const [loading, setLoading] = useState(false);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);
    const githubPullRequests = (
      await Promise.all(
        [...accounts, ...accounts]
          .filter(({ type }) => type === AccountType.GitHub)
          .map(async (account) => {
            const { data } = await client.query({
              query: QueryGetGithubPullRequests,
              context: {
                uri: account.endpoint,
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
      .flat()
      .filter(
        (pullRequest, index, self) =>
          index === self.findIndex((p) => p.id === pullRequest.id),
      );

    const gitlabPullRequests = (
      await Promise.all(
        accounts
          .filter(({ type }) => type === AccountType.GitLab)
          .map(async (account) => {
            const { data } = await client.query({
              query: QueryGetGitLabPullRequests,
              context: {
                uri: account.endpoint,
                headers: {
                  "Private-Token": account.accessToken,
                },
              },
            });

            return {
              domain: account.domain,
              data,
            };
          }),
      )
    )
      .map(transformGitLabPullRequest)
      .flat()
      .filter(
        (pullRequest, index, self) =>
          index === self.findIndex((p) => p.id === pullRequest.id),
      );

    setLoading(false);
    setPullRequests(
      [...githubPullRequests, ...gitlabPullRequests].sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        return 0;
      }),
    );
  }, [accounts, client]);

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
