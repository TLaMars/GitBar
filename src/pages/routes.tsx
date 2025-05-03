import { useGuavaClient } from "@guava/react-native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect } from "react";

import useDispatch from "hooks/use-dispatch";
import usePopoverState, { PopoverState } from "hooks/use-popover-state";
import useSelector from "hooks/use-selector";
import { RootStackParamList } from "models/root-stack-param-list";
import PopoverModule from "modules/popover-module";
import AddAccount from "pages/add-account/add-account";
import RegisterAzure from "pages/auth/register/azure";
import RegisterGithub from "pages/auth/register/github";
import RegisterGitLab from "pages/auth/register/gitlab";
import Dashboard from "pages/dashboard/dashboard";
import Notifications from "pages/notifications/notifications";
import Settings from "pages/settings/settings";
import WindowNavigator from "src/windows";
import { selectAccounts } from "store/selectors/accounts";
import { selectIsOnboarded } from "store/selectors/user";
import { setIsOnboarded } from "store/slices/user";

const RootStackNavigator = createStackNavigator<RootStackParamList>();

let IS_STARTED_UP = false;

const RootStack: React.FC = () => {
  const accounts = useSelector(selectAccounts);
  const isOnboarded = useSelector(selectIsOnboarded);
  const client = useGuavaClient();
  const dispatch = useDispatch();
  const popoverState = usePopoverState();

  // TODO: Check if this view can be automatically tracked by Guava
  // Currently, the view is not tracked after the first time opening the popover
  useEffect(() => {
    client.trackEvent(
      popoverState === PopoverState.CLOSED
        ? "popover_closed"
        : "popover_opened",
    );
    if (IS_STARTED_UP && popoverState === PopoverState.OPEN) {
      client.trackEvent("$view");
    }
    if (!IS_STARTED_UP) {
      IS_STARTED_UP = true;
    }
  }, [client, popoverState]);

  useEffect(() => {
    if (!isOnboarded) {
      void WindowNavigator.open("Onboarding");
      WindowNavigator.setCloseCallback("Onboarding", () => {
        dispatch(setIsOnboarded(true));
      });
      return;
    }

    PopoverModule.open();
  }, [isOnboarded, dispatch]);

  return (
    <RootStackNavigator.Navigator
      initialRouteName={accounts.length > 0 ? "Dashboard" : "AddAccount"}
      screenOptions={{
        headerShown: false,
      }}
    >
      <RootStackNavigator.Screen name="Dashboard" component={Dashboard} />
      <RootStackNavigator.Screen
        name="Notifications"
        component={Notifications}
      />
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
      <RootStackNavigator.Screen name="AddAccount" component={AddAccount} />
      <RootStackNavigator.Screen name="Settings" component={Settings} />
    </RootStackNavigator.Navigator>
  );
};

export default RootStack;
