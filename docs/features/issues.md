# Issues (GitHub only)

An optional second page in the popover that lists the GitHub issues you're
involved in. Off by default.

## Enabling

Settings → Issues → **"Show my issues (GitHub only)"**. Turning it on adds an
Issues button to the popover's navigation. The page itself guides you when
something is missing: if the toggle is off it links to Settings, and if no
GitHub account is connected it starts the GitHub sign-in.

## What gets collected

For every connected GitHub account
([github-provider.ts](../../src/core/data-providers/github-provider.ts)) two sets
are fetched and merged:

1. issues on repositories you **own or collaborate on**, and
2. issues you **created** anywhere.

The union is de-duplicated and sorted by last activity, newest first. Other
providers return nothing — GitLab and Azure DevOps issue/work-item support is not
implemented.

## Filtering and refresh

- Settings → Issues → **"Hide Issues after 2 months of inactivity"** drops issues
  whose last update is older than two months. Note the difference from the PR
  equivalent: PRs are filtered on *creation* date, issues on *activity* date
  ([use-issues.ts](../../src/hooks/use-issues.ts)).
- Issues poll on a slower cadence than PRs — every **15 minutes** instead of 3
  ([use-issues-queries.ts](../../src/hooks/queries/use-issues-queries.ts)) —
  since they don't feed the menu-bar badge or notifications. Fetching is fully
  disabled while the toggle is off or no GitHub account exists, and pauses while
  the Mac is locked.

Clicking an issue card opens it on GitHub.
