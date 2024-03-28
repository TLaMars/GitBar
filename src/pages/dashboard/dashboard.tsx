import React from "react";
import { Linking, Pressable } from "react-native";

import Body from "components/body/body";
import Heading from "components/heading/heading";
import githubAuthEndpoints from "constants/github-auth-endpoints";
import DefaultLayout from "src/layouts/default-layout/default-layout";

const Dashboard: React.FC = () => (
  <DefaultLayout>
    <Heading size="s">Pull Requests</Heading>
    <Pressable
      accessibilityRole="button"
      onPress={() => Linking.openURL(githubAuthEndpoints.authorize)}
    >
      <Body>Add Github</Body>
    </Pressable>
  </DefaultLayout>
);

export default Dashboard;
