import React from "react";
import { Image, View } from "react-native";

import Text from "components/text/text";
import getInitials from "utils/get-initials";

import useStyles from "./attendee.styles";

type Props = {
  name: string;
  size?: number;
  avatarUrl?: string;
};

const Attendee: React.FC<Props> = ({ avatarUrl, name, size = 80 }) => {
  const $ = useStyles();

  const initials = getInitials(name);
  const attendeeStyle = [
    {
      width: size,
      height: size,
      borderRadius: size / 2,
    },
  ];

  if (avatarUrl) {
    return (
      <Image
        accessibilityIgnoresInvertColors
        style={attendeeStyle}
        source={{ uri: avatarUrl }}
      />
    );
  }

  return (
    <View style={[attendeeStyle, $.attendee]}>
      <Text
        style={[
          $.initials,
          {
            fontSize: size / 3 > 24 ? 24 : size / 3,
            lineHeight: (size / 3) * 1.3,
          },
        ]}
      >
        {initials}
      </Text>
    </View>
  );
};

export default Attendee;
