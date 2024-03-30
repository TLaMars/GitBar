import React from "react";
import { Linking, Pressable } from "react-native";

import Avatar from "components/avatar/avatar";
import Body from "components/body/body";
import Heading from "components/heading/heading";
import GITHUB_OAUTH_AUTHORIZE from "constants/github-oauth";
import useSelector from "hooks/use-selector";
import { selectAccounts } from "src/core/store/selectors/accounts";
import DefaultLayout from "src/layouts/default-layout/default-layout";

const Dashboard: React.FC = () => {
  const accounts = useSelector(selectAccounts);

  return (
    <DefaultLayout>
      <Heading size="s">Pull Requests</Heading>
      <Pressable
        accessibilityRole="button"
        onPress={() => Linking.openURL(GITHUB_OAUTH_AUTHORIZE)}
      >
        <Body>Add Github</Body>
      </Pressable>
      {accounts.map((account) => (
        <Avatar
          key={account.accountId}
          imageUrl={account.avatarUrl}
          size={100}
        />
      ))}
    </DefaultLayout>
  );
};

export default Dashboard;
