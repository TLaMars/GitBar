import React, { PropsWithChildren } from "react";
import { View } from "react-native";

import Sidebar from "components/sidebar/sidebar";

import useStyles from "./default-layout.styles";

const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  const $ = useStyles();

  return (
    <View style={$.container}>
      <Sidebar />
      {children}
    </View>
  );
};

export default DefaultLayout;
