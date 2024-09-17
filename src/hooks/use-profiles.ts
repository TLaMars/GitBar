import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import Profile from "models/profile";

const useProfiles = () => {
  const accounts = useContext(AccountsContext);
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [errors, setErrors] = useState<Error[] | null>(null);

  const fetchProfiles = useCallback(async () => {
    const result = await Promise.all(
      accounts.map((account) => account.profile()),
    );

    const groupedProfiles = result.map(({ data }) => data);
    const groupedErrors = result.map(({ error }) => error);

    setProfiles(groupedProfiles);
    setErrors(groupedErrors.filter((error) => error !== undefined));
  }, [accounts]);

  return { profiles, fetchProfiles, errors };
};

export default useProfiles;
