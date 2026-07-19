import { Vote } from "models/attendee";
import hasChangesRequested from "utils/has-changes-requested";

const reviewer = (vote?: Vote) => ({ name: "R", avatarUrl: "", vote });

describe("hasChangesRequested", () => {
  it("returns false for no reviewers", () => {
    expect(hasChangesRequested([])).toBe(false);
  });

  it("returns false for approved and voteless reviewers", () => {
    expect(
      hasChangesRequested([
        reviewer(Vote.Approved),
        reviewer(Vote.NoVote),
        reviewer(undefined),
      ]),
    ).toBe(false);
  });

  it("returns true for a rejected review (Azure)", () => {
    expect(
      hasChangesRequested([reviewer(Vote.Approved), reviewer(Vote.Rejected)]),
    ).toBe(true);
  });

  it("returns true for a waiting-for vote (GitHub/GitLab changes requested)", () => {
    expect(
      hasChangesRequested([reviewer(Vote.Approved), reviewer(Vote.WaitingFor)]),
    ).toBe(true);
  });
});
