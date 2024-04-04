import React from "react";
import { View } from "react-native";

import Attendee from "components/attendee/attendee";
import { Attendee as AttendeeType } from "models/attendee";

import useStyles from "./attendee-list.styles";

type Props = {
  attendees: AttendeeType[];
  profileIconSize?: number;
};

const AttendeeList: React.FC<Props> = ({ attendees, profileIconSize = 20 }) => {
  const $ = useStyles(profileIconSize);
  return (
    <View style={$.stack}>
      {attendees.slice(0, 3).map(({ avatarUrl, name }, index) => (
        <View style={[index > 0 && $.container]} key={name}>
          {index > 0 && <View style={$.seperator} />}
          <View style={[index > 0 && $.icon]}>
            <Attendee
              name={name}
              avatarUrl={avatarUrl}
              size={profileIconSize}
            />
          </View>
        </View>
      ))}
    </View>
  );
};

export default AttendeeList;
