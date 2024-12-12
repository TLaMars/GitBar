import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";

import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetGitHubViewer from "gql/github/queries/viewer";
import { AccountType } from "models/account";
import { GitHubAuth } from "models/auth";
import Profile, { ProfileStatus } from "models/profile";
import transformGithubPullRequest from "transformers/github/github-pull-request";
import { createGitHubGqlClient } from "utils/graphql-client";

import Provider from "./provider";

class GitHubProvider implements Provider {
  id: string;

  auth: GitHubAuth;

  client: GraphQLClient;

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
      const result = await this.client.request<TData>(query);
      return { data: result, error: null };
    } catch (e: any) {
      return {
        data: null,
        error: new Error(`GitHub ${this.auth.userName}: ${e.message}`),
      };
    }
  };

  async profile() {
    if (!this.#profile) {
      const { data, error } = await this.query(QueryGetGitHubViewer);

      if (error) {
        return {
          error,
          data: {
            id: this.id,
            name: this.auth.userName,
            type: AccountType.GitHub,
            status: ProfileStatus.Invalid,
          },
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

    return { data: this.#profile };
  }

  async pullRequests() {
    const { data: profile, error: profileError } = await this.profile();

    if (profile.status === ProfileStatus.Invalid) {
      return {
        error: profileError,
        data: [],
      };
    }

    const { data, error } = await this.query(QueryGetGithubPullRequests);

    if (data === null) {
      return {
        error,
        data: [],
      };
    }

    return {
      data: transformGithubPullRequest(profile, data).filter(
        (pr, index, self) =>
          (pr.isAuthoredByMe || pr.isAssignedToMe || pr.isCommentedByMe) &&
          index === self.findIndex((p) => p.id === pr.id),
      ),
    };
  }
}

export default GitHubProvider;
