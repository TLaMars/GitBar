import DOMAINS from "constants/domains";
import { Config } from "services/api/api-wrapper";

import { ProfileResponse } from "./profile-response";
import { ProjectsResponse } from "./projects-response";
import { PullRequestsResponse } from "./pull-requests-response";

type AzureGetApiRequest = {
  "/:organization/_apis/projects": ProjectsResponse;
  "/:organization/:projectId/_apis/git/pullrequests": PullRequestsResponse;
  "/:organization/_apis/profile/profiles/me": ProfileResponse;
};

export const azureApiEndpoints: Record<keyof AzureGetApiRequest, string> = {
  "/:organization/_apis/projects": DOMAINS.devAzure,
  "/:organization/:projectId/_apis/git/pullrequests": DOMAINS.devAzure,
  "/:organization/_apis/profile/profiles/me": DOMAINS.vsspsDevAzure,
};

export type AzureApi = {
  get: <T extends keyof AzureGetApiRequest>(
    path: T,
    config?: Config,
  ) => Promise<{
    data: AzureGetApiRequest[T];
    status: number;
    redirected: boolean;
  }>;
};
