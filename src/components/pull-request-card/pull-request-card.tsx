import React from "react";
import { Linking, Pressable, View } from "react-native";

import Attendee from "components/attendee/attendee";
import AttendeeList from "components/attendee-list/attendee-list";
import Body from "components/body/body";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import { Attendee as AttendeeType } from "models/attendee";

import useStyles from "./pull-request-card.styles";

type Props = {
  title: string;
  author: AttendeeType;
  repoName: string;
  reviewers: AttendeeType[];
  createdAt: string;
  url: string;
};

const PullRequestCard: React.FC<Props> = ({
  title,
  author,
  repoName,
  reviewers,
  createdAt,
  url,
}) => {
  const $ = useStyles();
  const { t } = useTranslation();

  const onPress = async () => {
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    }
  };

  return (
    <Pressable accessibilityRole="button" style={$.card} onPress={onPress}>
      <View style={$.left}>
        <Heading size="xs" fontSizeIsLineHeight>
          {title}
        </Heading>
        <View style={$.footer}>
          <Body size="s">{t("PullRequestCard/Body/Author")}</Body>
          <Spacer ml={1.5} />
          <Attendee size={24} avatarUrl={author.avatarUrl} />
          <Spacer ml={3} />
          {reviewers.length > 0 && (
            <>
              <Body size="s">{t("PullRequestCard/Body/Assignees")}</Body>
              <Spacer ml={1.5} />
              <AttendeeList attendees={reviewers} profileIconSize={24} />
            </>
          )}
        </View>
      </View>
      <View style={$.right} />
    </Pressable>
  );
};

export default PullRequestCard;
