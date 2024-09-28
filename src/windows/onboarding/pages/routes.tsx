import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { OnboardingStackParamList } from "models/onboarding-stack-param-list";

import Intro from "./intro/intro";

const OnboardingStackNavigator =
  createStackNavigator<OnboardingStackParamList>();

const OnboardingStack: React.FC = () => (
  <OnboardingStackNavigator.Navigator
    initialRouteName="Intro"
    screenOptions={{
      headerShown: false,
    }}
  >
    <OnboardingStackNavigator.Screen name="Intro" component={Intro} />
  </OnboardingStackNavigator.Navigator>
);

export default OnboardingStack;
