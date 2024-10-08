import React, { memo, useState } from "react";
import { GestureResponderEvent, Linking, TouchableOpacity } from "react-native";
import {
  ActionSheetIOS,
  ActionSheetIOSOptions,
  View,
} from "react-native-macos";

import Attendee from "components/attendee/attendee";
import AttendeeList from "components/attendee-list/attendee-list";
import Body from "components/body/body";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import { Attendee as AttendeeType } from "models/attendee";
import { ThemeColor } from "models/theme";

import useStyles from "./pull-request-card.styles";

type Props = {
  id: string;
  title: string;
  author: AttendeeType;
  reviewers: AttendeeType[];
  repoName: string;
  url: string;
  amountOfComments?: number;
  amountOfApprovals: number;
  amountOfRequiredApprovals?: number;
  actionSheetOptions?: ActionSheetIOSOptions;
  actionSheetCallback?: (
    buttonIndex: number,
    id: string,
    repoName: string,
  ) => void;
  accentColor: ThemeColor;
};

const PullRequestCard: React.FC<Props> = ({
  title,
  author,
  reviewers,
  url,
  amountOfComments,
  amountOfApprovals,
  amountOfRequiredApprovals,
  actionSheetOptions,
  actionSheetCallback,
  accentColor,
  id,
  repoName,
}) => {
  const $ = useStyles(accentColor);
  const { t } = useTranslation();
  const [toolTip, setToolTip] = useState(false);

  const onPress = async (event: GestureResponderEvent) => {
    if ("button" in event.nativeEvent && event.nativeEvent.button === 2) {
      if (actionSheetOptions && actionSheetCallback) {
        ActionSheetIOS.showActionSheetWithOptions(
          actionSheetOptions,
          (buttonIndex) => {
            actionSheetCallback(buttonIndex, id, repoName);
          },
        );
      }
      return;
    }
    if (await Linking.canOpenURL(url)) {
      await Linking.openURL(url);
    }
  };

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={$.card}
      onPress={onPress}
    >
      <Heading numberOfLines={1} size="x2s" fontSizeIsLineHeight>
        {title}
      </Heading>
      <View style={$.footer}>
        <View style={$.left}>
          <Body size="s">{t("PullRequestCard/Body/Author")}</Body>
          <Spacer ml={1.5} />
          <Attendee name={author.name} size={24} avatarUrl={author.avatarUrl} />
          <Spacer ml={3} />
          {reviewers.length > 0 && (
            <>
              <Body size="s">{t("PullRequestCard/Body/Reviewers")}</Body>
              <Spacer ml={1.5} />
              <AttendeeList attendees={reviewers} profileIconSize={24} />
            </>
          )}
        </View>
        <View style={$.right}>
          {amountOfComments !== undefined && (
            <View style={$.info}>
              <Body size="s">{amountOfComments}</Body>
              <Icon name="Notification" size={20} />
            </View>
          )}

          <View
            style={$.info}
            onMouseEnter={() => {
              if (amountOfRequiredApprovals === undefined) {
                setToolTip(true);
              }
            }}
            onMouseLeave={() => {
              if (amountOfRequiredApprovals === undefined) {
                setToolTip(false);
              }
            }}
          >
            <Body size="s">
              {amountOfApprovals} / {amountOfRequiredApprovals ?? "?"}
            </Body>
            <Icon name="UserCheck" size={20} />
          </View>
        </View>
      </View>
      {toolTip && (
        <View style={$.helper}>
          <Body size="x2s">{t("PullRequestCard/Body/ApprovalsTooltip")}</Body>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default memo(PullRequestCard);
