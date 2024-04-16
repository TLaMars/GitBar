import React from "react";
import { Pressable, View } from "react-native";

import Body from "components/body/body";

import useStyles from "./button-toggle.styles";

type Props = {
  labelLeft: string;
  labelRight: string;
  onPressLeft: () => void;
  onPressRight: () => void;
};

const ButtonToggle: React.FC<Props> = ({
  labelLeft,
  labelRight,
  onPressLeft,
  onPressRight,
}) => {
  const $ = useStyles();
  const [buttonOneActive, setButtonOneActive] = React.useState(true);

  return (
    <View style={$.container}>
      <Pressable
        accessibilityRole="button"
        style={[$.button, buttonOneActive && $.activeButton]}
        onPress={() => {
          setButtonOneActive(true);
          onPressLeft();
        }}
      >
        <Body textAlign="center" size="xs">
          {labelLeft}
        </Body>
      </Pressable>
      <Pressable
        accessibilityRole="button"
        style={[$.button, !buttonOneActive && $.activeButton]}
        onPress={() => {
          setButtonOneActive(false);
          onPressRight();
        }}
      >
        <Body textAlign="center" size="xs">
          {labelRight}
        </Body>
      </Pressable>
    </View>
  );
};

export default ButtonToggle;
