import React, { useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import PageHeader from "components/page-header/page-header";
import PullRequestList from "components/pull-request-list/pull-request-list";
import usePullRequests from "hooks/use-pull-requests";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";

import styles from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const { styles: $ } = useStyles(styles);
  const [isRelevant, setIsRelevant] = useState<boolean>(true);
  const { isLoading, groupedAllPrs, groupedRelevantPRs, updatedAt, errors } =
    usePullRequests();

  return (
    <DefaultLayout>
      <View style={$.container}>
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
        {isLoading && <ActivityIndicator />}
        <PullRequestList
          errors={errors}
          sections={isRelevant ? groupedRelevantPRs : groupedAllPrs}
        />
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
