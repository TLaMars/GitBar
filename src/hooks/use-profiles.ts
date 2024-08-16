import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import Profile from "models/profile";

const useProfiles = () => {
  const accounts = useContext(AccountsContext);
  const [profiles, setProfiles] = useState<Profile[]>([]);

  const fetchProfiles = useCallback(async () => {
    const promises = await Promise.allSettled(
      accounts.map(async (account) => account.profile()),
    );

    const data = promises
      .filter((promise) => promise.status === "fulfilled")
      .map((promise) => (promise as PromiseFulfilledResult<Profile>).value);

    setProfiles(data);
  }, [accounts]);

  return { profiles, fetchProfiles };
};

export default useProfiles;
