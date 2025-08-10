import { graphql } from "../codegen";

const FragmentGitHubIssue = graphql(`
  fragment GitHubIssue on Issue {
    id
    url
    title
    createdAt
    updatedAt
    state
    author {
      login
      avatarUrl
    }
  }
`);

export default FragmentGitHubIssue;
