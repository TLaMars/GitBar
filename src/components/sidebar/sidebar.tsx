import React from "react";
import { View } from "react-native";

import SidebarItem from "components/sidebar-item/sidebar-item";

import useStyles from "./sidebar.styles";

const Sidebar: React.FC = () => {
  const $ = useStyles();

  return (
    <View style={$.container}>
      <View style={$.section}>
        <SidebarItem icon="PullRequest" label="PullRequests" active />
      </View>
      <View style={$.section}>
        <SidebarItem icon="Settings" label="Settings" />
        <SidebarItem icon="PowerOff" label="Quit" />
      </View>
    </View>
  );
};

export default Sidebar;
