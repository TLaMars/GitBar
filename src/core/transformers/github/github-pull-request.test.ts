import {
  GetGithubPullRequestsQuery,
  MergeableState,
  PullRequestMergeMethod,
  PullRequestReviewDecision,
} from "gql/github/codegen/graphql";
import { AccountType } from "models/account";
import Profile, { AccountState } from "models/profile";
import transformGithubPullRequest from "transformers/github/github-pull-request";

const profile: Profile = {
  id: "user-1",
  avatarUrl: "",
  userName: "me",
  name: "Me",
  type: AccountType.GitHub,
  state: AccountState.Valid,
};

const rawPullRequest = {
  __typename: "PullRequest",
  id: "PR_node_1",
  title: "Add feature",
  author: { login: "me", avatarUrl: "" },
  repository: {
    nameWithOwner: "org/repo",
    id: "REPO_1",
    viewerDefaultMergeMethod: PullRequestMergeMethod.Squash,
  },
  headRefOid: "abc123",
  reviewRequests: { nodes: [] },
  isDraft: false,
  createdAt: "2026-01-01T00:00:00Z",
  url: "https://github.com/org/repo/pull/1",
  baseRef: null,
  reviewDecision: PullRequestReviewDecision.Approved,
  mergeable: MergeableState.Mergeable,
  totalCommentsCount: 0,
  commits: { nodes: [] },
  reviews: { totalCount: 0, nodes: [] },
  comments: { nodes: [] },
  reviewThreads: { nodes: [] },
};

const makeData = (pullRequest: unknown) =>
  ({
    search: { nodes: [pullRequest] },
  }) as unknown as GetGithubPullRequestsQuery;

describe("transformGithubPullRequest", () => {
  it("builds a mergeRef from the repo's default merge method and head oid", () => {
    const [pullRequest] = transformGithubPullRequest(
      profile,
      makeData(rawPullRequest),
    );

    expect(pullRequest.mergeRef).toEqual({
      provider: AccountType.GitHub,
      pullRequestId: "PR_node_1",
      mergeMethod: PullRequestMergeMethod.Squash,
      expectedHeadOid: "abc123",
    });
  });

  it("marks approval as required when a review decision applies", () => {
    const [pullRequest] = transformGithubPullRequest(
      profile,
      makeData(rawPullRequest),
    );

    expect(pullRequest.isApprovalRequired).toBe(true);
  });

  it("marks approval as not required when there is no review decision", () => {
    const [pullRequest] = transformGithubPullRequest(
      profile,
      makeData({ ...rawPullRequest, reviewDecision: null }),
    );

    expect(pullRequest.isApprovalRequired).toBe(false);
    expect(pullRequest.isFullyApproved).toBe(false);
  });

  it("counts only unresolved review threads", () => {
    const [pullRequest] = transformGithubPullRequest(
      profile,
      makeData({
        ...rawPullRequest,
        reviewThreads: {
          nodes: [{ isResolved: false }, { isResolved: true }, null],
        },
      }),
    );

    expect(pullRequest.unresolvedThreadCount).toBe(1);
  });

  it("reports zero unresolved threads when the thread list is null", () => {
    const [pullRequest] = transformGithubPullRequest(
      profile,
      makeData({ ...rawPullRequest, reviewThreads: { nodes: null } }),
    );

    expect(pullRequest.unresolvedThreadCount).toBe(0);
  });
});
