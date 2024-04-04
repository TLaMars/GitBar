import apiWrapper from "services/api/api-wrapper";

import {
  AzureApi as AzureApiType,
  azureApiEndpoints,
} from "./models/api-model";

const azureApi: AzureApiType = {
  get(path, config) {
    const endpoint = azureApiEndpoints[path];
    return apiWrapper(endpoint, "GET", `${path}`, config ?? {});
  },
};

export default azureApi;
