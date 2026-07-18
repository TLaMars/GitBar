export type StatusBadge =
  | "conflicts"
  | "changesRequested"
  | "draft"
  | "approved"
  | null;

type StatusGate = {
  hasConflicts: boolean;
  hasChangesRequested: boolean;
  isDraft: boolean;
  isFullyApproved: boolean;
};

const resolveStatusBadge = ({
  hasConflicts,
  hasChangesRequested,
  isDraft,
  isFullyApproved,
}: StatusGate): StatusBadge => {
  if (hasConflicts) return "conflicts";
  if (hasChangesRequested) return "changesRequested";
  if (isDraft) return "draft";
  if (isFullyApproved) return "approved";
  return null;
};

export default resolveStatusBadge;
