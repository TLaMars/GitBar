export type AzureAuth = {
  token: string;
  organization: string;
};

export type GitHubAuth = {
  accessToken: string;
};

export type GitLabAuth = {
  privateToken: string;
  domain: string;
};
