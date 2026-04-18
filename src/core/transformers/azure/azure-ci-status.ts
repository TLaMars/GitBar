import { CiState, CiStatus } from "models/ci-status";
import {
  AZURE_BUILD_POLICY_TYPE_ID,
  AZURE_STATUS_POLICY_TYPE_ID,
  PolicyEvaluation,
  PolicyEvaluationStatus,
} from "services/api/azure/models/policy-evaluations-response";
import isAbsoluteUrl from "utils/is-absolute-url";

/**
 * Azure branch-policy evaluations are the source of truth for native
 * Azure Pipelines runs (the default for Azure DevOps teams). We mapped
 * commit-statuses as well in an earlier iteration but dropped it to keep
 * the per-PR request cost down — external CI posting raw commit statuses
 * is uncommon on Azure, and the rare user can still click through to the
 * PR page to see them.
 *
 * Only Build + Status policy types are treated as CI signals. Other
 * policies (minimum reviewers, work-item linking, merge strategy) are
 * governance, not CI.
 */
const RELEVANT_POLICY_TYPES = new Set<string>([
  AZURE_BUILD_POLICY_TYPE_ID,
  AZURE_STATUS_POLICY_TYPE_ID,
]);

type Signal = "passed" | "failed" | "pending";

const signalFromPolicyEvaluation = (
  evaluation: PolicyEvaluation,
): Signal | undefined => {
  if (!RELEVANT_POLICY_TYPES.has(evaluation.configuration.type.id)) {
    return undefined;
  }
  switch (evaluation.status) {
    case PolicyEvaluationStatus.Approved:
      return "passed";
    case PolicyEvaluationStatus.Rejected:
    case PolicyEvaluationStatus.Broken:
      return "failed";
    case PolicyEvaluationStatus.Queued:
    case PolicyEvaluationStatus.Running:
      return "pending";
    case PolicyEvaluationStatus.NotApplicable:
    default:
      return undefined;
  }
};

const transformAzureCiStatus = (
  policyEvaluations: PolicyEvaluation[] | undefined,
  prUrl: string,
): CiStatus => {
  if (!policyEvaluations?.length) return { state: CiState.None };

  const signals = policyEvaluations
    .map(signalFromPolicyEvaluation)
    .filter((s): s is Signal => Boolean(s));

  if (signals.length === 0) return { state: CiState.None };

  const hasFailed = signals.includes("failed");
  const hasPending = signals.includes("pending");
  const hasPassed = signals.includes("passed");

  // Policy evaluations don't carry clean deep links, so we fall back to
  // the PR page — it already surfaces the per-policy status for the user.
  const url = isAbsoluteUrl(prUrl) ? prUrl : undefined;

  let state: CiState;
  if (hasFailed) state = CiState.Failure;
  else if (hasPending) state = CiState.Pending;
  else if (hasPassed) state = CiState.Success;
  else state = CiState.None;

  return { state, url };
};

export default transformAzureCiStatus;
