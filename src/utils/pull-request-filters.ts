import { UseQueryResult } from "@tanstack/react-query";

import { PullRequest } from "models/pull-request";
import { HiddenPullRequest } from "store/slices/pull-requests";

export const filterPRQueryResult = (
  result: UseQueryResult<PullRequest[], Error>[],
): PullRequest[] =>
  result
    .map((d) => d.data)
    .flat()
    .filter((d) => d !== undefined)
    .filter(
      (pr) => pr.isAuthoredByMe || pr.isAssignedToMe || pr.isCommentedByMe,
    )
    .sort(
      (a, b) =>
        new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime(),
    );

export const applyUserFilters = (
  pullRequests: PullRequest[],
  hiddenPullRequests: HiddenPullRequest[],
  hidePRsAfterTwoMonths: boolean,
  hidePRsApprovedByMe: boolean,
  hideDraftPRs: boolean,
  hideBotPRs: boolean,
): PullRequest[] =>
  pullRequests
    .filter(
      (pr) =>
        !hiddenPullRequests.some(
          (hiddenPr) =>
            hiddenPr.id === pr.id && hiddenPr.repoName === pr.repoName,
        ),
    )
    .filter((pr) => {
      if (hidePRsAfterTwoMonths) {
        const twoMonthsAgo = new Date();
        twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
        return new Date(pr.createdAt) > twoMonthsAgo;
      }
      return true;
    })
    .filter((pr) => !hidePRsApprovedByMe || !pr.isApprovedByMe)
    .filter((pr) => !pr.isDraft || !hideDraftPRs)
    .filter((pr) => !hideBotPRs || !pr.author.isBot);

export const filterMinePRs = (pullRequests: PullRequest[]): PullRequest[] =>
  pullRequests.filter((pr) => pr.isAuthoredByMe);

export const filterReviewPRs = (pullRequests: PullRequest[]): PullRequest[] =>
  pullRequests.filter(
    (pr) => !pr.isAuthoredByMe && (pr.isAssignedToMe || pr.isCommentedByMe),
  );
