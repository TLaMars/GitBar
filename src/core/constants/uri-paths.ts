const URI_PATHS = {
  githubAccessToken: "/access_token",
  githubGql: "/graphql",
  githubOauthAuthorize: `/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo,read:user`,
  githubOauth: "/login/oauth",
  gitlabGql: "/api/graphql",
};

export default URI_PATHS;
