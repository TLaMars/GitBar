import { GetGitLabPullRequestsQuery } from "gql/gitlab/codegen/graphql";
import { AccountType } from "models/account";
import Profile, { AccountState } from "models/profile";
import transformGitLabPullRequest from "transformers/gitlab/gitlab-pull-request";

const profile: Profile = {
  id: "user-1",
  avatarUrl: "",
  userName: "me",
  name: "Me",
  type: AccountType.GitLab,
  state: AccountState.Valid,
};

const makeMergeRequest = (overrides: Record<string, unknown> = {}) => ({
  title: "Add feature",
  id: "gid://gitlab/MergeRequest/1",
  iid: "42",
  webUrl: "https://gitlab.com/group/project/-/merge_requests/42",
  draft: false,
  diffHeadSha: "abc123",
  author: {
    name: "Author",
    username: "author",
    avatarUrl: "https://example.com/avatar.png",
  },
  reviewers: { nodes: [] },
  commenters: { nodes: [] },
  // Fork scenario: the MR comes from a different project than it merges into.
  sourceProject: { name: "project-fork", id: "gid://gitlab/Project/2" },
  targetProject: {
    id: "gid://gitlab/Project/1",
    name: "project",
    fullPath: "group/project",
  },
  approved: true,
  approvalsRequired: 1,
  conflicts: false,
  userNotesCount: 0,
  createdAt: "2026-01-01T00:00:00Z",
  headPipeline: null,
  ...overrides,
});

const makeData = (mergeRequests: unknown[]) =>
  ({
    currentUser: {
      contributedProjects: {
        nodes: [
          {
            archived: false,
            mergeRequests: { nodes: mergeRequests },
          },
        ],
      },
    },
  }) as unknown as GetGitLabPullRequestsQuery;

describe("transformGitLabPullRequest", () => {
  it("builds a mergeRef targeting the target project, not the source (fork MRs)", () => {
    const [pullRequest] = transformGitLabPullRequest({
      domain: "https://gitlab.com",
      data: makeData([makeMergeRequest()]),
      profile,
    });

    expect(pullRequest.mergeRef).toEqual({
      provider: AccountType.GitLab,
      projectPath: "group/project",
      iid: "42",
      sha: "abc123",
    });
  });

  it("omits the mergeRef when the head sha is missing", () => {
    const [pullRequest] = transformGitLabPullRequest({
      domain: "https://gitlab.com",
      data: makeData([makeMergeRequest({ diffHeadSha: null })]),
      profile,
    });

    expect(pullRequest.mergeRef).toBeUndefined();
  });

  it("treats approval as required when the project mandates approvals", () => {
    const [pullRequest] = transformGitLabPullRequest({
      domain: "https://gitlab.com",
      data: makeData([makeMergeRequest({ approvalsRequired: 2 })]),
      profile,
    });

    expect(pullRequest.isApprovalRequired).toBe(true);
  });

  it("treats approval as not required when the project has no approval rules", () => {
    const [pullRequest] = transformGitLabPullRequest({
      domain: "https://gitlab.com",
      data: makeData([makeMergeRequest({ approvalsRequired: 0 })]),
      profile,
    });

    expect(pullRequest.isApprovalRequired).toBe(false);
  });
});
