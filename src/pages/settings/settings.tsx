import { useGuavaClient } from "@guava/react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator, Linking, ScrollView, View } from "react-native";
import { useStyles } from "react-native-unistyles";

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
  selectHideDraftPRs,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";
import { removeOneAccount } from "store/slices/accounts";
import { resetHiddenPullRequests } from "store/slices/pull-requests";
import {
  setAllowNotifications,
  setAppearance,
  setGroupPRsBy,
  setHideDraftPRs,
  setHidePRsAfterTwoMonths,
  setHidePRsApprovedByMe,
} from "store/slices/settings";
import { setIsOnboarded } from "store/slices/user";

import styles from "./settings.styles";

const Settings: React.FC = () => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const client = useGuavaClient();
  const dispatch = useDispatch();
  const accounts = useContext(AccountsContext);
  const { profiles, isLoading } = useProfiles();
  const { navigate } = useNavigation();
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);
  const allowPushNotifications = useSelector(selectAllowNotifications);
  const appearance = useSelector(selectAppearance);
  const hideDraftPRs = useSelector(selectHideDraftPRs);
  const [notificationPermissions, setNotificationPermissions] =
    useState<NotificationPermission>();
  const [launchAtLogin, setLaunchAtLogin] = useState<boolean>();
  const [isLaunchAtLoginSupported, setIsLaunchAtLoginSupported] =
    useState<boolean>();

  useEffect(() => {
    void AppModule.isLaunchAtLoginEnabled().then((status: boolean) => {
      setLaunchAtLogin(status);
    });
    void AppModule.isLaunchAtLoginSupported().then((supported: boolean) => {
      if (!supported) {
        setIsLaunchAtLoginSupported(supported);
      }
    });
    void NotificationsModule.getPermissions().then((result) => {
      setNotificationPermissions(result);
    });
  }, []);

  const deleteAccount = (accountId: string) => {
    dispatch(removeOneAccount(accountId));
    if (accounts.length === 1) {
      navigate("AddAccount");
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
            analyticsLabel="Settings/Link/AddAccount"
            onPress={() =>
              navigate("AddAccount", {
                showBackButton: true,
              })
            }
          />
        </View>
        <Spacer mt={1} />
        {isLoading && <ActivityIndicator />}
        {profiles.map((profile, index) => (
          <View key={profile.id}>
            <AccountCard
              type={profile.type}
              userName={profile.userName ?? ""}
              avatarUrl={profile.avatarUrl}
              name={profile.name}
              provider={profile.provider}
              border={index !== accounts.length - 1}
              onDeletePress={() => {
                deleteAccount(profile.id);
                client.trackEvent("settings_account_deleted", {
                  account_type: profile.type,
                });
              }}
              state={profile.state}
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
          onValueChange={(value) => {
            dispatch(setGroupPRsBy(value as GroupPullRequestsBy));
            client.trackEvent("group_prs_by_changed", {
              value,
            });
          }}
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
        <ListItemToggle
          label={t("Settings/PullRequests/HideAfter")}
          border
          value={hidePRsAfterTwoMonths}
          onToggle={(value) => {
            dispatch(setHidePRsAfterTwoMonths(value));
            client.trackEvent("hide_prs_after_two_months_changed", {
              value: value.toString(),
            });
          }}
        />
        <ListItemToggle
          label={t("Settings/PullRequests/HideApprovedByMe")}
          border
          value={hidePRsApprovedByMe}
          onToggle={(value) => {
            dispatch(setHidePRsApprovedByMe(value));
            client.trackEvent("hide_prs_approved_by_me_changed", {
              value: value.toString(),
            });
          }}
        />
        <ListItemToggle
          label={t("Settings/PullRequests/HideDrafts")}
          value={hideDraftPRs}
          onToggle={(value) => {
            dispatch(setHideDraftPRs(value));
            client.trackEvent("hide_draft_prs_changed", {
              value: value.toString(),
            });
          }}
        />
        <Spacer mt={4} />
        <Heading size="x2s">{t("Settings/SectionHeading/App")}</Heading>
        <Spacer mt={1} />
        <ListItemToggle
          border
          label={t("Settings/Application/Notifications")}
          value={allowPushNotifications}
          disabled={notificationPermissions === NotificationPermission.DENIED}
          onToggle={async (value) => {
            if (value) {
              await NotificationsModule.requestPermissions();
            }
            dispatch(setAllowNotifications(value));
            client.trackEvent("allow_push_notifications_changed", {
              value: value.toString(),
            });
          }}
        />
        <ListItemPicker
          label={t("Settings/Application/Appearance")}
          border
          selectedValue={appearance}
          onValueChange={(value) => {
            dispatch(setAppearance(value as Appearance));
            client.trackEvent("appearance_changed", {
              value,
            });
          }}
          pickerItems={[
            { label: t("Settings/Appearance/Light"), value: Appearance.Light },
            { label: t("Settings/Appearance/Dark"), value: Appearance.Dark },
            // TODO: Implement system appearance
            // { label: t("Settings/Appearance/System"), value: Appearance.Auto },
          ]}
        />
        {!isLaunchAtLoginSupported && (
          <ListItemToggle
            label={t("Settings/Application/LaunchAtLogin")}
            value={launchAtLogin ?? false}
            onToggle={async (value) => {
              await AppModule.setLaunchAtLoginEnabled(value);
              setLaunchAtLogin(value);
              client.trackEvent("launch_at_login_changed", {
                value: value.toString(),
              });
            }}
          />
        )}

        {__DEV__ && (
          <>
            <Spacer mt={4} />
            <Heading size="x2s">Development section</Heading>
            <Spacer mt={1} />
            <Button
              analyticsLabel="Settings/Button/ResetHiddenPRs"
              size="xs"
              label="Reset hidden PRs"
              onPress={() => {
                dispatch(resetHiddenPullRequests());
              }}
            />
            <Spacer mt={1} />
            <Button
              analyticsLabel="Settings/Button/ResetOnboarding"
              size="xs"
              label="Reset onboarding"
              onPress={() => {
                dispatch(setIsOnboarded(false));
              }}
            />
            <Spacer mt={1} />
            <Button
              analyticsLabel="Settings/Button/SendNotification"
              size="xs"
              label="Send notification"
              onPress={() => {
                NotificationsModule.sendNotification("TEST", "TEST");
              }}
            />
          </>
        )}

        <Spacer mt={4} />
        <Button
          analyticsLabel="Settings/Button/CloseApp"
          size="xs"
          type="danger"
          label={t("Settings/Button/CloseApp")}
          onPress={() => {
            AppModule.closeApp();
            client.trackEvent("close_app");
          }}
        />
        <Spacer mt={4} />
        <View style={$.footer}>
          <Body size="xs" textAlign="center">
            {t("Settings/Link/MadeBy")}
          </Body>
          <Link
            label={t("Settings/Link/ThomasLamars")}
            onPress={() => Linking.openURL("https://lamars.io")}
            analyticsLabel="Settings/Link/ThomasLamars"
            arrow={false}
          />
          <Body size="xs" textAlign="center">
            -{" "}
            {t("Settings/Link/Version", {
              version: AppModule.APP_VERSION,
              buildNumber: AppModule.APP_BUILD_NUMBER,
            })}
          </Body>
        </View>
      </ScrollView>
    </DefaultLayout>
  );
};

export default Settings;
