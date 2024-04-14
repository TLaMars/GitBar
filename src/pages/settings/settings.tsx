import { useNavigation } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import { ScrollView, View } from "react-native";

import AccountCard from "components/account-card/account-card";
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
import {
  selectGroupPRsBy,
  selectHidePRsAfterTwoMonths,
} from "store/selectors/settings";
import { removeOneAccount } from "store/slices/accounts";
import { setGroupPRsBy, setHidePRsAfterTwoMonths } from "store/slices/settings";

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

  useEffect(() => {
    void fetchProfiles();
  }, [fetchProfiles]);

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
          label="Group PR's per project"
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
          label="Group PR's per date"
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
        <ListItem
          label="Hide PR's after 2 months"
          value={hidePRsAfterTwoMonths}
          onToggle={(value) => dispatch(setHidePRsAfterTwoMonths(value))}
        />
      </ScrollView>
    </DefaultLayout>
  );
};

export default Settings;
