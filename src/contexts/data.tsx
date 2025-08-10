import { UseQueryResult } from "@tanstack/react-query";
import { PropsWithChildren, createContext, useMemo, useRef } from "react";

import useDataHelper from "hooks/context/use-data-context-helpers";
import useIssuesQueries from "hooks/queries/use-issues-queries";
import usePullRequestsQueries from "hooks/queries/use-pull-requests-queries";
import usePopoverState, { PopoverState } from "hooks/use-popover-state";
import Issue from "models/issue";
import { PullRequest } from "models/pull-request";

type Data = {
  pullRequests: UseQueryResult<PullRequest[], Error>[];
  issues: UseQueryResult<Issue[], Error>[];
};

const defaultData = {
  pullRequests: [],
  issues: [],
};

export const DataContext = createContext<Data>(defaultData);

const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { updateMenuBarAndSendNotification } = useDataHelper();
  const oldData = useRef<Data>(defaultData);
  const pullRequests = usePullRequestsQueries();
  const issues = useIssuesQueries();
  const popoverState = usePopoverState();

  const data = useMemo(() => {
    const returnData = {
      pullRequests,
      issues,
    };

    updateMenuBarAndSendNotification(pullRequests);

    if (popoverState === PopoverState.CLOSED) {
      return oldData.current;
    }

    oldData.current = returnData;
    return returnData;
  }, [pullRequests, updateMenuBarAndSendNotification, popoverState, issues]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
