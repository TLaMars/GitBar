import { IconName } from "components/icon/icon";
import { AccountType } from "models/account";

const AccountMap: Record<AccountType, IconName> = {
  [AccountType.GitHub]: "GitHub",
  [AccountType.GitLab]: "GitLab",
};

export default AccountMap;
