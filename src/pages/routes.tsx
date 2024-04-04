import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import useSelector from "hooks/use-selector";
import RegisterAzure from "pages/auth/register/azure";
import RegisterGithub from "pages/auth/register/github";
import RegisterGitLab from "pages/auth/register/gitlab";
import Dashboard from "pages/dashboard/dashboard";
import OnboardingAddAccount from "pages/onboarding/add-account/add-account";
import OnboardingWelcome from "pages/onboarding/welcome/welcome";
import Settings from "pages/settings/settings";
import { selectAccounts } from "store/selectors/accounts";

const RootStackNavigator = createStackNavigator();

const RootStack: React.FC = () => {
  const accounts = useSelector(selectAccounts);

  return (
    <RootStackNavigator.Navigator
      initialRouteName={accounts.length > 0 ? "Dashboard" : "OnboardingWelcome"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStackNavigator.Screen name="Dashboard" component={Dashboard} />
      <RootStackNavigator.Screen
        name="RegisterAzure"
        component={RegisterAzure}
      />
      <RootStackNavigator.Screen
        name="RegisterGitLab"
        component={RegisterGitLab}
      />
      <RootStackNavigator.Screen
        name="RegisterGitHub"
        component={RegisterGithub}
      />
      <RootStackNavigator.Screen
        name="OnboardingWelcome"
        component={OnboardingWelcome}
      />
      <RootStackNavigator.Screen
        name="OnboardingAddAccount"
        component={OnboardingAddAccount}
      />
      <RootStackNavigator.Screen name="Settings" component={Settings} />
    </RootStackNavigator.Navigator>
  );
};

export default RootStack;
