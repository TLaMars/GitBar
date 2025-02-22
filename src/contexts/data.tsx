import { UseQueryResult } from "@tanstack/react-query";
import { PropsWithChildren, createContext, useMemo, useRef } from "react";

import useDataHelper from "hooks/context/use-data-context-helpers";
import usePullRequestsQueries from "hooks/queries/use-pull-requests-queries";
import usePopoverState, { PopoverState } from "hooks/use-popover-state";
import { PullRequest } from "models/pull-request";

type Data = {
  pullRequests: UseQueryResult<PullRequest[], Error>[];
};

const defaultData = {
  pullRequests: [],
};

export const DataContext = createContext<Data>(defaultData);

const DataProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const { updateMenuBarAndSendNotification } = useDataHelper();
  const oldData = useRef<Data>(defaultData);
  const pullRequests = usePullRequestsQueries();
  const popoverState = usePopoverState();

  const data = useMemo(() => {
    const returnData = {
      pullRequests,
    };

    updateMenuBarAndSendNotification(pullRequests);

    if (popoverState === PopoverState.CLOSED) {
      return oldData.current;
    }

    oldData.current = returnData;
    return returnData;
  }, [pullRequests, popoverState, updateMenuBarAndSendNotification]);

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>;
};

export default DataProvider;
