import { AccountType } from "models/account";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import buildNotificationPayload from "utils/build-notification-payload";
import { NotificationEvent } from "utils/derive-notification-events";
import { NotificationSignal } from "utils/get-pull-request-signals";

const pullRequest: PullRequest = {
  id: "42",
  title: "Add dark mode",
  author: { name: "author", avatarUrl: "" },
  repoId: "repo-1",
  repoName: "gitbar",
  reviewers: [],
  createdAt: "2026-01-01T00:00:00Z",
  updatedAt: "2026-07-10T00:00:00Z",
  url: "https://example.com/pr/42",
  isDraft: false,
  accentColor: "accentTeal",
  isApprovedByMe: false,
  isCommentedByMe: false,
  isAuthoredByMe: true,
  isAssignedToMe: false,
  isReviewPendingFromMe: false,
  isFullyApproved: false,
  isApprovalRequired: true,
  hasConflicts: false,
  unresolvedThreadCount: 0,
  ci: { state: CiState.Success },
  accountId: "account-1",
  mergeRef: {
    provider: AccountType.GitHub,
    pullRequestId: "42",
    mergeMethod: "MERGE",
    expectedHeadOid: "abc123",
  },
};

const makeEvent = (type: NotificationSignal): NotificationEvent => ({
  type,
  pullRequest,
});

describe("buildNotificationPayload", () => {
  it("maps the PR onto the payload", () => {
    expect(buildNotificationPayload(makeEvent("conflicts"))).toEqual({
      id: "account-1:42",
      title: "Your PR has merge conflicts",
      body: "Add dark mode",
      url: "https://example.com/pr/42",
      threadId: "gitbar",
    });
  });

  it.each<[NotificationSignal, string]>([
    ["conflicts", "Your PR has merge conflicts"],
    ["changesRequested", "Changes requested on your PR"],
    ["ciFailed", "CI failed on your PR"],
    ["reviewRequested", "Your review was requested"],
    ["readyToMerge", "Your PR is ready to merge"],
  ])("titles %s as %j", (type, title) => {
    expect(buildNotificationPayload(makeEvent(type)).title).toBe(title);
  });
});
