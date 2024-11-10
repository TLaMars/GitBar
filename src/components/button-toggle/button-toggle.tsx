import React from "react";
import { Pressable, View } from "react-native";

import Body from "components/body/body";

import useStyles from "./button-toggle.styles";

type Button = {
  label: string;
  onPress: () => void;
};

type Props = {
  buttons: Button[];
};

const ButtonToggle: React.FC<Props> = ({ buttons }) => {
  const $ = useStyles();
  const [activeButtonIndex, setActiveButtonIndex] = React.useState(0);

  return (
    <View style={$.container}>
      {buttons.map((button, index) => (
        <Pressable
          key={`${button.label}`}
          accessibilityRole="button"
          style={[$.button, activeButtonIndex === index && $.activeButton]}
          onPress={() => {
            setActiveButtonIndex(index);
            button.onPress();
          }}
        >
          <Body textAlign="center" size="xs">
            {button.label}
          </Body>
        </Pressable>
      ))}
    </View>
  );
};

export default ButtonToggle;
