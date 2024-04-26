import React from "react";
import { View } from "react-native";
import { Switch } from "react-native-macos";

import Body from "components/body/body";

import useStyles from "./list-item.styles";

type Props = {
  label: string;
  onToggle: (value: boolean) => void;
  value: boolean;
  border?: boolean;
  disabled?: boolean;
};

const ListItem: React.FC<Props> = ({
  label,
  onToggle,
  value,
  border,
  disabled,
}) => {
  const $ = useStyles();

  return (
    <View style={[$.container, border && $.border]}>
      <Body size="s">{label}</Body>
      <Switch disabled={disabled} onValueChange={onToggle} value={value} />
    </View>
  );
};

export default ListItem;
