import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";

import Body from "components/body/body";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import PullRequestCard from "components/pull-request-card/pull-request-card";
import useDispatch from "hooks/use-dispatch";
import usePullRequests from "hooks/use-pull-requests";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import Bridges from "services/bridges/bridges";
import DefaultLayout from "src/layouts/default-layout/default-layout";
import { selectAccounts } from "store/selectors/accounts";
import { removeOneAccount } from "store/slices/accounts";

import useStyles from "./dashboard.styles";

const Dashboard: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const [previousPollingTime, setPreviousPollingTime] = useState<number>(0);
  const [minutesAgo, setMinutesAgo] = useState<number>(0);
  const { pullRequests, loading, fetchPullRequests } = usePullRequests();

  // TEMP: Delete accounts on first load that don't have auth object
  const accounts = useSelector(selectAccounts);
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  useEffect(() => {
    if (accounts.length === 0) {
      navigate("OnboardingWelcome");
      return;
    }
    accounts.forEach((account) => {
      // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
      if (!account.auth) {
        // @ts-ignore
        dispatch(removeOneAccount(account.accountId as string));
      }
    });
  }, [accounts, dispatch, navigate]);

  useEffect(() => {
    if (pullRequests.length > 0) {
      Bridges.App.setStatusBarText(pullRequests.length.toString());
    }
  }, [pullRequests]);

  useEffect(() => {
    setPreviousPollingTime(Date.now());
    void fetchPullRequests();

    // Polling every 3 minutes
    const pollInterval = setInterval(() => {
      void fetchPullRequests();
      setPreviousPollingTime(Date.now());
      setMinutesAgo(0);
    }, 180000);

    return () => clearInterval(pollInterval);
  }, [fetchPullRequests]);

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
          <Heading size="s">{t("Dashboard/Heading/PullRequests")}</Heading>
          <View style={$.poller}>
            <Icon name="Refresh" size={14} />
            <Body size="xs" color="textSecondary">
              {t("Dashboard/Body/LastUpdated", { minutesAgo })}
            </Body>
          </View>
        </View>
        {loading && <ActivityIndicator />}
        {pullRequests.length > 0 && (
          <FlatList
            contentContainerStyle={$.list}
            data={pullRequests}
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
          />
        )}
      </View>
    </DefaultLayout>
  );
};

export default Dashboard;
