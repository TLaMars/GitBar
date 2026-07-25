# Merge PRs

Merge a pull request straight from the popover, without opening the browser.

## The Merge pill

A PR card shows a **Merge** pill when the PR passes the merge gate. The pill takes
the card's single status-badge slot — a mergeable PR shows the call-to-action
instead of an "approved" badge, since at most one badge is rendered per card.

## The merge gate

The pill only appears when *all* of these hold
([can-merge-pull-request.ts](../../src/utils/can-merge-pull-request.ts)):

- not a draft
- fully approved, **or** no approval required by the repository
- no merge conflicts
- CI is passing, or there is no CI
- a `mergeRef` is available (the provider gave us everything needed to merge)

This is the exact same gate that puts your own PRs in the "Ready to merge" bucket
of the [Needs you tab](needs-you.md), so the pill and the section always agree.

### Unknown approval state fails closed

"No approval required" must be a real answer from the provider, never a
side-effect of missing data. On Azure the approval signal comes from branch-policy
evaluations, and GitBar distinguishes two cases
([azure-pull-request.ts](../../src/core/transformers/azure/azure-pull-request.ts)):

| Policy evaluations | Meaning                       | `isApprovalRequired` |
| ------------------ | ----------------------------- | -------------------- |
| empty list         | repo has no branch policies   | `false`              |
| `undefined`        | we never found out            | `true`               |

`undefined` happens when the policy request fails or when the PR wasn't enriched
(GitBar only enriches PRs you authored or review — see
[azure-provider.ts](../../src/core/data-providers/azure-provider.ts)). Treating
that as "nothing to satisfy" used to show the Merge pill on PRs Azure would refuse
to complete.

## How the merge executes

The card calls
[use-merge-pull-request.ts](../../src/hooks/mutations/use-merge-pull-request.ts),
which resolves the right account provider and fires a provider-specific request
using the `mergeRef` captured at fetch time:

| Provider     | Call                                    | Staleness guard                                                       |
| ------------ | --------------------------------------- | --------------------------------------------------------------------- |
| GitHub       | GraphQL `mergePullRequest` mutation     | `expectedHeadOid` — the head commit at fetch time; the merge fails if the branch moved since |
| GitLab       | GraphQL `mergeRequestAccept` mutation   | `sha` (the diff head) — GitLab rejects the accept if the MR changed    |
| Azure DevOps | REST `PATCH` PR to `status: completed`  | `lastMergeSourceCommit` id                                             |

Every provider merges with its own defaults: GitHub uses the repository's
`viewerDefaultMergeMethod` (merge / squash / rebase as configured), GitLab and
Azure use the project's merge settings. When a provider can't supply the required
ref (e.g. GitLab without a head sha), `mergeRef` stays `undefined` and the merge
action simply isn't offered.

## After the click

- **Success**: a toast confirms the merge, the PR is removed from the local cache
  immediately (GitHub's search index can lag and would otherwise briefly
  resurrect the card), and a refetch follows.
- **Failure**: the provider's error appears as a toast and the PR list re-syncs,
  so the pill re-gates against the PR's real remote state (e.g. a new commit
  invalidated the staleness guard).
- The pill is disabled while a merge is pending, with a double-click guard on
  top.
