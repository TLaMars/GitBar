import { getFragmentData } from "gql/github/codegen";
import {
  GetGitLabPullRequestsQuery,
  MergeRequestReviewState,
} from "gql/gitlab/codegen/graphql";
import FragmentGitLabPullRequest from "gql/gitlab/fragments/pull-request";
import { AccountType } from "models/account";
import { Attendee, Vote } from "models/attendee";
import Profile from "models/profile";
import { TransformedPullRequest } from "models/pull-request";
import cleanPrTitle from "utils/clean-pr-title";
import getColorForProject from "utils/get-project-color";

import transformGitlabCiStatus from "./gitlab-ci-status";

const getVote = (vote: MergeRequestReviewState | undefined | null): Vote => {
  switch (vote) {
    case MergeRequestReviewState.Approved:
      return Vote.Approved;
    case MergeRequestReviewState.RequestedChanges:
      return Vote.WaitingFor;
    default:
      return Vote.NoVote;
  }
};

const transformGitLabPullRequest = ({
  domain,
  data,
  profile,
}: {
  domain: string;
  data: GetGitLabPullRequestsQuery;
  profile: Profile;
}): TransformedPullRequest[] => {
  const pullRequests = (data.currentUser?.contributedProjects?.nodes ?? [])
    .filter((project) => !project?.archived)
    .flatMap((project) => project?.mergeRequests ?? [])
    .flatMap((fragment) =>
      getFragmentData(FragmentGitLabPullRequest, [fragment]),
    )
    // eslint-disable-next-line @typescript-eslint/no-unsafe-return
    .flatMap((fragment) => fragment.nodes ?? []);

  return pullRequests.reduce<TransformedPullRequest[]>((acc, pr) => {
    if (!pr) return acc;

    const pullRequest: TransformedPullRequest = {
      id: pr.id,
      title: cleanPrTitle(pr.title),
      author: {
        name: pr.author?.name ?? "",
        avatarUrl: pr.author?.avatarUrl?.includes("https")
          ? pr.author.avatarUrl
          : `${domain}${pr.author?.avatarUrl}`,
        isBot: pr.author?.bot ?? false,
      },
      repoId: pr.sourceProject?.id ?? "",
      repoName: pr.sourceProject?.name ?? "",
      reviewers: (
        pr.reviewers?.nodes?.map<Attendee>((reviewer) => ({
          name: reviewer?.name ?? "",
          avatarUrl: reviewer?.avatarUrl?.includes("http")
            ? reviewer.avatarUrl
            : `${domain}${reviewer?.avatarUrl}`,
          vote: getVote(reviewer?.mergeRequestInteraction?.reviewState),
        })) ?? []
      ).sort((a, b) => (a.name > b.name ? 1 : -1)),
      createdAt: pr.createdAt,
      updatedAt: pr.updatedAt,
      url: pr.webUrl ?? "",
      amountOfComments: pr.userNotesCount ?? 0,
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
      // GitLab keeps you in reviewers after you approve, so pending = I am a
      // reviewer AND have not approved yet.
      isReviewPendingFromMe:
        pr.reviewers?.nodes?.some(
          (reviewer) =>
            reviewer?.username === profile.userName &&
            !reviewer?.mergeRequestInteraction?.approved,
        ) ?? false,
      isAuthoredByMe: pr.author?.username === profile.userName,
      isFullyApproved: pr.approved,
      // approvalsRequired is 0/null when the project has no approval rules —
      // GitLab still reports approved:false there, so gate on the requirement.
      isApprovalRequired: (pr.approvalsRequired ?? 0) > 0,
      hasConflicts: pr.conflicts,
      ci: transformGitlabCiStatus(pr.headPipeline, domain),
      // The accept API requires the head sha as a staleness guard; without it
      // (or a target project path) the merge action is unavailable.
      mergeRef:
        pr.diffHeadSha && pr.targetProject.fullPath
          ? {
              provider: AccountType.GitLab,
              projectPath: String(pr.targetProject.fullPath),
              iid: pr.iid,
              sha: pr.diffHeadSha,
            }
          : undefined,
    };

    return [...acc, pullRequest];
  }, []);
};

export default transformGitLabPullRequest;
