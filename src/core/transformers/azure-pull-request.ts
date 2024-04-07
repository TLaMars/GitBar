import { PullRequest } from "models/pull-request";
import { AzurePullRequest } from "services/api/azure/models/pull-requests-response";

const transformAzurePullRequest = (data: AzurePullRequest): PullRequest => {
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
    amountOfApprovals: 0,
    amountOfRequiredApprovals: undefined,
  };
};

export default transformAzurePullRequest;
