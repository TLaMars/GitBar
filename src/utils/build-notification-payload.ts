import type { NotificationPayload } from "modules/notifications-module";
import {
  getPullRequestKey,
  NotificationEvent,
} from "utils/derive-notification-events";
import { NotificationSignal } from "utils/get-pull-request-signals";

// Plain English constants — react-intl lives inside the component tree only,
// and this runs from the poll loop.
const TITLES: Record<NotificationSignal, string> = {
  conflicts: "Your PR has merge conflicts",
  changesRequested: "Changes requested on your PR",
  ciFailed: "CI failed on your PR",
  reviewRequested: "Your review was requested",
  readyToMerge: "Your PR is ready to merge",
};

const buildNotificationPayload = (
  event: NotificationEvent,
): NotificationPayload => ({
  id: getPullRequestKey(event.pullRequest),
  title: TITLES[event.type],
  body: event.pullRequest.title,
  url: event.pullRequest.url,
  threadId: event.pullRequest.repoName,
});

export default buildNotificationPayload;
