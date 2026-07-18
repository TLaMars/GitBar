import { useGuavaClient } from "@guava-analytics/react-native";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useContext } from "react";

import { AccountsContext } from "contexts/accounts";
import { useToast } from "contexts/toasts";
import useTranslation from "hooks/use-translation";
import { PullRequest } from "models/pull-request";
import canMergePullRequest from "utils/can-merge-pull-request";

// Only the fields the merge action needs — the card passes them flat.
type MergeablePullRequest = Pick<
  PullRequest,
  | "id"
  | "accountId"
  | "mergeRef"
  | "isDraft"
  | "isFullyApproved"
  | "isApprovalRequired"
  | "hasConflicts"
  | "ci"
>;

/**
 * Merge action for a single pull request card. Instantiated per card so the
 * pending state is naturally scoped to that card (Azure PR ids are only
 * unique per organization, so identity always includes the account).
 */
const useMergePullRequest = (pullRequest: MergeablePullRequest) => {
  const { id, accountId, mergeRef } = pullRequest;
  const providers = useContext(AccountsContext);
  const queryClient = useQueryClient();
  const { addToast } = useToast();
  const { t } = useTranslation();
  const client = useGuavaClient();

  const provider = providers.find((p) => p.id === accountId);

  const mutation = useMutation({
    mutationFn: async () => {
      if (!provider || !mergeRef) {
        throw new Error(t("PullRequestCard/Merge/AccountMissing"));
      }
      await provider.mergePullRequest(mergeRef);
    },
    onSuccess: async () => {
      client.trackEvent("pull_request_merged", { id });
      addToast({
        message: t("PullRequestCard/Merge/Success"),
        icon: "GitMerge",
        iconColor: "accentGreen",
      });
      // Drop the merged PR locally first — GitHub's search index can lag and
      // briefly resurrect the card on refetch.
      queryClient.setQueryData<PullRequest[]>(
        ["pull-requests", accountId],
        (old) => old?.filter((p) => p.id !== id),
      );
      await queryClient.invalidateQueries({
        queryKey: ["pull-requests", accountId],
      });
    },
    onError: async (error) => {
      client.trackEvent("pull_request_merge_failed", { id });
      addToast({ message: error.message, type: "error" });
      // Re-sync so the merge action re-gates if the PR changed remotely.
      await queryClient.invalidateQueries({
        queryKey: ["pull-requests", accountId],
      });
    },
  });

  return {
    canMerge: provider != null && canMergePullRequest(pullRequest),
    isMerging: mutation.isPending,
    merge: () => {
      // Double-click guard on top of the pill's disabled state.
      if (!mutation.isPending) {
        mutation.mutate();
      }
    },
  };
};

export default useMergePullRequest;
