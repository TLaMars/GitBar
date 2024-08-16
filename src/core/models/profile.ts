import { AccountType } from "./account";

export enum ProfileStatus {
  Valid,
  Invalid,
  Unknown,
}

type Profile = {
  id: string;
  name: string;
  type: AccountType;
  status: ProfileStatus;
  userName?: string;
  avatarUrl?: string;
};

export default Profile;
