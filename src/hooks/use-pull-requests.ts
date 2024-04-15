import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import { GroupPullRequestsBy, PullRequest } from "models/pull-request";
import {
  selectGroupPRsBy,
  selectHidePRsAfterTwoMonths,
  selectHidePRsApprovedByMe,
} from "store/selectors/settings";

import useSelector from "./use-selector";

type PullRequestSection = {
  title: string;
  data: PullRequest[];
  hideTitle?: boolean;
};

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [sections, setSections] = useState<PullRequestSection[]>([]);
  const [loading, setLoading] = useState(false);
  const groupPRsBy = useSelector(selectGroupPRsBy);
  const hidePRsAfterTwoMonths = useSelector(selectHidePRsAfterTwoMonths);
  const hidePRsApprovedByMe = useSelector(selectHidePRsApprovedByMe);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);

    const result = await Promise.all(
      accounts.map(async (account) => account.pullRequests()),
    );

    const sortedResult = result
      .flat()
      .sort((a, b) => {
        if (a.createdAt < b.createdAt) {
          return 1;
        }
        if (a.createdAt > b.createdAt) {
          return -1;
        }
        return 0;
      })
      // Filter out PRs that are older than two months
      .filter((pr) => {
        if (hidePRsAfterTwoMonths) {
          const twoMonthsAgo = new Date();
          twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

          return new Date(pr.createdAt) > twoMonthsAgo;
        }
        return true;
      })
      // Filter out PRs that are approved by me
      .filter((pr) => {
        if (hidePRsApprovedByMe) {
          return !pr.approvedByMe;
        }
        return true;
      });

    const groupedResult = sortedResult.reduce<PullRequestSection[]>(
      (acc, pullRequest) => {
        let section: PullRequestSection | undefined;
        let title: string = "";
        if (groupPRsBy === GroupPullRequestsBy.REPO) {
          section = acc.find((s) => s.title === pullRequest.repoName);
          if (!section) {
            title = pullRequest.repoName;
          }
        }

        if (groupPRsBy === GroupPullRequestsBy.DATE) {
          section = acc.find(
            (s) =>
              new Date(s.title).toDateString() ===
              new Date(pullRequest.createdAt).toDateString(),
          );
          if (!section) {
            title = new Date(pullRequest.createdAt).toDateString();
          }
        }

        if (groupPRsBy === GroupPullRequestsBy.NONE) {
          section = acc.find((s) => s.title === "");
        }

        if (!section) {
          section = {
            title,
            data: [pullRequest],
            hideTitle: groupPRsBy === GroupPullRequestsBy.NONE,
          };
          acc.push(section);
        } else {
          section.data.push(pullRequest);
        }

        return acc;
      },
      [],
    );

    setPullRequests(sortedResult);
    setSections(groupedResult);
    setLoading(false);
  }, [accounts, hidePRsAfterTwoMonths, groupPRsBy, hidePRsApprovedByMe]);

  return {
    pullRequests,
    sections,
    fetchPullRequests,
    loading,
  };
};

export default usePullRequests;
