import React from "react";
import { Image } from "react-native";

type Props = {
  size?: number;
  avatarUrl: string;
};

const Attendee: React.FC<Props> = ({ size = 80, avatarUrl }) => {
  const attendeeStyle = [
    {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  ];

  return (
    <Image
      accessibilityIgnoresInvertColors
      style={attendeeStyle}
      source={{ uri: avatarUrl }}
    />
  );
};

export default Attendee;
