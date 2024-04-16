import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import {
  selectGroupPRsBy,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import groupPullRequestsBy, {
  PullRequestSection,
} from "utils/group-pull-requests";

import useSelector from "./use-selector";

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const [pullRequests, setPullRequests] = useState<PullRequestSection[]>([]);
  const [relevantPullRequests, setRelevantPullRequests] = useState<
    PullRequestSection[]
  >([]);
  const [relevantAmountOfPullRequests, setRelevantAmountOfPullRequests] =
    useState(0);
  const [loading, setLoading] = useState(false);
  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);

    const result = await Promise.all(
      accounts.map(async (account) => account.pullRequests()),
    );

    const sortedResult = result.flat().sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    });

    const relevantResult = sortedResult
      // Filter out PRs that are older than two months
      .filter((pr) => {
        if (hidePRsAfterTwoMonths) {
          const twoMonthsAgo = new Date();
          twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

          return new Date(pr.createdAt) > twoMonthsAgo;
        }
        return true;
      })
      // Filter out PRs that are approved by me
      .filter((pr) => {
        if (hidePRsApprovedByMe) {
          return !pr.approvedByMe;
        }
        return true;
      });

    const groupedResult = groupPullRequestsBy(sortedResult, groupPRsBy);
    const relevantGroupedResult = groupPullRequestsBy(
      relevantResult,
      groupPRsBy,
    );

    setPullRequests(groupedResult);
    setRelevantPullRequests(relevantGroupedResult);
    setRelevantAmountOfPullRequests(relevantResult.length);
    setLoading(false);
  }, [accounts, hidePRsAfterTwoMonths, groupPRsBy, hidePRsApprovedByMe]);

  return {
    pullRequests,
    relevantAmountOfPullRequests,
    relevantPullRequests,
    fetchPullRequests,
    loading,
  };
};

export default usePullRequests;
