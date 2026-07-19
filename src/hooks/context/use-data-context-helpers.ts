import { UseQueryResult } from "@tanstack/react-query";
import { useCallback, useRef } from "react";
import { useSelector } from "react-redux";

import usePopoverState, { PopoverState } from "hooks/use-popover-state";
import { PullRequest } from "models/pull-request";
import NotificationsModule from "modules/notifications-module";
import PopoverModule from "modules/popover-module";
import {
  selectHiddenPullRequests,
  selectSnoozedPullRequests,
} from "store/selectors/pull-requests";
import {
  selectAllowNotifications,
  selectColoredMenuBarIcon,
  selectHideBotPRs,
  selectHideDraftPRs,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import buildNotificationPayload from "utils/build-notification-payload";
import deriveNotificationEvents, {
  getPullRequestKey,
  NotificationSnapshot,
} from "utils/derive-notification-events";
import getMenuBarTint from "utils/get-menu-bar-tint";
import { countActionablePullRequests } from "utils/group-pull-requests-by-attention";
import { filterSnoozed } from "utils/is-pull-request-snoozed";
import {
  applyUserFilters,
  filterPRQueryResult,
} from "utils/pull-request-filters";

// This hook is used to update the menu bar and send notifications
// directly from the data context.
const useDataHelper = () => {
  // Last-seen notification latches per PR; null until the first completed
  // poll, which seeds silently so a (re)launch never bursts.
  const snapshotRef = useRef<NotificationSnapshot | null>(null);

  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const hiddenPullRequests = useSelector(selectHiddenPullRequests);
  const snoozedPullRequests = useSelector(selectSnoozedPullRequests);
  const hideDraftPRs = useSelector(selectHideDraftPRs);
  const hideBotPRs = useSelector(selectHideBotPRs);
  const coloredMenuBarIcon = useSelector(selectColoredMenuBarIcon);
  const sendNotifications = useSelector(selectAllowNotifications);
  const popoverState = usePopoverState();

  const updateMenuBarAndSendNotification = useCallback(
    (result: UseQueryResult<PullRequest[], Error>[]) => {
      const prs = filterPRQueryResult(result);
      const relevantPrs = filterSnoozed(
        applyUserFilters(
          prs,
          hiddenPullRequests,
          hidePRsAfterTwoMonths,
          hidePRsApprovedByMe,
          hideDraftPRs,
          hideBotPRs,
        ),
        snoozedPullRequests,
        Date.now(),
      );

      if (result.some((d) => d.isLoading)) return;

      // The badge shows how many PRs need your action now (the "Needs you"
      // count), matching the tab chip — not the total relevant count.
      PopoverModule.setStatusItemText(
        countActionablePullRequests(relevantPrs).toString(),
      );

      // Menu-bar urgency dot (D15), behind a setting.
      PopoverModule.setStatusItemTint(
        coloredMenuBarIcon ? getMenuBarTint(relevantPrs) : null,
      );

      // The latches advance every completed poll, unconditionally — the
      // settings toggle and the open popover gate only the sending. Advancing
      // the baseline inside the gate would burst the whole backlog the moment
      // notifications are toggled on (or the popover closes).
      const { events, next } = deriveNotificationEvents(
        snapshotRef.current,
        prs,
        new Set(relevantPrs.map(getPullRequestKey)),
      );
      snapshotRef.current = next;

      if (sendNotifications && popoverState === PopoverState.CLOSED) {
        events.forEach((event) => {
          NotificationsModule.sendNotification(buildNotificationPayload(event));
        });
      }
    },
    [
      hiddenPullRequests,
      snoozedPullRequests,
      hidePRsAfterTwoMonths,
      hidePRsApprovedByMe,
      hideDraftPRs,
      hideBotPRs,
      coloredMenuBarIcon,
      sendNotifications,
      popoverState,
    ],
  );

  return {
    updateMenuBarAndSendNotification,
  };
};

export default useDataHelper;
