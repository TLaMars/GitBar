import azureApi from "services/api/azure/api";
import transformAzurePullRequest from "transformers/azure-pull-request";
import azureConfig from "utils/api-config";

class AzureProvider {
  name: string;

  organization: string;

  token: string;

  constructor(organization: string, token: string, name: string) {
    this.name = name;
    this.organization = organization;
    this.token = token;
  }

  async projects() {
    try {
      const { data } = await azureApi.get(
        "/:organization/_apis/projects",
        azureConfig(
          {
            organization: this.organization,
          },
          this.token,
        ),
      );

      return data.value;
    } catch (e) {
      console.error(e);

      return [];
    }
  }

  async pullRequests() {
    const projects = await this.projects();
    const pullRequests = await Promise.all(
      projects.map(async (project) => {
        const { data } = await azureApi.get(
          "/:organization/:projectId/_apis/git/pullrequests",
          azureConfig(
            {
              organization: this.organization,
              projectId: project.id,
            },
            this.token,
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
          pr.author.name === this.name ||
          pr.reviewers.some((reviewer) => reviewer.name === this.name),
      );
  }
}

export default AzureProvider;
