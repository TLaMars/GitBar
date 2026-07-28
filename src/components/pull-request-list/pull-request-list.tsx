import { useGuavaClient } from "@guava-analytics/react-native";
import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
} from "react-native";
import { Pressable, View } from "react-native-macos";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import ErrorContainer from "components/error-container/error-container";
import Icon from "components/icon/icon";
import PullRequestCard from "components/pull-request-card/pull-request-card";
import usePullRequestActions from "hooks/use-pull-request-actions";
import useSelector from "hooks/use-selector";
import { PullRequest } from "models/pull-request";
import { Section } from "models/section";
import { selectCompactCards } from "store/selectors/settings";
import { getPullRequestKey } from "utils/derive-notification-events";

import styles from "./pull-request-list.styles";

// Bridges the gap between a card's leave and the next card's enter, which AppKit
// can deliver in either order.
const HOVER_LEAVE_DELAY_MS = 100;

type Props = {
  errors: Error[];
  sections: Section<PullRequest>[];
};

const PullRequestList: React.FC<Props> = ({ errors, sections }) => {
  const { styles: $ } = useStyles(styles);
  const client = useGuavaClient();
  const compact = useSelector(selectCompactCards);
  const { isSnoozed, isHidden, toggleSnooze, toggleHide } =
    usePullRequestActions();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  // Exactly one card can be armed, so a missed leave event can never leave a
  // second one showing its actions (KI-3).
  const [hoveredKey, setHoveredKey] = useState<string | null>(null);
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(
    undefined,
  );

  useEffect(
    () => () => {
      if (leaveTimer.current) clearTimeout(leaveTimer.current);
    },
    [],
  );

  const onHoverIn = useCallback((key: string) => {
    if (leaveTimer.current) clearTimeout(leaveTimer.current);
    setHoveredKey(key);
  }, []);

  const onHoverOut = useCallback((key: string) => {
    // Only clear if this card is still the armed one — an enter for the next
    // card may already have landed.
    leaveTimer.current = setTimeout(
      () => setHoveredKey((current) => (current === key ? null : current)),
      HOVER_LEAVE_DELAY_MS,
    );
  }, []);

  const toggleSection = useCallback(
    (title: string) => {
      const nowExpanded = !expanded.has(title);
      setExpanded((current) => {
        const next = new Set(current);
        if (nowExpanded) {
          next.add(title);
        } else {
          next.delete(title);
        }
        return next;
      });
      client.trackEvent("pull_request_section_toggled", {
        section_title: title,
        expanded: nowExpanded.toString(),
      });
    },
    [client, expanded],
  );

  const isCollapsed = useCallback(
    (section: Section<PullRequest>) =>
      !!section.collapsible && !expanded.has(section.title),
    [expanded],
  );

  const displaySections = useMemo(
    () =>
      sections.map((section) =>
        isCollapsed(section) ? { ...section, data: [] } : section,
      ),
    [sections, isCollapsed],
  );

  // Cards moving under a resting pointer is what strands the hover state, so
  // drop it whenever the rendered order changes. A poll that returns the same
  // PRs in the same order produces the same string and leaves hover alone.
  const renderedOrder = useMemo(
    () =>
      displaySections
        .flatMap((section) => section.data.map(getPullRequestKey))
        .join(),
    [displaySections],
  );

  useEffect(() => setHoveredKey(null), [renderedOrder]);

  const counts = useMemo(
    () =>
      new Map(sections.map((section) => [section.title, section.data.length])),
    [sections],
  );

  const renderSectionHeader = useCallback(
    (info: { section: SectionListData<PullRequest, Section<PullRequest>> }) => {
      const { section } = info;
      if (section.hideTitle) {
        return null;
      }

      if (section.collapsible) {
        const collapsed = !expanded.has(section.title);
        return (
          <Pressable
            accessibilityRole="button"
            style={$.disclosure}
            onPress={() => toggleSection(section.title)}
          >
            <View style={$.chevron(!collapsed)}>
              <Icon name="ChevronRight" size={14} color="textSecondary" />
            </View>
            <Body bold size="xs">
              {section.title}
            </Body>
            <Body size="xs" color="textSecondary">
              {counts.get(section.title) ?? 0}
            </Body>
          </Pressable>
        );
      }

      return (
        <Body bold size="xs">
          {section.title}
        </Body>
      );
    },
    [$, counts, expanded, toggleSection],
  );

  const renderItem = useCallback(
    ({
      item,
    }: SectionListRenderItemInfo<PullRequest, Section<PullRequest>>) => (
      <PullRequestCard
        key={getPullRequestKey(item)}
        id={item.id}
        title={item.title}
        author={item.author}
        reviewers={item.reviewers}
        url={item.url}
        amountOfComments={item.amountOfComments}
        accentColor={item.accentColor}
        isDraft={item.isDraft}
        isFullyApproved={item.isFullyApproved}
        isApprovalRequired={item.isApprovalRequired}
        hasConflicts={item.hasConflicts}
        ci={item.ci}
        accountId={item.accountId}
        mergeRef={item.mergeRef}
        compact={compact}
        isSnoozed={isSnoozed(item)}
        isHidden={isHidden(item)}
        active={hoveredKey === getPullRequestKey(item)}
        onHoverIn={() => onHoverIn(getPullRequestKey(item))}
        onHoverOut={() => onHoverOut(getPullRequestKey(item))}
        onSnooze={() => toggleSnooze(item)}
        onHide={() => toggleHide(item)}
      />
    ),
    [
      compact,
      isSnoozed,
      isHidden,
      toggleSnooze,
      toggleHide,
      hoveredKey,
      onHoverIn,
      onHoverOut,
    ],
  );

  return (
    <SectionList
      contentContainerStyle={$.list}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={15}
      maxToRenderPerBatch={5}
      sections={displaySections}
      ListHeaderComponent={
        errors.length > 0 ? <ErrorContainer errors={errors} /> : undefined
      }
      renderItem={renderItem}
      keyExtractor={getPullRequestKey}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default memo(PullRequestList);
