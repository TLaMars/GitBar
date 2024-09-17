import React, { useCallback, useEffect, useMemo, useState } from "react";
import { ActivityIndicator, SectionList, View } from "react-native";

import Body from "components/body/body";
import Button from "components/button/button";
import ButtonToggle from "components/button-toggle/button-toggle";
import ErrorContainer from "components/error-container/error-container";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import PullRequestCard from "components/pull-request-card/pull-request-card";
import usePullRequests from "hooks/use-pull-requests";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import { AppModuleEmitter, MacState } from "modules/app-module";
import PopoverModule from "modules/popover-module/src/PopoverModule";
import DefaultLayout from "src/layouts/default-layout/default-layout";
import { selectShowRelevantTab } from "store/selectors/settings";

import useStyles from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const [previousPollingTime, setPreviousPollingTime] = useState<number>(0);
  const [minutesAgo, setMinutesAgo] = useState<number>(0);
  const [isRelevant, setIsRelevant] = useState<boolean>(true);
  const [macState, setMacState] = useState<MacState>(MacState.UNLOCKED);
  const {
    pullRequests,
    loading,
    fetchPullRequests,
    relevantPullRequests,
    relevantAmountOfPullRequests,
    errors,
  } = usePullRequests();
  const showRelevantTab = useSelector(selectShowRelevantTab);

  const showRetryButton = useMemo(
    () => loading && minutesAgo > 5,
    [loading, minutesAgo],
  );

  useEffect(() => {
    AppModuleEmitter.addListener("onMacStateChange", (event) => {
      setMacState(event.state);
    });

    return () => {
      AppModuleEmitter.removeAllListeners("onMacStateChange");
    };
  }, []);

  useEffect(() => {
    if (showRetryButton) {
      PopoverModule.setStatusItemText(t("Dashboard/StatusBar/Retry"));
      return;
    }
    if (relevantAmountOfPullRequests >= 0) {
      PopoverModule.setStatusItemText(relevantAmountOfPullRequests.toString());
    }
  }, [relevantAmountOfPullRequests, showRetryButton, t]);

  const pollPullRequests = useCallback(async () => {
    await fetchPullRequests();
    setPreviousPollingTime(Date.now());
    setMinutesAgo(0);
  }, [fetchPullRequests]);

  useEffect(() => {
    let pollInterval: NodeJS.Timeout | null = null;

    const startPolling = () => {
      void pollPullRequests();
      pollInterval = setInterval(pollPullRequests, 180000); // Polling every 3 minutes
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
  }, [fetchPullRequests, pollPullRequests, macState]);

  useEffect(() => {
    const minutesAgeInterval = setInterval(() => {
      setMinutesAgo(Math.floor((Date.now() - previousPollingTime) / 60000));
    }, 20000);

    return () => clearInterval(minutesAgeInterval);
  }, [previousPollingTime]);

  return (
    <DefaultLayout>
      <View style={$.container}>
        <View style={$.header}>
          <View style={$.headerLeft}>
            <Heading size="s">{t("Dashboard/Heading/PullRequests")}</Heading>
            <View style={$.poller}>
              <Icon name="Refresh" size={14} />
              <Body size="xs" color="textSecondary">
                {t("Dashboard/Body/LastUpdated", { minutesAgo })}
              </Body>
            </View>
          </View>
          {showRelevantTab && (
            <View style={$.headerRight}>
              <ButtonToggle
                labelLeft={t("Dashboard/Button/Relevant")}
                labelRight={t("Dashboard/Button/All")}
                onPressLeft={() => setIsRelevant(true)}
                onPressRight={() => setIsRelevant(false)}
              />
            </View>
          )}
        </View>
        {loading && !showRetryButton && <ActivityIndicator />}
        {showRetryButton && (
          <Button
            onPress={pollPullRequests}
            size="s"
            type="danger"
            label={t("Dashboard/Button/Retry")}
          />
        )}
        <SectionList
          contentContainerStyle={$.list}
          sections={
            isRelevant && showRelevantTab ? relevantPullRequests : pullRequests
          }
          ListHeaderComponent={errors && <ErrorContainer errors={errors} />}
          renderItem={({ item }) => (
            <PullRequestCard
              title={item.title}
              author={item.author}
              reviewers={item.reviewers}
              url={item.url}
              amountOfComments={item.amountOfComments}
              amountOfApprovals={item.amountOfApprovals}
              amountOfRequiredApprovals={item.amountOfRequiredApprovals}
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
