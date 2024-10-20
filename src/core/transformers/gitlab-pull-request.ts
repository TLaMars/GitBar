import { getFragmentData } from "gql/gitlab/codegen";
import { GetGitLabPullRequestsQuery } from "gql/gitlab/codegen/graphql";
import FragmentGitLabPullRequest from "gql/gitlab/fragments/pull-request";
import { Attendee } from "models/attendee";
import Profile from "models/profile";
import { PullRequest } from "models/pull-request";
import getColorForProject from "utils/get-project-color";

const transformGitLabPullRequest = ({
  domain,
  data,
  profile,
}: {
  domain: string;
  data: GetGitLabPullRequestsQuery;
  profile: Profile;
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
          avatarUrl: pr.author?.avatarUrl?.includes("https")
            ? pr.author.avatarUrl
            : `${domain}${pr.author?.avatarUrl}`,
        },
        repoId: pr.sourceProject?.id ?? "",
        repoName: pr.sourceProject?.name ?? "",
        reviewers:
          // TODO fix unsafe return
          pr.reviewers?.nodes?.reduce<Attendee[]>((reviewerAcc, reviewer) => {
            if (!reviewer) return reviewerAcc;

            return [
              ...reviewerAcc,
              {
                name: reviewer.name,
                avatarUrl: reviewer.avatarUrl?.includes("http")
                  ? reviewer.avatarUrl
                  : `${domain}${reviewer.avatarUrl}`,
              },
            ];
          }, []) ?? [],
        createdAt: pr.createdAt,
        url: pr.webUrl ?? "",
        amountOfComments: pr.userNotesCount ?? 0,
        amountOfApprovals:
          (pr.approvalsRequired ?? 0) - (pr.approvalsLeft ?? 0),
        amountOfRequiredApprovals: pr.approvalsRequired ?? 0,
        approvedByMe: pr.reviewers?.nodes?.some(
          (reviewer) =>
            reviewer?.name === profile.name &&
            !!reviewer.mergeRequestInteraction?.approved,
        ),
        accentColor: getColorForProject(pr.sourceProject?.name ?? ""),
        isDraft: pr.draft,
      },
    ];
  }, []);
};

export default transformGitLabPullRequest;
