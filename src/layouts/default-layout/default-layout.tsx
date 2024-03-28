import { useNavigation, useRoute } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

import Sidebar from "components/sidebar/sidebar";
import SidebarItem from "components/sidebar-item/sidebar-item";

import useStyles from "./default-layout.styles";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const $ = useStyles();
  const { navigate } = useNavigation();
  const route = useRoute();

  return (
    <View style={$.container}>
      <Sidebar
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
            <SidebarItem icon="PowerOff" onPress={() => {}} />
          </>
        }
      />
      {children}
    </View>
  );
};

export default DefaultLayout;
