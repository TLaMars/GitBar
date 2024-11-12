import {
  ApolloClient,
  DefaultContext,
  TypedDocumentNode,
} from "@apollo/client";

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

  private query = async <TData, TVariables = { [key: string]: never }>(
    query: TypedDocumentNode<TData, TVariables>,
  ) => {
    const { data, error } = await this.client
      .query<TData>({
        query,
        context: this.#context,
        fetchPolicy: "no-cache",
      })
      .catch((e) => ({
        data: null,
        error: new Error(`GitHub ${this.auth.userName}: ${e.message}`),
      }));

    return { data, error };
  };

  async profile() {
    if (!this.#profile) {
      const { data, error } = await this.query(QueryGetGitHubViewer);

      if (error || !data) {
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

    if (data === null || error) {
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
