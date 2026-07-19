export enum NotificationPermission {
  NOT_DETERMINED = 0,
  DENIED = 1,
  AUTHORIZED = 2,
  PROVISIONAL = 3,
}

export type NotificationPayload = {
  // Notification identifier: a newer banner with the same id replaces the
  // older one OS-side, so stale states for a PR never stack.
  id: string;
  title: string;
  body: string;
  // Opened in the browser on tap; without it, tapping opens the popover.
  url?: string;
  // threadIdentifier: groups Notification Center per repo.
  threadId?: string;
};

export type NotificationsModuleType = {
  requestPermissions: () => Promise<void>;
  getPermissions: () => Promise<NotificationPermission>;
  sendNotification: (payload: NotificationPayload) => void;
};
