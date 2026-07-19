# Notifications

macOS notifications for new activity on the pull requests you follow, so you don't
have to keep the popover open.

## Enabling

Settings → App → **"Notifications"**. Turning the toggle on requests macOS
notification permission via `UNUserNotificationCenter`
([NotificationsModule.swift](../../modules/notifications-module/macos/NotificationsModule.swift)).
If permission was denied at the OS level, the toggle is disabled — re-enable
GitBar under System Settings → Notifications first.

## When a notification fires (exact rules)

Every data refresh runs through
[use-data-context-helpers.ts](../../src/hooks/context/use-data-context-helpers.ts),
which compares the new PR list against the previous fetch
([send-pull-request-notification.ts](../../src/utils/send-pull-request-notification.ts)).
Exactly two things count:

1. **A PR newly appears in your list**, and you are not its author. Your list
   only ever contains PRs you authored, are assigned to review, or commented on
   — so "appears" covers two situations:
   - a brand-new PR you're involved in was opened, or
   - **your review was just requested** on an existing PR: that is the moment it
     enters your filtered set, so from the diff's perspective it is new.
2. **The comment count increased** on a PR that was in both fetches (any
   commenter counts, including you).

Both are aggregated into a single notification ("You have X new pull requests and
Y new comments") rather than one banner per event.

## When it stays quiet

- **The popover is open** — if you're already looking at the list, no ping.
- **The PR is filtered out** — the diff runs on the same filtered set as the tabs
  and menu-bar badge, so hidden PRs, snoozed PRs, bot PRs, drafts, and anything
  else excluded by your [filters](hide-and-snooze.md) never trigger a
  notification.
- **A refresh is still loading** — partial results are never diffed.

## Status changes do not notify (yet)

The attention buckets of the [Needs you tab](needs-you.md) are *not* notification
triggers. A PR already in your list that gains merge conflicts, gets changes
requested, has its CI turn red, or becomes ready to merge will move between
sections and can change the [menu-bar urgency dot](menu-bar-urgency-dot.md) — but
it stays silent, because the diff only looks at list membership and comment
counts, not at PR state.

A status-based engine is fully specced in the
[notifications v1 plan](../design/notifications-v1-plan.md): five edge-triggered
events (conflicts, changes requested, CI failed, review requested, ready to
merge), collapsed to one banner per PR per poll by urgency, with a silent
baseline on launch and tap-to-open. It was prototyped and deliberately reverted
to keep `main` clean while its scope settles, so until it lands the two rules
above are the complete story.

## Native side

The notification is posted through
[notifications-module](../../modules/notifications-module/macos/), which sets
itself as the `UNUserNotificationCenter` delegate so banners are also presented
while GitBar itself is the frontmost app.
