import React from "react";
import { useStyles } from "react-native-unistyles";

import { ThemeColor } from "models/theme";

import iconImportMap from "./icon-imports";

export type IconName = keyof typeof iconImportMap;

type Props = {
  color?: ThemeColor;
  name: IconName;
  size?: number;
};

const Icon: React.FC<Props> = ({ color = "icon", name, size = 24 }) => {
  const {
    theme: { colors },
  } = useStyles();
  const IconComponent = iconImportMap[name];

  return <IconComponent color={colors[color]} width={size} height={size} />;
};

export default Icon;
