import { AccountType } from "./account";

export enum AccountState {
  Valid,
  Invalid,
  Unknown,
}

type Profile = {
  id: string;
  name: string;
  type: AccountType;
  userName?: string;
  avatarUrl?: string;
  state: AccountState;
  provider?: string;
};

export default Profile;
