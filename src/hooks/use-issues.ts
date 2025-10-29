import { useContext, useMemo } from "react";

import { DataContext } from "contexts/data";
// import Issue from "models/issue";
// import { Section } from "models/section";

const useIssues = () => {
  const { issues: result } = useContext(DataContext);

  const queryInfo = useMemo(
    () => ({
      updatedAt:
        result.length > 0 && result[result.length - 1].dataUpdatedAt > 0
          ? result[result.length - 1].dataUpdatedAt
          : Date.now(),
      isLoading: result.some((d) => d.isLoading),
      errors: result.filter((d) => !!d.error).map((d) => d.error),
    }),
    [result],
  );

  // TODO: Group issues

  return {
    issues: result.flatMap((d) => d.data || []),
    ...queryInfo,
  };
};

export default useIssues;
