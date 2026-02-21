import React from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import IssueCard from "components/issue-card/issue-card";
import PageHeader from "components/page-header/page-header";
import useIssues from "hooks/use-issues";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";

import styles from "./issues.styles";

const Issues: React.FC = () => {
  const { t } = useTranslation();
  const { styles: $ } = useStyles(styles);
  const { issues, updatedAt, isLoading } = useIssues();

  return (
    <DefaultLayout>
      <View style={$.container}>
        <PageHeader title={t("Issues/Heading/Issues")} updatedAt={updatedAt} />
        {isLoading && <ActivityIndicator />}
        <FlatList
          contentContainerStyle={$.list}
          data={issues}
          renderItem={({ item }) => (
            <IssueCard
              title={item.title}
              projectPath={item.projectPath}
              updatedAt={item.updatedAt}
              url={item.url}
            />
          )}
        />
      </View>
    </DefaultLayout>
  );
};

export default Issues;
