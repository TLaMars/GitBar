import React from "react";
import { Switch } from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import ListItem, { ListItmeProps } from "./list-item";
import styles from "./list-item.styles";

type Props = {
  onToggle: (value: boolean) => void;
  value: boolean;
  disabled?: boolean;
} & ListItmeProps;

const ListItemToggle: React.FC<Props> = ({
  label,
  onToggle,
  value,
  border,
  disabled,
}) => {
  const { styles: $ } = useStyles(styles);

  return (
    <ListItem label={label} border={border}>
      <Switch
        style={$.toggle}
        disabled={disabled}
        onValueChange={onToggle}
        value={value}
      />
    </ListItem>
  );
};

export default ListItemToggle;
