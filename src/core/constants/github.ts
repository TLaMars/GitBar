const GITHUB_OAUTH_AUTHORIZE = `https://github.com/login/oauth/authorize?client_id=${process.env.GITHUB_CLIENT_ID}&scope=repo,read:user`;
export const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

export default GITHUB_OAUTH_AUTHORIZE;
