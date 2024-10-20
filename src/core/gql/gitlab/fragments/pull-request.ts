import { graphql } from "../codegen";

const FragmentGitLabPullRequest = graphql(`
  fragment GitLabPullRequest on MergeRequestConnection {
    nodes {
      title
      id
      approvalsRequired
      approvalsLeft
      webUrl
      draft
      author {
        name
        avatarUrl
      }
      reviewers {
        nodes {
          name
          avatarUrl
          mergeRequestInteraction {
            approved
          }
        }
      }
      sourceProject {
        name
        id
      }
      userNotesCount
      createdAt
    }
  }
`);

export default FragmentGitLabPullRequest;
