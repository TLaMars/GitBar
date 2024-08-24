import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import Profile from "models/profile";

const useProfiles = () => {
  const accounts = useContext(AccountsContext);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const fetchProfiles = useCallback(async () => {
    const data = await Promise.all(
      accounts.map((account) => account.profile()),
    );

    setProfiles(data);
  }, [accounts]);

  return { profiles, fetchProfiles };
};

export default useProfiles;
