import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import PageHeader from "components/page-header/page-header";
import PullRequestList from "components/pull-request-list/pull-request-list";
import usePullRequests from "hooks/use-pull-requests";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import { PullRequestTab } from "models/pull-request";

import styles from "./dashboard.styles";

const TAB_ORDER = [
  PullRequestTab.NEEDS_YOU,
  PullRequestTab.MINE,
  PullRequestTab.REVIEW,
  PullRequestTab.ALL,
] as const;

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { styles: $ } = useStyles(styles);
  const [tab, setTab] = useState<PullRequestTab>(PullRequestTab.NEEDS_YOU);
  const {
    isLoading,
    groupedAllPRs,
    groupedMinePRs,
    groupedReviewPRs,
    groupedNeedsYouPRs,
    needsYouCount,
    updatedAt,
    errors,
  } = usePullRequests();

  const sectionsByTab = {
    [PullRequestTab.NEEDS_YOU]: groupedNeedsYouPRs,
    [PullRequestTab.MINE]: groupedMinePRs,
    [PullRequestTab.REVIEW]: groupedReviewPRs,
    [PullRequestTab.ALL]: groupedAllPRs,
  };

  return (
    <DefaultLayout>
      <View style={$.container}>
        <PageHeader
          title={t("Dashboard/Heading/PullRequests")}
          selectedButtonIndex={TAB_ORDER.indexOf(tab)}
          buttonToggleOptions={[
            {
              label: t("Dashboard/Button/NeedsYou"),
              count: needsYouCount,
              onPress: () => setTab(PullRequestTab.NEEDS_YOU),
            },
            {
              label: t("Dashboard/Button/Mine"),
              onPress: () => setTab(PullRequestTab.MINE),
            },
            {
              label: t("Dashboard/Button/Review"),
              onPress: () => setTab(PullRequestTab.REVIEW),
            },
            {
              label: t("Dashboard/Button/All"),
              onPress: () => setTab(PullRequestTab.ALL),
            },
          ]}
          updatedAt={updatedAt}
        />
        {isLoading && <ActivityIndicator />}
        <PullRequestList errors={errors} sections={sectionsByTab[tab]} />
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
