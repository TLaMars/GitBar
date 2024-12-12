import { GraphQLClient } from "graphql-request";

import DOMAINS from "constants/domains";
import URI_PATHS from "constants/uri-paths";

export const createGitLabGqlClient = (domain: string, token: string) =>
  new GraphQLClient(domain + URI_PATHS.gitlabGql, {
    headers: {
      "Private-Token": token,
    },
  });

export const createGitHubGqlClient = (token: string) =>
  new GraphQLClient(DOMAINS.githubApi + URI_PATHS.githubGql, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
