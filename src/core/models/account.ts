export enum AccountType {
  GitHub = "github",
}

type Account = {
  accountId: string;
  type: AccountType;
  userName: string;
  avatarUrl?: string;

  accessToken: string;
};

export default Account;
