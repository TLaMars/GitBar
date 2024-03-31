import React from "react";
import { ScrollView, View } from "react-native";

import AccountCard from "components/account-card/account-card";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import useDispatch from "hooks/use-dispatch";
import useSelector from "hooks/use-selector";
import { selectAccounts } from "src/core/store/selectors/accounts";
import { removeOneAccount } from "src/core/store/slices/accounts";
import DefaultLayout from "src/layouts/default-layout/default-layout";

const Settings: React.FC = () => {
  const dispatch = useDispatch();
  const accounts = useSelector(selectAccounts);

  const deleteAccount = (accountId: string) => {
    dispatch(removeOneAccount(accountId));
  };

  return (
    <DefaultLayout>
      <ScrollView>
        <Heading size="s">Settings</Heading>
        <Spacer mt={2} />
        <Heading size="x2s">Accounts</Heading>
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
            />
          </View>
        ))}
      </ScrollView>
    </DefaultLayout>
  );
};

export default Settings;
