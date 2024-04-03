import { useMemo } from "react";

import {
  AccountType,
  AzureAccount,
  GitHubAccount,
  GitLabAccount,
} from "models/account";
import { selectAccounts } from "store/selectors/accounts";

import useSelector from "./use-selector";

type AccountsByType = {
  gitHubAccounts: GitHubAccount[];
  gitLabAccounts: GitLabAccount[];
  azureAccounts: AzureAccount[];
};

const useAccountsByType = () => {
  const accounts = useSelector(selectAccounts);

  return useMemo(
    () =>
      accounts.reduce<AccountsByType>(
        (acc, account) => {
          switch (account.type) {
            case AccountType.GitHub:
              acc.gitHubAccounts = [...acc.gitHubAccounts, account];
              break;
            case AccountType.GitLab:
              acc.gitLabAccounts = [...acc.gitLabAccounts, account];
              break;
            case AccountType.Azure:
              acc.azureAccounts = [...acc.azureAccounts, account];
              break;
            default:
              break;
          }
          return acc;
        },
        {
          gitHubAccounts: [],
          gitLabAccounts: [],
          azureAccounts: [],
        },
      ),
    [accounts],
  );
};

export default useAccountsByType;
