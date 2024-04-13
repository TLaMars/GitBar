import { ApolloClient, DefaultContext } from "@apollo/client";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetViewer from "gql/github/queries/viewer";
import { AccountType } from "models/account";
import { GitHubAuth } from "models/auth";
import Profile from "models/profile";
import transformGithubPullRequest from "transformers/github-pull-request";
import { gitHubContext } from "utils/apollo-contexts";

import Provider from "./provider";

class GitHubProvider implements Provider {
  auth: GitHubAuth;

  client: ApolloClient<object>;

  #context: DefaultContext;

  #profile?: Profile;

  constructor(auth: GitHubAuth, client: ApolloClient<object>) {
    this.auth = auth;
    this.client = client;
    this.#context = gitHubContext(this.auth.accessToken);
  }

  async profile() {
    if (!this.#profile) {
      const { data } = await this.client.query({
        query: QueryGetViewer,
        context: this.#context,
        fetchPolicy: "no-cache",
      });

      this.#profile = {
        id: data.viewer.id,
        avatarUrl: data.viewer.avatarUrl,
        userName: data.viewer.login,
        name: data.viewer.name ?? "",
        type: AccountType.GitHub,
      };
    }

    return this.#profile;
  }

  async pullRequests() {
    const { data } = await this.client.query({
      query: QueryGetGithubPullRequests,
      context: this.#context,
      fetchPolicy: "no-cache",
    });

    return transformGithubPullRequest(data).filter(
      (pullRequest, index, self) =>
        index === self.findIndex((p) => p.id === pullRequest.id),
    );
  }
}

export default GitHubProvider;
