import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import RegisterGithub from "./auth/register/github";
import Dashboard from "./dashboard/dashboard";
import Settings from "./settings/settings";

const RootStackNavigator = createStackNavigator();

const RootStack: React.FC = () => (
  <RootStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStackNavigator.Screen name="Dashboard" component={Dashboard} />
    <RootStackNavigator.Screen
      name="RegisterGitHub"
      component={RegisterGithub}
    />
    <RootStackNavigator.Screen name="Settings" component={Settings} />
  </RootStackNavigator.Navigator>
);

export default RootStack;
