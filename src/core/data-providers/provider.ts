import Issue from "models/issue";
import Profile from "models/profile";
import { MergeRef, PullRequest } from "models/pull-request";

interface Provider {
  id: string;
  auth: Record<string, string>;

  getProfile(): Promise<Profile>;
  getPullRequests(): Promise<PullRequest[]>;
  getIssues(): Promise<Issue[]>;
  getValidatedProfile(): Promise<Profile>;
  mergePullRequest(mergeRef: MergeRef): Promise<void>;
}

export default Provider;
