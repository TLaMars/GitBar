/* eslint-disable no-underscore-dangle */
import { getFragmentData } from "gql/github/codegen";
import {
  GetGithubPullRequestsQuery,
  MergeableState,
  PullRequestReviewDecision,
  PullRequestReviewState,
} from "gql/github/codegen/graphql";
import FragmentGitHubPullRequest from "gql/github/fragments/pull-request";
import { AccountType } from "models/account";
import Profile from "models/profile";
import { TransformedPullRequest } from "models/pull-request";
import cleanPrTitle from "utils/clean-pr-title";
import getColorForProject from "utils/get-project-color";

import transformGithubCiStatus from "./github-ci-status";
import transformGitHubAttendees from "./github-combine-reviewers";

const transformGithubPullRequest = (
  profile: Profile,
  data?: GetGithubPullRequestsQuery,
): TransformedPullRequest[] => {
  if (!data) return [];

  return (
    data.search.nodes?.reduce<TransformedPullRequest[]>((acc, fragment) => {
      if (!fragment || fragment.__typename !== "PullRequest") return acc;

      const pr = getFragmentData(FragmentGitHubPullRequest, fragment);

      const attendees = transformGitHubAttendees(pr.reviewRequests, pr.reviews);

      // Review history is oldest-first and one author can appear multiple
      // times; only my latest APPROVED/CHANGES_REQUESTED review reflects my
      // current vote (an approve superseded by a request-changes is stale).
      const myReviews =
        pr.reviews?.nodes?.filter(
          (review) => review?.author?.login === profile.userName,
        ) ?? [];
      const myLatestReview = myReviews[myReviews.length - 1];

      const rollup = pr.commits.nodes?.[0]?.commit.statusCheckRollup;

      const pullRequest: TransformedPullRequest = {
        id: pr.id,
        title: cleanPrTitle(pr.title),
        author: {
          name: pr.author?.login ?? "",
          avatarUrl: pr.author?.avatarUrl ?? "",
          isBot: (pr.author?.login ?? "").endsWith("[bot]"),
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
        isApprovedByMe:
          myLatestReview?.state === PullRequestReviewState.Approved,
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
        // GitHub removes you from reviewRequests once you submit a review, so
        // membership there already means "requested and still pending".
        isReviewPendingFromMe:
          pr.reviewRequests?.nodes?.some(
            (assignee) =>
              assignee?.requestedReviewer?.__typename === "User" &&
              assignee.requestedReviewer.login === profile.userName,
          ) ?? false,
        isAuthoredByMe: pr.author?.login === profile.userName,
        isFullyApproved:
          pr.reviewDecision === PullRequestReviewDecision.Approved,
        isApprovalRequired: pr.reviewDecision != null,
        hasConflicts: pr.mergeable === MergeableState.Conflicting,
        // Diff review threads only (first 50); conversation comments have no
        // resolution concept on GitHub so they never count here.
        unresolvedThreadCount:
          pr.reviewThreads.nodes?.filter(
            (thread) => thread != null && !thread.isResolved,
          ).length ?? 0,
        ci: transformGithubCiStatus(rollup, pr.url),
        mergeRef: {
          provider: AccountType.GitHub,
          pullRequestId: pr.id,
          mergeMethod: pr.repository.viewerDefaultMergeMethod,
          expectedHeadOid: pr.headRefOid,
        },
      };

      return [...acc, pullRequest];
    }, []) ?? []
  );
};

export default transformGithubPullRequest;
