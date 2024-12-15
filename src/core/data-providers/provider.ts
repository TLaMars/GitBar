import Profile from "models/profile";
import { PullRequest } from "models/pull-request";

interface Provider {
  id: string;
  auth: Record<string, string>;

  getProfile(): Promise<Profile>;
  getPullRequests(): Promise<PullRequest[]>;
  getValidatedProfile(): Promise<Profile>;
}

export default Provider;
