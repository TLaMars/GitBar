import { getFragmentData } from "gql/github/codegen";
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
  const pullRequests = (data.currentUser?.contributedProjects?.nodes ?? [])
    .filter((project) => !project?.archived)
    .flatMap((project) => project?.mergeRequests ?? [])
    .flatMap((fragment) =>
      getFragmentData(FragmentGitLabPullRequest, [fragment]),
    )
    .flatMap((fragment) => fragment.nodes ?? []);

  return pullRequests.reduce<PullRequest[]>((acc, pr) => {
    if (!pr) return acc;

    const pullRequest: PullRequest = {
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
        pr.reviewers?.nodes?.map<Attendee>((reviewer) => ({
          name: reviewer?.name ?? "",
          avatarUrl: reviewer?.avatarUrl?.includes("http")
            ? reviewer.avatarUrl
            : `${domain}${reviewer?.avatarUrl}`,
        })) ?? [],
      createdAt: pr.createdAt,
      url: pr.webUrl ?? "",
      amountOfComments: pr.userNotesCount ?? 0,
      amountOfApprovals: (pr.approvalsRequired ?? 0) - (pr.approvalsLeft ?? 0),
      amountOfRequiredApprovals: pr.approvalsRequired ?? 0,
      accentColor: getColorForProject(pr.sourceProject?.name ?? ""),
      isDraft: pr.draft,
      isApprovedByMe:
        pr.reviewers?.nodes?.some(
          (reviewer) =>
            reviewer?.name === profile.name &&
            !!reviewer.mergeRequestInteraction?.approved,
        ) ?? false,
      isCommentedByMe:
        pr.commenters.nodes?.some(
          (commenter) => commenter?.username === profile.userName,
        ) ?? false,
      isAssignedToMe:
        pr.reviewers?.nodes?.some(
          (reviewer) => reviewer?.username === profile.userName,
        ) ?? false,
      isAuthoredByMe: pr.author?.username === profile.userName,
    };

    return [...acc, pullRequest];
  }, []);
};

export default transformGitLabPullRequest;
