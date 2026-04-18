export enum CiState {
  Success = "success",
  Failure = "failure",
  Pending = "pending",
  Cancelled = "cancelled",
  None = "none",
}

export type CiStatus = {
  state: CiState;
  // Deep-link to the provider's pipeline / checks page.
  url?: string;
};
