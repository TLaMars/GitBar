import { AccountType } from "./account";

type Profile = {
  id: string;
  name: string;
  userName?: string;
  avatarUrl?: string;
  type: AccountType;
};

export default Profile;
