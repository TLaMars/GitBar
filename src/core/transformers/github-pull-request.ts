/* eslint-disable no-underscore-dangle */
import { Attendee } from "models/attendee";
import { PullRequest } from "models/pull-request";

import { GetGithubPullRequestsQuery } from "../gql/github/codegen/graphql";

const transformGithubPullRequest = (
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
        },
      ];
    }, []) ?? []
  );
};

export default transformGithubPullRequest;
