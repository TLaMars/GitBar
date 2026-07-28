export enum PolicyEvaluationStatus {
  Queued = "queued",
  Running = "running",
  Approved = "approved",
  Rejected = "rejected",
  Broken = "broken",
  NotApplicable = "notApplicable",
}

// Well-known Azure DevOps policy type GUIDs. There are many more (minimum
// reviewers, work-item linking, etc.) but for a CI / pipeline indicator we
// only care about the ones that represent an automated build/check.
//
// These IDs are effectively a public contract — they're hard-coded in
// Microsoft's REST examples and the official azure-devops-node-api SDK,
// identical across Azure DevOps Services and Azure DevOps Server, and
// unchanged since ~2017. The real risk isn't them changing, but Microsoft
// adding new CI-relevant policy types that aren't in this list yet.
//
// Reference: https://learn.microsoft.com/en-us/azure/devops/repos/git/branch-policies
export const AZURE_BUILD_POLICY_TYPE_ID =
  "0609b952-1397-4640-95ec-e00a01b2c241";
export const AZURE_STATUS_POLICY_TYPE_ID =
  "cbdc66da-9728-4af8-aada-9a5a32e4a226";
// Minimum number of reviewers policy — the approval gate that maps most
// directly to "approval policy passed". Same GUID across all Azure DevOps
// Services tenants and Azure DevOps Server instances.
//
// Careful: `fa4e907d-c16b-452d-8106-7efa0cb84489` shares the first two segments
// but is "Require a merge strategy". Using it here matched no approval policy at
// all, so `isApprovalRequired` was always false when policies *were* fetched —
// the real cause of KI-2/KI-6. Verified against a live `policy/evaluations`
// response: this id carries `displayName: "Minimum number of reviewers"`.
export const AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID =
  "fa4e907d-c16b-4a4c-9dfa-4906e5d171dd";

export type PolicyEvaluation = {
  evaluationId: string;
  status: PolicyEvaluationStatus;
  configuration: {
    // Azure returns optional (`isBlocking: false`) and disabled policies
    // alongside the enforcing ones. Optional in this type so a missing flag
    // counts as blocking — unknown fails closed, as with the whole approval gate.
    isEnabled?: boolean;
    isBlocking?: boolean;
    isDeleted?: boolean;
    type: {
      id: string;
      displayName?: string;
    };
  };
  // Build policies include a `buildId` here. Shape varies per policy type so
  // we keep it loose.
  context?: Record<string, unknown> | null;
};

export type PolicyEvaluationsResponse = {
  count: number;
  value: PolicyEvaluation[];
};
