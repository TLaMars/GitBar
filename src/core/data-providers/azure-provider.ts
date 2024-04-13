import { AccountType } from "models/account";
import { AzureAuth } from "models/auth";
import Profile from "models/profile";
import { Config } from "services/api/api-wrapper";
import azureApi from "services/api/azure/api";
import transformAzurePullRequest from "transformers/azure-pull-request";
import azureConfig from "utils/api-config";

import Provider from "./provider";

class AzureProvider implements Provider {
  auth: AzureAuth;

  #profile?: Profile;

  #config: Config;

  constructor(auth: AzureAuth) {
    this.auth = auth;
    this.#config = azureConfig(
      {
        organization: this.auth.organization,
      },
      this.auth.token,
    );
  }

  async profile() {
    if (!this.#profile) {
      const { data } = await azureApi.get(
        "/:organization/_apis/profile/profiles/me",
        this.#config,
      );

      this.#profile = {
        id: data.id,
        avatarUrl: "",
        userName: data.displayName,
        name: data.displayName,
        type: AccountType.Azure,
      };
    }

    return this.#profile;
  }

  async projects() {
    try {
      const { data } = await azureApi.get(
        "/:organization/_apis/projects",
        this.#config,
      );

      return data.value;
    } catch (e) {
      console.error(e);

      return [];
    }
  }

  async pullRequests() {
    const profile = await this.profile();
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
      .map(transformAzurePullRequest)
      .filter(
        (pr) =>
          pr.author.name === profile.name ||
          pr.reviewers.some((reviewer) => reviewer.name === profile.name),
      );
  }
}

export default AzureProvider;
