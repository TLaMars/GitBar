import { AccountType } from "models/account";
import { Vote } from "models/attendee";
import { CiState } from "models/ci-status";
import { MergeRef } from "models/pull-request";
import getAttentionReason, {
  AttentionReason,
} from "utils/get-attention-reason";

const mergeRef: MergeRef = {
  provider: AccountType.GitHub,
  pullRequestId: "pr-1",
  mergeMethod: "MERGE",
  expectedHeadOid: "abc123",
};

// A PR that is authored by someone else, clean, and not awaiting me: Waiting.
const base = {
  isAuthoredByMe: false,
  isReviewPendingFromMe: false,
  isDraft: false,
  isFullyApproved: false,
  isApprovalRequired: true,
  hasConflicts: false,
  unresolvedThreadCount: 0,
  ci: { state: CiState.Success },
  reviewers: [],
  mergeRef,
};

describe("getAttentionReason", () => {
  it("returns Waiting when nothing involves me", () => {
    expect(getAttentionReason(base)).toBe(AttentionReason.Waiting);
  });

  describe("NeedsWork (my own PR)", () => {
    it("flags my conflicted PR", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          hasConflicts: true,
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("flags my failing PR", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          ci: { state: CiState.Failure },
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("flags my PR with a rejected review (Azure)", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          reviewers: [{ name: "R", avatarUrl: "", vote: Vote.Rejected }],
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("flags my PR with changes requested (GitHub/GitLab WaitingFor)", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          reviewers: [{ name: "R", avatarUrl: "", vote: Vote.WaitingFor }],
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("wins over ReadyToMerge when changes are requested on an approval-optional PR", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          isApprovalRequired: false,
          reviewers: [{ name: "R", avatarUrl: "", vote: Vote.WaitingFor }],
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("does not flag someone else's failing PR as NeedsWork", () => {
      expect(
        getAttentionReason({ ...base, ci: { state: CiState.Failure } }),
      ).toBe(AttentionReason.Waiting);
    });

    it("flags my PR with unresolved discussion threads", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          unresolvedThreadCount: 1,
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("prefers NeedsWork over ReadyToMerge when my mergeable PR has open threads", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          isFullyApproved: true,
          unresolvedThreadCount: 2,
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("does not flag someone else's PR with open threads as NeedsWork", () => {
      expect(getAttentionReason({ ...base, unresolvedThreadCount: 3 })).toBe(
        AttentionReason.Waiting,
      );
    });
  });

  describe("BlockedOnYou", () => {
    it("flags another PR with my review still pending", () => {
      expect(getAttentionReason({ ...base, isReviewPendingFromMe: true })).toBe(
        AttentionReason.BlockedOnYou,
      );
    });

    it("does not flag when I have already voted (not pending)", () => {
      expect(
        getAttentionReason({ ...base, isReviewPendingFromMe: false }),
      ).toBe(AttentionReason.Waiting);
    });

    it("does not flag drafts", () => {
      expect(
        getAttentionReason({
          ...base,
          isReviewPendingFromMe: true,
          isDraft: true,
        }),
      ).toBe(AttentionReason.Waiting);
    });

    it("does not flag when it is already fully approved (my review is moot)", () => {
      // Someone else's PR that is already fully approved no longer needs my
      // review, and it is not mine to merge, so it waits — not BlockedOnYou.
      expect(
        getAttentionReason({
          ...base,
          isReviewPendingFromMe: true,
          isFullyApproved: true,
        }),
      ).toBe(AttentionReason.Waiting);
    });

    it("never flags my own PR as blocked on me", () => {
      // Authored by me and not mergeable (not fully approved) → Waiting, and
      // crucially not BlockedOnYou.
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          isReviewPendingFromMe: true,
        }),
      ).toBe(AttentionReason.Waiting);
    });

    it("wins over ReadyToMerge for an approval-optional PR awaiting my review", () => {
      expect(
        getAttentionReason({
          ...base,
          isReviewPendingFromMe: true,
          isApprovalRequired: false,
        }),
      ).toBe(AttentionReason.BlockedOnYou);
    });
  });

  describe("ReadyToMerge", () => {
    it("flags my approved, clean, green PR", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          isFullyApproved: true,
        }),
      ).toBe(AttentionReason.ReadyToMerge);
    });

    it("waits when the PR cannot be merged (no mergeRef)", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          isFullyApproved: true,
          mergeRef: undefined,
        }),
      ).toBe(AttentionReason.Waiting);
    });

    it("does not flag someone else's mergeable PR (author's to ship)", () => {
      // Approved, clean, green, and I could merge it — but it is not mine, so it
      // waits on the author rather than sitting in my Ready to merge.
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: false,
          isFullyApproved: true,
        }),
      ).toBe(AttentionReason.Waiting);
    });
  });
});
