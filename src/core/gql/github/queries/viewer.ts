import { graphql } from "../codegen";

const QueryGetViewer = graphql(`
  query GetViewer {
    viewer {
      id
      avatarUrl
      login
    }
  }
`);

export default QueryGetViewer;
