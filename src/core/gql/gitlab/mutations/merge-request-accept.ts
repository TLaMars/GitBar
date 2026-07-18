import { graphql } from "../codegen";

const MutationAcceptGitLabMergeRequest = graphql(`
  mutation AcceptGitLabMergeRequest($input: MergeRequestAcceptInput!) {
    mergeRequestAccept(input: $input) {
      errors
      mergeRequest {
        id
        state
      }
    }
  }
`);

export default MutationAcceptGitLabMergeRequest;
