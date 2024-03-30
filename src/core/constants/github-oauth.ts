const GITHUB_OAUTH_AUTHORIZE = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo,read:user`;

export default GITHUB_OAUTH_AUTHORIZE;
