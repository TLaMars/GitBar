import { useGuavaClient } from "@guava-analytics/react-native";
import React from "react";
import { Pressable } from "react-native";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import Icon from "components/icon/icon";

import styles from "./link.styles";

type Props = {
  onPress: () => void;
  label: string;
  analyticsLabel: string;
  arrow?: boolean;
};

const Link: React.FC<Props> = ({
  label,
  onPress,
  analyticsLabel,
  arrow = true,
}) => {
  const { styles: $ } = useStyles(styles);
  const client = useGuavaClient();

  const handlePress = () => {
    client.trackEvent("link_clicked", {
      label: analyticsLabel,
    });
    onPress();
  };

  return (
    <Pressable accessibilityRole="button" style={$.link} onPress={handlePress}>
      <Body bold size="xs" color="textLink">
        {label}
      </Body>
      {arrow && <Icon name="ChevronRight" color="textLink" size={22} />}
    </Pressable>
  );
};

export default Link;
