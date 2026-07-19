import { useGuavaClient } from "@guava-analytics/react-native";
import React, { memo, useCallback, useEffect, useRef, useState } from "react";
import { Linking } from "react-native";
import { Pressable, TouchableOpacity, View } from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import ActionPill from "components/action-pill/action-pill";
import Attendee from "components/attendee/attendee";
import AttendeeList from "components/attendee-list/attendee-list";
import Body from "components/body/body";
import CiStatusIndicator from "components/ci-status-indicator/ci-status-indicator";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import Pill from "components/pill/pill";
import Spacer from "components/spacer/spacer";
import { STATUS_BADGE_PRESENTATION } from "constants/status-badge";
import useMergePullRequest from "hooks/mutations/use-merge-pull-request";
import useTranslation from "hooks/use-translation";
import { Attendee as AttendeeType } from "models/attendee";
import { CiStatus } from "models/ci-status";
import { MergeRef } from "models/pull-request";
import { ThemeColor } from "models/theme";
import hasChangesRequested from "utils/has-changes-requested";
import resolveStatusBadge from "utils/resolve-status-badge";

import styles from "./pull-request-card.styles";

// Delay before hiding the action pills after the cursor leaves, so brushing
// between the card and its pills doesn't flicker them away (D5).
const HOVER_LEAVE_DELAY_MS = 100;

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
  isApprovalRequired: boolean;
  hasConflicts: boolean;
  ci?: CiStatus;
  accountId: string;
  mergeRef?: MergeRef;
  compact?: boolean;
  onSnooze: () => void;
  onHide: () => void;
};

const PullRequestCard: React.FC<Props> = ({
  id,
  title,
  author,
  reviewers,
  url,
  amountOfComments,
  accentColor,
  isDraft,
  isFullyApproved,
  isApprovalRequired,
  hasConflicts,
  ci,
  accountId,
  mergeRef,
  compact = false,
  onSnooze,
  onHide,
}) => {
  const client = useGuavaClient();
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();

  // Hover-revealed actions (D5). react-native-macos exposes onMouseEnter/Leave.
  const [active, setActive] = useState(false);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(
    () => () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    },
    [],
  );

  const onMouseEnter = useCallback(() => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setActive(true);
  }, []);

  const onMouseLeave = useCallback(() => {
    leaveTimer.current = setTimeout(
      () => setActive(false),
      HOVER_LEAVE_DELAY_MS,
    );
  }, []);

  const { canMerge, isMerging, merge } = useMergePullRequest({
    id,
    accountId,
    mergeRef,
    isDraft,
    isFullyApproved,
    isApprovalRequired,
    hasConflicts,
    ci,
  });
  const badgeVariant = compact ? "compact" : "pill";

  // At most one status badge per card (D12). The Merge pill is a CTA that
  // subsumes the badge slot, so it wins outright when the PR is mergeable.
  const statusBadge = canMerge
    ? null
    : resolveStatusBadge({
        hasConflicts,
        hasChangesRequested: hasChangesRequested(reviewers),
        isDraft,
        isFullyApproved,
      });

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

  // Shared across compact + full layouts. The Merge CTA and the single
  // resolved status badge are mutually exclusive (see statusBadge above).
  const statusBadges = (
    <>
      {canMerge && (
        <ActionPill
          analyticsLabel="pull_request_merge"
          iconName="GitMerge"
          label={t("PullRequestCard/Action/Merge")}
          pendingLabel={t("PullRequestCard/Action/Merging")}
          tooltip={t("PullRequestCard/Action/MergeTooltip")}
          tone="textOnCtaPositive"
          backgroundTone="backgroundCtaPositive"
          pending={isMerging}
          onPress={merge}
        />
      )}
      {statusBadge && (
        <Pill
          variant={badgeVariant}
          tone={STATUS_BADGE_PRESENTATION[statusBadge].tone}
          backgroundTone={STATUS_BADGE_PRESENTATION[statusBadge].backgroundTone}
          iconName={STATUS_BADGE_PRESENTATION[statusBadge].iconName}
          label={t(STATUS_BADGE_PRESENTATION[statusBadge].labelKey)}
          tooltip={t(STATUS_BADGE_PRESENTATION[statusBadge].labelKey)}
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
        {!canMerge && <CiStatusIndicator ci={ci} />}
      </Pressable>
    );
  }

  return (
    <Pressable
      accessibilityRole="button"
      style={[$.card, active && $.cardActive]}
      onPress={onPress}
      onHoverIn={onMouseEnter}
      onHoverOut={onMouseLeave}
    >
      <View style={[$.borderLine(accentColor)]} />
      <View style={$.header}>
        <View style={$.title}>
          <Heading numberOfLines={1} size="x2s">
            {title}
          </Heading>
        </View>
        {statusBadges}
        {!canMerge && <CiStatusIndicator ci={ci} />}
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
          {active ? (
            <View style={$.actions}>
              <TouchableOpacity
                accessibilityRole="button"
                style={$.actionButton}
                tooltip={t("PullRequestCard/Action/SnoozeTooltip")}
                onPress={onSnooze}
              >
                <Icon name="Clock" size={14} color="textSecondary" />
                <Body size="xs" color="textSecondary">
                  {t("PullRequestCard/Action/Snooze")}
                </Body>
              </TouchableOpacity>
              <TouchableOpacity
                accessibilityRole="button"
                style={$.actionButton}
                tooltip={t("PullRequestCard/Action/Hide")}
                onPress={onHide}
              >
                <Icon name="Ban" size={14} color="textSecondary" />
                <Body size="xs" color="textSecondary">
                  {t("PullRequestCard/Action/Hide")}
                </Body>
              </TouchableOpacity>
            </View>
          ) : (
            amountOfComments !== undefined && (
              <View style={$.info}>
                <Body size="s">{amountOfComments}</Body>
                <Icon name="Comment" size={20} />
              </View>
            )
          )}
        </View>
      </View>
    </Pressable>
  );
};

export default memo(PullRequestCard);
