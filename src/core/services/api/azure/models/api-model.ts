import DOMAINS from "constants/domains";
import { Config } from "services/api/api-wrapper";

import { PolicyEvaluationsResponse } from "./policy-evaluations-response";
import { ProfileResponse } from "./profile-response";
import { ProjectsResponse } from "./projects-response";
import {
  AzurePullRequest,
  PullRequestsResponse,
} from "./pull-requests-response";
import { ThreadResponse } from "./thread-response";

type AzureGetApiRequest = {
  "/:organization/_apis/projects": ProjectsResponse;
  "/:organization/:projectId/_apis/git/pullrequests": PullRequestsResponse;
  "/:organization/:projectId/_apis/git/repositories/:repositoryId/pullrequests/:pullRequesId/threads": ThreadResponse;
  "/:organization/:projectId/_apis/policy/evaluations": PolicyEvaluationsResponse;
  "/:organization/_apis/profile/profiles/me": ProfileResponse;
};

type AzurePatchApiRequest = {
  "/:organization/:projectId/_apis/git/repositories/:repositoryId/pullrequests/:pullRequestId": AzurePullRequest;
};

export const azureApiEndpoints: Record<keyof AzureGetApiRequest, string> = {
  "/:organization/_apis/projects": DOMAINS.devAzure,
  "/:organization/:projectId/_apis/git/pullrequests": DOMAINS.devAzure,
  "/:organization/:projectId/_apis/git/repositories/:repositoryId/pullrequests/:pullRequesId/threads":
    DOMAINS.devAzure,
  "/:organization/:projectId/_apis/policy/evaluations": DOMAINS.devAzure,
  "/:organization/_apis/profile/profiles/me": DOMAINS.vsspsDevAzure,
};

export const azurePatchApiEndpoints: Record<
  keyof AzurePatchApiRequest,
  string
> = {
  "/:organization/:projectId/_apis/git/repositories/:repositoryId/pullrequests/:pullRequestId":
    DOMAINS.devAzure,
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
  patch: <T extends keyof AzurePatchApiRequest>(
    path: T,
    body: unknown,
    config?: Config,
  ) => Promise<{
    data: AzurePatchApiRequest[T];
    status: number;
    redirected: boolean;
  }>;
};
