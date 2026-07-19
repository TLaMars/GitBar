# "Needs you" tab

The default tab of the popover. Instead of listing pull requests by repository or
provider, it groups them by *why they need your attention*, so the most actionable
work is always at the top.

## Attention buckets

Every visible PR is assigned exactly one `AttentionReason`
([get-attention-reason.ts](../../src/utils/get-attention-reason.ts)), evaluated in
priority order:

| Order | Bucket           | Section title        | Meaning                                                 |
| ----- | ---------------- | -------------------- | ------------------------------------------------------- |
| 1     | `NeedsWork`      | "Your PR needs work" | Your own PR that you must fix before it can move        |
| 2     | `BlockedOnYou`   | "Blocked on you"     | Someone else's PR waiting on your review                |
| 3     | `ReadyToMerge`   | "Ready to merge"     | Your own PR that you can merge right now                |
| 4     | `Waiting`        | "Waiting on others"  | Everything else (the residual, rendered collapsible)    |

## Exact conditions (first match wins)

The checks run top to bottom; the first one that matches decides the bucket, so a
PR of yours with both changes requested *and* a passing merge gate is "Needs work",
never "Ready to merge".

```text
1. Your PR needs work
   isAuthoredByMe
   AND at least one of:
     - hasConflicts
     - ci.state == Failure
     - any reviewer vote is Rejected or WaitingFor   (= changes requested)
     - unresolvedThreadCount > 0

2. Blocked on you
   NOT isAuthoredByMe
   AND isReviewPendingFromMe
   AND NOT isDraft
   AND NOT isFullyApproved

3. Ready to merge
   isAuthoredByMe
   AND NOT isDraft
   AND (isFullyApproved OR NOT isApprovalRequired)
   AND NOT hasConflicts
   AND CI is passing, none, or absent
   AND mergeRef is present                            (provider supports merging it)

4. Waiting on others
   everything else
```

The actionable buckets are disjoint by construction — needs-work and ready-to-merge
apply only to your own PRs, blocked-on-you only to someone else's — so the ordering
is unambiguous. The sections below explain how each input flag is derived per
provider.

Sections are built and ordered in
[group-pull-requests-by-attention.ts](../../src/utils/group-pull-requests-by-attention.ts)
(needs work → ready to merge → blocked on you → waiting); empty sections are omitted.

## When is a PR "Needs work"?

Your own PR (`isAuthoredByMe`) lands in "Your PR needs work" when **any** of these
hold:

1. **Merge conflicts** (`hasConflicts`).
2. **Failing CI** (`ci.state === Failure`).
3. **A reviewer requested changes** — see
   [has-changes-requested.ts](../../src/utils/has-changes-requested.ts). Providers
   encode this differently, so both votes count:
   - Azure DevOps emits `Vote.Rejected` ("rejected") and `Vote.WaitingFor`
     ("waiting for author").
   - GitHub and GitLab map their changes-requested review states to
     `Vote.WaitingFor`.
4. **Unresolved discussion threads** (`unresolvedThreadCount > 0`). Each provider
   transformer derives this differently:
   - **GitHub** ([transformer](../../src/core/transformers/github/github-pull-request.ts)):
     counts unresolved *diff review threads* (first 50). Plain conversation
     comments have no resolution concept on GitHub, so they never count.
   - **GitLab** ([transformer](../../src/core/transformers/gitlab/gitlab-pull-request.ts)):
     `resolvableDiscussionsCount - resolvedDiscussionsCount`, clamped to ≥ 0 in
     case the API returns partial nulls.
   - **Azure DevOps** ([transformer](../../src/core/transformers/azure/azure-pull-request.ts)):
     active/pending threads that contain at least one real (text, non-deleted)
     comment. System threads (push/vote tracking) are never resolvable and are
     excluded.

## When is a PR "Blocked on you"?

A PR you did *not* author, where a review is still pending from you
(`isReviewPendingFromMe`), that is not a draft and not already fully approved.
"Pending from me" is provider-specific:

- **GitHub**: you appear in `reviewRequests` — GitHub removes you from that list
  once you submit a review, so membership already means "requested and still
  pending".
- **GitLab**: you are a reviewer and have not approved yet (GitLab keeps you in
  the reviewers list after approving).
- **Azure DevOps**: you are a reviewer with `NoVote` — any other vote means you
  have already acted.

## When is a PR "Ready to merge"?

Your own PR that passes the same gate as the Merge pill
([can-merge-pull-request.ts](../../src/utils/can-merge-pull-request.ts)): not a
draft, fully approved (or no approval required), no conflicts, CI passing or
absent, and a `mergeRef` is available for the provider. Someone else's mergeable
PR is the author's to ship, so it falls through to "Waiting on others".

## Counts and filters

- The **tab chip** and the **menu-bar badge** show the same number: the count of
  PRs in the actionable buckets (everything except "Waiting on others"). Both go
  through `countActionablePullRequests` so the two can never disagree.
- Grouping runs *after* all user filters — hidden PRs, snoozed PRs, bot PRs,
  drafts, PRs older than two months, PRs approved by me — so a snoozed or hidden
  PR never contributes to a section or to the badge.

## Related

- [Menu-bar urgency dot](menu-bar-urgency-dot.md) — colors the menu bar based on
  the most urgent attention bucket present.
- Design notes: [needs-you-and-actions.md](../design/needs-you-and-actions.md).
