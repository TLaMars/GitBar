import Profile from "models/profile";
import { PullRequest } from "models/pull-request";

interface Provider {
  auth: Record<string, string>;

  profile(): Promise<Profile>;
  pullRequests(): Promise<PullRequest[]>;
}

export default Provider;
