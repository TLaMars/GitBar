/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
  "\n  fragment GitHubIssue on Issue {\n    id\n    url\n    title\n    createdAt\n    updatedAt\n    state\n    author {\n      login\n      avatarUrl\n    }\n  }\n": typeof types.GitHubIssueFragmentDoc;
  "\n  fragment GitHubPullRequest on PullRequest {\n    id\n    title\n    author {\n      avatarUrl\n      login\n    }\n    repository {\n      nameWithOwner\n      id\n      viewerDefaultMergeMethod\n    }\n    headRefOid\n    reviewRequests(first: 5) {\n      nodes {\n        requestedReviewer {\n          ... on User {\n            name\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n    isDraft\n    createdAt\n    updatedAt\n    url\n    baseRef {\n      branchProtectionRule {\n        requiredApprovingReviewCount\n      }\n    }\n    reviewDecision\n    mergeable\n    totalCommentsCount\n    reviewThreads(first: 50) {\n      nodes {\n        isResolved\n      }\n    }\n    commits(last: 1) {\n      nodes {\n        commit {\n          statusCheckRollup {\n            state\n          }\n        }\n      }\n    }\n    reviews(first: 100, states: APPROVED) {\n      totalCount\n      nodes {\n        author {\n          login\n          avatarUrl\n        }\n        state\n      }\n    }\n    comments(first: 100) {\n      nodes {\n        author {\n          login\n        }\n      }\n    }\n  }\n": typeof types.GitHubPullRequestFragmentDoc;
  "\n  mutation MergeGitHubPullRequest($input: MergePullRequestInput!) {\n    mergePullRequest(input: $input) {\n      pullRequest {\n        id\n        merged\n      }\n    }\n  }\n": typeof types.MergeGitHubPullRequestDocument;
  "\n  query GetGithubIssues {\n    viewer {\n      repositories(first: 100, affiliations: [OWNER, COLLABORATOR]) {\n        nodes {\n          issues(first: 100, states: OPEN) {\n            nodes {\n              ...GitHubIssue\n            }\n          }\n        }\n      }\n      issues(first: 100, states: OPEN) {\n        nodes {\n          ...GitHubIssue\n        }\n      }\n    }\n  }\n": typeof types.GetGithubIssuesDocument;
  '\n  query GetGithubPullRequests {\n    search(\n      first: 100\n      query: "type:pr involves:@me is:open archived:false"\n      type: ISSUE\n    ) {\n      nodes {\n        ... on PullRequest {\n          ...GitHubPullRequest\n        }\n      }\n    }\n  }\n': typeof types.GetGithubPullRequestsDocument;
  "\n  query GetViewer {\n    viewer {\n      id\n      avatarUrl\n      login\n      name\n    }\n  }\n": typeof types.GetViewerDocument;
};
const documents: Documents = {
  "\n  fragment GitHubIssue on Issue {\n    id\n    url\n    title\n    createdAt\n    updatedAt\n    state\n    author {\n      login\n      avatarUrl\n    }\n  }\n":
    types.GitHubIssueFragmentDoc,
  "\n  fragment GitHubPullRequest on PullRequest {\n    id\n    title\n    author {\n      avatarUrl\n      login\n    }\n    repository {\n      nameWithOwner\n      id\n      viewerDefaultMergeMethod\n    }\n    headRefOid\n    reviewRequests(first: 5) {\n      nodes {\n        requestedReviewer {\n          ... on User {\n            name\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n    isDraft\n    createdAt\n    updatedAt\n    url\n    baseRef {\n      branchProtectionRule {\n        requiredApprovingReviewCount\n      }\n    }\n    reviewDecision\n    mergeable\n    totalCommentsCount\n    reviewThreads(first: 50) {\n      nodes {\n        isResolved\n      }\n    }\n    commits(last: 1) {\n      nodes {\n        commit {\n          statusCheckRollup {\n            state\n          }\n        }\n      }\n    }\n    reviews(first: 100, states: APPROVED) {\n      totalCount\n      nodes {\n        author {\n          login\n          avatarUrl\n        }\n        state\n      }\n    }\n    comments(first: 100) {\n      nodes {\n        author {\n          login\n        }\n      }\n    }\n  }\n":
    types.GitHubPullRequestFragmentDoc,
  "\n  mutation MergeGitHubPullRequest($input: MergePullRequestInput!) {\n    mergePullRequest(input: $input) {\n      pullRequest {\n        id\n        merged\n      }\n    }\n  }\n":
    types.MergeGitHubPullRequestDocument,
  "\n  query GetGithubIssues {\n    viewer {\n      repositories(first: 100, affiliations: [OWNER, COLLABORATOR]) {\n        nodes {\n          issues(first: 100, states: OPEN) {\n            nodes {\n              ...GitHubIssue\n            }\n          }\n        }\n      }\n      issues(first: 100, states: OPEN) {\n        nodes {\n          ...GitHubIssue\n        }\n      }\n    }\n  }\n":
    types.GetGithubIssuesDocument,
  '\n  query GetGithubPullRequests {\n    search(\n      first: 100\n      query: "type:pr involves:@me is:open archived:false"\n      type: ISSUE\n    ) {\n      nodes {\n        ... on PullRequest {\n          ...GitHubPullRequest\n        }\n      }\n    }\n  }\n':
    types.GetGithubPullRequestsDocument,
  "\n  query GetViewer {\n    viewer {\n      id\n      avatarUrl\n      login\n      name\n    }\n  }\n":
    types.GetViewerDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment GitHubIssue on Issue {\n    id\n    url\n    title\n    createdAt\n    updatedAt\n    state\n    author {\n      login\n      avatarUrl\n    }\n  }\n",
): (typeof documents)["\n  fragment GitHubIssue on Issue {\n    id\n    url\n    title\n    createdAt\n    updatedAt\n    state\n    author {\n      login\n      avatarUrl\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  fragment GitHubPullRequest on PullRequest {\n    id\n    title\n    author {\n      avatarUrl\n      login\n    }\n    repository {\n      nameWithOwner\n      id\n      viewerDefaultMergeMethod\n    }\n    headRefOid\n    reviewRequests(first: 5) {\n      nodes {\n        requestedReviewer {\n          ... on User {\n            name\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n    isDraft\n    createdAt\n    updatedAt\n    url\n    baseRef {\n      branchProtectionRule {\n        requiredApprovingReviewCount\n      }\n    }\n    reviewDecision\n    mergeable\n    totalCommentsCount\n    reviewThreads(first: 50) {\n      nodes {\n        isResolved\n      }\n    }\n    commits(last: 1) {\n      nodes {\n        commit {\n          statusCheckRollup {\n            state\n          }\n        }\n      }\n    }\n    reviews(first: 100, states: APPROVED) {\n      totalCount\n      nodes {\n        author {\n          login\n          avatarUrl\n        }\n        state\n      }\n    }\n    comments(first: 100) {\n      nodes {\n        author {\n          login\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  fragment GitHubPullRequest on PullRequest {\n    id\n    title\n    author {\n      avatarUrl\n      login\n    }\n    repository {\n      nameWithOwner\n      id\n      viewerDefaultMergeMethod\n    }\n    headRefOid\n    reviewRequests(first: 5) {\n      nodes {\n        requestedReviewer {\n          ... on User {\n            name\n            login\n            avatarUrl\n          }\n        }\n      }\n    }\n    isDraft\n    createdAt\n    updatedAt\n    url\n    baseRef {\n      branchProtectionRule {\n        requiredApprovingReviewCount\n      }\n    }\n    reviewDecision\n    mergeable\n    totalCommentsCount\n    reviewThreads(first: 50) {\n      nodes {\n        isResolved\n      }\n    }\n    commits(last: 1) {\n      nodes {\n        commit {\n          statusCheckRollup {\n            state\n          }\n        }\n      }\n    }\n    reviews(first: 100, states: APPROVED) {\n      totalCount\n      nodes {\n        author {\n          login\n          avatarUrl\n        }\n        state\n      }\n    }\n    comments(first: 100) {\n      nodes {\n        author {\n          login\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  mutation MergeGitHubPullRequest($input: MergePullRequestInput!) {\n    mergePullRequest(input: $input) {\n      pullRequest {\n        id\n        merged\n      }\n    }\n  }\n",
): (typeof documents)["\n  mutation MergeGitHubPullRequest($input: MergePullRequestInput!) {\n    mergePullRequest(input: $input) {\n      pullRequest {\n        id\n        merged\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetGithubIssues {\n    viewer {\n      repositories(first: 100, affiliations: [OWNER, COLLABORATOR]) {\n        nodes {\n          issues(first: 100, states: OPEN) {\n            nodes {\n              ...GitHubIssue\n            }\n          }\n        }\n      }\n      issues(first: 100, states: OPEN) {\n        nodes {\n          ...GitHubIssue\n        }\n      }\n    }\n  }\n",
): (typeof documents)["\n  query GetGithubIssues {\n    viewer {\n      repositories(first: 100, affiliations: [OWNER, COLLABORATOR]) {\n        nodes {\n          issues(first: 100, states: OPEN) {\n            nodes {\n              ...GitHubIssue\n            }\n          }\n        }\n      }\n      issues(first: 100, states: OPEN) {\n        nodes {\n          ...GitHubIssue\n        }\n      }\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetGithubPullRequests {\n    search(\n      first: 100\n      query: "type:pr involves:@me is:open archived:false"\n      type: ISSUE\n    ) {\n      nodes {\n        ... on PullRequest {\n          ...GitHubPullRequest\n        }\n      }\n    }\n  }\n',
): (typeof documents)['\n  query GetGithubPullRequests {\n    search(\n      first: 100\n      query: "type:pr involves:@me is:open archived:false"\n      type: ISSUE\n    ) {\n      nodes {\n        ... on PullRequest {\n          ...GitHubPullRequest\n        }\n      }\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "\n  query GetViewer {\n    viewer {\n      id\n      avatarUrl\n      login\n      name\n    }\n  }\n",
): (typeof documents)["\n  query GetViewer {\n    viewer {\n      id\n      avatarUrl\n      login\n      name\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
