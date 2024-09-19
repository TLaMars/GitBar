import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import AccountCard from "components/account-card/account-card";
import Body from "components/body/body";
import Button from "components/button/button";
import Heading from "components/heading/heading";
import Link from "components/link/link";
import ListItemPicker from "components/list-item/list-item-picker";
import ListItemToggle from "components/list-item/list-item-toggle";
import Spacer from "components/spacer/spacer";
import { AccountsContext } from "contexts/accounts";
import useDispatch from "hooks/use-dispatch";
import useProfiles from "hooks/use-profiles";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import Appearance from "models/appearance";
import { GroupPullRequestsBy } from "models/pull-request";
import AppModule from "modules/app-module";
import NotificationsModule, {
  NotificationPermission,
} from "modules/notifications-module";
import {
  selectAllowNotifications,
  selectAppearance,
  selectGroupPRsBy,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
  selectLaunchAtLogin,
} from "store/selectors/settings";
import { removeOneAccount } from "store/slices/accounts";
import { resetHiddenPullRequests } from "store/slices/pull-requests";
import {
  setAllowNotifications,
  setAppearance,
  setGroupPRsBy,
  setHidePRsAfterTwoMonths,
  setHidePRsApprovedByMe,
  setLaunchAtLogin,
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
  const appearance = useSelector(selectAppearance);
  const launchAtLoginEnabled = useSelector(selectLaunchAtLogin);
  const [notificationPermissions, setNotificationPermissions] =
    useState<NotificationPermission>();

  useEffect(() => {
    void fetchProfiles();
  }, [fetchProfiles]);

  useEffect(() => {
    void NotificationsModule.getPermissions().then((result) => {
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
              status={profile.status}
            />
          </View>
        ))}
        <Spacer mt={4} />
        <Heading size="x2s">
          {t("Settings/SectionHeading/PullRequests")}
        </Heading>
        <Spacer mt={1} />
        <ListItemPicker
          label={t("Settings/GroupPRsBy/GroupBy")}
          selectedValue={groupPRsBy}
          onValueChange={(value) =>
            dispatch(setGroupPRsBy(value as GroupPullRequestsBy))
          }
          pickerItems={[
            {
              label: t("Settings/GroupPRsBy/Repo"),
              value: GroupPullRequestsBy.REPO,
            },
            {
              label: t("Settings/GroupPRsBy/Date"),
              value: GroupPullRequestsBy.DATE,
            },
            {
              label: t("Settings/GroupPRsBy/None"),
              value: GroupPullRequestsBy.NONE,
            },
          ]}
        />
        <Spacer mt={4} />
        <Body bold size="s">
          {t("Settings/SectionHeading/RelevantPullRequests")}
        </Body>
        <Body size="xs" color="textSecondary">
          {t("Settings/Body/RelevantPullRequests")}
        </Body>
        <ListItemToggle
          label={t("Settings/PullRequests/HideAfter")}
          border
          value={hidePRsAfterTwoMonths}
          onToggle={(value) => dispatch(setHidePRsAfterTwoMonths(value))}
        />
        <ListItemToggle
          label={t("Settings/PullRequests/HideApprovedByMe")}
          value={hidePRsApprovedByMe}
          onToggle={(value) => dispatch(setHidePRsApprovedByMe(value))}
        />
        <Spacer mt={4} />
        <Heading size="x2s">{t("Settings/SectionHeading/App")}</Heading>
        <Spacer mt={1} />
        <ListItemToggle
          border
          label={t("Settings/Application/Notifications")}
          value={allowNotifications}
          disabled={notificationPermissions === NotificationPermission.DENIED}
          onToggle={async (value) => {
            if (value) {
              await NotificationsModule.requestPermissions();
            }
            dispatch(setAllowNotifications(value));
          }}
        />
        <ListItemPicker
          label={t("Settings/Application/Appearance")}
          border
          selectedValue={appearance}
          onValueChange={(value) =>
            dispatch(setAppearance(value as Appearance))
          }
          pickerItems={[
            { label: t("Settings/Appearance/Light"), value: Appearance.Light },
            { label: t("Settings/Appearance/Dark"), value: Appearance.Dark },
            // TODO: Implement system appearance
            // { label: t("Settings/Appearance/System"), value: Appearance.Auto },
          ]}
        />
        <ListItemToggle
          label={t("Settings/Application/LaunchAtLogin")}
          value={launchAtLoginEnabled}
          onToggle={async (value) => {
            await AppModule.enableLaunchAtLogin(value);
            dispatch(setLaunchAtLogin(value));
          }}
        />

        {__DEV__ && (
          <>
            <Spacer mt={4} />
            <Heading size="x2s">Development section</Heading>
            <Spacer mt={1} />
            <Button
              size="xs"
              label="Reset hidden PRs"
              onPress={() => {
                dispatch(resetHiddenPullRequests());
              }}
            />
          </>
        )}
      </ScrollView>
    </DefaultLayout>
  );
};

export default Settings;
