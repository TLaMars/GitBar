import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import Profile from "models/profile";

const useProfiles = () => {
  const accounts = useContext(AccountsContext);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const fetchProfiles = useCallback(async () => {
    const data = await Promise.allSettled(
      accounts.map(async (account) => account.profile()),
    );

    setProfiles(
      data
        .filter((promise) => promise.status === "fulfilled")
        .map((promise) => (promise as PromiseFulfilledResult<Profile>).value),
    );
  }, [accounts]);

  return { profiles, fetchProfiles };
};

export default useProfiles;
