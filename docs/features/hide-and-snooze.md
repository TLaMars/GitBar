# Hiding, snoozing and filters

Tools to keep the PR list down to what you actually care about. All of them feed
one shared filter pipeline, so a PR you snooze or hide disappears *everywhere at
once*: the tabs, the "Needs you" sections, the menu-bar badge count, the
[urgency dot](menu-bar-urgency-dot.md), and [notifications](notifications.md).

## Snooze (until updated)

The **Snooze** action appears when hovering a PR card. Snoozing captures the PR's
current `updatedAt` timestamp
([use-pull-request-actions.ts](../../src/hooks/use-pull-request-actions.ts)) and
drops the PR from view for as long as that timestamp is unchanged
([is-pull-request-snoozed.ts](../../src/utils/is-pull-request-snoozed.ts)).

The moment the PR sees *any* new activity — a push, a comment, a review — the
provider bumps `updatedAt` and the PR reappears on its own. There is nothing to
un-snooze manually: "snoozed" means "wake me when something happens".

The store model
([pull-requests slice](../../src/core/store/slices/pull-requests.ts)) also
supports date-based snoozes (`{ type: "date", until }`, e.g. "for 1 day") that
expire by clock time; the card action currently always snoozes until updated.
Snoozing the same PR again replaces the existing snooze.

## Hide

The **Hide** action (also on card hover) removes a PR permanently, keyed by PR id
plus repository name. Unlike a snooze it does not come back on activity — use it
for PRs that will never be yours to care about. There is currently no user-facing
un-hide; dev builds have a "Reset hidden PRs" button in Settings.

Both hidden and snoozed state persist across app restarts.

### Where card hover lives

The hovered card is a single `hoveredKey` on the list
([pull-request-list.tsx](../../src/components/pull-request-list/pull-request-list.tsx)),
not per-card state. AppKit only delivers mouse enter/exit on pointer *movement*,
so a card that slides out from under a resting pointer never receives its leave
event — with N independent card states that stranded the actions on the wrong card
([KI-3](../known-issues.md#ki-3--card-hover-state-is-flaky-doesnt-trigger-or-stays-stuck-active)).
One owner means at most one card is ever armed, and the list drops the key whenever
the rendered order changes. Cards are keyed by `accountId:id`, since Azure PR ids
are only unique per organization.

## Filter toggles (Settings → Pull requests)

| Setting                          | What it drops                                                    |
| -------------------------------- | ---------------------------------------------------------------- |
| Hide PRs approved by me          | PRs you already approved                                          |
| Hide draft PRs                   | PRs still marked as draft                                         |
| Hide bot PRs                     | PRs whose author is a bot (see below)                             |
| Hide PRs older than two months   | PRs *created* more than two months ago                            |

Bot detection is provider-specific
([transformers](../../src/core/transformers/)): GitHub authors whose login ends
in `[bot]` (e.g. `dependabot[bot]`), GitLab's native `bot` flag on the author.
Azure DevOps has no bot marker, so Azure PRs are never treated as bot PRs.

## How the pipeline fits together

[pull-request-filters.ts](../../src/utils/pull-request-filters.ts) applies, in
order: relevance (only PRs you authored, are assigned to, or commented on),
manual hides, the settings toggles above, then active snoozes. The exact same
sequence runs for the tab lists
([use-pull-requests.ts](../../src/hooks/use-pull-requests.ts)) and for the
menu-bar/notification path
([use-data-context-helpers.ts](../../src/hooks/context/use-data-context-helpers.ts)),
which is what keeps every surface in agreement about which PRs exist.
