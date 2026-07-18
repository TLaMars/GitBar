import apiWrapper from "services/api/api-wrapper";

import {
  AzureApi as AzureApiType,
  azureApiEndpoints,
  azurePatchApiEndpoints,
} from "./models/api-model";

const azureApi: AzureApiType = {
  get(path, config) {
    const endpoint = azureApiEndpoints[path];
    return apiWrapper(endpoint, "GET", `${path}`, {
      headers: {
        "Content-type": "application/json",

        ...config?.headers,
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      redirect: "error",
      ...config,
    });
  },
  patch(path, body, config) {
    const endpoint = azurePatchApiEndpoints[path];
    return apiWrapper(endpoint, "PATCH", `${path}`, {
      headers: {
        "Content-type": "application/json",

        ...config?.headers,
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      redirect: "error",
      ...config,
      body: JSON.stringify(body),
    });
  },
};

export default azureApi;
