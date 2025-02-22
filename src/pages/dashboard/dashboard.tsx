import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";

import PageHeader from "components/page-header/page-header";
import PullRequestList from "components/pull-request-list/pull-request-list";
import usePopoverState, { PopoverState } from "hooks/use-popover-state";
import usePullRequests from "hooks/use-pull-requests";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import PopoverModule from "modules/popover-module/src/PopoverModule";

import useStyles from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const [isRelevant, setIsRelevant] = useState<boolean>(true);
  const popoverState = usePopoverState();
  const {
    relevantPullRequests,
    isLoading,
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
          <PageHeader
            title={t("Dashboard/Heading/PullRequests")}
            selectedButtonIndex={isRelevant ? 0 : 1}
            buttonToggleOptions={[
              {
                label: t("Dashboard/Button/Relevant"),
                onPress: () => setIsRelevant(true),
              },
              {
                label: t("Dashboard/Button/All"),
                onPress: () => setIsRelevant(false),
              },
            ]}
            updatedAt={updatedAt}
          />
        )}
        {isLoading && <ActivityIndicator />}
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
