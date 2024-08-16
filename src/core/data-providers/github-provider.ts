import { ApolloClient, DefaultContext } from "@apollo/client";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetGitHubViewer from "gql/github/queries/viewer";
import { AccountType } from "models/account";
import { GitHubAuth } from "models/auth";
import Profile, { ProfileStatus } from "models/profile";
import transformGithubPullRequest from "transformers/github-pull-request";
import { gitHubContext } from "utils/apollo-contexts";

import Provider from "./provider";

class GitHubProvider implements Provider {
  id: string;

  auth: GitHubAuth;

  client: ApolloClient<object>;

  #context: DefaultContext;

  #profile?: Profile;

  constructor(id: string, auth: GitHubAuth, client: ApolloClient<object>) {
    this.id = id;
    this.auth = auth;
    this.client = client;
    this.#context = gitHubContext(this.auth.accessToken);
  }

  async profile() {
    if (!this.#profile) {
      const { data, error } = await this.client.query({
        query: QueryGetGitHubViewer,
        context: this.#context,
        fetchPolicy: "no-cache",
      });

      if (error) {
        return {
          id: this.id,
          name: this.auth.userName,
          type: AccountType.GitHub,
          status: ProfileStatus.Invalid,
        };
      }

      this.#profile = {
        id: data.viewer.id,
        avatarUrl: data.viewer.avatarUrl,
        userName: data.viewer.login,
        name: data.viewer.name ?? "",
        type: AccountType.GitHub,
        status: ProfileStatus.Valid,
      };
    }

    return this.#profile;
  }

  async pullRequests() {
    const profile = await this.profile();
    const { data } = await this.client.query({
      query: QueryGetGithubPullRequests,
      context: this.#context,
      fetchPolicy: "no-cache",
    });

    return transformGithubPullRequest(profile, data).filter(
      (pullRequest, index, self) =>
        index === self.findIndex((p) => p.id === pullRequest.id),
    );
  }
}

export default GitHubProvider;
