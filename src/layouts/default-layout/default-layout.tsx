import { useNavigation, useRoute } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Sidebar from "components/sidebar/sidebar";
import SidebarItem from "components/sidebar-item/sidebar-item";

import styles from "./default-layout.styles";

type Props = {
  sideBarHidden?: boolean;
} & PropsWithChildren;

const DefaultLayout: React.FC<Props> = ({
  children,
  sideBarHidden = false,
}) => {
  const { styles: $ } = useStyles(styles);
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
            <SidebarItem
              icon="Settings"
              onPress={() => navigate("Settings")}
              active={route.name === "Settings"}
            />
          }
        />
      )}
      {children}
    </View>
  );
};

export default DefaultLayout;
