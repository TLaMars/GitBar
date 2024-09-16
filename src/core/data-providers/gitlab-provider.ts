import { ApolloClient, DefaultContext } from "@apollo/client";

import QueryGetGitLabCurrentUser from "gql/gitlab/queries/current-user";
import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import { AccountType } from "models/account";
import { GitLabAuth } from "models/auth";
import Profile, { ProfileStatus } from "models/profile";
import transformGitLabPullRequest from "transformers/gitlab-pull-request";
import { gitLabContext } from "utils/apollo-contexts";

import Provider from "./provider";

class GitLabProvider implements Provider {
  id: string;

  auth: GitLabAuth;

  client: ApolloClient<object>;

  #context: DefaultContext;

  #profile?: Profile;

  constructor(id: string, auth: GitLabAuth, client: ApolloClient<object>) {
    this.id = id;
    this.auth = auth;
    this.client = client;
    this.#context = gitLabContext(auth.privateToken, auth.domain);
  }

  async profile() {
    if (!this.#profile) {
      const { data, error } = await this.client
        .query({
          query: QueryGetGitLabCurrentUser,
          context: this.#context,
          fetchPolicy: "no-cache",
        })
        .catch((e) => ({ data: null, error: e }));

      if (data === null || data.currentUser === null || error) {
        return {
          id: this.id,
          name: this.auth.userName,
          type: AccountType.GitLab,
          status: ProfileStatus.Invalid,
        };
      }

      const avatarUrl = data.currentUser?.avatarUrl?.includes("https")
        ? data.currentUser.avatarUrl
        : `${this.auth.domain}${data.currentUser?.avatarUrl}`;

      this.#profile = {
        id: data.currentUser?.id ?? "",
        avatarUrl,
        userName: data.currentUser?.username ?? "",
        name: data.currentUser?.name ?? "",
        type: AccountType.GitLab,
        status: data.currentUser ? ProfileStatus.Valid : ProfileStatus.Invalid,
      };
    }

    return this.#profile;
  }

  async pullRequests() {
    const profile = await this.profile();

    if (profile.status === ProfileStatus.Invalid) {
      return [];
    }

    const { data } = await this.client.query({
      query: QueryGetGitLabPullRequests,
      context: this.#context,
      fetchPolicy: "no-cache",
    });

    return transformGitLabPullRequest({
      profile,
      domain: this.auth.domain,
      data,
    }).filter(
      (pullRequest, index, self) =>
        index === self.findIndex((p) => p.id === pullRequest.id),
    );
  }
}

export default GitLabProvider;
