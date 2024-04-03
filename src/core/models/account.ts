export enum AccountType {
  Azure = "Azure",
  GitHub = "GitHub",
  GitLab = "GitLab",
}

type DefaultAccount = {
  accountId: string;
  type: AccountType;
  userName: string;
  name?: string;
  avatarUrl: string;
};

export type GitHubAccount = DefaultAccount & {
  type: AccountType.GitHub;
  accessToken: string;
};

export type GitLabAccount = DefaultAccount & {
  type: AccountType.GitLab;
  privateToken: string;
  domain: string;
};

export type AzureAccount = DefaultAccount & {
  type: AccountType.Azure;
  token: string;
  organization: string;
};

type Account = GitHubAccount | GitLabAccount | AzureAccount;

export default Account;
