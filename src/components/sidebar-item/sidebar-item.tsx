import React from "react";
import { TouchableOpacity } from "react-native";
import { useStyles } from "react-native-unistyles";

import Icon, { IconName } from "components/icon/icon";

import styles from "./sidebar-item.styles";

type Props = {
  active?: boolean;
  icon: IconName;
  onPress: () => void;
};

const SidebarItem: React.FC<Props> = ({ active = false, icon, onPress }) => {
  const { styles: $ } = useStyles(styles);

  return (
    <TouchableOpacity
      hitSlop={10}
      style={[$.button, active && $.active]}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Icon name={icon} size={20} />
    </TouchableOpacity>
  );
};

export default SidebarItem;
