import { useGuavaClient } from "@guava-analytics/react-native";
import { useCallback } from "react";

import { PullRequest } from "models/pull-request";
import {
  setPullRequestHidden,
  snoozePullRequest,
} from "store/slices/pull-requests";

import useDispatch from "./use-dispatch";

// Card-level actions (snooze / hide) so the card stays presentational and just
// calls the handlers it is given.
const usePullRequestActions = () => {
  const dispatch = useDispatch();
  const client = useGuavaClient();

  const snooze = useCallback(
    (pr: Pick<PullRequest, "id" | "repoName" | "updatedAt">) => {
      dispatch(
        snoozePullRequest({
          id: pr.id,
          repoName: pr.repoName,
          snooze: { type: "updated", updatedAt: pr.updatedAt },
        }),
      );
      client.trackEvent("pull_request_snoozed", { id: pr.id, type: "updated" });
    },
    [dispatch, client],
  );

  const hide = useCallback(
    (pr: Pick<PullRequest, "id" | "repoName">) => {
      dispatch(setPullRequestHidden({ id: pr.id, repoName: pr.repoName }));
      client.trackEvent("pull_request_hidden", { id: pr.id });
    },
    [dispatch, client],
  );

  return { snooze, hide };
};

export default usePullRequestActions;
