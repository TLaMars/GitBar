import { useCallback, useContext, useRef, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import { PullRequest } from "models/pull-request";
import {
  selectAllowNotifications,
  selectGroupPRsBy,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import groupPullRequestsBy, {
  PullRequestSection,
} from "utils/group-pull-requests";
import sendPullRequestNotification from "utils/send-pull-request-notification";

import useSelector from "./use-selector";

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const prevPullRequestsRef = useRef<PullRequest[]>();
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
  const sendNotifications = useSelector(selectAllowNotifications);
  const [errors, setErrors] = useState<Error[] | null>(null);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);

    const result = await Promise.all(
      accounts.map(async (account) => account.pullRequests()),
    );

    const groupedData = result.map(({ data }) => data);
    const groupedErrors = result.map(({ error }) => error);
    setErrors(groupedErrors.filter((error) => error !== undefined));

    const sortedResult = groupedData.flat().sort((a, b) => {
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
    if (sendNotifications) {
      sendPullRequestNotification(sortedResult, prevPullRequestsRef.current);
      prevPullRequestsRef.current = sortedResult;
    }
  }, [
    accounts,
    hidePRsAfterTwoMonths,
    groupPRsBy,
    hidePRsApprovedByMe,
    sendNotifications,
  ]);

  return {
    pullRequests,
    relevantAmountOfPullRequests,
    relevantPullRequests,
    fetchPullRequests,
    loading,
    errors,
  };
};

export default usePullRequests;
