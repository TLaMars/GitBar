import { AccountType } from "./account";
import { Attendee } from "./attendee";
import { CiStatus } from "./ci-status";
import { ThemeColor } from "./theme";

export enum GroupPullRequestsBy {
  REPO = "repo",
  DATE = "date",
  NONE = "none",
}

export enum PullRequestTab {
  NEEDS_YOU = "needsYou",
  MINE = "mine",
  REVIEW = "review",
  ALL = "all",
}

export type GitHubMergeRef = {
  provider: AccountType.GitHub;
  pullRequestId: string;
  mergeMethod: "MERGE" | "SQUASH" | "REBASE";
  expectedHeadOid: string;
};

export type GitLabMergeRef = {
  provider: AccountType.GitLab;
  projectPath: string;
  iid: string;
  sha: string;
};

export type AzureMergeRef = {
  provider: AccountType.Azure;
  projectId: string;
  repositoryId: string;
  pullRequestId: number;
  lastMergeSourceCommitId: string;
};

export type MergeRef = GitHubMergeRef | GitLabMergeRef | AzureMergeRef;

// What transformers produce; the owning provider stamps accountId on top.
export type TransformedPullRequest = Omit<PullRequest, "accountId">;

export type PullRequest = {
  id: string;
  title: string;
  author: Attendee;
  repoId: string;
  repoName: string;
  reviewers: Attendee[];
  createdAt: string;
  // Last-activity timestamp (ISO). GitHub/GitLab expose it directly; Azure has
  // no PR-level field, so it is derived from the latest comment thread.
  updatedAt: string;
  url: string;
  amountOfComments?: number;
  isDraft: boolean;
  accentColor: ThemeColor;
  isApprovedByMe: boolean;
  isCommentedByMe: boolean;
  isAuthoredByMe: boolean;
  isAssignedToMe: boolean;
  // Review requested from me AND not yet voted. Cross-provider (GitHub drops you
  // from reviewRequests once you review; GitLab/Azure derive it from my vote).
  // Drives the "Blocked on you" attention reason so it stays tight.
  isReviewPendingFromMe: boolean;
  isFullyApproved: boolean;
  isApprovalRequired: boolean;
  hasConflicts: boolean;
  ci?: CiStatus;
  accountId: string;
  mergeRef?: MergeRef;
};
