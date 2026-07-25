# Known issues

Running list of observed issues in GitBar. These are **documented, not fixed** —
each entry captures what was seen so it can be triaged later.

---

## KI-1 — Mergeable MR but the menu-bar status dot is orange

**Reported:** 2026-07-20
**Area:** [Menu-bar urgency dot](features/menu-bar-urgency-dot.md)
**Status:** Closed 2026-07-25 — intended behavior, no code change

### What happens

There is a pull request that is ready to merge (the green **Merge** pill shows in
the "Ready to merge" section), yet the menu-bar dot next to the PR count is
orange rather than green.

![Mergeable MR with an orange menu-bar dot](known-issues/images/urgency-dot-orange-with-mergeable.png)

### Notes

- The dot takes the color of the *most urgent* attention bucket across all
  visible PRs, and orange (**Blocked on you**, priority 2) outranks green
  (**Ready to merge**, priority 3) per the documented urgency ramp in
  [menu-bar-urgency-dot.md](features/menu-bar-urgency-dot.md).
- In the screenshot there are four "Blocked on you" PRs alongside the single
  ready-to-merge one, so the current color follows the documented priority order.

### Resolution

Intended behavior. Someone blocked on your review is more urgent than your own
PR sitting mergeable — you can merge whenever, they cannot proceed. The dot keeps
showing the *most* urgent bucket, so orange wins.

Verified while triaging: the tint is computed from `relevantPrs`, the same
filtered/unsnoozed set as the badge count
([use-data-context-helpers.ts:76](../src/hooks/context/use-data-context-helpers.ts#L76)),
so no hidden PR can drive the color; the buckets are disjoint by construction
([get-attention-reason.ts](../src/utils/get-attention-reason.ts)); and
[get-menu-bar-tint.test.ts](../src/utils/get-menu-bar-tint.test.ts) already pins
`[readyToMerge, blockedOnYou] → orange`.

Accepted consequence: green is only reachable when *no* review is pending on you.
If "I have something to merge" ever needs its own always-visible signal, that is a
separate affordance (second dot / green ring on the count), not a reordering of
this ramp. Tint logic lives in
[get-menu-bar-tint.ts](../src/utils/get-menu-bar-tint.ts).

---

## KI-2 — Azure MR shown as "Ready to merge" but it isn't mergeable

**Reported:** 2026-07-20
**Area:** [Merge PRs](features/merge.md) · Azure DevOps provider
**Status:** Fix applied 2026-07-25 — awaiting confirmation on a real Azure PR

### What happens

An Azure DevOps PR appears in GitBar's "Ready to merge" section with the green
**Merge** pill, but the PR is not actually mergeable on Azure. In the example
(PR !50355, `MediaServices / kahi-reactnative`), Azure still reports **"At least
1 reviewer must approve"** — the PR is only set to *auto-complete* and has no
approvals yet ("No review yet" for both reviewers).

![GitBar shows the Azure PR ready to merge while Azure still requires an approval](known-issues/images/azure-ready-to-merge-not-mergeable.png)

### Notes

- The merge gate requires "fully approved, **or** no approval required by the
  repository" (see [merge.md](features/merge.md) and
  [can-merge-pull-request.ts](../src/utils/can-merge-pull-request.ts)). For this
  Azure PR neither holds — an approval is still pending — yet the pill shows.
- Likely cause to investigate: how the Azure provider maps branch policies /
  required-reviewer state into the approval signal the gate reads. "Auto-complete
  is set" appears to be getting treated as "ready to merge" even though the
  minimum-approvals policy is unmet.
- Attempting the merge from GitBar would presumably be rejected by Azure (the
  minimum-approver policy is enforced server-side), so the risk is a misleading
  "Ready to merge" state rather than an unsafe merge — worth confirming during
  triage.

### Root cause

The merge gate failed **open** on missing data. `isApprovalRequired` was derived
purely from the *presence* of a minimum-approvers policy evaluation, so an empty
`policyEvaluations` array made it `false`, and the gate's "fully approved **or** no
approval required" clause was satisfied by the second half. Result: any
conflict-free Azure PR with a merge commit showed the Merge pill.

For !50355 the evaluation was definitely absent from what GitBar received — with
it present at any status, `isApprovalRequired` would be `true` and `isFullyApproved`
`false` (Azure showed "At least 1 reviewer must approve" as pending), closing the
gate. Two code paths produced the empty array: a swallowing `catch` around the
policy request, and the `#isRelevantToUser` skip that returned `policyEvaluations: []`
for un-enriched PRs. The PR was authored-by-me in GitBar's view, so the request ran
and either errored or came back empty.

### Fix

1. `api-version: "7.1"` added to the policy-evaluations request — it was the only
   Azure call omitting it, and the newest of the endpoints used, so a `400` there
   would have been invisible.
2. Failed lookups and un-enriched PRs now yield `policyEvaluations: undefined`
   instead of `[]`, and the failure is logged rather than swallowed silently.
3. `undefined` ⇒ `isApprovalRequired: true`. Unknown fails closed; an empty list
   still means "this repo has no branch policies". See
   [merge.md](features/merge.md#unknown-approval-state-fails-closed).

### Still to confirm

Whether the policy request was **erroring** or **returning an empty list** for
!50355 — the swallowed `catch` destroyed that evidence. Fix 1 addresses the first,
fix 3 makes either one safe, but the underlying request should be verified against
a real Azure PR that has an unmet minimum-approvers policy: the pill must not
appear, and no policy warning should be logged.

### Related

A separate suspicion surfaced while triaging: GitBar treated a PR authored by
another person as authored by the signed-in user, which is what put it in "Ready to
merge" at all. Azure is the only provider matching identity on `displayName`
instead of a stable handle (GitHub and GitLab use `profile.userName`), even though
`getProfile` already stores the account email there. Tracked as
[KI-5](#ki-5--azure-identity-matching-uses-displayname).

---

## KI-3 — Card hover state is flaky (doesn't trigger, or stays stuck active)

**Reported:** 2026-07-20
**Area:** PR list card hover actions ([Hide & snooze](features/hide-and-snooze.md))
**Status:** Fixed 2026-07-25 — verified manually; one native follow-up open

### What happens

The hover state on a PR card is unreliable: sometimes hovering a card does **not**
reveal the hover actions (Snooze / Hide), and other times the hover state **stays
active** on a card after the pointer has moved away. In the screenshot the top
card is showing its Snooze/Hide actions.

![Card hover state showing Snooze/Hide actions](known-issues/images/hover-state-stuck.png)

### Notes

- Intermittent / not consistently reproducible so far — needs steps to reproduce.
- Hover reveals the per-card actions (Snooze, Hide) described in
  [hide-and-snooze.md](features/hide-and-snooze.md); when the state gets stuck the
  wrong card can appear "armed".
- Things to check during triage: mouse-enter/leave handling on the card, whether
  a re-render/refresh (the list refetches — note "1m ago") drops or retains the
  hovered element, and pointer events while the popover regains focus.

### Root cause

Not the hover handlers. `onHoverIn`/`onHoverOut` bottom out in `NSTrackingArea`,
and AppKit only fires `mouseEntered:`/`mouseExited:` when the *pointer* crosses a
boundary — never when the boundary moves under a resting pointer. On a refetch that
adds, removes or reorders a PR:

- the card sliding **out** from under the pointer gets no leave → stays armed, and
  the pointer is now over a different card
- the card sliding **under** the pointer gets no enter → hover looks dead until you
  move the mouse or scroll

react-native-macos compensates for *scrolling* only, via a clip-view bounds
observer (`RCTViewComponentView.mm`, `updateClipViewBoundsObserverIfNeeded` /
`updateMouseOverIfNeeded`), and rebuilds the tracking area only when the view's own
`bounds` change. A card that merely *moves* changes neither — hence the
intermittency: it needs the list to change while the pointer rests on a card.

Ruled out: `isHoverEnabled()` is unconditionally true on macOS
(`Libraries/Pressability/HoverState.js`), so it is not the web-style touch-modality
gate; the card does not resize on the actions↔comment-count swap (`right` carries
`minHeight: 24` for exactly that reason), so there is no self-inflicted reflow;
tracking areas use `NSTrackingActiveAlways`, so window focus is irrelevant; and
popover close/reopen self-heals, because `viewDidMoveToWindow` re-runs
`updateMouseOverIfNeeded`.

### Fix

Hover moved off the card into a single `hoveredKey` on the list, cleared whenever
the rendered order changes. At most one card can be armed, so a missed leave event
can no longer strand the actions on the wrong card. The leave clear is guarded on
"is this still the armed card", since AppKit can deliver the next card's enter
first. Rows are now keyed by `accountId:id` (`getPullRequestKey`) instead of bare
`id`, closing a latent duplicate-key hazard: Azure PR ids are only unique per
organization, so two Azure accounts could collide and let React reuse a row for a
different PR. See [hide-and-snooze.md](features/hide-and-snooze.md#where-card-hover-lives).

Accepted cost: after a poll that moves cards, hover needs one pointer movement to
re-arm. Fixing that requires the native side.

### Open follow-up

`prepareForRecycle` in `RCTViewComponentView.mm` does not reset `_hasMouseOver`, so
a native view recycled from a card that was unmounted *while hovered* stays flagged
as hovered — and `mouseEntered:` early-returns on that flag, so the next card to
reuse it never fires `onHoverIn`. Snooze and Hide unmount the card you are hovering,
which makes this reachable: snooze a PR, then hover other cards.

This repo already runs `patch-package` on postinstall and ships
`patches/react-native-macos+0.81.7.patch`, so the fix is a one-line addition to that
patch's macOS block. Needs a native rebuild to take effect.

---

## KI-4 — Merging an Azure DevOps MR from GitBar does nothing

**Reported:** 2026-07-25
**Area:** [Merge PRs](features/merge.md) · Azure DevOps provider
**Status:** Open — not fixed

### What happens

Clicking the green **Merge** pill on an Azure DevOps pull request does not merge
it. The PR stays open on Azure.

### Notes

- Azure merges go through `mergePullRequest` in
  [azure-provider.ts:180](../src/core/data-providers/azure-provider.ts#L180): a
  `PATCH` to the pull-request endpoint with `status: "completed"` and
  `lastMergeSourceCommit`. GitHub/GitLab use their GraphQL merge mutations, so
  this is Azure-specific.
- Things to check during triage: whether the request is sent at all, the HTTP
  status/body Azure returns (a rejected completion may come back `200` with an
  unchanged PR rather than an error), whether `lastMergeSourceCommitId` is
  populated and current, and whether the error surfaces in the UI at all —
  `#transformApiError` may be swallowing it silently.
- Possibly the same root cause as [KI-2](#ki-2--azure-mr-shown-as-ready-to-merge-but-it-isnt-mergeable):
  if the PR isn't actually mergeable (approvals pending, auto-complete only),
  Azure would refuse the completion and GitBar would look like it did nothing.
  KI-2's fix makes the pill stop appearing on those PRs, so re-test KI-4 on a PR
  that really is mergeable before digging further.

---

## KI-5 — Azure identity matching uses `displayName`

**Reported:** 2026-07-25 (surfaced while triaging [KI-2](#ki-2--azure-mr-shown-as-ready-to-merge-but-it-isnt-mergeable))
**Area:** Azure DevOps provider
**Status:** Open — not fixed

### What happens

In the KI-2 screenshot GitBar filed PR !50355 under "Ready to merge", which only
happens for PRs you authored
([get-attention-reason.ts](../src/utils/get-attention-reason.ts)) — but Azure shows
Silvan Belder as the author, not the signed-in user.

### Notes

- `isAuthoredByMe` for Azure is `data.createdBy.displayName === profile.name`
  ([azure-pull-request.ts](../src/core/transformers/azure/azure-pull-request.ts)).
  GitHub and GitLab match on `profile.userName` (login / username), a stable handle.
  `getProfile` already puts the account email in `userName`.
- Display names are mutable and can collide; `#isRelevantToUser` uses the same
  comparison, so a mismatch also silently disables per-PR enrichment (threads,
  policies) — which is how this interacts with KI-2.
- A wrong `isAuthoredByMe` misfiles PRs into both "Ready to merge" and "Needs work",
  and the same `displayName` comparison drives `isAssignedToMe`,
  `isReviewPendingFromMe`, `isApprovedByMe` and `isCommentedByMe`.
- To check during triage: what `/_apis/profile/profiles/me` actually returns for the
  connected account (note GitBar calls it on `dev.azure.com`, while Azure documents
  profiles under `vssps`), and whether `uniqueName` on `createdBy` is the better
  field to match against.
