import { Attendee } from "./attendee";
import { ThemeColor } from "./theme";

export enum GroupPullRequestsBy {
  REPO = "repo",
  DATE = "date",
  NONE = "none",
}

export enum MergeableState {
  Mergeable = "Mergeable",
  Conflicting = "Conflicting",
  Unknown = "Unknown",
}

export enum CIStatus {
  Success = "Success",
  Failure = "Failure",
  Running = "Running",
  Pending = "Pending",
  None = "None",
}

export type PullRequest = {
  id: string;
  title: string;
  author: Attendee;
  repoId: string;
  repoName: string;
  reviewers: Attendee[];
  createdAt: string;
  updatedAt: string;
  url: string;
  amountOfComments?: number;
  isDraft: boolean;
  mergeableState: MergeableState;
  ciStatus?: CIStatus;
  // Accent Color for the repository
  accentColor: ThemeColor;
  // User specific fields
  isApprovedByMe: boolean;
  isCommentedByMe: boolean;
  isAuthoredByMe: boolean;
  isAssignedToMe: boolean;
};
