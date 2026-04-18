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

export type PolicyEvaluation = {
  evaluationId: string;
  status: PolicyEvaluationStatus;
  configuration: {
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
