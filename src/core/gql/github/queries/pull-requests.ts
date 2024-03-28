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
          title
          author {
            avatarUrl
            login
          }
          repository {
            nameWithOwner
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
        }
      }
    }
  }
`);

export default QueryGetGithubPullRequests;
