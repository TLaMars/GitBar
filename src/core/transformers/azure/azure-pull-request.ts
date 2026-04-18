import { Vote } from "models/attendee";
import Profile from "models/profile";
import { MergeableState, PullRequest } from "models/pull-request";
import {
  AzurePullRequest,
  ReviewerVote,
} from "services/api/azure/models/pull-requests-response";
import { CommentType } from "services/api/azure/models/thread-response";
import getColorForProject from "utils/get-project-color";

const getVote = (vote: ReviewerVote): Vote => {
  switch (vote) {
    case ReviewerVote.Approved:
      return Vote.Approved;
    case ReviewerVote.ApprovedWithSuggestions:
      return Vote.Approved;
    case ReviewerVote.NoVote:
      return Vote.NoVote;
    case ReviewerVote.Rejected:
      return Vote.Rejected;
    case ReviewerVote.WaitingForAuthor:
      return Vote.WaitingFor;
    default:
      return Vote.NoVote;
  }
};

const transformAzurePullRequest = (
  profile: Profile,
  data: AzurePullRequest,
): PullRequest => {
  const match = /^(https:\/\/dev\.azure\.com\/[^/]+\/)/.exec(
    data.repository.url,
  );
  const encodedProject = encodeURIComponent(data.repository.project.name);
  const encodedRepo = encodeURIComponent(data.repository.name);

  const latestThreadUpdate = data.threads.reduce<string | undefined>(
    (latest, thread) =>
      !latest || thread.lastUpdatedDate > latest
        ? thread.lastUpdatedDate
        : latest,
    undefined,
  );

  const mergeableState = ((): MergeableState => {
    if (data.mergeStatus === "conflicts") return MergeableState.Conflicting;
    if (data.mergeStatus === "succeeded") return MergeableState.Mergeable;
    return MergeableState.Unknown;
  })();

  return {
    id: data.pullRequestId.toString(),
    title: data.title,
    author: {
      name: data.createdBy.displayName,
      // TODO: Add avatarUrl
      avatarUrl: "",
    },
    repoId: data.repository.id,
    repoName: data.repository.name,
    reviewers: data.reviewers
      .map((reviewer) => ({
        name: reviewer.displayName,
        // TODO: Add avatarUrl
        avatarUrl: "",
        vote: getVote(reviewer.vote),
      }))
      .sort((a, b) => (a.name > b.name ? 1 : -1)),
    createdAt: data.creationDate,
    updatedAt: latestThreadUpdate ?? data.creationDate,
    url: match
      ? `${match[1]}${encodedProject}/_git/${encodedRepo}/pullrequest/${data.pullRequestId}`
      : "",
    amountOfComments: data.threads.reduce(
      (acc, thread) =>
        acc +
        thread.comments.filter(
          (comment) => comment.commentType === CommentType.Text,
        ).length,
      0,
    ),
    isDraft: data.isDraft,
    mergeableState,
    ciStatus: undefined,
    accentColor: getColorForProject(data.repository.id),
    isApprovedByMe: data.reviewers.some(
      (reviewer) =>
        reviewer.displayName === profile.name &&
        reviewer.vote === ReviewerVote.Approved,
    ),
    isAssignedToMe: data.reviewers.some(
      (reviewer) => reviewer.displayName === profile.name,
    ),
    isAuthoredByMe: data.createdBy.displayName === profile.name,
    isCommentedByMe: data.threads.some((thread) =>
      thread.comments.some(
        (comment) => comment.author.displayName === profile.name,
      ),
    ),
  };
};

export default transformAzurePullRequest;
