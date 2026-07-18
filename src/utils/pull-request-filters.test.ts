import { AccountType } from "models/account";
import { CiState } from "models/ci-status";
import { PullRequest } from "models/pull-request";
import { applyUserFilters } from "utils/pull-request-filters";

const makePullRequest = (overrides: Partial<PullRequest>): PullRequest => ({
  id: "pr",
  title: "PR",
  author: { name: "author", avatarUrl: "" },
  repoId: "repo-1",
  repoName: "repo",
  reviewers: [],
  createdAt: "2026-07-01T00:00:00Z",
  updatedAt: "2026-07-10T00:00:00Z",
  url: "https://example.com/pr",
  isDraft: false,
  accentColor: "accentTeal",
  isApprovedByMe: false,
  isCommentedByMe: false,
  isAuthoredByMe: false,
  isAssignedToMe: false,
  isReviewPendingFromMe: false,
  isFullyApproved: false,
  isApprovalRequired: true,
  hasConflicts: false,
  ci: { state: CiState.Success },
  accountId: "account-1",
  mergeRef: {
    provider: AccountType.GitHub,
    pullRequestId: "pr",
    mergeMethod: "MERGE",
    expectedHeadOid: "abc123",
  },
  ...overrides,
});

describe("applyUserFilters — hide bot PRs", () => {
  const humanPr = makePullRequest({
    id: "human",
    author: { name: "octocat", avatarUrl: "", isBot: false },
  });
  const botPr = makePullRequest({
    id: "bot",
    author: { name: "dependabot[bot]", avatarUrl: "", isBot: true },
  });

  it("removes bot-authored PRs when the setting is on", () => {
    const result = applyUserFilters(
      [humanPr, botPr],
      [],
      false,
      false,
      false,
      true,
    );

    expect(result.map((pr) => pr.id)).toEqual(["human"]);
  });

  it("keeps bot-authored PRs when the setting is off", () => {
    const result = applyUserFilters(
      [humanPr, botPr],
      [],
      false,
      false,
      false,
      false,
    );

    expect(result).toHaveLength(2);
  });
});
