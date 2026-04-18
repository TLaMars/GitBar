import { graphql } from "../codegen";

const FragmentGitLabPullRequest = graphql(`
  fragment GitLabPullRequest on MergeRequestConnection {
    nodes {
      title
      id
      webUrl
      draft
      author {
        name
        username
        avatarUrl
      }
      reviewers {
        nodes {
          name
          username
          avatarUrl
          mergeRequestInteraction {
            approved
            reviewState
          }
        }
      }
      commenters {
        nodes {
          username
        }
      }
      sourceProject {
        name
        id
      }
      approved
      conflicts
      userNotesCount
      createdAt
      headPipeline {
        status
        detailedStatus {
          detailsPath
        }
      }
    }
  }
`);

export default FragmentGitLabPullRequest;
