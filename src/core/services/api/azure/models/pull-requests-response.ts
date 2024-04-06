export type PullRequestsResponse = {
  count: number;
  value: AzurePullRequest[];
};

export type AzurePullRequest = {
  repository: Repository;
  pullRequestId: number;
  codeReviewId: number;
  status: string;
  createdBy: CreatedBy;
  creationDate: string;
  title: string;
  description: string;
  sourceRefName: string;
  targetRefName: string;
  mergeStatus: string;
  mergeId: string;
  lastMergeSourceCommit: LastMergeSourceCommit;
  lastMergeTargetCommit: LastMergeTargetCommit;
  lastMergeCommit: LastMergeCommit;
  reviewers: Reviewer[];
  url: string;
  supportsIterations: boolean;
};

type Repository = {
  id: string;
  name: string;
  url: string;
  project: Project;
};

type Project = {
  id: string;
  name: string;
  state: string;
};

type CreatedBy = {
  id: string;
  displayName: string;
  uniqueName: string;
  url: string;
  imageUrl: string;
};

export type LastMergeSourceCommit = {
  commitId: string;
  url: string;
};

export type LastMergeTargetCommit = {
  commitId: string;
  url: string;
};

export type LastMergeCommit = {
  commitId: string;
  url: string;
};

export type Reviewer = {
  reviewerUrl: string;
  vote: number;
  id: string;
  displayName: string;
  uniqueName: string;
  url: string;
  imageUrl: string;
};
