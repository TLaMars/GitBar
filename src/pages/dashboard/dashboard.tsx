import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import PullRequestList from "components/pull-request-list/pull-request-list";
import usePopoverState, { PopoverState } from "hooks/use-popover-state";
import usePullRequests from "hooks/use-pull-requests";
import DefaultLayout from "layouts/default-layout/default-layout";
import PopoverModule from "modules/popover-module/src/PopoverModule";

import DashboardHeader from "./dashboard-header";
import useStyles from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const $ = useStyles();
  const [isRelevant, setIsRelevant] = useState<boolean>(true);
  const popoverState = usePopoverState();
  const {
    relevantPullRequests,
    isFetching,
    groupedAllPrs,
    groupedRelevantPRs,
    updatedAt,
    errors,
  } = usePullRequests();

  useEffect(() => {
    if (relevantPullRequests.length >= 0) {
      PopoverModule.setStatusItemText(relevantPullRequests.length.toString());
    }
  }, [relevantPullRequests]);

  return (
    <DefaultLayout>
      <View style={$.container}>
        {popoverState === PopoverState.OPEN && (
          <DashboardHeader
            isRelevant={isRelevant}
            setIsRelevant={setIsRelevant}
            executedAt={updatedAt}
          />
        )}
        {isFetching && <ActivityIndicator />}
        {popoverState === PopoverState.OPEN && (
          <PullRequestList
            errors={errors}
            sections={isRelevant ? groupedRelevantPRs : groupedAllPrs}
          />
        )}
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
