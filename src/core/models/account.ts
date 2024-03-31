export enum AccountType {
  GitHub = "GitHub",
  GitLab = "GitLab",
}

type Account = {
  accountId: string;
  type: AccountType;
  userName: string;
  name?: string;
  avatarUrl: string;

  accessToken: string;
};

export default Account;
