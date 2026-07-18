import { useGuavaClient } from "@guava-analytics/react-native";
import React, { memo } from "react";
import { Linking } from "react-native";
import { Pressable, View } from "react-native-macos";
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
  url: string;
  amountOfComments?: number;
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
  accentColor,
  id,
  isDraft,
  isFullyApproved,
  hasConflicts,
  ci,
  compact = false,
}) => {
  const client = useGuavaClient();
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();

  const onPress = async () => {
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
      <Pressable
        accessibilityRole="button"
        style={$.cardCompact}
        onPress={onPress}
      >
        <View style={[$.borderLine(accentColor)]} />
        <Attendee name={author.name} size={24} avatarUrl={author.avatarUrl} />
        <View style={$.compactTitle}>
          <Heading numberOfLines={1} size="x2s">
            {title}
          </Heading>
        </View>
        {statusBadges}
        <CiStatusIndicator ci={ci} />
      </Pressable>
    );
  }

  return (
    <Pressable accessibilityRole="button" style={$.card} onPress={onPress}>
      <View style={[$.borderLine(accentColor)]} />
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
    </Pressable>
  );
};

export default memo(PullRequestCard);
