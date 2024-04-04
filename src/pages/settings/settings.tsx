import { useNavigation } from "@react-navigation/native";
import React from "react";
import { ScrollView, View } from "react-native";

import AccountCard from "components/account-card/account-card";
import Heading from "components/heading/heading";
import Link from "components/link/link";
import Spacer from "components/spacer/spacer";
import useDispatch from "hooks/use-dispatch";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import { AccountType } from "models/account";
import { selectAccounts } from "store/selectors/accounts";
import { removeOneAccount } from "store/slices/accounts";

import useStyles from "./settings.styles";

const Settings: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const accounts = useSelector(selectAccounts);
  const { navigate } = useNavigation();

  const deleteAccount = (accountId: string) => {
    dispatch(removeOneAccount(accountId));
    if (accounts.length === 1) {
      navigate("OnboardingWelcome");
    }
  };

  return (
    <DefaultLayout>
      <ScrollView>
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
        {accounts.map((account, index) => (
          <View key={account.accountId}>
            <AccountCard
              type={account.type}
              userName={account.userName}
              avatarUrl={account.avatarUrl}
              name={account.name}
              border={index !== accounts.length - 1}
              onDeletePress={() => deleteAccount(account.accountId)}
              aditionalInfo={
                account.type === AccountType.Azure
                  ? account.organization
                  : undefined
              }
            />
          </View>
        ))}
      </ScrollView>
    </DefaultLayout>
  );
};

export default Settings;
