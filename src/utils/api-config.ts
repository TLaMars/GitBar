import { Config } from "services/api/api-wrapper";

/**
 * Azure's REST docs are explicit: "API version must be specified with every
 * request." An unversioned request gets served a legacy shape instead of an
 * error, so fields added in later versions silently go missing — `isDraft`
 * only exists on `GitPullRequest` from 5.0 onwards, which is why draft PRs
 * arrived with the field absent and never got the draft badge (KI-8).
 *
 * Defaulted here rather than per call site so no Azure request can omit it
 * again; KI-6 was the same class of bug from the other direction (a wrong
 * version, invisibly rejected). Preview-only endpoints override it by passing
 * their own `api-version` in `params`.
 */
export const azureConfig = (
  params: Config["params"],
  token: string,
): Config => ({
  params: { "api-version": "7.1", ...params },
  headers: {
    Authorization: `Basic ${token}`,
  },
});

export const githubConfig = (
  token: string,
  params?: Config["params"],
): Config => ({
  params,
  headers: {
    Authorization: `Bearer ${token}`,
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
