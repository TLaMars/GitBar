import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import { ThemeSpacingScale } from "constants/theme";

import styles from "./sidebar.styles";

type Props = {
  marginVertical?: ThemeSpacingScale;
} & PropsWithChildren;

const Sidebar: React.FC<Props> = ({
  children,
  marginVertical: marginVerticalFromProps,
}) => {
  const {
    styles: $,
    theme: { spacing },
  } = useStyles(styles);
  const marginVertical = spacing(marginVerticalFromProps ?? 0);

  return <View style={[$.container, { marginVertical }]}>{children}</View>;
};

export default Sidebar;
