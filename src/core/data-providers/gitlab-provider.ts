import {
  ApolloClient,
  DefaultContext,
  TypedDocumentNode,
} from "@apollo/client";

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

  private query = async <TData, TVariables = { [key: string]: never }>(
    query: TypedDocumentNode<TData, TVariables>,
  ) => {
    const { data, error } = await this.client
      .query<TData>({
        query,
        context: this.#context,
        fetchPolicy: "no-cache",
      })
      .catch((e) => ({ data: null, error: e }));

    return { data, error };
  };

  async profile() {
    if (!this.#profile) {
      const { data, error } = await this.query(QueryGetGitLabCurrentUser);

      if (data === null || data.currentUser === null || error) {
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
    const { data: profile } = await this.profile();

    if (profile.status === ProfileStatus.Invalid) {
      return {
        error: new Error("Account is expired"),
        data: [],
      };
    }

    const { data, error } = await this.query(QueryGetGitLabPullRequests);

    if (data === null || error) {
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
        (pullRequest, index, self) =>
          index === self.findIndex((p) => p.id === pullRequest.id),
      ),
    };
  }
}

export default GitLabProvider;
