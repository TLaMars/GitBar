# GitBar — open design & engineering items

Status: consolidated July 19 2026. This file supersedes three former docs:

- `needs-you-and-actions.md` — the full design spec (decisions D1–D17, phased
  plan). Removed from the tree; recoverable from git history. D-numbers below
  refer to it.
- `attention-gaps-plan.md` and `notifications-v1-plan.md` — working plans,
  never committed; their still-relevant content is carried into this file.

Mockups: [design-board.html](./design-board.html) still applies for card and
action visuals. Feature docs live in `docs/features/` and must be updated
alongside any change below.

## Buildable now

### 1. Manual QA of the notification banners

The D16 v1 notification pipeline is on `main` (engine `db06df8`, native
`c70f7b0`, wiring `04e6ea5`; 115/115 jest, Swift verified by full xcodebuild)
but the Swift runtime behavior is not verifiable headless. Checklist:

- banner appears while the popover is closed
- tapping the banner opens the PR in the browser
- the dev TEST banner (no URL payload) opens the popover instead
- a second event on the same PR replaces the earlier banner (shared identifier)
- relaunch does not burst (silent first-poll seed)

This is the only thing between the shipped v1 and "verified".

### 2. `commented` notification event

Covers what the attention model deliberately cannot see: plain comments
(GitHub conversation tab, GitLab non-thread notes) and the generic "activity
on my PR" ping — with per-PR attribution, replacing the old anonymous summary.

- Own PRs only, lowest priority in the per-poll urgency collapse, no fire on
  first sight (needs a prior baseline).
- **Preferred trigger: a rise in `unresolvedThreadCount`** — a new open thread
  is never caused by you replying, so it sidesteps self-notification. Keep a
  raw `amountOfComments` rise only as fallback for non-resolvable comment
  types.
- Caveat driving that preference: provider comment counts include your own
  comments on all three providers (GitLab `userNotesCount`, GitHub
  `totalCommentsCount`, Azure text comments).
- Ship together with its own settings toggle (pairs with item 3).

Gate: replying to a thread on your own PR must not self-notify.

### 3. Per-event notification settings (D16.5)

The master `allowNotifications` toggle gates everything today; the sub-toggles
are unwired. Spec:

- Grouped toggles: *Reviews requested of me* (`reviewRequested`), *My PR is
  ready to merge* (`readyToMerge`), *My PR needs work* (the `changesRequested`
  / `ciFailed` / `conflicts` trio behind one toggle), *Comments on my PRs*
  (`commented`). Defaults: all on.
- Booleans in the settings slice — persist has no whitelist, so no migration.
- Filter events **before** the urgency collapse, so a disabled urgent event
  does not shadow an enabled lesser one. The engine stays un-gated; only
  sending is filtered.

### 4. Snooze for 1 day UI

The store fully supports date-based snoozing (`SnoozeUntil` `{type: "date"}`
in the persisted `pullRequests` slice); only until-updated is surfaced via the
hover actions. With the right-click context menu dropped (see Decided log),
this needs a home: the hover slot or a `…` overflow — a small design call
comes attached.

### 5. Notification action buttons (D16.4)

Cut from v1; nothing of it exists on `main`. Spec:

- Two `UNNotificationCategory` action sets: default (Open, Snooze) and
  mergeable (Merge, Open, Snooze).
- A JS action router: Snooze → the snooze-until-updated store action; Merge →
  re-check `canMergePullRequest` at tap time, then the card's merge path.

### 6. Banner retraction on falling edge

Today a banner sits in Notification Center until dismissed or replaced by a
newer event on the same PR. If the state resolves itself (CI goes green,
conflicts disappear, someone else reviews), the stale banner lingers.

The engine already detects the exact moment: a falling edge (`true → false`)
is what re-arms each latch. Piggyback on it — when the signal behind a PR's
last-sent banner goes false, call one new native method wrapping
`removeDeliveredNotifications(withIdentifiers: [accountId:id])`. Roughly one
Swift method plus one call site in the poll-loop wiring.

Filed as a nicety: the failure mode is mild (a stale banner that, tapped,
still just opens the PR), but it keeps Notification Center showing only what
is still true — consistent with the engine's notification-is-an-edge model.

## Decisions pending — do not build yet

### 7. GitLab sharp edge: request-changes keeps you in Blocked on you

After you submit "request changes" on a GitLab MR, GitBar keeps it in
**Blocked on you** (and the menu-bar dot can stay orange). Cause:
`blockedOnYou` is driven by `isReviewPendingFromMe`, which on GitLab means
"reviewer and not approved" — request-changes does not set `approved`. GitHub
(any submitted review clears pending) and Azure (any vote clears it) behave as
expected.

The fix is mechanically small — the GitLab fragment already carries
`reviewState`, so excluding `REQUESTED_CHANGES` reviewers from the pending
check is a few lines — but it is a semantics choice:

- **For changing:** your turn is done, the author must act; aligns all three
  providers; the `reviewRequested` latch then re-arms on request-changes, so a
  vote reset from new commits re-fires as a fresh "your review was requested"
  — arguably the correct behavior.
- **For keeping:** on GitLab you genuinely still owe a future approval (the MR
  cannot merge until you approve), so "pending from me" is technically true —
  just not urgent yet.
- **Ripples if changed:** MRs move from Blocked-on-you to Waiting (tab counts
  and dot color change).

Recommendation: change it, as its own small change with a before/after check
of the tab grouping.

### 8. W4 — participant-aware "ball in your court"

The reviewer-side gap: someone replies (without resolving) to a thread *you*
started on *their* PR — nothing surfaces beyond the `commented` ping (item 2).
A real fix needs per-thread participants + resolution (GitLab discussions
query; GitHub `reviewThreads.comments` authors; Azure thread `identities` —
already fetched) plus a design decision: Blocked-on-you flip, a new bucket, or
a card chip?

Trigger: after items 1–3 have soaked one release cycle, check Guava (snooze
usage, section toggles, notification opens). If the snooze-habit workaround
covers it, this stays deferred indefinitely.

### 9. Analytics gates

One release cycle of tab/section Guava data (`button_toggle_clicked`,
`pull_request_section_toggled`, notification opens) feeds two decisions: the
unified-feed layout question (whether it ever replaces reason sections) and
W4 above.

## Decided log (July 19 2026 consolidation)

- **W1 GitHub changes-requested fix — done** (`04f6cf8`, incl. spot-check):
  fragment fetches `states: [APPROVED, CHANGES_REQUESTED]`, latest-review-per-
  author dedupe, `isApprovedByMe` uses my latest review, supersede tests.
- **Menu-bar urgency dot — done and verified**, shipped default-on in v2.1.0
  (`07e99e0`).
- **Right-click context menu (D10) — dropped.** Hover actions are the card
  action trigger; un-snooze/un-hide shipped as the hover flip on suppressed
  PRs (`79f7e20`). A native menu would need a new module (RN-macOS 0.81 has no
  `onAuxClick`).
- **All-tab snoozed/hidden marker — dropped.** Hover reveals the state; good
  enough.
- **Keyboard selection (step 14) — dropped.**
- **Ignore repository (step 12) — deferred**, no current plan; needs a
  trigger design if revived.

## Previously dropped (for the record)

Approve from the menu bar (Phase 5 / D7 + the Approve pill — no blind writes;
review belongs in the browser) · re-run CI (step 20) · mark-ready /
convert-to-draft (step 21) · D4 per-card reason line (badge + section header
carry the reason) · reviewer ring glyphs (D11 kept as-is) · D14 icon
vocabulary reconcile (its trigger was the dropped D4) · comment deep-link
(step 18, parked with Phase 5).

Parked ideas (not rejected): unified-feed layout, compact triage mode, inline
comment composer, global hotkey + fuzzy search, URL-scheme surface beyond
`gitbar://pr/<id>`, widgets, Bitbucket/Gitea providers, iOS companion.

## Reference notes carried over

- **Vote gotcha (critical):** only Azure produces `Vote.Rejected`; GitHub and
  GitLab map their changes-requested review states to `Vote.WaitingFor` (as
  does Azure's waiting-for-author). Any changes-requested predicate must check
  both — `utils/has-changes-requested` encodes this and is what the engine,
  the card badge, and `get-attention-reason` use.
- **Notification model:** the Needs-you tab is *state*; a notification is an
  *edge*. Independent boolean latches per PR (keyed `accountId:id`), fire on
  `false → true`, re-arm on `true → false`. Silent seed on first poll; the
  baseline advances every poll unconditionally (gates apply to sending only);
  stale keys are carried forward so a provider hiccup never re-fires a
  backlog; per-poll collapse to the most urgent event (conflicts >
  changesRequested > ciFailed > reviewRequested > readyToMerge).
- **"Blocked on you" clears per provider:** GitLab — only approving clears it;
  GitHub — any submitted review clears it, and a reply to your comment does
  NOT re-add you (only an explicit re-request / vote reset does); Azure — any
  vote clears it, comments don't.
- **Accepted limitations:** GitHub `reviewThreads(first: 50)` cap (a PR whose
  only unresolved thread is 51+ shows zero — rare, revisit only if observed) ·
  user filters run **before** categorization, so a filtered PR is never
  bucketed, by design · snooze-until-updated wakes on any activity (pushes,
  labels), not only comments — by design.
