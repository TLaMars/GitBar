# Design spec — "Needs you" tab, inline actions, and supporting surfaces

Status: in progress (July 2026) — Phase 1 done bar the README tidy; Phase 2 done
(steps 6–9); Phase 5 (Approve) dropped — no blind approvals from the menu bar;
Phase 6 merge (step 19) shipped, re-run (step 20) dropped. See per-step markers
below.
Mockups: [design-board.html](./design-board.html) (open in a browser)

This spec binds the implementation plan to the design decisions from the
design exploration (July 2026). Every phase step lists the decisions (D#) it
must satisfy; the decisions reference theme tokens from
`src/core/constants/theme.ts`, never raw hex, so design and code cannot drift.

## Design decisions

- **D1 — "Needs you" tab.** Fourth entry in the existing `ButtonToggle`, first
  position, **now the default selected tab** (July 2026 — the "behind a setting
  first" caution was dropped; it opens straight to Needs you). Carries a count
  chip: `accentLightBlue` at 25% alpha background, `accentLightBlue` text.
- **D2 — Reason sections.** "Needs you" groups PRs by attention reason, in this
  order: `Your PR needs work`, `Ready to merge`, `Blocked on you`, plus a
  collapsed `Waiting on others` disclosure with a count. Order groups your-own-PR
  sections first (needs-work + ready-to-merge), then your review duty
  (blocked-on-you, typically the longest, so it sits above the collapsed
  section). `Your PR needs work` collects your conflicted / failing /
  changes-requested PRs (all mean you must edit your own PR); the existing status
  badge / CI glyph already tells them apart. Section headers reuse the
  exact style of the existing date group headers. Implemented as a new
  `GroupPullRequestsBy` mode; the card itself is **unchanged** — same badges, CI
  glyph, and footer as every other tab. The Needs-you tab is purely a regrouping;
  the section header carries the "why" and the existing badge carries the state,
  so there is no per-card reason line (see D4). Mockup decided July 2026.
- **D3 — Attention reason model.** One pure function (`getAttentionReason`)
  derives a viewer-relative section bucket from existing `PullRequest` fields.
  Returns the four groups used by D2: `needsWork`, `blockedOnYou`,
  `readyToMerge`, `waiting`. Resolution priority: `needsWork` (your own PR with
  conflicts, failing CI, a changes-requested review, or unresolved discussion
  threads) > `blockedOnYou` > `readyToMerge`
  > `waiting`. Unresolved threads (added July 2026) come from a new
  cross-provider `unresolvedThreadCount`: GitLab
  `resolvableDiscussionsCount - resolvedDiscussionsCount`, GitHub unresolved
  `reviewThreads` (first 50; conversation comments have no resolution concept
  and never count), Azure active/pending threads holding a non-deleted text
  comment. Author-side only: someone else's PR with open threads still waits.
  This also fixes "someone replied on my MR" being invisible — a reply keeps
  the thread unresolved, so the MR sits in Needs work until resolved. `blockedOnYou` requires a new cross-provider
  `isReviewPendingFromMe` field (review requested **and not yet voted** — GitHub
  `reviewRequests`, GitLab reviewer not-approved, Azure reviewer `NoVote`) plus
  `!isDraft && !isFullyApproved` so it stays tight. `readyToMerge` is your **own**
  PR that passes the `canMergePullRequest` gate — someone else's mergeable PR is
  the author's to ship, so it falls to `waiting`. Kept coarse (section-level) on
  purpose: the card is
  unchanged and the badge already distinguishes conflicts / failing /
  changes-requested, so no finer granularity is rendered (D4).
- **D4 — No reason line.** Dropped. Early mockups placed a reason + age line in
  the footer, but it duplicated the section header and the status badge. The
  Needs-you tab shows normal cards regrouped; the section header is the "why".
  (Relative age, if wanted for triage, becomes a sort order, not per-card text.)
- **D5 — Action reveal is a swap, not an expansion.** The footer right side is
  a fixed-height slot. Rest: comment count. Hover/selection: action pills.
  Card height never changes; ~100ms leave-delay against flicker. Active card
  gets a 1px `accentLightBlue` (35% alpha) border. Hover and keyboard
  selection share one "active card" state.
- **D6 — Action pills use the badge language.** Rounded-full, tinted
  background, icon + label. Comment, Open, and the `…` overflow are icon-only
  circles on white 10% alpha. Card body click still opens the browser; pills
  swallow their own presses; right-click ActionSheet unchanged. (The **Approve
  pill is dropped** with Phase 5 — approving belongs in the browser where the
  diff is; see Phase 5.)
- **D7 — Approve lifecycle. DROPPED (July 2026)** — GitBar does not approve from
  the menu bar (blind write without the diff); "Blocked on you" cards open the
  PR in the browser instead. See Phase 5.
- **D8 — Merge pill.** Rendered only when `isFullyApproved && !hasConflicts
  && ci === success` and the provider capability allows it. The single
  solid-filled control in the window: `accentGreen` fill, dark green text,
  labelled simply "Merge". No chevron/method picker on the pill; the merge
  uses the repository's default method.
- **D9 — Merge is a single click.** No arm step, no confirmation, no modal.
  The pill only renders in the strict D8 state, so a click is treated as
  intent.
- **D10 — Snooze/Hide/Ignore live in the existing right-click ActionSheet**
  (and behind the `…` pill): Snooze until updated, Snooze for 1 day, Hide,
  Ignore this repository. No custom menu component in v1.
- **D11 — Reviewer ring colors.** Reviewer state is carried by the avatar
  ring color alone: `accentGreen` = approved, `accentYellow` = pending,
  `accentRed` = changes requested. No badge glyph on the ring — the textual
  channel lives at card level instead (Status Badge per D12, reason line per
  D4), so ring color is a redundant cue rather than the only one.
- **D12 — Badge collapse.** Max one status badge per card, by priority:
  Conflicts > Changes requested > Draft > Approved. Rings carry approval
  state, so the Approved badge only shows when nothing more urgent does.
- **D13 — Repo identity.** Revive the accent line as a 4px pill-shaped bar on
  the card's left. Restrict the `getColorForProject` hash pool to non-semantic
  hues only: `accentTeal`, `accentPurple`, `accentPink`, `accentYellow`.
  Red/orange/green/blue are reserved for status and CTA; `accentLightBlue` is
  excluded as well because it already carries the active-card border (D5),
  the tab count chip (D1), and the menu-bar "blocked on you" tint (D15) — a
  light-blue repo bar sitting next to the active border would blur the
  selection signal. The bar is a glanceable hint; collisions are acceptable.
  (A per-card repo *name* label was considered and dropped — it competes with
  long titles for width and, when grouped by repo, duplicates the section
  header; overkill for the value.)
- **D14 — Reason iconography** is shared vocabulary everywhere it appears
  (sections, notifications, future compact mode): eye = review requested,
  alert-circle = changes requested, git-merge = ready to merge, x = failing,
  clock = waiting. One `ReasonIcon` component.
- **D15 — Menu bar icon tint** follows the most urgent state. Shipped as a
  small colored **dot** (not a full-glyph tint) using a deliberate red > orange
  > green urgency ramp: `#F05069` (needs work) > `#F59E0B` (blocked on you) >
  `#3FB950` (ready to merge) > no dot. These are dot-specific hexes tuned to
  read at ~9px on both light and dark menu bars — deeper than the app accents.
  (Supersedes the original `accentLightBlue` for blocked-on-you: blue read too
  calm and washed out at dot size; orange gives a true urgency ramp.) Count
  stays. Behind a "Colored menu bar icon" setting (template-icon convention).
- **D16 — Notifications are system-rendered.** No custom banner UI exists on
  macOS; actions are registered via `UNNotificationCategory` and appear in
  the system Options menu. `userInfo` carries `gitbar://pr/<id>`. The
  GitBar-styled notification card in early mockups is valid only as an in-app
  toast. The full event model is specified below (D16.1–D16.4).
- **D16.1 — Notifications fire on rising edges, via independent latches.**
  A notification is *not* a state — it is a `false → true` transition of one
  signal on one PR. Diffing the coarse 4-bucket `getAttentionReason` is wrong
  (a PR moving conflicts→CI-red would stay `NeedsWork` and never re-fire, and
  a PR you're mid-review on flaps). Instead each event owns an **independent
  boolean latch** that fires once on `false → true` and only re-arms on
  `true → false`:

  | event | latch signal | fires (`false→true`) | re-arms (`true→false`) | whose PR |
  |---|---|---|---|---|
  | `review_requested` | `isReviewPendingFromMe && !isDraft && !isFullyApproved` | someone requests your review | you vote, or PR approved/draft | others' |
  | `changes_requested` | your PR has a changes-requested review (`Vote.Rejected` or `Vote.WaitingFor` — see below) | a reviewer requests changes | that review cleared | yours |
  | `ci_failed` | your PR `ci.state` is failing | CI turns red | CI green again | yours |
  | `conflicts` | your PR `hasConflicts` | conflicts appear | conflicts resolved | yours |
  | `ready_to_merge` | your PR in the strict D8 mergeable state | becomes mergeable | leaves that state | yours |

  Consequence (the review-loop case): after you review a PR, `review_requested`
  goes `true→false` and stays silent through ordinary content churn. It only
  re-fires when the provider puts the PR *back* into pending-from-you — a
  GitHub re-request, or a GitLab/Azure vote-reset from new commits — which is a
  genuinely new ask. `Waiting` never notifies.

  One further event, `commented`, is **count-based, not a boolean latch**: it
  fires when `amountOfComments` rises on **your own** PR (someone responded to
  your MR). It requires a prior count, so a newly-seen PR with existing comments
  does not fire. The body is generic ("New comment on your pull request") — the
  model carries the count, not the commenter. This replaces the coarse
  new-comment ping the old summary sent.
- **D16.1a — One notification per PR per poll.** If several signals fire for the
  same PR in one poll, only the most urgent is sent (conflicts > changes >
  ci > review > ready > comment), mirroring the one-badge-per-card rule (D12).
  Required for correctness too: same-category banners share a native id and
  would otherwise overwrite each other in emission order, not by importance.
- **D16.2 — Only while running; silent seed.** No overnight catch-up. On each
  launch the latch baseline is seeded from the first poll *without firing*, so
  a relaunch never bursts. Only transitions observed during the running session
  notify. (Persisting the baseline across restarts for catch-up was considered
  and dropped — the burst risk outweighs it.)
- **D16.3 — Filters compose first.** Snoozed, hidden, and bot-authored PRs are
  removed before the latch diff, so they never notify. A snoozed PR that later
  un-snoozes seeds silently (its latch is re-baselined while filtered), so
  un-snoozing does not itself fire.
- **D16.4 — Actions per category** map onto existing mutations (no new provider
  work). Tap body → `gitbar://pr/<id>`.
  - `review_requested` → Open (default), Snooze
  - `ready_to_merge` → **Merge** (the safe one-click D9 state), Open, Snooze
  - `changes_requested` / `ci_failed` / `conflicts` → Open, Snooze

  (Reply-with-comment and Approve actions from early mockups are dropped with
  Phase 5 — no blind writes; the browser is where a review belongs.)
- **D16.5 — Settings.** A master "PR notifications" toggle plus grouped
  sub-toggles: *Reviews requested of me* (`review_requested`), *My PR is ready
  to merge* (`ready_to_merge`), *My PR needs work* (the `changes_requested` /
  `ci_failed` / `conflicts` trio behind one toggle — three distinct bodies,
  one setting), and *Comments on my PRs* (`commented`, own PRs only). Default:
  master on, all sub-toggles on. **Per-event toggles are not yet wired** — step
  23c ships all events under the existing master `allowNotifications` setting;
  the sub-toggles are step 24.
- **D17 — Header copy.** "PR's" becomes "PRs".

## Plan

### Phase 1 — Card polish (pure UI, no data changes)
1. Copy fix (D17). **Done (July 2026).**
2. Repo identity: color pool restriction + accent bar (D13). **Done (July
   2026).** (Repo name label dropped as overkill.)
3. Reviewer ring glyphs (D11). **Deferred by choice** — reviewer avatars kept
   as-is for now.
4. Badge collapse (D12). **Done (July 2026)** via a pure `resolveStatusBadge`
   helper (conflicts > changes requested > draft > approved; Merge pill subsumes
   the slot). "Changes requested" is a new badge derived from reviewer votes
   via the shared `hasChangesRequested` helper: `Vote.Rejected` **or**
   `Vote.WaitingFor`, because only Azure emits `Rejected` — GitHub and GitLab
   map their changes-requested review states to `WaitingFor` (and Azure's
   `WaitingForAuthor` also means the author must act). The same helper feeds
   `getAttentionReason`'s `needsWork` check (D3). The badge uses the
   `CrossBold` icon (accentRed) — D14 nominally
   assigns `alert-circle` to changes-requested, but Conflicts owns that glyph,
   so the D14 vocabulary reconcile is deferred to when the reason line (D4)
   lands. CI indicator is unchanged (separate channel).
5. README: tick "See Pipeline Status", align To Do with this spec. **Done
   (July 2026)** — added "Needs you" tab / Snooze / Hide-bot-PRs to Features,
   moved "Prioritize PRs" out of To Do (it is the Needs-you tab), left
   Bitbucket + Ignore Repositories as To Do.

Gate: visual QA; nothing functional at risk.

### Phase 2 — "Needs you" tab (derivation only)
6. `getAttentionReason` pure function (D3) with thorough unit tests. **Done
   (July 2026)** — returns the four section buckets; `blockedOnYou` gated on a
   new cross-provider `isReviewPendingFromMe`; `readyToMerge` is your own PR
   only.
7. Tab + reason grouping + collapsed waiting section (D1, D2). **Done (July
   2026)** — first-position tab, content-sized toggle with a count chip,
   collapsible "Waiting on others". The D4 reason line was **dropped** (the
   badge + section header carry the reason). Menu-bar badge also switched to the
   actionable "Needs you" count.
8. Add `updatedAt` to the PR model (all three providers) — needed for
   snooze-until-updated next. **Done (July 2026).** GitHub/GitLab expose it
   directly (added to the fragments + codegen). Azure has **no** PR-level
   updated field (verified against the REST 7.1 docs — only `creationDate` /
   `closedDate`), so it is derived from the newest comment-thread
   `lastUpdatedDate` (Azure system threads cover pushes/votes), falling back to
   `creationDate`. No consumer yet — ready for Phase 3 snooze.
9. Guava events for tab/section usage — this data decides whether the
   unified-feed variant ever replaces sections. **Done (July 2026)** — tab
   usage via existing `button_toggle_clicked`; added
   `pull_request_section_toggled` for the collapsible section.

Gate: default-tab behind a setting; watch analytics one release cycle.

### Phase 3 — Snooze / Hide / Ignore (local state)
10. Snooze store (MMKV/redux-persist): PR id → until-date or until-updated
    (compares `updatedAt`). **Done (July 2026)** — `snoozed` added to the
    persisted `pullRequests` slice (`SnoozeUntil` = date | updated); pure
    `isSnoozeActive` / `filterSnoozed` helpers drop actively-snoozed PRs from
    Mine/Review/Needs-you + the menu-bar count; expired/activity-cleared
    snoozes reappear; All tab still shows everything (matches Hide).
11. Context menu (D10). **Note:** there is **no existing right-click
    ActionSheet** — `setPullRequestHidden` was wired in the store but never
    surfaced. So this step must *build* the menu (a macOS context-menu concern)
    hosting Snooze until updated / Snooze for 1 day / Hide / Ignore repository.
    **Not started.**
12. Ignore repository + ignore bot authors as settings-managed filters.
    **Ignore bot authors done (July 2026)** — `hideBotPRs` toggle;
    `Attendee.isBot` set per provider (GitHub `[bot]` login suffix, GitLab
    `user.bot`, Azure none); filtered in `applyUserFilters`. **Ignore
    repository skipped for now** (July 2026) — deferred; needs a way to add a
    repo to the ignore list, and with right-click removed the trigger is
    undecided. Revisit alongside the hover/keyboard action work.

### Phase 4 — Hover/selection spike (go/no-go for actions)
13. Footer-slot swap per D5, validated with a 20+ PR list on macOS. If hover
    feels bad in react-native-macos, actions fall back to the `…`/right-click
    path and later phases proceed unchanged. **Spike built (July 2026)** —
    react-native-macos `onMouseEnter`/`onMouseLeave` reveal Snooze (until
    updated) + Hide icon buttons in the footer-right slot (swaps the comment
    count), ~100ms leave delay, 1px `borderActiveCard` border reserved always
    (no layout shift). Wired to the snooze/hide store — this is the chosen
    trigger now that right-click is gone. **Validated / GO (July 2026)** —
    hover works on macOS using Pressable `onHoverIn`/`onHoverOut` (not the raw
    mouse events); the pills are `TouchableOpacity` so they swallow their press
    and don't also open the browser. Hover-reveal is the accepted card-action
    trigger.
14. Keyboard selection sharing the active-card state. **Skipped for now**
    (July 2026) — deferred; depends on the hover interaction being validated
    first (they share one active-card state).

### Phase 5 — Approve — DROPPED (July 2026)
Approving a PR from the menu bar means approving without the diff in front of
you — a blind write that shouldn't be one-click. "Blocked on you" cards already
open the PR in the browser, which is where a review with real context belongs, so
GitBar deliberately does not offer an in-app Approve. Consequently D7 is dropped
and the Approve pill in D6 is dropped.

Steps 15–17 (`approvePullRequest`, per-provider approve, approve lifecycle) are
cancelled. Step 18 (Comment v1 — deep link to the PR comment anchor) was benign
and independent of approvals; it can be revived on its own later if wanted, but
is parked with this phase for now.

### Phase 6 — Merge and mark-ready
19. `merge(id)` with the repo's default method + merge capability + pill per
    D8/D9. **Shipped standalone (July 2026)** ahead of Phase 4, with two
    deliberate deviations: the pill is always visible when mergeable
    (replacing the comment count in the footer slot) rather than
    hover-revealed per D5, and `Provider.capabilities` landed with `merge`
    only. CI gate treats "no pipelines" as passing so no-CI repos can merge.
    The approval gate is "approved **or** approval not required" (via
    `isApprovalRequired`): D8's literal `isFullyApproved` assumed every repo
    has a review policy, which hid the pill on repos that allow merging
    without approval.
20. `rerunCi(id)` on failing cards. **DROPPED (July 2026).**
21. `…` menu gains mark-ready-for-review / convert-to-draft. **DROPPED
    (July 2026).**

### Phase 7 — Outside-the-window surfaces
22. Menu bar tint per D15. **JS done (July 2026)** — behind a "Colored menu bar
    icon" setting (default off). `getMenuBarTint` maps the most urgent attention
    state to red > orange > green (reuses `getAttentionReason` priority).
    Implemented as a **colored dot** (not a full-glyph tint): the icon stays a
    monochrome adaptive template image and a small colored dot is prefixed to
    the count, so it survives light/dark menu bars. Native
    `PopoverModule.setStatusItemTint` + subscriber attributed-title render added;
    **needs a macOS rebuild to verify.**
23. Actionable notifications per D16. Taxonomy **designed (July 2026)** — see
    D16.1–D16.5. Build order:
    - **23a. JS latch engine. Done (July 2026)** — pure
      `deriveNotificationEvents(previous, visible, suppressed)` +
      `buildNotificationContent`; the snapshot is keyed by `accountId:id` (Azure
      ids are per-account). 19 tests incl. the review-loop, latch-independence,
      and cross-account cases.
    - **23b. Native bridge. Done (July 2026)** — extended the existing
      `NotificationsModule` (not `PopoverModule`, which already had a delegate):
      `registerNotificationCategories` + a params-object `sendNotification`
      carrying category/prId/accountId (keyed so a newer banner replaces the
      old); `onNotificationAction` event; subscriber gains `willPresent` and
      forwards PR-scoped taps to JS while no-PR taps still open the popover.
    - **23c. Wiring. Done (July 2026)** — categories registered on mount; the
      engine runs in the poll loop (`useDataHelper`) after snooze/hide/bot
      filtering, advancing the baseline every poll but only sending when the
      popover is closed and notifications are enabled; `useNotificationRouter`
      handles taps (Snooze → store, Merge → provider merge re-gated at tap time,
      Open/default → open the PR). Events are collapsed to one-per-PR
      (`selectPrimaryEvents`, D16.1a) before sending. **Superseded** the coarse
      `sendPullRequestNotification` summary; its new-comment ping is replaced by
      the finer `commented` event (own PRs only).
24. Notification rules settings (D16.5): master toggle + three sub-toggles,
    defaults on. Gate the whole engine behind the master toggle.

## Out of scope (ideas parked, not rejected)
Unified-feed layout (iteration 2 — analytics-gated), compact triage mode
(iteration 3 — candidate "Compact" setting), inline comment composer
(popover-module), global hotkey + fuzzy search, Shortcuts/URL-scheme surface
beyond `gitbar://pr/<id>`, widgets, Bitbucket/Gitea providers, iOS companion.
