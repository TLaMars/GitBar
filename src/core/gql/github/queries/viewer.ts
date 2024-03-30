import { graphql } from "../codegen";

const QueryGetViewer = graphql(`
  query GetViewer {
    viewer {
      id
      avatarUrl
      login
      name
    }
  }
`);

export default QueryGetViewer;
