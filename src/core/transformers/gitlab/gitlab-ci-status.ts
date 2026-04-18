import { PipelineStatusEnum } from "gql/gitlab/codegen/graphql";
import { CiState, CiStatus } from "models/ci-status";
import isAbsoluteUrl from "utils/is-absolute-url";

type HeadPipeline =
  | {
      status: PipelineStatusEnum;
      detailedStatus?: { detailsPath?: string | null } | null;
    }
  | null
  | undefined;

/**
 * Map GitLab's `headPipeline.status` to our cross-provider `CiStatus`.
 *
 *   SUCCESS                                            → Success
 *   FAILED                                             → Failure
 *   RUNNING | PENDING | CREATED | PREPARING |
 *   SCHEDULED | WAITING_FOR_CALLBACK | WAITING_FOR_RESOURCE | CANCELING
 *                                                      → Pending
 *   CANCELED                                           → Cancelled
 *   SKIPPED | MANUAL | null                            → None
 */
const transformGitlabCiStatus = (
  pipeline: HeadPipeline,
  domain: string,
): CiStatus => {
  if (!pipeline) return { state: CiState.None };

  // Build the pipeline URL defensively: strip any trailing slash from the
  // account's domain, ensure the detailsPath starts with "/", and verify
  // the composed URL actually parses as http(s).
  const rawDetailsPath = pipeline.detailedStatus?.detailsPath ?? undefined;
  let url: string | undefined;
  if (rawDetailsPath) {
    const trimmedDomain = domain.replace(/\/+$/, "");
    const normalizedPath = rawDetailsPath.startsWith("/")
      ? rawDetailsPath
      : `/${rawDetailsPath}`;
    const candidate = `${trimmedDomain}${normalizedPath}`;
    if (isAbsoluteUrl(candidate)) url = candidate;
  }

  switch (pipeline.status) {
    case PipelineStatusEnum.Success:
      return { state: CiState.Success, url };
    case PipelineStatusEnum.Failed:
      return { state: CiState.Failure, url };
    case PipelineStatusEnum.Running:
    case PipelineStatusEnum.Pending:
    case PipelineStatusEnum.Created:
    case PipelineStatusEnum.Preparing:
    case PipelineStatusEnum.Scheduled:
    case PipelineStatusEnum.WaitingForCallback:
    case PipelineStatusEnum.WaitingForResource:
    case PipelineStatusEnum.Canceling:
      return { state: CiState.Pending, url };
    case PipelineStatusEnum.Canceled:
      return { state: CiState.Cancelled, url };
    case PipelineStatusEnum.Skipped:
    case PipelineStatusEnum.Manual:
    default:
      return { state: CiState.None, url };
  }
};

export default transformGitlabCiStatus;
