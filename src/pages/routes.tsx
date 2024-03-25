import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import Dashboard from "./dashboard/dashboard";

const RootStackNavigator = createStackNavigator();

const RootStack: React.FC = () => (
  <RootStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStackNavigator.Screen name="Dashboard" component={Dashboard} />
  </RootStackNavigator.Navigator>
);

export default RootStack;
