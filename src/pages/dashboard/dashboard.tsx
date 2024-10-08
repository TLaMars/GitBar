import React, { useEffect, useState } from "react";
import { ActivityIndicator, SectionList, View } from "react-native";

import Body from "components/body/body";
import ErrorContainer from "components/error-container/error-container";
import PullRequestCard from "components/pull-request-card/pull-request-card";
import useDispatch from "hooks/use-dispatch";
import usePullRequests from "hooks/use-pull-requests";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import { AppModuleEmitter, MacState } from "modules/app-module";
import PopoverModule from "modules/popover-module/src/PopoverModule";
import DefaultLayout from "src/layouts/default-layout/default-layout";
import { selectShowRelevantTab } from "store/selectors/settings";
import { setPullRequestHidden } from "store/slices/pull-requests";

import DashboardHeader from "./dashboard-header";
import useStyles from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [isRelevant, setIsRelevant] = useState<boolean>(true);
  const [macState, setMacState] = useState<MacState>(MacState.UNLOCKED);
  const {
    pullRequests,
    loading,
    fetchPullRequests,
    relevantPullRequests,
    relevantAmountOfPullRequests,
    errors,
    totalAmountOfPullRequests,
    executedAt,
  } = usePullRequests();
  const showRelevantTab = useSelector(selectShowRelevantTab);

  useEffect(() => {
    AppModuleEmitter.addListener("onMacStateChange", (event) => {
      setMacState(event.state);
    });

    return () => {
      AppModuleEmitter.removeAllListeners("onMacStateChange");
    };
  }, []);

  useEffect(() => {
    if (relevantAmountOfPullRequests >= 0) {
      PopoverModule.setStatusItemText(
        showRelevantTab
          ? relevantAmountOfPullRequests.toString()
          : totalAmountOfPullRequests.toString(),
      );
    }
  }, [
    relevantAmountOfPullRequests,
    t,
    totalAmountOfPullRequests,
    showRelevantTab,
  ]);

  useEffect(() => {
    let pollInterval: NodeJS.Timeout | null = null;

    const startPolling = () => {
      void fetchPullRequests();
      pollInterval = setInterval(fetchPullRequests, 180000); // Polling every 3 minutes
    };

    const stopPolling = () => {
      if (pollInterval) {
        clearInterval(pollInterval);
        pollInterval = null;
      }
    };

    if (macState === MacState.UNLOCKED) {
      startPolling();
    } else {
      stopPolling();
    }

    return () => {
      stopPolling();
    };
  }, [fetchPullRequests, macState]);

  return (
    <DefaultLayout>
      <View style={$.container}>
        <DashboardHeader
          showRelevantTab={showRelevantTab}
          setIsRelevant={setIsRelevant}
          executedAt={executedAt}
        />
        {loading && <ActivityIndicator />}
        <SectionList
          contentContainerStyle={$.list}
          sections={
            isRelevant && showRelevantTab ? relevantPullRequests : pullRequests
          }
          ListHeaderComponent={
            errors.length > 0 ? (
              <ErrorContainer
                errors={errors}
                onErrorRetry={fetchPullRequests}
              />
            ) : undefined
          }
          renderItem={({ item }) => (
            <PullRequestCard
              title={item.title}
              author={item.author}
              reviewers={item.reviewers}
              url={item.url}
              amountOfComments={item.amountOfComments}
              amountOfApprovals={item.amountOfApprovals}
              amountOfRequiredApprovals={item.amountOfRequiredApprovals}
              actionSheetOptions={
                isRelevant && showRelevantTab
                  ? {
                      options: [t("PullRequestCard/ActionSheet/Hide")],
                    }
                  : undefined
              }
              actionSheetCallback={(buttonIndex) => {
                if (buttonIndex === 0) {
                  dispatch(
                    setPullRequestHidden({
                      id: item.id,
                      repoName: item.repoName,
                    }),
                  );
                }
              }}
              accentColor={item.accentColor}
            />
          )}
          keyExtractor={(item) => item.id}
          renderSectionHeader={({ section: { title, hideTitle } }) =>
            hideTitle ? null : (
              <Body bold size="xs">
                {title}
              </Body>
            )
          }
        />
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
