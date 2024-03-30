import React from "react";
import { Image } from "react-native";

type Props = {
  size?: number;
  imageUrl: string;
};

const Avatar: React.FC<Props> = ({ size = 80, imageUrl }) => {
  const avatarStyle = [
    {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  ];

  return (
    <Image
      accessibilityIgnoresInvertColors
      style={avatarStyle}
      source={{ uri: imageUrl }}
    />
  );
};

export default Avatar;
