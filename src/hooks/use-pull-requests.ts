import { useApolloClient } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import { PullRequest } from "models/pull-request";
import transformGithubPullRequest from "transformers/github-pull-request";
import transformGitLabPullRequest from "transformers/gitlab-pull-request";
import { gitHubContext, gitLabContext } from "utils/apollo-contexts";

import useAccountsByType from "./use-accounts-by-type";

const usePullRequests = () => {
  const client = useApolloClient();
  const { gitHubAccounts, gitLabAccounts } = useAccountsByType();
  const [pullRequests, setPullRequests] = useState<PullRequest[]>();
  const [loading, setLoading] = useState(false);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);
    const githubPullRequests = (
      await Promise.all(
        gitHubAccounts.map(async (account) => {
          const { data } = await client.query({
            query: QueryGetGithubPullRequests,
            context: gitHubContext(account.accessToken),
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
        gitLabAccounts.map(async (account) => {
          const { data } = await client.query({
            query: QueryGetGitLabPullRequests,
            context: gitLabContext(account.privateToken, account.domain),
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
  }, [gitHubAccounts, gitLabAccounts, client]);

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
