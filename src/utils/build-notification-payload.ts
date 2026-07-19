import {
  getPullRequestKey,
  NotificationEvent,
} from "utils/derive-notification-events";
import { NotificationSignal } from "utils/get-pull-request-signals";

export type NotificationPayload = {
  // Per-PR identifier: a newer banner for the same PR replaces the older one
  // OS-side, across event types, so stale states never stack.
  id: string;
  title: string;
  body: string;
  url?: string;
  // Groups Notification Center per repo.
  threadId?: string;
};

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
