import { Attendee } from "./attendee";

export enum GroupPullRequestsBy {
  REPO = "repo",
  DATE = "date",
  NONE = "none",
}

export type PullRequest = {
  id: string;
  title: string;
  author: Attendee;
  repoName: string;
  reviewers: Attendee[];
  createdAt: string;
  url: string;
  amountOfComments?: number;
  amountOfApprovals: number;
  amountOfRequiredApprovals?: number;
  approvedByMe?: boolean;
};
