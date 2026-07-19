# Pipeline status

Each PR card shows a compact CI pill answering one question: *is this pipeline
green?* Per-check breakdowns are intentionally left to the provider's own UI.

## The indicator

[ci-status-indicator.tsx](../../src/components/ci-status-indicator/ci-status-indicator.tsx)
renders one of four states from the cross-provider
[CiStatus model](../../src/core/models/ci-status.ts):

| State     | Pill                | Meaning                        |
| --------- | ------------------- | ------------------------------ |
| Success   | 🟢 green check      | pipeline passing               |
| Failure   | 🔴 red cross        | pipeline failing               |
| Pending   | 🔵 blue clock       | pipeline running / queued      |
| Cancelled | ⚪ grey ban         | pipeline cancelled             |
| None      | *no pill*           | no CI configured / no signal   |

When the provider supplies a valid absolute http(s) URL, the pill is clickable
and deep-links to the pipeline; otherwise it stays a static glyph. Malformed or
relative URLs are rejected defensively rather than opened.

## Per-provider mapping

Each provider transformer reduces its native CI representation to the shared
`CiState`:

- **GitHub**
  ([github-ci-status.ts](../../src/core/transformers/github/github-ci-status.ts)):
  uses the aggregated `statusCheckRollup.state`. `SUCCESS` → Success,
  `FAILURE`/`ERROR` → Failure, `PENDING`/`EXPECTED` → Pending, anything else →
  None (GitHub's rollup has no explicit cancelled state). Deep-link: the PR's
  `/checks` page.

- **GitLab**
  ([gitlab-ci-status.ts](../../src/core/transformers/gitlab/gitlab-ci-status.ts)):
  uses `headPipeline.status`. `SUCCESS` → Success, `FAILED` → Failure, all
  in-flight states (running, pending, created, preparing, scheduled, waiting,
  canceling) → Pending, `CANCELED` → Cancelled, `SKIPPED`/`MANUAL` → None.
  Deep-link: the pipeline's `detailsPath` composed with the account's domain
  (works for self-hosted instances too).

- **Azure DevOps**
  ([azure-ci-status.ts](../../src/core/transformers/azure/azure-ci-status.ts)):
  uses branch-policy evaluations, considering only Build and Status policy types
  — reviewer-count, work-item and merge-strategy policies are governance, not CI.
  Any failed policy → Failure, else any queued/running → Pending, else approved →
  Success. Deep-link: the PR page (policy evaluations carry no clean pipeline
  URLs, and the PR page already lists per-policy status).

## Where else CI status is used

The same `CiStatus` drives two other behaviors, so they can never disagree with
the pill:

- A **failing** pipeline on your own PR puts it in the "Your PR needs work"
  bucket of the [Needs you tab](needs-you.md).
- A **passing (or absent)** pipeline is one of the conditions of the
  [merge gate](merge.md) — the Merge pill never shows on a red or running
  pipeline.
