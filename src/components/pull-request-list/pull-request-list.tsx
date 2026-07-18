import { memo, useCallback } from "react";
import {
  SectionList,
  SectionListData,
  SectionListRenderItemInfo,
} from "react-native";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import ErrorContainer from "components/error-container/error-container";
import PullRequestCard from "components/pull-request-card/pull-request-card";
import useSelector from "hooks/use-selector";
import { PullRequest } from "models/pull-request";
import { Section } from "models/section";
import { selectCompactCards } from "store/selectors/settings";

import styles from "./pull-request-list.styles";

const SectionHeader = ({
  section: { title, hideTitle },
}: {
  section: SectionListData<PullRequest, Section<PullRequest>>;
}) => {
  if (hideTitle) {
    return null;
  }

  return (
    <Body bold size="xs">
      {title}
    </Body>
  );
};

type Props = {
  errors: Error[];
  sections: Section<PullRequest>[];
};

const PullRequestList: React.FC<Props> = ({ errors, sections }) => {
  const { styles: $ } = useStyles(styles);
  const compact = useSelector(selectCompactCards);

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
      />
    ),
    [compact],
  );

  return (
    <SectionList
      contentContainerStyle={$.list}
      initialNumToRender={15}
      maxToRenderPerBatch={5}
      sections={sections}
      ListHeaderComponent={
        errors.length > 0 ? <ErrorContainer errors={errors} /> : undefined
      }
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      renderSectionHeader={SectionHeader}
    />
  );
};

export default memo(PullRequestList);
