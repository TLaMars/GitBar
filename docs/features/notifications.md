# Notifications

macOS notifications for new activity on the pull requests you follow, so you don't
have to keep the popover open.

## Enabling

Settings → App → **"Notifications"**. Turning the toggle on requests macOS
notification permission via `UNUserNotificationCenter`
([NotificationsModule.swift](../../modules/notifications-module/macos/NotificationsModule.swift)).
If permission was denied at the OS level, the toggle is disabled — re-enable
GitBar under System Settings → Notifications first.

## When a notification fires

Every data refresh runs through
[use-data-context-helpers.ts](../../src/hooks/context/use-data-context-helpers.ts),
which compares the new PR list against the previous fetch
([send-pull-request-notification.ts](../../src/utils/send-pull-request-notification.ts)).
Two kinds of activity count:

1. **New pull requests** — PRs that were not in the previous fetch, excluding PRs
   you authored yourself (you already know about those).
2. **New comments** — an increase in the comment count of a PR that was already
   in the previous fetch.

Both are aggregated into a single notification ("You have X new pull requests and
Y new comments") rather than one banner per event.

## When it stays quiet

- **The popover is open** — if you're already looking at the list, no ping.
- **The PR is filtered out** — the diff runs on the same filtered set as the tabs
  and menu-bar badge, so hidden PRs, snoozed PRs, bot PRs, drafts, and anything
  else excluded by your [filters](hide-and-snooze.md) never trigger a
  notification.
- **A refresh is still loading** — partial results are never diffed.

## Native side

The notification is posted through
[notifications-module](../../modules/notifications-module/macos/), which sets
itself as the `UNUserNotificationCenter` delegate so banners are also presented
while GitBar itself is the frontmost app.
