import { graphql } from "../codegen";

const QueryGetViewer = graphql(`
  query GetViewer {
    viewer {
      avatarUrl
      login
    }
  }
`);

export default QueryGetViewer;
