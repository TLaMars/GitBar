import { useNavigation, useRoute } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

import Sidebar from "components/sidebar/sidebar";
import SidebarItem from "components/sidebar-item/sidebar-item";
import AppModule from "modules/app-module";

import useStyles from "./default-layout.styles";

type Props = {
  sideBarHidden?: boolean;
} & PropsWithChildren;

const DefaultLayout: React.FC<Props> = ({
  children,
  sideBarHidden = false,
}) => {
  const $ = useStyles();
  const { navigate } = useNavigation();
  const route = useRoute();

  return (
    <View style={$.container}>
      {!sideBarHidden && (
        <Sidebar
          marginVertical={2.5}
          topContainer={
            <SidebarItem
              icon="PullRequest"
              onPress={() => navigate("Dashboard")}
              active={route.name === "Dashboard"}
            />
          }
          bottomContainer={
            <>
              <SidebarItem
                icon="Settings"
                onPress={() => navigate("Settings")}
                active={route.name === "Settings"}
              />
              <SidebarItem
                icon="PowerOff"
                onPress={() => {
                  AppModule.closeApp();
                }}
              />
            </>
          }
        />
      )}
      {children}
    </View>
  );
};

export default DefaultLayout;
