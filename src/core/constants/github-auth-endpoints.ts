const githubAuthEndpoints = {
  authorize: `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo,read:user`,
  accessToken: "https://github.com/login/oauth/access_token",
};

export default githubAuthEndpoints;
