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
import compareArraysOfObjects from "utils/compare-object-arrays";
import groupPullRequestsBy from "utils/group-pull-requests";
import sendPullRequestNotification from "utils/send-pull-request-notification";

import useSelector from "./use-selector";

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const prevPullRequestsRef = useRef<PullRequest[]>();

  const [state, setState] = useState({
    loading: false,
    errors: [] as Error[],
    queryResult: [] as PullRequest[],
    execuedAt: Date.now(),
  });

  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const sendNotifications = useSelector(selectAllowNotifications);
  const hiddenPullRequests = useSelector(selectHiddenPullRequests);

  const fetchPullRequests = useCallback(async () => {
    setState((prevState) => ({ ...prevState, loading: true }));

    const result = await Promise.all(
      accounts.map(async (account) => account.pullRequests()),
    );

    const errors = result
      .map(({ error }) => error)
      .filter((error) => error !== undefined);

    const queryResult = result
      .map(({ data }) => data)
      .flat()
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

    if (
      compareArraysOfObjects(prevPullRequestsRef.current ?? [], queryResult)
    ) {
      setState((prevState) => ({ ...prevState, loading: false }));
      return;
    }

    setState({
      loading: false,
      errors: errors as Error[],
      queryResult,
      execuedAt: Date.now(),
    });
  }, [accounts]);

  const relevantPullRequests = useMemo(
    () =>
      state.queryResult
        .filter(
          (pr) =>
            !hiddenPullRequests.some(
              (hiddenPr) =>
                hiddenPr.id === pr.id && hiddenPr.repoName === pr.repoName,
            ),
        )
        .filter((pr) => {
          if (hidePRsAfterTwoMonths) {
            const twoMonthsAgo = new Date();
            twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);
            return new Date(pr.createdAt) > twoMonthsAgo;
          }
          return true;
        })
        .filter((pr) => !hidePRsApprovedByMe || !pr.approvedByMe),
    [
      state.queryResult,
      hiddenPullRequests,
      hidePRsAfterTwoMonths,
      hidePRsApprovedByMe,
    ],
  );

  const groupedPullRequests = useMemo(
    () => groupPullRequestsBy(state.queryResult, groupPRsBy),
    [state.queryResult, groupPRsBy],
  );

  const relevantGroupedPullRequests = useMemo(
    () => groupPullRequestsBy(relevantPullRequests, groupPRsBy),
    [relevantPullRequests, groupPRsBy],
  );

  // Memoize the notifications logic
  useMemo(() => {
    if (sendNotifications) {
      sendPullRequestNotification(
        state.queryResult,
        prevPullRequestsRef.current,
      );
      prevPullRequestsRef.current = state.queryResult;
    }
  }, [sendNotifications, state.queryResult]);

  return {
    pullRequests: groupedPullRequests,
    totalAmountOfPullRequests: state.queryResult.length,
    relevantAmountOfPullRequests: relevantPullRequests.length,
    relevantPullRequests: relevantGroupedPullRequests,
    fetchPullRequests,
    loading: state.loading,
    errors: state.errors,
    executedAt: state.execuedAt,
  };
};

export default usePullRequests;
