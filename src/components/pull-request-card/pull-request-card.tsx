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
import CiStatusIndicator from "components/ci-status-indicator/ci-status-indicator";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import Spacer from "components/spacer/spacer";
import StatusBadge from "components/status-badge/status-badge";
import useTranslation from "hooks/use-translation";
import { Attendee as AttendeeType } from "models/attendee";
import { CiStatus } from "models/ci-status";
import { ThemeColor } from "models/theme";

import styles from "./pull-request-card.styles";

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
  isFullyApproved: boolean;
  hasConflicts: boolean;
  ci?: CiStatus;
  compact?: boolean;
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
  isFullyApproved,
  hasConflicts,
  ci,
  compact = false,
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

  // Shared across compact + full layouts. Draft takes precedence over
  // Approved in the state slot (mutually exclusive in practice).
  const statusBadges = (
    <>
      {isDraft && (
        <StatusBadge
          tone="textSecondary"
          backgroundTone="backgroundCiCancelled"
          iconName="EditPencil"
          label={t("PullRequestCard/Status/Draft")}
          compact={compact}
        />
      )}
      {!isDraft && isFullyApproved && (
        <StatusBadge
          tone="accentGreen"
          backgroundTone="backgroundCiSuccess"
          iconName="Check"
          label={t("PullRequestCard/Status/Approved")}
          compact={compact}
        />
      )}
      {hasConflicts && (
        <StatusBadge
          tone="accentOrange"
          backgroundTone="backgroundWarning"
          iconName="AlertCircle"
          label={t("PullRequestCard/Status/Conflicts")}
          compact={compact}
        />
      )}
    </>
  );

  if (compact) {
    return (
      <TouchableOpacity
        accessibilityRole="button"
        style={$.cardCompact}
        onPress={onPress}
      >
        <Attendee name={author.name} size={24} avatarUrl={author.avatarUrl} />
        <View style={$.compactTitle}>
          <Heading numberOfLines={1} size="x2s">
            {title}
          </Heading>
        </View>
        {statusBadges}
        <CiStatusIndicator ci={ci} />
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={$.card}
      onPress={onPress}
    >
      {/* TEMP off for redesign */}
      {/* <View style={[$.borderLine(accentColor), isDraft && $.draftLine]} /> */}
      <View style={$.header}>
        <View style={$.title}>
          <Heading numberOfLines={1} size="x2s">
            {title}
          </Heading>
        </View>
        {statusBadges}
        <CiStatusIndicator ci={ci} />
      </View>
      <View style={$.footer}>
        <View style={$.left}>
          <Attendee name={author.name} size={24} avatarUrl={author.avatarUrl} />
          {reviewers.length > 0 && (
            <>
              <Spacer ml={2} />
              <Icon name="ChevronRight" size={14} color="textSecondary" />
              <Spacer ml={2} />
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
  );
};

export default memo(PullRequestCard);
