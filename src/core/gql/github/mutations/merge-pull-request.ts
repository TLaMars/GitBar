import { graphql } from "../codegen";

const MutationMergeGitHubPullRequest = graphql(`
  mutation MergeGitHubPullRequest($input: MergePullRequestInput!) {
    mergePullRequest(input: $input) {
      pullRequest {
        id
        merged
      }
    }
  }
`);

export default MutationMergeGitHubPullRequest;
