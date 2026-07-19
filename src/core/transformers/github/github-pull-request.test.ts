import {
  GetGithubPullRequestsQuery,
  MergeableState,
  PullRequestMergeMethod,
  PullRequestReviewDecision,
  PullRequestReviewState,
} from "gql/github/codegen/graphql";
import { AccountType } from "models/account";
import { Vote } from "models/attendee";
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

  // The reviews connection is full history (oldest first): the same author
  // appears once per submitted review, and only the latest one may count.
  describe("review supersede sequences", () => {
    const review = (login: string, state: PullRequestReviewState) => ({
      author: { login, avatarUrl: "" },
      state,
    });

    it("counts a request-changes followed by an approve as Approved", () => {
      const [pullRequest] = transformGithubPullRequest(
        profile,
        makeData({
          ...rawPullRequest,
          reviews: {
            totalCount: 2,
            nodes: [
              review("alice", PullRequestReviewState.ChangesRequested),
              review("alice", PullRequestReviewState.Approved),
            ],
          },
        }),
      );

      expect(pullRequest.reviewers).toEqual([
        { name: "alice", avatarUrl: "", vote: Vote.Approved },
      ]);
    });

    it("counts an approve followed by a request-changes as changes requested", () => {
      const [pullRequest] = transformGithubPullRequest(
        profile,
        makeData({
          ...rawPullRequest,
          reviews: {
            totalCount: 2,
            nodes: [
              review("alice", PullRequestReviewState.Approved),
              review("alice", PullRequestReviewState.ChangesRequested),
            ],
          },
        }),
      );

      expect(pullRequest.reviewers).toEqual([
        { name: "alice", avatarUrl: "", vote: Vote.WaitingFor },
      ]);
    });

    it("clears isApprovedByMe when my approve is superseded by a request-changes", () => {
      const [pullRequest] = transformGithubPullRequest(
        profile,
        makeData({
          ...rawPullRequest,
          reviews: {
            totalCount: 2,
            nodes: [
              review("me", PullRequestReviewState.Approved),
              review("me", PullRequestReviewState.ChangesRequested),
            ],
          },
        }),
      );

      expect(pullRequest.isApprovedByMe).toBe(false);
    });

    it("sets isApprovedByMe when my request-changes is superseded by an approve", () => {
      const [pullRequest] = transformGithubPullRequest(
        profile,
        makeData({
          ...rawPullRequest,
          reviews: {
            totalCount: 2,
            nodes: [
              review("me", PullRequestReviewState.ChangesRequested),
              review("me", PullRequestReviewState.Approved),
            ],
          },
        }),
      );

      expect(pullRequest.isApprovedByMe).toBe(true);
    });

    it("keeps other authors' votes independent of mine", () => {
      const [pullRequest] = transformGithubPullRequest(
        profile,
        makeData({
          ...rawPullRequest,
          reviews: {
            totalCount: 3,
            nodes: [
              review("alice", PullRequestReviewState.ChangesRequested),
              review("me", PullRequestReviewState.Approved),
              review("alice", PullRequestReviewState.Approved),
            ],
          },
        }),
      );

      expect(pullRequest.reviewers).toEqual([
        { name: "alice", avatarUrl: "", vote: Vote.Approved },
        { name: "me", avatarUrl: "", vote: Vote.Approved },
      ]);
      expect(pullRequest.isApprovedByMe).toBe(true);
    });
  });
});
