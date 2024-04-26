import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import AccountCard from "components/account-card/account-card";
import Body from "components/body/body";
import Heading from "components/heading/heading";
import Link from "components/link/link";
import ListItem from "components/list-item/list-item";
import Spacer from "components/spacer/spacer";
import { AccountsContext } from "contexts/accounts";
import useDispatch from "hooks/use-dispatch";
import useProfiles from "hooks/use-profiles";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import { GroupPullRequestsBy } from "models/pull-request";
import Bridges from "services/bridges/bridges";
import { NotificationPermission } from "services/bridges/notification-manager";
import {
  selectAllowNotifications,
  selectGroupPRsBy,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import { removeOneAccount } from "store/slices/accounts";
import {
  setAllowNotifications,
  setGroupPRsBy,
  setHidePRsAfterTwoMonths,
  setHidePRsApprovedByMe,
} from "store/slices/settings";

import useStyles from "./settings.styles";

const Settings: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const accounts = useContext(AccountsContext);
  const { profiles, fetchProfiles } = useProfiles();
  const { navigate } = useNavigation();
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const allowNotifications = useSelector(selectAllowNotifications);
  const [notificationPermissions, setNotificationPermissions] =
    useState<NotificationPermission>();

  useEffect(() => {
    void fetchProfiles();
  }, [fetchProfiles]);

  useEffect(() => {
    void Bridges.Notification.checkPermissions().then((result) => {
      setNotificationPermissions(result);
    });
  }, []);

  const deleteAccount = (accountId: string) => {
    dispatch(removeOneAccount(accountId));
    if (accounts.length === 1) {
      navigate("OnboardingWelcome");
    }
  };

  return (
    <DefaultLayout>
      <ScrollView contentContainerStyle={$.container}>
        <Heading size="s">{t("Settings/Heading/Settings")}</Heading>
        <Spacer mt={2} />
        <View style={$.sectionHeader}>
          <Heading size="x2s">{t("Settings/SectionHeading/Accounts")}</Heading>
          <Link
            label={t("Settings/Link/AddAccount")}
            onPress={() =>
              navigate("OnboardingAddAccount", {
                showBackButton: true,
              })
            }
          />
        </View>
        <Spacer mt={1} />
        {profiles.map((profile, index) => (
          <View key={profile.id}>
            <AccountCard
              type={profile.type}
              userName={profile.userName ?? ""}
              avatarUrl={profile.avatarUrl}
              name={profile.name}
              border={index !== accounts.length - 1}
              onDeletePress={() => deleteAccount(profile.id)}
            />
          </View>
        ))}
        <Spacer mt={4} />
        <Heading size="x2s">
          {t("Settings/SectionHeading/PullRequests")}
        </Heading>
        <Spacer mt={1} />
        <ListItem
          label={t("Settings/GroupPRsBy/Repo")}
          border
          value={groupPRsBy === GroupPullRequestsBy.REPO}
          onToggle={(value) => {
            if (value) {
              dispatch(setGroupPRsBy(GroupPullRequestsBy.REPO));
            } else {
              dispatch(setGroupPRsBy(GroupPullRequestsBy.NONE));
            }
          }}
        />
        <ListItem
          label={t("Settings/GroupPRsBy/Date")}
          border
          value={groupPRsBy === GroupPullRequestsBy.DATE}
          onToggle={(value) => {
            if (value) {
              dispatch(setGroupPRsBy(GroupPullRequestsBy.DATE));
            } else {
              dispatch(setGroupPRsBy(GroupPullRequestsBy.NONE));
            }
          }}
        />
        <Spacer mt={4} />
        <Body bold size="s">
          {t("Settings/SectionHeading/RelevantPullRequests")}
        </Body>
        <Body size="xs" color="textSecondary">
          {t("Settings/Body/RelevantPullRequests")}
        </Body>
        <ListItem
          label={t("Settings/PullRequests/HideAfter")}
          border
          value={hidePRsAfterTwoMonths}
          onToggle={(value) => dispatch(setHidePRsAfterTwoMonths(value))}
        />
        <ListItem
          label={t("Settings/PullRequests/HideApprovedByMe")}
          value={hidePRsApprovedByMe}
          onToggle={(value) => dispatch(setHidePRsApprovedByMe(value))}
        />
        <Spacer mt={4} />
        <Heading size="x2s">{t("Settings/SectionHeading/App")}</Heading>
        <Spacer mt={1} />
        <ListItem
          label={t("Settings/Application/Notifications")}
          value={allowNotifications}
          disabled={notificationPermissions === NotificationPermission.DENIED}
          onToggle={(value) => {
            if (value) {
              Bridges.Notification.requestPermissions();
            }
            dispatch(setAllowNotifications(value));
          }}
        />
      </ScrollView>
    </DefaultLayout>
  );
};

export default Settings;
