import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import IssueCard from "components/issue-card/issue-card";
import PageHeader from "components/page-header/page-header";
import useGitHubAuth from "hooks/use-github-auth";
import useIssues from "hooks/use-issues";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import { selectHasGitHubAccount } from "store/selectors/accounts";
import { selectShowIssues } from "store/selectors/settings";

import IssuesFallback, { FallbackProps } from "./issues-fallback";
import styles from "./issues.styles";

const Issues: React.FC = () => {
  const { t } = useTranslation();
  const { styles: $ } = useStyles(styles);
  const { navigate } = useNavigation();
  const { openAuthSession } = useGitHubAuth();
  const { issues, updatedAt, isLoading } = useIssues();
  const showIssues = useSelector(selectShowIssues);
  const hasGitHubAccount = useSelector(selectHasGitHubAccount);

  // Fallback state is used to display a fallback component when the issues are not available.
  const fallbackState: FallbackProps | undefined = useMemo(() => {
    if (!showIssues) {
      return {
        heading: t("Issues/Fallback/Disabled/Heading"),
        body: t("Issues/Fallback/Disabled/Body"),
        action: t("Issues/Fallback/Disabled/Action"),
        actionAnalyticsLabel: "Issues/Fallback/Disabled/Action",
        onPress: () => navigate("Settings"),
      };
    }
    if (!hasGitHubAccount) {
      return {
        heading: t("Issues/Fallback/NoGitHub/Heading"),
        body: t("Issues/Fallback/NoGitHub/Body"),
        action: t("Issues/Fallback/NoGitHub/Action"),
        actionAnalyticsLabel: "Issues/Fallback/NoGitHub/Action",
        onPress: () => openAuthSession(),
      };
    }
    if (isLoading && issues.length === 0) {
      return {
        heading: t("Issues/Fallback/Empty/Heading"),
        body: t("Issues/Fallback/Empty/Body"),
      };
    }
    return undefined;
  }, [
    showIssues,
    hasGitHubAccount,
    isLoading,
    issues,
    t,
    navigate,
    openAuthSession,
  ]);

  return (
    <DefaultLayout>
      <View style={$.container}>
        <PageHeader title={t("Issues/Heading/Issues")} updatedAt={updatedAt} />
        {isLoading && <ActivityIndicator />}
        {fallbackState && (
          <IssuesFallback
            heading={fallbackState.heading}
            body={fallbackState.body}
            action={fallbackState.action}
            actionAnalyticsLabel={fallbackState.actionAnalyticsLabel}
            onPress={fallbackState.onPress}
          />
        )}
        {!isLoading && !fallbackState && (
          <FlatList
            contentContainerStyle={$.list}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
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
        )}
      </View>
    </DefaultLayout>
  );
};

export default Issues;
