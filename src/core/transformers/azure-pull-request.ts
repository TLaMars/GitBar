import Profile from "models/profile";
import { PullRequest } from "models/pull-request";
import {
  AzurePullRequest,
  ReviewerVote,
} from "services/api/azure/models/pull-requests-response";
import getColorForProject from "utils/get-project-color";

const transformAzurePullRequest = (
  profile: Profile,
  data: AzurePullRequest,
): PullRequest => {
  const match = /^(https:\/\/dev\.azure\.com\/[^/]+\/)/.exec(
    data.repository.url,
  );
  const encodedProject = encodeURIComponent(data.repository.project.name);
  const encodedRepo = encodeURIComponent(data.repository.name);

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
    reviewers: data.reviewers.map((reviewer) => ({
      name: reviewer.displayName,
      // TODO: Add avatarUrl
      avatarUrl: "",
    })),
    createdAt: data.creationDate,
    url: match
      ? `${match[1]}${encodedProject}/_git/${encodedRepo}/pullrequest/${data.pullRequestId}`
      : "",
    amountOfApprovals: data.reviewers.filter(
      (reviewer) => reviewer.vote === ReviewerVote.Approved,
    ).length,
    isDraft: data.isDraft,
    accentColor: getColorForProject(data.repository.id),
    isApprovedByMe: data.reviewers.some(
      (reviewer) =>
        reviewer.id === profile.id && reviewer.vote === ReviewerVote.Approved,
    ),
    isAssignedToMe: data.reviewers.some(
      (reviewer) => reviewer.id === profile.id,
    ),
    isAuthoredByMe: data.createdBy.id === profile.id,
    isCommentedByMe: data.threads.some((thread) =>
      thread.comments.some((comment) => comment.author.id === profile.id),
    ),
  };
};

export default transformAzurePullRequest;
