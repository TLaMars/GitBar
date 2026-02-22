import {
  StackActions,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Sidebar from "components/sidebar/sidebar";
import SidebarItem from "components/sidebar-item/sidebar-item";
import useSelector from "hooks/use-selector";
import { selectShowIssues } from "store/selectors/settings";

import styles from "./default-layout.styles";

type Props = {
  sideBarHidden?: boolean;
} & PropsWithChildren;

const DefaultLayout: React.FC<Props> = ({
  children,
  sideBarHidden = false,
}) => {
  const { styles: $ } = useStyles(styles);
  const navigation = useNavigation();
  const route = useRoute();
  const showIssues = useSelector(selectShowIssues);

  return (
    <View style={$.container}>
      {!sideBarHidden && (
        <Sidebar
          marginVertical={2.5}
          topContainer={
            <>
              <SidebarItem
                icon="PullRequest"
                onPress={() =>
                  navigation.dispatch(StackActions.popTo("Dashboard"))
                }
                active={route.name === "Dashboard"}
              />
              {showIssues && (
                <SidebarItem
                  icon="IssueCircle"
                  onPress={() => navigation.navigate("Issues")}
                  active={route.name === "Issues"}
                />
              )}
            </>
          }
          bottomContainer={
            <SidebarItem
              icon="Settings"
              onPress={() => navigation.navigate("Settings")}
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
