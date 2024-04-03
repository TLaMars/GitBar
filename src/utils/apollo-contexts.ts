import { DefaultContext } from "@apollo/client";

import DOMAINS from "constants/domains";
import URI_PATHS from "constants/uri-paths";

export const gitHubContext = (token: string): DefaultContext => ({
  headers: {
    Authorization: `bearer ${token}`,
  },
  uri: DOMAINS.githubApi + URI_PATHS.githubGql,
});

export const gitLabContext = (
  token: string,
  domain: string,
): DefaultContext => ({
  headers: {
    "Private-Token": token,
  },
  uri: domain + URI_PATHS.gitlabGql,
});
