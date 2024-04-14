import { useCallback, useContext, useState } from "react";

import { AccountsContext } from "contexts/accounts";
import { PullRequest } from "models/pull-request";

type PullRequestSection = {
  title: string;
  data: PullRequest[];
};

const usePullRequests = () => {
  const accounts = useContext(AccountsContext);
  const [pullRequests, setPullRequests] = useState<PullRequest[]>([]);
  const [sections, setSections] = useState<PullRequestSection[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPullRequests = useCallback(async () => {
    setLoading(true);

    const result = await Promise.all(
      accounts.map(async (account) => account.pullRequests()),
    );

    const sortedResult = result.flat().sort((a, b) => {
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      return 0;
    });

    const groupedResult = sortedResult.reduce<PullRequestSection[]>(
      (acc, pullRequest) => {
        const section = acc.find((s) => s.title === pullRequest.repoName);
        if (section) {
          section.data.push(pullRequest);
        } else {
          acc.push({
            title: pullRequest.repoName,
            data: [pullRequest],
          });
        }
        return acc;
      },
      [],
    );

    setPullRequests(sortedResult);
    setSections(groupedResult);
    setLoading(false);
  }, [accounts]);

  return {
    pullRequests,
    sections,
    fetchPullRequests,
    loading,
  };
};

export default usePullRequests;
