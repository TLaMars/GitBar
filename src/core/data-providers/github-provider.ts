import { ApolloClient } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetGitHubViewer from "gql/github/queries/viewer";
import { AccountType } from "models/account";
import { GitHubAuth } from "models/auth";
import Profile, { AccountState } from "models/profile";
import transformGithubPullRequest from "transformers/github/github-pull-request";
import { createGitHubGqlClient } from "utils/graphql-client";

import Provider from "./provider";

class GitHubProvider implements Provider {
  id: string;

  auth: GitHubAuth;

  client: ApolloClient<object>;

  #profile?: Profile;

  constructor(id: string, auth: GitHubAuth) {
    this.id = id;
    this.auth = auth;
    this.client = createGitHubGqlClient(this.auth.accessToken);
  }

  private query = async <TData, TVariables = { [key: string]: never }>(
    query: TypedDocumentNode<TData, TVariables>,
  ) => {
    try {
      const result = await this.client.query<TData>({ query });
      return result.data;
    } catch (e: any) {
      throw new Error(`GitHub ${this.auth.userName}: ${e.message}`);
    }
  };

  async getProfile() {
    if (!this.#profile) {
      const data = await this.query(QueryGetGitHubViewer);

      this.#profile = {
        id: data.viewer.id,
        avatarUrl: data.viewer.avatarUrl,
        userName: data.viewer.login,
        name: data.viewer.name ?? "",
        type: AccountType.GitHub,
        state: AccountState.Valid,
      };
    }

    return this.#profile;
  }

  async getPullRequests() {
    const profile = await this.getProfile();
    const data = await this.query(QueryGetGithubPullRequests);

    return transformGithubPullRequest(profile, data).filter(
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
        type: AccountType.GitHub,
        state: AccountState.Invalid,
      };
    }
  }
}

export default GitHubProvider;
