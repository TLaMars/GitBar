import resolveStatusBadge from "utils/resolve-status-badge";

const cleanState = {
  hasConflicts: false,
  hasChangesRequested: false,
  isDraft: false,
  isFullyApproved: false,
};

describe("resolveStatusBadge", () => {
  it("returns null when no state applies", () => {
    expect(resolveStatusBadge(cleanState)).toBeNull();
  });

  it("shows Approved as the lowest-priority badge", () => {
    expect(
      resolveStatusBadge({ ...cleanState, isFullyApproved: true }),
    ).toBe("approved");
  });

  it("shows Draft over Approved", () => {
    expect(
      resolveStatusBadge({
        ...cleanState,
        isDraft: true,
        isFullyApproved: true,
      }),
    ).toBe("draft");
  });

  it("shows Changes requested over Draft", () => {
    expect(
      resolveStatusBadge({
        ...cleanState,
        hasChangesRequested: true,
        isDraft: true,
      }),
    ).toBe("changesRequested");
  });

  it("shows Conflicts over everything else", () => {
    expect(
      resolveStatusBadge({
        hasConflicts: true,
        hasChangesRequested: true,
        isDraft: true,
        isFullyApproved: true,
      }),
    ).toBe("conflicts");
  });

  it("collapses Approved + Conflicts down to Conflicts", () => {
    expect(
      resolveStatusBadge({
        ...cleanState,
        hasConflicts: true,
        isFullyApproved: true,
      }),
    ).toBe("conflicts");
  });
});
