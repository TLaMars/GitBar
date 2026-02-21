import QueryGetGithubIssues from "gql/github/queries/issues";
import QueryGetGithubPullRequests from "gql/github/queries/pull-requests";
import QueryGetGitHubViewer from "gql/github/queries/viewer";
import { AccountType } from "models/account";
import { GitHubAuth } from "models/auth";
import { AccountState } from "models/profile";
import transformGithubIssue from "transformers/github/github-issue";
import transformGithubPullRequest from "transformers/github/github-pull-request";
import { createGitHubGqlClient } from "utils/graphql-client";

import BaseProvider from "./base-provider";

class GitHubProvider extends BaseProvider {
  auth: GitHubAuth;

  constructor(id: string, auth: GitHubAuth) {
    super(id, auth, auth.userName, AccountType.GitHub);
    this.auth = auth;
    this.client = createGitHubGqlClient(this.auth.accessToken);
  }

  async getProfile() {
    if (!this.profile) {
      const data = await this.query(QueryGetGitHubViewer);

      this.profile = {
        id: data.viewer.id,
        avatarUrl: data.viewer.avatarUrl,
        userName: data.viewer.login,
        name: data.viewer.name ?? "",
        type: this.accountType,
        state: AccountState.Valid,
      };
    }

    return this.profile;
  }

  async getPullRequests() {
    const profile = await this.getProfile();
    const data = await this.query(QueryGetGithubPullRequests);

    return transformGithubPullRequest(profile, data).filter(
      (pr, index, self) => index === self.findIndex((p) => p.id === pr.id),
    );
  }

  async getIssues() {
    const data = await this.query(QueryGetGithubIssues);

    const repoIssues =
      data.viewer.repositories.nodes
        ?.flatMap((repo) => repo?.issues.nodes)
        .filter((issue) => issue != null)
        .map((issue) => transformGithubIssue(issue)) ?? [];

    const viewerIssues =
      data.viewer.issues.nodes
        ?.filter((issue) => issue != null)
        .map((issue) => transformGithubIssue(issue)) ?? [];

    return [...repoIssues, ...viewerIssues]
      .filter(
        (issue, index, self) =>
          index === self.findIndex((i) => i.id === issue.id),
      )
      .sort(
        (a, b) =>
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
      );
  }
}

export default GitHubProvider;
