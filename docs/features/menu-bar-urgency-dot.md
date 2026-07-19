# Menu-bar urgency dot

An opt-in colored dot next to the PR count in the menu bar that tells you, at a
glance, whether anything needs you — and how urgently — without opening the
popover.

## Enabling it

Settings → Application → **"Colored menu bar icon"**. Off by default; when off (or
when nothing is urgent) the menu bar shows only the monochrome icon and count.

## The urgency ramp

The dot takes the color of the *most urgent* attention bucket present across your
visible PRs ([get-menu-bar-tint.ts](../../src/utils/get-menu-bar-tint.ts)):

| Priority | Bucket         | Color                  | Meaning                              |
| -------- | -------------- | ---------------------- | ------------------------------------ |
| 1        | Needs work     | 🔴 red (`#F05069`)     | One of your PRs needs fixing         |
| 2        | Blocked on you | 🟠 orange (`#F59E0B`)  | Someone is waiting on your review    |
| 3        | Ready to merge | 🟢 green (`#3FB950`)   | One of your PRs can be merged now    |
| —        | Waiting only   | no dot                 | Nothing is actionable for you        |

So a single red PR outranks any number of orange or green ones. The buckets are
the same ones that power the [Needs you tab](needs-you.md), and the dot is computed
from the same filtered PR set as the badge count — hidden, snoozed, and
filtered-out PRs never influence the color.

## How it works

1. Whenever PR data refreshes,
   [use-data-context-helpers.ts](../../src/hooks/context/use-data-context-helpers.ts)
   applies the user filters, derives the tint hex (or `null` when the setting is
   off or nothing is urgent), and calls `PopoverModule.setStatusItemTint(hex)`.
2. The native module
   ([PopoverModule.swift](../../modules/popover-module/macos/PopoverModule.swift))
   forwards the hex via an `NSNotification` to the app delegate subscriber.
3. [PopoverAppDelegateSubscriber.swift](../../modules/popover-module/macos/PopoverAppDelegateSubscriber.swift)
   renders a small `●` (9 pt, nudged up to vertically center) in that color before
   the count text. The status-bar icon itself stays a monochrome template image,
   so it keeps adapting to light/dark menu bars — only the dot carries color.

Passing `null` (setting disabled, or no actionable PRs) clears the dot and renders
the plain count again.
