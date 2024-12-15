import { ApolloClient } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

import QueryGetGitLabCurrentUser from "gql/gitlab/queries/current-user";
import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import { AccountType } from "models/account";
import { GitLabAuth } from "models/auth";
import Profile, { AccountState } from "models/profile";
import transformGitLabPullRequest from "transformers/gitlab/gitlab-pull-request";
import { createGitLabGqlClient } from "utils/graphql-client";

import Provider from "./provider";

class GitLabProvider implements Provider {
  id: string;

  auth: GitLabAuth;

  client: ApolloClient<object>;

  #profile?: Profile;

  constructor(id: string, auth: GitLabAuth) {
    this.id = id;
    this.auth = auth;
    this.client = createGitLabGqlClient(auth.domain, auth.privateToken);
  }

  private query = async <TData, TVariables = { [key: string]: never }>(
    query: TypedDocumentNode<TData, TVariables>,
  ) => {
    try {
      const response = await this.client.query<TData>({ query });

      return response.data;
    } catch (e: any) {
      throw new Error(`GitLab ${this.auth.userName}: ${e.message}`);
    }
  };

  async getProfile() {
    if (!this.#profile) {
      const data = await this.query(QueryGetGitLabCurrentUser);

      const avatarUrl = data.currentUser?.avatarUrl?.includes("https")
        ? data.currentUser.avatarUrl
        : `${this.auth.domain}${data.currentUser?.avatarUrl}`;

      this.#profile = {
        id: data.currentUser?.id ?? "",
        avatarUrl,
        userName: data.currentUser?.username ?? "",
        name: data.currentUser?.name ?? "",
        type: AccountType.GitLab,
        state: AccountState.Valid,
      };
    }

    return this.#profile;
  }

  async getPullRequests() {
    const profile = await this.getProfile();
    const data = await this.query(QueryGetGitLabPullRequests);

    return transformGitLabPullRequest({
      profile,
      domain: this.auth.domain,
      data,
    }).filter(
      (pr, index, self) => index === self.findIndex((p) => p.id === pr.id),
    );
  }

  async getValidatedProfile() {
    try {
      return await this.getProfile();
    } catch {
      return {
        id: this.id,
        name: this.auth.userName,
        type: AccountType.GitLab,
        state: AccountState.Invalid,
      };
    }
  }
}

export default GitLabProvider;
