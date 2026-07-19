import { Attendee, Vote } from "models/attendee";

/**
 * True when any reviewer has requested changes. Providers encode this
 * differently: Azure emits Vote.Rejected (and Vote.WaitingFor for "waiting
 * for author"), while GitHub and GitLab map their changes-requested review
 * states to Vote.WaitingFor — so both votes mean the author must act.
 */
const hasChangesRequested = (reviewers: Attendee[]): boolean =>
  reviewers.some(
    (reviewer) =>
      reviewer.vote === Vote.Rejected || reviewer.vote === Vote.WaitingFor,
  );

export default hasChangesRequested;
