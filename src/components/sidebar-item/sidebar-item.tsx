import React from "react";
import { Pressable } from "react-native";

import Icon, { IconName } from "components/icon/icon";

import useStyles from "./sidebar-item.styles";

type Props = {
  active?: boolean;
  icon: IconName;
  onPress: () => void;
};

const SidebarItem: React.FC<Props> = ({ active = false, icon, onPress }) => {
  const $ = useStyles();
  const [hovered, setHovered] = React.useState(false);

  return (
    <Pressable
      style={[$.button, active && $.active, hovered && $.hover]}
      onPress={onPress}
      accessibilityRole="button"
      onHoverIn={() => setHovered(true)}
      onHoverOut={() => setHovered(false)}
    >
      <Icon name={icon} size={20} />
    </Pressable>
  );
};

export default SidebarItem;
