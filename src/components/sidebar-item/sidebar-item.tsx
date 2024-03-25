import React from "react";
import { Pressable } from "react-native";

import Icon, { IconName } from "components/icon/icon";

import useStyles from "./sidebar-item.styles";

type Props = {
  active?: boolean;
  icon: IconName;
  label: string;
};

const SidebarItem: React.FC<Props> = ({ active = false, icon, label }) => {
  const $ = useStyles();

  return (
    <Pressable
      style={[$.button, active && $.active]}
      accessibilityRole="button"
    >
      <Icon name={icon} size={20} />
    </Pressable>
  );
};

export default SidebarItem;
