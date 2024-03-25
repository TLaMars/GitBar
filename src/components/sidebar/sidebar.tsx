import React from "react";
import { View } from "react-native";

import Heading from "components/heading/heading";

import useStyles from "./sidebar.styles";

const Sidebar: React.FC = () => {
  const $ = useStyles();

  return (
    <View style={$.container}>
      <Heading size="x2s">Menu</Heading>
    </View>
  );
};

export default Sidebar;
