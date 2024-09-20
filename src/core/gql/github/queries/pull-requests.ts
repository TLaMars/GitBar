import { graphql } from "../codegen";

const QueryGetGithubPullRequests = graphql(`
  query GetGithubPullRequests {
    search(
      first: 100
      query: "type:pr involves:@me is:open archived:false"
      type: ISSUE
    ) {
      nodes {
        ... on PullRequest {
          id
          title
          author {
            avatarUrl
            login
          }
          repository {
            nameWithOwner
            id
          }
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
          createdAt
          url
          baseRef {
            branchProtectionRule {
              requiredApprovingReviewCount
            }
          }
          reviewDecision
          totalCommentsCount
          reviews(first: 100, states: APPROVED) {
            totalCount
            nodes {
              author {
                login
              }
              state
            }
          }
        }
      }
    }
  }
`);

export default QueryGetGithubPullRequests;
