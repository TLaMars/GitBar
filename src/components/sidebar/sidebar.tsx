import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";

import SidebarItem from "components/sidebar-item/sidebar-item";

import useStyles from "./sidebar.styles";

const Sidebar: React.FC = () => {
  const $ = useStyles();
  const { navigate } = useNavigation();
  const route = useRoute();

  return (
    <View style={$.container}>
      <View style={$.section}>
        <SidebarItem
          icon="PullRequest"
          onPress={() => navigate("Dashboard")}
          active={route.name === "Dashboard"}
        />
      </View>
      <View style={$.section}>
        <SidebarItem
          icon="Settings"
          onPress={() => navigate("Settings")}
          active={route.name === "Settings"}
        />
        <SidebarItem icon="PowerOff" onPress={() => {}} />
      </View>
    </View>
  );
};

export default Sidebar;
