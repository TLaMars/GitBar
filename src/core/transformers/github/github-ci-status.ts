import { StatusState } from "gql/github/codegen/graphql";
import { CiState, CiStatus } from "models/ci-status";
import isAbsoluteUrl from "utils/is-absolute-url";

type Rollup =
  | {
      state: StatusState;
    }
  | null
  | undefined;

/**
 * Map GitHub's aggregated `statusCheckRollup.state` to our cross-provider
 * `CiStatus`. We intentionally surface only the rollup state — not the
 * per-check breakdown — to keep the indicator focused on "is this pipeline
 * green?".
 *
 *   SUCCESS            → Success
 *   FAILURE | ERROR    → Failure
 *   PENDING | EXPECTED → Pending
 *   null / other       → None
 *
 * Note: GitHub's rollup has no explicit "cancelled" state, so the
 * Cancelled case from GitHub would surface as None.
 */
const transformGithubCiStatus = (rollup: Rollup, prUrl: string): CiStatus => {
  if (!rollup) return { state: CiState.None };

  const url = isAbsoluteUrl(prUrl)
    ? `${prUrl.replace(/\/+$/, "")}/checks`
    : undefined;

  switch (rollup.state) {
    case StatusState.Success:
      return { state: CiState.Success, url };
    case StatusState.Failure:
    case StatusState.Error:
      return { state: CiState.Failure, url };
    case StatusState.Pending:
    case StatusState.Expected:
      return { state: CiState.Pending, url };
    default:
      return { state: CiState.None, url };
  }
};

export default transformGithubCiStatus;
