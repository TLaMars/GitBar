import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  hooks: { afterAllFileWrite: ["prettier --write"] },
  overwrite: true,
  generates: {
    "./src/core/gql/github/codegen/": {
      preset: "client",
      schema: {
        "https://api.github.com/graphql": {
          method: "GET",
          headers: {
            Authorization: `bearer KEY`,
            "user-agent": "My-User-Agent",
          },
        },
      },
      documents: ["./src/core/gql/github/queries/**/*.ts"],
      plugins: [],
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
  },
};

export default config;
