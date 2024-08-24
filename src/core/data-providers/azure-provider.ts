import { AccountType } from "models/account";
import { AzureAuth } from "models/auth";
import Profile, { ProfileStatus } from "models/profile";
import { Config } from "services/api/api-wrapper";
import azureApi from "services/api/azure/api";
import transformAzurePullRequest from "transformers/azure-pull-request";
import azureConfig from "utils/api-config";

import Provider from "./provider";

class AzureProvider implements Provider {
  id: string;

  auth: AzureAuth;

  #profile?: Profile;

  #config: Config;

  constructor(id: string, auth: AzureAuth) {
    this.id = id;
    this.auth = auth;
    this.#config = azureConfig(
      {
        organization: this.auth.organization,
      },
      this.auth.token,
    );
  }

  async profile() {
    const errorProfile = {
      id: this.id,
      name: this.auth.organization,
      type: AccountType.Azure,
      status: ProfileStatus.Invalid,
    };

    if (!this.#profile) {
      const { data, status } = await azureApi
        .get("/:organization/_apis/profile/profiles/me", this.#config)
        .catch((error) => ({ data: null, status: error.statusCode }));

      if (!data || status !== 200) {
        return errorProfile;
      }

      this.#profile = {
        id: data.id,
        avatarUrl: "",
        userName: data.emailAddress,
        name: data.displayName,
        type: AccountType.Azure,
        status: ProfileStatus.Valid,
      };

      return this.#profile;
    }

    return this.#profile;
  }

  async projects() {
    const { data } = await azureApi.get(
      "/:organization/_apis/projects",
      this.#config,
    );

    return data.value;
  }

  async pullRequests() {
    const profile = await this.profile();

    if (profile.status === ProfileStatus.Invalid) {
      return [];
    }

    const projects = await this.projects();
    const pullRequests = await Promise.all(
      projects.map(async (project) => {
        const { data } = await azureApi.get(
          "/:organization/:projectId/_apis/git/pullrequests",
          azureConfig(
            {
              organization: this.auth.organization,
              projectId: project.id,
            },
            this.auth.token,
          ),
        );
        return data.value;
      }),
    );

    return pullRequests
      .flat()
      .map((pr) => transformAzurePullRequest(profile, pr))
      .filter(
        (pr) =>
          pr.author.name === profile.name ||
          pr.reviewers.some((reviewer) => reviewer.name === profile.name),
      );
  }
}

export default AzureProvider;
