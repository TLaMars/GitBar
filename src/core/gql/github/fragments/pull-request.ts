import { graphql } from "../codegen";

const FragmentGitHubPullRequest = graphql(`
  fragment GitHubPullRequest on PullRequest {
    id
    title
    author {
      avatarUrl
      login
    }
    repository {
      nameWithOwner
      id
      viewerDefaultMergeMethod
    }
    headRefOid
    reviewRequests(first: 5) {
      nodes {
        requestedReviewer {
          ... on User {
            name
            login
            avatarUrl
          }
        }
      }
    }
    isDraft
    createdAt
    url
    baseRef {
      branchProtectionRule {
        requiredApprovingReviewCount
      }
    }
    reviewDecision
    mergeable
    totalCommentsCount
    commits(last: 1) {
      nodes {
        commit {
          statusCheckRollup {
            state
          }
        }
      }
    }
    reviews(first: 100, states: APPROVED) {
      totalCount
      nodes {
        author {
          login
          avatarUrl
        }
        state
      }
    }
    comments(first: 100) {
      nodes {
        author {
          login
        }
      }
    }
  }
`);

export default FragmentGitHubPullRequest;
