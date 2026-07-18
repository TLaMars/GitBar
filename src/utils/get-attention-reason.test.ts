import { AccountType } from "models/account";
import { Vote } from "models/attendee";
import { CiState } from "models/ci-status";
import { MergeRef } from "models/pull-request";
import getAttentionReason, { AttentionReason } from "utils/get-attention-reason";

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

    it("flags my PR with a rejected review", () => {
      expect(
        getAttentionReason({
          ...base,
          isAuthoredByMe: true,
          reviewers: [{ name: "R", avatarUrl: "", vote: Vote.Rejected }],
        }),
      ).toBe(AttentionReason.NeedsWork);
    });

    it("does not flag someone else's failing PR as NeedsWork", () => {
      expect(
        getAttentionReason({ ...base, ci: { state: CiState.Failure } }),
      ).toBe(AttentionReason.Waiting);
    });
  });

  describe("BlockedOnYou", () => {
    it("flags another PR with my review still pending", () => {
      expect(
        getAttentionReason({ ...base, isReviewPendingFromMe: true }),
      ).toBe(AttentionReason.BlockedOnYou);
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
      // Fully approved + clean + green would be mergeable, so it lands in
      // ReadyToMerge rather than BlockedOnYou.
      expect(
        getAttentionReason({
          ...base,
          isReviewPendingFromMe: true,
          isFullyApproved: true,
        }),
      ).toBe(AttentionReason.ReadyToMerge);
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
  });
});
