import { useGuavaClient } from "@guava-analytics/react-native";
import { useCallback } from "react";

import { PullRequest } from "models/pull-request";
import {
  selectHiddenPullRequests,
  selectSnoozedPullRequests,
} from "store/selectors/pull-requests";
import {
  setPullRequestHidden,
  setPullRequestVisible,
  snoozePullRequest,
  unsnoozePullRequest,
} from "store/slices/pull-requests";
import { isSnoozeActive } from "utils/is-pull-request-snoozed";

import useDispatch from "./use-dispatch";
import useSelector from "./use-selector";

const usePullRequestActions = () => {
  const dispatch = useDispatch();
  const client = useGuavaClient();
  const snoozedPullRequests = useSelector(selectSnoozedPullRequests);
  const hiddenPullRequests = useSelector(selectHiddenPullRequests);

  const isSnoozed = useCallback(
    (pr: Pick<PullRequest, "id" | "repoName" | "updatedAt">) => {
      const entry = snoozedPullRequests.find(
        (snoozedPr) =>
          snoozedPr.id === pr.id && snoozedPr.repoName === pr.repoName,
      );
      return !!entry && isSnoozeActive(entry.snooze, pr, Date.now());
    },
    [snoozedPullRequests],
  );

  const isHidden = useCallback(
    (pr: Pick<PullRequest, "id" | "repoName">) =>
      hiddenPullRequests.some(
        (hiddenPr) =>
          hiddenPr.id === pr.id && hiddenPr.repoName === pr.repoName,
      ),
    [hiddenPullRequests],
  );

  const toggleSnooze = useCallback(
    (pr: Pick<PullRequest, "id" | "repoName" | "updatedAt">) => {
      if (isSnoozed(pr)) {
        dispatch(unsnoozePullRequest({ id: pr.id, repoName: pr.repoName }));
        client.trackEvent("pull_request_unsnoozed", { id: pr.id });
        return;
      }
      dispatch(
        snoozePullRequest({
          id: pr.id,
          repoName: pr.repoName,
          snooze: { type: "updated", updatedAt: pr.updatedAt },
        }),
      );
      client.trackEvent("pull_request_snoozed", { id: pr.id, type: "updated" });
    },
    [dispatch, client, isSnoozed],
  );

  const toggleHide = useCallback(
    (pr: Pick<PullRequest, "id" | "repoName">) => {
      if (isHidden(pr)) {
        dispatch(setPullRequestVisible({ id: pr.id, repoName: pr.repoName }));
        client.trackEvent("pull_request_unhidden", { id: pr.id });
        return;
      }
      dispatch(setPullRequestHidden({ id: pr.id, repoName: pr.repoName }));
      client.trackEvent("pull_request_hidden", { id: pr.id });
    },
    [dispatch, client, isHidden],
  );

  return { isSnoozed, isHidden, toggleSnooze, toggleHide };
};

export default usePullRequestActions;
