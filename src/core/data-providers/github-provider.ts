import { ApolloClient } from "@apollo/client";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import transformGithubPullRequest from "transformers/github-pull-request";
import { gitHubContext } from "utils/apollo-contexts";

import Provider from "./provider";

class GitHubProvider implements Provider {
  name: string;

  token: string;

  client: ApolloClient<object>;

  constructor(name: string, token: string, client: ApolloClient<object>) {
    this.name = name;
    this.token = token;
    this.client = client;
  }

  async pullRequests() {
    const { data } = await this.client.query({
      query: QueryGetGithubPullRequests,
      context: gitHubContext(this.token),
      fetchPolicy: "no-cache",
    });

    return transformGithubPullRequest(data).filter(
      (pullRequest, index, self) =>
        index === self.findIndex((p) => p.id === pullRequest.id),
    );
  }
}

export default GitHubProvider;
