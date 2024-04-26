import { PullRequest } from "models/pull-request";
import Bridges from "services/bridges/bridges";

const sendPullRequestNotification = (
  pullRequests: PullRequest[],
  prevPullRequests?: PullRequest[],
) => {
  if (prevPullRequests) {
    const newPullRequests = pullRequests.filter(
      (pr) => !prevPullRequests.some((prevPr) => prevPr.id === pr.id),
    );

    const newComments = pullRequests.reduce((acc, pr) => {
      const prevPR = prevPullRequests.find((prevPr) => prevPr.id === pr.id);

      if (!prevPR) {
        return acc;
      }

      const commentDiff =
        (pr.amountOfComments ?? 0) - (prevPR.amountOfComments ?? 0);

      if (commentDiff > 0) {
        return acc + commentDiff;
      }

      return acc;
    }, 0);

    if (newPullRequests.length > 0 || newComments > 0) {
      Bridges.Notification.sendNotification(
        "GitBar update:",
        `You have ${newPullRequests.length} new pull requests and ${newComments} new comments`,
        "gitbar://dashboard",
      );
    }
  }
};

export default sendPullRequestNotification;
