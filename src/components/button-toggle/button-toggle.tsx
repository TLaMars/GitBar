import { useGuavaClient } from "@guava-analytics/react-native";
import React from "react";
import { Pressable, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";

import styles from "./button-toggle.styles";

export type ButtonToggleOption = {
  label: string;
  onPress: () => void;
  count?: number;
};

type Props = {
  selectedIndex?: number;
  buttons: ButtonToggleOption[];
};

const ButtonToggle: React.FC<Props> = ({ selectedIndex = 0, buttons }) => {
  const client = useGuavaClient();
  const { styles: $ } = useStyles(styles);
  const [activeIndex, setActiveIndex] = React.useState(selectedIndex);

  return (
    <View style={$.container}>
      {buttons.map((button, index) => (
        <Pressable
          key={`${button.label}`}
          accessibilityRole="button"
          style={[$.button, activeIndex === index && $.activeButton]}
          onPress={() => {
            setActiveIndex(index);
            button.onPress();
            client.trackEvent("button_toggle_clicked", {
              button_index: index.toString(),
              button_title: button.label,
            });
          }}
        >
          <View style={$.labelRow}>
            <Body textAlign="center" size="xs" numberOfLines={1}>
              {button.label}
            </Body>
            {button.count !== undefined && button.count > 0 && (
              <View style={$.countChip}>
                <Body size="x2s" color="accentLightBlue">
                  {button.count}
                </Body>
              </View>
            )}
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default ButtonToggle;
