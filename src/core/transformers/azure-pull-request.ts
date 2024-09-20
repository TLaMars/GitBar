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
    url: match
      ? `${match[1]}${encodedProject}/_git/${encodedRepo}/pullrequest/${data.pullRequestId}`
      : "",
    reviewers: data.reviewers.map((reviewer) => ({
      name: reviewer.displayName,
      // TODO: Add avatarUrl
      avatarUrl: "",
    })),
    createdAt: data.creationDate,
    amountOfComments: undefined,
    amountOfApprovals: data.reviewers.filter(
      (reviewer) => reviewer.vote === ReviewerVote.Approved,
    ).length,
    amountOfRequiredApprovals: undefined,
    approvedByMe: data.reviewers.some(
      (reviewer) =>
        reviewer.displayName === profile.name &&
        reviewer.vote === ReviewerVote.Approved,
    ),
    accentColor: getColorForProject(data.repository.id),
  };
};

export default transformAzurePullRequest;
