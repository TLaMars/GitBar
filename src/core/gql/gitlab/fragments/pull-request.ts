import { graphql } from "../codegen";

const FragmentGitLabPullRequest = graphql(`
  fragment GitLabPullRequest on MergeRequestConnection {
    nodes {
      title
      id
      iid
      webUrl
      draft
      diffHeadSha
      author {
        name
        username
        avatarUrl
        bot
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
      targetProject {
        id
        name
        fullPath
      }
      approved
      approvalsRequired
      conflicts
      detailedMergeStatus
      resolvableDiscussionsCount
      resolvedDiscussionsCount
      userNotesCount
      createdAt
      updatedAt
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
