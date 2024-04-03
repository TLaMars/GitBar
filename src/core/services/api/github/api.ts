import DOMAINS from "constants/domains";
import URI_PATHS from "constants/uri-paths";
import apiWrapper from "services/api/api-wrapper";

import { GitHubApi as GitHubApiType } from "./api-model";

const endpoint = `${DOMAINS.github}${URI_PATHS.githubOauth}`;

const gitHubOauthApi: GitHubApiType = {
  post: async (path, data, config) =>
    apiWrapper(endpoint, "POST", path, {
      ...config,
      headers: {
        ...config?.headers,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }),
};

export default gitHubOauthApi;
