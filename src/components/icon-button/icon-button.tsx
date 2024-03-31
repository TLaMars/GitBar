import React from "react";
import { Pressable } from "react-native";

import Icon, { IconName } from "components/icon/icon";

import useStyles from "./icon-button.styles";

type Props = {
  icon: IconName;
  onPress: () => void;
  type: "neutral" | "danger";
  spacing?: number;
  size?: number;
};

const IconButton: React.FC<Props> = ({
  icon,
  onPress,
  type,
  size = 20,
  spacing = 8,
}) => {
  const $ = useStyles();

  return (
    <Pressable
      style={[
        $.button,
        type === "danger" && $.danger,
        {
          padding: (spacing / 20) * size,
        },
      ]}
      onPress={onPress}
      accessibilityRole="button"
    >
      <Icon name={icon} size={size} />
    </Pressable>
  );
};

export default IconButton;
