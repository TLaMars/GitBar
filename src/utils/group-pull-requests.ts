import { GroupPullRequestsBy, PullRequest } from "models/pull-request";
import { Section } from "models/section";

const groupPullRequestsBy = (
  pullRequests: PullRequest[],
  groupPRsBy: GroupPullRequestsBy,
) => {
  const sections = pullRequests.reduce<Section<PullRequest>[]>(
    (acc, pullRequest) => {
      let section: Section<PullRequest> | undefined;
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

  if (groupPRsBy === GroupPullRequestsBy.DATE) {
    sections.sort(
      (a, b) => new Date(b.title).getTime() - new Date(a.title).getTime(),
    );
  }

  return sections;
};

export default groupPullRequestsBy;
