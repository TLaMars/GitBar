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

| Minimum-approvers evaluations | Meaning                     | `isApprovalRequired` | `isFullyApproved`       |
| ----------------------------- | --------------------------- | -------------------- | ----------------------- |
| none                          | no approval policy in force | `false`              | any approving vote      |
| `undefined`                   | we never found out          | `true`               | `false`                 |
| one or more                   | approval gate configured    | `true`               | every evaluation passed |

"None in force" is narrower than "empty response". Azure returns optional
(`isBlocking: false`), disabled and out-of-scope (`notApplicable`) policies in the
same list, and none of those stop a completion — so they are filtered out before the
table above applies. A missing flag counts as blocking, so an unfamiliar shape fails
closed.

`undefined` is load-bearing in the failure direction: it suppresses the pill on every
Azure PR. If none of them show a Merge pill, check the console for
`Azure policy evaluations unavailable for PR …` before looking at the approval logic —
the evaluations endpoint is preview-only and needs `api-version=7.1-preview.1`
([azure-provider.ts](../../src/core/data-providers/azure-provider.ts)); plain `7.1`
answers `400`.

`undefined` happens when the policy request fails or when the PR wasn't enriched
(GitBar only enriches PRs you authored or review — see
[azure-provider.ts](../../src/core/data-providers/azure-provider.ts)). Treating
that as "nothing to satisfy" used to show the Merge pill on PRs Azure would refuse
to complete.

Both halves of the gate's approval clause have to fail closed for that to hold.
Reviewer votes can never stand in for the policy: one approval says nothing about a
policy requiring two, so an unknown policy state means *not* fully approved rather
than "someone approved, good enough". Votes only decide the badge when GitBar knows
the repo has no approval policy at all — nothing to be "fully" approved against.

Azure also allows several minimum-approvers policies on one branch (differently
scoped), so all of their evaluations must be `approved`, not just the first one
found.

The required *count* is never read. Azure reports the evaluation `approved` only
once the count is met and `queued` while it is short, so the status answers
"2-of-2?" on its own. Identifying that evaluation depends on a hard-coded policy
type GUID
([policy-evaluations-response.ts](../../src/core/services/api/azure/models/policy-evaluations-response.ts)) —
the wrong id there is silent, since an unrecognised policy simply looks like no
policy, which is exactly how KI-2 and KI-6 happened. A test pins it to a real Azure
response.

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
