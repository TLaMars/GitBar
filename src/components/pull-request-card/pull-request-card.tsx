import { useGuavaClient } from "@guava-analytics/react-native";
import React, { memo } from "react";
import { GestureResponderEvent, Linking, TouchableOpacity } from "react-native";
import {
  ActionSheetIOS,
  ActionSheetIOSOptions,
  View,
} from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import Attendee from "components/attendee/attendee";
import AttendeeList from "components/attendee-list/attendee-list";
import Body from "components/body/body";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import { Attendee as AttendeeType } from "models/attendee";
import { CIStatus, MergeableState } from "models/pull-request";
import { ThemeColor } from "models/theme";
import formatRelativeTime from "utils/format-relative-time";

import styles from "./pull-request-card.styles";

const CI_DOT_COLOR: Record<CIStatus, ThemeColor> = {
  [CIStatus.Success]: "accentGreen",
  [CIStatus.Failure]: "accentRed",
  [CIStatus.Running]: "accentBlue",
  [CIStatus.Pending]: "accentBlue",
  [CIStatus.None]: "textSecondary",
};

type Props = {
  id: string;
  title: string;
  author: AttendeeType;
  reviewers: AttendeeType[];
  repoName: string;
  url: string;
  amountOfComments?: number;
  actionSheetOptions?: ActionSheetIOSOptions;
  actionSheetCallback?: (
    buttonIndex: number,
    id: string,
    repoName: string,
  ) => void;
  accentColor: ThemeColor;
  isDraft: boolean;
  updatedAt: string;
  mergeableState: MergeableState;
  ciStatus?: CIStatus;
};

const PullRequestCard: React.FC<Props> = ({
  title,
  author,
  reviewers,
  url,
  amountOfComments,
  actionSheetOptions,
  actionSheetCallback,
  accentColor,
  id,
  repoName,
  isDraft,
  updatedAt,
  mergeableState,
  ciStatus,
}) => {
  const client = useGuavaClient();
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();

  const onPress = async (event: GestureResponderEvent) => {
    if ("button" in event.nativeEvent && event.nativeEvent.button === 2) {
      if (actionSheetOptions && actionSheetCallback) {
        ActionSheetIOS.showActionSheetWithOptions(
          actionSheetOptions,
          (buttonIndex) => {
            client.trackEvent("pull_request_card_right_clicked", {
              button_index: buttonIndex.toString(),
              button_title: actionSheetOptions.options[buttonIndex],
              id,
              accent_color: accentColor,
              amount_of_comments: amountOfComments?.toString() ?? "0",
              is_draft: isDraft.toString(),
            });
            actionSheetCallback(buttonIndex, id, repoName);
          },
        );
      }
      return;
    }
    if (await Linking.canOpenURL(url)) {
      client.trackEvent("pull_request_card_clicked", {
        id,
        accent_color: accentColor,
        amount_of_comments: amountOfComments?.toString() ?? "0",
        is_draft: isDraft.toString(),
      });
      await Linking.openURL(url);
    }
  };

  const relativeTime = formatRelativeTime(updatedAt);
  const isConflicting = mergeableState === MergeableState.Conflicting;
  const ciDotColor =
    ciStatus && ciStatus !== CIStatus.None ? CI_DOT_COLOR[ciStatus] : undefined;

  return (
    <View style={{ overflow: "hidden" }}>
      <TouchableOpacity
        accessibilityRole="button"
        style={$.card}
        onPress={onPress}
      >
        <View style={[$.borderLine(accentColor), isDraft && $.draftLine]} />
        <View style={$.header}>
          {ciDotColor && <View style={$.ciDot(ciDotColor)} />}
          {isDraft && <Icon name="EditPencil" size={20} />}
          <View style={$.titleWrapper}>
            <Heading numberOfLines={1} size="x2s">
              {title}
            </Heading>
          </View>
          {isConflicting && (
            <View style={$.conflictBadge}>
              <Icon name="Cross" size={14} />
            </View>
          )}
          {!!relativeTime && (
            <Body size="xs" color="textSecondary">
              {relativeTime}
            </Body>
          )}
        </View>
        <View style={$.footer}>
          <View style={$.left}>
            <Body size="s">{t("PullRequestCard/Body/Author")}</Body>
            <Spacer ml={1.5} />
            <Attendee
              name={author.name}
              size={24}
              avatarUrl={author.avatarUrl}
            />
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
                <Icon name="Comment" size={20} />
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default memo(PullRequestCard);
