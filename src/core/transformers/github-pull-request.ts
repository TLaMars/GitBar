/* eslint-disable no-underscore-dangle */
import {
  GetGithubPullRequestsQuery,
  PullRequestReviewState,
} from "gql/github/codegen/graphql";
import { Attendee } from "models/attendee";
import Profile from "models/profile";
import { PullRequest } from "models/pull-request";

const transformGithubPullRequest = (
  profile: Profile,
  data?: GetGithubPullRequestsQuery,
): PullRequest[] => {
  if (!data) return [];

  return (
    data.search.nodes?.reduce<PullRequest[]>((acc, pr) => {
      if (!pr || pr.__typename !== "PullRequest") return acc;

      return [
        ...acc,
        {
          id: pr.id,
          title: pr.title,
          author: {
            name: pr.author?.login ?? "",
            avatarUrl: pr.author?.avatarUrl,
          },
          repoName: pr.repository.nameWithOwner,
          reviewers:
            pr.reviewRequests?.nodes?.reduce<Attendee[]>(
              (reviewerAcc, reviewer) => {
                if (
                  !reviewer ||
                  reviewer.__typename !== "ReviewRequest" ||
                  reviewer.requestedReviewer?.__typename !== "User"
                )
                  return reviewerAcc;

                return [
                  ...reviewerAcc,
                  {
                    name:
                      reviewer.requestedReviewer.name ??
                      reviewer.requestedReviewer.login,
                    avatarUrl: reviewer.requestedReviewer.avatarUrl ?? "",
                  },
                ];
              },
              [],
            ) ?? [],
          createdAt: pr.createdAt,
          url: pr.url,
          amountOfComments: pr.totalCommentsCount ?? 0,
          amountOfApprovals:
            // Get the amount of unique approvals by user
            pr.reviews?.nodes?.reduce<string[]>((approvals, review) => {
              if (!review || review.__typename !== "PullRequestReview")
                return approvals;
              if (
                review.state === PullRequestReviewState.Approved &&
                !approvals.includes(review.author?.login ?? "")
              ) {
                return [...approvals, review.author?.login ?? ""];
              }
              return approvals;
            }, []).length ?? 0,
          amountOfRequiredApprovals:
            pr.baseRef?.branchProtectionRule?.requiredApprovingReviewCount ?? 0,
          approvedByMe: pr.reviews?.nodes?.some(
            (review) =>
              review?.author?.login === profile.userName &&
              review?.state === PullRequestReviewState.Approved,
          ),
        },
      ];
    }, []) ?? []
  );
};

export default transformGithubPullRequest;
