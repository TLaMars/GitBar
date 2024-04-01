import { graphql } from "../codegen";

const FragmentGitLabPullRequest = graphql(`
  fragment GitLabPullRequest on MergeRequestConnection {
    nodes {
      title
      id
      approvalsRequired
      approvalsLeft
      webUrl
      author {
        name
        avatarUrl
      }
      reviewers {
        nodes {
          name
          avatarUrl
        }
      }
      sourceProject {
        name
      }
      userNotesCount
      createdAt
    }
  }
`);

export default FragmentGitLabPullRequest;
