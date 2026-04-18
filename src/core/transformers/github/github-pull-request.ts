/* eslint-disable no-underscore-dangle */
import { getFragmentData } from "gql/github/codegen";
import {
  GetGithubPullRequestsQuery,
  MergeableState as GitHubMergeableState,
  PullRequestReviewState,
  StatusState,
} from "gql/github/codegen/graphql";
import FragmentGitHubPullRequest from "gql/github/fragments/pull-request";
import Profile from "models/profile";
import { CIStatus, MergeableState, PullRequest } from "models/pull-request";
import getColorForProject from "utils/get-project-color";

import transformGitHubAttendees from "./github-combine-reviewers";

const mapMergeable = (state: GitHubMergeableState): MergeableState => {
  switch (state) {
    case GitHubMergeableState.Conflicting:
      return MergeableState.Conflicting;
    case GitHubMergeableState.Mergeable:
      return MergeableState.Mergeable;
    default:
      return MergeableState.Unknown;
  }
};

const mapCIStatus = (state: StatusState | undefined): CIStatus | undefined => {
  switch (state) {
    case StatusState.Success:
      return CIStatus.Success;
    case StatusState.Failure:
    case StatusState.Error:
      return CIStatus.Failure;
    case StatusState.Pending:
    case StatusState.Expected:
      return CIStatus.Running;
    default:
      return undefined;
  }
};

const transformGithubPullRequest = (
  profile: Profile,
  data?: GetGithubPullRequestsQuery,
): PullRequest[] => {
  if (!data) return [];

  return (
    data.search.nodes?.reduce<PullRequest[]>((acc, fragment) => {
      if (!fragment || fragment.__typename !== "PullRequest") return acc;

      const pr = getFragmentData(FragmentGitHubPullRequest, fragment);

      const attendees = transformGitHubAttendees(pr.reviewRequests, pr.reviews);

      const pullRequest: PullRequest = {
        id: pr.id,
        title: pr.title,
        author: {
          name: pr.author?.login ?? "",
          avatarUrl: pr.author?.avatarUrl ?? "",
        },
        repoId: pr.repository.id,
        repoName: pr.repository.nameWithOwner,
        reviewers: attendees,
        createdAt: pr.createdAt,
        updatedAt: pr.updatedAt,
        url: pr.url,
        amountOfComments: pr.totalCommentsCount ?? 0,
        accentColor: getColorForProject(pr.repository.id),
        isDraft: pr.isDraft,
        mergeableState: mapMergeable(pr.mergeable),
        ciStatus: mapCIStatus(pr.statusCheckRollup?.state),
        isApprovedByMe:
          pr.reviews?.nodes?.some(
            (review) =>
              review?.author?.login === profile.userName &&
              review?.__typename === "PullRequestReview" &&
              review.state === PullRequestReviewState.Approved,
          ) ?? false,
        isCommentedByMe:
          pr.comments.nodes?.some(
            (comment) => comment?.author?.login === profile.userName,
          ) ?? false,
        isAssignedToMe:
          pr.reviewRequests?.nodes?.some(
            (assignee) =>
              assignee?.requestedReviewer?.__typename === "User" &&
              assignee.requestedReviewer.login === profile.userName,
          ) ?? false,
        isAuthoredByMe: pr.author?.login === profile.userName,
      };

      return [...acc, pullRequest];
    }, []) ?? []
  );
};

export default transformGithubPullRequest;
