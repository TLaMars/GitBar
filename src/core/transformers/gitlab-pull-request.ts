import { getFragmentData } from "gql/gitlab/codegen";
import { GetGitLabPullRequestsQuery } from "gql/gitlab/codegen/graphql";
import FragmentGitLabPullRequest from "gql/gitlab/fragments/pull-request";
import { Attendee } from "models/attendee";
import { PullRequest } from "models/pull-request";

const transformGitLabPullRequest = ({
  domain,
  data,
}: {
  domain: string;
  data: GetGitLabPullRequestsQuery;
}): PullRequest[] => {
  const assigned = getFragmentData(
    FragmentGitLabPullRequest,
    data.currentUser?.assignedMergeRequests,
  );
  const authored = getFragmentData(
    FragmentGitLabPullRequest,
    data.currentUser?.authoredMergeRequests,
  );
  const requested = getFragmentData(
    FragmentGitLabPullRequest,
    data.currentUser?.reviewRequestedMergeRequests,
  );

  const pullRequests = [
    ...(assigned?.nodes || []),
    ...(authored?.nodes || []),
    ...(requested?.nodes || []),
  ];

  return pullRequests.reduce<PullRequest[]>((acc, pr) => {
    if (!pr) return acc;

    return [
      ...acc,
      {
        id: pr.id,
        title: pr.title,
        author: {
          name: pr.author?.name ?? "",
          avatarUrl: `${domain}${pr.author?.avatarUrl}`,
        },
        repoName: pr.sourceProject?.name ?? "",
        reviewers:
          pr.reviewers?.nodes?.reduce<Attendee[]>((reviewerAcc, reviewer) => {
            if (!reviewer) return reviewerAcc;

            return [
              ...reviewerAcc,
              {
                name: reviewer.name,
                avatarUrl: `${domain}${reviewer.avatarUrl}`,
              },
            ];
          }, []) ?? [],
        createdAt: pr.createdAt,
        url: pr.webUrl ?? "",
        amountOfComments: pr.userNotesCount ?? 0,
        amountOfApprovals:
          (pr.approvalsRequired ?? 0) - (pr.approvalsLeft ?? 0),
        amountOfRequiredApprovals: pr.approvalsRequired ?? 0,
      },
    ];
  }, []);
};

export default transformGitLabPullRequest;
