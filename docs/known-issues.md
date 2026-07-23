# Known issues

Running list of observed issues in GitBar. These are **documented, not fixed** —
each entry captures what was seen so it can be triaged later.

---

## KI-1 — Mergeable MR but the menu-bar status dot is orange

**Reported:** 2026-07-20
**Area:** [Menu-bar urgency dot](features/menu-bar-urgency-dot.md)
**Status:** Open — not fixed

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
- Open question for triage: is this the intended behavior, or should a
  ready-to-merge PR of your own surface more prominently even when reviews are
  also pending on you? Tint logic lives in
  [get-menu-bar-tint.ts](../src/utils/get-menu-bar-tint.ts).

---

## KI-2 — Azure MR shown as "Ready to merge" but it isn't mergeable

**Reported:** 2026-07-20
**Area:** [Merge PRs](features/merge.md) · Azure DevOps provider
**Status:** Open — not fixed

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

---

## KI-3 — Card hover state is flaky (doesn't trigger, or stays stuck active)

**Reported:** 2026-07-20
**Area:** PR list card hover actions ([Hide & snooze](features/hide-and-snooze.md))
**Status:** Open — not fixed

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
