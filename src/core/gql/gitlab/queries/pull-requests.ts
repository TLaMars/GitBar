import { graphql } from "../codegen";

const QueryGetGitLabPullRequests = graphql(`
  query GetGitLabPullRequests {
    currentUser {
      assignedMergeRequests(state: opened) {
        ...GitLabPullRequest
      }
      authoredMergeRequests(state: opened) {
        ...GitLabPullRequest
      }
      reviewRequestedMergeRequests(state: opened) {
        ...GitLabPullRequest
      }
    }
  }
`);

export default QueryGetGitLabPullRequests;
