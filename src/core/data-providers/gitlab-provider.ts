import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { GraphQLClient } from "graphql-request";

import QueryGetGitLabCurrentUser from "gql/gitlab/queries/current-user";
import QueryGetGitLabPullRequests from "gql/gitlab/queries/pull-requests";
import { AccountType } from "models/account";
import { GitLabAuth } from "models/auth";
import Profile, { ProfileStatus } from "models/profile";
import transformGitLabPullRequest from "transformers/gitlab/gitlab-pull-request";
import { createGitLabGqlClient } from "utils/graphql-client";

import Provider from "./provider";

class GitLabProvider implements Provider {
  id: string;

  auth: GitLabAuth;

  client: GraphQLClient;

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
      const data = await this.client.request<TData>(query);
      return {
        data,
      };
    } catch (e: any) {
      return {
        data: null,
        error: new Error(`GitLab ${this.auth.userName}: ${e.message}`),
      };
    }
  };

  async profile() {
    if (!this.#profile) {
      const { data, error } = await this.query(QueryGetGitLabCurrentUser);

      if (data === null || data.currentUser === null) {
        return {
          data: {
            id: this.id,
            name: this.auth.userName,
            type: AccountType.GitLab,
            status: ProfileStatus.Invalid,
          },
          error,
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

    return { data: this.#profile };
  }

  async pullRequests() {
    const { data: profile, error: profileError } = await this.profile();

    if (profile.status === ProfileStatus.Invalid || profileError) {
      return {
        error: profileError,
        data: [],
      };
    }

    const { data, error } = await this.query(QueryGetGitLabPullRequests);

    if (data === null) {
      return {
        error,
        data: [],
      };
    }

    return {
      data: transformGitLabPullRequest({
        profile,
        domain: this.auth.domain,
        data,
      }).filter(
        (pr, index, self) =>
          (pr.isAuthoredByMe || pr.isAssignedToMe || pr.isCommentedByMe) &&
          index === self.findIndex((p) => p.id === pr.id),
      ),
    };
  }
}

export default GitLabProvider;
