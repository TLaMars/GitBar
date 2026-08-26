# Notifications

macOS notifications for pull requests that need you, so you don't have to keep
the popover open. One banner per PR per event — never a summary.

## Enabling

Settings → App → **"Notifications"**. Turning the toggle on requests macOS
notification permission via `UNUserNotificationCenter`
([NotificationsModule.swift](../../modules/notifications-module/macos/NotificationsModule.swift)).
If permission was denied at the OS level, the toggle is disabled — re-enable
GitBar under System Settings → Notifications first.

## When a notification fires (exact rules)

Every completed data refresh runs through
[use-data-context-helpers.ts](../../src/hooks/context/use-data-context-helpers.ts),
which feeds the PR list into an edge-triggered engine
([derive-notification-events.ts](../../src/utils/derive-notification-events.ts)).
Five signals are computed per PR
([get-pull-request-signals.ts](../../src/utils/get-pull-request-signals.ts)),
ordered most → least urgent:

| Signal              | Banner title                  | Fires when…                                                        |
| ------------------- | ----------------------------- | ------------------------------------------------------------------ |
| `conflicts`         | Your PR has merge conflicts   | your own PR gains conflicts                                        |
| `changesRequested`  | Changes requested on your PR  | a reviewer requests changes on your own PR                         |
| `ciFailed`          | CI failed on your PR          | your own PR's CI turns red                                         |
| `reviewRequested`   | Your review was requested     | someone else's non-draft, not-fully-approved PR awaits your review |
| `readyToMerge`      | Your PR is ready to merge     | your own PR passes the same gate as the Merge pill                 |

The banner body is the PR title. Own-PR signals are gated on authorship, so
someone else's broken PR stays silent; `reviewRequested` mirrors the "Blocked
on you" predicate of the [Needs you tab](needs-you.md).

A notification is an **edge, not a state**. Each signal is an independent
latch per PR: it fires once when the signal goes false → true and re-arms only
when it drops back to false. A PR that *stays* conflicted through twenty polls
notifies once; new pushes or comments while a state holds never re-fire it.

**Urgency collapse:** at most one banner per PR per poll. When several signals
rise together, only the most urgent one fires — but the shadowed latches still
advance, so a shadowed signal only fires later if it drops and rises again.

## When it stays quiet

- **The first poll after launch** — it seeds the baseline silently, so a
  (re)launch never bursts with banners for pre-existing states. ⚠️ Currently
  broken in practice: relaunching has been observed re-firing banners for
  still-true states — see
  [KI-10](../known-issues.md#ki-10--relaunch-re-fires-notification-banners-for-still-true-states).
- **The popover is open** — if you're already looking at the list, no ping.
- **The PR is filtered out** — the engine only emits for the same filtered set
  that powers the tabs and menu-bar badge, so hidden, snoozed, bot, draft, and
  otherwise [filtered](hide-and-snooze.md) PRs never notify. Latches keep
  advancing while a PR is suppressed, so un-snoozing stays silent for whatever
  latched in the meantime.
- **A refresh is still loading** — partial results are never processed.
- **A PR briefly vanishes from a poll** (provider hiccup) — it keeps its
  last-known state, so its reappearance is not a rising edge.

The notifications toggle and the open popover gate only the *sending* — the
latches advance every completed poll regardless, so toggling notifications on
(or closing the popover) never dumps a backlog of stale events.

## Comments do not notify (yet)

The old coarse summary ("You have X new pull requests and Y new comments") is
gone, and with it comment-count notifications. A per-PR `commented` event —
own PRs only, lowest priority — is the first deferred follow-up in the
[notifications v1 plan](../design/notifications-v1-plan.md), alongside banner
action buttons (Open / Snooze / Merge), per-event settings toggles, and banner
retraction on falling edges.

## Native side

Banners are posted through
[notifications-module](../../modules/notifications-module/macos/) with a
payload built in
[build-notification-payload.ts](../../src/utils/build-notification-payload.ts):
`{id, title, body, url, threadId}`.

- The per-PR **id** makes a newer banner for the same PR replace the stale one
  in Notification Center, OS-side.
- **threadId** is the repo name, so Notification Center groups banners per repo.
- **Tapping** a banner opens the PR's http(s) **url** in the browser
  ([NotificationsAppDelegateSubscriber.swift](../../modules/notifications-module/macos/NotificationsAppDelegateSubscriber.swift));
  a payload without a url (like the test banner in Settings) opens the popover
  instead.
- The module sets itself as the `UNUserNotificationCenter` delegate and
  implements `willPresent` — a menu-bar app counts as "active", so without it
  macOS would silently swallow every banner while GitBar runs.
