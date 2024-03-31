import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import useSelector from "hooks/use-selector";
import { selectAccounts } from "src/core/store/selectors/accounts";

import RegisterGithub from "./auth/register/github";
import Dashboard from "./dashboard/dashboard";
import OnboardingAddAccount from "./onboarding/add-account/add-account";
import OnboardingWelcome from "./onboarding/welcome";
import Settings from "./settings/settings";

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
