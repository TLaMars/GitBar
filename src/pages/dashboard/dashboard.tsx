import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { NativeEventEmitter, NativeModules } from "react-native-macos";

import PullRequestList from "components/pull-request-list/pull-request-list";
import usePullRequests from "hooks/use-pull-requests";
import useTranslation from "hooks/use-translation";
import { AppModuleEmitter, MacState } from "modules/app-module";
import PopoverModule from "modules/popover-module/src/PopoverModule";
import DefaultLayout from "src/layouts/default-layout/default-layout";

import DashboardHeader from "./dashboard-header";
import useStyles from "./dashboard.styles";

const nativeModule = NativeModules.RNEventEmitter;
const EventEmitter = new NativeEventEmitter(nativeModule);

const Dashboard: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const [isRelevant, setIsRelevant] = useState<boolean>(true);
  const [macState, setMacState] = useState<MacState>(MacState.UNLOCKED);
  const [popoverClosed, setPopoverClosed] = useState<boolean>(false);
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

  useEffect(() => {
    AppModuleEmitter.addListener("onMacStateChange", (event) => {
      setMacState(event.state);
    });

    EventEmitter.addListener("onPopoverState", (state) => {
      setPopoverClosed(state.closed);
    });

    return () => {
      AppModuleEmitter.removeAllListeners("onMacStateChange");
      EventEmitter.removeAllListeners("onPopoverState");
    };
  }, []);

  useEffect(() => {
    if (relevantAmountOfPullRequests >= 0) {
      PopoverModule.setStatusItemText(relevantAmountOfPullRequests.toString());
    }
  }, [relevantAmountOfPullRequests, t, totalAmountOfPullRequests]);

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

  if (!popoverClosed) {
    return null;
  }

  return (
    <DefaultLayout>
      <View style={$.container}>
        <DashboardHeader
          isRelevant={isRelevant}
          setIsRelevant={setIsRelevant}
          executedAt={executedAt}
        />
        {loading && <ActivityIndicator />}
        <PullRequestList
          errors={errors}
          sections={isRelevant ? relevantPullRequests : pullRequests}
        />
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
