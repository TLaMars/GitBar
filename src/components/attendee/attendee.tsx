import React, { useCallback } from "react";
import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Text from "components/text/text";
import { Vote } from "models/attendee";
import getInitials from "utils/get-initials";

import styles from "./attendee.styles";

type Props = {
  name: string;
  size?: number;
  avatarUrl?: string;
  vote?: Vote;
};

const Attendee: React.FC<Props> = ({
  avatarUrl,
  name,
  size = 80,
  vote = Vote.NoVote,
}) => {
  const {
    styles: $,
    theme: { fontSizes, lineHeights },
  } = useStyles(styles);

  const getBorderColor = useCallback(() => {
    switch (vote) {
      case Vote.Approved:
        return $.borderApproved;
      case Vote.WaitingFor:
        return $.borderWaitingFor;
      case Vote.Rejected:
        return $.borderRejected;
      default:
        return $.borderTransparent;
    }
  }, [
    vote,
    $.borderApproved,
    $.borderRejected,
    $.borderTransparent,
    $.borderWaitingFor,
  ]);

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
        style={[attendeeStyle, $.border, getBorderColor()]}
        source={{ uri: avatarUrl }}
      />
    );
  }

  return (
    <View style={[attendeeStyle, $.attendee, $.border, getBorderColor()]}>
      <Text
        style={[
          $.initials,
          {
            fontSize: size <= 24 ? fontSizes.bodyX3S : fontSizes.bodyS,
            lineHeight: size <= 24 ? fontSizes.bodyX3S : lineHeights.bodyS,
            height: size <= 24 ? fontSizes.bodyX3S - 2 : lineHeights.bodyS,
          },
        ]}
      >
        {initials}
      </Text>
    </View>
  );
};

export default Attendee;
