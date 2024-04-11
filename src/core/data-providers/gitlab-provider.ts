import { ApolloClient } from "@apollo/client";

import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import transformGitLabPullRequest from "transformers/gitlab-pull-request";
import { gitLabContext } from "utils/apollo-contexts";

import Provider from "./provider";

class GitLabProvider implements Provider {
  name: string;

  privateToken: string;

  domain: string;

  client: ApolloClient<object>;

  constructor(
    name: string,
    privateToken: string,
    domain: string,
    client: ApolloClient<object>,
  ) {
    this.name = name;
    this.privateToken = privateToken;
    this.domain = domain;
    this.client = client;
  }

  async pullRequests() {
    const { data } = await this.client.query({
      query: QueryGetGitLabPullRequests,
      context: gitLabContext(this.privateToken, this.domain),
      fetchPolicy: "no-cache",
    });

    return transformGitLabPullRequest({ domain: this.domain, data }).filter(
      (pullRequest, index, self) =>
        index === self.findIndex((p) => p.id === pullRequest.id),
    );
  }
}

export default GitLabProvider;
