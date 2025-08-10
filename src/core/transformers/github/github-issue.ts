import { getFragmentData } from "gql/github/codegen";
import { GetGithubIssuesQuery } from "gql/github/codegen/graphql";
import FragmentGitHubIssue from "gql/github/fragments/issue";
import Issue from "models/issue";
import extractParams from "utils/extract-params";

type IssueNode = NonNullable<
  NonNullable<
    NonNullable<
      NonNullable<GetGithubIssuesQuery["viewer"]["repositories"]["nodes"]>[0]
    >["issues"]["nodes"]
  >[0]
>;

const transformGithubIssue = (issue: IssueNode): Issue => {
  const fragmentData = getFragmentData(FragmentGitHubIssue, issue);

  const params = extractParams(
    fragmentData.url,
    "/:owner/:repo/issues/:issueId",
  );

  return {
    id: fragmentData.id,
    title: fragmentData.title,
    createdAt: fragmentData.createdAt,
    updatedAt: fragmentData.updatedAt,
    projectPath: `/${params?.owner}/${params?.repo}`,
    url: fragmentData.url,
  };
};

export default transformGithubIssue;
