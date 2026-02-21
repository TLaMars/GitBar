import { useContext, useMemo } from "react";

import { DataContext } from "contexts/data";
import { selectHideIssuesAfterTwoMonths } from "store/selectors/settings";

import useSelector from "./use-selector";

const useIssues = () => {
  const { issues: result } = useContext(DataContext);
  const hideIssuesAfterTwoMonths = useSelector(selectHideIssuesAfterTwoMonths);

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

  const issues = useMemo(
    () =>
      result
        .flatMap((d) => d.data || [])
        .filter((issue) => {
          if (hideIssuesAfterTwoMonths) {
            const twoMonthsAgo = new Date();
            twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
            return new Date(issue.updatedAt) > twoMonthsAgo;
          }
          return true;
        }),
    [result, hideIssuesAfterTwoMonths],
  );

  return {
    issues,
    ...queryInfo,
  };
};

export default useIssues;
