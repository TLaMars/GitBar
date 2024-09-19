import { useCallback, useContext, useMemo, useRef, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import { PullRequest } from "models/pull-request";
import { selectHiddenPullRequests } from "store/selectors/pull-requests";
import {
  selectAllowNotifications,
  selectGroupPRsBy,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import groupPullRequestsBy from "utils/group-pull-requests";
import sendPullRequestNotification from "utils/send-pull-request-notification";

import useSelector from "./use-selector";

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const prevPullRequestsRef = useRef<PullRequest[]>();
  const [loading, setLoading] = useState(false);
  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const sendNotifications = useSelector(selectAllowNotifications);
  const hiddenPullRequests = useSelector(selectHiddenPullRequests);
  const [errors, setErrors] = useState<Error[]>([]);
  const [queryResult, setQueryResult] = useState<PullRequest[]>([]);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);

    const result = await Promise.all(
      accounts.map(async (account) => account.pullRequests()),
    );

    setErrors(
      result.map(({ error }) => error).filter((error) => error !== undefined),
    );
    setQueryResult(result.map(({ data }) => data).flat());

    setLoading(false);
  }, [accounts]);

  return useMemo(() => {
    const sortedResult = queryResult.flat().sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    });

    const nonHiddenResult = sortedResult.filter(
      (pr) =>
        !hiddenPullRequests.some(
          (hiddenPr) =>
            hiddenPr.id === pr.id && hiddenPr.repoName === pr.repoName,
        ),
    );

    const relevantResult = nonHiddenResult
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

    const groupedResult = groupPullRequestsBy(nonHiddenResult, groupPRsBy);
    const relevantGroupedResult = groupPullRequestsBy(
      relevantResult,
      groupPRsBy,
    );

    setLoading(false);
    if (sendNotifications) {
      sendPullRequestNotification(sortedResult, prevPullRequestsRef.current);
      prevPullRequestsRef.current = sortedResult;
    }

    return {
      pullRequests: groupedResult,
      relevantAmountOfPullRequests: relevantResult.length,
      relevantPullRequests: relevantGroupedResult,
      fetchPullRequests,
      loading,
      errors,
    };
  }, [
    errors,
    fetchPullRequests,
    groupPRsBy,
    hiddenPullRequests,
    hidePRsAfterTwoMonths,
    hidePRsApprovedByMe,
    loading,
    queryResult,
    sendNotifications,
  ]);
};

export default usePullRequests;
