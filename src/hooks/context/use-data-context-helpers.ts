import { UseQueryResult } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

import usePopoverState, { PopoverState } from "hooks/use-popover-state";
import { PullRequest } from "models/pull-request";
import PopoverModule from "modules/popover-module";
import { selectHiddenPullRequests } from "store/selectors/pull-requests";
import {
  selectAllowNotifications,
  selectHideDraftPRs,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import { countActionablePullRequests } from "utils/group-pull-requests-by-attention";
import {
  applyUserFilters,
  filterPRQueryResult,
} from "utils/pull-request-filters";
import sendPullRequestNotification from "utils/send-pull-request-notification";

// This hook is used to update the menu bar and send notifications
// directly from the data context.
const useDataHelper = () => {
  const prevPrsRef = useRef<PullRequest[]>([]);

  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const hiddenPullRequests = useSelector(selectHiddenPullRequests);
  const hideDraftPRs = useSelector(selectHideDraftPRs);
  const sendNotifications = useSelector(selectAllowNotifications);
  const popoverState = usePopoverState();

  const updateMenuBarAndSendNotification = useCallback(
    (result: UseQueryResult<PullRequest[], Error>[]) => {
      const prs = filterPRQueryResult(result);
      const relevantPrs = applyUserFilters(
        prs,
        hiddenPullRequests,
        hidePRsAfterTwoMonths,
        hidePRsApprovedByMe,
        hideDraftPRs,
      );

      if (result.some((d) => d.isLoading)) return;

      // The badge shows how many PRs need your action now (the "Needs you"
      // count), matching the tab chip — not the total relevant count.
      PopoverModule.setStatusItemText(
        countActionablePullRequests(relevantPrs).toString(),
      );

      if (sendNotifications && popoverState === PopoverState.CLOSED) {
        sendPullRequestNotification(relevantPrs, prevPrsRef.current);
        prevPrsRef.current = relevantPrs;
      }
    },
    [
      hiddenPullRequests,
      hidePRsAfterTwoMonths,
      hidePRsApprovedByMe,
      hideDraftPRs,
      sendNotifications,
      popoverState,
    ],
  );

  return {
    updateMenuBarAndSendNotification,
  };
};

export default useDataHelper;
