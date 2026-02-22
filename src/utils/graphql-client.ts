import { ApolloClient, InMemoryCache } from "@apollo/client";
import { HttpLink } from "@apollo/client/link/http";

import DOMAINS from "constants/domains";
import URI_PATHS from "constants/uri-paths";

export const createGitLabGqlClient = (domain: string, token: string) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: domain + URI_PATHS.gitlabGql,
      headers: {
        "Private-Token": token,
      },
    }),
  });

export const createGitHubGqlClient = (token: string) =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: DOMAINS.githubApi + URI_PATHS.githubGql,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  });
