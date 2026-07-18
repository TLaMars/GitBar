export type Attendee = {
  name: string;
  avatarUrl: string;
  vote?: Vote;
  // Set on a PR author when the provider marks them a bot (GitHub "[bot]" login
  // suffix, GitLab user.bot). Drives the "hide bot PRs" filter.
  isBot?: boolean;
};

export enum Vote {
  NoVote = "NoVote",
  Approved = "Approved",
  WaitingFor = "WaitingFor",
  Rejected = "Rejected",
}
