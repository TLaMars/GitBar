import { Config } from "services/api/api-wrapper";

export type GitHubOAuthPostApiRequest = {
  "/access_token": {
    client_id: string;
    code: string;
    client_secret: string;
  };
};

export type GitHubOAuthPostApiResponse = {
  "/access_token": {
    access_token: string;
    scope: string;
    token_type: string;
  };
};

export type GitHubApi = {
  post: <T extends keyof GitHubOAuthPostApiRequest>(
    path: T,
    data: GitHubOAuthPostApiRequest[T],
    config?: Config,
  ) => Promise<GitHubOAuthPostApiResponse[T]>;
};
