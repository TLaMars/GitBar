import { GitHubApi as GitHubApiType } from "./model";
import apiWrapper from "../api-wrapper";

const endpoint = "https://github.com/login/oauth";

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
