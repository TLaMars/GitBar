import { AccountType } from "models/account";
import { RootState } from "store/configure";
import { accountsAdapter } from "store/slices/accounts";

export const accountsSelectors = accountsAdapter.getSelectors(
  (state: RootState) => state.accounts,
);

export const selectAccountById = (state: RootState, id: string) =>
  accountsSelectors.selectById(state, id);

export const selectAccounts = (state: RootState) =>
  accountsSelectors.selectAll(state);

export const selectHasGitHubAccount = (state: RootState) =>
  accountsSelectors.selectAll(state).some((a) => a.type === AccountType.GitHub);
