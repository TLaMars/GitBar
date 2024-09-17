import { ApolloError } from "@apollo/client";

import Profile from "models/profile";
import { PullRequest } from "models/pull-request";

type Response<T> = {
  data: T;
  error?: ApolloError | Error | undefined;
};

interface Provider {
  id: string;
  auth: Record<string, string>;

  profile(): Promise<Response<Profile>>;
  pullRequests(): Promise<Response<PullRequest[]>>;
}

export default Provider;
