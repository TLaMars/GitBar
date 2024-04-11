import { PullRequest } from "models/pull-request";

interface Provider {
  name: string;

  pullRequests(): Promise<PullRequest[]>;
}

export default Provider;
