import { useNavigation, useRoute } from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";

import BlobBackground from "components/blob-background/blob-background";
import Sidebar from "components/sidebar/sidebar";
import SidebarItem from "components/sidebar-item/sidebar-item";

import useStyles from "./default-layout.styles";

type Props = {
  sideBarHidden?: boolean;
  blobBackground?: boolean;
} & PropsWithChildren;

const DefaultLayout: React.FC<Props> = ({
  children,
  sideBarHidden = false,
  blobBackground = false,
}) => {
  const $ = useStyles();
  const { navigate } = useNavigation();
  const route = useRoute();

  const Background = blobBackground ? BlobBackground : View;

  return (
    <Background style={$.container}>
      {!sideBarHidden && (
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
      )}
      {children}
    </Background>
  );
};

export default DefaultLayout;
