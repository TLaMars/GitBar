import { AccountType } from "models/account";
import { Vote } from "models/attendee";
import Profile from "models/profile";
import { TransformedPullRequest } from "models/pull-request";
import {
  AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID,
  PolicyEvaluationStatus,
} from "services/api/azure/models/policy-evaluations-response";
import {
  AzurePullRequest,
  ReviewerVote,
} from "services/api/azure/models/pull-requests-response";
import { CommentType } from "services/api/azure/models/thread-response";
import cleanPrTitle from "utils/clean-pr-title";
import getColorForProject from "utils/get-project-color";

import transformAzureCiStatus from "./azure-ci-status";

const getVote = (vote: ReviewerVote): Vote => {
  switch (vote) {
    case ReviewerVote.Approved:
      return Vote.Approved;
    case ReviewerVote.ApprovedWithSuggestions:
      return Vote.Approved;
    case ReviewerVote.NoVote:
      return Vote.NoVote;
    case ReviewerVote.Rejected:
      return Vote.Rejected;
    case ReviewerVote.WaitingForAuthor:
      return Vote.WaitingFor;
    default:
      return Vote.NoVote;
  }
};

const transformAzurePullRequest = (
  profile: Profile,
  data: AzurePullRequest,
): TransformedPullRequest => {
  const match = /^(https:\/\/dev\.azure\.com\/[^/]+\/)/.exec(
    data.repository.url,
  );
  const encodedProject = encodeURIComponent(data.repository.project.name);
  const encodedRepo = encodeURIComponent(data.repository.name);
  const prUrl = match
    ? `${match[1]}${encodedProject}/_git/${encodedRepo}/pullrequest/${data.pullRequestId}`
    : "";

  return {
    id: data.pullRequestId.toString(),
    title: cleanPrTitle(data.title),
    author: {
      name: data.createdBy.displayName,
      // TODO: Add avatarUrl
      avatarUrl: "",
    },
    repoId: data.repository.id,
    repoName: data.repository.name,
    reviewers: data.reviewers
      .map((reviewer) => ({
        name: reviewer.displayName,
        // TODO: Add avatarUrl
        avatarUrl: "",
        vote: getVote(reviewer.vote),
      }))
      .sort((a, b) => (a.name > b.name ? 1 : -1)),
    createdAt: data.creationDate,
    // Azure has no PR-level updated timestamp; the newest thread activity
    // (system threads cover pushes/votes, not just comments) is the closest
    // signal. ISO strings compare lexicographically, so reduce for the max.
    updatedAt: data.threads.reduce(
      (latest, thread) =>
        thread.lastUpdatedDate > latest ? thread.lastUpdatedDate : latest,
      data.creationDate,
    ),
    url: prUrl,
    amountOfComments: data.threads.reduce(
      (acc, thread) =>
        acc +
        thread.comments.filter(
          (comment) => comment.commentType === CommentType.Text,
        ).length,
      0,
    ),
    isDraft: data.isDraft,
    accentColor: getColorForProject(data.repository.id),
    isApprovedByMe: data.reviewers.some(
      (reviewer) =>
        reviewer.displayName === profile.name &&
        reviewer.vote === ReviewerVote.Approved,
    ),
    isAssignedToMe: data.reviewers.some(
      (reviewer) => reviewer.displayName === profile.name,
    ),
    // Azure keeps you in reviewers with a vote, so pending = I am a reviewer who
    // has not voted yet (NoVote); any other vote means I have already acted.
    isReviewPendingFromMe: data.reviewers.some(
      (reviewer) =>
        reviewer.displayName === profile.name &&
        reviewer.vote === ReviewerVote.NoVote,
    ),
    isAuthoredByMe: data.createdBy.displayName === profile.name,
    isCommentedByMe: data.threads.some((thread) =>
      thread.comments.some(
        (comment) => comment.author.displayName === profile.name,
      ),
    ),
    hasConflicts: data.mergeStatus === "conflicts",
    isApprovalRequired: !!data.policyEvaluations?.some(
      (e) => e.configuration.type.id === AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID,
    ),
    isFullyApproved: (() => {
      const minApproversEval = data.policyEvaluations?.find(
        (e) =>
          e.configuration.type.id === AZURE_MINIMUM_APPROVERS_POLICY_TYPE_ID,
      );
      if (minApproversEval) {
        return minApproversEval.status === PolicyEvaluationStatus.Approved;
      }
      return data.reviewers.some(
        (r) =>
          r.vote === ReviewerVote.Approved ||
          r.vote === ReviewerVote.ApprovedWithSuggestions,
      );
    })(),
    ci: transformAzureCiStatus(data.policyEvaluations, prUrl),
    mergeRef: data.lastMergeSourceCommit
      ? {
          provider: AccountType.Azure,
          projectId: data.repository.project.id,
          repositoryId: data.repository.id,
          pullRequestId: data.pullRequestId,
          lastMergeSourceCommitId: data.lastMergeSourceCommit.commitId,
        }
      : undefined,
  };
};

export default transformAzurePullRequest;
