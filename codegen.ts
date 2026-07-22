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
            Authorization: `bearer ${process.env.GITHUB_TOKEN}`,
            "user-agent": "My-User-Agent",
          },
        },
      },
      documents: [
        "./src/core/gql/github/queries/**/*.ts",
        "./src/core/gql/github/fragments/**/*.ts",
        "./src/core/gql/github/mutations/**/*.ts",
      ],
      plugins: [],
      // Only emit types reachable from our operations, not the whole schema.
      config: { onlyOperationTypes: true },
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
    "./src/core/gql/gitlab/codegen/": {
      preset: "client",
      // gitlab.com allows unauthenticated schema introspection — no token needed.
      schema: "https://gitlab.com/api/graphql",
      documents: [
        "./src/core/gql/gitlab/queries/**/*.ts",
        "./src/core/gql/gitlab/fragments/**/*.ts",
        "./src/core/gql/gitlab/mutations/**/*.ts",
      ],
      plugins: [
        {
          add: {
            // Add a comment to the top of each generated file
            content: "// @ts-nocheck\n",
          },
        },
      ],
      // Only emit types reachable from our operations, not the whole schema.
      config: { onlyOperationTypes: true },
      presetConfig: {
        fragmentMasking: { unmaskFunctionName: "getFragmentData" },
      },
    },
  },
};

export default config;
