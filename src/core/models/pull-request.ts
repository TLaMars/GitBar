import { Attendee } from "./attendee";
import { CiStatus } from "./ci-status";
import { ThemeColor } from "./theme";

export enum GroupPullRequestsBy {
  REPO = "repo",
  DATE = "date",
  NONE = "none",
}

export enum PullRequestTab {
  MINE = "mine",
  REVIEW = "review",
  ALL = "all",
}

export type PullRequest = {
  id: string;
  title: string;
  author: Attendee;
  repoId: string;
  repoName: string;
  reviewers: Attendee[];
  createdAt: string;
  url: string;
  amountOfComments?: number;
  isDraft: boolean;
  // Accent Color for the repository
  accentColor: ThemeColor;
  // User specific fields
  isApprovedByMe: boolean;
  isCommentedByMe: boolean;
  isAuthoredByMe: boolean;
  isAssignedToMe: boolean;
  // True when the provider's approval policy is satisfied (e.g. required
  // review count reached on GitHub, all approval rules met on GitLab,
  // minimum-approvers policy approved on Azure).
  isFullyApproved: boolean;
  // True when the branch has unresolved merge conflicts. GitHub can also
  // return Unknown (still computing) — we treat that as false so we never
  // flag a false positive.
  hasConflicts: boolean;
  // CI / pipeline status. Undefined when the provider has not yet been
  // wired up, or when there is no data (transformer decides between
  // undefined and CiState.None).
  ci?: CiStatus;
};
