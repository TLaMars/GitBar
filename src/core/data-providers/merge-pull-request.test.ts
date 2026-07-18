import MutationMergeGitHubPullRequest from "gql/github/mutations/merge-pull-request";
import MutationAcceptGitLabMergeRequest from "gql/gitlab/mutations/merge-request-accept";
import { AccountType } from "models/account";
import { MergeRef } from "models/pull-request";
import azureApi from "services/api/azure/api";
import {
  createGitHubGqlClient,
  createGitLabGqlClient,
} from "utils/graphql-client";

import AzureProvider from "./azure-provider";
import GitHubProvider from "./github-provider";
import GitLabProvider from "./gitlab-provider";

jest.mock("utils/graphql-client", () => ({
  createGitHubGqlClient: jest.fn(),
  createGitLabGqlClient: jest.fn(),
}));

jest.mock("services/api/azure/api", () => ({
  __esModule: true,
  default: { get: jest.fn(), patch: jest.fn() },
}));

const githubMergeRef: MergeRef = {
  provider: AccountType.GitHub,
  pullRequestId: "PR_node_1",
  mergeMethod: "SQUASH",
  expectedHeadOid: "abc123",
};

const gitlabMergeRef: MergeRef = {
  provider: AccountType.GitLab,
  projectPath: "group/project",
  iid: "42",
  sha: "abc123",
};

const azureMergeRef: MergeRef = {
  provider: AccountType.Azure,
  projectId: "project-guid-1",
  repositoryId: "repo-guid-1",
  pullRequestId: 7,
  lastMergeSourceCommitId: "abc123",
};

describe("GitHubProvider.mergePullRequest", () => {
  const mockClient = { query: jest.fn(), mutate: jest.fn() };

  const makeProvider = () => {
    (createGitHubGqlClient as jest.Mock).mockReturnValue(mockClient);
    return new GitHubProvider("account-1", {
      accessToken: "token",
      userName: "me",
    });
  };

  beforeEach(() => jest.clearAllMocks());

  it("merges with the repo's default method and a head-oid staleness guard", async () => {
    mockClient.mutate.mockResolvedValue({
      data: {
        mergePullRequest: { pullRequest: { id: "PR_node_1", merged: true } },
      },
    });

    await makeProvider().mergePullRequest(githubMergeRef);

    expect(mockClient.mutate).toHaveBeenCalledWith(
      expect.objectContaining({
        mutation: MutationMergeGitHubPullRequest,
        variables: {
          input: {
            pullRequestId: "PR_node_1",
            mergeMethod: "SQUASH",
            expectedHeadOid: "abc123",
          },
        },
      }),
    );
  });

  it("rejects a pull request from another provider", async () => {
    await expect(
      makeProvider().mergePullRequest(gitlabMergeRef),
    ).rejects.toThrow("cannot be merged by this account");
    expect(mockClient.mutate).not.toHaveBeenCalled();
  });

  it("maps a 401 to the token-expired message", async () => {
    mockClient.mutate.mockRejectedValue(
      Object.assign(new Error("Request failed"), {
        networkError: { statusCode: 401 },
      }),
    );

    await expect(
      makeProvider().mergePullRequest(githubMergeRef),
    ).rejects.toThrow("Your access token has expired");
  });
});

describe("GitLabProvider.mergePullRequest", () => {
  const mockClient = { query: jest.fn(), mutate: jest.fn() };

  const makeProvider = () => {
    (createGitLabGqlClient as jest.Mock).mockReturnValue(mockClient);
    return new GitLabProvider("account-2", {
      privateToken: "token",
      domain: "https://gitlab.com",
      userName: "me",
    });
  };

  beforeEach(() => jest.clearAllMocks());

  it("accepts the merge request with the required sha guard", async () => {
    mockClient.mutate.mockResolvedValue({
      data: {
        mergeRequestAccept: {
          errors: [],
          mergeRequest: { id: "gid://gitlab/MergeRequest/1", state: "merged" },
        },
      },
    });

    await makeProvider().mergePullRequest(gitlabMergeRef);

    expect(mockClient.mutate).toHaveBeenCalledWith(
      expect.objectContaining({
        mutation: MutationAcceptGitLabMergeRequest,
        variables: {
          input: { projectPath: "group/project", iid: "42", sha: "abc123" },
        },
      }),
    );
  });

  it("surfaces payload errors as thrown errors", async () => {
    mockClient.mutate.mockResolvedValue({
      data: {
        mergeRequestAccept: {
          errors: ["Branch has diverged"],
          mergeRequest: null,
        },
      },
    });

    await expect(
      makeProvider().mergePullRequest(gitlabMergeRef),
    ).rejects.toThrow("Branch has diverged");
  });

  it("rejects a pull request from another provider", async () => {
    await expect(
      makeProvider().mergePullRequest(azureMergeRef),
    ).rejects.toThrow("cannot be merged by this account");
    expect(mockClient.mutate).not.toHaveBeenCalled();
  });
});

describe("AzureProvider.mergePullRequest", () => {
  const makeProvider = () =>
    new AzureProvider("account-3", { token: "token", organization: "org" });

  beforeEach(() => jest.clearAllMocks());

  it("completes the pull request with the merge-preview commit guard", async () => {
    (azureApi.patch as jest.Mock).mockResolvedValue({
      data: {},
      status: 200,
      redirected: false,
    });

    await makeProvider().mergePullRequest(azureMergeRef);

    expect(azureApi.patch).toHaveBeenCalledWith(
      "/:organization/:projectId/_apis/git/repositories/:repositoryId/pullrequests/:pullRequestId",
      {
        status: "completed",
        lastMergeSourceCommit: { commitId: "abc123" },
      },
      expect.objectContaining({
        params: expect.objectContaining({
          organization: "org",
          projectId: "project-guid-1",
          repositoryId: "repo-guid-1",
          pullRequestId: "7",
          "api-version": "7.1",
        }),
      }),
    );
  });

  it("maps API failures to a readable error", async () => {
    (azureApi.patch as jest.Mock).mockRejectedValue({
      statusCode: 405,
      message: "405 Method Not Allowed",
    });

    await expect(
      makeProvider().mergePullRequest(azureMergeRef),
    ).rejects.toThrow("failed with a 405");
  });

  it("rejects a pull request from another provider", async () => {
    await expect(
      makeProvider().mergePullRequest(githubMergeRef),
    ).rejects.toThrow("cannot be merged by this account");
    expect(azureApi.patch).not.toHaveBeenCalled();
  });
});
