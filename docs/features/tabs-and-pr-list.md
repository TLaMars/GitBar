# Tabs & the PR list

How the popover decides which pull requests you see, in which tab, in which
order.

## Relevance: which PRs exist at all

Before any tab or filter runs, the raw provider results are reduced to PRs that
involve you ([pull-request-filters.ts](../../src/utils/pull-request-filters.ts)):
you **authored** it, you are **assigned as reviewer**, or you **commented** on
it. Everything else in the queried repositories is dropped. The surviving list is
sorted by `updatedAt`, most recently active first — that order carries through
every tab.

## The four tabs

| Tab          | Contents                                                    | User filters applied? |
| ------------ | ----------------------------------------------------------- | --------------------- |
| **Needs you** | All relevant PRs, grouped by [attention reason](needs-you.md) | yes                   |
| **Mine**     | PRs you authored                                             | yes                   |
| **Review**   | PRs you did not author but are assigned to or commented on   | yes                   |
| **All**      | Every relevant PR                                            | **no**                |

"Needs you" is the default tab and carries a count chip of the PRs that need
your action now (the same number as the menu-bar badge).

The last column is deliberate: the settings section is called *"PR filters
(Mine & Review)"* because [hides, snoozes, and the filter toggles](hide-and-snooze.md)
apply to Needs you, Mine, and Review — the **All** tab bypasses them, so it
doubles as the place to find back a PR you hid or snoozed.

## Grouping

Mine, Review, and All are grouped by the *"Group PRs by"* setting
([group-pull-requests.ts](../../src/utils/group-pull-requests.ts)):

- **Repository** — one section per repo.
- **Creation date** — one section per calendar day the PR was opened, newest day
  first.
- **Don't group** — a single flat list (section headers hidden).

The Needs you tab ignores this setting: it always groups by attention reason,
with the "Waiting on others" section rendered collapsible.

## Cards

Each PR card shows the title, author, reviewers with their vote state, the
[CI pill](pipeline-status.md), and at most **one** status badge, resolved in
priority order ([resolve-status-badge.ts](../../src/utils/resolve-status-badge.ts)):
conflicts > changes requested > draft > approved. When the PR passes the
[merge gate](merge.md), the Merge pill takes over that badge slot entirely.
Hovering a card reveals the Snooze and Hide actions; clicking it opens the PR in
your browser.

Settings → *"Compact PR cards"* switches to a one-line-per-PR layout for long
lists.

## Refresh cadence

Each account is polled independently every **3 minutes**
([use-pull-requests-queries.ts](../../src/hooks/queries/use-pull-requests-queries.ts)),
also while the popover is closed — that background poll is what keeps the
menu-bar badge, [urgency dot](menu-bar-urgency-dot.md), and
[notifications](notifications.md) live. Polling pauses while the Mac is locked
and resumes on unlock. The header shows how many minutes ago the data was last
updated.
