import { Config } from "services/api/api-wrapper";

const azureConfig = (params: Config["params"], token: string): Config => ({
  params,
  headers: {
    Authorization: `Basic ${token}`,
  },
});

export default azureConfig;
