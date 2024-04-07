import { useApolloClient } from "@apollo/client";
import { useCallback, useEffect, useState } from "react";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import { PullRequest } from "models/pull-request";
import AzureProvider from "src/core/data-providers/azure-provider";
import transformGithubPullRequest from "transformers/github-pull-request";
import transformGitLabPullRequest from "transformers/gitlab-pull-request";
import { gitHubContext, gitLabContext } from "utils/apollo-contexts";

import useAccountsByType from "./use-accounts-by-type";

const usePullRequests = () => {
  const client = useApolloClient();
  const { gitHubAccounts, gitLabAccounts, azureAccounts } = useAccountsByType();
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
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

    const azureProviders = azureAccounts.map(
      ({ organization, token, userName }) =>
        new AzureProvider(organization, token, userName),
    );

    const azurePullRequests = (
      await Promise.all(
        azureProviders.map(async (provider) => provider.pullRequests()),
      )
    )
      .flat()
      .filter(
        (pullRequest, index, self) =>
          index === self.findIndex((p) => p.id === pullRequest.id),
      );

    setLoading(false);
    setPullRequests(
      [...githubPullRequests, ...gitlabPullRequests, ...azurePullRequests].sort(
        (a, b) => {
          if (a.createdAt < b.createdAt) {
            return 1;
          }
          if (a.createdAt > b.createdAt) {
            return -1;
          }
          return 0;
        },
      ),
    );
  }, [gitHubAccounts, gitLabAccounts, client, azureAccounts]);

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
