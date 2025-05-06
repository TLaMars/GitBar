import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";

import styles from "./list-item.styles";

export type ListItmeProps = {
  label: string;
  border?: boolean;
};

const ListItem: React.FC<ListItmeProps & PropsWithChildren> = ({
  label,
  border,
  children,
}) => {
  const { styles: $ } = useStyles(styles);

  return (
    <View style={[$.container, border && $.border]}>
      <Body size="s">{label}</Body>
      {children}
    </View>
  );
};

export default ListItem;
