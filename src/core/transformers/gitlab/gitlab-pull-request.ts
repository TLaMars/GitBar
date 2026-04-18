import { getFragmentData } from "gql/github/codegen";
import {
  GetGitLabPullRequestsQuery,
  MergeRequestReviewState,
  MergeStatus,
  PipelineStatusEnum,
} from "gql/gitlab/codegen/graphql";
import FragmentGitLabPullRequest from "gql/gitlab/fragments/pull-request";
import { Attendee, Vote } from "models/attendee";
import Profile from "models/profile";
import { CIStatus, MergeableState, PullRequest } from "models/pull-request";
import getColorForProject from "utils/get-project-color";

const mapMergeable = (
  state: MergeStatus | null | undefined,
): MergeableState => {
  switch (state) {
    case MergeStatus.CannotBeMerged:
    case MergeStatus.CannotBeMergedRecheck:
      return MergeableState.Conflicting;
    case MergeStatus.CanBeMerged:
      return MergeableState.Mergeable;
    default:
      return MergeableState.Unknown;
  }
};

const mapCIStatus = (
  status: PipelineStatusEnum | undefined,
): CIStatus | undefined => {
  switch (status) {
    case PipelineStatusEnum.Success:
      return CIStatus.Success;
    case PipelineStatusEnum.Failed:
      return CIStatus.Failure;
    case PipelineStatusEnum.Running:
    case PipelineStatusEnum.Preparing:
      return CIStatus.Running;
    case PipelineStatusEnum.Pending:
    case PipelineStatusEnum.Created:
    case PipelineStatusEnum.Scheduled:
    case PipelineStatusEnum.WaitingForCallback:
    case PipelineStatusEnum.WaitingForResource:
    case PipelineStatusEnum.Manual:
      return CIStatus.Pending;
    default:
      return undefined;
  }
};

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
      mergeableState: mapMergeable(pr.mergeStatusEnum),
      ciStatus: mapCIStatus(pr.headPipeline?.status),
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
