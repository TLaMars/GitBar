import { CiState, CiStatus } from "models/ci-status";
import { PullRequest } from "models/pull-request";

const isCiPassing = (ci?: CiStatus): boolean =>
  ci === undefined || ci.state === CiState.None || ci.state === CiState.Success;

type MergeGate = Pick<
  PullRequest,
  | "isDraft"
  | "isFullyApproved"
  | "isApprovalRequired"
  | "hasConflicts"
  | "ci"
  | "mergeRef"
>;

const canMergePullRequest = (pullRequest: MergeGate): boolean =>
  !pullRequest.isDraft &&
  (pullRequest.isFullyApproved || !pullRequest.isApprovalRequired) &&
  !pullRequest.hasConflicts &&
  isCiPassing(pullRequest.ci) &&
  pullRequest.mergeRef !== undefined;

export default canMergePullRequest;
