import React, { ReactNode } from "react";
import { View } from "react-native";

import useStyles from "./sidebar.styles";

type Props = {
  topContainer?: ReactNode;
  bottomContainer?: ReactNode;
};

const Sidebar: React.FC<Props> = ({ topContainer, bottomContainer }) => {
  const $ = useStyles();

  return (
    <View style={$.container}>
      <View style={$.section}>{topContainer}</View>
      <View style={$.section}>{bottomContainer}</View>
    </View>
  );
};

export default Sidebar;
