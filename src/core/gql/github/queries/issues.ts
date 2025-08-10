import { graphql } from "../codegen";

const QueryGetGithubIssues = graphql(`
  query GetGithubIssues {
    viewer {
      repositories(first: 100, affiliations: [OWNER, COLLABORATOR]) {
        nodes {
          issues(first: 100, states: OPEN) {
            nodes {
              ...GitHubIssue
            }
          }
        }
      }
    }
  }
`);

export default QueryGetGithubIssues;
