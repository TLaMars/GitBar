import { PullRequest } from "models/pull-request";
import { SnoozedPullRequest, SnoozeUntil } from "store/slices/pull-requests";

// Is a snooze still in effect for the given PR state at time `now`?
export const isSnoozeActive = (
  snooze: SnoozeUntil,
  pr: Pick<PullRequest, "updatedAt">,
  now: number,
): boolean => {
  if (snooze.type === "date") {
    return new Date(snooze.until).getTime() > now;
  }
  // "until updated" — active until the PR shows new activity.
  return pr.updatedAt === snooze.updatedAt;
};

// Drops PRs whose snooze is still active. Expired or activity-cleared snoozes
// fall through, so the PR reappears on its own.
export const filterSnoozed = (
  pullRequests: PullRequest[],
  snoozed: SnoozedPullRequest[],
  now: number,
): PullRequest[] =>
  pullRequests.filter((pr) => {
    const entry = snoozed.find(
      (s) => s.id === pr.id && s.repoName === pr.repoName,
    );
    return !entry || !isSnoozeActive(entry.snooze, pr, now);
  });
