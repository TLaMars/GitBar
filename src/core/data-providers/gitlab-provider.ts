import { ApolloClient, DefaultContext } from "@apollo/client";

import QueryGetGitLabCurrentUser from "gql/gitlab/queries/current-user";
import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import { AccountType } from "models/account";
import { GitLabAuth } from "models/auth";
import Profile from "models/profile";
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
      const { data } = await this.client.query({
        query: QueryGetGitLabCurrentUser,
        context: this.#context,
        fetchPolicy: "no-cache",
      });

      this.#profile = {
        id: data.currentUser?.id ?? "",
        avatarUrl: `${this.auth.domain}${data.currentUser?.avatarUrl}`,
        userName: data.currentUser?.username ?? "",
        name: data.currentUser?.name ?? "",
        type: AccountType.GitLab,
      };
    }

    return this.#profile;
  }

  async pullRequests() {
    const profile = await this.profile();
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
