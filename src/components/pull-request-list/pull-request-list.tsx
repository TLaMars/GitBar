import { useGuavaClient } from "@guava-analytics/react-native";
import { memo, useCallback, useMemo, useState } from "react";
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

import styles from "./pull-request-list.styles";

type Props = {
  errors: Error[];
  sections: Section<PullRequest>[];
};

const PullRequestList: React.FC<Props> = ({ errors, sections }) => {
  const { styles: $ } = useStyles(styles);
  const client = useGuavaClient();
  const compact = useSelector(selectCompactCards);
  const { snooze, hide } = usePullRequestActions();
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

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
        key={item.id}
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
        onSnooze={() => snooze(item)}
        onHide={() => hide(item)}
      />
    ),
    [compact, snooze, hide],
  );

  return (
    <SectionList
      contentContainerStyle={$.list}
      initialNumToRender={15}
      maxToRenderPerBatch={5}
      sections={displaySections}
      ListHeaderComponent={
        errors.length > 0 ? <ErrorContainer errors={errors} /> : undefined
      }
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      renderSectionHeader={renderSectionHeader}
    />
  );
};

export default memo(PullRequestList);
