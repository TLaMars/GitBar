import { useContext, useMemo } from "react";

import { DataContext } from "contexts/data";
import { TranslationKey } from "contexts/intl";
import { PullRequest } from "models/pull-request";
import { Section } from "models/section";
import {
  selectHiddenPullRequests,
  selectSnoozedPullRequests,
} from "store/selectors/pull-requests";
import {
  selectGroupPRsBy,
  selectHideBotPRs,
  selectHideDraftPRs,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import { AttentionReason } from "utils/get-attention-reason";
import groupPullRequestsBy from "utils/group-pull-requests";
import groupPullRequestsByAttention, {
  isActionableReason,
} from "utils/group-pull-requests-by-attention";
import { filterSnoozed } from "utils/is-pull-request-snoozed";
import {
  applyUserFilters,
  filterMinePRs,
  filterPRQueryResult,
  filterReviewPRs,
} from "utils/pull-request-filters";

import useSelector from "./use-selector";
import useTranslation from "./use-translation";

const REASON_TITLE_KEY: Record<AttentionReason, TranslationKey> = {
  [AttentionReason.NeedsWork]: "Dashboard/Section/NeedsWork",
  [AttentionReason.ReadyToMerge]: "Dashboard/Section/ReadyToMerge",
  [AttentionReason.BlockedOnYou]: "Dashboard/Section/BlockedOnYou",
  [AttentionReason.Waiting]: "Dashboard/Section/Waiting",
};

const usePullRequests = () => {
  const { t } = useTranslation();
  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const hiddenPullRequests = useSelector(selectHiddenPullRequests);
  const snoozedPullRequests = useSelector(selectSnoozedPullRequests);
  const hideDraftPRs = useSelector(selectHideDraftPRs);
  const hideBotPRs = useSelector(selectHideBotPRs);

  const { pullRequests: result } = useContext(DataContext);

  const queryInfo = useMemo(
    () => ({
      updatedAt:
        result.length > 0 && result[result.length - 1].dataUpdatedAt > 0
          ? result[result.length - 1].dataUpdatedAt
          : Date.now(),
      isLoading: result.some((d) => d.isLoading),
      errors: result.filter((d) => !!d.error).map((d) => d.error),
    }),
    [result],
  );

  const {
    groupedAllPRs,
    groupedMinePRs,
    groupedReviewPRs,
    groupedNeedsYouPRs,
    needsYouCount,
  } = useMemo(() => {
    const prs = filterPRQueryResult(result);
    const filtered = filterSnoozed(
      applyUserFilters(
        prs,
        hiddenPullRequests,
        hidePRsAfterTwoMonths,
        hidePRsApprovedByMe,
        hideDraftPRs,
        hideBotPRs,
      ),
      snoozedPullRequests,
      Date.now(),
    );

    const attentionGroups = groupPullRequestsByAttention(filtered);

    return {
      groupedAllPRs: groupPullRequestsBy(prs, groupPRsBy),
      groupedMinePRs: groupPullRequestsBy(filterMinePRs(filtered), groupPRsBy),
      groupedReviewPRs: groupPullRequestsBy(
        filterReviewPRs(filtered),
        groupPRsBy,
      ),
      groupedNeedsYouPRs: attentionGroups.map<Section<PullRequest>>(
        ({ reason, data }) => ({
          title: t(REASON_TITLE_KEY[reason]),
          data,
          collapsible: reason === AttentionReason.Waiting,
        }),
      ),
      needsYouCount: attentionGroups
        .filter(({ reason }) => isActionableReason(reason))
        .reduce((count, { data }) => count + data.length, 0),
    };
  }, [
    result,
    hiddenPullRequests,
    snoozedPullRequests,
    hideDraftPRs,
    hideBotPRs,
    hidePRsAfterTwoMonths,
    hidePRsApprovedByMe,
    groupPRsBy,
    t,
  ]);

  return {
    groupedAllPRs,
    groupedMinePRs,
    groupedReviewPRs,
    groupedNeedsYouPRs,
    needsYouCount,
    ...queryInfo,
  };
};

export default usePullRequests;
