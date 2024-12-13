import { useQueries } from "@tanstack/react-query";
import { useContext, useMemo, useRef } from "react";

import { AccountsContext } from "contexts/accounts";
import { PullRequest } from "models/pull-request";
import { MacState } from "modules/app-module";
import { selectHiddenPullRequests } from "store/selectors/pull-requests";
import {
  selectAllowNotifications,
  selectGroupPRsBy,
  selectHideDraftPRs,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import groupPullRequestsBy from "utils/group-pull-requests";
import sendPullRequestNotification from "utils/send-pull-request-notification";

import useMacState from "./use-mac-state";
import useSelector from "./use-selector";

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const macState = useMacState();
  const prevPrsRef = useRef<PullRequest[]>();

  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const sendNotifications = useSelector(selectAllowNotifications);
  const hiddenPullRequests = useSelector(selectHiddenPullRequests);
  const hideDraftPRs = useSelector(selectHideDraftPRs);

  const data = useQueries({
    queries: accounts.map((account) => ({
      queryKey: ["pull-requests", account.id],
      queryFn: async () => {
        const { data: result } = await account.pullRequests();
        return result;
      },
      refetchInterval: 180000,
      enabled: macState === MacState.UNLOCKED,
    })),
  });

  const queryInfo = useMemo(
    () => ({
      updatedAt:
        data.length > 0 && data[data.length - 1].dataUpdatedAt > 0
          ? data[data.length - 1].dataUpdatedAt
          : Date.now(),
      isFetching: data.some((d) => d.isFetching),
      errors: data.reduce((acc, d) => {
        if (d.error) {
          return [...acc, d.error];
        }
        return acc;
      }, [] as Error[]),
    }),
    [data],
  );

  const {
    pullRequests,
    relevantPullRequests,
    groupedAllPrs,
    groupedRelevantPRs,
  } = useMemo(() => {
    const prs = data
      .map((d) => d.data)
      .flat()
      .filter((d) => d !== undefined)
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      );

    const relevantPrs = prs
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
      .filter((pr) => !hidePRsApprovedByMe || !pr.isApprovedByMe)
      .filter((pr) => !pr.isDraft || !hideDraftPRs);

    const prsGrouped = groupPullRequestsBy(prs, groupPRsBy);
    const relevantPrsGrouped = groupPullRequestsBy(relevantPrs, groupPRsBy);

    return {
      pullRequests: prs,
      relevantPullRequests: relevantPrs,
      groupedAllPrs: prsGrouped,
      groupedRelevantPRs: relevantPrsGrouped,
    };
  }, [
    data,
    hiddenPullRequests,
    hideDraftPRs,
    hidePRsAfterTwoMonths,
    hidePRsApprovedByMe,
    groupPRsBy,
  ]);

  useMemo(() => {
    if (sendNotifications && !queryInfo.isFetching) {
      sendPullRequestNotification(relevantPullRequests, prevPrsRef.current);
      prevPrsRef.current = relevantPullRequests;
    }
  }, [sendNotifications, relevantPullRequests, queryInfo.isFetching]);

  return {
    pullRequests,
    relevantPullRequests,
    groupedAllPrs,
    groupedRelevantPRs,
    ...queryInfo,
  };
};

export default usePullRequests;
