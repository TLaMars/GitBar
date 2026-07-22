/* eslint-disable */
// @ts-nocheck

import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /**
   * A `AbuseReportID` is a global ID. It is encoded as a string.
   *
   * An example `AbuseReportID` is: `"gid://gitlab/AbuseReport/1"`.
   */
  AbuseReportID: { input: any; output: any };
  /**
   * A `AchievementsAchievementID` is a global ID. It is encoded as a string.
   *
   * An example `AchievementsAchievementID` is: `"gid://gitlab/Achievements::Achievement/1"`.
   */
  AchievementsAchievementID: { input: any; output: any };
  /**
   * A `AchievementsUserAchievementID` is a global ID. It is encoded as a string.
   *
   * An example `AchievementsUserAchievementID` is: `"gid://gitlab/Achievements::UserAchievement/1"`.
   */
  AchievementsUserAchievementID: { input: any; output: any };
  /**
   * A `AiCatalogBuiltInToolID` is a global ID. It is encoded as a string.
   *
   * An example `AiCatalogBuiltInToolID` is: `"gid://gitlab/Ai::Catalog::BuiltInTool/1"`.
   */
  AiCatalogBuiltInToolID: { input: any; output: any };
  /**
   * A `AiCatalogItemConsumerID` is a global ID. It is encoded as a string.
   *
   * An example `AiCatalogItemConsumerID` is: `"gid://gitlab/Ai::Catalog::ItemConsumer/1"`.
   */
  AiCatalogItemConsumerID: { input: any; output: any };
  /**
   * A `AiCatalogItemID` is a global ID. It is encoded as a string.
   *
   * An example `AiCatalogItemID` is: `"gid://gitlab/Ai::Catalog::Item/1"`.
   */
  AiCatalogItemID: { input: any; output: any };
  /**
   * A `AiCatalogItemVersionID` is a global ID. It is encoded as a string.
   *
   * An example `AiCatalogItemVersionID` is: `"gid://gitlab/Ai::Catalog::ItemVersion/1"`.
   */
  AiCatalogItemVersionID: { input: any; output: any };
  /**
   * A `AiCatalogMcpServerID` is a global ID. It is encoded as a string.
   *
   * An example `AiCatalogMcpServerID` is: `"gid://gitlab/Ai::Catalog::McpServer/1"`.
   */
  AiCatalogMcpServerID: { input: any; output: any };
  /**
   * Version that an AI catalog item consumer is pinned to.
   *
   * Represented as a string in the format `n.n.n`, where the major component is a
   * non-zero integer without leading zeros, and the minor and patch components are
   * non-negative integers without leading zeros. For example: `1.0.0`, `2.10.3`.
   *
   */
  AiCatalogPinnedVersion: { input: any; output: any };
  /**
   * A `AiConversationThreadID` is a global ID. It is encoded as a string.
   *
   * An example `AiConversationThreadID` is: `"gid://gitlab/Ai::Conversation::Thread/1"`.
   */
  AiConversationThreadID: { input: any; output: any };
  /**
   * A `AiDuoWorkflowsWorkflowID` is a global ID. It is encoded as a string.
   *
   * An example `AiDuoWorkflowsWorkflowID` is: `"gid://gitlab/Ai::DuoWorkflows::Workflow/1"`.
   */
  AiDuoWorkflowsWorkflowID: { input: any; output: any };
  /**
   * A `AiFlowTriggerID` is a global ID. It is encoded as a string.
   *
   * An example `AiFlowTriggerID` is: `"gid://gitlab/Ai::FlowTrigger/1"`.
   */
  AiFlowTriggerID: { input: any; output: any };
  /**
   * A `AiFoundationalChatAgentID` is a global ID. It is encoded as a string.
   *
   * An example `AiFoundationalChatAgentID` is: `"gid://gitlab/Ai::FoundationalChatAgent/1"`.
   */
  AiFoundationalChatAgentID: { input: any; output: any };
  /**
   * A `AiModelID` is a global ID. It is encoded as a string.
   *
   * An example `AiModelID` is: `"gid://gitlab/Ai::Model/1"`.
   */
  AiModelID: { input: any; output: any };
  /**
   * A `AiSelfHostedModelID` is a global ID. It is encoded as a string.
   *
   * An example `AiSelfHostedModelID` is: `"gid://gitlab/Ai::SelfHostedModel/1"`.
   */
  AiSelfHostedModelID: { input: any; output: any };
  /**
   * A `AlertManagementAlertID` is a global ID. It is encoded as a string.
   *
   * An example `AlertManagementAlertID` is: `"gid://gitlab/AlertManagement::Alert/1"`.
   */
  AlertManagementAlertID: { input: any; output: any };
  /**
   * A `AlertManagementHttpIntegrationID` is a global ID. It is encoded as a string.
   *
   * An example `AlertManagementHttpIntegrationID` is: `"gid://gitlab/AlertManagement::HttpIntegration/1"`.
   */
  AlertManagementHttpIntegrationID: { input: any; output: any };
  /**
   * A `AnalyticsCustomDashboardsDashboardID` is a global ID. It is encoded as a string.
   *
   * An example `AnalyticsCustomDashboardsDashboardID` is: `"gid://gitlab/Analytics::CustomDashboards::Dashboard/1"`.
   */
  AnalyticsCustomDashboardsDashboardID: { input: any; output: any };
  /**
   * A `AnalyticsCycleAnalyticsStageID` is a global ID. It is encoded as a string.
   *
   * An example `AnalyticsCycleAnalyticsStageID` is: `"gid://gitlab/Analytics::CycleAnalytics::Stage/1"`.
   */
  AnalyticsCycleAnalyticsStageID: { input: any; output: any };
  /**
   * A `AnalyticsCycleAnalyticsValueStreamID` is a global ID. It is encoded as a string.
   *
   * An example `AnalyticsCycleAnalyticsValueStreamID` is: `"gid://gitlab/Analytics::CycleAnalytics::ValueStream/1"`.
   */
  AnalyticsCycleAnalyticsValueStreamID: { input: any; output: any };
  /**
   * A `AnalyticsDevopsAdoptionEnabledNamespaceID` is a global ID. It is encoded as a string.
   *
   * An example `AnalyticsDevopsAdoptionEnabledNamespaceID` is: `"gid://gitlab/Analytics::DevopsAdoption::EnabledNamespace/1"`.
   */
  AnalyticsDevopsAdoptionEnabledNamespaceID: { input: any; output: any };
  /**
   * A `AppSecFuzzingCoverageCorpusID` is a global ID. It is encoded as a string.
   *
   * An example `AppSecFuzzingCoverageCorpusID` is: `"gid://gitlab/AppSec::Fuzzing::Coverage::Corpus/1"`.
   */
  AppSecFuzzingCoverageCorpusID: { input: any; output: any };
  /**
   * A `ApprovalProjectRuleID` is a global ID. It is encoded as a string.
   *
   * An example `ApprovalProjectRuleID` is: `"gid://gitlab/ApprovalProjectRule/1"`.
   */
  ApprovalProjectRuleID: { input: any; output: any };
  /**
   * A `AuditEventsAmazonS3ConfigurationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsAmazonS3ConfigurationID` is: `"gid://gitlab/AuditEvents::AmazonS3Configuration/1"`.
   */
  AuditEventsAmazonS3ConfigurationID: { input: any; output: any };
  /**
   * A `AuditEventsExternalAuditEventDestinationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsExternalAuditEventDestinationID` is: `"gid://gitlab/AuditEvents::ExternalAuditEventDestination/1"`.
   */
  AuditEventsExternalAuditEventDestinationID: { input: any; output: any };
  /**
   * A `AuditEventsGoogleCloudLoggingConfigurationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsGoogleCloudLoggingConfigurationID` is: `"gid://gitlab/AuditEvents::GoogleCloudLoggingConfiguration/1"`.
   */
  AuditEventsGoogleCloudLoggingConfigurationID: { input: any; output: any };
  /**
   * A `AuditEventsGroupExternalStreamingDestinationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsGroupExternalStreamingDestinationID` is: `"gid://gitlab/AuditEvents::Group::ExternalStreamingDestination/1"`.
   */
  AuditEventsGroupExternalStreamingDestinationID: { input: any; output: any };
  /**
   * A `AuditEventsGroupNamespaceFilterID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsGroupNamespaceFilterID` is: `"gid://gitlab/AuditEvents::Group::NamespaceFilter/1"`.
   */
  AuditEventsGroupNamespaceFilterID: { input: any; output: any };
  /**
   * A `AuditEventsInstanceAmazonS3ConfigurationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsInstanceAmazonS3ConfigurationID` is: `"gid://gitlab/AuditEvents::Instance::AmazonS3Configuration/1"`.
   */
  AuditEventsInstanceAmazonS3ConfigurationID: { input: any; output: any };
  /**
   * A `AuditEventsInstanceExternalAuditEventDestinationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsInstanceExternalAuditEventDestinationID` is: `"gid://gitlab/AuditEvents::InstanceExternalAuditEventDestination/1"`.
   */
  AuditEventsInstanceExternalAuditEventDestinationID: {
    input: any;
    output: any;
  };
  /**
   * A `AuditEventsInstanceExternalStreamingDestinationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsInstanceExternalStreamingDestinationID` is: `"gid://gitlab/AuditEvents::Instance::ExternalStreamingDestination/1"`.
   */
  AuditEventsInstanceExternalStreamingDestinationID: {
    input: any;
    output: any;
  };
  /**
   * A `AuditEventsInstanceGoogleCloudLoggingConfigurationID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsInstanceGoogleCloudLoggingConfigurationID` is: `"gid://gitlab/AuditEvents::Instance::GoogleCloudLoggingConfiguration/1"`.
   */
  AuditEventsInstanceGoogleCloudLoggingConfigurationID: {
    input: any;
    output: any;
  };
  /**
   * A `AuditEventsInstanceNamespaceFilterID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsInstanceNamespaceFilterID` is: `"gid://gitlab/AuditEvents::Instance::NamespaceFilter/1"`.
   */
  AuditEventsInstanceNamespaceFilterID: { input: any; output: any };
  /**
   * A `AuditEventsStreamingHTTPNamespaceFilterID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsStreamingHTTPNamespaceFilterID` is: `"gid://gitlab/AuditEvents::Streaming::HTTP::NamespaceFilter/1"`.
   */
  AuditEventsStreamingHTTPNamespaceFilterID: { input: any; output: any };
  /**
   * A `AuditEventsStreamingHeaderID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsStreamingHeaderID` is: `"gid://gitlab/AuditEvents::Streaming::Header/1"`.
   */
  AuditEventsStreamingHeaderID: { input: any; output: any };
  /**
   * A `AuditEventsStreamingInstanceHeaderID` is a global ID. It is encoded as a string.
   *
   * An example `AuditEventsStreamingInstanceHeaderID` is: `"gid://gitlab/AuditEvents::Streaming::InstanceHeader/1"`.
   */
  AuditEventsStreamingInstanceHeaderID: { input: any; output: any };
  /**
   * A `AuthzLdapAdminRoleLinkID` is a global ID. It is encoded as a string.
   *
   * An example `AuthzLdapAdminRoleLinkID` is: `"gid://gitlab/Authz::LdapAdminRoleLink/1"`.
   */
  AuthzLdapAdminRoleLinkID: { input: any; output: any };
  /**
   * A `AwardableID` is a global ID. It is encoded as a string.
   *
   * An example `AwardableID` is: `"gid://gitlab/Awardable/1"`.
   */
  AwardableID: { input: any; output: any };
  /** Represents non-fractional signed whole numeric values. Since the value may exceed the size of a 32-bit integer, it's encoded as a string. */
  BigInt: { input: any; output: any };
  /**
   * A `BoardID` is a global ID. It is encoded as a string.
   *
   * An example `BoardID` is: `"gid://gitlab/Board/1"`.
   */
  BoardID: { input: any; output: any };
  /**
   * A `BoardsEpicBoardID` is a global ID. It is encoded as a string.
   *
   * An example `BoardsEpicBoardID` is: `"gid://gitlab/Boards::EpicBoard/1"`.
   */
  BoardsEpicBoardID: { input: any; output: any };
  /**
   * A `BoardsEpicListID` is a global ID. It is encoded as a string.
   *
   * An example `BoardsEpicListID` is: `"gid://gitlab/Boards::EpicList/1"`.
   */
  BoardsEpicListID: { input: any; output: any };
  /**
   * A `CdApplicationFlowDefinitionID` is a global ID. It is encoded as a string.
   *
   * An example `CdApplicationFlowDefinitionID` is: `"gid://gitlab/Cd::ApplicationFlowDefinition/1"`.
   */
  CdApplicationFlowDefinitionID: { input: any; output: any };
  /**
   * A `CdApplicationID` is a global ID. It is encoded as a string.
   *
   * An example `CdApplicationID` is: `"gid://gitlab/Cd::Application/1"`.
   */
  CdApplicationID: { input: any; output: any };
  /**
   * A `CdApplicationLinkID` is a global ID. It is encoded as a string.
   *
   * An example `CdApplicationLinkID` is: `"gid://gitlab/Cd::ApplicationLink/1"`.
   */
  CdApplicationLinkID: { input: any; output: any };
  /**
   * A `CdArtifactSourceID` is a global ID. It is encoded as a string.
   *
   * An example `CdArtifactSourceID` is: `"gid://gitlab/Cd::ArtifactSource/1"`.
   */
  CdArtifactSourceID: { input: any; output: any };
  /**
   * A `CdDeploymentID` is a global ID. It is encoded as a string.
   *
   * An example `CdDeploymentID` is: `"gid://gitlab/Cd::Deployment/1"`.
   */
  CdDeploymentID: { input: any; output: any };
  /**
   * A `CdDeploymentTransitionID` is a global ID. It is encoded as a string.
   *
   * An example `CdDeploymentTransitionID` is: `"gid://gitlab/Cd::DeploymentTransition/1"`.
   */
  CdDeploymentTransitionID: { input: any; output: any };
  /**
   * A `CdEnvironmentDriverBindingID` is a global ID. It is encoded as a string.
   *
   * An example `CdEnvironmentDriverBindingID` is: `"gid://gitlab/Cd::EnvironmentDriverBinding/1"`.
   */
  CdEnvironmentDriverBindingID: { input: any; output: any };
  /**
   * A `CdEnvironmentID` is a global ID. It is encoded as a string.
   *
   * An example `CdEnvironmentID` is: `"gid://gitlab/Cd::Environment/1"`.
   */
  CdEnvironmentID: { input: any; output: any };
  /**
   * A `CdRolloutEnvironmentID` is a global ID. It is encoded as a string.
   *
   * An example `CdRolloutEnvironmentID` is: `"gid://gitlab/Cd::RolloutEnvironment/1"`.
   */
  CdRolloutEnvironmentID: { input: any; output: any };
  /**
   * A `CdRolloutID` is a global ID. It is encoded as a string.
   *
   * An example `CdRolloutID` is: `"gid://gitlab/Cd::Rollout/1"`.
   */
  CdRolloutID: { input: any; output: any };
  /**
   * A `CdRolloutTransitionID` is a global ID. It is encoded as a string.
   *
   * An example `CdRolloutTransitionID` is: `"gid://gitlab/Cd::RolloutTransition/1"`.
   */
  CdRolloutTransitionID: { input: any; output: any };
  /**
   * A `CdServiceEnvironmentHealthID` is a global ID. It is encoded as a string.
   *
   * An example `CdServiceEnvironmentHealthID` is: `"gid://gitlab/Cd::ServiceEnvironmentHealth/1"`.
   */
  CdServiceEnvironmentHealthID: { input: any; output: any };
  /**
   * A `CdServiceID` is a global ID. It is encoded as a string.
   *
   * An example `CdServiceID` is: `"gid://gitlab/Cd::Service/1"`.
   */
  CdServiceID: { input: any; output: any };
  /**
   * A `CdVersionID` is a global ID. It is encoded as a string.
   *
   * An example `CdVersionID` is: `"gid://gitlab/Cd::Version/1"`.
   */
  CdVersionID: { input: any; output: any };
  /**
   * A `CdVersionSetEntryID` is a global ID. It is encoded as a string.
   *
   * An example `CdVersionSetEntryID` is: `"gid://gitlab/Cd::VersionSetEntry/1"`.
   */
  CdVersionSetEntryID: { input: any; output: any };
  /**
   * A `CdVersionSetID` is a global ID. It is encoded as a string.
   *
   * An example `CdVersionSetID` is: `"gid://gitlab/Cd::VersionSet/1"`.
   */
  CdVersionSetID: { input: any; output: any };
  /**
   * A `CiBuildID` is a global ID. It is encoded as a string.
   *
   * An example `CiBuildID` is: `"gid://gitlab/Ci::Build/1"`.
   */
  CiBuildID: { input: any; output: any };
  /**
   * A `CiCatalogResourceID` is a global ID. It is encoded as a string.
   *
   * An example `CiCatalogResourceID` is: `"gid://gitlab/Ci::Catalog::Resource/1"`.
   */
  CiCatalogResourceID: { input: any; output: any };
  /**
   * A `CiCatalogResourcesComponentID` is a global ID. It is encoded as a string.
   *
   * An example `CiCatalogResourcesComponentID` is: `"gid://gitlab/Ci::Catalog::Resources::Component/1"`.
   */
  CiCatalogResourcesComponentID: { input: any; output: any };
  /**
   * A `CiCatalogResourcesVersionID` is a global ID. It is encoded as a string.
   *
   * An example `CiCatalogResourcesVersionID` is: `"gid://gitlab/Ci::Catalog::Resources::Version/1"`.
   */
  CiCatalogResourcesVersionID: { input: any; output: any };
  /** Value for a CI input. Can be a string, array, number, or boolean. */
  CiInputsValue: { input: any; output: any };
  /**
   * A `CiJobArtifactID` is a global ID. It is encoded as a string.
   *
   * An example `CiJobArtifactID` is: `"gid://gitlab/Ci::JobArtifact/1"`.
   */
  CiJobArtifactID: { input: any; output: any };
  /**
   * A `CiPipelineID` is a global ID. It is encoded as a string.
   *
   * An example `CiPipelineID` is: `"gid://gitlab/Ci::Pipeline/1"`.
   */
  CiPipelineID: { input: any; output: any };
  /**
   * A `CiPipelineScheduleID` is a global ID. It is encoded as a string.
   *
   * An example `CiPipelineScheduleID` is: `"gid://gitlab/Ci::PipelineSchedule/1"`.
   */
  CiPipelineScheduleID: { input: any; output: any };
  /**
   * A `CiPipelineScheduleVariableID` is a global ID. It is encoded as a string.
   *
   * An example `CiPipelineScheduleVariableID` is: `"gid://gitlab/Ci::PipelineScheduleVariable/1"`.
   */
  CiPipelineScheduleVariableID: { input: any; output: any };
  /**
   * A `CiProcessableID` is a global ID. It is encoded as a string.
   *
   * An example `CiProcessableID` is: `"gid://gitlab/Ci::Processable/1"`.
   */
  CiProcessableID: { input: any; output: any };
  /**
   * A `CiRunnerID` is a global ID. It is encoded as a string.
   *
   * An example `CiRunnerID` is: `"gid://gitlab/Ci::Runner/1"`.
   */
  CiRunnerID: { input: any; output: any };
  /**
   * A `CiRunnerManagerID` is a global ID. It is encoded as a string.
   *
   * An example `CiRunnerManagerID` is: `"gid://gitlab/Ci::RunnerManager/1"`.
   */
  CiRunnerManagerID: { input: any; output: any };
  /**
   * A `CiStageID` is a global ID. It is encoded as a string.
   *
   * An example `CiStageID` is: `"gid://gitlab/Ci::Stage/1"`.
   */
  CiStageID: { input: any; output: any };
  /**
   * A `CiSubscriptionsProjectID` is a global ID. It is encoded as a string.
   *
   * An example `CiSubscriptionsProjectID` is: `"gid://gitlab/Ci::Subscriptions::Project/1"`.
   */
  CiSubscriptionsProjectID: { input: any; output: any };
  /**
   * A `CiTriggerID` is a global ID. It is encoded as a string.
   *
   * An example `CiTriggerID` is: `"gid://gitlab/Ci::Trigger/1"`.
   */
  CiTriggerID: { input: any; output: any };
  /**
   * A `ClustersAgentID` is a global ID. It is encoded as a string.
   *
   * An example `ClustersAgentID` is: `"gid://gitlab/Clusters::Agent/1"`.
   */
  ClustersAgentID: { input: any; output: any };
  /**
   * A `ClustersAgentTokenID` is a global ID. It is encoded as a string.
   *
   * An example `ClustersAgentTokenID` is: `"gid://gitlab/Clusters::AgentToken/1"`.
   */
  ClustersAgentTokenID: { input: any; output: any };
  /**
   * A `ClustersAgentsUrlConfigurationID` is a global ID. It is encoded as a string.
   *
   * An example `ClustersAgentsUrlConfigurationID` is: `"gid://gitlab/Clusters::Agents::UrlConfiguration/1"`.
   */
  ClustersAgentsUrlConfigurationID: { input: any; output: any };
  /**
   * A `ClustersClusterID` is a global ID. It is encoded as a string.
   *
   * An example `ClustersClusterID` is: `"gid://gitlab/Clusters::Cluster/1"`.
   */
  ClustersClusterID: { input: any; output: any };
  /**
   * Color represented as a hex code or named color.
   *
   * For example: `#fefefe`.
   *
   */
  Color: { input: any; output: any };
  /**
   * A `ComplianceManagementComplianceFrameworkComplianceRequirementID` is a global ID. It is encoded as a string.
   *
   * An example `ComplianceManagementComplianceFrameworkComplianceRequirementID` is: `"gid://gitlab/ComplianceManagement::ComplianceFramework::ComplianceRequirement/1"`.
   */
  ComplianceManagementComplianceFrameworkComplianceRequirementID: {
    input: any;
    output: any;
  };
  /**
   * A `ComplianceManagementComplianceFrameworkComplianceRequirementsControlID` is a global ID. It is encoded as a string.
   *
   * An example `ComplianceManagementComplianceFrameworkComplianceRequirementsControlID` is: `"gid://gitlab/ComplianceManagement::ComplianceFramework::ComplianceRequirementsControl/1"`.
   */
  ComplianceManagementComplianceFrameworkComplianceRequirementsControlID: {
    input: any;
    output: any;
  };
  /**
   * A `ComplianceManagementFrameworkID` is a global ID. It is encoded as a string.
   *
   * An example `ComplianceManagementFrameworkID` is: `"gid://gitlab/ComplianceManagement::Framework/1"`.
   */
  ComplianceManagementFrameworkID: { input: any; output: any };
  /**
   * A `ComplianceManagementFrameworksTemplateRegistryTemplateID` is a global ID. It is encoded as a string.
   *
   * An example `ComplianceManagementFrameworksTemplateRegistryTemplateID` is: `"gid://gitlab/ComplianceManagement::Frameworks::TemplateRegistry::Template/1"`.
   */
  ComplianceManagementFrameworksTemplateRegistryTemplateID: {
    input: any;
    output: any;
  };
  /**
   * A `ComplianceManagementProjectsComplianceViolationID` is a global ID. It is encoded as a string.
   *
   * An example `ComplianceManagementProjectsComplianceViolationID` is: `"gid://gitlab/ComplianceManagement::Projects::ComplianceViolation/1"`.
   */
  ComplianceManagementProjectsComplianceViolationID: {
    input: any;
    output: any;
  };
  /**
   * A `ContainerRegistryProtectionRuleID` is a global ID. It is encoded as a string.
   *
   * An example `ContainerRegistryProtectionRuleID` is: `"gid://gitlab/ContainerRegistry::Protection::Rule/1"`.
   */
  ContainerRegistryProtectionRuleID: { input: any; output: any };
  /**
   * A `ContainerRegistryProtectionTagRuleID` is a global ID. It is encoded as a string.
   *
   * An example `ContainerRegistryProtectionTagRuleID` is: `"gid://gitlab/ContainerRegistry::Protection::TagRule/1"`.
   */
  ContainerRegistryProtectionTagRuleID: { input: any; output: any };
  /**
   * A `ContainerRepositoryID` is a global ID. It is encoded as a string.
   *
   * An example `ContainerRepositoryID` is: `"gid://gitlab/ContainerRepository/1"`.
   */
  ContainerRepositoryID: { input: any; output: any };
  /**
   * A `CustomEmojiID` is a global ID. It is encoded as a string.
   *
   * An example `CustomEmojiID` is: `"gid://gitlab/CustomEmoji/1"`.
   */
  CustomEmojiID: { input: any; output: any };
  /**
   * A `CustomerRelationsContactID` is a global ID. It is encoded as a string.
   *
   * An example `CustomerRelationsContactID` is: `"gid://gitlab/CustomerRelations::Contact/1"`.
   */
  CustomerRelationsContactID: { input: any; output: any };
  /**
   * A `CustomerRelationsOrganizationID` is a global ID. It is encoded as a string.
   *
   * An example `CustomerRelationsOrganizationID` is: `"gid://gitlab/CustomerRelations::Organization/1"`.
   */
  CustomerRelationsOrganizationID: { input: any; output: any };
  /**
   * A `DastProfileID` is a global ID. It is encoded as a string.
   *
   * An example `DastProfileID` is: `"gid://gitlab/Dast::Profile/1"`.
   */
  DastProfileID: { input: any; output: any };
  /**
   * A `DastProfileScheduleID` is a global ID. It is encoded as a string.
   *
   * An example `DastProfileScheduleID` is: `"gid://gitlab/Dast::ProfileSchedule/1"`.
   */
  DastProfileScheduleID: { input: any; output: any };
  /**
   * A `DastScannerProfileID` is a global ID. It is encoded as a string.
   *
   * An example `DastScannerProfileID` is: `"gid://gitlab/DastScannerProfile/1"`.
   */
  DastScannerProfileID: { input: any; output: any };
  /**
   * A `DastSiteProfileID` is a global ID. It is encoded as a string.
   *
   * An example `DastSiteProfileID` is: `"gid://gitlab/DastSiteProfile/1"`.
   */
  DastSiteProfileID: { input: any; output: any };
  /**
   * A `DastSiteTokenID` is a global ID. It is encoded as a string.
   *
   * An example `DastSiteTokenID` is: `"gid://gitlab/DastSiteToken/1"`.
   */
  DastSiteTokenID: { input: any; output: any };
  /**
   * A `DastSiteValidationID` is a global ID. It is encoded as a string.
   *
   * An example `DastSiteValidationID` is: `"gid://gitlab/DastSiteValidation/1"`.
   */
  DastSiteValidationID: { input: any; output: any };
  /** Date represented in ISO 8601 */
  Date: { input: any; output: any };
  /**
   * A `DependencyProxyManifestID` is a global ID. It is encoded as a string.
   *
   * An example `DependencyProxyManifestID` is: `"gid://gitlab/DependencyProxy::Manifest/1"`.
   */
  DependencyProxyManifestID: { input: any; output: any };
  /**
   * A `DeployKeyID` is a global ID. It is encoded as a string.
   *
   * An example `DeployKeyID` is: `"gid://gitlab/DeployKey/1"`.
   */
  DeployKeyID: { input: any; output: any };
  /**
   * A `DeploymentID` is a global ID. It is encoded as a string.
   *
   * An example `DeploymentID` is: `"gid://gitlab/Deployment/1"`.
   */
  DeploymentID: { input: any; output: any };
  /**
   * A `DescriptionVersionID` is a global ID. It is encoded as a string.
   *
   * An example `DescriptionVersionID` is: `"gid://gitlab/DescriptionVersion/1"`.
   */
  DescriptionVersionID: { input: any; output: any };
  /**
   * A `DesignManagementDesignAtVersionID` is a global ID. It is encoded as a string.
   *
   * An example `DesignManagementDesignAtVersionID` is: `"gid://gitlab/DesignManagement::DesignAtVersion/1"`.
   */
  DesignManagementDesignAtVersionID: { input: any; output: any };
  /**
   * A `DesignManagementDesignID` is a global ID. It is encoded as a string.
   *
   * An example `DesignManagementDesignID` is: `"gid://gitlab/DesignManagement::Design/1"`.
   */
  DesignManagementDesignID: { input: any; output: any };
  /**
   * A `DesignManagementVersionID` is a global ID. It is encoded as a string.
   *
   * An example `DesignManagementVersionID` is: `"gid://gitlab/DesignManagement::Version/1"`.
   */
  DesignManagementVersionID: { input: any; output: any };
  /**
   * A `DiffNoteID` is a global ID. It is encoded as a string.
   *
   * An example `DiffNoteID` is: `"gid://gitlab/DiffNote/1"`.
   */
  DiffNoteID: { input: any; output: any };
  /**
   * A `DiscussionID` is a global ID. It is encoded as a string.
   *
   * An example `DiscussionID` is: `"gid://gitlab/Discussion/1"`.
   */
  DiscussionID: { input: any; output: any };
  /**
   * Duration between two instants, represented as a fractional number of seconds.
   *
   * For example: 12.3334
   *
   */
  Duration: { input: any; output: any };
  /**
   * A `EmailID` is a global ID. It is encoded as a string.
   *
   * An example `EmailID` is: `"gid://gitlab/Email/1"`.
   */
  EmailID: { input: any; output: any };
  /**
   * A `EnvironmentID` is a global ID. It is encoded as a string.
   *
   * An example `EnvironmentID` is: `"gid://gitlab/Environment/1"`.
   */
  EnvironmentID: { input: any; output: any };
  /**
   * A `EpicID` is a global ID. It is encoded as a string.
   *
   * An example `EpicID` is: `"gid://gitlab/Epic/1"`.
   */
  EpicID: { input: any; output: any };
  /**
   * A `EpicTreeSortingID` is a global ID. It is encoded as a string.
   *
   * An example `EpicTreeSortingID` is: `"gid://gitlab/EpicTreeSorting/1"`.
   */
  EpicTreeSortingID: { input: any; output: any };
  /**
   * A `GeoAbuseReportUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoAbuseReportUploadRegistryID` is: `"gid://gitlab/Geo::AbuseReportUploadRegistry/1"`.
   */
  GeoAbuseReportUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoAchievementUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoAchievementUploadRegistryID` is: `"gid://gitlab/Geo::AchievementUploadRegistry/1"`.
   */
  GeoAchievementUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoAiVectorizableFileUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoAiVectorizableFileUploadRegistryID` is: `"gid://gitlab/Geo::AiVectorizableFileUploadRegistry/1"`.
   */
  GeoAiVectorizableFileUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoAlertManagementMetricImageUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoAlertManagementMetricImageUploadRegistryID` is: `"gid://gitlab/Geo::AlertManagementMetricImageUploadRegistry/1"`.
   */
  GeoAlertManagementMetricImageUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoAppearanceUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoAppearanceUploadRegistryID` is: `"gid://gitlab/Geo::AppearanceUploadRegistry/1"`.
   */
  GeoAppearanceUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoBaseRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoBaseRegistryID` is: `"gid://gitlab/Geo::BaseRegistry/1"`.
   */
  GeoBaseRegistryID: { input: any; output: any };
  /**
   * A `GeoBulkImportExportUploadUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoBulkImportExportUploadUploadRegistryID` is: `"gid://gitlab/Geo::BulkImportExportUploadUploadRegistry/1"`.
   */
  GeoBulkImportExportUploadUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoCiSecureFileRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoCiSecureFileRegistryID` is: `"gid://gitlab/Geo::CiSecureFileRegistry/1"`.
   */
  GeoCiSecureFileRegistryID: { input: any; output: any };
  /**
   * A `GeoContainerRepositoryRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoContainerRepositoryRegistryID` is: `"gid://gitlab/Geo::ContainerRepositoryRegistry/1"`.
   */
  GeoContainerRepositoryRegistryID: { input: any; output: any };
  /**
   * A `GeoDependencyListExportPartUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoDependencyListExportPartUploadRegistryID` is: `"gid://gitlab/Geo::DependencyListExportPartUploadRegistry/1"`.
   */
  GeoDependencyListExportPartUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoDependencyListExportUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoDependencyListExportUploadRegistryID` is: `"gid://gitlab/Geo::DependencyListExportUploadRegistry/1"`.
   */
  GeoDependencyListExportUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoDependencyProxyBlobRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoDependencyProxyBlobRegistryID` is: `"gid://gitlab/Geo::DependencyProxyBlobRegistry/1"`.
   */
  GeoDependencyProxyBlobRegistryID: { input: any; output: any };
  /**
   * A `GeoDependencyProxyManifestRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoDependencyProxyManifestRegistryID` is: `"gid://gitlab/Geo::DependencyProxyManifestRegistry/1"`.
   */
  GeoDependencyProxyManifestRegistryID: { input: any; output: any };
  /**
   * A `GeoDesignManagementActionUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoDesignManagementActionUploadRegistryID` is: `"gid://gitlab/Geo::DesignManagementActionUploadRegistry/1"`.
   */
  GeoDesignManagementActionUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoDesignManagementRepositoryRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoDesignManagementRepositoryRegistryID` is: `"gid://gitlab/Geo::DesignManagementRepositoryRegistry/1"`.
   */
  GeoDesignManagementRepositoryRegistryID: { input: any; output: any };
  /**
   * A `GeoGroupUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoGroupUploadRegistryID` is: `"gid://gitlab/Geo::GroupUploadRegistry/1"`.
   */
  GeoGroupUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoGroupWikiRepositoryRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoGroupWikiRepositoryRegistryID` is: `"gid://gitlab/Geo::GroupWikiRepositoryRegistry/1"`.
   */
  GeoGroupWikiRepositoryRegistryID: { input: any; output: any };
  /**
   * A `GeoImportExportUploadUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoImportExportUploadUploadRegistryID` is: `"gid://gitlab/Geo::ImportExportUploadUploadRegistry/1"`.
   */
  GeoImportExportUploadUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoIssuableMetricImageUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoIssuableMetricImageUploadRegistryID` is: `"gid://gitlab/Geo::IssuableMetricImageUploadRegistry/1"`.
   */
  GeoIssuableMetricImageUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoJobArtifactRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoJobArtifactRegistryID` is: `"gid://gitlab/Geo::JobArtifactRegistry/1"`.
   */
  GeoJobArtifactRegistryID: { input: any; output: any };
  /**
   * A `GeoLfsObjectRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoLfsObjectRegistryID` is: `"gid://gitlab/Geo::LfsObjectRegistry/1"`.
   */
  GeoLfsObjectRegistryID: { input: any; output: any };
  /**
   * A `GeoMergeRequestDiffRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoMergeRequestDiffRegistryID` is: `"gid://gitlab/Geo::MergeRequestDiffRegistry/1"`.
   */
  GeoMergeRequestDiffRegistryID: { input: any; output: any };
  /**
   * A `GeoOrganizationDetailUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoOrganizationDetailUploadRegistryID` is: `"gid://gitlab/Geo::OrganizationDetailUploadRegistry/1"`.
   */
  GeoOrganizationDetailUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoPackageFileRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoPackageFileRegistryID` is: `"gid://gitlab/Geo::PackageFileRegistry/1"`.
   */
  GeoPackageFileRegistryID: { input: any; output: any };
  /**
   * A `GeoPackagesDebianProjectComponentFileRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoPackagesDebianProjectComponentFileRegistryID` is: `"gid://gitlab/Geo::PackagesDebianProjectComponentFileRegistry/1"`.
   */
  GeoPackagesDebianProjectComponentFileRegistryID: { input: any; output: any };
  /**
   * A `GeoPackagesHelmMetadataCacheRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoPackagesHelmMetadataCacheRegistryID` is: `"gid://gitlab/Geo::PackagesHelmMetadataCacheRegistry/1"`.
   */
  GeoPackagesHelmMetadataCacheRegistryID: { input: any; output: any };
  /**
   * A `GeoPackagesNugetSymbolRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoPackagesNugetSymbolRegistryID` is: `"gid://gitlab/Geo::PackagesNugetSymbolRegistry/1"`.
   */
  GeoPackagesNugetSymbolRegistryID: { input: any; output: any };
  /**
   * A `GeoPagesDeploymentRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoPagesDeploymentRegistryID` is: `"gid://gitlab/Geo::PagesDeploymentRegistry/1"`.
   */
  GeoPagesDeploymentRegistryID: { input: any; output: any };
  /**
   * A `GeoPersonalSnippetUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoPersonalSnippetUploadRegistryID` is: `"gid://gitlab/Geo::PersonalSnippetUploadRegistry/1"`.
   */
  GeoPersonalSnippetUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoPipelineArtifactRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoPipelineArtifactRegistryID` is: `"gid://gitlab/Geo::PipelineArtifactRegistry/1"`.
   */
  GeoPipelineArtifactRegistryID: { input: any; output: any };
  /**
   * A `GeoProjectImportExportRelationExportUploadUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoProjectImportExportRelationExportUploadUploadRegistryID` is: `"gid://gitlab/Geo::ProjectImportExportRelationExportUploadUploadRegistry/1"`.
   */
  GeoProjectImportExportRelationExportUploadUploadRegistryID: {
    input: any;
    output: any;
  };
  /**
   * A `GeoProjectRepositoryRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoProjectRepositoryRegistryID` is: `"gid://gitlab/Geo::ProjectRepositoryRegistry/1"`.
   */
  GeoProjectRepositoryRegistryID: { input: any; output: any };
  /**
   * A `GeoProjectTopicUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoProjectTopicUploadRegistryID` is: `"gid://gitlab/Geo::ProjectTopicUploadRegistry/1"`.
   */
  GeoProjectTopicUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoProjectUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoProjectUploadRegistryID` is: `"gid://gitlab/Geo::ProjectUploadRegistry/1"`.
   */
  GeoProjectUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoProjectWikiRepositoryRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoProjectWikiRepositoryRegistryID` is: `"gid://gitlab/Geo::ProjectWikiRepositoryRegistry/1"`.
   */
  GeoProjectWikiRepositoryRegistryID: { input: any; output: any };
  /**
   * A `GeoSnippetRepositoryRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoSnippetRepositoryRegistryID` is: `"gid://gitlab/Geo::SnippetRepositoryRegistry/1"`.
   */
  GeoSnippetRepositoryRegistryID: { input: any; output: any };
  /**
   * A `GeoTerraformStateVersionRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoTerraformStateVersionRegistryID` is: `"gid://gitlab/Geo::TerraformStateVersionRegistry/1"`.
   */
  GeoTerraformStateVersionRegistryID: { input: any; output: any };
  /**
   * A `GeoUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoUploadRegistryID` is: `"gid://gitlab/Geo::UploadRegistry/1"`.
   */
  GeoUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoUserPermissionExportUploadUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoUserPermissionExportUploadUploadRegistryID` is: `"gid://gitlab/Geo::UserPermissionExportUploadUploadRegistry/1"`.
   */
  GeoUserPermissionExportUploadUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoUserUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoUserUploadRegistryID` is: `"gid://gitlab/Geo::UserUploadRegistry/1"`.
   */
  GeoUserUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoVulnerabilityArchiveExportUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoVulnerabilityArchiveExportUploadRegistryID` is: `"gid://gitlab/Geo::VulnerabilityArchiveExportUploadRegistry/1"`.
   */
  GeoVulnerabilityArchiveExportUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoVulnerabilityExportPartUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoVulnerabilityExportPartUploadRegistryID` is: `"gid://gitlab/Geo::VulnerabilityExportPartUploadRegistry/1"`.
   */
  GeoVulnerabilityExportPartUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoVulnerabilityExportUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoVulnerabilityExportUploadRegistryID` is: `"gid://gitlab/Geo::VulnerabilityExportUploadRegistry/1"`.
   */
  GeoVulnerabilityExportUploadRegistryID: { input: any; output: any };
  /**
   * A `GeoVulnerabilityRemediationUploadRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `GeoVulnerabilityRemediationUploadRegistryID` is: `"gid://gitlab/Geo::VulnerabilityRemediationUploadRegistry/1"`.
   */
  GeoVulnerabilityRemediationUploadRegistryID: { input: any; output: any };
  /**
   * A `GitlabErrorTrackingDetailedErrorID` is a global ID. It is encoded as a string.
   *
   * An example `GitlabErrorTrackingDetailedErrorID` is: `"gid://gitlab/Gitlab::ErrorTracking::DetailedError/1"`.
   */
  GitlabErrorTrackingDetailedErrorID: { input: any; output: any };
  /**
   * A `GitlabSubscriptionsAddOnPurchaseID` is a global ID. It is encoded as a string.
   *
   * An example `GitlabSubscriptionsAddOnPurchaseID` is: `"gid://gitlab/GitlabSubscriptions::AddOnPurchase/1"`.
   */
  GitlabSubscriptionsAddOnPurchaseID: { input: any; output: any };
  /**
   * A global identifier.
   *
   * A global identifier represents an object uniquely across the application.
   * An example of a global identifier is `"gid://gitlab/User/1"`.
   *
   * `gid://gitlab` stands for the root name.
   * `User` is the name of the ActiveRecord class of the record.
   * `1` is the record id as per the id in the db table.
   *
   * Global identifiers are encoded as strings.
   *
   */
  GlobalID: { input: any; output: any };
  /** Represents a Google Cloud Image for GKE */
  GoogleCloudImage: { input: any; output: any };
  /** Represents a Google Cloud Compute machine type */
  GoogleCloudMachineType: { input: any; output: any };
  /** Represents a Google Cloud Compute project */
  GoogleCloudProject: { input: any; output: any };
  /** Represents a Google Cloud Compute region */
  GoogleCloudRegion: { input: any; output: any };
  /** Represents a Google Cloud Compute zone */
  GoogleCloudZone: { input: any; output: any };
  /**
   * A `GroupHookID` is a global ID. It is encoded as a string.
   *
   * An example `GroupHookID` is: `"gid://gitlab/GroupHook/1"`.
   */
  GroupHookID: { input: any; output: any };
  /**
   * A `GroupID` is a global ID. It is encoded as a string.
   *
   * An example `GroupID` is: `"gid://gitlab/Group/1"`.
   */
  GroupID: { input: any; output: any };
  /**
   * A `GroupsSavedReplyID` is a global ID. It is encoded as a string.
   *
   * An example `GroupsSavedReplyID` is: `"gid://gitlab/Groups::SavedReply/1"`.
   */
  GroupsSavedReplyID: { input: any; output: any };
  /** An ISO 8601-encoded date */
  ISO8601Date: { input: any; output: any };
  /** An ISO 8601-encoded datetime */
  ISO8601DateTime: { input: any; output: any };
  /**
   * A `ImportSourceUserID` is a global ID. It is encoded as a string.
   *
   * An example `ImportSourceUserID` is: `"gid://gitlab/Import::SourceUser/1"`.
   */
  ImportSourceUserID: { input: any; output: any };
  /**
   * A `IncidentManagementEscalationPolicyID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementEscalationPolicyID` is: `"gid://gitlab/IncidentManagement::EscalationPolicy/1"`.
   */
  IncidentManagementEscalationPolicyID: { input: any; output: any };
  /**
   * A `IncidentManagementEscalationRuleID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementEscalationRuleID` is: `"gid://gitlab/IncidentManagement::EscalationRule/1"`.
   */
  IncidentManagementEscalationRuleID: { input: any; output: any };
  /**
   * A `IncidentManagementIssuableResourceLinkID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementIssuableResourceLinkID` is: `"gid://gitlab/IncidentManagement::IssuableResourceLink/1"`.
   */
  IncidentManagementIssuableResourceLinkID: { input: any; output: any };
  /**
   * A `IncidentManagementOncallParticipantID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementOncallParticipantID` is: `"gid://gitlab/IncidentManagement::OncallParticipant/1"`.
   */
  IncidentManagementOncallParticipantID: { input: any; output: any };
  /**
   * A `IncidentManagementOncallRotationID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementOncallRotationID` is: `"gid://gitlab/IncidentManagement::OncallRotation/1"`.
   */
  IncidentManagementOncallRotationID: { input: any; output: any };
  /**
   * A `IncidentManagementTimelineEventID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementTimelineEventID` is: `"gid://gitlab/IncidentManagement::TimelineEvent/1"`.
   */
  IncidentManagementTimelineEventID: { input: any; output: any };
  /**
   * A `IncidentManagementTimelineEventTagID` is a global ID. It is encoded as a string.
   *
   * An example `IncidentManagementTimelineEventTagID` is: `"gid://gitlab/IncidentManagement::TimelineEventTag/1"`.
   */
  IncidentManagementTimelineEventTagID: { input: any; output: any };
  /**
   * A `IntegrationsPrometheusID` is a global ID. It is encoded as a string.
   *
   * An example `IntegrationsPrometheusID` is: `"gid://gitlab/Integrations::Prometheus/1"`.
   * The older format `"gid://gitlab/PrometheusService/1"` was deprecated in 14.1.
   */
  IntegrationsPrometheusID: { input: any; output: any };
  /**
   * A `IssuableID` is a global ID. It is encoded as a string.
   *
   * An example `IssuableID` is: `"gid://gitlab/Issuable/1"`.
   */
  IssuableID: { input: any; output: any };
  /**
   * A `IssuablesCustomFieldID` is a global ID. It is encoded as a string.
   *
   * An example `IssuablesCustomFieldID` is: `"gid://gitlab/Issuables::CustomField/1"`.
   */
  IssuablesCustomFieldID: { input: any; output: any };
  /**
   * A `IssuablesCustomFieldSelectOptionID` is a global ID. It is encoded as a string.
   *
   * An example `IssuablesCustomFieldSelectOptionID` is: `"gid://gitlab/Issuables::CustomFieldSelectOption/1"`.
   */
  IssuablesCustomFieldSelectOptionID: { input: any; output: any };
  /**
   * A `IssueID` is a global ID. It is encoded as a string.
   *
   * An example `IssueID` is: `"gid://gitlab/Issue/1"`.
   */
  IssueID: { input: any; output: any };
  /**
   * A `IterationID` is a global ID. It is encoded as a string.
   *
   * An example `IterationID` is: `"gid://gitlab/Iteration/1"`.
   * The older format `"gid://gitlab/EEIteration/1"` was deprecated in 13.3.
   */
  IterationID: { input: any; output: any };
  /**
   * A `IterationsCadenceID` is a global ID. It is encoded as a string.
   *
   * An example `IterationsCadenceID` is: `"gid://gitlab/Iterations::Cadence/1"`.
   */
  IterationsCadenceID: { input: any; output: any };
  /** Represents untyped JSON */
  JSON: { input: any; output: any };
  /**
   * A `CommitStatusID` is a global ID. It is encoded as a string.
   *
   * An example `CommitStatusID` is: `"gid://gitlab/CommitStatus/1"`.
   */
  JobID: { input: any; output: any };
  /** JSON object as raw string */
  JsonString: { input: any; output: any };
  /**
   * A `LabelID` is a global ID. It is encoded as a string.
   *
   * An example `LabelID` is: `"gid://gitlab/Label/1"`.
   */
  LabelID: { input: any; output: any };
  /**
   * A `ListID` is a global ID. It is encoded as a string.
   *
   * An example `ListID` is: `"gid://gitlab/List/1"`.
   */
  ListID: { input: any; output: any };
  /**
   * A `MemberRoleID` is a global ID. It is encoded as a string.
   *
   * An example `MemberRoleID` is: `"gid://gitlab/MemberRole/1"`.
   */
  MemberRoleID: { input: any; output: any };
  /**
   * A `MergeRequestID` is a global ID. It is encoded as a string.
   *
   * An example `MergeRequestID` is: `"gid://gitlab/MergeRequest/1"`.
   */
  MergeRequestID: { input: any; output: any };
  /**
   * A `MergeRequestsClosingIssuesID` is a global ID. It is encoded as a string.
   *
   * An example `MergeRequestsClosingIssuesID` is: `"gid://gitlab/MergeRequestsClosingIssues/1"`.
   */
  MergeRequestsClosingIssuesID: { input: any; output: any };
  /**
   * A `MergeRequestsExternalStatusCheckID` is a global ID. It is encoded as a string.
   *
   * An example `MergeRequestsExternalStatusCheckID` is: `"gid://gitlab/MergeRequests::ExternalStatusCheck/1"`.
   */
  MergeRequestsExternalStatusCheckID: { input: any; output: any };
  /**
   * A `MergeTrainsCarID` is a global ID. It is encoded as a string.
   *
   * An example `MergeTrainsCarID` is: `"gid://gitlab/MergeTrains::Car/1"`.
   */
  MergeTrainsCarID: { input: any; output: any };
  /**
   * A `MilestoneID` is a global ID. It is encoded as a string.
   *
   * An example `MilestoneID` is: `"gid://gitlab/Milestone/1"`.
   */
  MilestoneID: { input: any; output: any };
  /**
   * A `MlCandidateID` is a global ID. It is encoded as a string.
   *
   * An example `MlCandidateID` is: `"gid://gitlab/Ml::Candidate/1"`.
   */
  MlCandidateID: { input: any; output: any };
  /**
   * A `MlCandidateMetadataID` is a global ID. It is encoded as a string.
   *
   * An example `MlCandidateMetadataID` is: `"gid://gitlab/Ml::CandidateMetadata/1"`.
   */
  MlCandidateMetadataID: { input: any; output: any };
  /**
   * A `MlCandidateMetricID` is a global ID. It is encoded as a string.
   *
   * An example `MlCandidateMetricID` is: `"gid://gitlab/Ml::CandidateMetric/1"`.
   */
  MlCandidateMetricID: { input: any; output: any };
  /**
   * A `MlCandidateParamID` is a global ID. It is encoded as a string.
   *
   * An example `MlCandidateParamID` is: `"gid://gitlab/Ml::CandidateParam/1"`.
   */
  MlCandidateParamID: { input: any; output: any };
  /**
   * A `MlExperimentID` is a global ID. It is encoded as a string.
   *
   * An example `MlExperimentID` is: `"gid://gitlab/Ml::Experiment/1"`.
   */
  MlExperimentID: { input: any; output: any };
  /**
   * A `MlModelID` is a global ID. It is encoded as a string.
   *
   * An example `MlModelID` is: `"gid://gitlab/Ml::Model/1"`.
   */
  MlModelID: { input: any; output: any };
  /**
   * A `MlModelVersionID` is a global ID. It is encoded as a string.
   *
   * An example `MlModelVersionID` is: `"gid://gitlab/Ml::ModelVersion/1"`.
   */
  MlModelVersionID: { input: any; output: any };
  /**
   * A `NamespaceID` is a global ID. It is encoded as a string.
   *
   * An example `NamespaceID` is: `"gid://gitlab/Namespace/1"`.
   */
  NamespaceID: { input: any; output: any };
  /**
   * A `NamespacesNamespaceBanID` is a global ID. It is encoded as a string.
   *
   * An example `NamespacesNamespaceBanID` is: `"gid://gitlab/Namespaces::NamespaceBan/1"`.
   */
  NamespacesNamespaceBanID: { input: any; output: any };
  /**
   * A `NoteID` is a global ID. It is encoded as a string.
   *
   * An example `NoteID` is: `"gid://gitlab/Note/1"`.
   */
  NoteID: { input: any; output: any };
  /**
   * A `NoteableID` is a global ID. It is encoded as a string.
   *
   * An example `NoteableID` is: `"gid://gitlab/Noteable/1"`.
   */
  NoteableID: { input: any; output: any };
  /**
   * A `OperationsFeatureFlagID` is a global ID. It is encoded as a string.
   *
   * An example `OperationsFeatureFlagID` is: `"gid://gitlab/Operations::FeatureFlag/1"`.
   */
  OperationsFeatureFlagID: { input: any; output: any };
  /**
   * A `OrganizationsOrganizationID` is a global ID. It is encoded as a string.
   *
   * An example `OrganizationsOrganizationID` is: `"gid://gitlab/Organizations::Organization/1"`.
   */
  OrganizationsOrganizationID: { input: any; output: any };
  /**
   * A `OrganizationsOrganizationUserID` is a global ID. It is encoded as a string.
   *
   * An example `OrganizationsOrganizationUserID` is: `"gid://gitlab/Organizations::OrganizationUser/1"`.
   */
  OrganizationsOrganizationUserID: { input: any; output: any };
  /**
   * A `PackageMetadataAdvisoryID` is a global ID. It is encoded as a string.
   *
   * An example `PackageMetadataAdvisoryID` is: `"gid://gitlab/PackageMetadata::Advisory/1"`.
   */
  PackageMetadataAdvisoryID: { input: any; output: any };
  /**
   * A `PackagesConanFileMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesConanFileMetadatumID` is: `"gid://gitlab/Packages::Conan::FileMetadatum/1"`.
   */
  PackagesConanFileMetadatumID: { input: any; output: any };
  /**
   * A `PackagesConanMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesConanMetadatumID` is: `"gid://gitlab/Packages::Conan::Metadatum/1"`.
   */
  PackagesConanMetadatumID: { input: any; output: any };
  /**
   * A `PackagesDependencyID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesDependencyID` is: `"gid://gitlab/Packages::Dependency/1"`.
   */
  PackagesDependencyID: { input: any; output: any };
  /**
   * A `PackagesDependencyLinkID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesDependencyLinkID` is: `"gid://gitlab/Packages::DependencyLink/1"`.
   */
  PackagesDependencyLinkID: { input: any; output: any };
  /**
   * A `PackagesMavenMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesMavenMetadatumID` is: `"gid://gitlab/Packages::Maven::Metadatum/1"`.
   */
  PackagesMavenMetadatumID: { input: any; output: any };
  /**
   * A `PackagesNugetDependencyLinkMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesNugetDependencyLinkMetadatumID` is: `"gid://gitlab/Packages::Nuget::DependencyLinkMetadatum/1"`.
   */
  PackagesNugetDependencyLinkMetadatumID: { input: any; output: any };
  /**
   * A `PackagesNugetMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesNugetMetadatumID` is: `"gid://gitlab/Packages::Nuget::Metadatum/1"`.
   */
  PackagesNugetMetadatumID: { input: any; output: any };
  /**
   * A `PackagesPackageFileID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesPackageFileID` is: `"gid://gitlab/Packages::PackageFile/1"`.
   */
  PackagesPackageFileID: { input: any; output: any };
  /**
   * A `PackagesPackageID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesPackageID` is: `"gid://gitlab/Packages::Package/1"`.
   */
  PackagesPackageID: { input: any; output: any };
  /**
   * A `PackagesProtectionRuleID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesProtectionRuleID` is: `"gid://gitlab/Packages::Protection::Rule/1"`.
   */
  PackagesProtectionRuleID: { input: any; output: any };
  /**
   * A `PackagesPypiMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesPypiMetadatumID` is: `"gid://gitlab/Packages::Pypi::Metadatum/1"`.
   */
  PackagesPypiMetadatumID: { input: any; output: any };
  /**
   * A `PackagesTerraformModuleMetadatumID` is a global ID. It is encoded as a string.
   *
   * An example `PackagesTerraformModuleMetadatumID` is: `"gid://gitlab/Packages::TerraformModule::Metadatum/1"`.
   */
  PackagesTerraformModuleMetadatumID: { input: any; output: any };
  /**
   * A `PagesDeploymentID` is a global ID. It is encoded as a string.
   *
   * An example `PagesDeploymentID` is: `"gid://gitlab/PagesDeployment/1"`.
   */
  PagesDeploymentID: { input: any; output: any };
  /**
   * A `PathLockID` is a global ID. It is encoded as a string.
   *
   * An example `PathLockID` is: `"gid://gitlab/PathLock/1"`.
   */
  PathLockID: { input: any; output: any };
  /** String or integer. */
  PayloadAlertFieldPathSegment: { input: any; output: any };
  /**
   * A `PersonalAccessTokenID` is a global ID. It is encoded as a string.
   *
   * An example `PersonalAccessTokenID` is: `"gid://gitlab/PersonalAccessToken/1"`.
   */
  PersonalAccessTokenID: { input: any; output: any };
  /**
   * A `ProjectHookID` is a global ID. It is encoded as a string.
   *
   * An example `ProjectHookID` is: `"gid://gitlab/ProjectHook/1"`.
   */
  ProjectHookID: { input: any; output: any };
  /**
   * A `ProjectID` is a global ID. It is encoded as a string.
   *
   * An example `ProjectID` is: `"gid://gitlab/Project/1"`.
   */
  ProjectID: { input: any; output: any };
  /**
   * A `ProjectImportStateID` is a global ID. It is encoded as a string.
   *
   * An example `ProjectImportStateID` is: `"gid://gitlab/ProjectImportState/1"`.
   */
  ProjectImportStateID: { input: any; output: any };
  /**
   * A `ProjectsBranchRuleID` is a global ID. It is encoded as a string.
   *
   * An example `ProjectsBranchRuleID` is: `"gid://gitlab/Projects::BranchRule/1"`.
   */
  ProjectsBranchRuleID: { input: any; output: any };
  /**
   * A `ProjectsSavedReplyID` is a global ID. It is encoded as a string.
   *
   * An example `ProjectsSavedReplyID` is: `"gid://gitlab/Projects::SavedReply/1"`.
   */
  ProjectsSavedReplyID: { input: any; output: any };
  /**
   * A `ProjectsTargetBranchRuleID` is a global ID. It is encoded as a string.
   *
   * An example `ProjectsTargetBranchRuleID` is: `"gid://gitlab/Projects::TargetBranchRule/1"`.
   */
  ProjectsTargetBranchRuleID: { input: any; output: any };
  /**
   * A `ReleaseID` is a global ID. It is encoded as a string.
   *
   * An example `ReleaseID` is: `"gid://gitlab/Release/1"`.
   */
  ReleaseID: { input: any; output: any };
  /**
   * A `ReleasesLinkID` is a global ID. It is encoded as a string.
   *
   * An example `ReleasesLinkID` is: `"gid://gitlab/Releases::Link/1"`.
   */
  ReleasesLinkID: { input: any; output: any };
  /**
   * A `RemoteDevelopmentNamespaceClusterAgentMappingID` is a global ID. It is encoded as a string.
   *
   * An example `RemoteDevelopmentNamespaceClusterAgentMappingID` is: `"gid://gitlab/RemoteDevelopment::NamespaceClusterAgentMapping/1"`.
   */
  RemoteDevelopmentNamespaceClusterAgentMappingID: { input: any; output: any };
  /**
   * A `RemoteDevelopmentWorkspaceID` is a global ID. It is encoded as a string.
   *
   * An example `RemoteDevelopmentWorkspaceID` is: `"gid://gitlab/RemoteDevelopment::Workspace/1"`.
   */
  RemoteDevelopmentWorkspaceID: { input: any; output: any };
  /**
   * A `RemoteDevelopmentWorkspaceVariableID` is a global ID. It is encoded as a string.
   *
   * An example `RemoteDevelopmentWorkspaceVariableID` is: `"gid://gitlab/RemoteDevelopment::WorkspaceVariable/1"`.
   */
  RemoteDevelopmentWorkspaceVariableID: { input: any; output: any };
  /**
   * A `RemoteDevelopmentWorkspacesAgentConfigID` is a global ID. It is encoded as a string.
   *
   * An example `RemoteDevelopmentWorkspacesAgentConfigID` is: `"gid://gitlab/RemoteDevelopment::WorkspacesAgentConfig/1"`.
   */
  RemoteDevelopmentWorkspacesAgentConfigID: { input: any; output: any };
  /**
   * A `SbomComponentID` is a global ID. It is encoded as a string.
   *
   * An example `SbomComponentID` is: `"gid://gitlab/Sbom::Component/1"`.
   */
  SbomComponentID: { input: any; output: any };
  /**
   * A `SbomComponentVersionID` is a global ID. It is encoded as a string.
   *
   * An example `SbomComponentVersionID` is: `"gid://gitlab/Sbom::ComponentVersion/1"`.
   */
  SbomComponentVersionID: { input: any; output: any };
  /**
   * A `SbomOccurrenceID` is a global ID. It is encoded as a string.
   *
   * An example `SbomOccurrenceID` is: `"gid://gitlab/Sbom::Occurrence/1"`.
   */
  SbomOccurrenceID: { input: any; output: any };
  /**
   * A `SecurityAscpComponentID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityAscpComponentID` is: `"gid://gitlab/Security::Ascp::Component/1"`.
   */
  SecurityAscpComponentID: { input: any; output: any };
  /**
   * A `SecurityAscpScanID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityAscpScanID` is: `"gid://gitlab/Security::Ascp::Scan/1"`.
   */
  SecurityAscpScanID: { input: any; output: any };
  /**
   * A `SecurityAscpSecurityContextID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityAscpSecurityContextID` is: `"gid://gitlab/Security::Ascp::SecurityContext/1"`.
   */
  SecurityAscpSecurityContextID: { input: any; output: any };
  /**
   * A `SecurityAscpSecurityGuidelineID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityAscpSecurityGuidelineID` is: `"gid://gitlab/Security::Ascp::SecurityGuideline/1"`.
   */
  SecurityAscpSecurityGuidelineID: { input: any; output: any };
  /**
   * A `SecurityAttributeID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityAttributeID` is: `"gid://gitlab/Security::Attribute/1"`.
   */
  SecurityAttributeID: { input: any; output: any };
  /**
   * A `SecurityCategoryID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityCategoryID` is: `"gid://gitlab/Security::Category/1"`.
   */
  SecurityCategoryID: { input: any; output: any };
  /**
   * A `SecurityDependencyFirewallPolicyRuleID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityDependencyFirewallPolicyRuleID` is: `"gid://gitlab/Security::DependencyFirewallPolicyRule/1"`.
   */
  SecurityDependencyFirewallPolicyRuleID: { input: any; output: any };
  /**
   * A `SecurityOrchestrationPolicyConfigurationID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityOrchestrationPolicyConfigurationID` is: `"gid://gitlab/Security::OrchestrationPolicyConfiguration/1"`.
   */
  SecurityOrchestrationPolicyConfigurationID: { input: any; output: any };
  /**
   * A `SecurityPipelineExecutionProjectScheduleID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityPipelineExecutionProjectScheduleID` is: `"gid://gitlab/Security::PipelineExecutionProjectSchedule/1"`.
   */
  SecurityPipelineExecutionProjectScheduleID: { input: any; output: any };
  /**
   * A `SecurityPolicyID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityPolicyID` is: `"gid://gitlab/Security::Policy/1"`.
   */
  SecurityPolicyID: { input: any; output: any };
  /**
   * A `SecurityPolicySchedulePipelineID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityPolicySchedulePipelineID` is: `"gid://gitlab/Security::PolicySchedulePipeline/1"`.
   */
  SecurityPolicySchedulePipelineID: { input: any; output: any };
  /**
   * A `SecurityProjectSecurityExclusionID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityProjectSecurityExclusionID` is: `"gid://gitlab/Security::ProjectSecurityExclusion/1"`.
   */
  SecurityProjectSecurityExclusionID: { input: any; output: any };
  /**
   * A `SecurityProjectTrackedContextID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityProjectTrackedContextID` is: `"gid://gitlab/Security::ProjectTrackedContext/1"`.
   */
  SecurityProjectTrackedContextID: { input: any; output: any };
  /**
   * A `SecurityScanProfileID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityScanProfileID` is: `"gid://gitlab/Security::ScanProfile/1"`.
   */
  SecurityScanProfileID: { input: any; output: any };
  /**
   * A `SecurityScheduledPipelineExecutionPolicyTestRunID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityScheduledPipelineExecutionPolicyTestRunID` is: `"gid://gitlab/Security::ScheduledPipelineExecutionPolicyTestRun/1"`.
   */
  SecurityScheduledPipelineExecutionPolicyTestRunID: {
    input: any;
    output: any;
  };
  /**
   * A `SecurityTrainingProviderID` is a global ID. It is encoded as a string.
   *
   * An example `SecurityTrainingProviderID` is: `"gid://gitlab/Security::TrainingProvider/1"`.
   */
  SecurityTrainingProviderID: { input: any; output: any };
  /**
   * A `SnippetID` is a global ID. It is encoded as a string.
   *
   * An example `SnippetID` is: `"gid://gitlab/Snippet/1"`.
   */
  SnippetID: { input: any; output: any };
  /**
   * A `SuggestionID` is a global ID. It is encoded as a string.
   *
   * An example `SuggestionID` is: `"gid://gitlab/Suggestion/1"`.
   */
  SuggestionID: { input: any; output: any };
  /**
   * A `SystemNoteMetadataID` is a global ID. It is encoded as a string.
   *
   * An example `SystemNoteMetadataID` is: `"gid://gitlab/SystemNoteMetadata/1"`.
   */
  SystemNoteMetadataID: { input: any; output: any };
  /**
   * A `TerraformStateID` is a global ID. It is encoded as a string.
   *
   * An example `TerraformStateID` is: `"gid://gitlab/Terraform::State/1"`.
   */
  TerraformStateID: { input: any; output: any };
  /**
   * A `TerraformStateProtectionRuleID` is a global ID. It is encoded as a string.
   *
   * An example `TerraformStateProtectionRuleID` is: `"gid://gitlab/Terraform::StateProtectionRule/1"`.
   */
  TerraformStateProtectionRuleID: { input: any; output: any };
  /**
   * Time represented in ISO 8601.
   *
   * For example: `2021-03-09T14:58:50+00:00`.
   *
   * See `https://www.iso.org/iso-8601-date-and-time-format.html`.
   *
   */
  Time: { input: any; output: any };
  /**
   * A `TimelogID` is a global ID. It is encoded as a string.
   *
   * An example `TimelogID` is: `"gid://gitlab/Timelog/1"`.
   */
  TimelogID: { input: any; output: any };
  /**
   * A `TodoID` is a global ID. It is encoded as a string.
   *
   * An example `TodoID` is: `"gid://gitlab/Todo/1"`.
   */
  TodoID: { input: any; output: any };
  /**
   * A `TodoableID` is a global ID. It is encoded as a string.
   *
   * An example `TodoableID` is: `"gid://gitlab/Todoable/1"`.
   */
  TodoableID: { input: any; output: any };
  /**
   * A `TypesNamespaceID` is a global ID. It is encoded as a string.
   *
   * An example `TypesNamespaceID` is: `"gid://gitlab/Types::Namespace/1"`.
   */
  TypesNamespaceID: { input: any; output: any };
  /** A regexp containing patterns sourced from user input */
  UntrustedRegexp: { input: any; output: any };
  Upload: { input: any; output: any };
  /**
   * A `UploadID` is a global ID. It is encoded as a string.
   *
   * An example `UploadID` is: `"gid://gitlab/Upload/1"`.
   */
  UploadID: { input: any; output: any };
  /**
   * A `UserID` is a global ID. It is encoded as a string.
   *
   * An example `UserID` is: `"gid://gitlab/User/1"`.
   */
  UserID: { input: any; output: any };
  /**
   * A `UsersSavedReplyID` is a global ID. It is encoded as a string.
   *
   * An example `UsersSavedReplyID` is: `"gid://gitlab/Users::SavedReply/1"`.
   */
  UsersSavedReplyID: { input: any; output: any };
  /**
   * A `VirtualRegistriesContainerRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `VirtualRegistriesContainerRegistryID` is: `"gid://gitlab/VirtualRegistries::Container::Registry/1"`.
   */
  VirtualRegistriesContainerRegistryID: { input: any; output: any };
  /**
   * A `VirtualRegistriesContainerRegistryUpstreamID` is a global ID. It is encoded as a string.
   *
   * An example `VirtualRegistriesContainerRegistryUpstreamID` is: `"gid://gitlab/VirtualRegistries::Container::RegistryUpstream/1"`.
   */
  VirtualRegistriesContainerRegistryUpstreamID: { input: any; output: any };
  /**
   * A `VirtualRegistriesContainerUpstreamID` is a global ID. It is encoded as a string.
   *
   * An example `VirtualRegistriesContainerUpstreamID` is: `"gid://gitlab/VirtualRegistries::Container::Upstream/1"`.
   */
  VirtualRegistriesContainerUpstreamID: { input: any; output: any };
  /**
   * A `VirtualRegistriesPackagesMavenRegistryID` is a global ID. It is encoded as a string.
   *
   * An example `VirtualRegistriesPackagesMavenRegistryID` is: `"gid://gitlab/VirtualRegistries::Packages::Maven::Registry/1"`.
   */
  VirtualRegistriesPackagesMavenRegistryID: { input: any; output: any };
  /**
   * A `VirtualRegistriesPackagesMavenRegistryUpstreamID` is a global ID. It is encoded as a string.
   *
   * An example `VirtualRegistriesPackagesMavenRegistryUpstreamID` is: `"gid://gitlab/VirtualRegistries::Packages::Maven::RegistryUpstream/1"`.
   */
  VirtualRegistriesPackagesMavenRegistryUpstreamID: { input: any; output: any };
  /**
   * A `VirtualRegistriesPackagesMavenUpstreamID` is a global ID. It is encoded as a string.
   *
   * An example `VirtualRegistriesPackagesMavenUpstreamID` is: `"gid://gitlab/VirtualRegistries::Packages::Maven::Upstream/1"`.
   */
  VirtualRegistriesPackagesMavenUpstreamID: { input: any; output: any };
  /**
   * A `VirtualRegistriesPackagesMavenUpstreamRuleID` is a global ID. It is encoded as a string.
   *
   * An example `VirtualRegistriesPackagesMavenUpstreamRuleID` is: `"gid://gitlab/VirtualRegistries::Packages::Maven::Upstream::Rule/1"`.
   */
  VirtualRegistriesPackagesMavenUpstreamRuleID: { input: any; output: any };
  /**
   * A `VulnerabilitiesExternalIssueLinkID` is a global ID. It is encoded as a string.
   *
   * An example `VulnerabilitiesExternalIssueLinkID` is: `"gid://gitlab/Vulnerabilities::ExternalIssueLink/1"`.
   */
  VulnerabilitiesExternalIssueLinkID: { input: any; output: any };
  /**
   * A `VulnerabilitiesScannerID` is a global ID. It is encoded as a string.
   *
   * An example `VulnerabilitiesScannerID` is: `"gid://gitlab/Vulnerabilities::Scanner/1"`.
   */
  VulnerabilitiesScannerID: { input: any; output: any };
  /**
   * A `VulnerabilitiesStateTransitionID` is a global ID. It is encoded as a string.
   *
   * An example `VulnerabilitiesStateTransitionID` is: `"gid://gitlab/Vulnerabilities::StateTransition/1"`.
   */
  VulnerabilitiesStateTransitionID: { input: any; output: any };
  /**
   * A `VulnerabilityID` is a global ID. It is encoded as a string.
   *
   * An example `VulnerabilityID` is: `"gid://gitlab/Vulnerability/1"`.
   */
  VulnerabilityID: { input: any; output: any };
  /**
   * A `WebHookLogID` is a global ID. It is encoded as a string.
   *
   * An example `WebHookLogID` is: `"gid://gitlab/WebHookLog/1"`.
   */
  WebHookLogID: { input: any; output: any };
  /**
   * A `WikiPageMetaID` is a global ID. It is encoded as a string.
   *
   * An example `WikiPageMetaID` is: `"gid://gitlab/WikiPage::Meta/1"`.
   */
  WikiPageMetaID: { input: any; output: any };
  /**
   * A `WorkItemID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemID` is: `"gid://gitlab/WorkItem/1"`.
   *
   * While we transition from Issues into Work Items this type will temporarily support
   * `IssueID` like: `"gid://gitlab/Issue/1"`. This behavior will be removed without notice in the future.
   *
   */
  WorkItemID: { input: any; output: any };
  /**
   * A `WorkItemsRelatedWorkItemLinkID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemsRelatedWorkItemLinkID` is: `"gid://gitlab/WorkItems::RelatedWorkItemLink/1"`.
   */
  WorkItemsRelatedWorkItemLinkID: { input: any; output: any };
  /**
   * A `WorkItemsSavedViewsSavedViewID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemsSavedViewsSavedViewID` is: `"gid://gitlab/WorkItems::SavedViews::SavedView/1"`.
   */
  WorkItemsSavedViewsSavedViewID: { input: any; output: any };
  /**
   * A `WorkItemsStatusesLifecycleID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemsStatusesLifecycleID` is: `"gid://gitlab/WorkItems::Statuses::Lifecycle/1"`.
   */
  WorkItemsStatusesLifecycleID: { input: any; output: any };
  /**
   * A `WorkItemsStatusesStatusID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemsStatusesStatusID` is: `"gid://gitlab/WorkItems::Statuses::Status/1"`.
   */
  WorkItemsStatusesStatusID: { input: any; output: any };
  /**
   * A `WorkItemsTypeID` is a global ID. It is encoded as a string.
   *
   * An example `WorkItemsTypeID` is: `"gid://gitlab/WorkItems::Type/1"`.
   */
  WorkItemsTypeID: { input: any; output: any };
};

/** Access level to a resource */
export enum AccessLevelEnum {
  /** Admin access. */
  Admin = "ADMIN",
  /** Developer access. */
  Developer = "DEVELOPER",
  /** Guest access. */
  Guest = "GUEST",
  /** Maintainer access. */
  Maintainer = "MAINTAINER",
  /** Minimal access. */
  MinimalAccess = "MINIMAL_ACCESS",
  /** No access. */
  NoAccess = "NO_ACCESS",
  /** Owner access. */
  Owner = "OWNER",
  /** Planner access. */
  Planner = "PLANNER",
  /** Reporter access. */
  Reporter = "REPORTER",
  /** Security manager access. */
  SecurityManager = "SECURITY_MANAGER",
}

/** Access configured on a granular scope. */
export enum AccessTokenGranularScopeAccess {
  /** Grants access to resources belonging to all groups and projects the user is a member of. */
  AllMemberships = "ALL_MEMBERSHIPS",
  /** Grants access to standalone instance-level resources. */
  Instance = "INSTANCE",
  /** Grants access to resources belonging to all personal projects of a user. */
  PersonalProjects = "PERSONAL_PROJECTS",
  /** Grants access to resources belonging to selected groups and projects the user is a member of. */
  SelectedMemberships = "SELECTED_MEMBERSHIPS",
  /** Grants access to standalone user-level resources. */
  User = "USER",
}

/** Values for sorting access tokens. */
export enum AccessTokenSort {
  /** Sort by created_at in ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Sort by created_at in descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Sort by expires_at in ascending order. */
  ExpiresAsc = "EXPIRES_ASC",
  /** Sort by expires_at in descending order. */
  ExpiresDesc = "EXPIRES_DESC",
  /** Sort by ID in ascending order. */
  IdAsc = "ID_ASC",
  /** Sort by ID in descending order. */
  IdDesc = "ID_DESC",
  /** Sort by last_used_at in ascending order. */
  LastUsedAsc = "LAST_USED_ASC",
  /** Sort by last_used_at in descending order. */
  LastUsedDesc = "LAST_USED_DESC",
  /** Sort by name in ascending order. */
  NameAsc = "NAME_ASC",
  /** Sort by name in descending order. */
  NameDesc = "NAME_DESC",
  /** Sort by updated_at in ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Sort by updated_at in descending order. */
  UpdatedDesc = "UPDATED_DESC",
}

/** State of an access token. */
export enum AccessTokenState {
  /** Token is active. */
  Active = "ACTIVE",
  /** Token is inactive. */
  Inactive = "INACTIVE",
}

/** Autogenerated input type of AchievementsAward */
export type AchievementsAwardInput = {
  /** Global ID of the achievement being awarded. */
  achievementId: Scalars["AchievementsAchievementID"]["input"];
  /** Message to associate with the awarded achievement. */
  awardMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the user being awarded the achievement. */
  userId: Scalars["UserID"]["input"];
};

/** Autogenerated input type of AchievementsCreate */
export type AchievementsCreateInput = {
  /** Avatar for the achievement. */
  avatar?: InputMaybe<Scalars["Upload"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of or notes for the achievement. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name for the achievement. */
  name: Scalars["String"]["input"];
  /** Namespace for the achievement. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Autogenerated input type of AchievementsDelete */
export type AchievementsDeleteInput = {
  /** Global ID of the achievement being deleted. */
  achievementId: Scalars["AchievementsAchievementID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AchievementsRevoke */
export type AchievementsRevokeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the user achievement being revoked. */
  userAchievementId: Scalars["AchievementsUserAchievementID"]["input"];
};

/** Autogenerated input type of AchievementsUpdate */
export type AchievementsUpdateInput = {
  /** Global ID of the achievement being updated. */
  achievementId: Scalars["AchievementsAchievementID"]["input"];
  /** Avatar for the achievement. */
  avatar?: InputMaybe<Scalars["Upload"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of or notes for the achievement. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name for the achievement. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AddProjectToSecurityDashboard */
export type AddProjectToSecurityDashboardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the project to be added to Instance Security Dashboard. */
  id: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of AdminClearDuoAvailability */
export type AdminClearDuoAvailabilityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group to clear the GitLab Duo availability override from. */
  groupId: Scalars["GroupID"]["input"];
};

/** Autogenerated input type of AdminRolesLdapSync */
export type AdminRolesLdapSyncInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AdminSetDuoAvailability */
export type AdminSetDuoAvailabilityInput = {
  /** GitLab Duo availability state to lock on the group. */
  availability: DuoAvailability;
  /** Clear conflicting admin-locked overrides on descendant groups instead of rejecting. */
  clearDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group to set the GitLab Duo availability override on. */
  groupId: Scalars["GroupID"]["input"];
};

/** Autogenerated input type of AdminSidekiqQueuesDeleteJobs */
export type AdminSidekiqQueuesDeleteJobsInput = {
  /** Delete jobs matching ai_resource in the context metadata. */
  aiResource?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching artifact_size in the context metadata. */
  artifactSize?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching artifact_used_cdn in the context metadata. */
  artifactUsedCdn?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching artifacts_dependencies_count in the context metadata. */
  artifactsDependenciesCount?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching artifacts_dependencies_size in the context metadata. */
  artifactsDependenciesSize?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching bulk_import_entity_id in the context metadata. */
  bulkImportEntityId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching caller_id in the context metadata. */
  callerId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching client_id in the context metadata. */
  clientId?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching feature_category in the context metadata. */
  featureCategory?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching gl_user_id in the context metadata. */
  glUserId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching job_id in the context metadata. */
  jobId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching kubernetes_agent_id in the context metadata. */
  kubernetesAgentId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching merge_action_status in the context metadata. */
  mergeActionStatus?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching mvcc_manifest in the context metadata. */
  mvccManifest?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching organization_id in the context metadata. */
  organizationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching pipeline_id in the context metadata. */
  pipelineId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching project in the context metadata. */
  project?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the queue to delete jobs from. */
  queueName: Scalars["String"]["input"];
  /** Delete jobs matching related_class in the context metadata. */
  relatedClass?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching remote_ip in the context metadata. */
  remoteIp?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching root_caller_id in the context metadata. */
  rootCallerId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching root_namespace in the context metadata. */
  rootNamespace?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching scoped_user in the context metadata. */
  scopedUser?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching scoped_user_id in the context metadata. */
  scopedUserId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching sidekiq_destination_shard_redis in the context metadata. */
  sidekiqDestinationShardRedis?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching subscription_plan in the context metadata. */
  subscriptionPlan?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching user in the context metadata. */
  user?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs matching user_id in the context metadata. */
  userId?: InputMaybe<Scalars["String"]["input"]>;
  /** Delete jobs with the given worker class. */
  workerClass?: InputMaybe<Scalars["String"]["input"]>;
};

export type AgentPlatformMetricsNotInput = {
  /** List of flow types to exclude. */
  flowTypes?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Agent token statuses */
export enum AgentTokenStatus {
  /** Active agent token. */
  Active = "ACTIVE",
  /** Revoked agent token. */
  Revoked = "REVOKED",
}

export type AggregationOrder = {
  /** Sorting direction. */
  direction: SortDirectionEnum;
  /** Dimension or metric identifier. */
  identifier: Scalars["String"]["input"];
  /** Parameters for parameterized dimensions. */
  parameters?: InputMaybe<Scalars["JSON"]["input"]>;
};

/** LLMs supported by the self-hosted model features. */
export enum AiAcceptedSelfHostedModels {
  /** Claude 3 model family, suitable for code generation and duo chat. */
  Claude_3 = "CLAUDE_3",
  /** CodeGemma Code: Suitable for code suggestions. */
  Codegemma = "CODEGEMMA",
  /** Code-Llama Instruct: Suitable for code suggestions. */
  Codellama = "CODELLAMA",
  /** Codestral: Suitable for code suggestions. */
  Codestral = "CODESTRAL",
  /** Deepseek Coder base or instruct. */
  Deepseekcoder = "DEEPSEEKCODER",
  /** Embedding: Suitable for semantic search. */
  Embedding = "EMBEDDING",
  /** Gemini: Suitable for duo agentic and non-agentic chat. */
  Gemini = "GEMINI",
  /** General: Any model suitable for code suggestions and duo chat. */
  General = "GENERAL",
  /** GPT: Suitable for code suggestions. */
  Gpt = "GPT",
  /** LLaMA 3: Suitable for code suggestions and duo chat. */
  Llama3 = "LLAMA3",
  /** Mistral: Suitable for code suggestions and duo chat. */
  Mistral = "MISTRAL",
  /** Mixtral: Suitable for code suggestions and duo chat. */
  Mixtral = "MIXTRAL",
  /** Qwen: Suitable for code suggestions and duo chat. */
  Qwen = "QWEN",
}

/** Action to subscribe to. */
export enum AiAction {
  /** Chat action. */
  Chat = "CHAT",
}

/** Autogenerated input type of AiAction */
export type AiActionInput = {
  /** Input for agentic_chat AI action. */
  agenticChat?: InputMaybe<AiAgenticChatInput>;
  /** Input for chat AI action. */
  chat?: InputMaybe<AiChatInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Client generated ID that can be subscribed to, to receive a response for the mutation. */
  clientSubscriptionId?: InputMaybe<Scalars["String"]["input"]>;
  /** Conversation type of the thread. */
  conversationType?: InputMaybe<AiConversationsThreadsConversationType>;
  /** Input for description_composer AI action. */
  descriptionComposer?: InputMaybe<AiDescriptionComposerInput>;
  /** Input for explain_vulnerability AI action. */
  explainVulnerability?: InputMaybe<AiExplainVulnerabilityInput>;
  /** Input for generate_commit_message AI action. */
  generateCommitMessage?: InputMaybe<AiGenerateCommitMessageInput>;
  /** Input for generate_description AI action. */
  generateDescription?: InputMaybe<AiGenerateDescriptionInput>;
  /** Input for measure_comment_temperature AI action. */
  measureCommentTemperature?: InputMaybe<AiMeasureCommentTemperatureInput>;
  /** Specifies the origin platform of the request. */
  platformOrigin?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the project the user is acting on. */
  projectId?: InputMaybe<Scalars["ProjectID"]["input"]>;
  /** Input for resolve_vulnerability AI action. */
  resolveVulnerability?: InputMaybe<AiResolveVulnerabilityInput>;
  /** Global ID of the top-level namespace the user is acting on. */
  rootNamespaceId?: InputMaybe<Scalars["NamespaceID"]["input"]>;
  /** Input for summarize_new_merge_request AI action. */
  summarizeNewMergeRequest?: InputMaybe<AiSummarizeNewMergeRequestInput>;
  /** Input for summarize_review AI action. */
  summarizeReview?: InputMaybe<AiSummarizeReviewInput>;
  /** Global Id of the existing thread to continue the conversation. If it is not specified, a new thread will be created for the specified conversation_type. */
  threadId?: InputMaybe<Scalars["AiConversationThreadID"]["input"]>;
};

/** The category of the additional context */
export enum AiAdditionalContextCategory {
  /** Agent_user_environment content category. */
  AgentUserEnvironment = "AGENT_USER_ENVIRONMENT",
  /** Dependency content category. */
  Dependency = "DEPENDENCY",
  /** Directory content category. */
  Directory = "DIRECTORY",
  /** File content category. */
  File = "FILE",
  /** Issue content category. */
  Issue = "ISSUE",
  /** Local_git content category. */
  LocalGit = "LOCAL_GIT",
  /** Merge_request content category. */
  MergeRequest = "MERGE_REQUEST",
  /** Repository content category. */
  Repository = "REPOSITORY",
  /** Snippet content category. */
  Snippet = "SNIPPET",
  /** Terminal content category. */
  Terminal = "TERMINAL",
  /** User_rule content category. */
  UserRule = "USER_RULE",
}

export type AiAdditionalContextInput = {
  /** Category of the additional context. */
  category: AiAdditionalContextCategory;
  /** Content of the additional context. */
  content: Scalars["String"]["input"];
  /** ID of the additional context. */
  id: Scalars["String"]["input"];
  /** Metadata of the additional context. */
  metadata?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type AiAgenticChatInput = {
  /** Additional context to be passed for the chat. */
  additionalContext?: InputMaybe<Array<AiAdditionalContextInput>>;
  /** Content of the message. */
  content: Scalars["String"]["input"];
  /** Information about currently selected text which can be passed for additional context. */
  currentFile?: InputMaybe<AiCurrentFileInput>;
  /** Global ID of the namespace the user is acting on. */
  namespaceId?: InputMaybe<Scalars["NamespaceID"]["input"]>;
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
};

/** Autogenerated input type of AiCatalogAgentCreate */
export type AiCatalogAgentCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description for the agent. */
  description: Scalars["String"]["input"];
  /**
   * MCP servers to associate with the agent. Introduced in GitLab 18.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.10.
   */
  mcpServers?: InputMaybe<Array<Scalars["AiCatalogMcpServerID"]["input"]>>;
  /**
   * List of MCP tools enabled for the agent. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  mcpTools?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Name for the agent. */
  name: Scalars["String"]["input"];
  /** Project for the agent. */
  projectId: Scalars["ProjectID"]["input"];
  /**
   * Whether the agent is publicly visible in the catalog. Deprecated in GitLab 19.2: Use `visibility`.
   * @deprecated Use `visibility`. Deprecated in GitLab 19.2.
   */
  public?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to release the latest version of the agent. */
  release?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** System prompt for the agent. */
  systemPrompt: Scalars["String"]["input"];
  /** List of GitLab built-in tools enabled for the agent. */
  tools?: InputMaybe<Array<Scalars["AiCatalogBuiltInToolID"]["input"]>>;
  /** User prompt for the agent. */
  userPrompt?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Visibility of the agent in the catalog. Only available when the `ai_catalog_internal_visibility` feature flag is enabled. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  visibility?: InputMaybe<AiCatalogItemVisibility>;
};

/** Autogenerated input type of AiCatalogAgentDelete */
export type AiCatalogAgentDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** When true, the flow will always be hard deleted and never soft deleted. Can only be used by instance admins */
  forceHardDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the catalog Agent to delete. */
  id: Scalars["AiCatalogItemID"]["input"];
};

/** Autogenerated input type of AiCatalogAgentUpdate */
export type AiCatalogAgentUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description for the agent. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog Agent to update. */
  id: Scalars["AiCatalogItemID"]["input"];
  /**
   * MCP servers to associate with the agent. Introduced in GitLab 18.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.10.
   */
  mcpServers?: InputMaybe<Array<Scalars["AiCatalogMcpServerID"]["input"]>>;
  /**
   * List of MCP tools enabled for the agent. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  mcpTools?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Name for the agent. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Whether the agent is publicly visible in the catalog. Deprecated in GitLab 19.2: Use `visibility`.
   * @deprecated Use `visibility`. Deprecated in GitLab 19.2.
   */
  public?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to release the latest version of the agent. */
  release?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** System prompt for the agent. */
  systemPrompt?: InputMaybe<Scalars["String"]["input"]>;
  /** List of GitLab built-in tools enabled for the agent. */
  tools?: InputMaybe<Array<Scalars["AiCatalogBuiltInToolID"]["input"]>>;
  /** User prompt for the agent. */
  userPrompt?: InputMaybe<Scalars["String"]["input"]>;
  /** Bump version, calculated from the last released version name. */
  versionBump?: InputMaybe<AiCatalogVersionBump>;
  /**
   * Visibility of the agent in the catalog. Only available when the `ai_catalog_internal_visibility` feature flag is enabled. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  visibility?: InputMaybe<AiCatalogItemVisibility>;
};

/** Possible flow configuration types for AI Catalog agents. */
export enum AiCatalogFlowConfigType {
  /** Chat flow configuration. */
  Chat = "CHAT",
}

/** Autogenerated input type of AiCatalogFlowCreate */
export type AiCatalogFlowCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** YAML definition for the flow. */
  definition?: InputMaybe<Scalars["String"]["input"]>;
  /** Description for the flow. */
  description: Scalars["String"]["input"];
  /** Name for the flow. */
  name: Scalars["String"]["input"];
  /** Project for the flow. */
  projectId: Scalars["ProjectID"]["input"];
  /**
   * Whether the flow is publicly visible in the catalog. Deprecated in GitLab 19.2: Use `visibility`.
   * @deprecated Use `visibility`. Deprecated in GitLab 19.2.
   */
  public?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to release the latest version of the flow. */
  release?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Visibility of the flow in the catalog. Only available when the `ai_catalog_internal_visibility` feature flag is enabled. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  visibility?: InputMaybe<AiCatalogItemVisibility>;
};

/** Autogenerated input type of AiCatalogFlowDelete */
export type AiCatalogFlowDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** When true, the flow will always be hard deleted and never soft deleted. Can only be used by instance admins */
  forceHardDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the catalog flow to delete. */
  id: Scalars["AiCatalogItemID"]["input"];
};

/** Autogenerated input type of AiCatalogFlowUpdate */
export type AiCatalogFlowUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** YAML definition for the Flow. */
  definition?: InputMaybe<Scalars["String"]["input"]>;
  /** Description for the flow. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog flow to update. */
  id: Scalars["AiCatalogItemID"]["input"];
  /** Name for the flow. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Whether the flow is publicly visible in the catalog. Deprecated in GitLab 19.2: Use `visibility`.
   * @deprecated Use `visibility`. Deprecated in GitLab 19.2.
   */
  public?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to release the latest version of the flow. */
  release?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Bump version, calculated from the last released version name. */
  versionBump?: InputMaybe<AiCatalogVersionBump>;
  /**
   * Visibility of the flow in the catalog. Only available when the `ai_catalog_internal_visibility` feature flag is enabled. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  visibility?: InputMaybe<AiCatalogItemVisibility>;
};

/** Autogenerated input type of AiCatalogItemConsumerBulkCreate */
export type AiCatalogItemConsumerBulkCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog item to enable. */
  itemId: Scalars["AiCatalogItemID"]["input"];
  /** Global IDs of the projects to enable the catalog item in (maximum 100). */
  projectIds: Array<Scalars["ProjectID"]["input"]>;
  /**
   * Filter conditions for the auto-created flow triggers, keyed by event type. Introduced in GitLab 19.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.1.
   */
  triggerFilter?: InputMaybe<Scalars["JSON"]["input"]>;
  /** List of event types to create flow triggers for. */
  triggerTypes?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of AiCatalogItemConsumerCreate */
export type AiCatalogItemConsumerCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Item to configure. */
  itemId: Scalars["AiCatalogItemID"]["input"];
  /** Parent item consumer belonging to the top-level group. */
  parentItemConsumerId?: InputMaybe<
    Scalars["AiCatalogItemConsumerID"]["input"]
  >;
  /** Version to pin the item to, in the format `n.n.n`. Must be a released version. Defaults to the latest released version. Ignored when enabling within the item's managing project, which always tracks the latest released version. */
  pinnedVersion?: InputMaybe<Scalars["AiCatalogPinnedVersion"]["input"]>;
  /** Target project or top-level group in which the catalog item is configured. */
  target: ItemConsumerTargetInput;
  /**
   * Filter conditions for the auto-created flow triggers, keyed by event type. Introduced in GitLab 19.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.1.
   */
  triggerFilter?: InputMaybe<Scalars["JSON"]["input"]>;
  /** List of event types to create flow triggers for (values can be mention, assign or assign_reviewer). */
  triggerTypes?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of AiCatalogItemConsumerDelete */
export type AiCatalogItemConsumerDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog item consumer to delete. */
  id: Scalars["AiCatalogItemConsumerID"]["input"];
};

/** Autogenerated input type of AiCatalogItemConsumerUpdate */
export type AiCatalogItemConsumerUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog item consumer to update. */
  id: Scalars["AiCatalogItemConsumerID"]["input"];
  /** Version the item is pinned to, in the format `n.n.n`. */
  pinnedVersion?: InputMaybe<Scalars["AiCatalogPinnedVersion"]["input"]>;
  /**
   * Version the item is pinned to, in the format `n.n.n`. Deprecated in GitLab 19.0: Use `pinnedVersion` instead.
   * @deprecated Use `pinnedVersion` instead. Deprecated in GitLab 19.0.
   */
  pinnedVersionPrefix?: InputMaybe<Scalars["AiCatalogPinnedVersion"]["input"]>;
  /** Service account to associate with the item consumer. */
  serviceAccountId?: InputMaybe<Scalars["UserID"]["input"]>;
  /** List of event types to create flow triggers for (values can be mention, assign or assign_reviewer). */
  triggerTypes?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of AiCatalogItemReport */
export type AiCatalogItemReportInput = {
  /** Additional details about the report. Limited to 1000 characters. */
  body?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog item to report. */
  id: Scalars["AiCatalogItemID"]["input"];
  /** Reason for reporting the catalog item. */
  reason: AiCatalogItemReportReason;
};

/** Possible reasons for reporting an AI catalog item. */
export enum AiCatalogItemReportReason {
  /** Wasting compute or causing performance issues. */
  ExcessiveResourceUsage = "EXCESSIVE_RESOURCE_USAGE",
  /** Contains dangerous code, exploits, or harmful actions. */
  ImmediateSecurityThreat = "IMMEDIATE_SECURITY_THREAT",
  /** Please describe below. */
  Other = "OTHER",
  /** Hypothetical or low risk security flaws that could be exploited. */
  PotentialSecurityThreat = "POTENTIAL_SECURITY_THREAT",
  /** Frequently failing or nuisance activity. */
  SpamOrLowQuality = "SPAM_OR_LOW_QUALITY",
}

/** Autogenerated input type of AiCatalogItemStar */
export type AiCatalogItemStarInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog item to star or unstar. */
  id: Scalars["AiCatalogItemID"]["input"];
  /** Indicates whether to star or unstar the catalog item. */
  starred: Scalars["Boolean"]["input"];
};

/** Possible item types for AI items. */
export enum AiCatalogItemType {
  /** Agent. */
  Agent = "AGENT",
  /** Flow. */
  Flow = "FLOW",
  /** Foundational agent. */
  FoundationalAgent = "FOUNDATIONAL_AGENT",
  /** Third party flow. */
  ThirdPartyFlow = "THIRD_PARTY_FLOW",
}

export enum AiCatalogItemVerificationLevel {
  /** The item is Gitlab Maintained */
  GitlabMaintained = "GITLAB_MAINTAINED",
  /** The item is Gitlab Partner Maintained */
  GitlabPartnerMaintained = "GITLAB_PARTNER_MAINTAINED",
  /** The item is Unverified */
  Unverified = "UNVERIFIED",
  /** The item is Verified Creator Maintained */
  VerifiedCreatorMaintained = "VERIFIED_CREATOR_MAINTAINED",
  /** The item is Verified Creator Self Managed */
  VerifiedCreatorSelfManaged = "VERIFIED_CREATOR_SELF_MANAGED",
}

/** Autogenerated input type of AiCatalogItemVersionRestore */
export type AiCatalogItemVersionRestoreInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether to mark the current latest version as deprecated. */
  deprecateCurrent?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the item version to restore from. */
  id: Scalars["AiCatalogItemVersionID"]["input"];
};

/** Possible visibility levels for AI catalog items. */
export enum AiCatalogItemVisibility {
  /** Internal visibility. */
  Internal = "INTERNAL",
  /** Private visibility. */
  Private = "PRIVATE",
  /** Public visibility. */
  Public = "PUBLIC",
}

/** Values for sorting AI Catalog items. */
export enum AiCatalogItemsSort {
  /** By catalog priority order. */
  CatalogPriority = "CATALOG_PRIORITY",
  /** Star count by ascending order. */
  StarCountAsc = "STAR_COUNT_ASC",
  /** Star count by descending order. */
  StarCountDesc = "STAR_COUNT_DESC",
  /** Last 30-day usage count by ascending order. */
  UsageCountAsc = "USAGE_COUNT_ASC",
  /** Last 30-day usage count by descending order. */
  UsageCountDesc = "USAGE_COUNT_DESC",
}

/** Authentication types for MCP servers */
export enum AiCatalogMcpServerAuthType {
  /** No authentication. */
  NoAuth = "NO_AUTH",
  /** OAuth authentication. */
  Oauth = "OAUTH",
}

/** Autogenerated input type of AiCatalogMcpServerCreate */
export type AiCatalogMcpServerCreateInput = {
  /** Authentication type for the MCP server. */
  authType: AiCatalogMcpServerAuthType;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description for the MCP server. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Homepage URL for the MCP server. */
  homepageUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Name for the MCP server. */
  name: Scalars["String"]["input"];
  /** OAuth client ID for the MCP server. */
  oauthClientId?: InputMaybe<Scalars["String"]["input"]>;
  /** OAuth client secret for the MCP server. */
  oauthClientSecret?: InputMaybe<Scalars["String"]["input"]>;
  /** Transport type for the MCP server. */
  transport: AiCatalogMcpServerTransport;
  /** URL for the MCP server. */
  url: Scalars["String"]["input"];
};

/** Transport types for MCP servers */
export enum AiCatalogMcpServerTransport {
  /** HTTP transport. */
  Http = "HTTP",
}

/** Autogenerated input type of AiCatalogMcpServerUpdate */
export type AiCatalogMcpServerUpdateInput = {
  /** Authentication type for the MCP server. */
  authType?: InputMaybe<AiCatalogMcpServerAuthType>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description for the MCP server. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Homepage URL for the MCP server. */
  homepageUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the MCP server to update. */
  id: Scalars["AiCatalogMcpServerID"]["input"];
  /** Name for the MCP server. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** OAuth client ID for the MCP server. */
  oauthClientId?: InputMaybe<Scalars["String"]["input"]>;
  /** OAuth client secret for the MCP server. */
  oauthClientSecret?: InputMaybe<Scalars["String"]["input"]>;
  /** Transport type for the MCP server. */
  transport?: InputMaybe<AiCatalogMcpServerTransport>;
  /** URL for the MCP server. */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AiCatalogThirdPartyFlowCreate */
export type AiCatalogThirdPartyFlowCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** YAML definition for the Flow. */
  definition: Scalars["String"]["input"];
  /** Description for the Flow. */
  description: Scalars["String"]["input"];
  /** Name for the Flow. */
  name: Scalars["String"]["input"];
  /** Project for the Flow. */
  projectId: Scalars["ProjectID"]["input"];
  /**
   * Whether the Flow is publicly visible in the catalog. Deprecated in GitLab 19.2: Use `visibility`.
   * @deprecated Use `visibility`. Deprecated in GitLab 19.2.
   */
  public?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to release the latest version of the Flow. */
  release?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Visibility of the Flow in the catalog. Only available when the `ai_catalog_internal_visibility` feature flag is enabled. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  visibility?: InputMaybe<AiCatalogItemVisibility>;
};

/** Autogenerated input type of AiCatalogThirdPartyFlowDelete */
export type AiCatalogThirdPartyFlowDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** When true, the Third Party Flow will always be hard deleted and never soft deleted. Can only be used by instance admins */
  forceHardDelete?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the catalog Third Party Flow to delete. */
  id: Scalars["AiCatalogItemID"]["input"];
};

/** Autogenerated input type of AiCatalogThirdPartyFlowUpdate */
export type AiCatalogThirdPartyFlowUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** YAML definition for the Flow. */
  definition?: InputMaybe<Scalars["String"]["input"]>;
  /** Description for the Flow. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the catalog Flow to update. */
  id: Scalars["AiCatalogItemID"]["input"];
  /** Name for the Flow. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Whether the Flow is publicly visible in the catalog. Deprecated in GitLab 19.2: Use `visibility`.
   * @deprecated Use `visibility`. Deprecated in GitLab 19.2.
   */
  public?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to release the latest version of the Flow. */
  release?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Bump version, calculated from the last released version name. */
  versionBump?: InputMaybe<AiCatalogVersionBump>;
  /**
   * Visibility of the Flow in the catalog. Only available when the `ai_catalog_internal_visibility` feature flag is enabled. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  visibility?: InputMaybe<AiCatalogItemVisibility>;
};

/** Possible version bumps for AI catalog items. */
export enum AiCatalogVersionBump {
  /** Major version bump. */
  Major = "MAJOR",
  /** Minor version bump. */
  Minor = "MINOR",
  /** Patch version bump. */
  Patch = "PATCH",
}

export type AiChatInput = {
  /** Additional context to be passed for the chat. */
  additionalContext?: InputMaybe<Array<AiAdditionalContextInput>>;
  /** Content of the message. */
  content: Scalars["String"]["input"];
  /** Information about currently selected text which can be passed for additional context. */
  currentFile?: InputMaybe<AiCurrentFileInput>;
  /** Global ID of the namespace the user is acting on. */
  namespaceId?: InputMaybe<Scalars["NamespaceID"]["input"]>;
  /** Global ID of the resource to mutate. */
  resourceId?: InputMaybe<Scalars["AiModelID"]["input"]>;
};

/** Conversation type of the thread. */
export enum AiConversationsThreadsConversationType {
  /** duo_chat thread. */
  DuoChat = "DUO_CHAT",
  /** duo_chat_legacy thread. */
  DuoChatLegacy = "DUO_CHAT_LEGACY",
  /** duo_code_review thread. */
  DuoCodeReview = "DUO_CODE_REVIEW",
  /** duo_quick_chat thread. */
  DuoQuickChat = "DUO_QUICK_CHAT",
}

/** Reason GitLab credits are unavailable. */
export enum AiCreditsDenialReason {
  /** Usage billing is not available for the account. */
  UsageBillingForbidden = "USAGE_BILLING_FORBIDDEN",
}

export type AiCurrentFileInput = {
  /** Content above cursor. */
  contentAboveCursor?: InputMaybe<Scalars["String"]["input"]>;
  /** Content below cursor. */
  contentBelowCursor?: InputMaybe<Scalars["String"]["input"]>;
  /** File name. */
  fileName: Scalars["String"]["input"];
  /** Selected text. */
  selectedText: Scalars["String"]["input"];
};

export type AiDescriptionComposerInput = {
  /** Current description. */
  description: Scalars["String"]["input"];
  /**
   * Previously AI-generated description content used for context in iterative refinements or follow-up prompts.
   *
   */
  previousResponse?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
  /** Source branch of the changes. */
  sourceBranch?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the project where the changes are from. */
  sourceProjectId?: InputMaybe<Scalars["ID"]["input"]>;
  /** Target branch of where the changes will be merged into. */
  targetBranch?: InputMaybe<Scalars["String"]["input"]>;
  /** Current merge request title. */
  title: Scalars["String"]["input"];
  /** Prompt from user. */
  userPrompt: Scalars["String"]["input"];
};

/** Action to perform on a domain setting list for AI features. */
export enum AiDomainSettingAction {
  /** Add domains to the list. */
  Add = "ADD",
  /** Remove domains from the list. */
  Remove = "REMOVE",
}

/** Type of domain setting to retrieve for AI features. */
export enum AiDomainSettingType {
  /** Domains that are allowed. */
  Allowed = "ALLOWED",
  /** Domains that are denied. */
  Denied = "DENIED",
}

/** Autogenerated input type of AiDomainSettingsInstanceUpdate */
export type AiDomainSettingsInstanceUpdateInput = {
  /** Action to perform on the domain list. */
  action: AiDomainSettingAction;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Type of domain setting to update. */
  domainSettingType: AiDomainSettingType;
  /** List of domains to add or remove. */
  domains: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AiDomainSettingsNamespaceUpdate */
export type AiDomainSettingsNamespaceUpdateInput = {
  /** Action to perform on the domain list. */
  action: AiDomainSettingAction;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Type of domain setting to update. */
  domainSettingType: AiDomainSettingType;
  /** List of domains to add or remove. */
  domains: Array<Scalars["String"]["input"]>;
  /** Global ID of the root namespace to update. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Autogenerated input type of AiDuoWorkflowCreate */
export type AiDuoWorkflowCreateInput = {
  /** Actions the agent is allowed to perform. */
  agentPrivileges?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** ID of the catalog item the workflow is triggered from. */
  aiCatalogItemVersionId?: InputMaybe<
    Scalars["AiCatalogItemVersionID"]["input"]
  >;
  /** When enabled, Duo Agent Platform may stop to ask the user questions before proceeding. */
  allowAgentToRequestUser?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Environment for the workflow. */
  environment?: InputMaybe<WorkflowEnvironment>;
  /** Goal of the workflow. */
  goal?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the noteable (Issue) that the workflow is associated with. */
  issueId?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** IID of the noteable (MergeRequest) that the workflow is associated with. */
  mergeRequestId?: InputMaybe<Scalars["BigInt"]["input"]>;
  /** Global ID of the namespace the user is acting on. */
  namespaceId?: InputMaybe<Scalars["NamespaceID"]["input"]>;
  /** Actions the agent can perform without asking for approval. */
  preApprovedAgentPrivileges?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Global ID of the project the user is acting on. */
  projectId?: InputMaybe<Scalars["ProjectID"]["input"]>;
  /** Workflow type based on its capability. */
  workflowDefinition?: InputMaybe<Scalars["String"]["input"]>;
};

export type AiExplainVulnerabilityInput = {
  /** Include vulnerability source code in the AI prompt. */
  includeSourceCode?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
};

/** Providers for AI features that can be configured. */
export enum AiFeatureProviders {
  /** Disabled option */
  Disabled = "DISABLED",
  /** Self hosted option */
  SelfHosted = "SELF_HOSTED",
  /** Unassigned option */
  Unassigned = "UNASSIGNED",
  /** Vendored option */
  Vendored = "VENDORED",
}

/** Autogenerated input type of AiFeatureSettingModelAllowlistUpdate */
export type AiFeatureSettingModelAllowlistUpdateInput = {
  /** Whether the model selection allowlist is enabled for the feature. */
  allowlistEnabled: Scalars["Boolean"]["input"];
  /** Identifiers of the GitLab-managed models allowed for the feature. Ignored when `allowlistEnabled` is false. */
  allowlistModelRefs: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** AI feature whose model allowlist is being configured. */
  feature: AiFeatures;
};

/** Autogenerated input type of AiFeatureSettingUpdate */
export type AiFeatureSettingUpdateInput = {
  /** Global ID of the self-hosted model providing the AI setting. */
  aiSelfHostedModelId?: InputMaybe<Scalars["AiSelfHostedModelID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Array of AI features being configured (for single or batch update). */
  features: Array<AiFeatures>;
  /** Identifier of the selected model for the feature. */
  offeredModelRef?: InputMaybe<Scalars["String"]["input"]>;
  /** Provider for AI setting. */
  provider: AiFeatureProviders;
};

/** AI features that can be configured through the Duo self-hosted feature settings. */
export enum AiFeatures {
  /** Code completion feature setting */
  CodeCompletions = "CODE_COMPLETIONS",
  /** Code generation feature setting */
  CodeGenerations = "CODE_GENERATIONS",
  /** Duo agent platform feature setting */
  DuoAgentPlatform = "DUO_AGENT_PLATFORM",
  /** Duo agent platform agentic chat feature setting */
  DuoAgentPlatformAgenticChat = "DUO_AGENT_PLATFORM_AGENTIC_CHAT",
  /** Duo Chat feature setting */
  DuoChat = "DUO_CHAT",
  /** Duo chat explain code feature setting */
  DuoChatExplainCode = "DUO_CHAT_EXPLAIN_CODE",
  /** Duo chat explain vulnerability feature setting */
  DuoChatExplainVulnerability = "DUO_CHAT_EXPLAIN_VULNERABILITY",
  /** Duo chat fix code feature setting */
  DuoChatFixCode = "DUO_CHAT_FIX_CODE",
  /** Duo chat refactor code feature setting */
  DuoChatRefactorCode = "DUO_CHAT_REFACTOR_CODE",
  /** Duo chat summarize comment feature setting */
  DuoChatSummarizeComments = "DUO_CHAT_SUMMARIZE_COMMENTS",
  /** Duo chat troubleshoot job feature setting */
  DuoChatTroubleshootJob = "DUO_CHAT_TROUBLESHOOT_JOB",
  /** Duo chat write test feature setting */
  DuoChatWriteTests = "DUO_CHAT_WRITE_TESTS",
  /** Feature discovery search feature setting */
  FeatureDiscoverySearch = "FEATURE_DISCOVERY_SEARCH",
  /** Generate commit message feature setting */
  GenerateCommitMessage = "GENERATE_COMMIT_MESSAGE",
  /** Glab ask git command feature setting */
  GlabAskGitCommand = "GLAB_ASK_GIT_COMMAND",
  /** Resolve dependency bump feature setting */
  ResolveDependencyBump = "RESOLVE_DEPENDENCY_BUMP",
  /** Resolve vulnerability feature setting */
  ResolveVulnerability = "RESOLVE_VULNERABILITY",
  /** Review merge request feature setting */
  ReviewMergeRequest = "REVIEW_MERGE_REQUEST",
  /** Review merge request dap feature setting */
  ReviewMergeRequestDap = "REVIEW_MERGE_REQUEST_DAP",
  /** Sast vulnerability fp detection feature setting */
  SastVulnerabilityFpDetection = "SAST_VULNERABILITY_FP_DETECTION",
  /** Sast vulnerability resolution feature setting */
  SastVulnerabilityResolution = "SAST_VULNERABILITY_RESOLUTION",
  /** Secret vulnerability fp detection feature setting */
  SecretVulnerabilityFpDetection = "SECRET_VULNERABILITY_FP_DETECTION",
  /** Security review feature setting */
  SecurityReview = "SECURITY_REVIEW",
  /** Summarize new merge request feature setting */
  SummarizeNewMergeRequest = "SUMMARIZE_NEW_MERGE_REQUEST",
  /** Summarize review feature setting */
  SummarizeReview = "SUMMARIZE_REVIEW",
}

/** Autogenerated input type of AiFlowTriggerCreate */
export type AiFlowTriggerCreateInput = {
  /** AI catalog item consumer to use instead of config_path. */
  aiCatalogItemConsumerId?: InputMaybe<
    Scalars["AiCatalogItemConsumerID"]["input"]
  >;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Path to the configuration file for the AI flow trigger. */
  configPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the AI flow trigger. */
  description: Scalars["String"]["input"];
  /** Event types that triggers the AI flow. */
  eventTypes?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /**
   * Filter conditions for the AI flow trigger. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  filter?: InputMaybe<Scalars["JSON"]["input"]>;
  /** Full path of the project the AI flow trigger is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Service account for the AI flow trigger. */
  userId?: InputMaybe<Scalars["UserID"]["input"]>;
};

/** Autogenerated input type of AiFlowTriggerDelete */
export type AiFlowTriggerDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the flow trigger to delete. */
  id: Scalars["AiFlowTriggerID"]["input"];
};

/** Possible event types for flow triggers. */
export enum AiFlowTriggerEventType {
  /** Flow trigger assign event. */
  Assign = "ASSIGN",
  /** Flow trigger assign_reviewer event. */
  AssignReviewer = "ASSIGN_REVIEWER",
  /** Flow trigger mention event. */
  Mention = "MENTION",
  /** Flow trigger merge_request event. */
  MergeRequest = "MERGE_REQUEST",
  /** Flow trigger merge_request_code_conflict event. */
  MergeRequestCodeConflict = "MERGE_REQUEST_CODE_CONFLICT",
  /** Flow trigger merge_request_ready event. */
  MergeRequestReady = "MERGE_REQUEST_READY",
  /** Flow trigger pipeline_hooks event. */
  PipelineHooks = "PIPELINE_HOOKS",
  /** Flow trigger work_item event. */
  WorkItem = "WORK_ITEM",
}

/** Autogenerated input type of AiFlowTriggerUpdate */
export type AiFlowTriggerUpdateInput = {
  /** AI catalog item consumer to use instead of config_path. */
  aiCatalogItemConsumerId?: InputMaybe<
    Scalars["AiCatalogItemConsumerID"]["input"]
  >;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Path to the configuration file for the AI flow trigger. */
  configPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the AI flow trigger. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Event types that triggers the AI flow. */
  eventTypes?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /**
   * Filter conditions for the AI flow trigger. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  filter?: InputMaybe<Scalars["JSON"]["input"]>;
  /** ID of the flow trigger to update. */
  id: Scalars["AiFlowTriggerID"]["input"];
  /** Service account for the AI flow trigger. */
  userId?: InputMaybe<Scalars["UserID"]["input"]>;
};

export type AiGenerateCommitMessageInput = {
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
};

export type AiGenerateDescriptionInput = {
  /** Content of the message. */
  content: Scalars["String"]["input"];
  /** Name of the description template to use to generate message off of. */
  descriptionTemplateName?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
};

export type AiMeasureCommentTemperatureInput = {
  /** Content of the message. */
  content: Scalars["String"]["input"];
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
};

/** Possible message roles for AI features. */
export enum AiMessageRole {
  /** assistant message. */
  Assistant = "ASSISTANT",
  /** system message. */
  System = "SYSTEM",
  /** user message. */
  User = "USER",
}

/** Types of messages returned from AI features. */
export enum AiMessageType {
  /** Tool selection message. */
  Tool = "TOOL",
}

/** AI features that can be configured through the Model Selection feature settings. */
export enum AiModelSelectionFeatures {
  /** Code completion feature setting */
  CodeCompletions = "CODE_COMPLETIONS",
  /** Code generation feature setting */
  CodeGenerations = "CODE_GENERATIONS",
  /** Duo agent platform feature setting */
  DuoAgentPlatform = "DUO_AGENT_PLATFORM",
  /** Duo agent platform agentic chat feature setting */
  DuoAgentPlatformAgenticChat = "DUO_AGENT_PLATFORM_AGENTIC_CHAT",
  /** Duo Chat feature setting */
  DuoChat = "DUO_CHAT",
  /** Duo chat explain code feature setting */
  DuoChatExplainCode = "DUO_CHAT_EXPLAIN_CODE",
  /** Duo chat explain vulnerability feature setting */
  DuoChatExplainVulnerability = "DUO_CHAT_EXPLAIN_VULNERABILITY",
  /** Duo chat fix code feature setting */
  DuoChatFixCode = "DUO_CHAT_FIX_CODE",
  /** Duo chat refactor code feature setting */
  DuoChatRefactorCode = "DUO_CHAT_REFACTOR_CODE",
  /** Duo chat summarize comment feature setting */
  DuoChatSummarizeComments = "DUO_CHAT_SUMMARIZE_COMMENTS",
  /** Duo chat troubleshoot job feature setting */
  DuoChatTroubleshootJob = "DUO_CHAT_TROUBLESHOOT_JOB",
  /** Duo chat write test feature setting */
  DuoChatWriteTests = "DUO_CHAT_WRITE_TESTS",
  /** Generate commit message feature setting */
  GenerateCommitMessage = "GENERATE_COMMIT_MESSAGE",
  /** Glab ask git command feature setting */
  GlabAskGitCommand = "GLAB_ASK_GIT_COMMAND",
  /** Resolve dependency bump feature setting */
  ResolveDependencyBump = "RESOLVE_DEPENDENCY_BUMP",
  /** Resolve vulnerability feature setting */
  ResolveVulnerability = "RESOLVE_VULNERABILITY",
  /** Review merge request feature setting */
  ReviewMergeRequest = "REVIEW_MERGE_REQUEST",
  /** Review merge request dap feature setting */
  ReviewMergeRequestDap = "REVIEW_MERGE_REQUEST_DAP",
  /** Sast vulnerability fp detection feature setting */
  SastVulnerabilityFpDetection = "SAST_VULNERABILITY_FP_DETECTION",
  /** Sast vulnerability resolution feature setting */
  SastVulnerabilityResolution = "SAST_VULNERABILITY_RESOLUTION",
  /** Secret vulnerability fp detection feature setting */
  SecretVulnerabilityFpDetection = "SECRET_VULNERABILITY_FP_DETECTION",
  /** Security review feature setting */
  SecurityReview = "SECURITY_REVIEW",
  /** Summarize new merge request feature setting */
  SummarizeNewMergeRequest = "SUMMARIZE_NEW_MERGE_REQUEST",
  /** Summarize review feature setting */
  SummarizeReview = "SUMMARIZE_REVIEW",
}

/** Autogenerated input type of AiModelSelectionNamespaceModelAllowlistUpdate */
export type AiModelSelectionNamespaceModelAllowlistUpdateInput = {
  /** Whether the model selection allowlist is enabled for the feature. */
  allowlistEnabled: Scalars["Boolean"]["input"];
  /** Identifiers of the GitLab-managed models allowed for the feature. Ignored when `allowlistEnabled` is false. */
  allowlistModelRefs: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** AI feature whose model allowlist is being configured. */
  feature: AiFeatures;
  /** Group whose model allowlist is being configured. */
  groupId: Scalars["GroupID"]["input"];
};

/** Autogenerated input type of AiModelSelectionNamespaceUpdate */
export type AiModelSelectionNamespaceUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Array of AI features being configured (for single or batch update). */
  features: Array<AiModelSelectionFeatures>;
  /** Group for the model selection. */
  groupId: Scalars["GroupID"]["input"];
  /** Identifier of the selected model for the feature. */
  offeredModelRef: Scalars["String"]["input"];
};

export type AiResolveVulnerabilityInput = {
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
  /** Global ID of the merge request which the merge request containing the vulnerability resolution will target. */
  vulnerableMergeRequestId?: InputMaybe<Scalars["MergeRequestID"]["input"]>;
};

/** Autogenerated input type of AiSelfHostedModelConnectionCheck */
export type AiSelfHostedModelConnectionCheckInput = {
  /** API token to access the self-hosted model, if any. */
  apiToken?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Endpoint of the self-hosted model. */
  endpoint?: InputMaybe<Scalars["String"]["input"]>;
  /** Identifier for 3rd party model provider. */
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  /** AI model deployed. */
  model: AiAcceptedSelfHostedModels;
  /** Deployment name of the self-hosted model. */
  name: Scalars["String"]["input"];
  /** Provider for the self-hosted model. */
  provider: AiSelfHostedModelProvider;
};

/** Autogenerated input type of AiSelfHostedModelCreate */
export type AiSelfHostedModelCreateInput = {
  /** API token to access the self-hosted model, if any. */
  apiToken?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Endpoint of the self-hosted model. */
  endpoint?: InputMaybe<Scalars["String"]["input"]>;
  /** Identifier for 3rd party model provider. */
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  /** AI model deployed. */
  model: AiAcceptedSelfHostedModels;
  /** Deployment name of the self-hosted model. */
  name: Scalars["String"]["input"];
  /** Provider for the self-hosted model. */
  provider: AiSelfHostedModelProvider;
};

/** Autogenerated input type of AiSelfHostedModelDelete */
export type AiSelfHostedModelDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the self-hosted model to delete. */
  id: Scalars["AiSelfHostedModelID"]["input"];
};

/** Provider for a self-hosted model. */
export enum AiSelfHostedModelProvider {
  /** API provider. */
  Api = "API",
  /** Amazon Bedrock provider. */
  Bedrock = "BEDROCK",
  /** Gemini Enterprise Agent Platform provider. */
  VertexAi = "VERTEX_AI",
}

/** GitLab release state of the model */
export enum AiSelfHostedModelReleaseState {
  /** Beta status. */
  Beta = "BETA",
  /** Experimental status. */
  Experimental = "EXPERIMENTAL",
  /** GA status. */
  Ga = "GA",
}

/** Autogenerated input type of AiSelfHostedModelUpdate */
export type AiSelfHostedModelUpdateInput = {
  /** API token to access the self-hosted model, if any. */
  apiToken?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Endpoint of the self-hosted model. */
  endpoint?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the self-hosted model to update. */
  id: Scalars["AiSelfHostedModelID"]["input"];
  /** Identifier for 3rd party model provider. */
  identifier?: InputMaybe<Scalars["String"]["input"]>;
  /** AI model deployed. */
  model: AiAcceptedSelfHostedModels;
  /** Deployment name of the self-hosted model. */
  name: Scalars["String"]["input"];
  /** Provider for the self-hosted model. */
  provider: AiSelfHostedModelProvider;
};

/** Summarize a new merge request based on two branches. Returns `null` if the `add_ai_summary_for_new_mr` feature flag is disabled. */
export type AiSummarizeNewMergeRequestInput = {
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
  /** Source branch of the changes. */
  sourceBranch: Scalars["String"]["input"];
  /** ID of the project where the changes are from. */
  sourceProjectId?: InputMaybe<Scalars["ID"]["input"]>;
  /** Target branch of where the changes will be merged into. */
  targetBranch: Scalars["String"]["input"];
};

export type AiSummarizeReviewInput = {
  /** Global ID of the resource to mutate. */
  resourceId: Scalars["AiModelID"]["input"];
};

/** Action type categorisation for an AI tool */
export enum AiToolActionType {
  /** Tool performs destructive operations. */
  Destroy = "DESTROY",
  /** Tool performs read-only operations. */
  Read = "READ",
  /** Tool performs write operations. */
  Write = "WRITE",
}

/** Permission mode for an AI tool */
export enum AiToolPermission {
  /** Tool is always allowed to run without approval. */
  Allow = "ALLOW",
  /** Tool requires human approval before running. */
  Ask = "ASK",
  /** Tool is always blocked from running. */
  Deny = "DENY",
}

/** Source of an AI tool. */
export enum AiToolSource {
  /** Tool provided by GitLab. */
  Gitlab = "GITLAB",
  /** Tool provided via MCP. */
  Mcp = "MCP",
}

/** Type of AI usage event */
export enum AiUsageEventType {
  /** Agent platform session was created. */
  AgentPlatformSessionCreated = "AGENT_PLATFORM_SESSION_CREATED",
  /** Agent platform session was dropped. */
  AgentPlatformSessionDropped = "AGENT_PLATFORM_SESSION_DROPPED",
  /** Agent platform session was finished. */
  AgentPlatformSessionFinished = "AGENT_PLATFORM_SESSION_FINISHED",
  /** Agent platform session was resumed. */
  AgentPlatformSessionResumed = "AGENT_PLATFORM_SESSION_RESUMED",
  /** Agent platform session was started. */
  AgentPlatformSessionStarted = "AGENT_PLATFORM_SESSION_STARTED",
  /** Agent platform session was stopped. */
  AgentPlatformSessionStopped = "AGENT_PLATFORM_SESSION_STOPPED",
  /** User clicked learn more on Duo Agent Platform subscription expired state. */
  ClickDuoAgenticSubscriptionExpiredLearnMore = "CLICK_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_LEARN_MORE",
  /** User clicked upgrade on Duo Agent Platform subscription expired state. */
  ClickDuoAgenticSubscriptionExpiredUpgrade = "CLICK_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_UPGRADE",
  /** Code Suggestion was requested. Old data only. */
  CodeSuggestionsRequested = "CODE_SUGGESTIONS_REQUESTED",
  /** Code Suggestion was accepted in IDE. */
  CodeSuggestionAcceptedInIde = "CODE_SUGGESTION_ACCEPTED_IN_IDE",
  /** Code Suggestion token was refreshed. Old data only. */
  CodeSuggestionDirectAccessTokenRefresh = "CODE_SUGGESTION_DIRECT_ACCESS_TOKEN_REFRESH",
  /** Code Suggestion was rejected in IDE. */
  CodeSuggestionRejectedInIde = "CODE_SUGGESTION_REJECTED_IN_IDE",
  /** Code Suggestion was shown in IDE. */
  CodeSuggestionShownInIde = "CODE_SUGGESTION_SHOWN_IN_IDE",
  /** Duo Workflow workload was completed. */
  DuoWorkflowWorkloadCompleted = "DUO_WORKFLOW_WORKLOAD_COMPLETED",
  /** Duo Code Review encountered an error. */
  EncounterDuoCodeReviewErrorDuringReview = "ENCOUNTER_DUO_CODE_REVIEW_ERROR_DURING_REVIEW",
  /** Files were excluded from Duo Code Review. */
  ExcludedFilesFromDuoCodeReview = "EXCLUDED_FILES_FROM_DUO_CODE_REVIEW",
  /** Duo Code Review found nothing to review on MR. */
  FindNothingToReviewDuoCodeReviewOnMr = "FIND_NOTHING_TO_REVIEW_DUO_CODE_REVIEW_ON_MR",
  /** Duo Code Review found no issues after review. */
  FindNoIssuesDuoCodeReviewAfterReview = "FIND_NO_ISSUES_DUO_CODE_REVIEW_AFTER_REVIEW",
  /** MCP tool call was finished. */
  FinishMcpToolCall = "FINISH_MCP_TOOL_CALL",
  /** Fix pipeline suggestion was applied. */
  FixPipelineSuggestionApplied = "FIX_PIPELINE_SUGGESTION_APPLIED",
  /** Fix pipeline suggestion was posted. */
  FixPipelineSuggestionPosted = "FIX_PIPELINE_SUGGESTION_POSTED",
  /** Merge commit message was generated for a merge request. */
  GenerateMergeCommitMessage = "GENERATE_MERGE_COMMIT_MESSAGE",
  /** Duo Code Review posted a diff comment. */
  PostCommentDuoCodeReviewOnDiff = "POST_COMMENT_DUO_CODE_REVIEW_ON_DIFF",
  /** Duo Code Review comments were published. */
  PublishDuoCodeReviewComments = "PUBLISH_DUO_CODE_REVIEW_COMMENTS",
  /** User gave thumbs-down reaction to Duo Code Review comment. */
  ReactThumbsDownOnDuoCodeReviewComment = "REACT_THUMBS_DOWN_ON_DUO_CODE_REVIEW_COMMENT",
  /** User gave thumbs-up reaction to Duo Code Review comment. */
  ReactThumbsUpOnDuoCodeReviewComment = "REACT_THUMBS_UP_ON_DUO_CODE_REVIEW_COMMENT",
  /** Duo Chat response was requested. */
  RequestDuoChatResponse = "REQUEST_DUO_CHAT_RESPONSE",
  /** MR author requested Duo Code Review. */
  RequestReviewDuoCodeReviewOnMrByAuthor = "REQUEST_REVIEW_DUO_CODE_REVIEW_ON_MR_BY_AUTHOR",
  /** Non-author requested Duo Code Review on MR. */
  RequestReviewDuoCodeReviewOnMrByNonAuthor = "REQUEST_REVIEW_DUO_CODE_REVIEW_ON_MR_BY_NON_AUTHOR",
  /** AI Catalog item version was restored as new latest version. */
  RestoreAiCatalogItem = "RESTORE_AI_CATALOG_ITEM",
  /** MCP tool call was started. */
  StartMcpToolCall = "START_MCP_TOOL_CALL",
  /** Merge request summary was generated. */
  SummarizeNewMergeRequest = "SUMMARIZE_NEW_MERGE_REQUEST",
  /** A merge request review summary was requested with GitLab Duo. */
  SummarizeReview = "SUMMARIZE_REVIEW",
  /** Troubleshoot job feature was used. */
  TroubleshootJob = "TROUBLESHOOT_JOB",
  /** Duo Agent Platform subscription expired empty state was viewed. */
  ViewDuoAgenticSubscriptionExpiredEmptyState = "VIEW_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_EMPTY_STATE",
}

/** Values for sorting AI user metrics. */
export enum AiUserMetricsSort {
  /** Agent Platform Session Created event count in ascending order. */
  AgentPlatformSessionCreatedAsc = "AGENT_PLATFORM_SESSION_CREATED_ASC",
  /** Agent Platform Session Created event count in descending order. */
  AgentPlatformSessionCreatedDesc = "AGENT_PLATFORM_SESSION_CREATED_DESC",
  /** Agent Platform Session Dropped event count in ascending order. */
  AgentPlatformSessionDroppedAsc = "AGENT_PLATFORM_SESSION_DROPPED_ASC",
  /** Agent Platform Session Dropped event count in descending order. */
  AgentPlatformSessionDroppedDesc = "AGENT_PLATFORM_SESSION_DROPPED_DESC",
  /** Agent Platform Session Finished event count in ascending order. */
  AgentPlatformSessionFinishedAsc = "AGENT_PLATFORM_SESSION_FINISHED_ASC",
  /** Agent Platform Session Finished event count in descending order. */
  AgentPlatformSessionFinishedDesc = "AGENT_PLATFORM_SESSION_FINISHED_DESC",
  /** Agent Platform Session Resumed event count in ascending order. */
  AgentPlatformSessionResumedAsc = "AGENT_PLATFORM_SESSION_RESUMED_ASC",
  /** Agent Platform Session Resumed event count in descending order. */
  AgentPlatformSessionResumedDesc = "AGENT_PLATFORM_SESSION_RESUMED_DESC",
  /** Agent Platform Session Started event count in ascending order. */
  AgentPlatformSessionStartedAsc = "AGENT_PLATFORM_SESSION_STARTED_ASC",
  /** Agent Platform Session Started event count in descending order. */
  AgentPlatformSessionStartedDesc = "AGENT_PLATFORM_SESSION_STARTED_DESC",
  /** Agent Platform Session Stopped event count in ascending order. */
  AgentPlatformSessionStoppedAsc = "AGENT_PLATFORM_SESSION_STOPPED_ASC",
  /** Agent Platform Session Stopped event count in descending order. */
  AgentPlatformSessionStoppedDesc = "AGENT_PLATFORM_SESSION_STOPPED_DESC",
  /** Agent Platform total event count in ascending order. */
  AgentPlatformTotalCountAsc = "AGENT_PLATFORM_TOTAL_COUNT_ASC",
  /** Agent Platform total event count in descending order. */
  AgentPlatformTotalCountDesc = "AGENT_PLATFORM_TOTAL_COUNT_DESC",
  /** Ai Catalog total event count in ascending order. */
  AiCatalogTotalCountAsc = "AI_CATALOG_TOTAL_COUNT_ASC",
  /** Ai Catalog total event count in descending order. */
  AiCatalogTotalCountDesc = "AI_CATALOG_TOTAL_COUNT_DESC",
  /** Chat total event count in ascending order. */
  ChatTotalCountAsc = "CHAT_TOTAL_COUNT_ASC",
  /** Chat total event count in descending order. */
  ChatTotalCountDesc = "CHAT_TOTAL_COUNT_DESC",
  /** Click Duo Agentic Subscription Expired Learn More event count in ascending order. */
  ClickDuoAgenticSubscriptionExpiredLearnMoreAsc = "CLICK_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_LEARN_MORE_ASC",
  /** Click Duo Agentic Subscription Expired Learn More event count in descending order. */
  ClickDuoAgenticSubscriptionExpiredLearnMoreDesc = "CLICK_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_LEARN_MORE_DESC",
  /** Click Duo Agentic Subscription Expired Upgrade event count in ascending order. */
  ClickDuoAgenticSubscriptionExpiredUpgradeAsc = "CLICK_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_UPGRADE_ASC",
  /** Click Duo Agentic Subscription Expired Upgrade event count in descending order. */
  ClickDuoAgenticSubscriptionExpiredUpgradeDesc = "CLICK_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_UPGRADE_DESC",
  /** Code Review total event count in ascending order. */
  CodeReviewTotalCountAsc = "CODE_REVIEW_TOTAL_COUNT_ASC",
  /** Code Review total event count in descending order. */
  CodeReviewTotalCountDesc = "CODE_REVIEW_TOTAL_COUNT_DESC",
  /** Code Suggestions Requested event count in ascending order. */
  CodeSuggestionsRequestedAsc = "CODE_SUGGESTIONS_REQUESTED_ASC",
  /** Code Suggestions Requested event count in descending order. */
  CodeSuggestionsRequestedDesc = "CODE_SUGGESTIONS_REQUESTED_DESC",
  /** Code Suggestions total event count in ascending order. */
  CodeSuggestionsTotalCountAsc = "CODE_SUGGESTIONS_TOTAL_COUNT_ASC",
  /** Code Suggestions total event count in descending order. */
  CodeSuggestionsTotalCountDesc = "CODE_SUGGESTIONS_TOTAL_COUNT_DESC",
  /** Code Suggestion Accepted In Ide event count in ascending order. */
  CodeSuggestionAcceptedInIdeAsc = "CODE_SUGGESTION_ACCEPTED_IN_IDE_ASC",
  /** Code Suggestion Accepted In Ide event count in descending order. */
  CodeSuggestionAcceptedInIdeDesc = "CODE_SUGGESTION_ACCEPTED_IN_IDE_DESC",
  /** Code Suggestion Direct Access Token Refresh event count in ascending order. */
  CodeSuggestionDirectAccessTokenRefreshAsc = "CODE_SUGGESTION_DIRECT_ACCESS_TOKEN_REFRESH_ASC",
  /** Code Suggestion Direct Access Token Refresh event count in descending order. */
  CodeSuggestionDirectAccessTokenRefreshDesc = "CODE_SUGGESTION_DIRECT_ACCESS_TOKEN_REFRESH_DESC",
  /** Code Suggestion Rejected In Ide event count in ascending order. */
  CodeSuggestionRejectedInIdeAsc = "CODE_SUGGESTION_REJECTED_IN_IDE_ASC",
  /** Code Suggestion Rejected In Ide event count in descending order. */
  CodeSuggestionRejectedInIdeDesc = "CODE_SUGGESTION_REJECTED_IN_IDE_DESC",
  /** Code Suggestion Shown In Ide event count in ascending order. */
  CodeSuggestionShownInIdeAsc = "CODE_SUGGESTION_SHOWN_IN_IDE_ASC",
  /** Code Suggestion Shown In Ide event count in descending order. */
  CodeSuggestionShownInIdeDesc = "CODE_SUGGESTION_SHOWN_IN_IDE_DESC",
  /** Duo Workflow total event count in ascending order. */
  DuoWorkflowTotalCountAsc = "DUO_WORKFLOW_TOTAL_COUNT_ASC",
  /** Duo Workflow total event count in descending order. */
  DuoWorkflowTotalCountDesc = "DUO_WORKFLOW_TOTAL_COUNT_DESC",
  /** Duo Workflow Workload Completed event count in ascending order. */
  DuoWorkflowWorkloadCompletedAsc = "DUO_WORKFLOW_WORKLOAD_COMPLETED_ASC",
  /** Duo Workflow Workload Completed event count in descending order. */
  DuoWorkflowWorkloadCompletedDesc = "DUO_WORKFLOW_WORKLOAD_COMPLETED_DESC",
  /** Encounter Duo Code Review Error During Review event count in ascending order. */
  EncounterDuoCodeReviewErrorDuringReviewAsc = "ENCOUNTER_DUO_CODE_REVIEW_ERROR_DURING_REVIEW_ASC",
  /** Encounter Duo Code Review Error During Review event count in descending order. */
  EncounterDuoCodeReviewErrorDuringReviewDesc = "ENCOUNTER_DUO_CODE_REVIEW_ERROR_DURING_REVIEW_DESC",
  /** Excluded Files From Duo Code Review event count in ascending order. */
  ExcludedFilesFromDuoCodeReviewAsc = "EXCLUDED_FILES_FROM_DUO_CODE_REVIEW_ASC",
  /** Excluded Files From Duo Code Review event count in descending order. */
  ExcludedFilesFromDuoCodeReviewDesc = "EXCLUDED_FILES_FROM_DUO_CODE_REVIEW_DESC",
  /** Find Nothing To Review Duo Code Review On Mr event count in ascending order. */
  FindNothingToReviewDuoCodeReviewOnMrAsc = "FIND_NOTHING_TO_REVIEW_DUO_CODE_REVIEW_ON_MR_ASC",
  /** Find Nothing To Review Duo Code Review On Mr event count in descending order. */
  FindNothingToReviewDuoCodeReviewOnMrDesc = "FIND_NOTHING_TO_REVIEW_DUO_CODE_REVIEW_ON_MR_DESC",
  /** Find No Issues Duo Code Review After Review event count in ascending order. */
  FindNoIssuesDuoCodeReviewAfterReviewAsc = "FIND_NO_ISSUES_DUO_CODE_REVIEW_AFTER_REVIEW_ASC",
  /** Find No Issues Duo Code Review After Review event count in descending order. */
  FindNoIssuesDuoCodeReviewAfterReviewDesc = "FIND_NO_ISSUES_DUO_CODE_REVIEW_AFTER_REVIEW_DESC",
  /** Finish Mcp Tool Call event count in ascending order. */
  FinishMcpToolCallAsc = "FINISH_MCP_TOOL_CALL_ASC",
  /** Finish Mcp Tool Call event count in descending order. */
  FinishMcpToolCallDesc = "FINISH_MCP_TOOL_CALL_DESC",
  /** Fix Pipeline Suggestion Applied event count in ascending order. */
  FixPipelineSuggestionAppliedAsc = "FIX_PIPELINE_SUGGESTION_APPLIED_ASC",
  /** Fix Pipeline Suggestion Applied event count in descending order. */
  FixPipelineSuggestionAppliedDesc = "FIX_PIPELINE_SUGGESTION_APPLIED_DESC",
  /** Fix Pipeline Suggestion Posted event count in ascending order. */
  FixPipelineSuggestionPostedAsc = "FIX_PIPELINE_SUGGESTION_POSTED_ASC",
  /** Fix Pipeline Suggestion Posted event count in descending order. */
  FixPipelineSuggestionPostedDesc = "FIX_PIPELINE_SUGGESTION_POSTED_DESC",
  /** Fix Pipeline total event count in ascending order. */
  FixPipelineTotalCountAsc = "FIX_PIPELINE_TOTAL_COUNT_ASC",
  /** Fix Pipeline total event count in descending order. */
  FixPipelineTotalCountDesc = "FIX_PIPELINE_TOTAL_COUNT_DESC",
  /** Generate Merge Commit Message event count in ascending order. */
  GenerateMergeCommitMessageAsc = "GENERATE_MERGE_COMMIT_MESSAGE_ASC",
  /** Generate Merge Commit Message event count in descending order. */
  GenerateMergeCommitMessageDesc = "GENERATE_MERGE_COMMIT_MESSAGE_DESC",
  /** Generate Merge Commit Message total event count in ascending order. */
  GenerateMergeCommitMessageTotalCountAsc = "GENERATE_MERGE_COMMIT_MESSAGE_TOTAL_COUNT_ASC",
  /** Generate Merge Commit Message total event count in descending order. */
  GenerateMergeCommitMessageTotalCountDesc = "GENERATE_MERGE_COMMIT_MESSAGE_TOTAL_COUNT_DESC",
  /** Mcp total event count in ascending order. */
  McpTotalCountAsc = "MCP_TOTAL_COUNT_ASC",
  /** Mcp total event count in descending order. */
  McpTotalCountDesc = "MCP_TOTAL_COUNT_DESC",
  /** Post Comment Duo Code Review On Diff event count in ascending order. */
  PostCommentDuoCodeReviewOnDiffAsc = "POST_COMMENT_DUO_CODE_REVIEW_ON_DIFF_ASC",
  /** Post Comment Duo Code Review On Diff event count in descending order. */
  PostCommentDuoCodeReviewOnDiffDesc = "POST_COMMENT_DUO_CODE_REVIEW_ON_DIFF_DESC",
  /** Publish Duo Code Review Comments event count in ascending order. */
  PublishDuoCodeReviewCommentsAsc = "PUBLISH_DUO_CODE_REVIEW_COMMENTS_ASC",
  /** Publish Duo Code Review Comments event count in descending order. */
  PublishDuoCodeReviewCommentsDesc = "PUBLISH_DUO_CODE_REVIEW_COMMENTS_DESC",
  /** React Thumbs Down On Duo Code Review Comment event count in ascending order. */
  ReactThumbsDownOnDuoCodeReviewCommentAsc = "REACT_THUMBS_DOWN_ON_DUO_CODE_REVIEW_COMMENT_ASC",
  /** React Thumbs Down On Duo Code Review Comment event count in descending order. */
  ReactThumbsDownOnDuoCodeReviewCommentDesc = "REACT_THUMBS_DOWN_ON_DUO_CODE_REVIEW_COMMENT_DESC",
  /** React Thumbs Up On Duo Code Review Comment event count in ascending order. */
  ReactThumbsUpOnDuoCodeReviewCommentAsc = "REACT_THUMBS_UP_ON_DUO_CODE_REVIEW_COMMENT_ASC",
  /** React Thumbs Up On Duo Code Review Comment event count in descending order. */
  ReactThumbsUpOnDuoCodeReviewCommentDesc = "REACT_THUMBS_UP_ON_DUO_CODE_REVIEW_COMMENT_DESC",
  /** Request Duo Chat Response event count in ascending order. */
  RequestDuoChatResponseAsc = "REQUEST_DUO_CHAT_RESPONSE_ASC",
  /** Request Duo Chat Response event count in descending order. */
  RequestDuoChatResponseDesc = "REQUEST_DUO_CHAT_RESPONSE_DESC",
  /** Request Review Duo Code Review On Mr By Author event count in ascending order. */
  RequestReviewDuoCodeReviewOnMrByAuthorAsc = "REQUEST_REVIEW_DUO_CODE_REVIEW_ON_MR_BY_AUTHOR_ASC",
  /** Request Review Duo Code Review On Mr By Author event count in descending order. */
  RequestReviewDuoCodeReviewOnMrByAuthorDesc = "REQUEST_REVIEW_DUO_CODE_REVIEW_ON_MR_BY_AUTHOR_DESC",
  /** Request Review Duo Code Review On Mr By Non Author event count in ascending order. */
  RequestReviewDuoCodeReviewOnMrByNonAuthorAsc = "REQUEST_REVIEW_DUO_CODE_REVIEW_ON_MR_BY_NON_AUTHOR_ASC",
  /** Request Review Duo Code Review On Mr By Non Author event count in descending order. */
  RequestReviewDuoCodeReviewOnMrByNonAuthorDesc = "REQUEST_REVIEW_DUO_CODE_REVIEW_ON_MR_BY_NON_AUTHOR_DESC",
  /** Restore Ai Catalog Item event count in ascending order. */
  RestoreAiCatalogItemAsc = "RESTORE_AI_CATALOG_ITEM_ASC",
  /** Restore Ai Catalog Item event count in descending order. */
  RestoreAiCatalogItemDesc = "RESTORE_AI_CATALOG_ITEM_DESC",
  /** Start Mcp Tool Call event count in ascending order. */
  StartMcpToolCallAsc = "START_MCP_TOOL_CALL_ASC",
  /** Start Mcp Tool Call event count in descending order. */
  StartMcpToolCallDesc = "START_MCP_TOOL_CALL_DESC",
  /** Summarize New Merge Request event count in ascending order. */
  SummarizeNewMergeRequestAsc = "SUMMARIZE_NEW_MERGE_REQUEST_ASC",
  /** Summarize New Merge Request event count in descending order. */
  SummarizeNewMergeRequestDesc = "SUMMARIZE_NEW_MERGE_REQUEST_DESC",
  /** Summarize New Merge Request total event count in ascending order. */
  SummarizeNewMergeRequestTotalCountAsc = "SUMMARIZE_NEW_MERGE_REQUEST_TOTAL_COUNT_ASC",
  /** Summarize New Merge Request total event count in descending order. */
  SummarizeNewMergeRequestTotalCountDesc = "SUMMARIZE_NEW_MERGE_REQUEST_TOTAL_COUNT_DESC",
  /** Summarize Review event count in ascending order. */
  SummarizeReviewAsc = "SUMMARIZE_REVIEW_ASC",
  /** Summarize Review event count in descending order. */
  SummarizeReviewDesc = "SUMMARIZE_REVIEW_DESC",
  /** Summarize Review total event count in ascending order. */
  SummarizeReviewTotalCountAsc = "SUMMARIZE_REVIEW_TOTAL_COUNT_ASC",
  /** Summarize Review total event count in descending order. */
  SummarizeReviewTotalCountDesc = "SUMMARIZE_REVIEW_TOTAL_COUNT_DESC",
  /** Total count of all AI events in ascending order. */
  TotalEventsCountAsc = "TOTAL_EVENTS_COUNT_ASC",
  /** Total count of all AI events in descending order. */
  TotalEventsCountDesc = "TOTAL_EVENTS_COUNT_DESC",
  /** Troubleshoot Job event count in ascending order. */
  TroubleshootJobAsc = "TROUBLESHOOT_JOB_ASC",
  /** Troubleshoot Job event count in descending order. */
  TroubleshootJobDesc = "TROUBLESHOOT_JOB_DESC",
  /** Troubleshoot Job total event count in ascending order. */
  TroubleshootJobTotalCountAsc = "TROUBLESHOOT_JOB_TOTAL_COUNT_ASC",
  /** Troubleshoot Job total event count in descending order. */
  TroubleshootJobTotalCountDesc = "TROUBLESHOOT_JOB_TOTAL_COUNT_DESC",
  /** View Duo Agentic Subscription Expired Empty State event count in ascending order. */
  ViewDuoAgenticSubscriptionExpiredEmptyStateAsc = "VIEW_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_EMPTY_STATE_ASC",
  /** View Duo Agentic Subscription Expired Empty State event count in descending order. */
  ViewDuoAgenticSubscriptionExpiredEmptyStateDesc = "VIEW_DUO_AGENTIC_SUBSCRIPTION_EXPIRED_EMPTY_STATE_DESC",
}

/** Values for sorting alerts */
export enum AlertManagementAlertSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Created time by ascending order. */
  CreatedTimeAsc = "CREATED_TIME_ASC",
  /** Created time by descending order. */
  CreatedTimeDesc = "CREATED_TIME_DESC",
  /** End time by ascending order. */
  EndedAtAsc = "ENDED_AT_ASC",
  /** End time by descending order. */
  EndedAtDesc = "ENDED_AT_DESC",
  /** Events count by ascending order. */
  EventCountAsc = "EVENT_COUNT_ASC",
  /** Events count by descending order. */
  EventCountDesc = "EVENT_COUNT_DESC",
  /** Severity from less critical to more critical. */
  SeverityAsc = "SEVERITY_ASC",
  /** Severity from more critical to less critical. */
  SeverityDesc = "SEVERITY_DESC",
  /** Start time by ascending order. */
  StartedAtAsc = "STARTED_AT_ASC",
  /** Start time by descending order. */
  StartedAtDesc = "STARTED_AT_DESC",
  /** Status by order: `Ignored > Resolved > Acknowledged > Triggered`. */
  StatusAsc = "STATUS_ASC",
  /** Status by order: `Triggered > Acknowledged > Resolved > Ignored`. */
  StatusDesc = "STATUS_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /** Created time by ascending order. */
  UpdatedTimeAsc = "UPDATED_TIME_ASC",
  /** Created time by descending order. */
  UpdatedTimeDesc = "UPDATED_TIME_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Filters the alerts based on given domain */
export enum AlertManagementDomainFilter {
  /** Alerts for operations domain. */
  Operations = "operations",
  /**
   * Alerts for threat monitoring domain. Deprecated in GitLab 15.0: Network policies are deprecated and will be removed in GitLab 16.0.
   * @deprecated Network policies are deprecated and will be removed in GitLab 16.0. Deprecated in GitLab 15.0.
   */
  ThreatMonitoring = "threat_monitoring",
}

/** Values of types of integrations */
export enum AlertManagementIntegrationType {
  /** Integration with any monitoring tool. */
  Http = "HTTP",
  /** Prometheus integration. */
  Prometheus = "PROMETHEUS",
}

/** Field that are available while modifying the custom mapping attributes for an HTTP integration */
export type AlertManagementPayloadAlertFieldInput = {
  /** GitLab alert field name. */
  fieldName: AlertManagementPayloadAlertFieldName;
  /** Human-readable label of the payload path. */
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** Path to value inside payload JSON. */
  path: Array<Scalars["PayloadAlertFieldPathSegment"]["input"]>;
  /** Type of the parsed value. */
  type: AlertManagementPayloadAlertFieldType;
};

/** Values for alert field names used in the custom mapping */
export enum AlertManagementPayloadAlertFieldName {
  /** A high-level summary of the problem. */
  Description = "DESCRIPTION",
  /** The resolved time of the incident. */
  EndTime = "END_TIME",
  /** The unique identifier of the alert. This can be used to group occurrences of the same alert. */
  Fingerprint = "FINGERPRINT",
  /** The name of the associated GitLab environment. */
  GitlabEnvironmentName = "GITLAB_ENVIRONMENT_NAME",
  /** One or more hosts, as to where this incident occurred. */
  Hosts = "HOSTS",
  /** The name of the associated monitoring tool. */
  MonitoringTool = "MONITORING_TOOL",
  /** The affected service. */
  Service = "SERVICE",
  /** The severity of the alert. */
  Severity = "SEVERITY",
  /** The time of the incident. */
  StartTime = "START_TIME",
  /** The title of the incident. */
  Title = "TITLE",
}

/** Values for alert field types used in the custom mapping */
export enum AlertManagementPayloadAlertFieldType {
  /** Array field type. */
  Array = "ARRAY",
  /** DateTime field type. */
  Datetime = "DATETIME",
  /** Number field type. */
  Number = "NUMBER",
  /** String field type. */
  String = "STRING",
}

/** Alert severity values */
export enum AlertManagementSeverity {
  /** Critical severity */
  Critical = "CRITICAL",
  /** High severity */
  High = "HIGH",
  /** Info severity */
  Info = "INFO",
  /** Low severity */
  Low = "LOW",
  /** Medium severity */
  Medium = "MEDIUM",
  /** Unknown severity */
  Unknown = "UNKNOWN",
}

/** Alert status values */
export enum AlertManagementStatus {
  /** Someone is actively investigating the problem. */
  Acknowledged = "ACKNOWLEDGED",
  /** No action will be taken. */
  Ignored = "IGNORED",
  /** The problem has been addressed. */
  Resolved = "RESOLVED",
  /** Investigation has not started. */
  Triggered = "TRIGGERED",
}

/** Autogenerated input type of AlertSetAssignees */
export type AlertSetAssigneesInput = {
  /** Usernames to assign to the alert. Replaces existing assignees by default. */
  assigneeUsernames: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the alert to mutate. */
  iid: Scalars["String"]["input"];
  /** Operation to perform. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the alert to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of AlertTodoCreate */
export type AlertTodoCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the alert to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the alert to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

export enum AnalyticsAggregationPeriod {
  /** Daily aggregation. */
  Day = "DAY",
  /** Monthly aggregation. */
  Month = "MONTH",
  /** Weekly aggregation. */
  Week = "WEEK",
}

/** Input type for filtering projects by analyzer type and status */
export type AnalyzerFilterInput = {
  /** Type of analyzer to filter by. */
  analyzerType: AnalyzerTypeEnum;
  /** Status of the analyzer to filter by. */
  status: AnalyzerStatusEnum;
};

/** Source of the build that ran the analyzer */
export enum AnalyzerSourceEnum {
  /** Job source is an on-demand DAST scan. */
  OnDemandDastScan = "ON_DEMAND_DAST_SCAN",
  /** Job source is an on-demand DAST site profile validation. */
  OnDemandDastValidation = "ON_DEMAND_DAST_VALIDATION",
  /** Job source is a pipeline execution policy. */
  PipelineExecutionPolicy = "PIPELINE_EXECUTION_POLICY",
  /** Job source is a scheduled pipeline execution policy. */
  PipelineExecutionPolicySchedule = "PIPELINE_EXECUTION_POLICY_SCHEDULE",
  /** Job source is a scan execution policy. */
  ScanExecutionPolicy = "SCAN_EXECUTION_POLICY",
  /** Job source is a security orchestration policy. */
  SecurityOrchestrationPolicy = "SECURITY_ORCHESTRATION_POLICY",
  /** Job source is a security scan profile. */
  SecurityScanProfiles = "SECURITY_SCAN_PROFILES",
  /** Job source is defined or included in .gitlab-ci.yml. */
  Yml = "YML",
}

/** Enum for types of analyzers  */
export enum AnalyzerStatusEnum {
  /** Last analyzer execution failed. */
  Failed = "FAILED",
  /** Analyzer is not configured. */
  NotConfigured = "NOT_CONFIGURED",
  /** Analyzer is configured, but has not run in any recent pipelines. */
  Stale = "STALE",
  /** Last analyzer execution finished successfully. */
  Success = "SUCCESS",
}

/** Enum for types of analyzers  */
export enum AnalyzerTypeEnum {
  /** Api fuzzing analyzer. */
  ApiFuzzing = "API_FUZZING",
  /** Cluster image scanning analyzer. */
  ClusterImageScanning = "CLUSTER_IMAGE_SCANNING",
  /** Any kind of container scanning. */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Container scanning for registry. Managed via project security settings. */
  ContainerScanningForRegistry = "CONTAINER_SCANNING_FOR_REGISTRY",
  /** Container scanning analyzer. */
  ContainerScanningPipelineBased = "CONTAINER_SCANNING_PIPELINE_BASED",
  /** Coverage fuzzing analyzer. */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** Dast analyzer. */
  Dast = "DAST",
  /** Dependency scanning analyzer. */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** Sast analyzer. */
  Sast = "SAST",
  /** Sast advanced analyzer. */
  SastAdvanced = "SAST_ADVANCED",
  /** Sast iac analyzer. */
  SastIac = "SAST_IAC",
  /** Any kind of secret detection. */
  SecretDetection = "SECRET_DETECTION",
  /** Secret detection analyzer. */
  SecretDetectionPipelineBased = "SECRET_DETECTION_PIPELINE_BASED",
  /** Secret push protection. Managed via project security settings. */
  SecretDetectionSecretPushProtection = "SECRET_DETECTION_SECRET_PUSH_PROTECTION",
}

/** Analyzer types that can appear in project and group analyzer statuses. */
export enum AnalyzerTypeForStatus {
  /** Api fuzzing analyzer. */
  ApiFuzzing = "API_FUZZING",
  /** Cluster image scanning analyzer. */
  ClusterImageScanning = "CLUSTER_IMAGE_SCANNING",
  /** Any kind of container scanning. */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Container scanning for registry. Managed via project security settings. */
  ContainerScanningForRegistry = "CONTAINER_SCANNING_FOR_REGISTRY",
  /** Container scanning analyzer. */
  ContainerScanningPipelineBased = "CONTAINER_SCANNING_PIPELINE_BASED",
  /** Coverage fuzzing analyzer. */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** Dast analyzer. */
  Dast = "DAST",
  /** Dependency scanning analyzer. */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** Dependency scanning post-processing. */
  DependencyScanningPostProcessing = "DEPENDENCY_SCANNING_POST_PROCESSING",
  /** Sast analyzer. */
  Sast = "SAST",
  /** Sast advanced analyzer. */
  SastAdvanced = "SAST_ADVANCED",
  /** Sast iac analyzer. */
  SastIac = "SAST_IAC",
  /** Any kind of secret detection. */
  SecretDetection = "SECRET_DETECTION",
  /** Secret detection analyzer. */
  SecretDetectionPipelineBased = "SECRET_DETECTION_PIPELINE_BASED",
  /** Secret push protection. Managed via project security settings. */
  SecretDetectionSecretPushProtection = "SECRET_DETECTION_SECRET_PUSH_PROTECTION",
}

/** All possible ways to specify the API surface for an API fuzzing scan. */
export enum ApiFuzzingScanMode {
  /** The API surface is specified by a HAR file. */
  Har = "HAR",
  /** The API surface is specified by a OPENAPI file. */
  Openapi = "OPENAPI",
  /** The API surface is specified by a POSTMAN file. */
  Postman = "POSTMAN",
}

export enum ApprovalReportType {
  /** Represents report_type for any_merge_request related approval rules. */
  AnyMergeRequest = "ANY_MERGE_REQUEST",
  /** Represents report_type for license scanning related approval rules. */
  LicenseScanning = "LICENSE_SCANNING",
  /** Represents report_type for vulnerability check related approval rules. */
  ScanFinding = "SCAN_FINDING",
}

/** The kind of an approval rule. */
export enum ApprovalRuleType {
  /** A `any_approver` approval rule. */
  AnyApprover = "ANY_APPROVER",
  /** A `code_owner` approval rule. */
  CodeOwner = "CODE_OWNER",
  /** A `regular` approval rule. */
  Regular = "REGULAR",
  /** A `report_approver` approval rule. */
  ReportApprover = "REPORT_APPROVER",
}

/** Autogenerated input type of ApproveDeployment */
export type ApproveDeploymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment to go with the approval. */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the deployment. */
  id: Scalars["DeploymentID"]["input"];
  /** Name of the User/Group/Role to use for the approval, when the user belongs to multiple approval rules. */
  representedAs?: InputMaybe<Scalars["String"]["input"]>;
  /** Status of the approval (either `APPROVED` or `REJECTED`). */
  status: DeploymentsApprovalStatus;
};

/** Autogenerated input type of ArtifactDestroy */
export type ArtifactDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the artifact to delete. */
  id: Scalars["CiJobArtifactID"]["input"];
};

/** Artifact Registry role that can be assigned to a user. */
export enum ArtifactRegistryRole {
  /** Administer registry-wide configuration and access. */
  ArtifactAdmin = "ARTIFACT_ADMIN",
  /** Publish artifacts in addition to consuming them. */
  ArtifactContributor = "ARTIFACT_CONTRIBUTOR",
  /** Manage artifacts and repository configuration. */
  ArtifactManager = "ARTIFACT_MANAGER",
  /** Consume artifacts and browse the registry. */
  ArtifactViewer = "ARTIFACT_VIEWER",
}

/** Single Artifact Registry role assignment. */
export type ArtifactRegistryRoleAssignmentInput = {
  /** Global ID of the user to grant the role to. */
  assigneeId: Scalars["UserID"]["input"];
  /** UUID of the Artifact Registry resource (repository or namespace) the role applies to. */
  resourceId: Scalars["String"]["input"];
  /** Artifact Registry role to grant. */
  role: ArtifactRegistryRole;
};

/** Autogenerated input type of ArtifactRegistryRoleBulkGrant */
export type ArtifactRegistryRoleBulkGrantInput = {
  /** Role assignments to grant. All succeed or none are written. A maximum of 1000 assignments is allowed per request. */
  assignments: Array<ArtifactRegistryRoleAssignmentInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ArtifactRegistryRoleGrant */
export type ArtifactRegistryRoleGrantInput = {
  /** Global ID of the user to grant the role to. */
  assigneeId: Scalars["UserID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** UUID of the Artifact Registry resource (repository or namespace) the role applies to. */
  resourceId: Scalars["String"]["input"];
  /** Artifact Registry role to grant. */
  role: ArtifactRegistryRole;
};

/** Autogenerated input type of AscpComponentCreate */
export type AscpComponentCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Component description. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Expected user behavior for the component. */
  expectedUserBehavior?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** ID of the scan when the component was discovered. */
  scanId: Scalars["SecurityAscpScanID"]["input"];
  /** Sub-directory path containing the component. */
  subDirectory: Scalars["String"]["input"];
  /** Component title. */
  title: Scalars["String"]["input"];
};

/** Autogenerated input type of AscpScanCreate */
export type AscpScanCreateInput = {
  /** Base commit SHA for incremental scans. */
  baseCommitSha?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the base scan for incremental scans. */
  baseScanId?: InputMaybe<Scalars["SecurityAscpScanID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Git commit SHA that was scanned. */
  commitSha: Scalars["String"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** Type of scan (default: full). */
  scanType?: InputMaybe<AscpScanType>;
};

/** Type of ASCP scan (full or incremental). */
export enum AscpScanType {
  /** Full scan of the entire codebase. */
  Full = "FULL",
  /** Incremental scan based on changes since last scan. */
  Incremental = "INCREMENTAL",
}

/** Autogenerated input type of AscpSecurityContextCreate */
export type AscpSecurityContextCreateInput = {
  /** How users authenticate to the component. */
  authenticationModel?: InputMaybe<Scalars["String"]["input"]>;
  /** How access is controlled. */
  authorizationModel?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the component. */
  componentId: Scalars["SecurityAscpComponentID"]["input"];
  /** Types of sensitive data handled. */
  dataSensitivity?: InputMaybe<Scalars["String"]["input"]>;
  /** List of security guidelines. */
  guidelines: Array<AscpSecurityGuidelineInput>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** ID of the scan when the security context was created. */
  scanId: Scalars["SecurityAscpScanID"]["input"];
  /** High-level threat model summary. */
  summary?: InputMaybe<Scalars["String"]["input"]>;
};

/** Input type for creating a security guideline */
export type AscpSecurityGuidelineInput = {
  /** How to assess business impact if violated. */
  businessContext?: InputMaybe<Scalars["String"]["input"]>;
  /** When the operation is expected and acceptable. */
  legitimateUse?: InputMaybe<Scalars["String"]["input"]>;
  /** Policy name. */
  name: Scalars["String"]["input"];
  /** Security-sensitive operation. */
  operation: Scalars["String"]["input"];
  /** When the operation becomes a security risk. */
  securityBoundary?: InputMaybe<Scalars["String"]["input"]>;
  /** Severity level if the guideline is violated. */
  severityIfViolated?: InputMaybe<AscpSeverity>;
};

/** Severity levels for ASCP security guidelines */
export enum AscpSeverity {
  /** Critical severity. */
  Critical = "CRITICAL",
  /** High severity. */
  High = "HIGH",
  /** Low severity. */
  Low = "LOW",
  /** Medium severity. */
  Medium = "MEDIUM",
}

/** Assignee ID wildcard values */
export enum AssigneeWildcardId {
  /** An assignee is assigned. */
  Any = "ANY",
  /** Logged-in user is assigned. */
  Me = "ME",
  /** No assignee is assigned. */
  None = "NONE",
}

/** Input type for filtering projects by security attributes */
export type AttributeFilterInput = {
  /** Global IDs of the security attributes to filter by. Up to 20 values. */
  attributes: Array<Scalars["SecurityAttributeID"]["input"]>;
  /** Operator to apply for the attribute filter. */
  operator: AttributeFilterOperator;
};

/** Operators for filtering by security attributes */
export enum AttributeFilterOperator {
  /** Project does not have any of the specified attributes. */
  IsNotOneOf = "IS_NOT_ONE_OF",
  /** Project has one or more of the specified attributes. */
  IsOneOf = "IS_ONE_OF",
}

/** Autogenerated input type of AuditEventsAmazonS3ConfigurationCreate */
export type AuditEventsAmazonS3ConfigurationCreateInput = {
  /** Access key ID of the Amazon S3 account. */
  accessKeyXid: Scalars["String"]["input"];
  /** AWS region where the bucket is created. */
  awsRegion: Scalars["String"]["input"];
  /** Name of the bucket where the audit events would be logged. */
  bucketName: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group path. */
  groupPath: Scalars["ID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret access key of the Amazon S3 account. */
  secretAccessKey: Scalars["String"]["input"];
};

/** Autogenerated input type of AuditEventsAmazonS3ConfigurationDelete */
export type AuditEventsAmazonS3ConfigurationDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Amazon S3 configuration to destroy. */
  id: Scalars["AuditEventsAmazonS3ConfigurationID"]["input"];
};

/** Autogenerated input type of AuditEventsAmazonS3ConfigurationUpdate */
export type AuditEventsAmazonS3ConfigurationUpdateInput = {
  /** Access key ID of the Amazon S3 account. */
  accessKeyXid?: InputMaybe<Scalars["String"]["input"]>;
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** AWS region where the bucket is created. */
  awsRegion?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the bucket where the audit events would be logged. */
  bucketName?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Amazon S3 configuration to update. */
  id: Scalars["AuditEventsAmazonS3ConfigurationID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret access key of the Amazon S3 account. */
  secretAccessKey?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsGroupDestinationDenylistEventsAdd */
export type AuditEventsGroupDestinationDenylistEventsAddInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsGroupExternalStreamingDestinationID"]["input"];
  /** List of event type filters to add to the denylist. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsGroupDestinationDenylistEventsDelete */
export type AuditEventsGroupDestinationDenylistEventsDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsGroupExternalStreamingDestinationID"]["input"];
  /** List of event type filters to remove from the denylist. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsGroupDestinationEventsAdd */
export type AuditEventsGroupDestinationEventsAddInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsGroupExternalStreamingDestinationID"]["input"];
  /** List of event type filters to add for streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsGroupDestinationEventsDelete */
export type AuditEventsGroupDestinationEventsDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsGroupExternalStreamingDestinationID"]["input"];
  /** List of event type filters to remove from streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsGroupDestinationNamespaceFilterCreate */
export type AuditEventsGroupDestinationNamespaceFilterCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination ID. */
  destinationId: Scalars["AuditEventsGroupExternalStreamingDestinationID"]["input"];
  /** Full path of the namespace(only project or group). */
  namespacePath?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsGroupDestinationNamespaceFilterDelete */
export type AuditEventsGroupDestinationNamespaceFilterDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Namespace filter ID. */
  namespaceFilterId: Scalars["AuditEventsGroupNamespaceFilterID"]["input"];
};

/** Autogenerated input type of AuditEventsInstanceAmazonS3ConfigurationCreate */
export type AuditEventsInstanceAmazonS3ConfigurationCreateInput = {
  /** Access key ID of the Amazon S3 account. */
  accessKeyXid: Scalars["String"]["input"];
  /** AWS region where the bucket is created. */
  awsRegion: Scalars["String"]["input"];
  /** Name of the bucket where the audit events would be logged. */
  bucketName: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret access key of the Amazon S3 account. */
  secretAccessKey: Scalars["String"]["input"];
};

/** Autogenerated input type of AuditEventsInstanceAmazonS3ConfigurationDelete */
export type AuditEventsInstanceAmazonS3ConfigurationDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the instance-level Amazon S3 configuration to delete. */
  id: Scalars["AuditEventsInstanceAmazonS3ConfigurationID"]["input"];
};

/** Autogenerated input type of AuditEventsInstanceAmazonS3ConfigurationUpdate */
export type AuditEventsInstanceAmazonS3ConfigurationUpdateInput = {
  /** Access key ID of the Amazon S3 account. */
  accessKeyXid?: InputMaybe<Scalars["String"]["input"]>;
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** AWS region where the bucket is created. */
  awsRegion?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the bucket where the audit events would be logged. */
  bucketName?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the instance-level Amazon S3 configuration to update. */
  id: Scalars["AuditEventsInstanceAmazonS3ConfigurationID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret access key of the Amazon S3 account. */
  secretAccessKey?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsInstanceDestinationEventsAdd */
export type AuditEventsInstanceDestinationEventsAddInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsInstanceExternalStreamingDestinationID"]["input"];
  /** List of event type filters to add for streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsInstanceDestinationEventsDelete */
export type AuditEventsInstanceDestinationEventsDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsInstanceExternalStreamingDestinationID"]["input"];
  /** List of event type filters to remove from streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsInstanceDestinationNamespaceFilterCreate */
export type AuditEventsInstanceDestinationNamespaceFilterCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination ID. */
  destinationId: Scalars["AuditEventsInstanceExternalStreamingDestinationID"]["input"];
  /** Full path of the namespace. Project or group namespaces only. */
  namespacePath?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsInstanceDestinationNamespaceFilterDelete */
export type AuditEventsInstanceDestinationNamespaceFilterDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Namespace filter ID. */
  namespaceFilterId: Scalars["AuditEventsInstanceNamespaceFilterID"]["input"];
};

/** Autogenerated input type of AuditEventsStreamingDestinationEventsAdd */
export type AuditEventsStreamingDestinationEventsAddInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsExternalAuditEventDestinationID"]["input"];
  /** List of event type filters to add for streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsStreamingDestinationEventsRemove */
export type AuditEventsStreamingDestinationEventsRemoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsExternalAuditEventDestinationID"]["input"];
  /** List of event type filters to remove from streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsStreamingDestinationInstanceEventsAdd */
export type AuditEventsStreamingDestinationInstanceEventsAddInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsInstanceExternalAuditEventDestinationID"]["input"];
  /** List of event type filters to add for streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsStreamingDestinationInstanceEventsRemove */
export type AuditEventsStreamingDestinationInstanceEventsRemoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination id. */
  destinationId: Scalars["AuditEventsInstanceExternalAuditEventDestinationID"]["input"];
  /** List of event type filters to remove from streaming. */
  eventTypeFilters: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsStreamingHTTPNamespaceFiltersAdd */
export type AuditEventsStreamingHttpNamespaceFiltersAddInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination ID. */
  destinationId: Scalars["AuditEventsExternalAuditEventDestinationID"]["input"];
  /** Full path of the group. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Full path of the project. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Autogenerated input type of AuditEventsStreamingHTTPNamespaceFiltersDelete */
export type AuditEventsStreamingHttpNamespaceFiltersDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Namespace filter ID. */
  namespaceFilterId: Scalars["AuditEventsStreamingHTTPNamespaceFilterID"]["input"];
};

/** Autogenerated input type of AuditEventsStreamingHeadersCreate */
export type AuditEventsStreamingHeadersCreateInput = {
  /** Boolean option determining whether header is active or not. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination to associate header with. */
  destinationId: Scalars["AuditEventsExternalAuditEventDestinationID"]["input"];
  /** Header key. */
  key: Scalars["String"]["input"];
  /** Header value. */
  value: Scalars["String"]["input"];
};

/** Autogenerated input type of AuditEventsStreamingHeadersDestroy */
export type AuditEventsStreamingHeadersDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Header to delete. */
  headerId: Scalars["AuditEventsStreamingHeaderID"]["input"];
};

/** Autogenerated input type of AuditEventsStreamingHeadersUpdate */
export type AuditEventsStreamingHeadersUpdateInput = {
  /** Boolean option determining whether header is active or not. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Header to update. */
  headerId: Scalars["AuditEventsStreamingHeaderID"]["input"];
  /** Header key. */
  key?: InputMaybe<Scalars["String"]["input"]>;
  /** Header value. */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of AuditEventsStreamingInstanceHeadersCreate */
export type AuditEventsStreamingInstanceHeadersCreateInput = {
  /** Boolean option determining whether header is active or not. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Instance level external destination to associate header with. */
  destinationId: Scalars["AuditEventsInstanceExternalAuditEventDestinationID"]["input"];
  /** Header key. */
  key: Scalars["String"]["input"];
  /** Header value. */
  value: Scalars["String"]["input"];
};

/** Autogenerated input type of AuditEventsStreamingInstanceHeadersDestroy */
export type AuditEventsStreamingInstanceHeadersDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Header to delete. */
  headerId: Scalars["AuditEventsStreamingInstanceHeaderID"]["input"];
};

/** Autogenerated input type of AuditEventsStreamingInstanceHeadersUpdate */
export type AuditEventsStreamingInstanceHeadersUpdateInput = {
  /** Boolean option determining whether header is active or not. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Header to update. */
  headerId: Scalars["AuditEventsStreamingInstanceHeaderID"]["input"];
  /** Header key. */
  key?: InputMaybe<Scalars["String"]["input"]>;
  /** Header value. */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Auto stop setting. */
export enum AutoStopSetting {
  /** Always */
  Always = "ALWAYS",
  /** With Action */
  WithAction = "WITH_ACTION",
}

/** User availability status */
export enum AvailabilityEnum {
  /** Busy */
  Busy = "BUSY",
  /** Not Set */
  NotSet = "NOT_SET",
}

/** Available fields to be exported as CSV */
export enum AvailableExportFields {
  /** Assignee(s) name of the work item. */
  Assignee = "ASSIGNEE",
  /** Assignee(s) username of the work item. */
  AssigneeUsername = "ASSIGNEE_USERNAME",
  /** Author name of the work item. */
  Author = "AUTHOR",
  /** Author username of the work item. */
  AuthorUsername = "AUTHOR_USERNAME",
  /** Closed at (UTC) date of the work item. */
  ClosedAt = "CLOSED_AT",
  /** Confidentiality flag of the work item. */
  Confidential = "CONFIDENTIAL",
  /** Created at (UTC) date of the work item. */
  CreatedAt = "CREATED_AT",
  /** Description of the work item. */
  Description = "DESCRIPTION",
  /** Due date (UTC) of the work item. */
  DueDate = "DUE_DATE",
  /** Unique identifier of the work item. */
  Id = "ID",
  /** IID identifier of the work item. */
  Iid = "IID",
  /** Locked discussions flag of the work item. */
  Locked = "LOCKED",
  /** Milestone of the work item. */
  Milestone = "MILESTONE",
  /** Parent ID of the work item. */
  ParentId = "PARENT_ID",
  /** Parent IID of the work item. */
  ParentIid = "PARENT_IID",
  /** Parent title of the work item. */
  ParentTitle = "PARENT_TITLE",
  /** Start date (UTC) of the work item. */
  StartDate = "START_DATE",
  /** State of the work item. */
  State = "STATE",
  /** Time estimate of the work item. */
  TimeEstimate = "TIME_ESTIMATE",
  /** Time spent of the work item. */
  TimeSpent = "TIME_SPENT",
  /** Title of the work item. */
  Title = "TITLE",
  /** Type of the work item. */
  Type = "TYPE",
  /** Updated at (UTC) date of the work item. */
  UpdatedAt = "UPDATED_AT",
  /** Web URL to the work item. */
  Url = "URL",
  /** Weight of the work item. */
  Weight = "WEIGHT",
}

/** Autogenerated input type of AwardEmojiAdd */
export type AwardEmojiAddInput = {
  /** Global ID of the awardable resource. */
  awardableId: Scalars["AwardableID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Emoji name. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of AwardEmojiRemove */
export type AwardEmojiRemoveInput = {
  /** Global ID of the awardable resource. */
  awardableId: Scalars["AwardableID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Emoji name. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of AwardEmojiToggle */
export type AwardEmojiToggleInput = {
  /** Global ID of the awardable resource. */
  awardableId: Scalars["AwardableID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Emoji name. */
  name: Scalars["String"]["input"];
};

/** Types of blob viewers */
export enum BlobViewersType {
  /** Auxiliary blob viewers type. */
  Auxiliary = "auxiliary",
  /** Rich blob viewers type. */
  Rich = "rich",
  /** Simple blob viewers type. */
  Simple = "simple",
}

/** Autogenerated input type of BoardEpicCreate */
export type BoardEpicCreateInput = {
  /** Global ID of the board that the epic is in. */
  boardId: Scalars["BoardsEpicBoardID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group the epic to create is in. */
  groupPath: Scalars["ID"]["input"];
  /** Global ID of the epic board list in which epic will be created. */
  listId: Scalars["BoardsEpicListID"]["input"];
  /** Title of the epic. */
  title: Scalars["String"]["input"];
};

export type BoardIssueInput = {
  /** Filter by assignee username. */
  assigneeUsername?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter by assignee wildcard. Incompatible with assigneeUsername and assigneeUsernames. */
  assigneeWildcardId?: InputMaybe<AssigneeWildcardId>;
  /** Filter by author username. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by confidentiality. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Filter by custom fields. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /**
   * Filter by epic ID. Incompatible with epicWildcardId. Deprecated in GitLab 17.5: This will be replaced by WorkItem hierarchyWidget.
   * @deprecated This will be replaced by WorkItem hierarchyWidget. Deprecated in GitLab 17.5.
   */
  epicId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** Filter by epic ID wildcard. Incompatible with epicId. */
  epicWildcardId?: InputMaybe<EpicWildcardId>;
  /** Health status of the issue, "none" and "any" values are supported. */
  healthStatusFilter?: InputMaybe<HealthStatusFilter>;
  /** List of IIDs of issues. For example `["1", "2"]`. */
  iids?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Whether to include subepics when filtering issues by epicId. */
  includeSubepics?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter by a list of iteration cadence IDs. */
  iterationCadenceId?: InputMaybe<
    Array<Scalars["IterationsCadenceID"]["input"]>
  >;
  /** Filter by a list of iteration IDs. Incompatible with iterationWildcardId. */
  iterationId?: InputMaybe<Array<Scalars["IterationID"]["input"]>>;
  /** Filter by iteration title. */
  iterationTitle?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by iteration ID wildcard. */
  iterationWildcardId?: InputMaybe<IterationWildcardId>;
  /** Filter by label name. */
  labelName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter by milestone title. */
  milestoneTitle?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by milestone ID wildcard. */
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. Wildcard values "NONE" and "ANY" are supported. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** List of negated arguments. */
  not?: InputMaybe<NegatedBoardIssueInput>;
  /** List of arguments with inclusive OR. */
  or?: InputMaybe<UnionedIssueFilterInput>;
  /** Filter by release tag. */
  releaseTag?: InputMaybe<Scalars["String"]["input"]>;
  /** Search query for issue title or description. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filter by status. Introduced in GitLab 18.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.0.
   */
  status?: InputMaybe<WorkItemWidgetStatusFilterInput>;
  /** Filter by the given issue types. */
  types?: InputMaybe<Array<IssueType>>;
  /** Filter by weight. */
  weight?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by weight ID wildcard. Incompatible with weight. */
  weightWildcardId?: InputMaybe<WeightWildcardId>;
  /** Filter by work item type global IDs. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

/** Autogenerated input type of BoardListCreate */
export type BoardListCreateInput = {
  /** Global ID of an existing user. */
  assigneeId?: InputMaybe<Scalars["UserID"]["input"]>;
  /** Create the backlog list. */
  backlog?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the issue board to mutate. */
  boardId: Scalars["BoardID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of an existing iteration. */
  iterationId?: InputMaybe<Scalars["IterationID"]["input"]>;
  /** Global ID of an existing label. */
  labelId?: InputMaybe<Scalars["LabelID"]["input"]>;
  /** Global ID of an existing milestone. */
  milestoneId?: InputMaybe<Scalars["MilestoneID"]["input"]>;
  /** Position of the list. */
  position?: InputMaybe<Scalars["Int"]["input"]>;
  /**
   * Global ID of an existing status. Introduced in GitLab 18.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.0.
   */
  statusId?: InputMaybe<Scalars["WorkItemsStatusesStatusID"]["input"]>;
};

/** Autogenerated input type of BoardListUpdateLimitMetrics */
export type BoardListUpdateLimitMetricsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** New limit metric type for the list. */
  limitMetric?: InputMaybe<ListLimitMetric>;
  /** Global ID of the list. */
  listId: Scalars["ListID"]["input"];
  /** New maximum issue count limit. */
  maxIssueCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** New maximum issue weight limit. */
  maxIssueWeight?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of BranchDelete */
export type BranchDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the branch. */
  name: Scalars["String"]["input"];
  /** Project full path the branch is associated with. */
  projectPath: Scalars["ID"]["input"];
};

export type BranchProtectionInput = {
  /** Allows users with write access to the branch rule target to force push changes. */
  allowForcePush?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Enforce code owner approvals before allowing a merge. */
  codeOwnerApprovalRequired?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Details about who can merge into the branch rule target. */
  mergeAccessLevels?: InputMaybe<Array<MergeAccessLevelInput>>;
  /** Details about who can push to the branch rule target. */
  pushAccessLevels?: InputMaybe<Array<PushAccessLevelInput>>;
};

/** Autogenerated input type of BranchRuleCreate */
export type BranchRuleCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Branch name, with wildcards, for the branch rules. */
  name: Scalars["String"]["input"];
  /** Full path to the project that the branch is associated with. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of BranchRuleDelete */
export type BranchRuleDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the branch rule to destroy. */
  id: Scalars["ProjectsBranchRuleID"]["input"];
};

/** Autogenerated input type of BranchRuleExternalStatusCheckCreate */
export type BranchRuleExternalStatusCheckCreateInput = {
  /** Global ID of the branch rule to update. */
  branchRuleId: Scalars["ProjectsBranchRuleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of external status check resource. */
  externalUrl: Scalars["String"]["input"];
  /** Name of the external status check. */
  name: Scalars["String"]["input"];
  /** HMAC shared secret for authenticating external status check requests. */
  sharedSecret?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of BranchRuleExternalStatusCheckDestroy */
export type BranchRuleExternalStatusCheckDestroyInput = {
  /** Global ID of the branch rule. */
  branchRuleId: Scalars["ProjectsBranchRuleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the external status check to destroy. */
  id: Scalars["MergeRequestsExternalStatusCheckID"]["input"];
};

/** Autogenerated input type of BranchRuleExternalStatusCheckUpdate */
export type BranchRuleExternalStatusCheckUpdateInput = {
  /** Global ID of the branch rule. */
  branchRuleId: Scalars["ProjectsBranchRuleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** External URL of the external status check. */
  externalUrl: Scalars["String"]["input"];
  /** Global ID of the external status check to update. */
  id: Scalars["MergeRequestsExternalStatusCheckID"]["input"];
  /** Name of the external status check. */
  name: Scalars["String"]["input"];
  /** HMAC shared secret for authenticating external status check requests. */
  sharedSecret?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of BranchRuleSquashOptionCreate */
export type BranchRuleSquashOptionCreateInput = {
  /** Global ID of the branch rule. */
  branchRuleId: Scalars["ProjectsBranchRuleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Squash option to set for the branch rule. */
  squashOption: SquashOptionSetting;
};

/** Autogenerated input type of BranchRuleSquashOptionDelete */
export type BranchRuleSquashOptionDeleteInput = {
  /** Global ID of the branch rule. */
  branchRuleId: Scalars["ProjectsBranchRuleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of BranchRuleSquashOptionUpdate */
export type BranchRuleSquashOptionUpdateInput = {
  /** Global ID of the branch rule. */
  branchRuleId: Scalars["ProjectsBranchRuleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Squash option after mutation. */
  squashOption: SquashOptionSetting;
};

/** Autogenerated input type of BranchRuleUpdate */
export type BranchRuleUpdateInput = {
  /** Branch protections configured for the branch rule. */
  branchProtection?: InputMaybe<BranchProtectionInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the branch rule to update. */
  id: Scalars["ProjectsBranchRuleID"]["input"];
  /** Branch name, with wildcards, for the branch rules. */
  name: Scalars["String"]["input"];
};

/** Input for a per-user budget cap override. */
export type BudgetCapUserOverrideInput = {
  /** Budget cap amount for the user. */
  cap: Scalars["Float"]["input"];
  /** Whether the budget cap is enabled for the user. */
  enabled: Scalars["Boolean"]["input"];
  /** Global ID of the user. */
  userId: Scalars["UserID"]["input"];
};

/** Autogenerated input type of BulkDestroyJobArtifacts */
export type BulkDestroyJobArtifactsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the job artifacts to destroy. */
  ids: Array<Scalars["CiJobArtifactID"]["input"]>;
  /** Global Project ID of the job artifacts to destroy. Incompatible with projectPath. */
  projectId: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of BulkEnableDevopsAdoptionNamespaces */
export type BulkEnableDevopsAdoptionNamespacesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Display namespace ID. */
  displayNamespaceId?: InputMaybe<Scalars["NamespaceID"]["input"]>;
  /** List of Namespace IDs. */
  namespaceIds: Array<Scalars["NamespaceID"]["input"]>;
};

/** Autogenerated input type of BulkRunnerDelete */
export type BulkRunnerDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of the runners to delete. */
  ids?: InputMaybe<Array<Scalars["CiRunnerID"]["input"]>>;
};

/** Autogenerated input type of BulkSetVulnerabilityFindingsDueDates */
export type BulkSetVulnerabilityFindingsDueDatesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectFullPath: Scalars["String"]["input"];
  /**
   * List of finding UUIDs with due dates.
   * A maximum of 1000 updates is allowed per request.
   */
  updates: Array<FindingDueDatesSetInput>;
};

/** Input for a single tool rule update within a bulk operation. */
export type BulkToolRuleInput = {
  /** Permission mode for local or IDE surface. Omitting the field sets it to null, clearing any existing value. */
  localAccess?: InputMaybe<AiToolPermission>;
  /** Tool name string identifying the tool to update. For example, "create_issue". */
  toolId: Scalars["String"]["input"];
  /** Permission mode for web surface. Omitting the field sets it to null, clearing any existing value. */
  webAccess?: InputMaybe<AiToolPermission>;
};

/** Autogenerated input type of BulkUpdateAiToolRules */
export type BulkUpdateAiToolRulesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the root namespace to update tool rules for. */
  fullPath: Scalars["ID"]["input"];
  /** Full path of the project to update tool rules for. When provided, rules can only be stricter than the namespace rule. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Tool rules to update (maximum 100 entries). */
  toolRules: Array<BulkToolRuleInput>;
};

/** Autogenerated input type of BulkUpdateSecurityAttributes */
export type BulkUpdateSecurityAttributesInput = {
  /** Global IDs of security attributes to apply. */
  attributes: Array<Scalars["SecurityAttributeID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of groups and projects to update. */
  items: Array<Scalars["ID"]["input"]>;
  /** Update mode: add, remove, or replace attributes. */
  mode: SecurityAttributeBulkUpdateMode;
};

/** Status of a merge train's car */
export enum CarStatus {
  /** Car's status: fresh */
  Fresh = "FRESH",
  /** Car's status: idle */
  Idle = "IDLE",
  /** Car's status: merged */
  Merged = "MERGED",
  /** Car's status: merging */
  Merging = "MERGING",
  /** Car's status: skip_merged */
  SkipMerged = "SKIP_MERGED",
  /** Car's status: stale */
  Stale = "STALE",
}

/** Autogenerated input type of CatalogResourcesCreate */
export type CatalogResourcesCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project path belonging to the catalog resource. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CatalogResourcesDestroy */
export type CatalogResourcesDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project path belonging to the catalog resource. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CdApplicationCreate */
export type CdApplicationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the application. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the application. */
  name: Scalars["String"]["input"];
  /** Global ID of the organization to create the application in. */
  organizationId: Scalars["OrganizationsOrganizationID"]["input"];
  /** Services to create in the application, up to 1000. */
  services?: InputMaybe<Array<CdServiceInput>>;
};

/** Autogenerated input type of CdApplicationFlowDefinitionCreate */
export type CdApplicationFlowDefinitionCreateInput = {
  /** Global ID of the application to create the flow definition for. */
  applicationId: Scalars["CdApplicationID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Body of the flow definition. */
  definition: Scalars["String"]["input"];
};

/** Autogenerated input type of CdApplicationLinkCreate */
export type CdApplicationLinkCreateInput = {
  /** Global ID of the application to create the link in. */
  applicationId: Scalars["CdApplicationID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Type of the link. */
  linkType: CdApplicationLinkType;
  /** Name of the link. */
  name: Scalars["String"]["input"];
  /** URL of the link. */
  url: Scalars["String"]["input"];
};

/** Type of a continuous deployment application link. */
export enum CdApplicationLinkType {
  /** Change / CR system link. */
  ChangeRequest = "CHANGE_REQUEST",
  /** Chat / Slack link. */
  Chat = "CHAT",
  /** Dashboard link. */
  Dashboard = "DASHBOARD",
  /** Docs link. */
  Docs = "DOCS",
  /** Issue tracker link. */
  IssueTracker = "ISSUE_TRACKER",
  /** On-call rotation link. */
  OnCall = "ON_CALL",
  /** Other link. */
  Other = "OTHER",
  /** Repository link. */
  Repository = "REPOSITORY",
  /** Runbook link. */
  Runbook = "RUNBOOK",
}

/** Autogenerated input type of CdApplicationUpdate */
export type CdApplicationUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the application. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the application to update. */
  id: Scalars["CdApplicationID"]["input"];
  /** Name of the application. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of CdArtifactSourceCreate */
export type CdArtifactSourceCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the service to create the artifact source for. */
  serviceId: Scalars["CdServiceID"]["input"];
  /** Reference of the artifact source. */
  sourceRef?: InputMaybe<Scalars["String"]["input"]>;
};

/** State of a continuous deployment deployment. */
export enum CdDeploymentState {
  /** Deployment is cancelled. */
  Cancelled = "CANCELLED",
  /** Deployment is degraded. */
  Degraded = "DEGRADED",
  /** Deployment is deploying. */
  Deploying = "DEPLOYING",
  /** Deployment is failed. */
  Failed = "FAILED",
  /** Deployment is healthy. */
  Healthy = "HEALTHY",
  /** Deployment is pending. */
  Pending = "PENDING",
}

/** State recorded in a continuous deployment deployment transition. */
export enum CdDeploymentTransitionState {
  /** Deployment transition state cancelled. */
  Cancelled = "CANCELLED",
  /** Deployment transition state degraded. */
  Degraded = "DEGRADED",
  /** Deployment transition state deploying. */
  Deploying = "DEPLOYING",
  /** Deployment transition state failed. */
  Failed = "FAILED",
  /** Deployment transition state healthy. */
  Healthy = "HEALTHY",
  /** Deployment transition state initial. */
  Initial = "INITIAL",
  /** Deployment transition state pending. */
  Pending = "PENDING",
}

/** Autogenerated input type of CdEnvironmentCreate */
export type CdEnvironmentCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the environment. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Driver binding to create for the environment. */
  environmentDriverBinding: CdEnvironmentDriverBindingInput;
  /** Name of the environment. */
  name: Scalars["String"]["input"];
  /** Global ID of the organization to create the environment in. */
  organizationId: Scalars["OrganizationsOrganizationID"]["input"];
  /** Tier of the environment. */
  tier: CdEnvironmentTier;
};

/** Autogenerated input type of CdEnvironmentDriverBindingCreate */
export type CdEnvironmentDriverBindingCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Driver binding to create for the environment. */
  environmentDriverBinding: CdEnvironmentDriverBindingInput;
  /** Global ID of the environment to bind the driver to. */
  environmentId: Scalars["CdEnvironmentID"]["input"];
};

/** Attributes for a continuous deployment environment driver binding. */
export type CdEnvironmentDriverBindingInput = {
  /** Configuration of the environment driver binding, defined by the driver's own schema. */
  driverConfig: Scalars["JSON"]["input"];
  /** Reference of the driver. */
  driverRef: Scalars["String"]["input"];
};

/** Tier of a continuous deployment environment. */
export enum CdEnvironmentTier {
  /** Environment is in the development tier. */
  Development = "DEVELOPMENT",
  /** Environment is in the production tier. */
  Production = "PRODUCTION",
  /** Environment is in the QA tier. */
  Qa = "QA",
  /** Environment is in the staging tier. */
  Staging = "STAGING",
}

/** Autogenerated input type of CdEnvironmentUpdate */
export type CdEnvironmentUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the environment. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the environment to update. */
  id: Scalars["CdEnvironmentID"]["input"];
  /** Name of the environment. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Tier of the environment. */
  tier?: InputMaybe<CdEnvironmentTier>;
};

/** Autogenerated input type of CdRolloutCreate */
export type CdRolloutCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the organization to create the rollout in. */
  organizationId: Scalars["OrganizationsOrganizationID"]["input"];
  /** Global ID of the version set the rollout deploys. */
  versionSetId: Scalars["CdVersionSetID"]["input"];
};

/** State of a continuous deployment rollout environment. */
export enum CdRolloutEnvironmentState {
  /** Rollout environment is cancelled. */
  Cancelled = "CANCELLED",
  /** Rollout environment is completed. */
  Completed = "COMPLETED",
  /** Rollout environment is failed. */
  Failed = "FAILED",
  /** Rollout environment is in progress. */
  InProgress = "IN_PROGRESS",
  /** Rollout environment is paused. */
  Paused = "PAUSED",
  /** Rollout environment is pending. */
  Pending = "PENDING",
}

/** Autogenerated input type of CdRolloutGateResolve */
export type CdRolloutGateResolveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the rollout whose approval gate is being resolved. */
  id: Scalars["CdRolloutID"]["input"];
  /** Reason for the decision. */
  reason?: InputMaybe<Scalars["String"]["input"]>;
  /** Decision to record for the approval gate. */
  status: CdRolloutGateStatus;
};

/** Decision recorded when resolving a continuous deployment rollout approval gate. */
export enum CdRolloutGateStatus {
  /** Approve the rollout and allow it to continue. */
  Approved = "APPROVED",
  /** Reject the rollout and stop it from continuing. */
  Rejected = "REJECTED",
}

/** State of a continuous deployment rollout. */
export enum CdRolloutState {
  /** Rollout is cancelled. */
  Cancelled = "CANCELLED",
  /** Rollout is completed. */
  Completed = "COMPLETED",
  /** Rollout is failed. */
  Failed = "FAILED",
  /** Rollout is in progress. */
  InProgress = "IN_PROGRESS",
  /** Rollout is paused. */
  Paused = "PAUSED",
  /** Rollout is pending. */
  Pending = "PENDING",
}

/** High-level status of a continuous deployment rollout. */
export enum CdRolloutStatus {
  /** Rollout is pending, in progress, or paused. */
  Active = "ACTIVE",
  /** Rollout finished unsuccessfully (failed or cancelled). */
  Failed = "FAILED",
  /** Rollout finished successfully. */
  Succeeded = "SUCCEEDED",
}

/** State recorded in a continuous deployment rollout transition. */
export enum CdRolloutTransitionState {
  /** Rollout transition state cancelled. */
  Cancelled = "CANCELLED",
  /** Rollout transition state completed. */
  Completed = "COMPLETED",
  /** Rollout transition state failed. */
  Failed = "FAILED",
  /** Rollout transition state initial. */
  Initial = "INITIAL",
  /** Rollout transition state in progress. */
  InProgress = "IN_PROGRESS",
  /** Rollout transition state paused. */
  Paused = "PAUSED",
  /** Rollout transition state pending. */
  Pending = "PENDING",
}

/** Autogenerated input type of CdServiceCreate */
export type CdServiceCreateInput = {
  /** Global ID of the application to create the service in. */
  applicationId: Scalars["CdApplicationID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the service. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the service. */
  name: Scalars["String"]["input"];
};

/** Observed health of a service in an environment. */
export enum CdServiceHealth {
  /** Service is degraded. */
  Degraded = "DEGRADED",
  /** Service is failed. */
  Failed = "FAILED",
  /** Service is healthy. */
  Healthy = "HEALTHY",
  /** Service is unknown. */
  Unknown = "UNKNOWN",
}

/** Attributes for a continuous deployment service. */
export type CdServiceInput = {
  /** Description of the service. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the service. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of CdServiceUpdate */
export type CdServiceUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the service. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the service to update. */
  id: Scalars["CdServiceID"]["input"];
  /** Name of the service. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of CdVersionSetCreate */
export type CdVersionSetCreateInput = {
  /** Global ID of the application to create the version set in. */
  applicationId: Scalars["CdApplicationID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the version set. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the version set. */
  name: Scalars["String"]["input"];
  /** Global IDs of the versions that make up the version set, one per service. A version set must contain at least one version. */
  versionIds: Array<Scalars["CdVersionID"]["input"]>;
};

/** Values for sorting projects that use components from a catalog resource. */
export enum CiCatalogResourceProjectUsageSort {
  /** Last used date by ascending order. */
  LastUsedAsc = "LAST_USED_ASC",
  /** Last used date by descending order. */
  LastUsedDesc = "LAST_USED_DESC",
  /** Oldest version a project uses by ascending order. */
  OldestVersionAsc = "OLDEST_VERSION_ASC",
  /** Oldest version a project uses by descending order. */
  OldestVersionDesc = "OLDEST_VERSION_DESC",
  /** Project name by ascending order. */
  ProjectNameAsc = "PROJECT_NAME_ASC",
  /** Project name by descending order. */
  ProjectNameDesc = "PROJECT_NAME_DESC",
  /** Newest version a project uses by ascending order. */
  VersionAsc = "VERSION_ASC",
  /** Newest version a project uses by descending order. */
  VersionDesc = "VERSION_DESC",
}

/** Values for scoping catalog resources */
export enum CiCatalogResourceScope {
  /** All catalog resources visible to the current user. */
  All = "ALL",
  /** Catalog resources belonging to authorized namespaces of the user. */
  Namespaces = "NAMESPACES",
}

/** Values for sorting catalog resources */
export enum CiCatalogResourceSort {
  /** Created date by ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created date by descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Latest release date by ascending order. */
  LatestReleasedAtAsc = "LATEST_RELEASED_AT_ASC",
  /** Latest release date by descending order. */
  LatestReleasedAtDesc = "LATEST_RELEASED_AT_DESC",
  /** Name by ascending order. */
  NameAsc = "NAME_ASC",
  /** Name by descending order. */
  NameDesc = "NAME_DESC",
  /** Star count by ascending order. */
  StarCountAsc = "STAR_COUNT_ASC",
  /** Star count by descending order. */
  StarCountDesc = "STAR_COUNT_DESC",
  /** Last 30-day usage count by ascending order. */
  UsageCountAsc = "USAGE_COUNT_ASC",
  /** Last 30-day usage count by descending order. */
  UsageCountDesc = "USAGE_COUNT_DESC",
}

export enum CiCatalogResourceVerificationLevel {
  /** The resource is Gitlab Maintained */
  GitlabMaintained = "GITLAB_MAINTAINED",
  /** The resource is Gitlab Partner Maintained */
  GitlabPartnerMaintained = "GITLAB_PARTNER_MAINTAINED",
  /** The resource is Unverified */
  Unverified = "UNVERIFIED",
  /** The resource is Verified Creator Maintained */
  VerifiedCreatorMaintained = "VERIFIED_CREATOR_MAINTAINED",
  /** The resource is Verified Creator Self Managed */
  VerifiedCreatorSelfManaged = "VERIFIED_CREATOR_SELF_MANAGED",
}

/** Include type. */
export enum CiConfigIncludeType {
  /** Component include. */
  Component = "component",
  /** Project file include. */
  File = "file",
  /** Local include. */
  Local = "local",
  /** Remote include. */
  Remote = "remote",
  /** Template include. */
  Template = "template",
}

/** Values for YAML processor result */
export enum CiConfigStatus {
  /** Configuration file is not valid. */
  Invalid = "INVALID",
  /** Configuration file is valid. */
  Valid = "VALID",
}

/** Deploy freeze period status */
export enum CiFreezePeriodStatus {
  /** Freeze period is active. */
  Active = "ACTIVE",
  /** Freeze period is inactive. */
  Inactive = "INACTIVE",
}

/** Values for sorting inherited variables */
export enum CiGroupVariablesSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Key by ascending order. */
  KeyAsc = "KEY_ASC",
  /** Key by descending order. */
  KeyDesc = "KEY_DESC",
}

/** Attributes for defining an input. */
export type CiInputsInput = {
  /** Set to `true` to delete the input. */
  destroy?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Name of the input. */
  name: Scalars["String"]["input"];
  /** Value of the input. */
  value: Scalars["CiInputsValue"]["input"];
};

/** Available input types */
export enum CiInputsType {
  /** Array input */
  Array = "ARRAY",
  /** Boolean input */
  Boolean = "BOOLEAN",
  /** Number input */
  Number = "NUMBER",
  /** String input */
  String = "STRING",
}

/** Values for sorting CI/CD job analytics */
export enum CiJobAnalyticsSort {
  /** Sort by canceled rate in ascending order. */
  CanceledRateAsc = "CANCELED_RATE_ASC",
  /** Sort by canceled rate in descending order. */
  CanceledRateDesc = "CANCELED_RATE_DESC",
  /** Sort by failed rate in ascending order. */
  FailedRateAsc = "FAILED_RATE_ASC",
  /** Sort by failed rate in descending order. */
  FailedRateDesc = "FAILED_RATE_DESC",
  /** Sort by mean duration in ascending order. */
  MeanDurationAsc = "MEAN_DURATION_ASC",
  /** Sort by mean duration in descending order. */
  MeanDurationDesc = "MEAN_DURATION_DESC",
  /** Sort by name in ascending order. */
  NameAsc = "NAME_ASC",
  /** Sort by name in descending order. */
  NameDesc = "NAME_DESC",
  /** Sort by 50th percentile duration in ascending order. */
  P50DurationAsc = "P50_DURATION_ASC",
  /** Sort by 50th percentile duration in descending order. */
  P50DurationDesc = "P50_DURATION_DESC",
  /** Sort by 75th percentile duration in ascending order. */
  P75DurationAsc = "P75_DURATION_ASC",
  /** Sort by 75th percentile duration in descending order. */
  P75DurationDesc = "P75_DURATION_DESC",
  /** Sort by 90th percentile duration in ascending order. */
  P90DurationAsc = "P90_DURATION_ASC",
  /** Sort by 90th percentile duration in descending order. */
  P90DurationDesc = "P90_DURATION_DESC",
  /** Sort by 95th percentile duration in ascending order. */
  P95DurationAsc = "P95_DURATION_ASC",
  /** Sort by 95th percentile duration in descending order. */
  P95DurationDesc = "P95_DURATION_DESC",
  /** Sort by 99th percentile duration in ascending order. */
  P99DurationAsc = "P99_DURATION_ASC",
  /** Sort by 99th percentile duration in descending order. */
  P99DurationDesc = "P99_DURATION_DESC",
  /** Sort by stage name in ascending order. */
  StageNameAsc = "STAGE_NAME_ASC",
  /** Sort by stage name in descending order. */
  StageNameDesc = "STAGE_NAME_DESC",
  /** Sort by success rate in ascending order. */
  SuccessRateAsc = "SUCCESS_RATE_ASC",
  /** Sort by success rate in descending order. */
  SuccessRateDesc = "SUCCESS_RATE_DESC",
}

export enum CiJobFailureReason {
  /** A job that failed due to api failure. */
  ApiFailure = "API_FAILURE",
  /** A job that failed due to archived failure. */
  ArchivedFailure = "ARCHIVED_FAILURE",
  /** A job that failed due to bridge pipeline is child pipeline. */
  BridgePipelineIsChildPipeline = "BRIDGE_PIPELINE_IS_CHILD_PIPELINE",
  /** A job that failed due to builds disabled. */
  BuildsDisabled = "BUILDS_DISABLED",
  /** A job that failed due to ci quota exceeded. */
  CiQuotaExceeded = "CI_QUOTA_EXCEEDED",
  /** A job that failed due to data integrity failure. */
  DataIntegrityFailure = "DATA_INTEGRITY_FAILURE",
  /** A job that failed due to deployment rejected. */
  DeploymentRejected = "DEPLOYMENT_REJECTED",
  /** A job that failed due to downstream bridge project not found. */
  DownstreamBridgeProjectNotFound = "DOWNSTREAM_BRIDGE_PROJECT_NOT_FOUND",
  /** A job that failed due to downstream pipeline creation failed. */
  DownstreamPipelineCreationFailed = "DOWNSTREAM_PIPELINE_CREATION_FAILED",
  /** A job that failed due to downstream project trigger resolved to empty. */
  DownstreamProjectTriggerResolvedToEmpty = "DOWNSTREAM_PROJECT_TRIGGER_RESOLVED_TO_EMPTY",
  /** A job that failed due to duo workflow not allowed. */
  DuoWorkflowNotAllowed = "DUO_WORKFLOW_NOT_ALLOWED",
  /** A job that failed due to environment creation failure. */
  EnvironmentCreationFailure = "ENVIRONMENT_CREATION_FAILURE",
  /** A job that failed due to failed outdated deployment job. */
  FailedOutdatedDeploymentJob = "FAILED_OUTDATED_DEPLOYMENT_JOB",
  /** A job that failed due to forward deployment failure. */
  ForwardDeploymentFailure = "FORWARD_DEPLOYMENT_FAILURE",
  /** A job that failed due to id token burned project path. */
  IdTokenBurnedProjectPath = "ID_TOKEN_BURNED_PROJECT_PATH",
  /** A job that failed due to insufficient bridge permissions. */
  InsufficientBridgePermissions = "INSUFFICIENT_BRIDGE_PERMISSIONS",
  /** A job that failed due to insufficient upstream permissions. */
  InsufficientUpstreamPermissions = "INSUFFICIENT_UPSTREAM_PERMISSIONS",
  /** A job that failed due to invalid bridge trigger. */
  InvalidBridgeTrigger = "INVALID_BRIDGE_TRIGGER",
  /** A job that failed due to ip restriction failure. */
  IpRestrictionFailure = "IP_RESTRICTION_FAILURE",
  /** A job that failed due to job execution server timeout. */
  JobExecutionServerTimeout = "JOB_EXECUTION_SERVER_TIMEOUT",
  /** A job that failed due to job execution timeout. */
  JobExecutionTimeout = "JOB_EXECUTION_TIMEOUT",
  /** A job that failed due to job router failure. */
  JobRouterFailure = "JOB_ROUTER_FAILURE",
  /** A job that failed due to job token expired. */
  JobTokenExpired = "JOB_TOKEN_EXPIRED",
  /** A job that failed due to missing dependency failure. */
  MissingDependencyFailure = "MISSING_DEPENDENCY_FAILURE",
  /** A job that failed due to no matching runner. */
  NoMatchingRunner = "NO_MATCHING_RUNNER",
  /** A job that failed due to no updates canceling. */
  NoUpdatesCanceling = "NO_UPDATES_CANCELING",
  /** A job that failed due to no updates running. */
  NoUpdatesRunning = "NO_UPDATES_RUNNING",
  /** A job that failed due to pipeline loop detected. */
  PipelineLoopDetected = "PIPELINE_LOOP_DETECTED",
  /** A job that failed due to project deleted. */
  ProjectDeleted = "PROJECT_DELETED",
  /** A job that failed due to protected environment failure. */
  ProtectedEnvironmentFailure = "PROTECTED_ENVIRONMENT_FAILURE",
  /** A job that failed due to reached downstream pipeline trigger rate limit. */
  ReachedDownstreamPipelineTriggerRateLimit = "REACHED_DOWNSTREAM_PIPELINE_TRIGGER_RATE_LIMIT",
  /** A job that failed due to reached max descendant pipelines depth. */
  ReachedMaxDescendantPipelinesDepth = "REACHED_MAX_DESCENDANT_PIPELINES_DEPTH",
  /** A job that failed due to reached max pipeline hierarchy size. */
  ReachedMaxPipelineHierarchySize = "REACHED_MAX_PIPELINE_HIERARCHY_SIZE",
  /** A job that failed due to runner configuration error. */
  RunnerConfigurationError = "RUNNER_CONFIGURATION_ERROR",
  /** A job that failed due to runner external dependency failure. */
  RunnerExternalDependencyFailure = "RUNNER_EXTERNAL_DEPENDENCY_FAILURE",
  /** A job that failed due to runner interrupted. */
  RunnerInterrupted = "RUNNER_INTERRUPTED",
  /** A job that failed due to runner system failure. */
  RunnerSystemFailure = "RUNNER_SYSTEM_FAILURE",
  /** A job that failed due to runner unsupported. */
  RunnerUnsupported = "RUNNER_UNSUPPORTED",
  /** A job that failed due to scheduler failure. */
  SchedulerFailure = "SCHEDULER_FAILURE",
  /** A job that failed due to script failure. */
  ScriptFailure = "SCRIPT_FAILURE",
  /** A job that failed due to secrets provider not found. */
  SecretsProviderNotFound = "SECRETS_PROVIDER_NOT_FOUND",
  /** A job that failed due to server timeout canceling. */
  ServerTimeoutCanceling = "SERVER_TIMEOUT_CANCELING",
  /** A job that failed due to server timeout running. */
  ServerTimeoutRunning = "SERVER_TIMEOUT_RUNNING",
  /** A job that failed due to stale schedule. */
  StaleSchedule = "STALE_SCHEDULE",
  /** A job that failed due to stuck or timeout failure. */
  StuckOrTimeoutFailure = "STUCK_OR_TIMEOUT_FAILURE",
  /** A job that failed due to stuck pending no matching runners. */
  StuckPendingNoMatchingRunners = "STUCK_PENDING_NO_MATCHING_RUNNERS",
  /** A job that failed due to stuck pending with matching runners. */
  StuckPendingWithMatchingRunners = "STUCK_PENDING_WITH_MATCHING_RUNNERS",
  /** A job that failed due to trace size exceeded. */
  TraceSizeExceeded = "TRACE_SIZE_EXCEEDED",
  /** A job that failed due to unknown failure. */
  UnknownFailure = "UNKNOWN_FAILURE",
  /** A job that failed due to unmet prerequisites. */
  UnmetPrerequisites = "UNMET_PREREQUISITES",
  /** A job that failed due to upstream bridge project not found. */
  UpstreamBridgeProjectNotFound = "UPSTREAM_BRIDGE_PROJECT_NOT_FOUND",
  /** A job that failed due to user blocked. */
  UserBlocked = "USER_BLOCKED",
}

export enum CiJobKind {
  /** Bridge CI job connecting a parent and child pipeline. */
  Bridge = "BRIDGE",
  /** Standard CI job. */
  Build = "BUILD",
}

export enum CiJobSource {
  /** A job initiated by api. */
  Api = "API",
  /** A job initiated by chat. */
  Chat = "CHAT",
  /** A job initiated by container registry push. */
  ContainerRegistryPush = "CONTAINER_REGISTRY_PUSH",
  /** A job initiated by dependency management security update. */
  DependencyManagementSecurityUpdate = "DEPENDENCY_MANAGEMENT_SECURITY_UPDATE",
  /** A job initiated by duo workflow. */
  DuoWorkflow = "DUO_WORKFLOW",
  /** A job initiated by external. */
  External = "EXTERNAL",
  /** A job initiated by external pull request event. */
  ExternalPullRequestEvent = "EXTERNAL_PULL_REQUEST_EVENT",
  /** A job initiated by merge request event. */
  MergeRequestEvent = "MERGE_REQUEST_EVENT",
  /** A job initiated by ondemand dast scan. */
  OndemandDastScan = "ONDEMAND_DAST_SCAN",
  /** A job initiated by ondemand dast validation. */
  OndemandDastValidation = "ONDEMAND_DAST_VALIDATION",
  /** A job initiated by parent pipeline. */
  ParentPipeline = "PARENT_PIPELINE",
  /** A job initiated by pipeline. */
  Pipeline = "PIPELINE",
  /** A job initiated by pipeline execution policy. */
  PipelineExecutionPolicy = "PIPELINE_EXECUTION_POLICY",
  /** A job initiated by pipeline execution policy schedule. */
  PipelineExecutionPolicySchedule = "PIPELINE_EXECUTION_POLICY_SCHEDULE",
  /** A job initiated by push. */
  Push = "PUSH",
  /** A job initiated by scan execution policy. */
  ScanExecutionPolicy = "SCAN_EXECUTION_POLICY",
  /** A job initiated by schedule. */
  Schedule = "SCHEDULE",
  /** A job initiated by security orchestration policy. */
  SecurityOrchestrationPolicy = "SECURITY_ORCHESTRATION_POLICY",
  /** A job initiated by security scan profiles. */
  SecurityScanProfiles = "SECURITY_SCAN_PROFILES",
  /** A job initiated by trigger. */
  Trigger = "TRIGGER",
  /** A job initiated by unknown. */
  Unknown = "UNKNOWN",
  /** A job initiated by web. */
  Web = "WEB",
  /** A job initiated by webide. */
  Webide = "WEBIDE",
}

export enum CiJobStatus {
  /** A job that is canceled. */
  Canceled = "CANCELED",
  /** A job that is canceling. */
  Canceling = "CANCELING",
  /** A job that is created. */
  Created = "CREATED",
  /** A job that is failed. */
  Failed = "FAILED",
  /** A job that is manual. */
  Manual = "MANUAL",
  /** A job that is pending. */
  Pending = "PENDING",
  /** A job that is preparing. */
  Preparing = "PREPARING",
  /** A job that is running. */
  Running = "RUNNING",
  /** A job that is scheduled. */
  Scheduled = "SCHEDULED",
  /** A job that is skipped. */
  Skipped = "SKIPPED",
  /** A job that is success. */
  Success = "SUCCESS",
  /** A job that is waiting for callback. */
  WaitingForCallback = "WAITING_FOR_CALLBACK",
  /** A job that is waiting for resource. */
  WaitingForResource = "WAITING_FOR_RESOURCE",
}

/** Autogenerated input type of CiJobTokenScopeAddGroupOrProject */
export type CiJobTokenScopeAddGroupOrProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Indicates whether default permissions are enabled (true) or fine-grained permissions are enabled (false). Introduced in GitLab 17.8: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.8.
   */
  defaultPermissions?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * List of policies added to the CI job token scope. Is ignored if job token policies are disabled. Introduced in GitLab 17.5: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.5.
   */
  jobTokenPolicies?: InputMaybe<Array<CiJobTokenScopePolicies>>;
  /** Project that the CI job token scope belongs to. */
  projectPath: Scalars["ID"]["input"];
  /** Group or project to be added to the CI job token scope. */
  targetPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CiJobTokenScopeAddProject */
export type CiJobTokenScopeAddProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Direction of access, which defaults to INBOUND. Deprecated in GitLab 16.0: Outbound job token scope is being removed. This field can now only be set to INBOUND.
   * @deprecated Outbound job token scope is being removed. This field can now only be set to INBOUND. Deprecated in GitLab 16.0.
   */
  direction?: InputMaybe<CiJobTokenScopeDirection>;
  /** Project that the CI job token scope belongs to. */
  projectPath: Scalars["ID"]["input"];
  /** Project to be added to the CI job token scope. */
  targetProjectPath: Scalars["ID"]["input"];
};

/** Direction of access. */
export enum CiJobTokenScopeDirection {
  /** Target projects in the inbound allowlist can access the scope project through their job tokens. */
  Inbound = "INBOUND",
  /** Job token scope project can access target project in the outbound allowlist. */
  Outbound = "OUTBOUND",
}

/** CI_JOB_TOKEN policy */
export enum CiJobTokenScopePolicies {
  /** Admin Badges */
  AdminBadges = "ADMIN_BADGES",
  /** Admin Deployments */
  AdminDeployments = "ADMIN_DEPLOYMENTS",
  /** Admin Environments */
  AdminEnvironments = "ADMIN_ENVIRONMENTS",
  /** Admin Jobs */
  AdminJobs = "ADMIN_JOBS",
  /** Admin Packages */
  AdminPackages = "ADMIN_PACKAGES",
  /** Admin Pipelines */
  AdminPipelines = "ADMIN_PIPELINES",
  /** Admin Releases */
  AdminReleases = "ADMIN_RELEASES",
  /** Admin Repositories */
  AdminRepositories = "ADMIN_REPOSITORIES",
  /** Admin Secure Files */
  AdminSecureFiles = "ADMIN_SECURE_FILES",
  /** Admin Terraform State */
  AdminTerraformState = "ADMIN_TERRAFORM_STATE",
  /** Read Badges */
  ReadBadges = "READ_BADGES",
  /** Read Deployments */
  ReadDeployments = "READ_DEPLOYMENTS",
  /** Read Environments */
  ReadEnvironments = "READ_ENVIRONMENTS",
  /** Read Jobs */
  ReadJobs = "READ_JOBS",
  /** Read Merge Requests */
  ReadMergeRequests = "READ_MERGE_REQUESTS",
  /** Read Packages */
  ReadPackages = "READ_PACKAGES",
  /** Read Pipelines */
  ReadPipelines = "READ_PIPELINES",
  /** Read Releases */
  ReadReleases = "READ_RELEASES",
  /** Read Repositories */
  ReadRepositories = "READ_REPOSITORIES",
  /** Read Secure Files */
  ReadSecureFiles = "READ_SECURE_FILES",
  /** Read Terraform State */
  ReadTerraformState = "READ_TERRAFORM_STATE",
  /** Read Work Items */
  ReadWorkItems = "READ_WORK_ITEMS",
}

/** Autogenerated input type of CiJobTokenScopeRemoveGroup */
export type CiJobTokenScopeRemoveGroupInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project that the CI job token scope belongs to. */
  projectPath: Scalars["ID"]["input"];
  /** Group to be removed from the CI job token scope. */
  targetGroupPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CiJobTokenScopeRemoveProject */
export type CiJobTokenScopeRemoveProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Direction of access, which defaults to inbound. Deprecated in GitLab 16.9: Outbound job token scope is being removed. This field can now only be set to INBOUND.
   * @deprecated Outbound job token scope is being removed. This field can now only be set to INBOUND. Deprecated in GitLab 16.9.
   */
  direction?: InputMaybe<CiJobTokenScopeDirection>;
  /** Project that the CI job token scope belongs to. */
  projectPath: Scalars["ID"]["input"];
  /** Project to be removed from the CI job token scope. */
  targetProjectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CiJobTokenScopeUpdatePolicies */
export type CiJobTokenScopeUpdatePoliciesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates whether default permissions are enabled (true) or fine-grained permissions are enabled (false). */
  defaultPermissions: Scalars["Boolean"]["input"];
  /** List of policies added to the CI job token scope. */
  jobTokenPolicies: Array<CiJobTokenScopePolicies>;
  /** Project that the CI job token scope belongs to. */
  projectPath: Scalars["ID"]["input"];
  /** Group or project that the CI job token targets. */
  targetPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CiLint */
export type CiLintInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Contents of `.gitlab-ci.yml`. */
  content: Scalars["String"]["input"];
  /** Run pipeline creation simulation, or only do static check. */
  dryRun?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Project of the CI config. */
  projectPath: Scalars["ID"]["input"];
  /** Ref to use when linting. Default is the project default branch. */
  ref?: InputMaybe<Scalars["String"]["input"]>;
};

/** The status of a pipeline creation */
export enum CiPipelineCreationStatus {
  /** The pipeline creation is failed */
  Failed = "FAILED",
  /** The pipeline creation is in progress */
  InProgress = "IN_PROGRESS",
  /** The pipeline creation is succeeded */
  Succeeded = "SUCCEEDED",
}

/** Ci Pipeline sources enum */
export enum CiPipelineSources {
  /** Pipeline created by an API event */
  Api = "API",
  /** Pipeline created by a chat event */
  Chat = "CHAT",
  /** Pipeline created by a container registry push event */
  ContainerRegistryPush = "CONTAINER_REGISTRY_PUSH",
  /** Pipeline created by a dependency management security update event */
  DependencyManagementSecurityUpdate = "DEPENDENCY_MANAGEMENT_SECURITY_UPDATE",
  /** Pipeline created by a duo workflow event */
  DuoWorkflow = "DUO_WORKFLOW",
  /** Pipeline created by an external event */
  External = "EXTERNAL",
  /** Pipeline created by an external pull request event */
  ExternalPullRequestEvent = "EXTERNAL_PULL_REQUEST_EVENT",
  /** Pipeline created by a merge request event */
  MergeRequestEvent = "MERGE_REQUEST_EVENT",
  /** Pipeline created by an ondemand dast scan event */
  OndemandDastScan = "ONDEMAND_DAST_SCAN",
  /** Pipeline created by an ondemand dast validation event */
  OndemandDastValidation = "ONDEMAND_DAST_VALIDATION",
  /** Pipeline created by a parent pipeline event */
  ParentPipeline = "PARENT_PIPELINE",
  /** Pipeline created by a pipeline event */
  Pipeline = "PIPELINE",
  /** Pipeline created by a pipeline execution policy schedule event */
  PipelineExecutionPolicySchedule = "PIPELINE_EXECUTION_POLICY_SCHEDULE",
  /** Pipeline created by a push event */
  Push = "PUSH",
  /** Pipeline created by a schedule event */
  Schedule = "SCHEDULE",
  /** Pipeline created by a security orchestration policy event */
  SecurityOrchestrationPolicy = "SECURITY_ORCHESTRATION_POLICY",
  /** Pipeline created by a trigger event */
  Trigger = "TRIGGER",
  /** Pipeline created by an unknown event */
  Unknown = "UNKNOWN",
  /** Pipeline created by a web event */
  Web = "WEB",
  /** Pipeline created by a webide event */
  Webide = "WEBIDE",
}

export enum CiRunnerAccessLevel {
  /** A runner that is not protected. */
  NotProtected = "NOT_PROTECTED",
  /** A runner that is ref protected. */
  RefProtected = "REF_PROTECTED",
}

/** Runner cloud provider. */
export enum CiRunnerCloudProvider {
  /** Google Kubernetes Engine. */
  Gke = "GKE",
  /** Google Cloud. */
  GoogleCloud = "GOOGLE_CLOUD",
}

export enum CiRunnerCreationMethod {
  /** Applies to a runner that was created by an authenticated user. */
  AuthenticatedUser = "AUTHENTICATED_USER",
  /** Applies to a runner that was created by a runner registration token. */
  RegistrationToken = "REGISTRATION_TOKEN",
}

export enum CiRunnerCreationState {
  /** Applies to a runner that has been registered and has polled for CI/CD jobs at least once. */
  Finished = "FINISHED",
  /** Applies to a runner that has been created, but is not yet registered and running. */
  Started = "STARTED",
}

export enum CiRunnerJobExecutionStatus {
  /** Runner is busy. */
  Active = "ACTIVE",
  /** Runner is idle. */
  Idle = "IDLE",
}

/** Values for filtering runners in namespaces. */
export enum CiRunnerMembershipFilter {
  /**
   * Include all runners. This list includes runners for all projects in the group and subgroups, as well as for the parent groups and instance. Introduced in GitLab 15.5: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 15.5.
   */
  AllAvailable = "ALL_AVAILABLE",
  /** Include runners that have either a direct or inherited relationship. These runners can be specific to a project or a group. */
  Descendants = "DESCENDANTS",
  /** Include runners that have a direct relationship. */
  Direct = "DIRECT",
}

/** Values for sorting runners */
export enum CiRunnerSort {
  /** Ordered by contacted_at in ascending order. */
  ContactedAsc = "CONTACTED_ASC",
  /** Ordered by contacted_at in descending order. */
  ContactedDesc = "CONTACTED_DESC",
  /** Ordered by created_at in ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Ordered by created_at in descending order. */
  CreatedDesc = "CREATED_DESC",
  /**
   * Ordered by number of running jobs in descending order (only available on Ultimate plans). Introduced in GitLab 16.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 16.2.
   */
  MostActiveDesc = "MOST_ACTIVE_DESC",
  /** Ordered by token_expires_at in ascending order. */
  TokenExpiresAtAsc = "TOKEN_EXPIRES_AT_ASC",
  /** Ordered by token_expires_at in descending order. */
  TokenExpiresAtDesc = "TOKEN_EXPIRES_AT_DESC",
}

export enum CiRunnerStatus {
  /** Runner that has never contacted the instance. */
  NeverContacted = "NEVER_CONTACTED",
  /** Runner that has not contacted this instance within the last 2 hours. Will be considered `STALE` if offline for more than 7 days. */
  Offline = "OFFLINE",
  /** Runner that contacted this instance within the last 2 hours. */
  Online = "ONLINE",
  /** Runner that has not contacted this instance within the last 7 days. */
  Stale = "STALE",
}

export enum CiRunnerType {
  /** A runner that is group type. */
  GroupType = "GROUP_TYPE",
  /** A runner that is instance type. */
  InstanceType = "INSTANCE_TYPE",
  /** A runner that is project type. */
  ProjectType = "PROJECT_TYPE",
}

export enum CiRunnerUpgradeStatus {
  /** Upgrade is available for the runner. */
  Available = "AVAILABLE",
  /** Runner version is not valid. */
  Invalid = "INVALID",
  /** Upgrade is not available for the runner. */
  NotAvailable = "NOT_AVAILABLE",
  /** Upgrade is available and recommended for the runner. */
  Recommended = "RECOMMENDED",
}

/** Attributes for defining a CI/CD variable. */
export type CiVariableInput = {
  /** Name of the variable. */
  key: Scalars["String"]["input"];
  /** Value of the variable. */
  value: Scalars["String"]["input"];
  /** Type of variable. */
  variableType?: InputMaybe<CiVariableType>;
};

/** Values for sorting variables */
export enum CiVariableSort {
  /** Sorted by key in ascending order. */
  KeyAsc = "KEY_ASC",
  /** Sorted by key in descending order. */
  KeyDesc = "KEY_DESC",
}

export enum CiVariableType {
  /** Env var type. */
  EnvVar = "ENV_VAR",
  /** File type. */
  File = "FILE",
}

/** Autogenerated input type of ClusterAgentDelete */
export type ClusterAgentDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the cluster agent that will be deleted. */
  id: Scalars["ClustersAgentID"]["input"];
};

/** Autogenerated input type of ClusterAgentTokenCreate */
export type ClusterAgentTokenCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the cluster agent that will be associated with the new token. */
  clusterAgentId: Scalars["ClustersAgentID"]["input"];
  /** Description of the token. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the token. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of ClusterAgentTokenRevoke */
export type ClusterAgentTokenRevokeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the agent token that will be revoked. */
  id: Scalars["ClustersAgentTokenID"]["input"];
};

/** Autogenerated input type of ClusterAgentUrlConfigurationCreate */
export type ClusterAgentUrlConfigurationCreateInput = {
  /** Base64-encoded CA certificate in PEM format to verify the agent endpoint. */
  caCert?: InputMaybe<Scalars["String"]["input"]>;
  /** Base64-encoded client certificate in PEM format if mTLS authentication should be used. Must be provided with `client_key`. */
  clientCert?: InputMaybe<Scalars["String"]["input"]>;
  /** Base64-encoded client key in PEM format if mTLS authentication should be used. Must be provided with `client_cert`. */
  clientKey?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the cluster agent that will be associated with the new URL configuration. */
  clusterAgentId: Scalars["ClustersAgentID"]["input"];
  /** TLS host name to verify the server name in agent endpoint certificate. */
  tlsHost?: InputMaybe<Scalars["String"]["input"]>;
  /** URL for the new URL configuration. */
  url: Scalars["String"]["input"];
};

/** Autogenerated input type of ClusterAgentUrlConfigurationDelete */
export type ClusterAgentUrlConfigurationDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the agent URL configuration that will be deleted. */
  id: Scalars["ClustersAgentsUrlConfigurationID"]["input"];
};

/** The code flow node type */
export enum CodeFlowNodeType {
  /** Propagation node. */
  Propagation = "PROPAGATION",
  /** Sink node. */
  Sink = "SINK",
  /** Source node. */
  Source = "SOURCE",
}

export enum CodeQualityDegradationSeverity {
  /** Code Quality degradation has a status of blocker. */
  Blocker = "BLOCKER",
  /** Code Quality degradation has a status of critical. */
  Critical = "CRITICAL",
  /** Code Quality degradation has a status of info. */
  Info = "INFO",
  /** Code Quality degradation has a status of major. */
  Major = "MAJOR",
  /** Code Quality degradation has a status of minor. */
  Minor = "MINOR",
  /** Code Quality degradation has a status of unknown. */
  Unknown = "UNKNOWN",
}

/** Represents the generation status of the compared codequality report. */
export enum CodequalityReportsComparerReportGenerationStatus {
  /** An error happened while generating the report. */
  Error = "ERROR",
  /** Report was generated. */
  Parsed = "PARSED",
  /** Report is being generated. */
  Parsing = "PARSING",
}

/** Represents the state of the code quality report. */
export enum CodequalityReportsComparerStatus {
  /** Report generated and there are new code quality degradations. */
  Failed = "FAILED",
  /** Head report or base report not found. */
  NotFound = "NOT_FOUND",
  /** No degradations found in the head pipeline report. */
  Success = "SUCCESS",
}

export type CommitAction = {
  /** Action to perform: create, delete, move, update, or chmod. */
  action: CommitActionMode;
  /** Content of the file. */
  content?: InputMaybe<Scalars["String"]["input"]>;
  /** Encoding of the file. Default is text. */
  encoding?: InputMaybe<CommitEncoding>;
  /** Enables/disables the execute flag on the file. */
  executeFilemode?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path to the file. */
  filePath: Scalars["String"]["input"];
  /** Last known file commit ID. */
  lastCommitId?: InputMaybe<Scalars["String"]["input"]>;
  /** Original full path to the file being moved. */
  previousPath?: InputMaybe<Scalars["String"]["input"]>;
};

/** Mode of a commit action */
export enum CommitActionMode {
  /** Chmod command. */
  Chmod = "CHMOD",
  /** Create command. */
  Create = "CREATE",
  /** Delete command. */
  Delete = "DELETE",
  /** Move command. */
  Move = "MOVE",
  /** Update command. */
  Update = "UPDATE",
}

/** Autogenerated input type of CommitCreate */
export type CommitCreateInput = {
  /** Array of action hashes to commit as a batch. */
  actions?: InputMaybe<Array<CommitAction>>;
  /** Indicates whether an empty commit can be created. Defaults to `false`. */
  allowEmpty?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Name of the branch to commit into, it can be a new branch. */
  branch: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Raw commit message. */
  message: Scalars["String"]["input"];
  /** Project full path the branch is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** If on a new branch, name of the original branch. */
  startBranch?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CommitEncoding {
  /** Base64 encoding. */
  Base64 = "BASE64",
  /** Text encoding. */
  Text = "TEXT",
}

/** Comparable security report type */
export enum ComparableSecurityReportType {
  /** API fuzzing report */
  ApiFuzzing = "API_FUZZING",
  /** Container scanning report */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Coverage fuzzing report */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** DAST report */
  Dast = "DAST",
  /** Dependency scanning report */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** Sarif report */
  Sarif = "SARIF",
  /** SAST report */
  Sast = "SAST",
  /** Secret detection report */
  SecretDetection = "SECRET_DETECTION",
}

/** Comparison operators for filtering */
export enum ComparisonOperator {
  /** Equal to (=). */
  EqualTo = "EQUAL_TO",
  /** Greater than or equal to (>=). */
  GreaterThanOrEqualTo = "GREATER_THAN_OR_EQUAL_TO",
  /** Less than or equal to (<=). */
  LessThanOrEqualTo = "LESS_THAN_OR_EQUAL_TO",
}

export type ComplianceFrameworkFilters = {
  /** ID of the compliance framework. */
  id?: InputMaybe<Scalars["ComplianceManagementFrameworkID"]["input"]>;
  /** IDs of the compliance framework. */
  ids?: InputMaybe<Array<Scalars["ComplianceManagementFrameworkID"]["input"]>>;
  /** Negated compliance framework filter input. */
  not?: InputMaybe<NegatedComplianceFrameworkFilters>;
  /** Checks presence of compliance framework of the project, "none" and "any" values are supported. */
  presenceFilter?: InputMaybe<ComplianceFrameworkPresenceFilter>;
};

export type ComplianceFrameworkInput = {
  /** New color representation of the compliance framework in hex format. e.g. #FCA121. */
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** Set the compliance framework as the default framework for the group. */
  default?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** New description for the compliance framework. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** New name for the compliance framework. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Full path of the compliance pipeline configuration stored in a project repository, such as `.gitlab/.compliance-gitlab-ci.yml@compliance/hipaa`. Ultimate only. Deprecated in GitLab 17.4: Use pipeline execution policies instead.
   * @deprecated Use pipeline execution policies instead. Deprecated in GitLab 17.4.
   */
  pipelineConfigurationFullPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Projects to add or remove from the compliance framework. */
  projects?: InputMaybe<ComplianceFrameworkProjectInput>;
};

/** ComplianceFramework of a project for filtering */
export enum ComplianceFrameworkPresenceFilter {
  /** Any compliance framework is assigned. */
  Any = "ANY",
  /** No compliance framework is assigned. */
  None = "NONE",
}

export type ComplianceFrameworkProjectInput = {
  /** IDs of the projects to add to the compliance framework. */
  addProjects: Array<Scalars["Int"]["input"]>;
  /** IDs of the projects to remove from the compliance framework. */
  removeProjects: Array<Scalars["Int"]["input"]>;
};

/** Values for sorting compliance frameworks. */
export enum ComplianceFrameworkSort {
  /** Sort by compliance framework name, ascending order. */
  NameAsc = "NAME_ASC",
  /** Sort by compliance framework name, descending order. */
  NameDesc = "NAME_DESC",
  /** Sort by compliance framework updated date, ascending order. */
  UpdatedAtAsc = "UPDATED_AT_ASC",
  /** Sort by compliance framework updated date, descending order. */
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

export type ComplianceRequirementInput = {
  /** Compliance controls of the compliance requirement. */
  complianceRequirementsControls?: InputMaybe<
    Array<ComplianceRequirementsControlInput>
  >;
  /** New description for the compliance requirement. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** New name for the compliance requirement. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComplianceRequirementsControlInput = {
  /** Type of the compliance control. */
  controlType?: InputMaybe<Scalars["String"]["input"]>;
  /** Expression of the compliance control. */
  expression?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the external control. */
  externalControlName?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of the external control. */
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** New name for the compliance requirement control. */
  name: Scalars["String"]["input"];
  /** Whether ping is enabled for external controls. */
  pingEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Secret token for an external control. */
  secretToken?: InputMaybe<Scalars["String"]["input"]>;
};

/** Name of the check for the compliance standard. */
export enum ComplianceStandardsAdherenceCheckName {
  /** At least one non author approval */
  AtLeastOneNonAuthorApproval = "AT_LEAST_ONE_NON_AUTHOR_APPROVAL",
  /** At least two approvals */
  AtLeastTwoApprovals = "AT_LEAST_TWO_APPROVALS",
  /** Dast */
  Dast = "DAST",
  /** Prevent approval by merge request creator (author) */
  PreventApprovalByMergeRequestAuthor = "PREVENT_APPROVAL_BY_MERGE_REQUEST_AUTHOR",
  /** Prevent approval by merge request committers */
  PreventApprovalByMergeRequestCommitters = "PREVENT_APPROVAL_BY_MERGE_REQUEST_COMMITTERS",
  /** Sast */
  Sast = "SAST",
}

export type ComplianceStandardsAdherenceInput = {
  /** Name of the check for the compliance standard. */
  checkName?: InputMaybe<ComplianceStandardsAdherenceCheckName>;
  /** Filter compliance standards adherence by project. */
  projectIds?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
  /** Name of the compliance standard. */
  standard?: InputMaybe<ComplianceStandardsAdherenceStandard>;
};

/** Name of the compliance standard. */
export enum ComplianceStandardsAdherenceStandard {
  /** Gitlab */
  Gitlab = "GITLAB",
  /** Soc2 */
  Soc2 = "SOC2",
}

/** Status of the compliance standards adherence. */
export enum ComplianceStandardsAdherenceStatus {
  /** Fail */
  Fail = "FAIL",
  /** Success */
  Success = "SUCCESS",
}

export type ComplianceStandardsProjectAdherenceInput = {
  /** Name of the check for the compliance standard. */
  checkName?: InputMaybe<ComplianceStandardsAdherenceCheckName>;
  /** Name of the compliance standard. */
  standard?: InputMaybe<ComplianceStandardsAdherenceStandard>;
};

export type ComplianceViolationInput = {
  /** Merge requests merged after the date (inclusive). */
  mergedAfter?: InputMaybe<Scalars["Date"]["input"]>;
  /** Merge requests merged before the date (inclusive). */
  mergedBefore?: InputMaybe<Scalars["Date"]["input"]>;
  /** Filter compliance violations by project. */
  projectIds?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
  /** Filter compliance violations by target branch. */
  targetBranch?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComplianceViolationProjectInput = {
  /** Merge requests merged after the date (inclusive). */
  mergedAfter?: InputMaybe<Scalars["Date"]["input"]>;
  /** Merge requests merged before the date (inclusive). */
  mergedBefore?: InputMaybe<Scalars["Date"]["input"]>;
  /** Filter compliance violations by target branch. */
  targetBranch?: InputMaybe<Scalars["String"]["input"]>;
};

/** Reason for the compliance violation. */
export enum ComplianceViolationReason {
  /** Approved by committer */
  ApprovedByCommitter = "APPROVED_BY_COMMITTER",
  /** Approved by insufficient users */
  ApprovedByInsufficientUsers = "APPROVED_BY_INSUFFICIENT_USERS",
  /** Approved by merge request author */
  ApprovedByMergeRequestAuthor = "APPROVED_BY_MERGE_REQUEST_AUTHOR",
}

/** Severity of the compliance violation. */
export enum ComplianceViolationSeverity {
  /** Critical severity */
  Critical = "CRITICAL",
  /** High severity */
  High = "HIGH",
  /** Info severity */
  Info = "INFO",
  /** Low severity */
  Low = "LOW",
  /** Medium severity */
  Medium = "MEDIUM",
}

/** Compliance violation sort values. */
export enum ComplianceViolationSort {
  /** Date merged in ascending order, further sorted by ID in ascending order. */
  MergedAtAsc = "MERGED_AT_ASC",
  /** Date merged in descending order, further sorted by ID in descending order. */
  MergedAtDesc = "MERGED_AT_DESC",
  /** Merge request title in ascending order, further sorted by ID in ascending order. */
  MergeRequestTitleAsc = "MERGE_REQUEST_TITLE_ASC",
  /** Merge request title in descending order, further sorted by ID in descending order. */
  MergeRequestTitleDesc = "MERGE_REQUEST_TITLE_DESC",
  /** Severity in ascending order, further sorted by ID in ascending order. */
  SeverityLevelAsc = "SEVERITY_LEVEL_ASC",
  /** Severity in descending order, further sorted by ID in descending order. */
  SeverityLevelDesc = "SEVERITY_LEVEL_DESC",
  /** Violation reason in ascending order, further sorted by ID in ascending order. */
  ViolationReasonAsc = "VIOLATION_REASON_ASC",
  /** Violation reason in descending order, further sorted by ID in descending order. */
  ViolationReasonDesc = "VIOLATION_REASON_DESC",
}

/** Compliance violation status of the project. */
export enum ComplianceViolationStatus {
  /** Detected */
  Detected = "DETECTED",
  /** Dismissed */
  Dismissed = "DISMISSED",
  /** In review */
  InReview = "IN_REVIEW",
  /** Resolved */
  Resolved = "RESOLVED",
}

/** Conan file types */
export enum ConanMetadatumFileTypeEnum {
  /** A package file type. */
  PackageFile = "PACKAGE_FILE",
  /** A recipe file type. */
  RecipeFile = "RECIPE_FILE",
}

/** Autogenerated input type of ConfigureContainerScanning */
export type ConfigureContainerScanningInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ConfigureDependencyScanning */
export type ConfigureDependencyScanningInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ConfigureSastIac */
export type ConfigureSastIacInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ConfigureSast */
export type ConfigureSastInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** SAST CI configuration for the project. */
  configuration: SastCiConfigurationInput;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ConfigureSecretDetection */
export type ConfigureSecretDetectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Values for sorting contacts */
export enum ContactSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Description in ascending order. */
  DescriptionAsc = "DESCRIPTION_ASC",
  /** Description in descending order. */
  DescriptionDesc = "DESCRIPTION_DESC",
  /** Email in ascending order. */
  EmailAsc = "EMAIL_ASC",
  /** Email in descending order. */
  EmailDesc = "EMAIL_DESC",
  /** First name in ascending order. */
  FirstNameAsc = "FIRST_NAME_ASC",
  /** First name in descending order. */
  FirstNameDesc = "FIRST_NAME_DESC",
  /** Last name in ascending order. */
  LastNameAsc = "LAST_NAME_ASC",
  /** Last name in descending order. */
  LastNameDesc = "LAST_NAME_DESC",
  /** Organization in ascending order. */
  OrganizationAsc = "ORGANIZATION_ASC",
  /** Organization in descending order. */
  OrganizationDesc = "ORGANIZATION_DESC",
  /** Phone in ascending order. */
  PhoneAsc = "PHONE_ASC",
  /** Phone in descending order. */
  PhoneDesc = "PHONE_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Autogenerated input type of ContainerCacheEntryDelete */
export type ContainerCacheEntryDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the cache entry. */
  id: Scalars["String"]["input"];
};

export enum ContainerExpirationPolicyCadenceEnum {
  /** Every day */
  EveryDay = "EVERY_DAY",
  /** Every month */
  EveryMonth = "EVERY_MONTH",
  /** Every three months */
  EveryThreeMonths = "EVERY_THREE_MONTHS",
  /** Every two weeks */
  EveryTwoWeeks = "EVERY_TWO_WEEKS",
  /** Every week */
  EveryWeek = "EVERY_WEEK",
}

export enum ContainerExpirationPolicyKeepEnum {
  /** 50 tags per image name */
  FiftyTags = "FIFTY_TAGS",
  /** 5 tags per image name */
  FiveTags = "FIVE_TAGS",
  /** 100 tags per image name */
  OneHundredTags = "ONE_HUNDRED_TAGS",
  /** 1 tag per image name */
  OneTag = "ONE_TAG",
  /** 10 tags per image name */
  TenTags = "TEN_TAGS",
  /** 25 tags per image name */
  TwentyFiveTags = "TWENTY_FIVE_TAGS",
}

export enum ContainerExpirationPolicyOlderThanEnum {
  /** 14 days until tags are automatically removed */
  FourteenDays = "FOURTEEN_DAYS",
  /** 90 days until tags are automatically removed */
  NinetyDays = "NINETY_DAYS",
  /** 1 day until tags are automatically removed */
  OneDay = "ONE_DAY",
  /** 180 days until tags are automatically removed */
  OneHundredEightyDays = "ONE_HUNDRED_EIGHTY_DAYS",
  /** 3 years until tags are automatically removed */
  OneThousandNinetyFiveDays = "ONE_THOUSAND_NINETY_FIVE_DAYS",
  /** 7 days until tags are automatically removed */
  SevenDays = "SEVEN_DAYS",
  /** 2 years until tags are automatically removed */
  SevenHundredThirtyDays = "SEVEN_HUNDRED_THIRTY_DAYS",
  /** 60 days until tags are automatically removed */
  SixtyDays = "SIXTY_DAYS",
  /** 30 days until tags are automatically removed */
  ThirtyDays = "THIRTY_DAYS",
  /** 3 days until tags are automatically removed */
  ThreeDays = "THREE_DAYS",
  /** 1 year until tags are automatically removed */
  ThreeHundredSixtyFiveDays = "THREE_HUNDRED_SIXTY_FIVE_DAYS",
}

/** Access level for a container repository protection rule resource */
export enum ContainerProtectionRepositoryRuleAccessLevel {
  /** Admin access. */
  Admin = "ADMIN",
  /** Maintainer access. */
  Maintainer = "MAINTAINER",
  /** Owner access. */
  Owner = "OWNER",
}

/** Access level of a container registry tag protection rule resource */
export enum ContainerProtectionTagRuleAccessLevel {
  /** Admin access. */
  Admin = "ADMIN",
  /** Maintainer access. */
  Maintainer = "MAINTAINER",
  /** Owner access. */
  Owner = "OWNER",
}

/** Status of the tags cleanup of a container repository */
export enum ContainerRepositoryCleanupStatus {
  /** Tags cleanup is ongoing. */
  Ongoing = "ONGOING",
  /** Tags cleanup is scheduled and is going to be executed shortly. */
  Scheduled = "SCHEDULED",
  /** Tags cleanup has been partially executed. There are still remaining tags to delete. */
  Unfinished = "UNFINISHED",
  /** Tags cleanup is not scheduled. This is the default state. */
  Unscheduled = "UNSCHEDULED",
}

/** Values for sorting container repositories */
export enum ContainerRepositorySort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Name by ascending order. */
  NameAsc = "NAME_ASC",
  /** Name by descending order. */
  NameDesc = "NAME_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Status of a container repository */
export enum ContainerRepositoryStatus {
  /** Delete Failed status. */
  DeleteFailed = "DELETE_FAILED",
  /** Delete Ongoing status. */
  DeleteOngoing = "DELETE_ONGOING",
  /** Delete Scheduled status. */
  DeleteScheduled = "DELETE_SCHEDULED",
}

/** Values for sorting tags */
export enum ContainerRepositoryTagSort {
  /** Ordered by name in ascending order. */
  NameAsc = "NAME_ASC",
  /** Ordered by name in descending order. */
  NameDesc = "NAME_DESC",
  /** Ordered by published_at in ascending order. Only available for GitLab.com. */
  PublishedAtAsc = "PUBLISHED_AT_ASC",
  /** Ordered by published_at in descending order. Only available for GitLab.com. */
  PublishedAtDesc = "PUBLISHED_AT_DESC",
}

/** Autogenerated input type of ContainerUpstreamCacheDelete */
export type ContainerUpstreamCacheDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry upstream. */
  id: Scalars["VirtualRegistriesContainerUpstreamID"]["input"];
};

/** Autogenerated input type of ContainerUpstreamCreate */
export type ContainerUpstreamCreateInput = {
  /** Cache validity period. Defaults to 24 hours. */
  cacheValidityHours?: InputMaybe<Scalars["Int"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the upstream registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the upstream registry. */
  id: Scalars["VirtualRegistriesContainerRegistryID"]["input"];
  /** Name of upstream registry. */
  name: Scalars["String"]["input"];
  /** Password of the upstream registry. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of the upstream registry. */
  url: Scalars["String"]["input"];
  /** Username of the upstream registry. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ContainerUpstreamDelete */
export type ContainerUpstreamDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the upstream to be deleted. */
  id: Scalars["VirtualRegistriesContainerUpstreamID"]["input"];
};

/** Autogenerated input type of ContainerUpstreamTest */
export type ContainerUpstreamTestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group to test the upstream registry against. Required when `id` is not provided. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the upstream registry to test. When provided, `groupPath`, `url`, `username`, and `password` are ignored. */
  id?: InputMaybe<Scalars["VirtualRegistriesContainerUpstreamID"]["input"]>;
  /** Password for authenticating with the upstream registry. Used when `id` is not provided. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of the upstream registry to test. Required when `GraphqlExplorerControllerid` is not provided. */
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** Username for authenticating with the upstream registry. Used when `id` is not provided. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ContainerUpstreamUpdate */
export type ContainerUpstreamUpdateInput = {
  /** Cache validity period. */
  cacheValidityHours?: InputMaybe<Scalars["Int"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the upstream registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry upstream. */
  id: Scalars["VirtualRegistriesContainerUpstreamID"]["input"];
  /** Name of upstream registry. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Password of the upstream registry. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of the upstream registry. */
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** Username of the upstream registry. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ContainerVirtualRegistryCacheDelete */
export type ContainerVirtualRegistryCacheDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry. */
  id: Scalars["VirtualRegistriesContainerRegistryID"]["input"];
};

/** Autogenerated input type of ContainerVirtualRegistryCreate */
export type ContainerVirtualRegistryCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the virtual registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Name of virtual registry. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of ContainerVirtualRegistryDelete */
export type ContainerVirtualRegistryDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry to be deleted. */
  id: Scalars["VirtualRegistriesContainerRegistryID"]["input"];
};

/** Autogenerated input type of ContainerVirtualRegistryUpdate */
export type ContainerVirtualRegistryUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the virtual registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry to be updated. */
  id: Scalars["VirtualRegistriesContainerRegistryID"]["input"];
  /** Name of virtual registry. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ContainerVirtualRegistryUpstreamCreate */
export type ContainerVirtualRegistryUpstreamCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry. */
  registryId: Scalars["VirtualRegistriesContainerRegistryID"]["input"];
  /** ID of the upstream. */
  upstreamId: Scalars["VirtualRegistriesContainerUpstreamID"]["input"];
};

/** Autogenerated input type of ContainerVirtualRegistryUpstreamDelete */
export type ContainerVirtualRegistryUpstreamDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry upstream. */
  upstreamId: Scalars["VirtualRegistriesContainerRegistryUpstreamID"]["input"];
};

/** Autogenerated input type of ContainerVirtualRegistryUpstreamUpdate */
export type ContainerVirtualRegistryUpstreamUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container virtual registry upstream. */
  id: Scalars["VirtualRegistriesContainerRegistryUpstreamID"]["input"];
  /** Priority order of an upstream within a virtual registry. */
  position: Scalars["Int"]["input"];
};

/** Autogenerated input type of CorpusCreate */
export type CorpusCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project the corpus belongs to. */
  fullPath: Scalars["ID"]["input"];
  /** ID of the corpus package. */
  packageId: Scalars["PackagesPackageID"]["input"];
};

/** Autogenerated input type of CreateAlertIssue */
export type CreateAlertIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the alert to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the alert to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CreateAnnotation */
export type CreateAnnotationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the cluster to add an annotation to. */
  clusterId?: InputMaybe<Scalars["ClustersClusterID"]["input"]>;
  /** Path to a file defining the dashboard on which the annotation should be added. */
  dashboardPath: Scalars["String"]["input"];
  /** Description of the annotation. */
  description: Scalars["String"]["input"];
  /** Timestamp indicating ending moment to which the annotation relates. */
  endingAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Global ID of the environment to add an annotation to. */
  environmentId?: InputMaybe<Scalars["EnvironmentID"]["input"]>;
  /** Timestamp indicating starting moment to which the annotation relates. */
  startingAt: Scalars["Time"]["input"];
};

/** Autogenerated input type of CreateBoard */
export type CreateBoardInput = {
  /** ID of user to be assigned to the board. */
  assigneeId?: InputMaybe<Scalars["UserID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Whether or not backlog list is hidden. */
  hideBacklogList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether or not closed list is hidden. */
  hideClosedList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** ID of iteration cadence to be assigned to the board. */
  iterationCadenceId?: InputMaybe<Scalars["IterationsCadenceID"]["input"]>;
  /** ID of iteration to be assigned to the board. */
  iterationId?: InputMaybe<Scalars["IterationID"]["input"]>;
  /** IDs of labels to be added to the board. */
  labelIds?: InputMaybe<Array<Scalars["LabelID"]["input"]>>;
  /** Labels of the issue. */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** ID of milestone to be assigned to the board. */
  milestoneId?: InputMaybe<Scalars["MilestoneID"]["input"]>;
  /** Board name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Weight value to be assigned to the board. */
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of CreateBranch */
export type CreateBranchInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the branch. */
  name: Scalars["String"]["input"];
  /** Project full path the branch is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Branch name or commit SHA to create branch from. */
  ref: Scalars["String"]["input"];
};

/** Autogenerated input type of CreateClusterAgent */
export type CreateClusterAgentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the cluster agent. */
  name: Scalars["String"]["input"];
  /** Full path of the associated project for the cluster agent. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CreateComplianceFrameworkFromTemplate */
export type CreateComplianceFrameworkFromTemplateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Override the color of the compliance framework in hex format. e.g. #FCA121. */
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** Set the compliance framework as the default framework for the group. */
  default?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Override the description of the compliance framework. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Override the name of the compliance framework. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the namespace to add the compliance framework to. */
  namespacePath: Scalars["ID"]["input"];
  /** Unique identifier of the template to create the framework from. */
  templateId: Scalars["ComplianceManagementFrameworksTemplateRegistryTemplateID"]["input"];
};

/** Autogenerated input type of CreateComplianceFramework */
export type CreateComplianceFrameworkInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the namespace to add the compliance framework to. */
  namespacePath: Scalars["ID"]["input"];
  /** Parameters to update the compliance framework with. */
  params: ComplianceFrameworkInput;
};

/** Autogenerated input type of CreateComplianceRequirement */
export type CreateComplianceRequirementInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the compliance framework of the new requirement. */
  complianceFrameworkId: Scalars["ComplianceManagementFrameworkID"]["input"];
  /** Controls to add to the compliance requirement. */
  controls?: InputMaybe<Array<ComplianceRequirementsControlInput>>;
  /** Parameters to update the compliance requirement with. */
  params: ComplianceRequirementInput;
};

/** Autogenerated input type of CreateComplianceRequirementsControl */
export type CreateComplianceRequirementsControlInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the compliance requirement of the new control. */
  complianceRequirementId: Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementID"]["input"];
  /** Parameters to create the compliance requirement control. */
  params: ComplianceRequirementsControlInput;
};

/** Autogenerated input type of CreateContainerProtectionRepositoryRule */
export type CreateContainerProtectionRepositoryRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Minimum GitLab access level required to delete container images from the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, the default minimum access level is `DEVELOPER`. Valid only when feature flag `container_registry_protected_containers_delete` is enabled. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  minimumAccessLevelForDelete?: InputMaybe<ContainerProtectionRepositoryRuleAccessLevel>;
  /** Minimum GitLab access level required to push container images to the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, the default minimum access level is `DEVELOPER`. */
  minimumAccessLevelForPush?: InputMaybe<ContainerProtectionRepositoryRuleAccessLevel>;
  /** Full path of the project where a protection rule is located. */
  projectPath: Scalars["ID"]["input"];
  /** Container repository path pattern protected by the protection rule. Must start with the project’s full path. For example: `my-project/*-prod-*`. Wildcard character `*` is allowed anywhere after the project’s full path. */
  repositoryPathPattern: Scalars["String"]["input"];
};

/** Autogenerated input type of CreateCustomDashboard */
export type CreateCustomDashboardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Dashboard layout/config. */
  config: CustomDashboardConfigInput;
  /** Dashboard description. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Dashboard name. */
  name: Scalars["String"]["input"];
  /** Namespace to scope the dashboard to. */
  namespaceId?: InputMaybe<Scalars["NamespaceID"]["input"]>;
  /** Organization the dashboard belongs to. Defaults to the current organization if not provided. */
  organizationId?: InputMaybe<Scalars["OrganizationsOrganizationID"]["input"]>;
};

/** Autogenerated input type of CreateCustomEmoji */
export type CreateCustomEmojiInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Namespace full path the emoji is associated with. */
  groupPath: Scalars["ID"]["input"];
  /** Name of the emoji. */
  name: Scalars["String"]["input"];
  /** Location of the emoji file. */
  url: Scalars["String"]["input"];
};

/** Autogenerated input type of CreateDiffNote */
export type CreateDiffNoteInput = {
  /** Content of the note. */
  body: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Internal flag for a note. Default is false. */
  internal?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the resource to add a note to. */
  noteableId: Scalars["NoteableID"]["input"];
  /** Position of the note on a diff. */
  position: DiffPositionInput;
};

/** Autogenerated input type of CreateDiscussion */
export type CreateDiscussionInput = {
  /** Content of the note. */
  body: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Internal flag for a note. Default is false. */
  internal?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the resource to add a note to. */
  noteableId: Scalars["NoteableID"]["input"];
};

/** Autogenerated input type of CreateEpic */
export type CreateEpicInput = {
  /** IDs of labels to be added to the epic. */
  addLabelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Array of labels to be added to the epic. */
  addLabels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Color of the epic. */
  color?: InputMaybe<Scalars["Color"]["input"]>;
  /** Indicates if the epic is confidential. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Description of the epic. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** End date of the epic. */
  dueDateFixed?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates end date should be sourced from due_date_fixed field not the issue milestones. */
  dueDateIsFixed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Group the epic to mutate is in. */
  groupPath: Scalars["ID"]["input"];
  /** IDs of labels to be removed from the epic. */
  removeLabelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Start date of the epic. */
  startDateFixed?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates start date should be sourced from start_date_fixed field not the issue milestones. */
  startDateIsFixed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Title of the epic. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of CreateImageDiffNote */
export type CreateImageDiffNoteInput = {
  /** Content of the note. */
  body: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Internal flag for a note. Default is false. */
  internal?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the resource to add a note to. */
  noteableId: Scalars["NoteableID"]["input"];
  /** Position of the note on a diff. */
  position: DiffImagePositionInput;
};

/** Autogenerated input type of CreateIssue */
export type CreateIssueInput = {
  /** Array of user IDs to assign to the issue. */
  assigneeIds?: InputMaybe<Array<Scalars["UserID"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates the issue is confidential. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Timestamp when the issue was created. Available only for admins and project owners. */
  createdAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Description of the issue. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of a discussion to resolve. Also pass `merge_request_to_resolve_discussions_of`. */
  discussionToResolve?: InputMaybe<Scalars["String"]["input"]>;
  /** Due date of the issue. */
  dueDate?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /**
   * ID of an epic to associate the issue with. Deprecated in GitLab 17.5: This will be replaced by WorkItem hierarchyWidget.
   * @deprecated This will be replaced by WorkItem hierarchyWidget. Deprecated in GitLab 17.5.
   */
  epicId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** Desired health status. */
  healthStatus?: InputMaybe<HealthStatus>;
  /** IID (internal ID) of a project issue. Only admins and project owners can modify. */
  iid?: InputMaybe<Scalars["Int"]["input"]>;
  /** Global iteration cadence ID. Required when `iterationWildcardId` is provided. */
  iterationCadenceId?: InputMaybe<Scalars["IterationsCadenceID"]["input"]>;
  /** Global iteration ID. Mutually exclusive argument with `iterationWildcardId`. */
  iterationId?: InputMaybe<Scalars["IterationID"]["input"]>;
  /** Iteration wildcard ID. Supported values are: `CURRENT`. Mutually exclusive argument with `iterationId`. iterationCadenceId also required when this argument is provided. */
  iterationWildcardId?: InputMaybe<IssueCreationIterationWildcardId>;
  /** IDs of labels to be added to the issue. */
  labelIds?: InputMaybe<Array<Scalars["LabelID"]["input"]>>;
  /** Labels of the issue. */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Indicates discussion is locked on the issue. */
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** IID of a merge request for which to resolve discussions. */
  mergeRequestToResolveDiscussionsOf?: InputMaybe<
    Scalars["MergeRequestID"]["input"]
  >;
  /** ID of the milestone to assign to the issue. On update milestone will be removed if set to null. */
  milestoneId?: InputMaybe<Scalars["MilestoneID"]["input"]>;
  /** Global ID of issue that should be placed after the current issue. */
  moveAfterId?: InputMaybe<Scalars["IssueID"]["input"]>;
  /** Global ID of issue that should be placed before the current issue. */
  moveBeforeId?: InputMaybe<Scalars["IssueID"]["input"]>;
  /** Project full path the issue is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Global ID of the status. */
  statusId?: InputMaybe<Scalars["WorkItemsStatusesStatusID"]["input"]>;
  /** Title of the issue. */
  title: Scalars["String"]["input"];
  /** Type of the issue. */
  type?: InputMaybe<IssueType>;
  /** Weight of the issue. */
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of CreateIteration */
export type CreateIterationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the iteration. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** End date of the iteration. */
  dueDate?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Global ID of the iteration cadence to be assigned to the new iteration. */
  iterationsCadenceId?: InputMaybe<Scalars["IterationsCadenceID"]["input"]>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Start date of the iteration. */
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  /** Title of the iteration. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of CreateLatestDiffNote */
export type CreateLatestDiffNoteInput = {
  /** Content of the note. */
  body: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** End line number on the new version of the file for a multiline note. When provided, newLine is required and marks the start of the comment range. */
  endNewLine?: InputMaybe<Scalars["Int"]["input"]>;
  /** End line number on the old version of the file for a multiline note. When provided, oldLine is required and marks the start of the comment range. */
  endOldLine?: InputMaybe<Scalars["Int"]["input"]>;
  /** Path of the file to comment on. For renamed files, either the old or new path can be used. */
  filePath: Scalars["String"]["input"];
  /** HEAD SHA of the merge request diff. The request fails if it does not match the current diff, guarding against commenting on a stale diff. */
  headSha: Scalars["String"]["input"];
  /** Internal flag for a note. Default is false. */
  internal?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Line number on the new version of the file. Use alone for added lines, with oldLine for unchanged context lines. At least one of newLine or oldLine is required. */
  newLine?: InputMaybe<Scalars["Int"]["input"]>;
  /** Global ID of the merge request to add a diff note to. */
  noteableId: Scalars["MergeRequestID"]["input"];
  /** Line number on the old version of the file. Use alone for removed lines, with newLine for unchanged context lines. At least one of newLine or oldLine is required. */
  oldLine?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of CreateNote */
export type CreateNoteInput = {
  /** Content of the note. */
  body: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the discussion the note is in reply to. */
  discussionId?: InputMaybe<Scalars["DiscussionID"]["input"]>;
  /** Internal flag for a note. Default is false. */
  internal?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** SHA of the head commit which is used to ensure that the merge request has not been updated since the request was sent. */
  mergeRequestDiffHeadSha?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the resource to add a note to. */
  noteableId: Scalars["NoteableID"]["input"];
};

/** Autogenerated input type of CreatePackagesProtectionRule */
export type CreatePackagesProtectionRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Minimum GitLab access required to delete packages from the package registry. Valid values include `OWNER` or `ADMIN`. If the value is `nil`, the default minimum access level is `MAINTAINER`. Available only when feature flag `packages_protected_packages_delete` is enabled. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  minimumAccessLevelForDelete?: InputMaybe<PackagesProtectionRuleAccessLevelForDelete>;
  /** Minimum GitLab access required to push packages to the package registry. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, the default minimum access level is `DEVELOPER`. */
  minimumAccessLevelForPush?: InputMaybe<PackagesProtectionRuleAccessLevel>;
  /** Package name protected by the protection rule. For example, `@my-scope/my-package-*`. Wildcard character `*` allowed. */
  packageNamePattern: Scalars["String"]["input"];
  /** Package type protected by the protection rule. For example, `NPM`, `PYPI`. */
  packageType: PackagesProtectionRulePackageType;
  /** Full path of the project where a protection rule is located. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of CreateRequirement */
export type CreateRequirementInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the requirement. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Full project path the requirement is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Title of the requirement. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of CreateSnippet */
export type CreateSnippetInput = {
  /** Actions to perform over the snippet repository and blobs. */
  blobActions?: InputMaybe<Array<SnippetBlobActionInputType>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the snippet. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project the snippet is associated with. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Title of the snippet. */
  title: Scalars["String"]["input"];
  /** Paths to files uploaded in the snippet description. */
  uploadedFiles?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Visibility level of the snippet. */
  visibilityLevel: VisibilityLevelsEnum;
};

/** Autogenerated input type of CreateTerraformStateProtectionRule */
export type CreateTerraformStateProtectionRuleInput = {
  /**
   * Restriction on the source of write requests. `ANYWHERE` allows all sources, `CI_ONLY` requires a CI job token, `CI_ON_PROTECTED_BRANCH_ONLY` requires a CI job on a protected branch. Introduced in GitLab 19.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.1.
   */
  allowedFrom?: InputMaybe<TerraformStateProtectionRuleAllowedFrom>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Minimum GitLab access level required to perform write operations on the Terraform state. Valid values include `DEVELOPER`, `MAINTAINER`, `OWNER`, or `ADMIN`. */
  minimumAccessLevelForWrite: TerraformStateProtectionRuleAccessLevel;
  /** Full path of the project where the protection rule is located. */
  projectPath: Scalars["ID"]["input"];
  /** Terraform state name protected by the rule. */
  stateName: Scalars["String"]["input"];
};

/** Autogenerated input type of CreateTestCase */
export type CreateTestCaseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Sets the test case confidentiality. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Test case description. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of labels to be added to the test case. */
  labelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Project full path to create the test case in. */
  projectPath: Scalars["ID"]["input"];
  /** Test case title. */
  title: Scalars["String"]["input"];
};

/** Attributes to create value stream stage. */
export type CreateValueStreamStageInput = {
  /** Whether the stage is customized. If false, it assigns a built-in default stage by name. */
  custom?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** End event identifier. */
  endEventIdentifier?: InputMaybe<ValueStreamStageEvent>;
  /** Label ID associated with the end event identifier. */
  endEventLabelId?: InputMaybe<Scalars["LabelID"]["input"]>;
  /** Whether the stage is hidden. */
  hidden?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Name of the stage. */
  name: Scalars["String"]["input"];
  /** Start event identifier. */
  startEventIdentifier?: InputMaybe<ValueStreamStageEvent>;
  /** Label ID associated with the start event identifier. */
  startEventLabelId?: InputMaybe<Scalars["LabelID"]["input"]>;
};

/** Configuration input for a custom analytics dashboard. */
export type CustomDashboardConfigInput = {
  /** Description of the dashboard. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter controls available on the dashboard. */
  filters?: InputMaybe<CustomDashboardFiltersInput>;
  /** Grid height display mode. */
  gridHeight?: InputMaybe<CustomDashboardGridHeight>;
  /** Panels to display on the dashboard. */
  panels: Array<CustomDashboardPanelInput>;
  /** Maturity status of the dashboard. */
  status?: InputMaybe<CustomDashboardStatus>;
  /** Display title of the dashboard. */
  title: Scalars["String"]["input"];
};

/** Date range filter configuration for the dashboard. */
export type CustomDashboardDateRangeFilterInput = {
  /** Default selected date range option. */
  defaultOption?: InputMaybe<CustomDashboardDateRangeOption>;
  /** Whether the date range filter is enabled. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Maximum number of days allowed in a custom range. */
  numberOfDaysLimit?: InputMaybe<Scalars["Float"]["input"]>;
  /** Preset date range options to display. */
  options?: InputMaybe<Array<CustomDashboardDateRangeOption>>;
};

/** Preset date range options available for dashboard filters. */
export enum CustomDashboardDateRangeOption {
  /** Custom date range. */
  Custom = "CUSTOM",
  /** Last 7 days. */
  Days_7 = "DAYS_7",
  /** Last 30 days. */
  Days_30 = "DAYS_30",
  /** Last 60 days. */
  Days_60 = "DAYS_60",
  /** Last 90 days. */
  Days_90 = "DAYS_90",
  /** Last 180 days. */
  Days_180 = "DAYS_180",
  /** Last 365 days. */
  Days_365 = "DAYS_365",
  /** Current day. */
  Today = "TODAY",
}

/** Toggleable dashboard-level filter. */
export type CustomDashboardFilterInput = {
  /** Whether the filter is enabled. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Filtered search filter configuration for the dashboard. */
export type CustomDashboardFilteredSearchFilterInput = {
  /** Whether filtered search is enabled. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Token options available in the filtered search. */
  options?: InputMaybe<Array<CustomDashboardFilteredSearchFilterOptionInput>>;
};

/** Configuration for a single filtered search token. */
export type CustomDashboardFilteredSearchFilterOptionInput = {
  /** Maximum number of suggestions to display. */
  maxSuggestions?: InputMaybe<Scalars["Float"]["input"]>;
  /** Comparison operator for the token. */
  operator?: InputMaybe<CustomDashboardFilteredSearchOperator>;
  /** Token type for the filter option. */
  token: CustomDashboardFilteredSearchToken;
  /** Whether only one value can be selected for the token. */
  unique?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Comparison operators for filtered search tokens. */
export enum CustomDashboardFilteredSearchOperator {
  /** Matches the given value. */
  Is = "IS",
  /** Does not match the given value. */
  IsNot = "IS_NOT",
  /** Does not match any of the given values. */
  IsNotOr = "IS_NOT_OR",
}

/** Token types available for filtered search. */
export enum CustomDashboardFilteredSearchToken {
  /** Filter by assignee. */
  Assignee = "ASSIGNEE",
  /** Filter by author. */
  Author = "AUTHOR",
  /** Filter by label. */
  Label = "LABEL",
  /** Filter by milestone. */
  Milestone = "MILESTONE",
  /** Filter by source branch. */
  SourceBranch = "SOURCE_BRANCH",
  /** Filter by target branch. */
  TargetBranch = "TARGET_BRANCH",
}

/** Filter controls available on the dashboard. */
export type CustomDashboardFiltersInput = {
  /** Date range filter configuration. */
  dateRange?: InputMaybe<CustomDashboardDateRangeFilterInput>;
  /** Filter to exclude anonymous users from metrics. */
  excludeAnonymousUsers?: InputMaybe<CustomDashboardFilterInput>;
  /** Filtered search configuration. */
  filteredSearch?: InputMaybe<CustomDashboardFilteredSearchFilterInput>;
  /** Project filter configuration. */
  projects?: InputMaybe<CustomDashboardFilterInput>;
};

/** Position and size of a panel within the dashboard grid. */
export type CustomDashboardGridAttributesInput = {
  /** Number of grid rows the panel spans. */
  height: Scalars["Int"]["input"];
  /** Maximum height the panel can be resized to. */
  maxHeight?: InputMaybe<Scalars["Int"]["input"]>;
  /** Maximum width the panel can be resized to. */
  maxWidth?: InputMaybe<Scalars["Int"]["input"]>;
  /** Minimum height the panel can be resized to. */
  minHeight?: InputMaybe<Scalars["Int"]["input"]>;
  /** Minimum width the panel can be resized to. */
  minWidth?: InputMaybe<Scalars["Int"]["input"]>;
  /** Number of grid columns the panel spans. */
  width: Scalars["Int"]["input"];
  /** Horizontal grid position of the panel. */
  xPos?: InputMaybe<Scalars["Int"]["input"]>;
  /** Vertical grid position of the panel. */
  yPos?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Grid height display mode for the dashboard. */
export enum CustomDashboardGridHeight {
  /** Compact grid height. */
  Compact = "COMPACT",
  /** Default grid height. */
  Default = "DEFAULT",
}

/** Single panel within a custom dashboard. */
export type CustomDashboardPanelInput = {
  /** Grid position and size of the panel. */
  gridAttributes: CustomDashboardGridAttributesInput;
  /** Display options for the panel. */
  options?: InputMaybe<CustomDashboardPanelOptionsInput>;
  /** Query overrides applied to the visualization. */
  queryOverrides?: InputMaybe<CustomDashboardQueryOverridesInput>;
  /** Display title of the panel. */
  title: Scalars["String"]["input"];
  /** Tooltip for the panel. */
  tooltip?: InputMaybe<CustomDashboardTooltipInput>;
  /** ID of an existing visualization to render. */
  visualization?: InputMaybe<Scalars["String"]["input"]>;
  /** Inline visualization config object to render. */
  visualizationConfig?: InputMaybe<Scalars["JSON"]["input"]>;
};

/** Display options for a dashboard panel. */
export type CustomDashboardPanelOptionsInput = {
  /** Number of decimal places to display for numeric values. */
  decimalPlaces?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Filters applied to the underlying visualization query. */
export type CustomDashboardQueryFiltersInput = {
  /** Metrics to exclude from the query. */
  excludeMetrics?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Additional include filters. */
  include?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Metrics to include in the query. */
  includeMetrics?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Labels to filter by. */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Project topics to filter by. */
  projectTopics?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Overrides applied to the visualization query at the panel level. */
export type CustomDashboardQueryOverridesInput = {
  /** Query filter overrides. */
  filters?: InputMaybe<CustomDashboardQueryFiltersInput>;
  /** Namespace override for the query. */
  namespace?: InputMaybe<Scalars["String"]["input"]>;
  /** Time dimension overrides for the query. */
  timeDimensions?: InputMaybe<Scalars["JSON"]["input"]>;
};

/** Scope filter for custom dashboards */
export enum CustomDashboardScope {
  /** Return all dashboards. */
  All = "ALL",
  /** Return only GitLab-provided system dashboards. */
  Gitlab = "GITLAB",
  /** Return only user-created dashboards. */
  User = "USER",
}

/** Maturity status of the dashboard. */
export enum CustomDashboardStatus {
  /** Dashboard is in beta. */
  Beta = "BETA",
  /** Dashboard is experimental. */
  Experiment = "EXPERIMENT",
}

/** Tooltip displayed on a dashboard panel. */
export type CustomDashboardTooltipInput = {
  /** Tooltip text. Must include %{linkStart} and %{linkEnd} if descriptionLink is set. */
  description: Scalars["String"]["input"];
  /** URI linked from within the tooltip description. */
  descriptionLink?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of CustomFieldArchive */
export type CustomFieldArchiveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the custom field. */
  id: Scalars["IssuablesCustomFieldID"]["input"];
};

/** Autogenerated input type of CustomFieldCreate */
export type CustomFieldCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Type of custom field. */
  fieldType: CustomFieldType;
  /** Group path where the custom field is created. */
  groupPath: Scalars["ID"]["input"];
  /** Name of the custom field. */
  name: Scalars["String"]["input"];
  /** Available options for a select field. */
  selectOptions?: InputMaybe<Array<CustomFieldSelectOptionInput>>;
  /** Work item type global IDs associated to the custom field. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

/** Attributes for the custom field select option */
export type CustomFieldSelectOptionInput = {
  /** Global ID of the custom field select option to update. Creates a new record if not provided. */
  id?: InputMaybe<Scalars["IssuablesCustomFieldSelectOptionID"]["input"]>;
  /** Value of the custom field select option. */
  value: Scalars["String"]["input"];
};

/** Type of custom field */
export enum CustomFieldType {
  /** Date field type. */
  Date = "DATE",
  /** Multi select field type. */
  MultiSelect = "MULTI_SELECT",
  /** Number field type. */
  Number = "NUMBER",
  /** Single select field type. */
  SingleSelect = "SINGLE_SELECT",
  /** Text field type. */
  Text = "TEXT",
}

/** Autogenerated input type of CustomFieldUnarchive */
export type CustomFieldUnarchiveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the custom field. */
  id: Scalars["IssuablesCustomFieldID"]["input"];
};

/** Autogenerated input type of CustomFieldUpdate */
export type CustomFieldUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the custom field. */
  id: Scalars["IssuablesCustomFieldID"]["input"];
  /** Name of the custom field. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Available options for a select field. */
  selectOptions?: InputMaybe<Array<CustomFieldSelectOptionInput>>;
  /** Work item type global IDs associated to the custom field. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

/** Autogenerated input type of CustomerRelationsContactCreate */
export type CustomerRelationsContactCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of or notes for the contact. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Email address of the contact. */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** First name of the contact. */
  firstName: Scalars["String"]["input"];
  /** Group for the contact. */
  groupId: Scalars["GroupID"]["input"];
  /** Last name of the contact. */
  lastName: Scalars["String"]["input"];
  /** Organization for the contact. */
  organizationId?: InputMaybe<
    Scalars["CustomerRelationsOrganizationID"]["input"]
  >;
  /** Phone number of the contact. */
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

export enum CustomerRelationsContactState {
  /** Active contacts. */
  Active = "active",
  /** All available contacts. */
  All = "all",
  /** Inactive contacts. */
  Inactive = "inactive",
}

/** Autogenerated input type of CustomerRelationsContactUpdate */
export type CustomerRelationsContactUpdateInput = {
  /** State of the contact. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of or notes for the contact. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Email address of the contact. */
  email?: InputMaybe<Scalars["String"]["input"]>;
  /** First name of the contact. */
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the contact. */
  id: Scalars["CustomerRelationsContactID"]["input"];
  /** Last name of the contact. */
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  /** Organization of the contact. */
  organizationId?: InputMaybe<
    Scalars["CustomerRelationsOrganizationID"]["input"]
  >;
  /** Phone number of the contact. */
  phone?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of CustomerRelationsOrganizationCreate */
export type CustomerRelationsOrganizationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Standard billing rate for the organization. */
  defaultRate?: InputMaybe<Scalars["Float"]["input"]>;
  /** Description of or notes for the organization. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Group for the organization. */
  groupId: Scalars["GroupID"]["input"];
  /** Name of the organization. */
  name: Scalars["String"]["input"];
};

export enum CustomerRelationsOrganizationState {
  /** Active organizations. */
  Active = "active",
  /** All available organizations. */
  All = "all",
  /** Inactive organizations. */
  Inactive = "inactive",
}

/** Autogenerated input type of CustomerRelationsOrganizationUpdate */
export type CustomerRelationsOrganizationUpdateInput = {
  /** State of the organization. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Standard billing rate for the organization. */
  defaultRate?: InputMaybe<Scalars["Float"]["input"]>;
  /** Description of or notes for the organization. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the organization. */
  id: Scalars["CustomerRelationsOrganizationID"]["input"];
  /** Name of the organization. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Categories for customizable dashboards. */
export enum CustomizableDashboardCategory {
  /** Analytics category for customizable dashboards. */
  Analytics = "ANALYTICS",
}

/** Grid heights for customizable dashboards. */
export enum CustomizableDashboardGridHeight {
  /** Grid cell height is 10 pixels per unit. Minimum cell height is 10 units. */
  Compact = "COMPACT",
  /** Grid cell height is 137 pixels per unit. Minimum cell height is 1 unit. */
  Default = "DEFAULT",
}

/** Values for a CVSS severity */
export enum CvssSeverity {
  /** Critical severity. */
  Critical = "CRITICAL",
  /** High severity. */
  High = "HIGH",
  /** Low severity. */
  Low = "LOW",
  /** Medium severity. */
  Medium = "MEDIUM",
  /** Not a vulnerability. */
  None = "NONE",
}

/** Values for sorting daily usage entries */
export enum DailyUsageSort {
  /** Credits used by ascending order. */
  CreditsUsedAsc = "CREDITS_USED_ASC",
  /** Credits used by descending order. */
  CreditsUsedDesc = "CREDITS_USED_DESC",
  /** Date by ascending order. */
  DateAsc = "DATE_ASC",
  /** Date by descending order. */
  DateDesc = "DATE_DESC",
}

/** Autogenerated input type of DastOnDemandScanCreate */
export type DastOnDemandScanCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the scanner profile to be used for the scan. */
  dastScannerProfileId?: InputMaybe<Scalars["DastScannerProfileID"]["input"]>;
  /** ID of the site profile to be used for the scan. */
  dastSiteProfileId: Scalars["DastSiteProfileID"]["input"];
  /** Project the site profile belongs to. */
  fullPath: Scalars["ID"]["input"];
};

/** Check type of the pre scan verification step. */
export enum DastPreScanVerificationCheckType {
  /** Authentication check */
  Authentication = "AUTHENTICATION",
  /** Connection check */
  Connection = "CONNECTION",
  /** Crawling check */
  Crawling = "CRAWLING",
}

/** Status of DAST pre scan verification. */
export enum DastPreScanVerificationStatus {
  /** Pre Scan Verification complete without errors. */
  Complete = "COMPLETE",
  /** Pre Scan Verification finished with one or more errors. */
  CompleteWithErrors = "COMPLETE_WITH_ERRORS",
  /** Pre Scan Validation unable to finish. */
  Failed = "FAILED",
  /** Pre Scan Verification in execution. */
  Running = "RUNNING",
}

/** Represents DAST Profile Cadence. */
export type DastProfileCadenceInput = {
  /** Duration of the DAST Profile Cadence. */
  duration?: InputMaybe<Scalars["Int"]["input"]>;
  /** Unit for the duration of DAST Profile Cadence. */
  unit?: InputMaybe<DastProfileCadenceUnit>;
};

/** Unit for the duration of Dast Profile Cadence. */
export enum DastProfileCadenceUnit {
  /** DAST Profile Cadence duration in days. */
  Day = "DAY",
  /** DAST Profile Cadence duration in months. */
  Month = "MONTH",
  /** DAST Profile Cadence duration in weeks. */
  Week = "WEEK",
  /** DAST Profile Cadence duration in years. */
  Year = "YEAR",
}

/** Autogenerated input type of DastProfileCreate */
export type DastProfileCreateInput = {
  /** Associated branch. */
  branchName?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Represents a DAST Profile Schedule. */
  dastProfileSchedule?: InputMaybe<DastProfileScheduleInput>;
  /** ID of the scanner profile to be associated. */
  dastScannerProfileId: Scalars["DastScannerProfileID"]["input"];
  /** ID of the site profile to be associated. */
  dastSiteProfileId: Scalars["DastSiteProfileID"]["input"];
  /** Description of the profile. Defaults to an empty string. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Project the profile belongs to. */
  fullPath: Scalars["ID"]["input"];
  /** Name of the profile. */
  name: Scalars["String"]["input"];
  /** Run scan using profile after creation. Defaults to false. */
  runAfterCreate?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates the runner tags associated with the profile. */
  tagList?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of DastProfileDelete */
export type DastProfileDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the profile to be deleted. */
  id: Scalars["DastProfileID"]["input"];
};

/** Autogenerated input type of DastProfileRun */
export type DastProfileRunInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Full path for the project the scanner profile belongs to. Deprecated in GitLab 14.5: Full path not required to qualify Global ID.
   * @deprecated Full path not required to qualify Global ID. Deprecated in GitLab 14.5.
   */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the profile to be used for the scan. */
  id: Scalars["DastProfileID"]["input"];
};

/** Input type for DAST Profile Schedules */
export type DastProfileScheduleInput = {
  /** Status of a Dast Profile Schedule. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Cadence of a Dast Profile Schedule. */
  cadence?: InputMaybe<DastProfileCadenceInput>;
  /** Start time of a Dast Profile Schedule. */
  startsAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Time Zone for the Start time of a Dast Profile Schedule. */
  timezone?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of DastProfileUpdate */
export type DastProfileUpdateInput = {
  /** Associated branch. */
  branchName?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Represents a DAST profile schedule. */
  dastProfileSchedule?: InputMaybe<DastProfileScheduleInput>;
  /** ID of the scanner profile to be associated. */
  dastScannerProfileId?: InputMaybe<Scalars["DastScannerProfileID"]["input"]>;
  /** ID of the site profile to be associated. */
  dastSiteProfileId?: InputMaybe<Scalars["DastSiteProfileID"]["input"]>;
  /** Description of the profile. Defaults to an empty string. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Project the profile belongs to. Deprecated in GitLab 14.5: Full path not required to qualify Global ID.
   * @deprecated Full path not required to qualify Global ID. Deprecated in GitLab 14.5.
   */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the profile to be deleted. */
  id: Scalars["DastProfileID"]["input"];
  /** Name of the profile. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Run scan using profile after update. Defaults to false. */
  runAfterUpdate?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates the runner tags associated with the profile. */
  tagList?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Scan method to be used by the scanner. */
export enum DastScanMethodType {
  /** GraphQL scan method. */
  Graphql = "GRAPHQL",
  /** HAR scan method. */
  Har = "HAR",
  /** OpenAPI scan method. */
  Openapi = "OPENAPI",
  /** Postman scan method. */
  PostmanCollection = "POSTMAN_COLLECTION",
  /** Website scan method. */
  Website = "WEBSITE",
}

export enum DastScanTypeEnum {
  /** Active DAST scan. This scan will make active attacks against the target site. */
  Active = "ACTIVE",
  /** Passive DAST scan. This scan will not make active attacks against the target site. */
  Passive = "PASSIVE",
}

/** Autogenerated input type of DastScannerProfileCreate */
export type DastScannerProfileCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project the scanner profile belongs to. */
  fullPath: Scalars["ID"]["input"];
  /** Name of the scanner profile. */
  profileName: Scalars["String"]["input"];
  /** Indicates the type of DAST scan that will run. Either a Passive Scan or an Active Scan. */
  scanType?: InputMaybe<DastScanTypeEnum>;
  /** Indicates if debug messages should be included in DAST console output. True to include the debug messages. */
  showDebugMessages?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Maximum number of minutes allowed for the spider to traverse the site. */
  spiderTimeout?: InputMaybe<Scalars["Int"]["input"]>;
  /**
   * Indicates the runner tags associated with the scanner profile. Deprecated in GitLab 15.8: Moved to DastProfile.
   * @deprecated Moved to DastProfile. Deprecated in GitLab 15.8.
   */
  tagList?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Maximum number of seconds allowed for the site under test to respond to a request. */
  targetTimeout?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates if the AJAX spider should be used to crawl the target site. True to run the AJAX spider in addition to the traditional spider, and false to run only the traditional spider. */
  useAjaxSpider?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Autogenerated input type of DastScannerProfileDelete */
export type DastScannerProfileDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Full path for the project the scanner profile belongs to. Deprecated in GitLab 14.5: Full path not required to qualify Global ID.
   * @deprecated Full path not required to qualify Global ID. Deprecated in GitLab 14.5.
   */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the scanner profile to be deleted. */
  id: Scalars["DastScannerProfileID"]["input"];
};

/** Autogenerated input type of DastScannerProfileUpdate */
export type DastScannerProfileUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Project the scanner profile belongs to. Deprecated in GitLab 14.5: Full path not required to qualify Global ID.
   * @deprecated Full path not required to qualify Global ID. Deprecated in GitLab 14.5.
   */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the scanner profile to be updated. */
  id: Scalars["DastScannerProfileID"]["input"];
  /** Name of the scanner profile. */
  profileName: Scalars["String"]["input"];
  /** Indicates the type of DAST scan that will run. Either a Passive Scan or an Active Scan. */
  scanType?: InputMaybe<DastScanTypeEnum>;
  /** Indicates if debug messages should be included in DAST console output. True to include the debug messages. */
  showDebugMessages?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Maximum number of minutes allowed for the spider to traverse the site. */
  spiderTimeout: Scalars["Int"]["input"];
  /**
   * Indicates the runner tags associated with the scanner profile. Deprecated in GitLab 15.8: Moved to DastProfile.
   * @deprecated Moved to DastProfile. Deprecated in GitLab 15.8.
   */
  tagList?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Maximum number of seconds allowed for the site under test to respond to a request. */
  targetTimeout: Scalars["Int"]["input"];
  /** Indicates if the AJAX spider should be used to crawl the target site. True to run the AJAX spider in addition to the traditional spider, and false to run only the traditional spider. */
  useAjaxSpider?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Input type for DastSiteProfile authentication */
export type DastSiteProfileAuthInput = {
  /** Indicates whether authentication is enabled. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Password to authenticate with on the target. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of password field at the sign-in HTML form. */
  passwordField?: InputMaybe<Scalars["String"]["input"]>;
  /** Name or ID of sign-in submit button at the sign-in HTML form. */
  submitField?: InputMaybe<Scalars["String"]["input"]>;
  /** The URL of the page containing the sign-in HTML form on the target website. */
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** Username to authenticate with on the target. */
  username?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of username field at the sign-in HTML form. */
  usernameField?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of DastSiteProfileCreate */
export type DastSiteProfileCreateInput = {
  /** Parameters for authentication. */
  auth?: InputMaybe<DastSiteProfileAuthInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** URLs to skip during an authenticated scan. Defaults to `[]`. */
  excludedUrls?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Project the site profile belongs to. */
  fullPath: Scalars["ID"]["input"];
  /** Optional variables that can be configured for DAST scans. */
  optionalVariables?: InputMaybe<Array<Scalars["JSON"]["input"]>>;
  /** Name of the site profile. */
  profileName: Scalars["String"]["input"];
  /** Comma-separated list of request header names and values to be added to every request made by DAST. */
  requestHeaders?: InputMaybe<Scalars["String"]["input"]>;
  /** File Path or URL used as input for the scan method. */
  scanFilePath?: InputMaybe<Scalars["String"]["input"]>;
  /** Scan method by the scanner. */
  scanMethod?: InputMaybe<DastScanMethodType>;
  /** Type of target to be scanned. */
  targetType?: InputMaybe<DastTargetTypeEnum>;
  /** URL of the target to be scanned. */
  targetUrl?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of DastSiteProfileDelete */
export type DastSiteProfileDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Project the site profile belongs to. Deprecated in GitLab 14.5: Full path not required to qualify Global ID.
   * @deprecated Full path not required to qualify Global ID. Deprecated in GitLab 14.5.
   */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the site profile to be deleted. */
  id: Scalars["DastSiteProfileID"]["input"];
};

/** Autogenerated input type of DastSiteProfileUpdate */
export type DastSiteProfileUpdateInput = {
  /** Parameters for authentication. */
  auth?: InputMaybe<DastSiteProfileAuthInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** URLs to skip during an authenticated scan. */
  excludedUrls?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Project the site profile belongs to. Deprecated in GitLab 14.5: Full path not required to qualify Global ID.
   * @deprecated Full path not required to qualify Global ID. Deprecated in GitLab 14.5.
   */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the site profile to be updated. */
  id: Scalars["DastSiteProfileID"]["input"];
  /** Optional variables that can be configured for DAST scans. */
  optionalVariables?: InputMaybe<Array<Scalars["JSON"]["input"]>>;
  /** Name of the site profile. */
  profileName: Scalars["String"]["input"];
  /** Comma-separated list of request header names and values to be added to every request made by DAST. */
  requestHeaders?: InputMaybe<Scalars["String"]["input"]>;
  /** File Path or URL used as input for the scan method. */
  scanFilePath?: InputMaybe<Scalars["String"]["input"]>;
  /** Scan method by the scanner. */
  scanMethod?: InputMaybe<DastScanMethodType>;
  /** Type of target to be scanned. */
  targetType?: InputMaybe<DastTargetTypeEnum>;
  /** URL of the target to be scanned. */
  targetUrl?: InputMaybe<Scalars["String"]["input"]>;
};

export enum DastSiteProfileValidationStatusEnum {
  /** Site validation process finished but failed. */
  FailedValidation = "FAILED_VALIDATION",
  /** Site validation process is in progress. */
  InprogressValidation = "INPROGRESS_VALIDATION",
  /** No site validation exists. */
  None = "NONE",
  /** Site validation process finished successfully. */
  PassedValidation = "PASSED_VALIDATION",
  /** Site validation process has not started. */
  PendingValidation = "PENDING_VALIDATION",
}

/** Autogenerated input type of DastSiteTokenCreate */
export type DastSiteTokenCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project the site token belongs to. */
  fullPath: Scalars["ID"]["input"];
  /** URL of the target to be validated. */
  targetUrl?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of DastSiteValidationCreate */
export type DastSiteValidationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the site token. */
  dastSiteTokenId: Scalars["DastSiteTokenID"]["input"];
  /** Project the site profile belongs to. */
  fullPath: Scalars["ID"]["input"];
  /** Validation strategy to be used. */
  strategy?: InputMaybe<DastSiteValidationStrategyEnum>;
  /** Path to be requested during validation. */
  validationPath: Scalars["String"]["input"];
};

/** Autogenerated input type of DastSiteValidationRevoke */
export type DastSiteValidationRevokeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project the site validation belongs to. */
  fullPath: Scalars["ID"]["input"];
  /** Normalized URL of the target to be revoked. */
  normalizedTargetUrl: Scalars["String"]["input"];
};

export enum DastSiteValidationStatusEnum {
  /** Site validation process finished but failed. */
  FailedValidation = "FAILED_VALIDATION",
  /** Site validation process is in progress. */
  InprogressValidation = "INPROGRESS_VALIDATION",
  /** Site validation process finished successfully. */
  PassedValidation = "PASSED_VALIDATION",
  /** Site validation process has not started. */
  PendingValidation = "PENDING_VALIDATION",
}

export enum DastSiteValidationStrategyEnum {
  /** Header validation. */
  Header = "HEADER",
  /** Meta tag validation. */
  MetaTag = "META_TAG",
  /** Text file validation. */
  TextFile = "TEXT_FILE",
}

export enum DastTargetTypeEnum {
  /** API target. */
  Api = "API",
  /** Website target. */
  Website = "WEBSITE",
}

/** Color of the data visualization palette */
export enum DataVisualizationColorEnum {
  /** Aqua color */
  Aqua = "AQUA",
  /** Blue color */
  Blue = "BLUE",
  /** Green color */
  Green = "GREEN",
  /** Magenta color */
  Magenta = "MAGENTA",
  /** Orange color */
  Orange = "ORANGE",
}

/** Weight of the data visualization palette */
export enum DataVisualizationWeightEnum {
  /** 50 weight */
  Weight_50 = "WEIGHT_50",
  /** 100 weight */
  Weight_100 = "WEIGHT_100",
  /** 200 weight */
  Weight_200 = "WEIGHT_200",
  /** 300 weight */
  Weight_300 = "WEIGHT_300",
  /** 400 weight */
  Weight_400 = "WEIGHT_400",
  /** 500 weight */
  Weight_500 = "WEIGHT_500",
  /** 600 weight */
  Weight_600 = "WEIGHT_600",
  /** 700 weight */
  Weight_700 = "WEIGHT_700",
  /** 800 weight */
  Weight_800 = "WEIGHT_800",
  /** 900 weight */
  Weight_900 = "WEIGHT_900",
  /** 950 weight */
  Weight_950 = "WEIGHT_950",
}

/** Autogenerated input type of DeleteAnnotation */
export type DeleteAnnotationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the annotation to delete. */
  id: Scalars["String"]["input"];
};

/** Autogenerated input type of DeleteContainerProtectionRepositoryRule */
export type DeleteContainerProtectionRepositoryRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the container repository protection rule to delete. */
  id: Scalars["ContainerRegistryProtectionRuleID"]["input"];
};

/** Autogenerated input type of DeleteContainerProtectionTagRule */
export type DeleteContainerProtectionTagRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the tag protection rule to delete. */
  id: Scalars["ContainerRegistryProtectionTagRuleID"]["input"];
};

/** Autogenerated input type of DeleteConversationThread */
export type DeleteConversationThreadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the thread to delete. */
  threadId: Scalars["AiConversationThreadID"]["input"];
};

/** Autogenerated input type of DeleteCustomDashboard */
export type DeleteCustomDashboardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the dashboard to delete. */
  id: Scalars["AnalyticsCustomDashboardsDashboardID"]["input"];
};

/** Autogenerated input type of DeleteDuoWorkflowsWorkflow */
export type DeleteDuoWorkflowsWorkflowInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the workflow to delete. */
  workflowId: Scalars["AiDuoWorkflowsWorkflowID"]["input"];
};

/** Autogenerated input type of DeleteGroupCustomAttribute */
export type DeleteGroupCustomAttributeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group. */
  groupPath: Scalars["ID"]["input"];
  /** Key of the custom attribute to delete. */
  key: Scalars["String"]["input"];
};

/** Autogenerated input type of DeletePackagesProtectionRule */
export type DeletePackagesProtectionRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the package protection rule to delete. */
  id: Scalars["PackagesProtectionRuleID"]["input"];
};

/** Autogenerated input type of DeletePagesDeployment */
export type DeletePagesDeploymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Pages Deployment. */
  id: Scalars["PagesDeploymentID"]["input"];
};

/** Autogenerated input type of DeleteProjectCustomAttribute */
export type DeleteProjectCustomAttributeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Key of the custom attribute to delete. */
  key: Scalars["String"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of DeleteTerraformStateProtectionRule */
export type DeleteTerraformStateProtectionRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Terraform state protection rule to delete. */
  id: Scalars["TerraformStateProtectionRuleID"]["input"];
};

/** Autogenerated input type of DeleteUserCustomAttribute */
export type DeleteUserCustomAttributeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Key of the custom attribute to delete. */
  key: Scalars["String"]["input"];
  /** Global ID of the user. */
  userId: Scalars["UserID"]["input"];
};

/** Type of a dependency firewall policy rule. */
export enum DependencyFirewallRuleType {
  /** Rule matching on package licenses. */
  License = "LICENSE",
  /** Rule matching on packages flagged as malicious. */
  Malicious = "MALICIOUS",
  /** Rule matching on package vulnerabilities. */
  Vulnerability = "VULNERABILITY",
}

export enum DependencyProxyManifestStatus {
  /** Dependency proxy manifest has a status of default. */
  Default = "DEFAULT",
  /** Dependency proxy manifest has a status of error. */
  Error = "ERROR",
  /** Dependency proxy manifest has a status of pending_destruction. */
  PendingDestruction = "PENDING_DESTRUCTION",
  /** Dependency proxy manifest has a status of processing. */
  Processing = "PROCESSING",
}

/** Values for sorting dependencies */
export enum DependencySort {
  /** License by ascending order. */
  LicenseAsc = "LICENSE_ASC",
  /** License by descending order. */
  LicenseDesc = "LICENSE_DESC",
  /** Name by ascending order. */
  NameAsc = "NAME_ASC",
  /** Name by descending order. */
  NameDesc = "NAME_DESC",
  /** Packager by ascending order. */
  PackagerAsc = "PACKAGER_ASC",
  /** Packager by descending order. */
  PackagerDesc = "PACKAGER_DESC",
  /** Severity by ascending order. */
  SeverityAsc = "SEVERITY_ASC",
  /** Severity by descending order. */
  SeverityDesc = "SEVERITY_DESC",
}

/** Status of the deployment approval summary. */
export enum DeploymentApprovalSummaryStatus {
  /** Summarized deployment approval status that is approved. */
  Approved = "APPROVED",
  /** Summarized deployment approval status that is pending approval. */
  PendingApproval = "PENDING_APPROVAL",
  /** Summarized deployment approval status that is rejected. */
  Rejected = "REJECTED",
}

/** All deployment statuses. */
export enum DeploymentStatus {
  /** A deployment that is blocked. */
  Blocked = "BLOCKED",
  /** A deployment that is canceled. */
  Canceled = "CANCELED",
  /** A deployment that is created. */
  Created = "CREATED",
  /** A deployment that is failed. */
  Failed = "FAILED",
  /** A deployment that is running. */
  Running = "RUNNING",
  /** A deployment that is skipped. */
  Skipped = "SKIPPED",
  /** A deployment that is success. */
  Success = "SUCCESS",
}

/** All environment deployment tiers. */
export enum DeploymentTier {
  /** Development. */
  Development = "DEVELOPMENT",
  /** Other. */
  Other = "OTHER",
  /** Production. */
  Production = "PRODUCTION",
  /** Staging. */
  Staging = "STAGING",
  /** Testing. */
  Testing = "TESTING",
}

/** Status of the deployment approval. */
export enum DeploymentsApprovalStatus {
  /** A deployment approval that is approved. */
  Approved = "APPROVED",
  /** A deployment approval that is rejected. */
  Rejected = "REJECTED",
}

/** Values for ordering deployments by a specific field */
export type DeploymentsOrderByInput = {
  /** Order by Created time. */
  createdAt?: InputMaybe<SortDirectionEnum>;
  /** Order by Finished time. */
  finishedAt?: InputMaybe<SortDirectionEnum>;
};

/** Copy state of a DesignCollection */
export enum DesignCollectionCopyState {
  /** The DesignCollection encountered an error during a copy */
  Error = "ERROR",
  /** The DesignCollection is being copied */
  InProgress = "IN_PROGRESS",
  /** The DesignCollection has no copy in progress */
  Ready = "READY",
}

/** Autogenerated input type of DesignManagementDelete */
export type DesignManagementDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Filenames of the designs to delete. */
  filenames: Array<Scalars["String"]["input"]>;
  /** IID of the issue to modify designs for. */
  iid: Scalars["ID"]["input"];
  /** Project where the issue is to upload designs for. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of DesignManagementMove */
export type DesignManagementMoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the design to move. */
  id: Scalars["DesignManagementDesignID"]["input"];
  /** ID of the immediately following design. */
  next?: InputMaybe<Scalars["DesignManagementDesignID"]["input"]>;
  /** ID of the immediately preceding design. */
  previous?: InputMaybe<Scalars["DesignManagementDesignID"]["input"]>;
};

/** Autogenerated input type of DesignManagementUpdate */
export type DesignManagementUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the design. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the design to update. */
  id: Scalars["DesignManagementDesignID"]["input"];
};

/** Autogenerated input type of DesignManagementUpload */
export type DesignManagementUploadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Files to upload. */
  files: Array<Scalars["Upload"]["input"]>;
  /** IID of the issue to modify designs for. */
  iid: Scalars["ID"]["input"];
  /** Project where the issue is to upload designs for. */
  projectPath: Scalars["ID"]["input"];
};

/** Mutation event of a design within a version */
export enum DesignVersionEvent {
  /** A creation event */
  Creation = "CREATION",
  /** A deletion event */
  Deletion = "DELETION",
  /** A modification event */
  Modification = "MODIFICATION",
  /** No change. */
  None = "NONE",
}

/** Autogenerated input type of DestroyBoard */
export type DestroyBoardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the board to destroy. */
  id: Scalars["BoardID"]["input"];
};

/** Autogenerated input type of DestroyBoardList */
export type DestroyBoardListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the list to destroy. Only label lists are accepted. */
  listId: Scalars["ListID"]["input"];
};

/** Autogenerated input type of DestroyComplianceFramework */
export type DestroyComplianceFrameworkInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the compliance framework to destroy. */
  id: Scalars["ComplianceManagementFrameworkID"]["input"];
};

/** Autogenerated input type of DestroyComplianceRequirement */
export type DestroyComplianceRequirementInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the compliance requirement to destroy. */
  id: Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementID"]["input"];
};

/** Autogenerated input type of DestroyComplianceRequirementsControl */
export type DestroyComplianceRequirementsControlInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the compliance requirement control to destroy. */
  id: Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementsControlID"]["input"];
};

/** Autogenerated input type of DestroyContainerRepository */
export type DestroyContainerRepositoryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container repository. */
  id: Scalars["ContainerRepositoryID"]["input"];
};

/** Autogenerated input type of DestroyContainerRepositoryTags */
export type DestroyContainerRepositoryTagsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the container repository. */
  id: Scalars["ContainerRepositoryID"]["input"];
  /** Container repository tag(s) to delete. Total number can't be greater than 20 */
  tagNames: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of DestroyCustomEmoji */
export type DestroyCustomEmojiInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the custom emoji to destroy. */
  id: Scalars["CustomEmojiID"]["input"];
};

/** Autogenerated input type of DestroyEpicBoard */
export type DestroyEpicBoardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the board to destroy. */
  id: Scalars["BoardsEpicBoardID"]["input"];
};

/** Autogenerated input type of DestroyNote */
export type DestroyNoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the note to destroy. */
  id: Scalars["NoteID"]["input"];
};

/** Autogenerated input type of DestroyPackageFile */
export type DestroyPackageFileInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Package file. */
  id: Scalars["PackagesPackageFileID"]["input"];
};

/** Autogenerated input type of DestroyPackageFiles */
export type DestroyPackageFilesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of the Package file. */
  ids: Array<Scalars["PackagesPackageFileID"]["input"]>;
  /** Project path where the packages cleanup policy is located. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of DestroyPackage */
export type DestroyPackageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Package. */
  id: Scalars["PackagesPackageID"]["input"];
};

/** Autogenerated input type of DestroyPackages */
export type DestroyPackagesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the Packages. Max 100 */
  ids: Array<Scalars["PackagesPackageID"]["input"]>;
};

/** Autogenerated input type of DestroySnippet */
export type DestroySnippetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the snippet to destroy. */
  id: Scalars["SnippetID"]["input"];
};

/** Detailed representation of whether a GitLab merge request can be merged. */
export enum DetailedMergeStatus {
  /** Merge request approvals currently syncing. */
  ApprovalsSyncing = "APPROVALS_SYNCING",
  /** Merge request dependencies must be merged. */
  BlockedStatus = "BLOCKED_STATUS",
  /** Currently checking for mergeability. */
  Checking = "CHECKING",
  /** Pipeline must succeed before merging. */
  CiMustPass = "CI_MUST_PASS",
  /** Pipeline is still running. */
  CiStillRunning = "CI_STILL_RUNNING",
  /** Source branch exists and contains commits. */
  CommitsStatus = "COMMITS_STATUS",
  /** There are conflicts between the source and target branches. */
  Conflict = "CONFLICT",
  /** Discussions must be resolved before merging. */
  DiscussionsNotResolved = "DISCUSSIONS_NOT_RESOLVED",
  /** Merge request must not be draft before merging. */
  DraftStatus = "DRAFT_STATUS",
  /** Status checks must pass. */
  ExternalStatusChecks = "EXTERNAL_STATUS_CHECKS",
  /** Either the title or description must reference a Jira issue. */
  JiraAssociation = "JIRA_ASSOCIATION",
  /** Merge request includes locked LFS files. */
  LockedLfsFiles = "LOCKED_LFS_FILES",
  /** Merge request includes locked paths. */
  LockedPaths = "LOCKED_PATHS",
  /** Branch can be merged. */
  Mergeable = "MERGEABLE",
  /** Merge request may not be merged until after the specified time. */
  MergeTime = "MERGE_TIME",
  /** Merge request needs to be rebased. */
  NeedRebase = "NEED_REBASE",
  /** Merge request must be approved before merging. */
  NotApproved = "NOT_APPROVED",
  /** Merge request must be open before merging. */
  NotOpen = "NOT_OPEN",
  /** Merge request diff is being created. */
  Preparing = "PREPARING",
  /** Indicates a reviewer has requested changes. */
  RequestedChanges = "REQUESTED_CHANGES",
  /** All policy rules must be satisfied. */
  SecurityPoliciesViolations = "SECURITY_POLICIES_VIOLATIONS",
  /** All security policy pipelines must succeed. */
  SecurityPolicyPipelineCheck = "SECURITY_POLICY_PIPELINE_CHECK",
  /** Merge request title does not match required regex. */
  TitleNotMatching = "TITLE_NOT_MATCHING",
  /** Merge status has not been checked. */
  Unchecked = "UNCHECKED",
}

/** Autogenerated input type of DevfileValidate */
export type DevfileValidateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Input devfile. */
  devfileYaml: Scalars["String"]["input"];
};

export type DiffImagePositionInput = {
  /** Merge base of the branch the comment was made on. */
  baseSha?: InputMaybe<Scalars["String"]["input"]>;
  /** SHA of the HEAD at the time the comment was made. */
  headSha: Scalars["String"]["input"];
  /** Total height of the image. */
  height: Scalars["Int"]["input"];
  /** The paths of the file that was changed. Both of the properties of this input are optional, but at least one of them is required */
  paths: DiffPathsInput;
  /** SHA of the branch being compared against. */
  startSha: Scalars["String"]["input"];
  /** Total width of the image. */
  width: Scalars["Int"]["input"];
  /** X position of the note. */
  x: Scalars["Int"]["input"];
  /** Y position of the note. */
  y: Scalars["Int"]["input"];
};

export type DiffPathsInput = {
  /** Path of the file on the HEAD SHA. */
  newPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Path of the file on the start SHA. */
  oldPath?: InputMaybe<Scalars["String"]["input"]>;
};

export type DiffPositionInput = {
  /** Merge base of the branch the comment was made on. */
  baseSha?: InputMaybe<Scalars["String"]["input"]>;
  /** SHA of the HEAD at the time the comment was made. */
  headSha: Scalars["String"]["input"];
  /** Line on HEAD SHA that was changed. Please see the [REST API Documentation](https://docs.gitlab.com/api/discussions/#create-a-new-thread-in-the-merge-request-diff) for more information on how to use this field. */
  newLine?: InputMaybe<Scalars["Int"]["input"]>;
  /** Line on start SHA that was changed. Please see the [REST API Documentation](https://docs.gitlab.com/api/discussions/#create-a-new-thread-in-the-merge-request-diff) for more information on how to use this field. */
  oldLine?: InputMaybe<Scalars["Int"]["input"]>;
  /** The paths of the file that was changed. Both of the properties of this input are optional, but at least one of them is required */
  paths: DiffPathsInput;
  /** SHA of the branch being compared against. */
  startSha: Scalars["String"]["input"];
};

/** Type of file the position refers to */
export enum DiffPositionType {
  /** Unknown file type. */
  File = "file",
  /** An image. */
  Image = "image",
  /** Text file. */
  Text = "text",
}

/** Autogenerated input type of DisableDevopsAdoptionNamespace */
export type DisableDevopsAdoptionNamespaceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** One or many IDs of the enabled namespaces to disable. */
  id: Array<Scalars["AnalyticsDevopsAdoptionEnabledNamespaceID"]["input"]>;
};

/** Autogenerated input type of DiscussionToggleResolve */
export type DiscussionToggleResolveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the discussion. */
  id: Scalars["DiscussionID"]["input"];
  /** Will resolve the discussion when true, and unresolve the discussion when false. */
  resolve: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of DismissPolicyViolations */
export type DismissPolicyViolationsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment explaining the dismissal of the policy violations. */
  comment: Scalars["String"]["input"];
  /** Type of dismissal for the policy violations. */
  dismissalTypes: Array<DismissalType>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** IDs of warn mode policies with violations to dismiss. */
  securityPolicyIds: Array<Scalars["ID"]["input"]>;
};

/** Represents the different dismissal types for security policy violations. */
export enum DismissalType {
  /** Dismissal due to emergency hot fix. */
  EmergencyHotFix = "EMERGENCY_HOT_FIX",
  /** Dismissal due to other reasons. */
  Other = "OTHER",
  /** Dismissal due to policy false positive. */
  PolicyFalsePositive = "POLICY_FALSE_POSITIVE",
  /** Dismissal due to scanner false positive. */
  ScannerFalsePositive = "SCANNER_FALSE_POSITIVE",
}

/** All possible ways that DORA metrics can be aggregated. */
export enum DoraMetricBucketingInterval {
  /** All data points are combined into a single value. */
  All = "ALL",
  /** Data points are combined into chunks by day. */
  Daily = "DAILY",
  /** Data points are combined into chunks by month. */
  Monthly = "MONTHLY",
}

/** Filter parameters for projects to be aggregated for DORA metrics. */
export type DoraProjectFilterInput = {
  /** Filter projects by topic. */
  topic?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** GitLab Duo availability states for an admin-locked namespace override. */
export enum DuoAvailability {
  /** Duo is on and group Owners cannot turn it off. */
  AlwaysOn = "ALWAYS_ON",
  /** Duo is off by default but group Owners can turn it on. */
  DefaultOff = "DEFAULT_OFF",
  /** Duo is on by default but group Owners can turn it off. */
  DefaultOn = "DEFAULT_ON",
  /** Duo is off and group Owners cannot turn it on. */
  NeverOn = "NEVER_ON",
}

/** Input for Duo context exclusion settings */
export type DuoContextExclusionSettingsInput = {
  /** List of rules for excluding files from Duo context. */
  exclusionRules: Array<Scalars["String"]["input"]>;
};

/** List of GitLab Duo licensed features. */
export enum DuoLicensedFeature {
  /** Agentic Chat feature. */
  AgenticChat = "AGENTIC_CHAT",
  /** AI Catalog feature. */
  AiCatalog = "AI_CATALOG",
  /** AI features. */
  AiFeatures = "AI_FEATURES",
}

/** Autogenerated input type of DuoSettingsUpdate */
export type DuoSettingsUpdateInput = {
  /** Timeout for the AI Gateway request. */
  aiGatewayTimeoutSeconds?: InputMaybe<Scalars["Int"]["input"]>;
  /** URL for the local AI Gateway server. */
  aiGatewayUrl?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Whether to allow all Unix sockets for network access. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  allowAllUnixSockets?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Whether to allow projects to extend the network access domain allowlist. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  allowProjectExtension?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** URL for the local Duo Agent Platform service. */
  duoAgentPlatformServiceUrl?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Indicates whether GitLab Duo CLI access is enabled. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  duoCliEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether GitLab Duo Core features are enabled. */
  duoCoreFeaturesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Whether to include recommended domains in the network access allowlist. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  includeRecommendedAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Minimum access level for enable on Duo Agent Platform. Ignored if dap_instance_customizable_permissions feature flag is disabled. Introduced in GitLab 18.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.7.
   */
  minimumAccessLevelEnableOnProjects?: InputMaybe<AccessLevelEnum>;
  /**
   * Minimum access level for execute on Duo Agent Platform. Ignored if dap_instance_customizable_permissions feature flag is disabled. Introduced in GitLab 18.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.7.
   */
  minimumAccessLevelExecute?: InputMaybe<AccessLevelEnum>;
  /**
   * Minimum access level to execute Duo Agent Platform features in CI/CD. Ignored if dap_instance_customizable_permissions feature flag is disabled. Introduced in GitLab 18.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.7.
   */
  minimumAccessLevelExecuteAsync?: InputMaybe<AccessLevelEnum>;
  /**
   * Minimum access level for manage on Duo Agent Platform. Ignored if dap_instance_customizable_permissions feature flag is disabled. Introduced in GitLab 18.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.7.
   */
  minimumAccessLevelManage?: InputMaybe<AccessLevelEnum>;
  /** Whether to use secure transport (TLS) for the local Duo Agent Platform service. */
  selfHostedDuoAgentPlatformServiceSecure?: InputMaybe<
    Scalars["Boolean"]["input"]
  >;
};

/** Autogenerated input type of DuoUserFeedback */
export type DuoUserFeedbackInput = {
  /** ID of the AI Message. */
  aiMessageId: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Tracking event data. */
  trackingEvent?: InputMaybe<TrackingEventInput>;
};

/** Negated filter arguments for Duo Agent Platform session artifacts. */
export type DuoWorkflowSessionArtifactNegatedFilterInput = {
  /** Exclude session artifacts belonging to the project full path. */
  projectPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Exclude session artifacts with the workflow definition. */
  workflowDefinition?: InputMaybe<Scalars["String"]["input"]>;
};

/** The status of the workflow. */
export enum DuoWorkflowStatus {
  /** The workflow is created. */
  Created = "CREATED",
  /** The workflow is failed. */
  Failed = "FAILED",
  /** The workflow is finished. */
  Finished = "FINISHED",
  /** The workflow is input_required. */
  InputRequired = "INPUT_REQUIRED",
  /** The workflow is paused. */
  Paused = "PAUSED",
  /** The workflow is plan_approval_required. */
  PlanApprovalRequired = "PLAN_APPROVAL_REQUIRED",
  /** The workflow is running. */
  Running = "RUNNING",
  /** The workflow is stopped. */
  Stopped = "STOPPED",
  /** The workflow is tool_call_approval_required. */
  ToolCallApprovalRequired = "TOOL_CALL_APPROVAL_REQUIRED",
}

/** The status group of the flow session. */
export enum DuoWorkflowStatusGroup {
  /** Flow sessions with a status group of active. */
  Active = "ACTIVE",
  /** Flow sessions with a status group of awaiting_input. */
  AwaitingInput = "AWAITING_INPUT",
  /** Flow sessions with a status group of canceled. */
  Canceled = "CANCELED",
  /** Flow sessions with a status group of completed. */
  Completed = "COMPLETED",
  /** Flow sessions with a status group of failed. */
  Failed = "FAILED",
  /** Flow sessions with a status group of paused. */
  Paused = "PAUSED",
}

/** Type of link between a GitLab Duo Agent Platform session and a work item. */
export enum DuoWorkflowWorkItemLinkType {
  /** Link of type `created` between a session and a work item. */
  Created = "CREATED",
  /** Link of type `source` between a session and a work item. */
  Source = "SOURCE",
}

/** Values for sorting Duo Workflows. */
export enum DuoWorkflowsWorkflowSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** By status ascending order. */
  StatusAsc = "STATUS_ASC",
  /** By status descending order. */
  StatusDesc = "STATUS_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Autogenerated input type of EchoCreate */
export type EchoCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Errors to return to the user. */
  errors?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Messages to return to the user. */
  messages?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of EnableDevopsAdoptionNamespace */
export type EnableDevopsAdoptionNamespaceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Display namespace ID. */
  displayNamespaceId?: InputMaybe<Scalars["NamespaceID"]["input"]>;
  /** Namespace ID. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Type of a tree entry */
export enum EntryType {
  /** File tree type. */
  Blob = "blob",
  /** Commit tree type. */
  Commit = "commit",
  /** Directory tree type. */
  Tree = "tree",
}

/** Autogenerated input type of EnvironmentCreate */
export type EnvironmentCreateInput = {
  /** Auto stop setting of the environment. */
  autoStopSetting?: InputMaybe<AutoStopSetting>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Cluster agent of the environment. */
  clusterAgentId?: InputMaybe<Scalars["ClustersAgentID"]["input"]>;
  /** Description of the environment. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** External URL of the environment. */
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Flux resource path of the environment. */
  fluxResourcePath?: InputMaybe<Scalars["String"]["input"]>;
  /** Kubernetes namespace of the environment. */
  kubernetesNamespace?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the environment. */
  name: Scalars["String"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** Tier of the environment. */
  tier?: InputMaybe<DeploymentTier>;
};

/** Autogenerated input type of EnvironmentDelete */
export type EnvironmentDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the environment to Delete. */
  id: Scalars["EnvironmentID"]["input"];
};

/** Autogenerated input type of EnvironmentStop */
export type EnvironmentStopInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Force environment to stop without executing on_stop actions. */
  force?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the environment to stop. */
  id: Scalars["EnvironmentID"]["input"];
};

/** Autogenerated input type of EnvironmentUpdate */
export type EnvironmentUpdateInput = {
  /** Auto stop setting of the environment. */
  autoStopSetting?: InputMaybe<AutoStopSetting>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Cluster agent of the environment. */
  clusterAgentId?: InputMaybe<Scalars["ClustersAgentID"]["input"]>;
  /** Description of the environment. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** External URL of the environment. */
  externalUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Flux resource path of the environment. */
  fluxResourcePath?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the environment to update. */
  id: Scalars["EnvironmentID"]["input"];
  /** Kubernetes namespace of the environment. */
  kubernetesNamespace?: InputMaybe<Scalars["String"]["input"]>;
  /** Tier of the environment. */
  tier?: InputMaybe<DeploymentTier>;
};

/** Autogenerated input type of EnvironmentsCanaryIngressUpdate */
export type EnvironmentsCanaryIngressUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the environment to update. */
  id: Scalars["EnvironmentID"]["input"];
  /** Weight of the Canary Ingress. */
  weight: Scalars["Int"]["input"];
};

/** Autogenerated input type of EpicAddIssue */
export type EpicAddIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group the epic to mutate belongs to. */
  groupPath: Scalars["ID"]["input"];
  /** IID of the epic to mutate. */
  iid: Scalars["ID"]["input"];
  /** IID of the issue to be added. */
  issueIid: Scalars["String"]["input"];
  /** Full path of the project the issue belongs to. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of EpicBoardCreate */
export type EpicBoardCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether or not display epic colors. */
  displayColors?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Whether or not backlog list is hidden. */
  hideBacklogList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether or not closed list is hidden. */
  hideClosedList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** IDs of labels to be added to the board. */
  labelIds?: InputMaybe<Array<Scalars["LabelID"]["input"]>>;
  /** Labels of the issue. */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Board name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of EpicBoardListCreate */
export type EpicBoardListCreateInput = {
  /** Create the backlog list. */
  backlog?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the issue board to mutate. */
  boardId: Scalars["BoardsEpicBoardID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of an existing label. */
  labelId?: InputMaybe<Scalars["LabelID"]["input"]>;
};

/** Autogenerated input type of EpicBoardListDestroy */
export type EpicBoardListDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the epic board list to destroy. */
  listId: Scalars["BoardsEpicListID"]["input"];
};

/** Autogenerated input type of EpicBoardUpdate */
export type EpicBoardUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether or not display epic colors. */
  displayColors?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether or not backlog list is hidden. */
  hideBacklogList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether or not closed list is hidden. */
  hideClosedList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Epic board global ID. */
  id: Scalars["BoardsEpicBoardID"]["input"];
  /** IDs of labels to be added to the board. */
  labelIds?: InputMaybe<Array<Scalars["LabelID"]["input"]>>;
  /** Labels of the issue. */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Board name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type EpicFilters = {
  /** Filter by author username. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by confidentiality. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Filter by custom fields. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filter by label name. */
  labelName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter by reaction emoji applied by the current user. Wildcard values "NONE" and "ANY" are supported. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Negated epic arguments. */
  not?: InputMaybe<NegatedEpicBoardIssueInput>;
  /** List of arguments with inclusive OR. */
  or?: InputMaybe<UnionedEpicFilterInput>;
  /** Search query for epic title or description. */
  search?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of EpicMoveList */
export type EpicMoveListInput = {
  /** Global ID of the board that the epic is in. */
  boardId: Scalars["BoardsEpicBoardID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the epic to mutate. */
  epicId: Scalars["EpicID"]["input"];
  /** ID of the board list that the epic will be moved from. Required if moving between lists. */
  fromListId?: InputMaybe<Scalars["BoardsEpicListID"]["input"]>;
  /** ID of epic that should be placed after the current epic. */
  moveAfterId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** ID of epic that should be placed before the current epic. */
  moveBeforeId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** Position of epics within the board list. Positions start at 0. Use -1 to move to the end of the list. */
  positionInList?: InputMaybe<Scalars["Int"]["input"]>;
  /** ID of the list the epic will be in after mutation. */
  toListId: Scalars["BoardsEpicListID"]["input"];
};

/** Autogenerated input type of EpicSetSubscription */
export type EpicSetSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group the epic to mutate belongs to. */
  groupPath: Scalars["ID"]["input"];
  /** IID of the epic to mutate. */
  iid: Scalars["ID"]["input"];
  /** Desired state of the subscription. */
  subscribedState: Scalars["Boolean"]["input"];
};

/** Roadmap sort values */
export enum EpicSort {
  /** Sort by created_at by ascending order. */
  CreatedAtAsc = "CREATED_AT_ASC",
  /** Sort by created_at by descending order. */
  CreatedAtDesc = "CREATED_AT_DESC",
  /** Sort by end date in ascending order. */
  EndDateAsc = "END_DATE_ASC",
  /** Sort by end date in descending order. */
  EndDateDesc = "END_DATE_DESC",
  /** Sort by start date in ascending order. */
  StartDateAsc = "START_DATE_ASC",
  /** Sort by start date in descending order. */
  StartDateDesc = "START_DATE_DESC",
  /** Sort by title in ascending order. */
  TitleAsc = "TITLE_ASC",
  /** Sort by title in descending order. */
  TitleDesc = "TITLE_DESC",
  /** Sort by updated_at by ascending order. */
  UpdatedAtAsc = "UPDATED_AT_ASC",
  /** Sort by updated_at by descending order. */
  UpdatedAtDesc = "UPDATED_AT_DESC",
  /**
   * End date at ascending order. Deprecated in GitLab 13.11: Use END_DATE_ASC.
   * @deprecated Use END_DATE_ASC. Deprecated in GitLab 13.11.
   */
  EndDateAsc = "end_date_asc",
  /**
   * End date at descending order. Deprecated in GitLab 13.11: Use END_DATE_DESC.
   * @deprecated Use END_DATE_DESC. Deprecated in GitLab 13.11.
   */
  EndDateDesc = "end_date_desc",
  /**
   * Start date at ascending order. Deprecated in GitLab 13.11: Use START_DATE_ASC.
   * @deprecated Use START_DATE_ASC. Deprecated in GitLab 13.11.
   */
  StartDateAsc = "start_date_asc",
  /**
   * Start date at descending order. Deprecated in GitLab 13.11: Use START_DATE_DESC.
   * @deprecated Use START_DATE_DESC. Deprecated in GitLab 13.11.
   */
  StartDateDesc = "start_date_desc",
}

/** State of an epic */
export enum EpicState {
  /** All epics. */
  All = "all",
  /** Closed epics. */
  Closed = "closed",
  /** Open epics. */
  Opened = "opened",
}

/** State event of an epic */
export enum EpicStateEvent {
  /** Close the epic. */
  Close = "CLOSE",
  /** Reopen the epic. */
  Reopen = "REOPEN",
}

/** A node of an epic tree. */
export type EpicTreeNodeFieldsInputType = {
  /** ID of the epic issue or issue the epic or issue is switched with. */
  adjacentReferenceId?: InputMaybe<Scalars["EpicTreeSortingID"]["input"]>;
  /** ID of the epic issue or epic that is being moved. */
  id: Scalars["EpicTreeSortingID"]["input"];
  /** ID of the new parent epic. */
  newParentId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** Type of switch. Valid values are `after` or `before`. */
  relativePosition?: InputMaybe<MoveType>;
};

/** Autogenerated input type of EpicTreeReorder */
export type EpicTreeReorderInput = {
  /** ID of the base epic of the tree. */
  baseEpicId: Scalars["EpicID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Parameters for updating the tree positions. */
  moved: EpicTreeNodeFieldsInputType;
};

/** Epic ID wildcard values */
export enum EpicWildcardId {
  /** Any epic is assigned. */
  Any = "ANY",
  /** No epic is assigned. */
  None = "NONE",
}

/** Status of the error tracking service */
export enum ErrorTrackingStatus {
  /** Error tracking service respond with an error. */
  Error = "ERROR",
  /** Sentry issue not found. */
  NotFound = "NOT_FOUND",
  /** Error tracking service is not ready. */
  Retry = "RETRY",
  /** Successfully fetch the stack trace. */
  Success = "SUCCESS",
}

/** Autogenerated input type of EscalationPolicyCreate */
export type EscalationPolicyCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the escalation policy. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the escalation policy. */
  name: Scalars["String"]["input"];
  /** Project to create the escalation policy for. */
  projectPath: Scalars["ID"]["input"];
  /** Steps of the escalation policy. */
  rules: Array<EscalationRuleInput>;
};

/** Autogenerated input type of EscalationPolicyDestroy */
export type EscalationPolicyDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Escalation policy internal ID to remove. */
  id: Scalars["IncidentManagementEscalationPolicyID"]["input"];
};

/** Autogenerated input type of EscalationPolicyUpdate */
export type EscalationPolicyUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the escalation policy. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the on-call schedule to create the on-call rotation in. */
  id: Scalars["IncidentManagementEscalationPolicyID"]["input"];
  /** Name of the escalation policy. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Steps of the escalation policy. */
  rules?: InputMaybe<Array<EscalationRuleInput>>;
};

/** Represents an escalation rule */
export type EscalationRuleInput = {
  /** Time in seconds before the rule is activated. */
  elapsedTimeSeconds: Scalars["Int"]["input"];
  /** On-call schedule to notify. */
  oncallScheduleIid?: InputMaybe<Scalars["ID"]["input"]>;
  /** Status required to prevent the rule from activating. */
  status: EscalationRuleStatus;
  /** Username of the user to notify. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Escalation rule statuses */
export enum EscalationRuleStatus {
  /** . */
  Acknowledged = "ACKNOWLEDGED",
  /** . */
  Resolved = "RESOLVED",
}

/** Event action */
export enum EventAction {
  /** Approved action */
  Approved = "APPROVED",
  /** Closed action */
  Closed = "CLOSED",
  /** Commented action */
  Commented = "COMMENTED",
  /** Created action */
  Created = "CREATED",
  /** Destroyed action */
  Destroyed = "DESTROYED",
  /** Expired action */
  Expired = "EXPIRED",
  /** Joined action */
  Joined = "JOINED",
  /** Left action */
  Left = "LEFT",
  /** Merged action */
  Merged = "MERGED",
  /** Pushed action */
  Pushed = "PUSHED",
  /** Reopened action */
  Reopened = "REOPENED",
  /** Transferred action */
  Transferred = "TRANSFERRED",
  /** Updated action */
  Updated = "UPDATED",
}

/** Enum for the security scanners used with exclusions */
export enum ExclusionScannerEnum {
  /** Secret push protection. */
  SecretPushProtection = "SECRET_PUSH_PROTECTION",
}

/** Enum for types of exclusion for a security scanner */
export enum ExclusionTypeEnum {
  /** File or directory location. */
  Path = "PATH",
  /** Raw value to ignore. */
  RawValue = "RAW_VALUE",
  /** Regex pattern matching rules. */
  RegexPattern = "REGEX_PATTERN",
  /** Scanner rule identifier. */
  Rule = "RULE",
}

/** Autogenerated input type of ExportRequirements */
export type ExportRequirementsInput = {
  /** Filter requirements by author username. */
  authorUsername?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full project path the requirements are associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Search query for requirement title. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** List of selected requirements fields to be exported. */
  selectedFields?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** List requirements by sort order. */
  sort?: InputMaybe<Sort>;
  /** Filter requirements by state. */
  state?: InputMaybe<RequirementState>;
};

/** Values for status of the Web IDE Extension Marketplace opt-in for the user */
export enum ExtensionsMarketplaceOptInStatus {
  /** Web IDE Extension Marketplace opt-in status: DISABLED. */
  Disabled = "DISABLED",
  /** Web IDE Extension Marketplace opt-in status: ENABLED. */
  Enabled = "ENABLED",
  /** Web IDE Extension Marketplace opt-in status: UNSET. */
  Unset = "UNSET",
}

/** Autogenerated input type of ExternalAuditEventDestinationCreate */
export type ExternalAuditEventDestinationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination URL. */
  destinationUrl: Scalars["String"]["input"];
  /** Group path. */
  groupPath: Scalars["ID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Verification token. */
  verificationToken?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ExternalAuditEventDestinationDestroy */
export type ExternalAuditEventDestinationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of external audit event destination to destroy. */
  id: Scalars["AuditEventsExternalAuditEventDestinationID"]["input"];
};

/** Autogenerated input type of ExternalAuditEventDestinationUpdate */
export type ExternalAuditEventDestinationUpdateInput = {
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination URL to change. */
  destinationUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of external audit event destination to update. */
  id: Scalars["AuditEventsExternalAuditEventDestinationID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type FindingDueDatesSetInput = {
  /** Due date for the finding. Pass null to remove. */
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  /** UUID of the vulnerability finding. */
  findingUuid: Scalars["String"]["input"];
};

/** Report comparison status */
export enum FindingReportsComparerStatus {
  /** An error happened while generating the report. */
  Error = "ERROR",
  /** Report was generated. */
  Parsed = "PARSED",
  /** Report is being generated. */
  Parsing = "PARSING",
}

/** Values for Duo Agent Platform flow type sorting */
export enum FlowTypeSort {
  /** Sort by median execution time in ascending order. */
  MedianTimeAsc = "MEDIAN_TIME_ASC",
  /** Sort by median execution time in descending order. */
  MedianTimeDesc = "MEDIAN_TIME_DESC",
  /** Sort by sessions count in ascending order. */
  SessionsCountAsc = "SESSIONS_COUNT_ASC",
  /** Sort by sessions count in descending order. */
  SessionsCountDesc = "SESSIONS_COUNT_DESC",
  /** Sort by unique users count in ascending order. */
  UsersCountAsc = "USERS_COUNT_ASC",
  /** Sort by unique users count in descending order. */
  UsersCountDesc = "USERS_COUNT_DESC",
}

/** Action to trigger on multiple Geo registries */
export enum GeoRegistriesBulkAction {
  /** Resync multiple registries. */
  ResyncAll = "RESYNC_ALL",
  /** Reverify multiple registries. */
  ReverifyAll = "REVERIFY_ALL",
}

/** Autogenerated input type of GeoRegistriesBulkUpdate */
export type GeoRegistriesBulkUpdateInput = {
  /** Action to be executed on Geo registries. */
  action: GeoRegistriesBulkAction;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Execute the action on registries selected by their ID. */
  ids?: InputMaybe<Array<Scalars["GeoBaseRegistryID"]["input"]>>;
  /** Class of the Geo registries to be updated. */
  registryClass: GeoRegistryClass;
  /** Execute the action on registries selected by their replication state. */
  replicationState?: InputMaybe<ReplicationStateEnum>;
  /** Execute the action on registries selected by their verification state. */
  verificationState?: InputMaybe<VerificationStateEnum>;
};

/** Autogenerated input type of GeoRegistriesUpdate */
export type GeoRegistriesUpdateInput = {
  /** Action to be executed on a Geo registry. */
  action: GeoRegistryAction;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Geo registry entry to be updated. */
  registryId: Scalars["GeoBaseRegistryID"]["input"];
};

/** Action to trigger on an individual Geo registry */
export enum GeoRegistryAction {
  /** Resync a registry. */
  Resync = "RESYNC",
  /** Reverify a registry. */
  Reverify = "REVERIFY",
}

/** Geo registry class */
export enum GeoRegistryClass {
  /** Geo::AbuseReportUploadRegistry registry class */
  AbuseReportUploadRegistry = "ABUSE_REPORT_UPLOAD_REGISTRY",
  /** Geo::AchievementUploadRegistry registry class */
  AchievementUploadRegistry = "ACHIEVEMENT_UPLOAD_REGISTRY",
  /** Geo::AiVectorizableFileUploadRegistry registry class */
  AiVectorizableFileUploadRegistry = "AI_VECTORIZABLE_FILE_UPLOAD_REGISTRY",
  /** Geo::AlertManagementMetricImageUploadRegistry registry class */
  AlertManagementMetricImageUploadRegistry = "ALERT_MANAGEMENT_METRIC_IMAGE_UPLOAD_REGISTRY",
  /** Geo::AppearanceUploadRegistry registry class */
  AppearanceUploadRegistry = "APPEARANCE_UPLOAD_REGISTRY",
  /** Geo::BulkImportExportUploadUploadRegistry registry class */
  BulkImportExportUploadUploadRegistry = "BULK_IMPORT_EXPORT_UPLOAD_UPLOAD_REGISTRY",
  /** Geo::CiSecureFileRegistry registry class */
  CiSecureFileRegistry = "CI_SECURE_FILE_REGISTRY",
  /** Geo::ContainerRepositoryRegistry registry class */
  ContainerRepositoryRegistry = "CONTAINER_REPOSITORY_REGISTRY",
  /** Geo::DependencyListExportPartUploadRegistry registry class */
  DependencyListExportPartUploadRegistry = "DEPENDENCY_LIST_EXPORT_PART_UPLOAD_REGISTRY",
  /** Geo::DependencyListExportUploadRegistry registry class */
  DependencyListExportUploadRegistry = "DEPENDENCY_LIST_EXPORT_UPLOAD_REGISTRY",
  /** Geo::DependencyProxyBlobRegistry registry class */
  DependencyProxyBlobRegistry = "DEPENDENCY_PROXY_BLOB_REGISTRY",
  /** Geo::DependencyProxyManifestRegistry registry class */
  DependencyProxyManifestRegistry = "DEPENDENCY_PROXY_MANIFEST_REGISTRY",
  /** Geo::DesignManagementActionUploadRegistry registry class */
  DesignManagementActionUploadRegistry = "DESIGN_MANAGEMENT_ACTION_UPLOAD_REGISTRY",
  /** Geo::DesignManagementRepositoryRegistry registry class */
  DesignManagementRepositoryRegistry = "DESIGN_MANAGEMENT_REPOSITORY_REGISTRY",
  /** Geo::GroupUploadRegistry registry class */
  GroupUploadRegistry = "GROUP_UPLOAD_REGISTRY",
  /** Geo::GroupWikiRepositoryRegistry registry class */
  GroupWikiRepositoryRegistry = "GROUP_WIKI_REPOSITORY_REGISTRY",
  /** Geo::ImportExportUploadUploadRegistry registry class */
  ImportExportUploadUploadRegistry = "IMPORT_EXPORT_UPLOAD_UPLOAD_REGISTRY",
  /** Geo::IssuableMetricImageUploadRegistry registry class */
  IssuableMetricImageUploadRegistry = "ISSUABLE_METRIC_IMAGE_UPLOAD_REGISTRY",
  /** Geo::JobArtifactRegistry registry class */
  JobArtifactRegistry = "JOB_ARTIFACT_REGISTRY",
  /** Geo::LfsObjectRegistry registry class */
  LfsObjectRegistry = "LFS_OBJECT_REGISTRY",
  /** Geo::MergeRequestDiffRegistry registry class */
  MergeRequestDiffRegistry = "MERGE_REQUEST_DIFF_REGISTRY",
  /** Geo::OrganizationDetailUploadRegistry registry class */
  OrganizationDetailUploadRegistry = "ORGANIZATION_DETAIL_UPLOAD_REGISTRY",
  /** Geo::PackagesDebianProjectComponentFileRegistry registry class */
  PackagesDebianProjectComponentFileRegistry = "PACKAGES_DEBIAN_PROJECT_COMPONENT_FILE_REGISTRY",
  /** Geo::PackagesHelmMetadataCacheRegistry registry class */
  PackagesHelmMetadataCacheRegistry = "PACKAGES_HELM_METADATA_CACHE_REGISTRY",
  /** Geo::PackagesNugetSymbolRegistry registry class */
  PackagesNugetSymbolRegistry = "PACKAGES_NUGET_SYMBOL_REGISTRY",
  /** Geo::PackageFileRegistry registry class */
  PackageFileRegistry = "PACKAGE_FILE_REGISTRY",
  /** Geo::PagesDeploymentRegistry registry class */
  PagesDeploymentRegistry = "PAGES_DEPLOYMENT_REGISTRY",
  /** Geo::PersonalSnippetUploadRegistry registry class */
  PersonalSnippetUploadRegistry = "PERSONAL_SNIPPET_UPLOAD_REGISTRY",
  /** Geo::PipelineArtifactRegistry registry class */
  PipelineArtifactRegistry = "PIPELINE_ARTIFACT_REGISTRY",
  /** Geo::ProjectImportExportRelationExportUploadUploadRegistry registry class */
  ProjectImportExportRelationExportUploadUploadRegistry = "PROJECT_IMPORT_EXPORT_RELATION_EXPORT_UPLOAD_UPLOAD_REGISTRY",
  /** Geo::ProjectRepositoryRegistry registry class */
  ProjectRepositoryRegistry = "PROJECT_REPOSITORY_REGISTRY",
  /** Geo::ProjectTopicUploadRegistry registry class */
  ProjectTopicUploadRegistry = "PROJECT_TOPIC_UPLOAD_REGISTRY",
  /** Geo::ProjectUploadRegistry registry class */
  ProjectUploadRegistry = "PROJECT_UPLOAD_REGISTRY",
  /** Geo::ProjectWikiRepositoryRegistry registry class */
  ProjectWikiRepositoryRegistry = "PROJECT_WIKI_REPOSITORY_REGISTRY",
  /** Geo::SnippetRepositoryRegistry registry class */
  SnippetRepositoryRegistry = "SNIPPET_REPOSITORY_REGISTRY",
  /** Geo::SupplyChainAttestationRegistry registry class */
  SupplyChainAttestationRegistry = "SUPPLY_CHAIN_ATTESTATION_REGISTRY",
  /** Geo::TerraformStateVersionRegistry registry class */
  TerraformStateVersionRegistry = "TERRAFORM_STATE_VERSION_REGISTRY",
  /** Geo::UploadRegistry registry class */
  UploadRegistry = "UPLOAD_REGISTRY",
  /** Geo::UserPermissionExportUploadUploadRegistry registry class */
  UserPermissionExportUploadUploadRegistry = "USER_PERMISSION_EXPORT_UPLOAD_UPLOAD_REGISTRY",
  /** Geo::UserUploadRegistry registry class */
  UserUploadRegistry = "USER_UPLOAD_REGISTRY",
  /** Geo::VulnerabilityArchiveExportUploadRegistry registry class */
  VulnerabilityArchiveExportUploadRegistry = "VULNERABILITY_ARCHIVE_EXPORT_UPLOAD_REGISTRY",
  /** Geo::VulnerabilityExportPartUploadRegistry registry class */
  VulnerabilityExportPartUploadRegistry = "VULNERABILITY_EXPORT_PART_UPLOAD_REGISTRY",
  /** Geo::VulnerabilityExportUploadRegistry registry class */
  VulnerabilityExportUploadRegistry = "VULNERABILITY_EXPORT_UPLOAD_REGISTRY",
  /** Geo::VulnerabilityRemediationUploadRegistry registry class */
  VulnerabilityRemediationUploadRegistry = "VULNERABILITY_REMEDIATION_UPLOAD_REGISTRY",
}

/** Values for sorting Geo registries */
export enum GeoRegistrySort {
  /** ID by ascending order. */
  IdAsc = "ID_ASC",
  /** ID by descending order. */
  IdDesc = "ID_DESC",
  /** Latest sync date by ascending order. */
  LastSyncedAtAsc = "LAST_SYNCED_AT_ASC",
  /** Latest sync date by descending order. */
  LastSyncedAtDesc = "LAST_SYNCED_AT_DESC",
  /** Latest verification date by ascending order. */
  VerifiedAtAsc = "VERIFIED_AT_ASC",
  /** Latest verification date by descending order. */
  VerifiedAtDesc = "VERIFIED_AT_DESC",
}

/** Autogenerated input type of GitlabSubscriptionActivate */
export type GitlabSubscriptionActivateInput = {
  /** Activation code received after purchasing a GitLab subscription. */
  activationCode: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Type of budget cap that caused a user to be blocked */
export enum GitlabSubscriptionUsageBlockedCapType {
  /** Blocked by the flat per-user cap. */
  FlatUserCap = "FLAT_USER_CAP",
  /** Blocked by a per-user override cap. */
  UserOverrideCap = "USER_OVERRIDE_CAP",
}

/** Values for sorting users in subscription usage */
export enum GitlabSubscriptionUsageUserSort {
  /** Name by ascending order. */
  NameAsc = "NAME_ASC",
  /** Name by descending order. */
  NameDesc = "NAME_DESC",
  /** Total credits used by ascending order. */
  TotalCreditsUsedAsc = "TOTAL_CREDITS_USED_ASC",
  /** Total credits used by descending order. */
  TotalCreditsUsedDesc = "TOTAL_CREDITS_USED_DESC",
}

/** Types of add-ons */
export enum GitlabSubscriptionsAddOnType {
  /** GitLab Duo Pro add-on. */
  CodeSuggestions = "CODE_SUGGESTIONS",
  /** GitLab Duo with Amazon Q add-on. */
  DuoAmazonQ = "DUO_AMAZON_Q",
  /**
   * GitLab Duo Core add-on. Introduced in GitLab 18.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.0.
   */
  DuoCore = "DUO_CORE",
  /** GitLab Duo Enterprise add-on. */
  DuoEnterprise = "DUO_ENTERPRISE",
}

/** Role of User */
export enum GitlabSubscriptionsUserRole {
  /** Developer. */
  Developer = "DEVELOPER",
  /** Guest. */
  Guest = "GUEST",
  /** Maintainer. */
  Maintainer = "MAINTAINER",
  /** Owner. */
  Owner = "OWNER",
  /** Planner. */
  Planner = "PLANNER",
  /** Reporter. */
  Reporter = "REPORTER",
  /** Security manager access. */
  SecurityManager = "SECURITY_MANAGER",
}

/** Values for sorting users */
export enum GitlabSubscriptionsUserSort {
  /** Id by ascending order. */
  IdAsc = "ID_ASC",
  /** Id by descending order. */
  IdDesc = "ID_DESC",
  /** Last activity by ascending order. */
  LastActivityOnAsc = "LAST_ACTIVITY_ON_ASC",
  /** Last activity by descending order. */
  LastActivityOnDesc = "LAST_ACTIVITY_ON_DESC",
  /** Name by ascending order. */
  NameAsc = "NAME_ASC",
  /** Name by descending order. */
  NameDesc = "NAME_DESC",
}

/** Values for sorting artifacts */
export enum GoogleCloudArtifactRegistryArtifactsSort {
  /** Ordered by `build_time` in ascending order. */
  BuildTimeAsc = "BUILD_TIME_ASC",
  /** Ordered by `build_time` in descending order. */
  BuildTimeDesc = "BUILD_TIME_DESC",
  /** Ordered by `image_size_bytes` in ascending order. */
  ImageSizeBytesAsc = "IMAGE_SIZE_BYTES_ASC",
  /** Ordered by `image_size_bytes` in descending order. */
  ImageSizeBytesDesc = "IMAGE_SIZE_BYTES_DESC",
  /** Ordered by `media_type` in ascending order. */
  MediaTypeAsc = "MEDIA_TYPE_ASC",
  /** Ordered by `media_type` in descending order. */
  MediaTypeDesc = "MEDIA_TYPE_DESC",
  /** Ordered by `name` in ascending order. */
  NameAsc = "NAME_ASC",
  /** Ordered by `name` in descending order. */
  NameDesc = "NAME_DESC",
  /** Ordered by `update_time` in ascending order. */
  UpdateTimeAsc = "UPDATE_TIME_ASC",
  /** Ordered by `update_time` in descending order. */
  UpdateTimeDesc = "UPDATE_TIME_DESC",
  /** Ordered by `upload_time` in ascending order. */
  UploadTimeAsc = "UPLOAD_TIME_ASC",
  /** Ordered by `upload_time` in descending order. */
  UploadTimeDesc = "UPLOAD_TIME_DESC",
}

/** Autogenerated input type of GoogleCloudLoggingConfigurationCreate */
export type GoogleCloudLoggingConfigurationCreateInput = {
  /** Email address associated with the service account that will be used to authenticate and interact with the Google Cloud Logging service. This is part of the IAM credentials. */
  clientEmail: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Unique identifier of the Google Cloud project to which the logging configuration belongs. */
  googleProjectIdName: Scalars["String"]["input"];
  /** Group path. */
  groupPath: Scalars["ID"]["input"];
  /** Unique identifier used to distinguish and manage different logs within the same Google Cloud project.(defaults to `audit_events`). */
  logIdName?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Private Key associated with the service account. This key is used to authenticate the service account and authorize it to interact with the Google Cloud Logging service. */
  privateKey: Scalars["String"]["input"];
};

/** Autogenerated input type of GoogleCloudLoggingConfigurationDestroy */
export type GoogleCloudLoggingConfigurationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Google Cloud logging configuration to destroy. */
  id: Scalars["AuditEventsGoogleCloudLoggingConfigurationID"]["input"];
};

/** Autogenerated input type of GoogleCloudLoggingConfigurationUpdate */
export type GoogleCloudLoggingConfigurationUpdateInput = {
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Email address associated with the service account that will be used to authenticate and interact with the Google Cloud Logging service. This is part of the IAM credentials. */
  clientEmail?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Unique identifier of the Google Cloud project to which the logging configuration belongs. */
  googleProjectIdName?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the google Cloud configuration to update. */
  id: Scalars["AuditEventsGoogleCloudLoggingConfigurationID"]["input"];
  /** Unique identifier used to distinguish and manage different logs within the same Google Cloud project. */
  logIdName?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Private Key associated with the service account. This key is used to authenticate the service account and authorize it to interact with the Google Cloud Logging service. */
  privateKey?: InputMaybe<Scalars["String"]["input"]>;
};

/** Attributes for defining Node Pool in GKE */
export type GoogleCloudNodePool = {
  /** Image to use on the pool. */
  imageType: Scalars["GoogleCloudImage"]["input"];
  /** Labels for the node pool of the runner. */
  labels?: InputMaybe<Array<GoogleCloudNodePoolLabel>>;
  /** Machine type to use. */
  machineType: Scalars["GoogleCloudMachineType"]["input"];
  /** Name of the node pool. */
  name: Scalars["String"]["input"];
  /** Node count of the pool. */
  nodeCount: Scalars["Int"]["input"];
};

/** Labels for the Node Pool of a GKE cluster. */
export type GoogleCloudNodePoolLabel = {
  /** Key of the label. */
  key: Scalars["String"]["input"];
  /** Value of the label. */
  value: Scalars["String"]["input"];
};

/** Attributes for a granular scope of an access token. */
export type GranularScopeInput = {
  /** Access to configure for the granular scope. */
  access: AccessTokenGranularScopeAccess;
  /** List of permissions for the granular scope. */
  permissions: Array<Scalars["String"]["input"]>;
  /** IDs of groups or projects to associate with each granular scope. */
  resourceIds?: InputMaybe<Array<Scalars["GlobalID"]["input"]>>;
};

/** Autogenerated input type of GroupAuditEventStreamingDestinationsCreate */
export type GroupAuditEventStreamingDestinationsCreateInput = {
  /** Destination category. */
  category: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination config. */
  config: Scalars["JSON"]["input"];
  /** Group path. */
  groupPath: Scalars["ID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret token. */
  secretToken?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of GroupAuditEventStreamingDestinationsDelete */
export type GroupAuditEventStreamingDestinationsDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the audit events external streaming destination to delete. */
  id: Scalars["AuditEventsGroupExternalStreamingDestinationID"]["input"];
};

/** Autogenerated input type of GroupAuditEventStreamingDestinationsUpdate */
export type GroupAuditEventStreamingDestinationsUpdateInput = {
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Destination category. */
  category?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination config. */
  config?: InputMaybe<Scalars["JSON"]["input"]>;
  /** ID of external audit event destination to update. */
  id: Scalars["AuditEventsGroupExternalStreamingDestinationID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret token. */
  secretToken?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of GroupMemberBulkUpdate */
export type GroupMemberBulkUpdateInput = {
  /** Access level to update the members to. */
  accessLevel: MemberAccessLevel;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Date and time the membership expires. */
  expiresAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Global ID of the group. */
  groupId: Scalars["GroupID"]["input"];
  /** Global IDs of the members. */
  userIds: Array<Scalars["UserID"]["input"]>;
};

/** Group member relation */
export enum GroupMemberRelation {
  /** Members in the group's subgroups. */
  Descendants = "DESCENDANTS",
  /** Members in the group itself. */
  Direct = "DIRECT",
  /** Members in the group's ancestor groups. */
  Inherited = "INHERITED",
  /** Invited group's members. */
  SharedFromGroups = "SHARED_FROM_GROUPS",
}

/** Autogenerated input type of GroupMembersExport */
export type GroupMembersExportInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the group. */
  groupId: Scalars["GroupID"]["input"];
};

/** User permission on groups */
export enum GroupPermission {
  /** Groups where the user can create projects. */
  CreateProjects = "CREATE_PROJECTS",
  /** Groups where the user can import projects to. */
  ImportProjects = "IMPORT_PROJECTS",
  /** Groups where the user can transfer projects to. */
  TransferProjects = "TRANSFER_PROJECTS",
}

export type GroupProjectRequirementComplianceStatusInput = {
  /** Filter compliance requirement statuses by compliance framework. */
  frameworkId?: InputMaybe<Scalars["ComplianceManagementFrameworkID"]["input"]>;
  /** Filter compliance requirement statuses by project. */
  projectId?: InputMaybe<Scalars["ProjectID"]["input"]>;
  /** Filter compliance requirement statuses by compliance requirement. */
  requirementId?: InputMaybe<
    Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementID"]["input"]
  >;
};

/** Values for sorting releases belonging to a group */
export enum GroupReleaseSort {
  /** Released at by ascending order. */
  ReleasedAtAsc = "RELEASED_AT_ASC",
  /** Released at by descending order. */
  ReleasedAtDesc = "RELEASED_AT_DESC",
}

/** Autogenerated input type of GroupSavedReplyCreate */
export type GroupSavedReplyCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Content of the saved reply. */
  content: Scalars["String"]["input"];
  /** Group for the save reply. */
  groupId: Scalars["GroupID"]["input"];
  /** Name of the saved reply. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of GroupSavedReplyDestroy */
export type GroupSavedReplyDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the group-level saved reply. */
  id: Scalars["GroupsSavedReplyID"]["input"];
};

/** Autogenerated input type of GroupSavedReplyUpdate */
export type GroupSavedReplyUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Content of the saved reply. */
  content: Scalars["String"]["input"];
  /** Global ID of the group-level saved reply. */
  id: Scalars["GroupsSavedReplyID"]["input"];
  /** Name of the saved reply. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of GroupSecretCreate */
export type GroupSecretCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the group secret. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Environment that can access the secret. */
  environment: Scalars["String"]["input"];
  /** Group of the secret. */
  groupPath: Scalars["ID"]["input"];
  /** Name of the group secret. */
  name: Scalars["String"]["input"];
  /** Whether the secret is only accessible from protected branches. */
  protected: Scalars["Boolean"]["input"];
  /** Number of days between rotation reminders for the secret. */
  rotationIntervalDays?: InputMaybe<Scalars["Int"]["input"]>;
  /** Value of the group secret. */
  secret: Scalars["String"]["input"];
};

/** Autogenerated input type of GroupSecretDelete */
export type GroupSecretDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group of the secret. */
  groupPath: Scalars["ID"]["input"];
  /** Name of the group secret to delete. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of GroupSecretUpdate */
export type GroupSecretUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** New description of the group secret. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** New environment that can access the secret. */
  environment?: InputMaybe<Scalars["String"]["input"]>;
  /** Group of the secret. */
  groupPath: Scalars["ID"]["input"];
  /** This should match the current metadata version of the group secret being updated. */
  metadataCas: Scalars["Int"]["input"];
  /** Name of the group secret to update. */
  name: Scalars["String"]["input"];
  /** Whether the secret is only accessible from protected branches. */
  protected?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Number of days between rotation reminders for the secret. */
  rotationIntervalDays?: InputMaybe<Scalars["Int"]["input"]>;
  /** New value of the group secret. */
  secret?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of GroupSecretsManagerDeprovision */
export type GroupSecretsManagerDeprovisionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group of the secrets manager. */
  groupPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of GroupSecretsManagerInitialize */
export type GroupSecretsManagerInitializeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group of the secrets manager. */
  groupPath: Scalars["ID"]["input"];
};

/** Values for the group secrets manager status */
export enum GroupSecretsManagerStatus {
  /** Secrets manager has been provisioned and enabled. */
  Active = "ACTIVE",
  /** Secrets manager is being deprovisioned. */
  Deprovisioning = "DEPROVISIONING",
  /** Secrets manager is being provisioned. */
  Provisioning = "PROVISIONING",
}

/** Autogenerated input type of GroupSecretsPermissionDelete */
export type GroupSecretsPermissionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group permissions for the secret. */
  groupPath: Scalars["ID"]["input"];
  /** Whose permission to be deleted. */
  principal: PrincipalInput;
};

/** Autogenerated input type of GroupSecretsPermissionUpdate */
export type GroupSecretsPermissionUpdateInput = {
  /** Actions that can be performed on secrets. */
  actions: Array<SecretsManagementAction>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Expiration date for Secret Permission (optional). */
  expiredAt?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /** Group to which the permissions are added. */
  groupPath: Scalars["ID"]["input"];
  /** User/MemberRole/Role/Group that is provided access. */
  principal: PrincipalInput;
};

/** Values for sorting groups */
export enum GroupSort {
  /** Sort by created at, ascending order. */
  CreatedAtAsc = "CREATED_AT_ASC",
  /** Sort by created at, descending order. */
  CreatedAtDesc = "CREATED_AT_DESC",
  /** Sort by ID, ascending order. */
  IdAsc = "ID_ASC",
  /** Sort by ID, descending order. */
  IdDesc = "ID_DESC",
  /** Sort by name, ascending order. */
  NameAsc = "NAME_ASC",
  /** Sort by name, descending order. */
  NameDesc = "NAME_DESC",
  /** Sort by path, ascending order. */
  PathAsc = "PATH_ASC",
  /** Sort by path, descending order. */
  PathDesc = "PATH_DESC",
  /** Most similar to the search query. */
  Similarity = "SIMILARITY",
  /** Sort by updated at, ascending order. */
  UpdatedAtAsc = "UPDATED_AT_ASC",
  /** Sort by updated at, descending order. */
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

/** Autogenerated input type of GroupUpdate */
export type GroupUpdateInput = {
  /**
   * Indicates whether AI audit events are stored for the group. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  aiAuditEventsStorageEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Indicates whether built-in project templates are available for new projects in the group. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  builtInProjectTemplatesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Indicates whether GitLab Duo features are enabled for the group. Introduced in GitLab 16.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 16.10.
   */
  duoFeaturesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path of the group that will be updated. */
  fullPath: Scalars["ID"]["input"];
  /**
   * Indicates whether AI audit events storage is enforced for all subgroups and projects. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  lockAiAuditEventsStorageEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Indicates if the built-in project templates enabled setting is enforced for all subgroups. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  lockBuiltInProjectTemplatesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Indicates if the GitLab Duo features enabled setting is enforced for all subgroups. Introduced in GitLab 16.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 16.10.
   */
  lockDuoFeaturesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates if math rendering limits are locked for all descendant groups. */
  lockMathRenderingLimitsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Indicates if the tool approval for session setting is enforced for all subgroups. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  lockToolApprovalForSessionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates if math rendering limits are used for the group. */
  mathRenderingLimitsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Name of the group. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Path of the namespace. */
  path?: InputMaybe<Scalars["String"]["input"]>;
  /** Shared runners availability for the namespace and its descendants. */
  sharedRunnersSetting?: InputMaybe<SharedRunnersSetting>;
  /** OAuth provider required for step-up authentication. */
  stepUpAuthRequiredOauthProvider?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Indicates whether tool approval for session is enabled for the group. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  toolApprovalForSessionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Visibility of the namespace. */
  visibility?: InputMaybe<VisibilityLevelsEnum>;
  /**
   * Indicates whether web-based commit signing is enabled for the group. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  webBasedCommitSigningEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Values for grouping compute usage data. */
export enum GroupingEnum {
  /** Aggregate usage data across all namespaces in the instance. */
  InstanceAggregate = "INSTANCE_AGGREGATE",
  /** Group data by individual root namespace. */
  PerRootNamespace = "PER_ROOT_NAMESPACE",
}

/** Health status of an issue or epic */
export enum HealthStatus {
  /** At risk */
  AtRisk = "atRisk",
  /** Needs attention */
  NeedsAttention = "needsAttention",
  /** On track */
  OnTrack = "onTrack",
}

/** Health status of an issue or epic for filtering */
export enum HealthStatusFilter {
  /** Any health status is assigned. */
  Any = "ANY",
  /** No health status is assigned. */
  None = "NONE",
  /** At risk */
  AtRisk = "atRisk",
  /** Needs attention */
  NeedsAttention = "needsAttention",
  /** On track */
  OnTrack = "onTrack",
}

export type HierarchyFilterInput = {
  /** Whether to include work items of descendant parents when filtering by parent_ids. */
  includeDescendantWorkItems?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter work items by global IDs of their parent items (maximum is 100 items). */
  parentIds?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /**
   * Filter by parent ID wildcard. Incompatible with parentIds. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  parentWildcardId?: InputMaybe<WorkItemParentWildcardId>;
};

/** Autogenerated input type of HttpIntegrationCreate */
export type HttpIntegrationCreateInput = {
  /** Whether the integration is receiving alerts. */
  active: Scalars["Boolean"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the integration. */
  name: Scalars["String"]["input"];
  /** Custom mapping of GitLab alert attributes to fields from the payload example. */
  payloadAttributeMappings?: InputMaybe<
    Array<AlertManagementPayloadAlertFieldInput>
  >;
  /** Example of an alert payload. */
  payloadExample?: InputMaybe<Scalars["JsonString"]["input"]>;
  /** Project to create the integration in. */
  projectPath: Scalars["ID"]["input"];
  /** Type of integration to create. Cannot be changed after creation. */
  type?: InputMaybe<AlertManagementIntegrationType>;
};

/** Autogenerated input type of HttpIntegrationDestroy */
export type HttpIntegrationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the integration to remove. */
  id: Scalars["AlertManagementHttpIntegrationID"]["input"];
};

/** Autogenerated input type of HttpIntegrationResetToken */
export type HttpIntegrationResetTokenInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the integration to mutate. */
  id: Scalars["AlertManagementHttpIntegrationID"]["input"];
};

/** Autogenerated input type of HttpIntegrationUpdate */
export type HttpIntegrationUpdateInput = {
  /** Whether the integration is receiving alerts. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the integration to mutate. */
  id: Scalars["AlertManagementHttpIntegrationID"]["input"];
  /** Name of the integration. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Custom mapping of GitLab alert attributes to fields from the payload example. */
  payloadAttributeMappings?: InputMaybe<
    Array<AlertManagementPayloadAlertFieldInput>
  >;
  /** Example of an alert payload. */
  payloadExample?: InputMaybe<Scalars["JsonString"]["input"]>;
};

/** Import source */
export enum ImportSource {
  /** Bitbucket */
  Bitbucket = "BITBUCKET",
  /** Bitbucket Server */
  BitbucketServer = "BITBUCKET_SERVER",
  /** Custom Template */
  CustomTemplate = "CUSTOM_TEMPLATE",
  /** Fogbugz */
  Fogbugz = "FOGBUGZ",
  /** Git */
  Git = "GIT",
  /** Gitea */
  Gitea = "GITEA",
  /** Github */
  Github = "GITHUB",
  /** Gitlab Group */
  GitlabGroup = "GITLAB_GROUP",
  /** Gitlab Migration */
  GitlabMigration = "GITLAB_MIGRATION",
  /** Gitlab Project */
  GitlabProject = "GITLAB_PROJECT",
  /** Jira */
  Jira = "JIRA",
  /** Manifest */
  Manifest = "MANIFEST",
  /** Not imported */
  None = "NONE",
  /** Offline Transfer */
  OfflineTransfer = "OFFLINE_TRANSFER",
}

/** Autogenerated input type of ImportSourceUserCancelReassignment */
export type ImportSourceUserCancelReassignmentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the mapping of a user on source instance to a user on destination instance. */
  id: Scalars["ImportSourceUserID"]["input"];
};

/** Autogenerated input type of ImportSourceUserKeepAllAsPlaceholder */
export type ImportSourceUserKeepAllAsPlaceholderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the namespace. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Autogenerated input type of ImportSourceUserKeepAsPlaceholder */
export type ImportSourceUserKeepAsPlaceholderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the mapping of a user on source instance to a user on destination instance. */
  id: Scalars["ImportSourceUserID"]["input"];
};

/** Autogenerated input type of ImportSourceUserReassign */
export type ImportSourceUserReassignInput = {
  /** Global ID of the assignee user. */
  assigneeUserId: Scalars["UserID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the mapping of a user on source instance to a user on destination instance. */
  id: Scalars["ImportSourceUserID"]["input"];
};

/** Autogenerated input type of ImportSourceUserResendNotification */
export type ImportSourceUserResendNotificationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the mapping of a user on source instance to a user on destination instance. */
  id: Scalars["ImportSourceUserID"]["input"];
};

/** Autogenerated input type of ImportSourceUserRetryFailedReassignment */
export type ImportSourceUserRetryFailedReassignmentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the mapping of a user on source instance to a user on destination instance. */
  id: Scalars["ImportSourceUserID"]["input"];
};

export enum ImportSourceUserStatus {
  /** An import source user mapping that is awaiting approval. */
  AwaitingApproval = "AWAITING_APPROVAL",
  /** An import source user mapping that is completed. */
  Completed = "COMPLETED",
  /** An import source user mapping that is failed. */
  Failed = "FAILED",
  /** An import source user mapping that is keep as placeholder. */
  KeepAsPlaceholder = "KEEP_AS_PLACEHOLDER",
  /** An import source user mapping that is pending reassignment. */
  PendingReassignment = "PENDING_REASSIGNMENT",
  /** An import source user mapping that is reassignment in progress. */
  ReassignmentInProgress = "REASSIGNMENT_IN_PROGRESS",
  /** An import source user mapping that is rejected. */
  Rejected = "REJECTED",
}

/** Autogenerated input type of ImportSourceUserUndoKeepAsPlaceholder */
export type ImportSourceUserUndoKeepAsPlaceholderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the mapping of a user on source instance to a user on destination instance. */
  id: Scalars["ImportSourceUserID"]["input"];
};

/** Autogenerated input type of InstanceAuditEventStreamingDestinationsCreate */
export type InstanceAuditEventStreamingDestinationsCreateInput = {
  /** Destination category. */
  category: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination config. */
  config: Scalars["JSON"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret token. */
  secretToken?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of InstanceAuditEventStreamingDestinationsDelete */
export type InstanceAuditEventStreamingDestinationsDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the audit events external streaming destination to delete. */
  id: Scalars["AuditEventsInstanceExternalStreamingDestinationID"]["input"];
};

/** Autogenerated input type of InstanceAuditEventStreamingDestinationsUpdate */
export type InstanceAuditEventStreamingDestinationsUpdateInput = {
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Destination category. */
  category?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination config. */
  config?: InputMaybe<Scalars["JSON"]["input"]>;
  /** ID of external audit event destination to update. */
  id: Scalars["AuditEventsInstanceExternalStreamingDestinationID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret token. */
  secretToken?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of InstanceExternalAuditEventDestinationCreate */
export type InstanceExternalAuditEventDestinationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination URL. */
  destinationUrl: Scalars["String"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of InstanceExternalAuditEventDestinationDestroy */
export type InstanceExternalAuditEventDestinationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the external instance audit event destination to destroy. */
  id: Scalars["AuditEventsInstanceExternalAuditEventDestinationID"]["input"];
};

/** Autogenerated input type of InstanceExternalAuditEventDestinationUpdate */
export type InstanceExternalAuditEventDestinationUpdateInput = {
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination URL to change. */
  destinationUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the external instance audit event destination to update. */
  id: Scalars["AuditEventsInstanceExternalAuditEventDestinationID"]["input"];
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of InstanceGoogleCloudLoggingConfigurationCreate */
export type InstanceGoogleCloudLoggingConfigurationCreateInput = {
  /** Email address associated with the service account that will be used to authenticate and interact with the Google Cloud Logging service. This is part of the IAM credentials. */
  clientEmail: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Unique identifier of the Google Cloud project to which the logging configuration belongs. */
  googleProjectIdName: Scalars["String"]["input"];
  /** Unique identifier used to distinguish and manage different logs within the same Google Cloud project.(defaults to `audit_events`). */
  logIdName?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Private Key associated with the service account. This key is used to authenticate the service account and authorize it to interact with the Google Cloud Logging service. */
  privateKey: Scalars["String"]["input"];
};

/** Autogenerated input type of InstanceGoogleCloudLoggingConfigurationDestroy */
export type InstanceGoogleCloudLoggingConfigurationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Google Cloud logging configuration to destroy. */
  id: Scalars["AuditEventsInstanceGoogleCloudLoggingConfigurationID"]["input"];
};

/** Autogenerated input type of InstanceGoogleCloudLoggingConfigurationUpdate */
export type InstanceGoogleCloudLoggingConfigurationUpdateInput = {
  /** Active status of the destination. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Email address associated with the service account that will be used to authenticate and interact with the Google Cloud Logging service. This is part of the IAM credentials. */
  clientEmail?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Unique identifier of the Google Cloud project to which the logging configuration belongs. */
  googleProjectIdName?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the instance google Cloud configuration to update. */
  id: Scalars["AuditEventsInstanceGoogleCloudLoggingConfigurationID"]["input"];
  /** Unique identifier used to distinguish and manage different logs within the same Google Cloud project. */
  logIdName?: InputMaybe<Scalars["String"]["input"]>;
  /** Destination name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Private Key associated with the service account. This key is used to authenticate the service account and authorize it to interact with the Google Cloud Logging service. */
  privateKey?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of InstanceSecretsManagerEnroll */
export type InstanceSecretsManagerEnrollInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of InstanceSecretsManagerUnenroll */
export type InstanceSecretsManagerUnenrollInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of IntegrationExclusionCreate */
export type IntegrationExclusionCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of groups to exclude up to a maximum of 100. */
  groupIds?: InputMaybe<Array<Scalars["GroupID"]["input"]>>;
  /** Type of integration to exclude. */
  integrationName: IntegrationType;
  /** IDs of projects to exclude up to a maximum of 100. */
  projectIds?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
};

/** Autogenerated input type of IntegrationExclusionDelete */
export type IntegrationExclusionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of excluded groups. */
  groupIds?: InputMaybe<Array<Scalars["GroupID"]["input"]>>;
  /** Type of integration. */
  integrationName: IntegrationType;
  /** IDs of excluded projects. */
  projectIds?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
};

/** Integration Names */
export enum IntegrationType {
  /** Beyond Identity. */
  BeyondIdentity = "BEYOND_IDENTITY",
}

/** Autogenerated input type of IssuableResourceLinkCreate */
export type IssuableResourceLinkCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Incident id to associate the resource link with. */
  id: Scalars["IssueID"]["input"];
  /** Link of the resource. */
  link: Scalars["String"]["input"];
  /** Link text of the resource. */
  linkText?: InputMaybe<Scalars["String"]["input"]>;
  /** Link type of the resource. */
  linkType?: InputMaybe<IssuableResourceLinkType>;
};

/** Autogenerated input type of IssuableResourceLinkDestroy */
export type IssuableResourceLinkDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Issuable resource link ID to remove. */
  id: Scalars["IncidentManagementIssuableResourceLinkID"]["input"];
};

/** Issuable resource link type enum */
export enum IssuableResourceLinkType {
  /** General link type */
  General = "general",
  /** Pagerduty link type */
  Pagerduty = "pagerduty",
  /** Slack link type */
  Slack = "slack",
  /** Zoom link type */
  Zoom = "zoom",
}

/** Fields to perform the search in */
export enum IssuableSearchableField {
  /** Search in description field. */
  Description = "DESCRIPTION",
  /** Search in title field. */
  Title = "TITLE",
}

/** Incident severity */
export enum IssuableSeverity {
  /** Critical severity */
  Critical = "CRITICAL",
  /** High severity */
  High = "HIGH",
  /** Low severity */
  Low = "LOW",
  /** Medium severity */
  Medium = "MEDIUM",
  /** Unknown severity */
  Unknown = "UNKNOWN",
}

/** State of a GitLab issue or merge request */
export enum IssuableState {
  /** All available. */
  All = "all",
  /** In closed state. */
  Closed = "closed",
  /** Discussion has been locked. */
  Locked = "locked",
  /** In open state. */
  Opened = "opened",
}

/** Iteration ID wildcard values for issue creation */
export enum IssueCreationIterationWildcardId {
  /** Current iteration. */
  Current = "CURRENT",
}

/** Issue escalation status values */
export enum IssueEscalationStatus {
  /** Someone is actively investigating the problem. */
  Acknowledged = "ACKNOWLEDGED",
  /** No action will be taken. */
  Ignored = "IGNORED",
  /** The problem has been addressed. */
  Resolved = "RESOLVED",
  /** Investigation has not started. */
  Triggered = "TRIGGERED",
}

/** Autogenerated input type of IssueLinkAlerts */
export type IssueLinkAlertsInput = {
  /** Alerts references to be linked to the incident. */
  alertReferences: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueMove */
export type IssueMoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Project to move the issue to. */
  targetProjectPath: Scalars["ID"]["input"];
  /** Work item type to use in the target project. When omitted, the source work item type is preserved. */
  targetWorkItemTypeId?: InputMaybe<Scalars["WorkItemsTypeID"]["input"]>;
};

/** Autogenerated input type of IssueMoveList */
export type IssueMoveListInput = {
  /** Global ID of the board that the issue is in. */
  boardId: Scalars["BoardID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * ID of the parent epic. NULL when removing the association. Deprecated in GitLab 17.5: This will be replaced by WorkItem hierarchyWidget.
   * @deprecated This will be replaced by WorkItem hierarchyWidget. Deprecated in GitLab 17.5.
   */
  epicId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** ID of the board list that the issue will be moved from. */
  fromListId?: InputMaybe<Scalars["ID"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** ID of issue that should be placed after the current issue. */
  moveAfterId?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of issue that should be placed before the current issue. */
  moveBeforeId?: InputMaybe<Scalars["ID"]["input"]>;
  /** Position of issue within the board list. Positions start at 0. Use -1 to move to the end of the list. */
  positionInList?: InputMaybe<Scalars["Int"]["input"]>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** ID of the board list that the issue will be moved to. */
  toListId?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Autogenerated input type of IssueSetAssignees */
export type IssueSetAssigneesInput = {
  /** Usernames to assign to the resource. Replaces existing assignees by default. */
  assigneeUsernames: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Operation to perform. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetConfidential */
export type IssueSetConfidentialInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether or not to set the issue as a confidential. */
  confidential: Scalars["Boolean"]["input"];
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetCrmContacts */
export type IssueSetCrmContactsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Customer relations contact IDs to set. Replaces existing contacts by default. */
  contactIds: Array<Scalars["CustomerRelationsContactID"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Changes the operation mode. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetDueDate */
export type IssueSetDueDateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired due date for the issue. Due date is removed if null. */
  dueDate?: InputMaybe<Scalars["Time"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetEpic */
export type IssueSetEpicInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Global ID of the epic to be assigned to the issue, epic will be removed if absent or set to null Deprecated in GitLab 17.5: This will be replaced by WorkItem hierarchyWidget.
   * @deprecated This will be replaced by WorkItem hierarchyWidget. Deprecated in GitLab 17.5.
   */
  epicId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetEscalationPolicy */
export type IssueSetEscalationPolicyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the escalation policy to assign to the issue. Policy will be removed if absent or set to null. */
  escalationPolicyId?: InputMaybe<
    Scalars["IncidentManagementEscalationPolicyID"]["input"]
  >;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetEscalationStatus */
export type IssueSetEscalationStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Set the escalation status. */
  status: IssueEscalationStatus;
};

/** Autogenerated input type of IssueSetIteration */
export type IssueSetIterationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /**
   * Iteration to assign to the issue.
   *
   */
  iterationId?: InputMaybe<Scalars["IterationID"]["input"]>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetLocked */
export type IssueSetLockedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Whether or not to lock discussion on the issue. */
  locked: Scalars["Boolean"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of IssueSetSeverity */
export type IssueSetSeverityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Set the incident severity level. */
  severity: IssuableSeverity;
};

/** Autogenerated input type of IssueSetSubscription */
export type IssueSetSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Desired state of the subscription. */
  subscribedState: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of IssueSetWeight */
export type IssueSetWeightInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** The desired weight for the issue. If set to null, weight is removed. */
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Values for sorting issues */
export enum IssueSort {
  /** Blocking issues count by ascending order. */
  BlockingIssuesAsc = "BLOCKING_ISSUES_ASC",
  /** Blocking issues count by descending order. */
  BlockingIssuesDesc = "BLOCKING_ISSUES_DESC",
  /** Closed time by ascending order. */
  ClosedAtAsc = "CLOSED_AT_ASC",
  /** Closed time by descending order. */
  ClosedAtDesc = "CLOSED_AT_DESC",
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Due date by ascending order. */
  DueDateAsc = "DUE_DATE_ASC",
  /** Due date by descending order. */
  DueDateDesc = "DUE_DATE_DESC",
  /** Status from triggered to resolved. */
  EscalationStatusAsc = "ESCALATION_STATUS_ASC",
  /** Status from resolved to triggered. */
  EscalationStatusDesc = "ESCALATION_STATUS_DESC",
  /** Issues with healthy issues first. */
  HealthStatusAsc = "HEALTH_STATUS_ASC",
  /** Issues with unhealthy issues first. */
  HealthStatusDesc = "HEALTH_STATUS_DESC",
  /** Label priority by ascending order. */
  LabelPriorityAsc = "LABEL_PRIORITY_ASC",
  /** Label priority by descending order. */
  LabelPriorityDesc = "LABEL_PRIORITY_DESC",
  /** Milestone due date by ascending order. */
  MilestoneDueAsc = "MILESTONE_DUE_ASC",
  /** Milestone due date by descending order. */
  MilestoneDueDesc = "MILESTONE_DUE_DESC",
  /** Number of upvotes (awarded "thumbs up" emoji) by ascending order. */
  PopularityAsc = "POPULARITY_ASC",
  /** Number of upvotes (awarded "thumbs up" emoji) by descending order. */
  PopularityDesc = "POPULARITY_DESC",
  /** Priority by ascending order. */
  PriorityAsc = "PRIORITY_ASC",
  /** Priority by descending order. */
  PriorityDesc = "PRIORITY_DESC",
  /** Published issues shown last. */
  PublishedAsc = "PUBLISHED_ASC",
  /** Published issues shown first. */
  PublishedDesc = "PUBLISHED_DESC",
  /** Relative position by ascending order. */
  RelativePositionAsc = "RELATIVE_POSITION_ASC",
  /** Severity from less critical to more critical. */
  SeverityAsc = "SEVERITY_ASC",
  /** Severity from more critical to less critical. */
  SeverityDesc = "SEVERITY_DESC",
  /** Issues with earliest SLA due time shown first. */
  SlaDueAtAsc = "SLA_DUE_AT_ASC",
  /** Issues with latest SLA due time shown first. */
  SlaDueAtDesc = "SLA_DUE_AT_DESC",
  /**
   * Status by ascending order. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  StatusAsc = "STATUS_ASC",
  /**
   * Status by descending order. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  StatusDesc = "STATUS_DESC",
  /** Title by ascending order. */
  TitleAsc = "TITLE_ASC",
  /** Title by descending order. */
  TitleDesc = "TITLE_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /** Weight by ascending order. */
  WeightAsc = "WEIGHT_ASC",
  /** Weight by descending order. */
  WeightDesc = "WEIGHT_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** State of a GitLab issue */
export enum IssueState {
  /** All available. */
  All = "all",
  /** In closed state. */
  Closed = "closed",
  /** Discussion has been locked. */
  Locked = "locked",
  /** In open state. */
  Opened = "opened",
}

/** Values for issue state events */
export enum IssueStateEvent {
  /** Closes the issue. */
  Close = "CLOSE",
  /** Reopens the issue. */
  Reopen = "REOPEN",
}

/** Issue type */
export enum IssueType {
  /**
   * Epic issue type. Available only when feature epics is available. Introduced in GitLab 16.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 16.7.
   */
  Epic = "EPIC",
  /** Incident issue type */
  Incident = "INCIDENT",
  /** Issue issue type */
  Issue = "ISSUE",
  /**
   * Key Result issue type. Available only when feature flag `okrs_mvc` is enabled. Introduced in GitLab 15.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 15.7.
   */
  KeyResult = "KEY_RESULT",
  /**
   * Objective issue type. Available only when feature flag `okrs_mvc` is enabled. Introduced in GitLab 15.6: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 15.6.
   */
  Objective = "OBJECTIVE",
  /** Requirement issue type */
  Requirement = "REQUIREMENT",
  /** Task issue type */
  Task = "TASK",
  /** Test Case issue type */
  TestCase = "TEST_CASE",
  /** Ticket issue type */
  Ticket = "TICKET",
}

/** Autogenerated input type of IssueUnlinkAlert */
export type IssueUnlinkAlertInput = {
  /** Global ID of the alert to unlink from the incident. */
  alertId: Scalars["AlertManagementAlertID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

export type ItemConsumerTargetInput = {
  /** Group in which to configure the item. */
  groupId?: InputMaybe<Scalars["GroupID"]["input"]>;
  /** Project in which to configure the item. */
  projectId?: InputMaybe<Scalars["ProjectID"]["input"]>;
};

/** Autogenerated input type of IterationCadenceCreate */
export type IterationCadenceCreateInput = {
  /** Whether the iteration cadence is active. */
  active: Scalars["Boolean"]["input"];
  /** Whether the iteration cadence should automatically generate upcoming iterations. */
  automatic: Scalars["Boolean"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the iteration cadence. Maximum length is 5000 characters. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Duration in weeks of the iterations within the cadence. */
  durationInWeeks?: InputMaybe<Scalars["Int"]["input"]>;
  /** Group where the iteration cadence is created. */
  groupPath: Scalars["ID"]["input"];
  /** Number of future iterations to schedule in addition to the current one. */
  iterationsInAdvance?: InputMaybe<Scalars["Int"]["input"]>;
  /** Whether the iteration cadence should roll over issues to the next iteration or not. */
  rollOver?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Timestamp of the automation start date. */
  startDate?: InputMaybe<Scalars["Time"]["input"]>;
  /** Title of the iteration cadence. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of IterationCadenceDestroy */
export type IterationCadenceDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the iteration cadence. */
  id: Scalars["IterationsCadenceID"]["input"];
};

/** Autogenerated input type of IterationCadenceUpdate */
export type IterationCadenceUpdateInput = {
  /** Whether the iteration cadence is active. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether the iteration cadence should automatically generate upcoming iterations. */
  automatic?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the iteration cadence. Maximum length is 5000 characters. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Duration in weeks of the iterations within the cadence. */
  durationInWeeks?: InputMaybe<Scalars["Int"]["input"]>;
  /** Global ID of the iteration cadence. */
  id: Scalars["IterationsCadenceID"]["input"];
  /** Number of future iterations to schedule in addition to the current one. */
  iterationsInAdvance?: InputMaybe<Scalars["Int"]["input"]>;
  /** Whether the iteration cadence should roll over issues to the next iteration or not. */
  rollOver?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Timestamp of the automation start date. */
  startDate?: InputMaybe<Scalars["Time"]["input"]>;
  /** Title of the iteration cadence. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of IterationDelete */
export type IterationDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the iteration. */
  id: Scalars["IterationID"]["input"];
};

/** Fields to perform the search in */
export enum IterationSearchableField {
  /** Search in cadence_title field. */
  CadenceTitle = "CADENCE_TITLE",
  /** Search in title field. */
  Title = "TITLE",
}

/** Iteration sort values */
export enum IterationSort {
  /** Sort by cadence id in ascending and due date in ascending order. */
  CadenceAndDueDateAsc = "CADENCE_AND_DUE_DATE_ASC",
  /** Sort by cadence id in ascending and due date in descending order. */
  CadenceAndDueDateDesc = "CADENCE_AND_DUE_DATE_DESC",
}

/** State of a GitLab iteration */
export enum IterationState {
  /** Any iteration. */
  All = "all",
  /** Closed iteration. */
  Closed = "closed",
  /** Current iteration. */
  Current = "current",
  /** Open iteration. */
  Opened = "opened",
  /** Upcoming iteration. */
  Upcoming = "upcoming",
}

/** Iteration ID wildcard values */
export enum IterationWildcardId {
  /** An iteration is assigned. */
  Any = "ANY",
  /** Current iteration. */
  Current = "CURRENT",
  /** No iteration is assigned. */
  None = "NONE",
}

/** Autogenerated input type of JiraImportStart */
export type JiraImportStartInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project key of the importer Jira project. */
  jiraProjectKey: Scalars["String"]["input"];
  /**
   * Project name of the importer Jira project. Deprecated in GitLab 17.4: Argument is not used.
   * @deprecated Argument is not used. Deprecated in GitLab 17.4.
   */
  jiraProjectName?: InputMaybe<Scalars["String"]["input"]>;
  /** Project to import the Jira project into. */
  projectPath: Scalars["ID"]["input"];
  /** Mapping of Jira to GitLab users. */
  usersMapping?: InputMaybe<Array<JiraUsersMappingInputType>>;
};

/** Autogenerated input type of JiraImportUsers */
export type JiraImportUsersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project to import the Jira users into. */
  projectPath: Scalars["ID"]["input"];
  /** Index of the record the import should started at, default 0 (50 records returned). */
  startAt?: InputMaybe<Scalars["Int"]["input"]>;
};

export type JiraUsersMappingInputType = {
  /** ID of the GitLab user. */
  gitlabId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Jira account ID of the user. */
  jiraAccountId: Scalars["String"]["input"];
};

export enum JobArtifactFileType {
  /** ACCESSIBILITY job artifact file type. */
  Accessibility = "ACCESSIBILITY",
  /** ANNOTATIONS job artifact file type. */
  Annotations = "ANNOTATIONS",
  /** API FUZZING job artifact file type. */
  ApiFuzzing = "API_FUZZING",
  /** ARCHIVE job artifact file type. */
  Archive = "ARCHIVE",
  /** BROWSER PERFORMANCE job artifact file type. */
  BrowserPerformance = "BROWSER_PERFORMANCE",
  /** CLUSTER APPLICATIONS job artifact file type. */
  ClusterApplications = "CLUSTER_APPLICATIONS",
  /** CLUSTER IMAGE SCANNING job artifact file type. */
  ClusterImageScanning = "CLUSTER_IMAGE_SCANNING",
  /** COBERTURA job artifact file type. */
  Cobertura = "COBERTURA",
  /** CODE QUALITY job artifact file type. */
  Codequality = "CODEQUALITY",
  /** CONTAINER SCANNING job artifact file type. */
  ContainerScanning = "CONTAINER_SCANNING",
  /** COVERAGE FUZZING job artifact file type. */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** CYCLONEDX job artifact file type. */
  Cyclonedx = "CYCLONEDX",
  /** DAST job artifact file type. */
  Dast = "DAST",
  /** DEPENDENCY SCANNING job artifact file type. */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** DOTENV job artifact file type. */
  Dotenv = "DOTENV",
  /** JACOCO job artifact file type. */
  Jacoco = "JACOCO",
  /** JUNIT job artifact file type. */
  Junit = "JUNIT",
  /** LICENSE SCANNING job artifact file type. */
  LicenseScanning = "LICENSE_SCANNING",
  /** LOAD PERFORMANCE job artifact file type. */
  LoadPerformance = "LOAD_PERFORMANCE",
  /** LSIF job artifact file type. */
  Lsif = "LSIF",
  /** METADATA job artifact file type. */
  Metadata = "METADATA",
  /** METRICS job artifact file type. */
  Metrics = "METRICS",
  /** METRICS REFEREE job artifact file type. */
  MetricsReferee = "METRICS_REFEREE",
  /** NETWORK REFEREE job artifact file type. */
  NetworkReferee = "NETWORK_REFEREE",
  /** PERFORMANCE job artifact file type. */
  Performance = "PERFORMANCE",
  /** REPOSITORY XRAY job artifact file type. */
  RepositoryXray = "REPOSITORY_XRAY",
  /** REQUIREMENTS job artifact file type. */
  Requirements = "REQUIREMENTS",
  /** REQUIREMENTS V2 job artifact file type. */
  RequirementsV2 = "REQUIREMENTS_V2",
  /** SARIF job artifact file type. */
  Sarif = "SARIF",
  /** SAST job artifact file type. */
  Sast = "SAST",
  /** SECRET DETECTION job artifact file type. */
  SecretDetection = "SECRET_DETECTION",
  /** TERRAFORM job artifact file type. */
  Terraform = "TERRAFORM",
  /** TRACE job artifact file type. */
  Trace = "TRACE",
}

/** Autogenerated input type of JobArtifactsDestroy */
export type JobArtifactsDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the job to mutate. */
  id: Scalars["CiBuildID"]["input"];
};

/** Autogenerated input type of JobCancel */
export type JobCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the job to mutate. */
  id: Scalars["CiBuildID"]["input"];
};

/** Autogenerated input type of JobPlay */
export type JobPlayInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the job to mutate. */
  id: Scalars["CiProcessableID"]["input"];
  /** Inputs to use when playing the job. */
  inputs?: InputMaybe<Array<CiInputsInput>>;
  /** Variables to use when playing a manual job. */
  variables?: InputMaybe<Array<CiVariableInput>>;
};

/** Autogenerated input type of JobRetry */
export type JobRetryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the job to mutate. */
  id: Scalars["CiProcessableID"]["input"];
  /** Inputs to use when retrying the job. */
  inputs?: InputMaybe<Array<CiInputsInput>>;
  /** Variables to use when retrying a manual job. */
  variables?: InputMaybe<Array<CiVariableInput>>;
};

/** Autogenerated input type of JobUnschedule */
export type JobUnscheduleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the job to mutate. */
  id: Scalars["CiBuildID"]["input"];
};

/** Autogenerated input type of LabelCreate */
export type LabelCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * The color of the label given in 6-digit hex notation with leading '#' sign
   * (for example, `#FFAABB`) or one of the CSS color names.
   *
   */
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the label. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Title of the label. */
  title: Scalars["String"]["input"];
};

/** List of fields where the provided searchTerm should be looked up */
export enum LabelSearchFieldList {
  /** Search in the label description. */
  Description = "DESCRIPTION",
  /** Search in the label title. */
  Title = "TITLE",
}

/** Autogenerated input type of LabelUpdate */
export type LabelUpdateInput = {
  /** Whether to archive the label. Introduced in GitLab 18.10. */
  archived?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the label to update. */
  id: Scalars["LabelID"]["input"];
};

/** Autogenerated input type of LdapAdminRoleLinkCreate */
export type LdapAdminRoleLinkCreateInput = {
  /** Global ID of the custom admin role to be assigned to a user. */
  adminMemberRoleId: Scalars["MemberRoleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Common Name (CN) of the LDAP group. */
  cn?: InputMaybe<Scalars["String"]["input"]>;
  /** Search filter for the LDAP group. */
  filter?: InputMaybe<Scalars["String"]["input"]>;
  /** LDAP provider for the LDAP link. */
  provider: Scalars["String"]["input"];
};

/** Autogenerated input type of LdapAdminRoleLinkDestroy */
export type LdapAdminRoleLinkDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the instance-level LDAP link to delete. */
  id: Scalars["AuthzLdapAdminRoleLinkID"]["input"];
};

/** All LDAP admin role sync statuses. */
export enum LdapAdminRoleSyncStatus {
  /** A sync that is failed. */
  Failed = "FAILED",
  /** A sync that is never synced. */
  NeverSynced = "NEVER_SYNCED",
  /** A sync that is queued. */
  Queued = "QUEUED",
  /** A sync that is running. */
  Running = "RUNNING",
  /** A sync that is successful. */
  Successful = "SUCCESSFUL",
}

/** Licensed features that can be checked for availability on a namespace or project. */
export enum LicensedFeature {
  /** Admin merge request approvers rules feature. */
  AdminMergeRequestApproversRules = "ADMIN_MERGE_REQUEST_APPROVERS_RULES",
  /** Agentic chat feature. */
  AgenticChat = "AGENTIC_CHAT",
  /** Agent managed resources feature. */
  AgentManagedResources = "AGENT_MANAGED_RESOURCES",
  /** Ai analytics feature. */
  AiAnalytics = "AI_ANALYTICS",
  /** Ai catalog feature. */
  AiCatalog = "AI_CATALOG",
  /** Ai chat feature. */
  AiChat = "AI_CHAT",
  /** Ai config chat feature. */
  AiConfigChat = "AI_CONFIG_CHAT",
  /** Ai features feature. */
  AiFeatures = "AI_FEATURES",
  /** Ai workflows feature. */
  AiWorkflows = "AI_WORKFLOWS",
  /** Allow personal snippets feature. */
  AllowPersonalSnippets = "ALLOW_PERSONAL_SNIPPETS",
  /** Api discovery feature. */
  ApiDiscovery = "API_DISCOVERY",
  /** Api fuzzing feature. */
  ApiFuzzing = "API_FUZZING",
  /** Audit events feature. */
  AuditEvents = "AUDIT_EVENTS",
  /** Auto rollback feature. */
  AutoRollback = "AUTO_ROLLBACK",
  /** Blocked issues feature. */
  BlockedIssues = "BLOCKED_ISSUES",
  /** Blocked work items feature. */
  BlockedWorkItems = "BLOCKED_WORK_ITEMS",
  /** Blocking merge requests feature. */
  BlockingMergeRequests = "BLOCKING_MERGE_REQUESTS",
  /** Board assignee lists feature. */
  BoardAssigneeLists = "BOARD_ASSIGNEE_LISTS",
  /** Board iteration lists feature. */
  BoardIterationLists = "BOARD_ITERATION_LISTS",
  /** Board milestone lists feature. */
  BoardMilestoneLists = "BOARD_MILESTONE_LISTS",
  /** Board status lists feature. */
  BoardStatusLists = "BOARD_STATUS_LISTS",
  /** Branch rule squash options feature. */
  BranchRuleSquashOptions = "BRANCH_RULE_SQUASH_OPTIONS",
  /** Built in project templates enabled feature. */
  BuiltInProjectTemplatesEnabled = "BUILT_IN_PROJECT_TEMPLATES_ENABLED",
  /** Ci cd catalog publish restriction feature. */
  CiCdCatalogPublishRestriction = "CI_CD_CATALOG_PUBLISH_RESTRICTION",
  /** Ci cd projects feature. */
  CiCdProjects = "CI_CD_PROJECTS",
  /** Ci component usages in projects feature. */
  CiComponentUsagesInProjects = "CI_COMPONENT_USAGES_IN_PROJECTS",
  /** Ci job analytics for projects feature. */
  CiJobAnalyticsForProjects = "CI_JOB_ANALYTICS_FOR_PROJECTS",
  /** Ci pipeline cancellation restrictions feature. */
  CiPipelineCancellationRestrictions = "CI_PIPELINE_CANCELLATION_RESTRICTIONS",
  /** Ci project subscriptions feature. */
  CiProjectSubscriptions = "CI_PROJECT_SUBSCRIPTIONS",
  /** Ci runner controllers feature. */
  CiRunnerControllers = "CI_RUNNER_CONTROLLERS",
  /** Ci secrets management feature. */
  CiSecretsManagement = "CI_SECRETS_MANAGEMENT",
  /** Cluster agents ci impersonation feature. */
  ClusterAgentsCiImpersonation = "CLUSTER_AGENTS_CI_IMPERSONATION",
  /** Cluster agents user impersonation feature. */
  ClusterAgentsUserImpersonation = "CLUSTER_AGENTS_USER_IMPERSONATION",
  /** Cluster deployments feature. */
  ClusterDeployments = "CLUSTER_DEPLOYMENTS",
  /** Cluster image scanning feature. */
  ClusterImageScanning = "CLUSTER_IMAGE_SCANNING",
  /** Cluster receptive agents feature. */
  ClusterReceptiveAgents = "CLUSTER_RECEPTIVE_AGENTS",
  /** Code owners feature. */
  CodeOwners = "CODE_OWNERS",
  /** Code owner approval required feature. */
  CodeOwnerApprovalRequired = "CODE_OWNER_APPROVAL_REQUIRED",
  /** Code review analytics feature. */
  CodeReviewAnalytics = "CODE_REVIEW_ANALYTICS",
  /** Code suggestions feature. */
  CodeSuggestions = "CODE_SUGGESTIONS",
  /** Commit committer check feature. */
  CommitCommitterCheck = "COMMIT_COMMITTER_CHECK",
  /** Commit committer name check feature. */
  CommitCommitterNameCheck = "COMMIT_COMMITTER_NAME_CHECK",
  /** Compliance framework feature. */
  ComplianceFramework = "COMPLIANCE_FRAMEWORK",
  /** Compliance pipeline configuration feature. */
  CompliancePipelineConfiguration = "COMPLIANCE_PIPELINE_CONFIGURATION",
  /** Configurable work item types feature. */
  ConfigurableWorkItemTypes = "CONFIGURABLE_WORK_ITEM_TYPES",
  /** Container registry immutable tag rules feature. */
  ContainerRegistryImmutableTagRules = "CONTAINER_REGISTRY_IMMUTABLE_TAG_RULES",
  /** Container scanning feature. */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Container scanning for registry feature. */
  ContainerScanningForRegistry = "CONTAINER_SCANNING_FOR_REGISTRY",
  /** Container virtual registry feature. */
  ContainerVirtualRegistry = "CONTAINER_VIRTUAL_REGISTRY",
  /** Contribution analytics feature. */
  ContributionAnalytics = "CONTRIBUTION_ANALYTICS",
  /** Coverage check approval rule feature. */
  CoverageCheckApprovalRule = "COVERAGE_CHECK_APPROVAL_RULE",
  /** Coverage fuzzing feature. */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** Credentials inventory feature. */
  CredentialsInventory = "CREDENTIALS_INVENTORY",
  /** Cross project pipelines feature. */
  CrossProjectPipelines = "CROSS_PROJECT_PIPELINES",
  /** Custom compliance frameworks feature. */
  CustomComplianceFrameworks = "CUSTOM_COMPLIANCE_FRAMEWORKS",
  /** Custom fields feature. */
  CustomFields = "CUSTOM_FIELDS",
  /** Custom file templates for namespace feature. */
  CustomFileTemplatesForNamespace = "CUSTOM_FILE_TEMPLATES_FOR_NAMESPACE",
  /** Custom roles feature. */
  CustomRoles = "CUSTOM_ROLES",
  /** Cycle analytics for groups feature. */
  CycleAnalyticsForGroups = "CYCLE_ANALYTICS_FOR_GROUPS",
  /** Cycle analytics for projects feature. */
  CycleAnalyticsForProjects = "CYCLE_ANALYTICS_FOR_PROJECTS",
  /** Dast feature. */
  Dast = "DAST",
  /** Default project deletion protection feature. */
  DefaultProjectDeletionProtection = "DEFAULT_PROJECT_DELETION_PROTECTION",
  /** Default roles assignees feature. */
  DefaultRolesAssignees = "DEFAULT_ROLES_ASSIGNEES",
  /** Delete unconfirmed users feature. */
  DeleteUnconfirmedUsers = "DELETE_UNCONFIRMED_USERS",
  /** Dependency firewall feature. */
  DependencyFirewall = "DEPENDENCY_FIREWALL",
  /** Dependency proxy for packages feature. */
  DependencyProxyForPackages = "DEPENDENCY_PROXY_FOR_PACKAGES",
  /** Dependency scanning feature. */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** Description composer feature. */
  DescriptionComposer = "DESCRIPTION_COMPOSER",
  /** Description diffs feature. */
  DescriptionDiffs = "DESCRIPTION_DIFFS",
  /** Devops adoption feature. */
  DevopsAdoption = "DEVOPS_ADOPTION",
  /** Disable deleting account for users feature. */
  DisableDeletingAccountForUsers = "DISABLE_DELETING_ACCOUNT_FOR_USERS",
  /** Disable extensions marketplace for enterprise users feature. */
  DisableExtensionsMarketplaceForEnterpriseUsers = "DISABLE_EXTENSIONS_MARKETPLACE_FOR_ENTERPRISE_USERS",
  /** Disable invite members feature. */
  DisableInviteMembers = "DISABLE_INVITE_MEMBERS",
  /** Disable name update for users feature. */
  DisableNameUpdateForUsers = "DISABLE_NAME_UPDATE_FOR_USERS",
  /** Disable personal access tokens feature. */
  DisablePersonalAccessTokens = "DISABLE_PERSONAL_ACCESS_TOKENS",
  /** Disable ssh keys feature. */
  DisableSshKeys = "DISABLE_SSH_KEYS",
  /** Domain verification feature. */
  DomainVerification = "DOMAIN_VERIFICATION",
  /** Dora4 analytics feature. */
  Dora4Analytics = "DORA4_ANALYTICS",
  /** Email additional text feature. */
  EmailAdditionalText = "EMAIL_ADDITIONAL_TEXT",
  /** Environment alerts feature. */
  EnvironmentAlerts = "ENVIRONMENT_ALERTS",
  /** Epics feature. */
  Epics = "EPICS",
  /** Epic colors feature. */
  EpicColors = "EPIC_COLORS",
  /** Escalation policies feature. */
  EscalationPolicies = "ESCALATION_POLICIES",
  /** Evaluate group level compliance pipeline feature. */
  EvaluateGroupLevelCompliancePipeline = "EVALUATE_GROUP_LEVEL_COMPLIANCE_PIPELINE",
  /** Experimental features feature. */
  ExperimentalFeatures = "EXPERIMENTAL_FEATURES",
  /** Explain code feature. */
  ExplainCode = "EXPLAIN_CODE",
  /** Export user permissions feature. */
  ExportUserPermissions = "EXPORT_USER_PERMISSIONS",
  /** External audit events feature. */
  ExternalAuditEvents = "EXTERNAL_AUDIT_EVENTS",
  /** External status checks feature. */
  ExternalStatusChecks = "EXTERNAL_STATUS_CHECKS",
  /** Feature flags code references feature. */
  FeatureFlagsCodeReferences = "FEATURE_FLAGS_CODE_REFERENCES",
  /** Feature flags related issues feature. */
  FeatureFlagsRelatedIssues = "FEATURE_FLAGS_RELATED_ISSUES",
  /** File locks feature. */
  FileLocks = "FILE_LOCKS",
  /** Full codequality report feature. */
  FullCodequalityReport = "FULL_CODEQUALITY_REPORT",
  /** Generate commit message feature. */
  GenerateCommitMessage = "GENERATE_COMMIT_MESSAGE",
  /** Generate description feature. */
  GenerateDescription = "GENERATE_DESCRIPTION",
  /** Generate test file feature. */
  GenerateTestFile = "GENERATE_TEST_FILE",
  /** Generic alert fingerprinting feature. */
  GenericAlertFingerprinting = "GENERIC_ALERT_FINGERPRINTING",
  /** Github integration feature. */
  GithubIntegration = "GITHUB_INTEGRATION",
  /** Git two factor enforcement feature. */
  GitTwoFactorEnforcement = "GIT_TWO_FACTOR_ENFORCEMENT",
  /** Glab ask git command feature. */
  GlabAskGitCommand = "GLAB_ASK_GIT_COMMAND",
  /** Group activity analytics feature. */
  GroupActivityAnalytics = "GROUP_ACTIVITY_ANALYTICS",
  /** Group allowed email domains feature. */
  GroupAllowedEmailDomains = "GROUP_ALLOWED_EMAIL_DOMAINS",
  /** Group bulk edit feature. */
  GroupBulkEdit = "GROUP_BULK_EDIT",
  /** Group ci cd analytics pipelines feature. */
  GroupCiCdAnalyticsPipelines = "GROUP_CI_CD_ANALYTICS_PIPELINES",
  /** Group ci cd analytics releases feature. */
  GroupCiCdAnalyticsReleases = "GROUP_CI_CD_ANALYTICS_RELEASES",
  /** Group coverage reports feature. */
  GroupCoverageReports = "GROUP_COVERAGE_REPORTS",
  /** Group forking protection feature. */
  GroupForkingProtection = "GROUP_FORKING_PROTECTION",
  /** Group ip restriction feature. */
  GroupIpRestriction = "GROUP_IP_RESTRICTION",
  /** Group level analytics dashboard feature. */
  GroupLevelAnalyticsDashboard = "GROUP_LEVEL_ANALYTICS_DASHBOARD",
  /** Group level compliance adherence report feature. */
  GroupLevelComplianceAdherenceReport = "GROUP_LEVEL_COMPLIANCE_ADHERENCE_REPORT",
  /** Group level compliance dashboard feature. */
  GroupLevelComplianceDashboard = "GROUP_LEVEL_COMPLIANCE_DASHBOARD",
  /** Group level compliance violations report feature. */
  GroupLevelComplianceViolationsReport = "GROUP_LEVEL_COMPLIANCE_VIOLATIONS_REPORT",
  /** Group level devops adoption feature. */
  GroupLevelDevopsAdoption = "GROUP_LEVEL_DEVOPS_ADOPTION",
  /** Group level merge checks setting feature. */
  GroupLevelMergeChecksSetting = "GROUP_LEVEL_MERGE_CHECKS_SETTING",
  /** Group milestone project releases feature. */
  GroupMilestoneProjectReleases = "GROUP_MILESTONE_PROJECT_RELEASES",
  /** Group project templates feature. */
  GroupProjectTemplates = "GROUP_PROJECT_TEMPLATES",
  /** Group protected branches feature. */
  GroupProtectedBranches = "GROUP_PROTECTED_BRANCHES",
  /** Group repository analytics feature. */
  GroupRepositoryAnalytics = "GROUP_REPOSITORY_ANALYTICS",
  /** Group saml feature. */
  GroupSaml = "GROUP_SAML",
  /** Group saved replies feature. */
  GroupSavedReplies = "GROUP_SAVED_REPLIES",
  /** Group scoped ci variables feature. */
  GroupScopedCiVariables = "GROUP_SCOPED_CI_VARIABLES",
  /** Group usage billing feature. */
  GroupUsageBilling = "GROUP_USAGE_BILLING",
  /** Group webhooks feature. */
  GroupWebhooks = "GROUP_WEBHOOKS",
  /** Group wikis feature. */
  GroupWikis = "GROUP_WIKIS",
  /** Ide schema config feature. */
  IdeSchemaConfig = "IDE_SCHEMA_CONFIG",
  /** Incident management feature. */
  IncidentManagement = "INCIDENT_MANAGEMENT",
  /** Incident metric upload feature. */
  IncidentMetricUpload = "INCIDENT_METRIC_UPLOAD",
  /** Incident sla feature. */
  IncidentSla = "INCIDENT_SLA",
  /** Incident timeline view feature. */
  IncidentTimelineView = "INCIDENT_TIMELINE_VIEW",
  /** Increased saved views limit feature. */
  IncreasedSavedViewsLimit = "INCREASED_SAVED_VIEWS_LIMIT",
  /** Inline codequality feature. */
  InlineCodequality = "INLINE_CODEQUALITY",
  /** Insights feature. */
  Insights = "INSIGHTS",
  /** Instance level devops adoption feature. */
  InstanceLevelDevopsAdoption = "INSTANCE_LEVEL_DEVOPS_ADOPTION",
  /** Issuable default templates feature. */
  IssuableDefaultTemplates = "ISSUABLE_DEFAULT_TEMPLATES",
  /** Issuable health status feature. */
  IssuableHealthStatus = "ISSUABLE_HEALTH_STATUS",
  /** Issuable resource links feature. */
  IssuableResourceLinks = "ISSUABLE_RESOURCE_LINKS",
  /** Issues analytics feature. */
  IssuesAnalytics = "ISSUES_ANALYTICS",
  /** Issues completed analytics feature. */
  IssuesCompletedAnalytics = "ISSUES_COMPLETED_ANALYTICS",
  /** Issue weights feature. */
  IssueWeights = "ISSUE_WEIGHTS",
  /** Iterations feature. */
  Iterations = "ITERATIONS",
  /** Jira issues integration feature. */
  JiraIssuesIntegration = "JIRA_ISSUES_INTEGRATION",
  /** Jira issue association enforcement feature. */
  JiraIssueAssociationEnforcement = "JIRA_ISSUE_ASSOCIATION_ENFORCEMENT",
  /** Jira vulnerabilities integration feature. */
  JiraVulnerabilitiesIntegration = "JIRA_VULNERABILITIES_INTEGRATION",
  /** Kubernetes cluster vulnerabilities feature. */
  KubernetesClusterVulnerabilities = "KUBERNETES_CLUSTER_VULNERABILITIES",
  /** License information source feature. */
  LicenseInformationSource = "LICENSE_INFORMATION_SOURCE",
  /** License scanning feature. */
  LicenseScanning = "LICENSE_SCANNING",
  /** Linked items epics feature. */
  LinkedItemsEpics = "LINKED_ITEMS_EPICS",
  /** Maintenance mode feature. */
  MaintenanceMode = "MAINTENANCE_MODE",
  /** Mcp server feature. */
  McpServer = "MCP_SERVER",
  /** Measure comment temperature feature. */
  MeasureCommentTemperature = "MEASURE_COMMENT_TEMPERATURE",
  /** Member lock feature. */
  MemberLock = "MEMBER_LOCK",
  /** Merge pipelines feature. */
  MergePipelines = "MERGE_PIPELINES",
  /** Merge request approvers feature. */
  MergeRequestApprovers = "MERGE_REQUEST_APPROVERS",
  /** Merge request performance metrics feature. */
  MergeRequestPerformanceMetrics = "MERGE_REQUEST_PERFORMANCE_METRICS",
  /** Merge request title regex check feature. */
  MergeRequestTitleRegexCheck = "MERGE_REQUEST_TITLE_REGEX_CHECK",
  /** Merge trains feature. */
  MergeTrains = "MERGE_TRAINS",
  /** Metrics reports feature. */
  MetricsReports = "METRICS_REPORTS",
  /** Microsoft group sync feature. */
  MicrosoftGroupSync = "MICROSOFT_GROUP_SYNC",
  /** Milestone charts feature. */
  MilestoneCharts = "MILESTONE_CHARTS",
  /** Minimal access role feature. */
  MinimalAccessRole = "MINIMAL_ACCESS_ROLE",
  /** Multiple alert http integrations feature. */
  MultipleAlertHttpIntegrations = "MULTIPLE_ALERT_HTTP_INTEGRATIONS",
  /** Multiple approval rules feature. */
  MultipleApprovalRules = "MULTIPLE_APPROVAL_RULES",
  /** Multiple group issue boards feature. */
  MultipleGroupIssueBoards = "MULTIPLE_GROUP_ISSUE_BOARDS",
  /** Multiple issue assignees feature. */
  MultipleIssueAssignees = "MULTIPLE_ISSUE_ASSIGNEES",
  /** Multiple merge request assignees feature. */
  MultipleMergeRequestAssignees = "MULTIPLE_MERGE_REQUEST_ASSIGNEES",
  /** Multiple merge request reviewers feature. */
  MultipleMergeRequestReviewers = "MULTIPLE_MERGE_REQUEST_REVIEWERS",
  /** Native secrets management feature. */
  NativeSecretsManagement = "NATIVE_SECRETS_MANAGEMENT",
  /** Observability feature. */
  Observability = "OBSERVABILITY",
  /** Oidc client groups claim feature. */
  OidcClientGroupsClaim = "OIDC_CLIENT_GROUPS_CLAIM",
  /** Okrs feature. */
  Okrs = "OKRS",
  /** Oncall schedules feature. */
  OncallSchedules = "ONCALL_SCHEDULES",
  /** Operations dashboard feature. */
  OperationsDashboard = "OPERATIONS_DASHBOARD",
  /** Orbit feature. */
  Orbit = "ORBIT",
  /** Packages virtual registry feature. */
  PackagesVirtualRegistry = "PACKAGES_VIRTUAL_REGISTRY",
  /** Package forwarding feature. */
  PackageForwarding = "PACKAGE_FORWARDING",
  /** Pages multiple versions feature. */
  PagesMultipleVersions = "PAGES_MULTIPLE_VERSIONS",
  /** Personal access token expiration policy feature. */
  PersonalAccessTokenExpirationPolicy = "PERSONAL_ACCESS_TOKEN_EXPIRATION_POLICY",
  /** Productivity analytics feature. */
  ProductivityAnalytics = "PRODUCTIVITY_ANALYTICS",
  /** Product analytics feature. */
  ProductAnalytics = "PRODUCT_ANALYTICS",
  /** Project level analytics dashboard feature. */
  ProjectLevelAnalyticsDashboard = "PROJECT_LEVEL_ANALYTICS_DASHBOARD",
  /** Project level compliance adherence report feature. */
  ProjectLevelComplianceAdherenceReport = "PROJECT_LEVEL_COMPLIANCE_ADHERENCE_REPORT",
  /** Project level compliance dashboard feature. */
  ProjectLevelComplianceDashboard = "PROJECT_LEVEL_COMPLIANCE_DASHBOARD",
  /** Project level compliance violations report feature. */
  ProjectLevelComplianceViolationsReport = "PROJECT_LEVEL_COMPLIANCE_VIOLATIONS_REPORT",
  /** Project merge request analytics feature. */
  ProjectMergeRequestAnalytics = "PROJECT_MERGE_REQUEST_ANALYTICS",
  /** Project quality summary feature. */
  ProjectQualitySummary = "PROJECT_QUALITY_SUMMARY",
  /** Project saved replies feature. */
  ProjectSavedReplies = "PROJECT_SAVED_REPLIES",
  /** Protected environments feature. */
  ProtectedEnvironments = "PROTECTED_ENVIRONMENTS",
  /** Protected refs for users feature. */
  ProtectedRefsForUsers = "PROTECTED_REFS_FOR_USERS",
  /** Push rules feature. */
  PushRules = "PUSH_RULES",
  /** Quality management feature. */
  QualityManagement = "QUALITY_MANAGEMENT",
  /** Reject non dco commits feature. */
  RejectNonDcoCommits = "REJECT_NON_DCO_COMMITS",
  /** Reject unsigned commits feature. */
  RejectUnsignedCommits = "REJECT_UNSIGNED_COMMITS",
  /** Related epics feature. */
  RelatedEpics = "RELATED_EPICS",
  /** Release evidence test artifacts feature. */
  ReleaseEvidenceTestArtifacts = "RELEASE_EVIDENCE_TEST_ARTIFACTS",
  /** Remote development feature. */
  RemoteDevelopment = "REMOTE_DEVELOPMENT",
  /** Report approver rules feature. */
  ReportApproverRules = "REPORT_APPROVER_RULES",
  /** Repository mirrors feature. */
  RepositoryMirrors = "REPOSITORY_MIRRORS",
  /** Requested changes block merge request feature. */
  RequestedChangesBlockMergeRequest = "REQUESTED_CHANGES_BLOCK_MERGE_REQUEST",
  /** Requirements feature. */
  Requirements = "REQUIREMENTS",
  /** Resource access token feature. */
  ResourceAccessToken = "RESOURCE_ACCESS_TOKEN",
  /** Review merge request feature. */
  ReviewMergeRequest = "REVIEW_MERGE_REQUEST",
  /** Runner maintenance note for namespace feature. */
  RunnerMaintenanceNoteForNamespace = "RUNNER_MAINTENANCE_NOTE_FOR_NAMESPACE",
  /** Runner performance insights for namespace feature. */
  RunnerPerformanceInsightsForNamespace = "RUNNER_PERFORMANCE_INSIGHTS_FOR_NAMESPACE",
  /** Runner upgrade management for namespace feature. */
  RunnerUpgradeManagementForNamespace = "RUNNER_UPGRADE_MANAGEMENT_FOR_NAMESPACE",
  /** Saml group sync feature. */
  SamlGroupSync = "SAML_GROUP_SYNC",
  /** Sarif feature. */
  Sarif = "SARIF",
  /** Sast feature. */
  Sast = "SAST",
  /** Sast advanced feature. */
  SastAdvanced = "SAST_ADVANCED",
  /** Sast custom rulesets feature. */
  SastCustomRulesets = "SAST_CUSTOM_RULESETS",
  /** Sast fp reduction feature. */
  SastFpReduction = "SAST_FP_REDUCTION",
  /** Sast iac feature. */
  SastIac = "SAST_IAC",
  /** Scoped issue board feature. */
  ScopedIssueBoard = "SCOPED_ISSUE_BOARD",
  /** Scoped labels feature. */
  ScopedLabels = "SCOPED_LABELS",
  /** Seat control feature. */
  SeatControl = "SEAT_CONTROL",
  /** Secret detection feature. */
  SecretDetection = "SECRET_DETECTION",
  /** Secret detection validity checks feature. */
  SecretDetectionValidityChecks = "SECRET_DETECTION_VALIDITY_CHECKS",
  /** Secret push protection feature. */
  SecretPushProtection = "SECRET_PUSH_PROTECTION",
  /** Security attributes feature. */
  SecurityAttributes = "SECURITY_ATTRIBUTES",
  /** Security configuration in ui feature. */
  SecurityConfigurationInUi = "SECURITY_CONFIGURATION_IN_UI",
  /** Security dashboard feature. */
  SecurityDashboard = "SECURITY_DASHBOARD",
  /** Security exclusions feature. */
  SecurityExclusions = "SECURITY_EXCLUSIONS",
  /** Security inventory feature. */
  SecurityInventory = "SECURITY_INVENTORY",
  /** Security on demand scans feature. */
  SecurityOnDemandScans = "SECURITY_ON_DEMAND_SCANS",
  /** Security orchestration policies feature. */
  SecurityOrchestrationPolicies = "SECURITY_ORCHESTRATION_POLICIES",
  /** Security scans api feature. */
  SecurityScansApi = "SECURITY_SCANS_API",
  /** Security scan profiles feature. */
  SecurityScanProfiles = "SECURITY_SCAN_PROFILES",
  /** Security training feature. */
  SecurityTraining = "SECURITY_TRAINING",
  /** Self hosted models feature. */
  SelfHostedModels = "SELF_HOSTED_MODELS",
  /** Semantic code search feature. */
  SemanticCodeSearch = "SEMANTIC_CODE_SEARCH",
  /** Send emails from admin area feature. */
  SendEmailsFromAdminArea = "SEND_EMAILS_FROM_ADMIN_AREA",
  /** Smartcard auth feature. */
  SmartcardAuth = "SMARTCARD_AUTH",
  /** Ssh certificates feature. */
  SshCertificates = "SSH_CERTIFICATES",
  /** Ssh key expiration policy feature. */
  SshKeyExpirationPolicy = "SSH_KEY_EXPIRATION_POLICY",
  /** Stale runner cleanup for namespace feature. */
  StaleRunnerCleanupForNamespace = "STALE_RUNNER_CLEANUP_FOR_NAMESPACE",
  /** Status page feature. */
  StatusPage = "STATUS_PAGE",
  /** Subepics feature. */
  Subepics = "SUBEPICS",
  /** Suggested reviewers feature. */
  SuggestedReviewers = "SUGGESTED_REVIEWERS",
  /** Summarize comments feature. */
  SummarizeComments = "SUMMARIZE_COMMENTS",
  /** Summarize mr changes feature. */
  SummarizeMrChanges = "SUMMARIZE_MR_CHANGES",
  /** Summarize new merge request feature. */
  SummarizeNewMergeRequest = "SUMMARIZE_NEW_MERGE_REQUEST",
  /** Summarize review feature. */
  SummarizeReview = "SUMMARIZE_REVIEW",
  /** Swimlanes feature. */
  Swimlanes = "SWIMLANES",
  /** Target branch rules feature. */
  TargetBranchRules = "TARGET_BRANCH_RULES",
  /** Troubleshoot job feature. */
  TroubleshootJob = "TROUBLESHOOT_JOB",
  /** Type of work analytics feature. */
  TypeOfWorkAnalytics = "TYPE_OF_WORK_ANALYTICS",
  /** Unique project download limit feature. */
  UniqueProjectDownloadLimit = "UNIQUE_PROJECT_DOWNLOAD_LIMIT",
  /** Unprotection restrictions feature. */
  UnprotectionRestrictions = "UNPROTECTION_RESTRICTIONS",
  /** Vulnerability finding signatures feature. */
  VulnerabilityFindingSignatures = "VULNERABILITY_FINDING_SIGNATURES",
  /** Wip limits feature. */
  WipLimits = "WIP_LIMITS",
  /** Work item status feature. */
  WorkItemStatus = "WORK_ITEM_STATUS",
  /** Zentao issues integration feature. */
  ZentaoIssuesIntegration = "ZENTAO_ISSUES_INTEGRATION",
}

/** Autogenerated input type of LifecycleAttachWorkItemType */
export type LifecycleAttachWorkItemTypeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the lifecycle to attach the work item type to. */
  lifecycleId: Scalars["WorkItemsStatusesLifecycleID"]["input"];
  /** Namespace path where the lifecycle exists. */
  namespacePath: Scalars["ID"]["input"];
  /** Status mappings from the old lifecycle to the new lifecycle. */
  statusMappings?: InputMaybe<Array<StatusMappingInput>>;
  /** Global ID of the work item type to attach to the lifecycle. */
  workItemTypeId: Scalars["WorkItemsTypeID"]["input"];
};

/** Autogenerated input type of LifecycleCreate */
export type LifecycleCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Index of the default closed status in the statuses array. */
  defaultClosedStatusIndex: Scalars["Int"]["input"];
  /** Index of the default duplicated status in the statuses array. */
  defaultDuplicateStatusIndex: Scalars["Int"]["input"];
  /** Index of the default open status in the statuses array. */
  defaultOpenStatusIndex: Scalars["Int"]["input"];
  /** Name of the lifecycle. */
  name: Scalars["String"]["input"];
  /** Namespace path where the lifecycle will be created. */
  namespacePath: Scalars["ID"]["input"];
  /** Statuses of the lifecycle. Can be existing (with id) or new (without id). */
  statuses: Array<WorkItemStatusInput>;
};

/** Autogenerated input type of LifecycleDelete */
export type LifecycleDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the lifecycle to delete. */
  id: Scalars["WorkItemsStatusesLifecycleID"]["input"];
  /** Namespace path where the lifecycle exists. */
  namespacePath: Scalars["ID"]["input"];
};

/** Autogenerated input type of LifecycleUpdate */
export type LifecycleUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Index of the default closed status in the statuses array. */
  defaultClosedStatusIndex?: InputMaybe<Scalars["Int"]["input"]>;
  /** Index of the default duplicated status in the statuses array. */
  defaultDuplicateStatusIndex?: InputMaybe<Scalars["Int"]["input"]>;
  /** Index of the default open status in the statuses array. */
  defaultOpenStatusIndex?: InputMaybe<Scalars["Int"]["input"]>;
  /** Global ID of the lifecycle to be updated. */
  id: Scalars["WorkItemsStatusesLifecycleID"]["input"];
  /** Name of the lifecycle. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Namespace path where the lifecycle exists. */
  namespacePath: Scalars["ID"]["input"];
  /** Mappings for statuses being removed from the lifecycle. Maps old status to replacement status. */
  statusMappings?: InputMaybe<Array<StatusMappingInput>>;
  /** Statuses of the lifecycle. Can be existing (with id) or new (without id). */
  statuses?: InputMaybe<Array<WorkItemStatusInput>>;
};

/** Autogenerated input type of LinkProjectComplianceViolationIssue */
export type LinkProjectComplianceViolationIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to be linked. */
  issueIid: Scalars["String"]["input"];
  /** Full path of the project the issue belongs to. */
  projectPath: Scalars["ID"]["input"];
  /** Global ID of the project compliance violation. */
  violationId: Scalars["ComplianceManagementProjectsComplianceViolationID"]["input"];
};

/** List limit metric setting */
export enum ListLimitMetric {
  /** Limit list by number and total weight of issues. */
  AllMetrics = "all_metrics",
  /** Limit list by number of issues. */
  IssueCount = "issue_count",
  /** Limit list by total weight of issues. */
  IssueWeights = "issue_weights",
}

/** Autogenerated input type of MarkAsSpamSnippet */
export type MarkAsSpamSnippetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the snippet to update. */
  id: Scalars["SnippetID"]["input"];
};

/** Autogenerated input type of MavenCacheEntryDelete */
export type MavenCacheEntryDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the cache entry. */
  id: Scalars["String"]["input"];
};

/** Autogenerated input type of MavenUpstreamCacheDelete */
export type MavenUpstreamCacheDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Maven virtual registry upstream. */
  id: Scalars["VirtualRegistriesPackagesMavenUpstreamID"]["input"];
};

/** Autogenerated input type of MavenUpstreamCreate */
export type MavenUpstreamCreateInput = {
  /** Cache validity period. Defaults to 24 hours. */
  cacheValidityHours?: InputMaybe<Scalars["Int"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the upstream registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the upstream registry. */
  id: Scalars["VirtualRegistriesPackagesMavenRegistryID"]["input"];
  /** Metadata cache validity period. Defaults to 24 hours. */
  metadataCacheValidityHours?: InputMaybe<Scalars["Int"]["input"]>;
  /** Name of upstream registry. */
  name: Scalars["String"]["input"];
  /** Password of the upstream registry. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of the upstream registry. */
  url: Scalars["String"]["input"];
  /** Username of the upstream registry. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of MavenUpstreamDelete */
export type MavenUpstreamDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the upstream to be deleted. */
  id: Scalars["VirtualRegistriesPackagesMavenUpstreamID"]["input"];
};

/** Pattern type for Maven upstream rules. */
export enum MavenUpstreamPatternType {
  /** Regular expression pattern type. */
  Regex = "REGEX",
  /** Wildcard pattern type. */
  Wildcard = "WILDCARD",
}

/** Target coordinate for Maven upstream rules. */
export enum MavenUpstreamTargetCoordinate {
  /** Artifact ID coordinate. */
  ArtifactId = "ARTIFACT_ID",
  /** Group ID coordinate. */
  GroupId = "GROUP_ID",
  /** Version coordinate. */
  Version = "VERSION",
}

/** Autogenerated input type of MavenUpstreamUpdate */
export type MavenUpstreamUpdateInput = {
  /** Cache validity period. */
  cacheValidityHours?: InputMaybe<Scalars["Int"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the upstream registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the upstream registry. */
  id: Scalars["VirtualRegistriesPackagesMavenUpstreamID"]["input"];
  /** Metadata cache validity period. */
  metadataCacheValidityHours?: InputMaybe<Scalars["Int"]["input"]>;
  /** Name of upstream registry. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Password of the upstream registry. */
  password?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of the upstream registry. */
  url?: InputMaybe<Scalars["String"]["input"]>;
  /** Username of the upstream registry. */
  username?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of MavenVirtualRegistryCacheDelete */
export type MavenVirtualRegistryCacheDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Maven virtual registry. */
  id: Scalars["VirtualRegistriesPackagesMavenRegistryID"]["input"];
};

/** Autogenerated input type of MavenVirtualRegistryCreate */
export type MavenVirtualRegistryCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the virtual registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Name of virtual registry. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of MavenVirtualRegistryDelete */
export type MavenVirtualRegistryDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Maven virtual registry to be deleted. */
  id: Scalars["VirtualRegistriesPackagesMavenRegistryID"]["input"];
};

/** Autogenerated input type of MavenVirtualRegistryUpdate */
export type MavenVirtualRegistryUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the virtual registry. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Maven virtual registry to be updated. */
  id: Scalars["VirtualRegistriesPackagesMavenRegistryID"]["input"];
  /** Name of virtual registry. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of MavenVirtualRegistryUpstreamDelete */
export type MavenVirtualRegistryUpstreamDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Maven virtual registry upstream. */
  upstreamId: Scalars["VirtualRegistriesPackagesMavenRegistryUpstreamID"]["input"];
};

/** Autogenerated input type of MavenVirtualRegistryUpstreamUpdate */
export type MavenVirtualRegistryUpstreamUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Maven virtual registry upstream. */
  id: Scalars["VirtualRegistriesPackagesMavenRegistryUpstreamID"]["input"];
  /** Priority order of an upstream within a virtual registry. */
  position: Scalars["Int"]["input"];
};

/** Possible identifier types for a measurement */
export enum MeasurementIdentifier {
  /** Group count. */
  Groups = "GROUPS",
  /** Issue count. */
  Issues = "ISSUES",
  /** Merge request count. */
  MergeRequests = "MERGE_REQUESTS",
  /** Pipeline count. */
  Pipelines = "PIPELINES",
  /** Pipeline count with canceled status. */
  PipelinesCanceled = "PIPELINES_CANCELED",
  /** Pipeline count with failed status. */
  PipelinesFailed = "PIPELINES_FAILED",
  /** Pipeline count with skipped status. */
  PipelinesSkipped = "PIPELINES_SKIPPED",
  /** Pipeline count with success status. */
  PipelinesSucceeded = "PIPELINES_SUCCEEDED",
  /** Project count. */
  Projects = "PROJECTS",
  /** User count. */
  Users = "USERS",
}

/** Access level of a group or project member */
export enum MemberAccessLevel {
  /** The Developer role gives users access to contribute code while restricting sensitive administrative actions. */
  Developer = "DEVELOPER",
  /** The Guest role is for users who need visibility into a project or group but should not have the ability to make changes, such as external stakeholders. */
  Guest = "GUEST",
  /** The Maintainer role is primarily used for managing code reviews, approvals, and administrative settings for projects. This role can also manage project memberships. */
  Maintainer = "MAINTAINER",
  /** The Minimal Access role is for users who need the least amount of access into groups and projects. You can assign this role as a default, before giving a user another role with more permissions. */
  MinimalAccess = "MINIMAL_ACCESS",
  /** The Owner role is typically assigned to the individual or team responsible for managing and maintaining the group or creating the project. This role has the highest level of administrative control, and can manage all aspects of the group or project, including managing other Owners. */
  Owner = "OWNER",
  /** The Planner role is suitable for team members who need to manage projects and track work items but do not need to contribute code. */
  Planner = "PLANNER",
  /** The Reporter role is suitable for team members who need to stay informed about a project or group but do not actively contribute code. */
  Reporter = "REPORTER",
  /** The Security Manager role is for security team members who need to view and manage security features for the group or project. */
  SecurityManager = "SECURITY_MANAGER",
}

/** Name of access levels of a group or project member */
export enum MemberAccessLevelName {
  /** Developer access. */
  Developer = "DEVELOPER",
  /** Guest access. */
  Guest = "GUEST",
  /** Maintainer access. */
  Maintainer = "MAINTAINER",
  /** Owner access. */
  Owner = "OWNER",
  /** Planner access. */
  Planner = "PLANNER",
  /** Reporter access. */
  Reporter = "REPORTER",
  /** Security Manager access. */
  SecurityManager = "SECURITY_MANAGER",
}

/** Types of member approval status. */
export enum MemberApprovalStatusType {
  /** Approved promotion request. */
  Approved = "APPROVED",
  /** Denied promotion request. */
  Denied = "DENIED",
  /** Pending promotion request. */
  Pending = "PENDING",
}

/** Autogenerated input type of MemberRoleAdminCreate */
export type MemberRoleAdminCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the member role. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the member role. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** List of all customizable admin permissions. */
  permissions?: InputMaybe<Array<MemberRoleAdminPermission>>;
};

/** Autogenerated input type of MemberRoleAdminDelete */
export type MemberRoleAdminDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the admin member role to delete. */
  id: Scalars["MemberRoleID"]["input"];
};

/** Member role admin permission */
export enum MemberRoleAdminPermission {
  /** Read CI/CD details for runners and jobs in the Admin Area. */
  ReadAdminCicd = "READ_ADMIN_CICD",
  /** Read group details in the Admin Area. */
  ReadAdminGroups = "READ_ADMIN_GROUPS",
  /** Read system information such as background migrations, health checks, and Gitaly in the Admin Area. */
  ReadAdminMonitoring = "READ_ADMIN_MONITORING",
  /** Read project details in the Admin Area. */
  ReadAdminProjects = "READ_ADMIN_PROJECTS",
  /** Read subscription details in the Admin area. */
  ReadAdminSubscription = "READ_ADMIN_SUBSCRIPTION",
  /** Read the user list and user details in the Admin area. */
  ReadAdminUsers = "READ_ADMIN_USERS",
}

/** Autogenerated input type of MemberRoleAdminUpdate */
export type MemberRoleAdminUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the member role. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the member role to mutate. */
  id: Scalars["MemberRoleID"]["input"];
  /** Name of the member role. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** List of all customizable admin permissions. */
  permissions?: InputMaybe<Array<MemberRoleAdminPermission>>;
};

/** Autogenerated input type of MemberRoleCreate */
export type MemberRoleCreateInput = {
  /** Base access level for the custom role. */
  baseAccessLevel: MemberRolesAccessLevel;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the member role. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Group the member role to mutate is in. Required for SaaS. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Name of the member role. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** List of all customizable permissions. */
  permissions?: InputMaybe<Array<MemberRolePermission>>;
};

/** Autogenerated input type of MemberRoleDelete */
export type MemberRoleDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the member role to delete. */
  id: Scalars["MemberRoleID"]["input"];
};

/** Member role permission */
export enum MemberRolePermission {
  /** Create, edit, and delete custom agents and flows in the AI catalog. */
  AdminAiCatalogItem = "ADMIN_AI_CATALOG_ITEM",
  /** Enable, disable, and configure custom agents and flows from the AI catalog for a project. */
  AdminAiCatalogItemConsumer = "ADMIN_AI_CATALOG_ITEM_CONSUMER",
  /** Create, read, update, and delete CI/CD variables. */
  AdminCicdVariables = "ADMIN_CICD_VARIABLES",
  /** Create, read, update, and delete compliance frameworks. Users with this permission can also assign a compliance framework label to a project, and set the default framework of a group. */
  AdminComplianceFramework = "ADMIN_COMPLIANCE_FRAMEWORK",
  /** Add or remove users in a group, and assign roles to users. When assigning a role, users with this custom permission must select a role that has the same or fewer permissions as the default role used as the base for their custom role. */
  AdminGroupMember = "ADMIN_GROUP_MEMBER",
  /** Create, read, update, and delete integrations with external applications. */
  AdminIntegrations = "ADMIN_INTEGRATIONS",
  /** Allows approval of merge requests. */
  AdminMergeRequest = "ADMIN_MERGE_REQUEST",
  /** Create, read, update, and delete protected branches for a project. */
  AdminProtectedBranch = "ADMIN_PROTECTED_BRANCH",
  /** Create, read, update, and delete protected environments */
  AdminProtectedEnvironments = "ADMIN_PROTECTED_ENVIRONMENTS",
  /** Configure push rules for repositories at the group or project level. */
  AdminPushRules = "ADMIN_PUSH_RULES",
  /** Create, view, edit, and delete group or project Runners. Includes configuring Runner settings. */
  AdminRunners = "ADMIN_RUNNERS",
  /** Manage the security categories and attributes belonging to a top-level group. Also requires the `read_security_attribute` permission. */
  AdminSecurityAttributes = "ADMIN_SECURITY_ATTRIBUTES",
  /** Execute terraform commands, lock/unlock terraform state files, and remove file versions. */
  AdminTerraformState = "ADMIN_TERRAFORM_STATE",
  /** Edit the status, linked issue, and severity of a vulnerability object. Also requires the `read_vulnerability` permission. */
  AdminVulnerability = "ADMIN_VULNERABILITY",
  /** Manage webhooks */
  AdminWebHook = "ADMIN_WEB_HOOK",
  /** Apply security scan profiles. */
  ApplySecurityScanProfiles = "APPLY_SECURITY_SCAN_PROFILES",
  /** Allows archiving of projects. */
  ArchiveProject = "ARCHIVE_PROJECT",
  /** Delete packages and package files in the package registry. */
  DestroyPackage = "DESTROY_PACKAGE",
  /** Manage deploy tokens at the group or project level. */
  ManageDeployTokens = "MANAGE_DEPLOY_TOKENS",
  /** Create, read, update, and delete group access tokens. When creating a token, users with this custom permission must select a role for that token that has the same or fewer permissions as the default role used as the base for the custom role. */
  ManageGroupAccessTokens = "MANAGE_GROUP_ACCESS_TOKENS",
  /** Configure merge request settings at the group or project level. Group actions include managing merge checks and approval settings. Project actions include managing MR configurations, approval rules and settings, and branch targets. In order to enable Suggested reviewers, the "Manage project access tokens" custom permission needs to be enabled. */
  ManageMergeRequestSettings = "MANAGE_MERGE_REQUEST_SETTINGS",
  /** Create, read, update, and delete project access tokens. When creating a token, users with this custom permission must select a role for that token that has the same or fewer permissions as the default role used as the base for the custom role. */
  ManageProjectAccessTokens = "MANAGE_PROJECT_ACCESS_TOKENS",
  /** Allows linking security policy projects. */
  ManageSecurityPolicyLink = "MANAGE_SECURITY_POLICY_LINK",
  /** Read CI/CD details for runners and jobs in the Admin Area. */
  ReadAdminCicd = "READ_ADMIN_CICD",
  /** Read group details in the Admin Area. */
  ReadAdminGroups = "READ_ADMIN_GROUPS",
  /** Read system information such as background migrations, health checks, and Gitaly in the Admin Area. */
  ReadAdminMonitoring = "READ_ADMIN_MONITORING",
  /** Read project details in the Admin Area. */
  ReadAdminProjects = "READ_ADMIN_PROJECTS",
  /** Read subscription details in the Admin area. */
  ReadAdminSubscription = "READ_ADMIN_SUBSCRIPTION",
  /** Read the user list and user details in the Admin area. */
  ReadAdminUsers = "READ_ADMIN_USERS",
  /** Read GitLab Duo Agent Platform artifacts, including audit events and session metadata, that are exposed through the agent artifacts dashboard. */
  ReadAgentArtifacts = "READ_AGENT_ARTIFACTS",
  /** Allows read-only access to the source code in the user interface. Does not allow users to edit or download repository archives, clone or pull repositories, view source code in an IDE, or view merge requests for private projects. You can download individual files because read-only access inherently grants the ability to make a local copy of the file. */
  ReadCode = "READ_CODE",
  /** Read compliance capabilities including adherence, violations, and frameworks for groups and projects. */
  ReadComplianceDashboard = "READ_COMPLIANCE_DASHBOARD",
  /** Read CRM contact. */
  ReadCrmContact = "READ_CRM_CONTACT",
  /** Allows read-only access to the dependencies and licenses. */
  ReadDependency = "READ_DEPENDENCY",
  /** Allows read-only access to group or project runners, including the runner fleet dashboard. */
  ReadRunners = "READ_RUNNERS",
  /** Allows read-only access to the security categories and attributes that belong to a top-level group. */
  ReadSecurityAttribute = "READ_SECURITY_ATTRIBUTE",
  /** Read security scan profiles. */
  ReadSecurityScanProfiles = "READ_SECURITY_SCAN_PROFILES",
  /** Allows read access to virtual registries at the group level. Enables users to resolve packages through the virtual registry without requiring broader group membership permissions. Only works on top level groups. */
  ReadVirtualRegistry = "READ_VIRTUAL_REGISTRY",
  /** Read vulnerability reports and security dashboards. */
  ReadVulnerability = "READ_VULNERABILITY",
  /** Ability to delete or restore a subgroup. This ability does not allow deleting top-level groups. Review the retention period settings to prevent accidental deletion. */
  RemoveGroup = "REMOVE_GROUP",
  /** Allows deletion of projects. */
  RemoveProject = "REMOVE_PROJECT",
  /** Update security AI workflow settings such as SAST Vulnerability Resolution. Also requires the `read_vulnerability` permission. */
  UpdateSecAiWorkflowSettings = "UPDATE_SEC_AI_WORKFLOW_SETTINGS",
}

/** Member role standard permission */
export enum MemberRoleStandardPermission {
  /** Create, edit, and delete custom agents and flows in the AI catalog. */
  AdminAiCatalogItem = "ADMIN_AI_CATALOG_ITEM",
  /** Enable, disable, and configure custom agents and flows from the AI catalog for a project. */
  AdminAiCatalogItemConsumer = "ADMIN_AI_CATALOG_ITEM_CONSUMER",
  /** Create, read, update, and delete CI/CD variables. */
  AdminCicdVariables = "ADMIN_CICD_VARIABLES",
  /** Create, read, update, and delete compliance frameworks. Users with this permission can also assign a compliance framework label to a project, and set the default framework of a group. */
  AdminComplianceFramework = "ADMIN_COMPLIANCE_FRAMEWORK",
  /** Add or remove users in a group, and assign roles to users. When assigning a role, users with this custom permission must select a role that has the same or fewer permissions as the default role used as the base for their custom role. */
  AdminGroupMember = "ADMIN_GROUP_MEMBER",
  /** Create, read, update, and delete integrations with external applications. */
  AdminIntegrations = "ADMIN_INTEGRATIONS",
  /** Allows approval of merge requests. */
  AdminMergeRequest = "ADMIN_MERGE_REQUEST",
  /** Create, read, update, and delete protected branches for a project. */
  AdminProtectedBranch = "ADMIN_PROTECTED_BRANCH",
  /** Create, read, update, and delete protected environments */
  AdminProtectedEnvironments = "ADMIN_PROTECTED_ENVIRONMENTS",
  /** Configure push rules for repositories at the group or project level. */
  AdminPushRules = "ADMIN_PUSH_RULES",
  /** Create, view, edit, and delete group or project Runners. Includes configuring Runner settings. */
  AdminRunners = "ADMIN_RUNNERS",
  /** Manage the security categories and attributes belonging to a top-level group. Also requires the `read_security_attribute` permission. */
  AdminSecurityAttributes = "ADMIN_SECURITY_ATTRIBUTES",
  /** Execute terraform commands, lock/unlock terraform state files, and remove file versions. */
  AdminTerraformState = "ADMIN_TERRAFORM_STATE",
  /** Edit the status, linked issue, and severity of a vulnerability object. Also requires the `read_vulnerability` permission. */
  AdminVulnerability = "ADMIN_VULNERABILITY",
  /** Manage webhooks */
  AdminWebHook = "ADMIN_WEB_HOOK",
  /** Apply security scan profiles. */
  ApplySecurityScanProfiles = "APPLY_SECURITY_SCAN_PROFILES",
  /** Allows archiving of projects. */
  ArchiveProject = "ARCHIVE_PROJECT",
  /** Delete packages and package files in the package registry. */
  DestroyPackage = "DESTROY_PACKAGE",
  /** Manage deploy tokens at the group or project level. */
  ManageDeployTokens = "MANAGE_DEPLOY_TOKENS",
  /** Create, read, update, and delete group access tokens. When creating a token, users with this custom permission must select a role for that token that has the same or fewer permissions as the default role used as the base for the custom role. */
  ManageGroupAccessTokens = "MANAGE_GROUP_ACCESS_TOKENS",
  /** Configure merge request settings at the group or project level. Group actions include managing merge checks and approval settings. Project actions include managing MR configurations, approval rules and settings, and branch targets. In order to enable Suggested reviewers, the "Manage project access tokens" custom permission needs to be enabled. */
  ManageMergeRequestSettings = "MANAGE_MERGE_REQUEST_SETTINGS",
  /** Create, read, update, and delete project access tokens. When creating a token, users with this custom permission must select a role for that token that has the same or fewer permissions as the default role used as the base for the custom role. */
  ManageProjectAccessTokens = "MANAGE_PROJECT_ACCESS_TOKENS",
  /** Allows linking security policy projects. */
  ManageSecurityPolicyLink = "MANAGE_SECURITY_POLICY_LINK",
  /** Read GitLab Duo Agent Platform artifacts, including audit events and session metadata, that are exposed through the agent artifacts dashboard. */
  ReadAgentArtifacts = "READ_AGENT_ARTIFACTS",
  /** Allows read-only access to the source code in the user interface. Does not allow users to edit or download repository archives, clone or pull repositories, view source code in an IDE, or view merge requests for private projects. You can download individual files because read-only access inherently grants the ability to make a local copy of the file. */
  ReadCode = "READ_CODE",
  /** Read compliance capabilities including adherence, violations, and frameworks for groups and projects. */
  ReadComplianceDashboard = "READ_COMPLIANCE_DASHBOARD",
  /** Read CRM contact. */
  ReadCrmContact = "READ_CRM_CONTACT",
  /** Allows read-only access to the dependencies and licenses. */
  ReadDependency = "READ_DEPENDENCY",
  /** Allows read-only access to group or project runners, including the runner fleet dashboard. */
  ReadRunners = "READ_RUNNERS",
  /** Allows read-only access to the security categories and attributes that belong to a top-level group. */
  ReadSecurityAttribute = "READ_SECURITY_ATTRIBUTE",
  /** Read security scan profiles. */
  ReadSecurityScanProfiles = "READ_SECURITY_SCAN_PROFILES",
  /** Allows read access to virtual registries at the group level. Enables users to resolve packages through the virtual registry without requiring broader group membership permissions. Only works on top level groups. */
  ReadVirtualRegistry = "READ_VIRTUAL_REGISTRY",
  /** Read vulnerability reports and security dashboards. */
  ReadVulnerability = "READ_VULNERABILITY",
  /** Ability to delete or restore a subgroup. This ability does not allow deleting top-level groups. Review the retention period settings to prevent accidental deletion. */
  RemoveGroup = "REMOVE_GROUP",
  /** Allows deletion of projects. */
  RemoveProject = "REMOVE_PROJECT",
  /** Update security AI workflow settings such as SAST Vulnerability Resolution. Also requires the `read_vulnerability` permission. */
  UpdateSecAiWorkflowSettings = "UPDATE_SEC_AI_WORKFLOW_SETTINGS",
}

/** Autogenerated input type of MemberRoleToUserAssign */
export type MemberRoleToUserAssignInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Global ID of the custom role to be assigned to a user.
   *             Admin roles will be unassigned from the user if omitted or set as NULL.
   */
  memberRoleId?: InputMaybe<Scalars["MemberRoleID"]["input"]>;
  /** Global ID of the user to be assigned to a custom role. */
  userId: Scalars["UserID"]["input"];
};

/** Autogenerated input type of MemberRoleUpdate */
export type MemberRoleUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the member role. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the member role to mutate. */
  id: Scalars["MemberRoleID"]["input"];
  /** Name of the member role. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** List of all customizable permissions. */
  permissions?: InputMaybe<Array<MemberRolePermission>>;
};

/** Access level of a group or project member */
export enum MemberRolesAccessLevel {
  /** The Developer role gives users access to contribute code while restricting sensitive administrative actions. */
  Developer = "DEVELOPER",
  /** The Guest role is for users who need visibility into a project or group but should not have the ability to make changes, such as external stakeholders. */
  Guest = "GUEST",
  /** The Maintainer role is primarily used for managing code reviews, approvals, and administrative settings for projects. This role can also manage project memberships. */
  Maintainer = "MAINTAINER",
  /** The Minimal Access role is for users who need the least amount of access into groups and projects. You can assign this role as a default, before giving a user another role with more permissions. */
  MinimalAccess = "MINIMAL_ACCESS",
  /** The Planner role is suitable for team members who need to manage projects and track work items but do not need to contribute code. */
  Planner = "PLANNER",
  /** The Reporter role is suitable for team members who need to stay informed about a project or group but do not actively contribute code. */
  Reporter = "REPORTER",
  /** The Security Manager role is for security team members who need to view and manage security features for the group or project. */
  SecurityManager = "SECURITY_MANAGER",
}

/** Values for ordering member roles by a specific field */
export enum MemberRolesOrderBy {
  /** Ordered by creation time. */
  CreatedAt = "CREATED_AT",
  /** Ordered by id. */
  Id = "ID",
  /** Ordered by name. */
  Name = "NAME",
}

/** Values for sorting members */
export enum MemberSort {
  /** Access level ascending order. */
  AccessLevelAsc = "ACCESS_LEVEL_ASC",
  /** Access level descending order. */
  AccessLevelDesc = "ACCESS_LEVEL_DESC",
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /** User's full name ascending order. */
  UserFullNameAsc = "USER_FULL_NAME_ASC",
  /** User's full name descending order. */
  UserFullNameDesc = "USER_FULL_NAME_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Defines which user roles, users, or groups can merge into a protected branch. */
export type MergeAccessLevelInput = {
  /** Access level allowed to perform action. */
  accessLevel?: InputMaybe<Scalars["Int"]["input"]>;
  /** Group associated with the access level. */
  groupId?: InputMaybe<Scalars["GroupID"]["input"]>;
  /**
   * Custom member role associated with the access level. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  memberRoleId?: InputMaybe<Scalars["MemberRoleID"]["input"]>;
  /** User associated with the access level. */
  userId?: InputMaybe<Scalars["UserID"]["input"]>;
};

/** Autogenerated input type of MergeRequestAccept */
export type MergeRequestAcceptInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Custom merge commit message. */
  commitMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** HEAD SHA at the time when the merge was requested. */
  sha: Scalars["String"]["input"];
  /** Should the source branch be removed. */
  shouldRemoveSourceBranch?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Squash commits on the source branch before merge. */
  squash?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Custom squash commit message (if squash is true). */
  squashCommitMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** How to merge the merge request. */
  strategy?: InputMaybe<MergeStrategyEnum>;
};

/** Autogenerated input type of MergeRequestBypassSecurityPolicy */
export type MergeRequestBypassSecurityPolicyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Reason for bypassing the security policy. */
  reason: Scalars["String"]["input"];
  /** ID of the security policy to bypass. */
  securityPolicyIds: Array<Scalars["ID"]["input"]>;
};

/** Autogenerated input type of MergeRequestCreate */
export type MergeRequestCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the merge request (Markdown rendered as HTML for caching). */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Labels of the merge request. */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Date after which the merge request can be merged. */
  mergeAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Project full path the merge request is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Indicates if the source branch of the merge request will be deleted after merge. */
  removeSourceBranch?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Source branch of the merge request. */
  sourceBranch: Scalars["String"]["input"];
  /** Target branch of the merge request. */
  targetBranch: Scalars["String"]["input"];
  /** Title of the merge request. */
  title: Scalars["String"]["input"];
};

/** Autogenerated input type of MergeRequestCreateWorkItemRelations */
export type MergeRequestCreateWorkItemRelationsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Type of relationship to create. Defaults to RELATED. MENTIONED relations are managed automatically and cannot be created. */
  linkType?: InputMaybe<MergeRequestWorkItemLinkType>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Global IDs of the work items to link. */
  workItemIds: Array<Scalars["WorkItemID"]["input"]>;
};

/** Autogenerated input type of MergeRequestDestroyRequestedChanges */
export type MergeRequestDestroyRequestedChangesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestDestroyWorkItemRelations */
export type MergeRequestDestroyWorkItemRelationsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the relations to remove. */
  ids: Array<Scalars["MergeRequestsClosingIssuesID"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** New state to apply to a merge request. */
export enum MergeRequestNewState {
  /** Close the merge request if it is open. */
  Closed = "CLOSED",
  /** Open the merge request if it is closed. */
  Open = "OPEN",
}

/** Autogenerated input type of MergeRequestRequestChanges */
export type MergeRequestRequestChangesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestResyncSecurityPolicies */
export type MergeRequestResyncSecurityPoliciesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to re-evaluate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request belongs to. */
  projectPath: Scalars["ID"]["input"];
};

/** State of a review of a GitLab merge request. */
export enum MergeRequestReviewState {
  /** Merge request reviewer has approved the changes. */
  Approved = "APPROVED",
  /** Merge request reviewer has requested changes. */
  RequestedChanges = "REQUESTED_CHANGES",
  /** Merge request reviewer has reviewed. */
  Reviewed = "REVIEWED",
  /** Merge request reviewer has started a review. */
  ReviewStarted = "REVIEW_STARTED",
  /** Merge request reviewer removed their approval of the changes. */
  Unapproved = "UNAPPROVED",
  /** Awaiting review from merge request reviewer. */
  Unreviewed = "UNREVIEWED",
}

/** Autogenerated input type of MergeRequestReviewerRereview */
export type MergeRequestReviewerRereviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /**
   * User ID for the user that has been requested for a new review.
   *
   */
  userId: Scalars["UserID"]["input"];
};

/** Autogenerated input type of MergeRequestSetAssignees */
export type MergeRequestSetAssigneesInput = {
  /** Usernames to assign to the resource. Replaces existing assignees by default. */
  assigneeUsernames: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Operation to perform. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestSetBlockingMergeRequests */
export type MergeRequestSetBlockingMergeRequestsInput = {
  /** Array of blocking merge request references (e.g., "!123", "project!456"). */
  blockingMergeRequestReferences: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestSetDraft */
export type MergeRequestSetDraftInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Whether or not to set the merge request as a draft.
   *
   */
  draft: Scalars["Boolean"]["input"];
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestSetLabels */
export type MergeRequestSetLabelsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /**
   * Label IDs to set. Replaces existing labels by default.
   *
   */
  labelIds: Array<Scalars["LabelID"]["input"]>;
  /**
   * Changes the operation mode. Defaults to REPLACE.
   *
   */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestSetLocked */
export type MergeRequestSetLockedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /**
   * Whether or not to lock the merge request.
   *
   */
  locked: Scalars["Boolean"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestSetMilestone */
export type MergeRequestSetMilestoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /**
   * Milestone to assign to the merge request.
   *
   */
  milestoneId?: InputMaybe<Scalars["MilestoneID"]["input"]>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MergeRequestSetReviewers */
export type MergeRequestSetReviewersInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Operation to perform. Defaults to REPLACE. */
  operationMode?: InputMaybe<MutationOperationMode>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Usernames of reviewers to assign. Replaces existing reviewers by default. */
  reviewerUsernames: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of MergeRequestSetSubscription */
export type MergeRequestSetSubscriptionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Desired state of the subscription. */
  subscribedState: Scalars["Boolean"]["input"];
};

/** Values for sorting merge requests */
export enum MergeRequestSort {
  /** Closed time by ascending order. */
  ClosedAtAsc = "CLOSED_AT_ASC",
  /** Closed time by descending order. */
  ClosedAtDesc = "CLOSED_AT_DESC",
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Label priority by ascending order. */
  LabelPriorityAsc = "LABEL_PRIORITY_ASC",
  /** Label priority by descending order. */
  LabelPriorityDesc = "LABEL_PRIORITY_DESC",
  /** Merge time by ascending order. */
  MergedAtAsc = "MERGED_AT_ASC",
  /** Merge time by descending order. */
  MergedAtDesc = "MERGED_AT_DESC",
  /** Milestone due date by ascending order. */
  MilestoneDueAsc = "MILESTONE_DUE_ASC",
  /** Milestone due date by descending order. */
  MilestoneDueDesc = "MILESTONE_DUE_DESC",
  /** Number of upvotes (awarded "thumbs up" emoji) by ascending order. */
  PopularityAsc = "POPULARITY_ASC",
  /** Number of upvotes (awarded "thumbs up" emoji) by descending order. */
  PopularityDesc = "POPULARITY_DESC",
  /** Priority by ascending order. */
  PriorityAsc = "PRIORITY_ASC",
  /** Priority by descending order. */
  PriorityDesc = "PRIORITY_DESC",
  /** Title by ascending order. */
  TitleAsc = "TITLE_ASC",
  /** Title by descending order. */
  TitleDesc = "TITLE_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** State of a GitLab merge request */
export enum MergeRequestState {
  /** All available. */
  All = "all",
  /** In closed state. */
  Closed = "closed",
  /** Discussion has been locked. */
  Locked = "locked",
  /** Merge request has been merged. */
  Merged = "merged",
  /** Opened merge request. */
  Opened = "opened",
}

/** Autogenerated input type of MergeRequestUpdateApprovalRule */
export type MergeRequestUpdateApprovalRuleInput = {
  /** ID of an approval rule. */
  approvalRuleId: Scalars["Int"]["input"];
  /** Number of required approvals for a given rule. */
  approvalsRequired: Scalars["Int"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of groups as approvers. */
  groupIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Name of the approval rule. */
  name: Scalars["String"]["input"];
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Whether hidden groups should be removed. */
  removeHiddenGroups?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** IDs of users as approvers. */
  userIds?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of MergeRequestUpdate */
export type MergeRequestUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the merge request (Markdown rendered as HTML for caching). */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the merge request to mutate. */
  iid: Scalars["String"]["input"];
  /** Date after which the merge request can be merged. */
  mergeAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Override all requested changes. Can only be set by users who have permissionto merge this merge request. */
  overrideRequestedChanges?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Project the merge request to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Indicates if the source branch of the merge request will be deleted after merge. */
  removeSourceBranch?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Action to perform to change the state. */
  state?: InputMaybe<MergeRequestNewState>;
  /** Target branch of the merge request. */
  targetBranch?: InputMaybe<Scalars["String"]["input"]>;
  /** Estimated time to complete the merge request. Use `null` or `0` to remove the current estimate. */
  timeEstimate?: InputMaybe<Scalars["String"]["input"]>;
  /** Title of the merge request. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Type of relationship between a merge request and a work item */
export enum MergeRequestWorkItemLinkType {
  /** Work item will be closed when the merge request is merged. */
  Closes = "CLOSES",
  /** Work item is mentioned in the merge request but will not be closed. */
  Mentioned = "MENTIONED",
  /** Work item is related to the merge request but will not be closed. */
  Related = "RELATED",
}

/** Values for merge request dashboard list type */
export enum MergeRequestsDashboardListType {
  /** Action based list rendering. */
  ActionBased = "ACTION_BASED",
  /** Role based list rendering. */
  RoleBased = "ROLE_BASED",
}

export type MergeRequestsResolverNegatedParams = {
  /** Filters merge requests to exclude any that are approved by usernames in the given array. */
  approvedBy?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters merge requests to exclude any that are assigned to the usernames in the given array. */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters merge requests to exclude any that are authored by the given user. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** Filters merge requests to exclude any that have the labels provided in the given array. */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Filters merge requests to exclude any that have the labels provided in the given array. Deprecated in GitLab 17.7: Use `labelName`.
   * @deprecated Use `labelName`. Deprecated in GitLab 17.7.
   */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters merge requests to those not in the given milestone. */
  milestoneTitle?: InputMaybe<Scalars["String"]["input"]>;
  /** Filters merge requests to those without the given reaction from the authenticated user. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filters out merge requests to those that do not have the reviewer as the only assigned reviewer. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  onlyReviewer?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filters merge requests to those without the given release tag. */
  releaseTag?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filters merge requests to those where a reviewer does not have the provided state. Introduced in GitLab 17.9: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.9.
   */
  reviewStates?: InputMaybe<Array<MergeRequestReviewState>>;
  /** Filters merge requests to those not reviewed by the given user. */
  reviewerUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** Filters merge requests to exclude the source branch names provided in the given array. */
  sourceBranches?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters merge requests to exclude the target branch names provided in the given array. */
  targetBranches?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Representation of whether a GitLab merge request can be merged. */
export enum MergeStatus {
  /** There are conflicts between the source and target branches. */
  CannotBeMerged = "CANNOT_BE_MERGED",
  /** Currently unchecked. The previous state was `CANNOT_BE_MERGED`. */
  CannotBeMergedRecheck = "CANNOT_BE_MERGED_RECHECK",
  /** There are no conflicts between the source and target branches. */
  CanBeMerged = "CAN_BE_MERGED",
  /** Currently checking for mergeability. */
  Checking = "CHECKING",
  /** Merge status has not been checked. */
  Unchecked = "UNCHECKED",
}

export enum MergeStrategyEnum {
  /** Use the add_to_merge_train_when_checks_pass merge strategy. */
  AddToMergeTrainWhenChecksPass = "ADD_TO_MERGE_TRAIN_WHEN_CHECKS_PASS",
  /** Use the merge_train merge strategy. */
  MergeTrain = "MERGE_TRAIN",
  /** Use the merge_when_checks_pass merge strategy. */
  MergeWhenChecksPass = "MERGE_WHEN_CHECKS_PASS",
}

/** Merge train enforcement levels for a project. */
export enum MergeTrainEnforcement {
  /** Users with permission to merge can bypass the merge train through the UI or API. */
  AllowBypass = "ALLOW_BYPASS",
  /** All merge requests must go through the merge train. The merge train cannot be bypassed. */
  EnforceForAllUsers = "ENFORCE_FOR_ALL_USERS",
  /** All merge requests must go through the merge train. Owners and administrators can bypass the merge train for individual merge requests. */
  EnforceWithOwnerOverride = "ENFORCE_WITH_OWNER_OVERRIDE",
}

export enum MergeTrainStatus {
  /** Active merge train. */
  Active = "ACTIVE",
  /** Completed merge train. */
  Completed = "COMPLETED",
}

/** Autogenerated input type of MergeTrainsDeleteCar */
export type MergeTrainsDeleteCarInput = {
  /** Global ID of the car. */
  carId: Scalars["MergeTrainsCarID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
};

/** Representation of mergeability check identifier. */
export enum MergeabilityCheckIdentifier {
  /** Checks whether CI has passed */
  CiMustPass = "CI_MUST_PASS",
  /** Checks source branch exists and contains commits. */
  CommitsStatus = "COMMITS_STATUS",
  /** Checks whether the merge request has a conflict */
  Conflict = "CONFLICT",
  /** Checks whether the merge request has open discussions */
  DiscussionsNotResolved = "DISCUSSIONS_NOT_RESOLVED",
  /** Checks whether the merge request is draft */
  DraftStatus = "DRAFT_STATUS",
  /** Checks whether the title or description references a Jira issue. */
  JiraAssociationMissing = "JIRA_ASSOCIATION_MISSING",
  /** Checks whether the merge request contains locked LFS files that are locked by users other than the merge request author */
  LockedLfsFiles = "LOCKED_LFS_FILES",
  /** Checks whether the merge request contains locked paths */
  LockedPaths = "LOCKED_PATHS",
  /** Checks whether the merge request is blocked */
  MergeRequestBlocked = "MERGE_REQUEST_BLOCKED",
  /** Checks whether the merge is blocked due to a scheduled merge time */
  MergeTime = "MERGE_TIME",
  /** Checks whether the merge request needs to be rebased */
  NeedRebase = "NEED_REBASE",
  /** Checks whether the merge request is approved */
  NotApproved = "NOT_APPROVED",
  /** Checks whether the merge request is open */
  NotOpen = "NOT_OPEN",
  /** Checks whether the merge request has changes requested */
  RequestedChanges = "REQUESTED_CHANGES",
  /** Checks whether all pipelines have passed when security policies are configured */
  SecurityPolicyPipelineCheck = "SECURITY_POLICY_PIPELINE_CHECK",
  /** Checks whether the security policies are satisfied */
  SecurityPolicyViolations = "SECURITY_POLICY_VIOLATIONS",
  /** Checks whether the external status checks pass */
  StatusChecksMustPass = "STATUS_CHECKS_MUST_PASS",
  /** Checks whether the title matches the expected regex */
  TitleRegex = "TITLE_REGEX",
}

/** Representation of whether a mergeability check passed, checking, failed or is inactive. */
export enum MergeabilityCheckStatus {
  /** Mergeability check is being checked. */
  Checking = "CHECKING",
  /** Mergeability check has failed. The merge request cannot be merged. */
  Failed = "FAILED",
  /** Mergeability check is disabled via settings. */
  Inactive = "INACTIVE",
  /** Mergeability check has passed. */
  Success = "SUCCESS",
  /** Mergeability check has passed with a warning. */
  Warning = "WARNING",
}

/** Values for sorting milestones */
export enum MilestoneSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Milestone due date by ascending order. */
  DueDateAsc = "DUE_DATE_ASC",
  /** Milestone due date by descending order. */
  DueDateDesc = "DUE_DATE_DESC",
  /** Group milestones in the order: non-expired milestones with due dates, non-expired milestones without due dates and expired milestones then sort by due date in ascending order. */
  ExpiredLastDueDateAsc = "EXPIRED_LAST_DUE_DATE_ASC",
  /** Group milestones in the order: non-expired milestones with due dates, non-expired milestones without due dates and expired milestones then sort by due date in descending order. */
  ExpiredLastDueDateDesc = "EXPIRED_LAST_DUE_DATE_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Current state of milestone */
export enum MilestoneStateEnum {
  /** Milestone is currently active. */
  Active = "active",
  /** Milestone is closed. */
  Closed = "closed",
}

/** Milestone ID wildcard values */
export enum MilestoneWildcardId {
  /** Milestone is assigned. */
  Any = "ANY",
  /** No milestone is assigned. */
  None = "NONE",
  /** Milestone assigned is open and started (overlaps current date). This differs from the behavior in the [REST API implementation](https://docs.gitlab.com/api/issues/#list-issues). */
  Started = "STARTED",
  /** Milestone assigned starts in the future (start date > today). This differs from the behavior in the [REST API implementation](https://docs.gitlab.com/api/issues/#list-issues). */
  Upcoming = "UPCOMING",
}

/** Autogenerated input type of MlModelCreate */
export type MlModelCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the model. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the model. */
  name: Scalars["String"]["input"];
  /** Project the model to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MlModelDelete */
export type MlModelDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the model to be deleted. */
  id: Scalars["MlModelID"]["input"];
  /** Project the model to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MlModelDestroy */
export type MlModelDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the model to be deleted. */
  id: Scalars["MlModelID"]["input"];
  /** Project the model to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MlModelEdit */
export type MlModelEditInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the model. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Id of the model. */
  modelId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Name of the model. */
  name: Scalars["String"]["input"];
  /** Project the model to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of MlModelVersionCreate */
export type MlModelVersionCreateInput = {
  /** Global ID of a candidate to promote optionally. */
  candidateId?: InputMaybe<Scalars["MlCandidateID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the model version. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the model the version belongs to. */
  modelId: Scalars["MlModelID"]["input"];
  /** Project the model to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Model version. */
  version?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of MlModelVersionDelete */
export type MlModelVersionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the model version to be deleted. */
  id: Scalars["MlModelVersionID"]["input"];
};

/** Autogenerated input type of MlModelVersionEdit */
export type MlModelVersionEditInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the model version. */
  description: Scalars["String"]["input"];
  /** Global ID of the model the version belongs to. */
  modelId: Scalars["MlModelID"]["input"];
  /** Project the model to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Model version. */
  version: Scalars["String"]["input"];
};

/** Field names for ordering machine learning model versions */
export enum MlModelVersionsOrderBy {
  /** Ordered by creation time. */
  CreatedAt = "CREATED_AT",
  /** Ordered by id. */
  Id = "ID",
  /** Ordered by name. */
  Version = "VERSION",
}

/** Values for ordering machine learning models by a specific field */
export enum MlModelsOrderBy {
  /** Ordered by creation time. */
  CreatedAt = "CREATED_AT",
  /** Ordered by id. */
  Id = "ID",
  /** Ordered by name. */
  Name = "NAME",
  /** Ordered by update time. */
  UpdatedAt = "UPDATED_AT",
}

/** The position to which the adjacent object should be moved */
export enum MoveType {
  /** Adjacent object is moved after the object that is being moved. */
  After = "after",
  /** Adjacent object is moved before the object that is being moved. */
  Before = "before",
}

/** Different toggles for changing mutator behavior */
export enum MutationOperationMode {
  /** Performs an append operation. */
  Append = "APPEND",
  /** Performs a removal operation. */
  Remove = "REMOVE",
  /** Performs a replace operation. */
  Replace = "REPLACE",
}

/** Autogenerated input type of NamespaceBanDestroy */
export type NamespaceBanDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the namespace ban to remove. */
  id: Scalars["NamespacesNamespaceBanID"]["input"];
};

/** Autogenerated input type of NamespaceCiCdSettingsUpdate */
export type NamespaceCiCdSettingsUpdateInput = {
  /** Indicates if stale runners directly belonging to the namespace should be periodically pruned. */
  allowStaleRunnerPruning?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the namespace the settings belong to. */
  fullPath: Scalars["ID"]["input"];
};

/** Possible filter types for remote development cluster agents in a namespace */
export enum NamespaceClusterAgentFilter {
  /** All cluster agents in the namespace that can be used for hosting worksapces. */
  All = "ALL",
  /** Cluster agents in the namespace that can be used for hosting workspaces. */
  Available = "AVAILABLE",
  /** Cluster agents that are directly mapped to the given namespace. */
  DirectlyMapped = "DIRECTLY_MAPPED",
  /** Cluster agents within a namespace that are not directly mapped to it. */
  Unmapped = "UNMAPPED",
}

/** Autogenerated input type of NamespaceCreateRemoteDevelopmentClusterAgentMapping */
export type NamespaceCreateRemoteDevelopmentClusterAgentMappingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** GlobalID of the cluster agent to be associated with the namespace. */
  clusterAgentId: Scalars["ClustersAgentID"]["input"];
  /** GlobalID of the group to be associated with the cluster agent. */
  namespaceId: Scalars["GroupID"]["input"];
};

/** Autogenerated input type of NamespaceDeleteRemoteDevelopmentClusterAgentMapping */
export type NamespaceDeleteRemoteDevelopmentClusterAgentMappingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** GlobalID of the cluster agent to be un-associated from the namespace. */
  clusterAgentId: Scalars["ClustersAgentID"]["input"];
  /** GlobalID of the group to be un-associated from the cluster agent. */
  namespaceId: Scalars["GroupID"]["input"];
};

/** Values for sorting projects */
export enum NamespaceProjectSort {
  /** Sort by latest activity, descending order. */
  ActivityDesc = "ACTIVITY_DESC",
  /** Sort by total build artifact size, ascending order. */
  BuildArtifactsSizeAsc = "BUILD_ARTIFACTS_SIZE_ASC",
  /** Sort by total build artifact size, descending order. */
  BuildArtifactsSizeDesc = "BUILD_ARTIFACTS_SIZE_DESC",
  /** Sort by total container registry size, ascending order. */
  ContainerRegistrySizeAsc = "CONTAINER_REGISTRY_SIZE_ASC",
  /** Sort by total container registry size, descending order. */
  ContainerRegistrySizeDesc = "CONTAINER_REGISTRY_SIZE_DESC",
  /** Sort by excess repository storage size, descending order. */
  ExcessRepoStorageSizeDesc = "EXCESS_REPO_STORAGE_SIZE_DESC",
  /** Sort by full path, ascending order. */
  FullPathAsc = "FULL_PATH_ASC",
  /** Sort by full path, descending order. */
  FullPathDesc = "FULL_PATH_DESC",
  /** Sort by total LFS object size, ascending order. */
  LfsObjectsSizeAsc = "LFS_OBJECTS_SIZE_ASC",
  /** Sort by total LFS object size, descending order. */
  LfsObjectsSizeDesc = "LFS_OBJECTS_SIZE_DESC",
  /** Sort by total package size, ascending order. */
  PackagesSizeAsc = "PACKAGES_SIZE_ASC",
  /** Sort by total package size, descending order. */
  PackagesSizeDesc = "PACKAGES_SIZE_DESC",
  /** Sort by path, ascending order. */
  PathAsc = "PATH_ASC",
  /** Sort by path, descending order. */
  PathDesc = "PATH_DESC",
  /** Sort by total repository size, ascending order. */
  RepositorySizeAsc = "REPOSITORY_SIZE_ASC",
  /** Sort by total repository size, descending order. */
  RepositorySizeDesc = "REPOSITORY_SIZE_DESC",
  /** Most similar to the search query. */
  Similarity = "SIMILARITY",
  /** Sort by total snippet size, ascending order. */
  SnippetsSizeAsc = "SNIPPETS_SIZE_ASC",
  /** Sort by total snippet size, descending order. */
  SnippetsSizeDesc = "SNIPPETS_SIZE_DESC",
  /** Sort by total storage size, ascending order. */
  StorageSizeAsc = "STORAGE_SIZE_ASC",
  /** Sort by total storage size, descending order. */
  StorageSizeDesc = "STORAGE_SIZE_DESC",
  /** Sort by total wiki size, ascending order. */
  WikiSizeAsc = "WIKI_SIZE_ASC",
  /** Sort by total wiki size, descending order. */
  WikiSizeDesc = "WIKI_SIZE_DESC",
}

/** Autogenerated input type of NamespaceSecretsManagerEnroll */
export type NamespaceSecretsManagerEnrollInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the namespace to enroll. */
  namespacePath: Scalars["ID"]["input"];
};

/** Autogenerated input type of NamespaceSecretsManagerUnenroll */
export type NamespaceSecretsManagerUnenrollInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the namespace to unenroll. */
  namespacePath: Scalars["ID"]["input"];
};

/** Autogenerated input type of NamespaceSettingsUpdate */
export type NamespaceSettingsUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the namespace the settings belong to. */
  fullPath: Scalars["ID"]["input"];
  /** Indicates the default minimum role required to override pipeline variables in the namespace. */
  pipelineVariablesDefaultRole?: InputMaybe<PipelineVariablesDefaultRoleType>;
};

/** Autogenerated input type of NamespacesRegenerateNewWorkItemEmailAddress */
export type NamespacesRegenerateNewWorkItemEmailAddressInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the namespace to regenerate the new work item email address for. */
  fullPath: Scalars["ID"]["input"];
};

export type NegatedBoardIssueInput = {
  /** Filter by assignee username. */
  assigneeUsername?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter by author username. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filter by negated custom fields. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /**
   * Filter by epic ID. Incompatible with epicWildcardId. Deprecated in GitLab 17.5: This will be replaced by WorkItem hierarchyWidget.
   * @deprecated This will be replaced by WorkItem hierarchyWidget. Deprecated in GitLab 17.5.
   */
  epicId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /**
   * Health status not applied to the issue.
   *                     Includes issues where health status is not set.
   */
  healthStatusFilter?: InputMaybe<HealthStatus>;
  /** List of IIDs of issues. For example `["1", "2"]`. */
  iids?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by a list of iteration IDs. Incompatible with iterationWildcardId. */
  iterationId?: InputMaybe<Array<Scalars["IterationID"]["input"]>>;
  /** Filter by iteration title. */
  iterationTitle?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by iteration ID wildcard. */
  iterationWildcardId?: InputMaybe<NegatedIterationWildcardId>;
  /** Filter by label name. */
  labelName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter by milestone title. */
  milestoneTitle?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by milestone ID wildcard. */
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. Wildcard values "NONE" and "ANY" are supported. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by release tag. */
  releaseTag?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by the given issue types. */
  types?: InputMaybe<Array<IssueType>>;
  /** Filter by weight. */
  weight?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by work item type global IDs. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

export type NegatedComplianceFrameworkFilters = {
  /** ID of the compliance framework. */
  id?: InputMaybe<Scalars["ComplianceManagementFrameworkID"]["input"]>;
  /** IDs of the compliance framework. */
  ids?: InputMaybe<Array<Scalars["ComplianceManagementFrameworkID"]["input"]>>;
};

export type NegatedEpicBoardIssueInput = {
  /** Filter by author username. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filter by negated custom fields. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filter by label name. */
  labelName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter by reaction emoji applied by the current user. Wildcard values "NONE" and "ANY" are supported. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
};

export type NegatedEpicFilterInput = {
  /** Filter by author username. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filter by negated custom fields. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filter by label name. */
  labelName?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  /** Filter by reaction emoji applied by the current user. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
};

export type NegatedIssueFilterInput = {
  /** ID of a user not assigned to the issues. */
  assigneeId?: InputMaybe<Scalars["String"]["input"]>;
  /** Usernames of users not assigned to the issue. */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Username of a user who didn't author the issue. */
  authorUsername?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Filter by negated custom fields. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** ID of an epic not associated with the issues. */
  epicId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Health status not applied to the issue.
   *                     Includes issues where health status is not set.
   */
  healthStatusFilter?: InputMaybe<Array<HealthStatus>>;
  /** List of IIDs of issues to exclude. For example, `[1, 2]`. */
  iids?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** List of iteration Global IDs not applied to the issue. */
  iterationId?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Filter by negated iteration ID wildcard. */
  iterationWildcardId?: InputMaybe<IterationWildcardId>;
  /** Labels not applied to the issue. */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Milestone not applied to the issue. */
  milestoneTitle?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by negated milestone wildcard values. */
  milestoneWildcardId?: InputMaybe<NegatedMilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Release tag not associated with the issue's milestone. Ignored when parent is a group. */
  releaseTag?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters out issues by the given issue types. */
  types?: InputMaybe<Array<IssueType>>;
  /** Weight not applied to the issue. */
  weight?: InputMaybe<Scalars["String"]["input"]>;
};

/** Negated Iteration ID wildcard values */
export enum NegatedIterationWildcardId {
  /** Current iteration. */
  Current = "CURRENT",
}

/** Negated Milestone ID wildcard values */
export enum NegatedMilestoneWildcardId {
  /** Milestone assigned is open and yet to be started (start date > today). */
  Started = "STARTED",
  /** Milestone assigned is open but starts in the past (start date <= today). This differs from the behavior in the [REST API implementation](https://docs.gitlab.com/api/issues/#list-issues). */
  Upcoming = "UPCOMING",
}

export type NegatedValueStreamAnalyticsIssuableFilterInput = {
  /** Usernames of users not assigned to the issue or merge request. */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Username of a user who didn't author the issue or merge request. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of an epic not associated with the issues.         Using the filter is not supported for stages based on merge requests. */
  epicId?: InputMaybe<Scalars["ID"]["input"]>;
  /** List of iteration Global IDs not applied to the issue.         Using the filter is not supported for stages based on merge requests. */
  iterationId?: InputMaybe<Scalars["ID"]["input"]>;
  /** Labels not applied to the issue or merge request. */
  labelNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Milestone not applied to the issue or merge request. */
  milestoneTitle?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by reaction emoji applied by the current user. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Weight not applied to the issue.         Using the filter is not supported for stages based on merge requests. */
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

export type NegatedWorkItemFilterInput = {
  /** Usernames of users not assigned to the work item (maximum is 100 usernames). */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Username of a user who didn't author the work item (maximum is 100 usernames). */
  authorUsername?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Filter by negated custom fields. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /**
   * Health status not applied to the work items.
   *                     Includes work items where health status is not set.
   */
  healthStatusFilter?: InputMaybe<Array<HealthStatus>>;
  /** List of iteration Global IDs not applied to the work items (maximum is 100 IDs). */
  iterationId?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Filter by negated iteration ID wildcard. */
  iterationWildcardId?: InputMaybe<IterationWildcardId>;
  /** Labels not applied to the work item (maximum is 100 labels). */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Milestone not applied to the work item (maximum is 100 milestones). */
  milestoneTitle?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by negated milestone wildcard values. */
  milestoneWildcardId?: InputMaybe<NegatedMilestoneWildcardId>;
  /** Filter by reaction emoji not applied by the current user. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filter work items by global IDs who don't belong to parent items (maximum is 100 IDs). Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  parentIds?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /** Release tag not associated with the work items's milestone (maximum is 100 tags). Ignored when parent is a group . */
  releaseTag?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter out work items by the given types. */
  types?: InputMaybe<Array<IssueType>>;
  /** Weight not applied to the work items. */
  weight?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter out work items by work item type global IDs. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

/** Autogenerated input type of NoteConvertToThread */
export type NoteConvertToThreadInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Note to convert. */
  id: Scalars["NoteID"]["input"];
};

/** Work item notes collection type. */
export enum NotesFilterType {
  /** Show all activity */
  AllNotes = "ALL_NOTES",
  /** Show history only */
  OnlyActivity = "ONLY_ACTIVITY",
  /** Show comments only */
  OnlyComments = "ONLY_COMMENTS",
}

/** Active period time range for on-call rotation */
export type OncallRotationActivePeriodInputType = {
  /** End of the rotation active period in 24 hour format. For example, "18:30". */
  endTime: Scalars["String"]["input"];
  /** Start of the rotation active period in 24 hour format. For example, "18:30". */
  startTime: Scalars["String"]["input"];
};

/** Autogenerated input type of OncallRotationCreate */
export type OncallRotationCreateInput = {
  /** Active period of time that the on-call rotation should take place. */
  activePeriod?: InputMaybe<OncallRotationActivePeriodInputType>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** End date and time of the on-call rotation, in the timezone of the on-call schedule. */
  endsAt?: InputMaybe<OncallRotationDateInputType>;
  /** Name of the on-call rotation. */
  name: Scalars["String"]["input"];
  /** Usernames of users participating in the on-call rotation. A maximum limit of 100 participants applies. */
  participants: Array<OncallUserInputType>;
  /** Project to create the on-call schedule in. */
  projectPath: Scalars["ID"]["input"];
  /** Rotation length of the on-call rotation. */
  rotationLength: OncallRotationLengthInputType;
  /** IID of the on-call schedule to create the on-call rotation in. */
  scheduleIid: Scalars["String"]["input"];
  /** Start date and time of the on-call rotation, in the timezone of the on-call schedule. */
  startsAt: OncallRotationDateInputType;
};

/** Date input type for on-call rotation */
export type OncallRotationDateInputType = {
  /** Date component of the date in YYYY-MM-DD format. */
  date: Scalars["String"]["input"];
  /** Time component of the date in 24hr HH:MM format. */
  time: Scalars["String"]["input"];
};

/** Autogenerated input type of OncallRotationDestroy */
export type OncallRotationDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the on-call rotation to remove. */
  id: Scalars["IncidentManagementOncallRotationID"]["input"];
  /** Project to remove the on-call schedule from. */
  projectPath: Scalars["ID"]["input"];
  /** IID of the on-call schedule to the on-call rotation belongs to. */
  scheduleIid: Scalars["String"]["input"];
};

/** The rotation length of the on-call rotation */
export type OncallRotationLengthInputType = {
  /** Rotation length of the on-call rotation. */
  length: Scalars["Int"]["input"];
  /** Unit of the rotation length of the on-call rotation. */
  unit: OncallRotationUnitEnum;
};

/** Rotation length unit of an on-call rotation */
export enum OncallRotationUnitEnum {
  /** Days */
  Days = "DAYS",
  /** Hours */
  Hours = "HOURS",
  /** Weeks */
  Weeks = "WEEKS",
}

/** Autogenerated input type of OncallRotationUpdate */
export type OncallRotationUpdateInput = {
  /** Active period of time that the on-call rotation should take place. */
  activePeriod?: InputMaybe<OncallRotationActivePeriodInputType>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** End date and time of the on-call rotation, in the timezone of the on-call schedule. */
  endsAt?: InputMaybe<OncallRotationDateInputType>;
  /** ID of the on-call schedule to create the on-call rotation in. */
  id: Scalars["IncidentManagementOncallRotationID"]["input"];
  /** Name of the on-call rotation. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Usernames of users participating in the on-call rotation. A maximum limit of 100 participants applies. */
  participants?: InputMaybe<Array<OncallUserInputType>>;
  /** Rotation length of the on-call rotation. */
  rotationLength?: InputMaybe<OncallRotationLengthInputType>;
  /** Start date and time of the on-call rotation, in the timezone of the on-call schedule. */
  startsAt?: InputMaybe<OncallRotationDateInputType>;
};

/** Autogenerated input type of OncallScheduleCreate */
export type OncallScheduleCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the on-call schedule. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the on-call schedule. */
  name: Scalars["String"]["input"];
  /** Project to create the on-call schedule in. */
  projectPath: Scalars["ID"]["input"];
  /** Timezone of the on-call schedule. */
  timezone: Scalars["String"]["input"];
};

/** Autogenerated input type of OncallScheduleDestroy */
export type OncallScheduleDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** On-call schedule internal ID to remove. */
  iid: Scalars["String"]["input"];
  /** Project to remove the on-call schedule from. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of OncallScheduleUpdate */
export type OncallScheduleUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the on-call schedule. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** On-call schedule internal ID to update. */
  iid: Scalars["String"]["input"];
  /** Name of the on-call schedule. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Project to update the on-call schedule in. */
  projectPath: Scalars["ID"]["input"];
  /** Timezone of the on-call schedule. */
  timezone?: InputMaybe<Scalars["String"]["input"]>;
};

/** The rotation user and color palette */
export type OncallUserInputType = {
  /** Value of DataVisualizationColorEnum. The color from the palette to assign to the on-call user. */
  colorPalette?: InputMaybe<DataVisualizationColorEnum>;
  /** Color weight to assign to for the on-call user. To view on-call schedules in GitLab, do not provide a value below 500. A value between 500 and 950 ensures sufficient contrast. */
  colorWeight?: InputMaybe<DataVisualizationWeightEnum>;
  /** Username of the user to participate in the on-call rotation. For example, `"user_one"`. */
  username: Scalars["String"]["input"];
};

/** Enum defining the type of OpenTelemetry metric */
export enum OpenTelemetryMetricType {
  /** Exponential Histogram Type type. */
  ExponentialHistogramType = "EXPONENTIAL_HISTOGRAM_TYPE",
  /** Gauge Type type. */
  GaugeType = "GAUGE_TYPE",
  /** Histogram Type type. */
  HistogramType = "HISTOGRAM_TYPE",
  /** Sum Type type. */
  SumType = "SUM_TYPE",
}

/** Autogenerated input type of OrbitUpdate */
export type OrbitUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether to enable or disable the Knowledge Graph for the group. */
  enabled: Scalars["Boolean"]["input"];
  /** Full path of the group to update. */
  groupPath: Scalars["ID"]["input"];
};

/** Possible filter types for remote development cluster agents in an organization */
export enum OrganizationClusterAgentFilter {
  /** All cluster agents in the organization that can be used for hosting workspaces. */
  All = "ALL",
  /** Cluster agents that are directly mapped to the given organization. */
  DirectlyMapped = "DIRECTLY_MAPPED",
}

/** Autogenerated input type of OrganizationConfirm */
export type OrganizationConfirmInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of top-level groups to transfer to the organization. */
  groups?: InputMaybe<Array<Scalars["GroupID"]["input"]>>;
  /** Global ID of the organization to confirm. */
  id: Scalars["OrganizationsOrganizationID"]["input"];
};

/** Autogenerated input type of OrganizationCreateClusterAgentMapping */
export type OrganizationCreateClusterAgentMappingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** GlobalID of the cluster agent to be associated with the organization. */
  clusterAgentId: Scalars["ClustersAgentID"]["input"];
  /** GlobalID of the organization to be associated with the cluster agent. */
  organizationId: Scalars["OrganizationsOrganizationID"]["input"];
};

/** Autogenerated input type of OrganizationCreate */
export type OrganizationCreateInput = {
  /** Avatar for the organization. */
  avatar?: InputMaybe<Scalars["Upload"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the organization. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Name for the organization. */
  name: Scalars["String"]["input"];
  /** Path for the organization. */
  path: Scalars["String"]["input"];
  /** Visibility for the organization. */
  visibility?: InputMaybe<OrganizationVisibility>;
};

/** Autogenerated input type of OrganizationDeleteClusterAgentMapping */
export type OrganizationDeleteClusterAgentMappingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** GlobalID of the cluster agent to be dissociated with the organization. */
  clusterAgentId: Scalars["ClustersAgentID"]["input"];
  /** GlobalID of the organization to be dissociated with the cluster agent. */
  organizationId: Scalars["OrganizationsOrganizationID"]["input"];
};

/** Autogenerated input type of OrganizationDelete */
export type OrganizationDeleteInput = {
  /** Avatar for the organization. */
  avatar?: InputMaybe<Scalars["Upload"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the organization. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the organization to soft-delete. */
  id: Scalars["OrganizationsOrganizationID"]["input"];
};

/** Default list view for organization groups and projects. */
export enum OrganizationGroupProjectDisplay {
  /**
   * Display organization groups list. Introduced in GitLab 17.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.2.
   */
  Groups = "GROUPS",
  /**
   * Display organization projects list. Introduced in GitLab 17.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.2.
   */
  Projects = "PROJECTS",
}

/** Values for sorting organization groups and projects. */
export enum OrganizationGroupProjectSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /**
   * Name ascending order. Introduced in GitLab 17.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.2.
   */
  NameAsc = "NAME_ASC",
  /**
   * Name descending order. Introduced in GitLab 17.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.2.
   */
  NameDesc = "NAME_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Values for sorting organizations */
export enum OrganizationSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Default Rate in ascending order. */
  DefaultRateAsc = "DEFAULT_RATE_ASC",
  /** Default Rate in descending order. */
  DefaultRateDesc = "DEFAULT_RATE_DESC",
  /** Description in ascending order. */
  DescriptionAsc = "DESCRIPTION_ASC",
  /** Description in descending order. */
  DescriptionDesc = "DESCRIPTION_DESC",
  /** Name in ascending order. */
  NameAsc = "NAME_ASC",
  /** Name in descending order. */
  NameDesc = "NAME_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** State of an organization. */
export enum OrganizationState {
  /**
   * Active organization. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  Active = "ACTIVE",
  /**
   * Confirmed organization. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  Confirmed = "CONFIRMED",
  /**
   * Deletion In Progress organization. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  DeletionInProgress = "DELETION_IN_PROGRESS",
  /**
   * Read Only organization. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  ReadOnly = "READ_ONLY",
  /**
   * Read Only Initialization organization. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  ReadOnlyInitialization = "READ_ONLY_INITIALIZATION",
  /**
   * Soft Deleted organization. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  SoftDeleted = "SOFT_DELETED",
  /**
   * Unconfirmed organization. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  Unconfirmed = "UNCONFIRMED",
}

/** Autogenerated input type of OrganizationUpdate */
export type OrganizationUpdateInput = {
  /** Avatar for the organization. */
  avatar?: InputMaybe<Scalars["Upload"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the organization. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the organization to mutate. */
  id: Scalars["OrganizationsOrganizationID"]["input"];
  /** Name for the organization. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Path for the organization. */
  path?: InputMaybe<Scalars["String"]["input"]>;
  /** Visibility for the organization. */
  visibility?: InputMaybe<OrganizationVisibility>;
};

/** Access level of an organization user */
export enum OrganizationUserAccessLevel {
  /**
   * Guest access. Introduced in GitLab 16.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 16.11.
   */
  Default = "DEFAULT",
  /**
   * Owner access. Introduced in GitLab 16.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 16.11.
   */
  Owner = "OWNER",
}

/** Autogenerated input type of OrganizationUserUpdate */
export type OrganizationUserUpdateInput = {
  /** Access level to update the organization user to. */
  accessLevel: OrganizationUserAccessLevel;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the organization user to mutate. */
  id: Scalars["OrganizationsOrganizationUserID"]["input"];
};

/** Visibilities available to an organization. */
export enum OrganizationVisibility {
  /** Private visibility. */
  Private = "private",
  /** Public visibility. */
  Public = "public",
}

export enum PackageDependencyType {
  /** bundleDependencies dependency type */
  BundleDependencies = "BUNDLE_DEPENDENCIES",
  /** dependencies dependency type */
  Dependencies = "DEPENDENCIES",
  /** devDependencies dependency type */
  DevDependencies = "DEV_DEPENDENCIES",
  /** peerDependencies dependency type */
  PeerDependencies = "PEER_DEPENDENCIES",
}

/** Values for sorting group packages */
export enum PackageGroupSort {
  /** Ordered by created_at in ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Ordered by created_at in descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Ordered by name in ascending order. */
  NameAsc = "NAME_ASC",
  /** Ordered by name in descending order. */
  NameDesc = "NAME_DESC",
  /** Ordered by project path in ascending order. */
  ProjectPathAsc = "PROJECT_PATH_ASC",
  /** Ordered by project path in descending order. */
  ProjectPathDesc = "PROJECT_PATH_DESC",
  /** Ordered by type in ascending order. */
  TypeAsc = "TYPE_ASC",
  /** Ordered by type in descending order. */
  TypeDesc = "TYPE_DESC",
  /** Ordered by version in ascending order. */
  VersionAsc = "VERSION_ASC",
  /** Ordered by version in descending order. */
  VersionDesc = "VERSION_DESC",
}

/** Values for package manager */
export enum PackageManager {
  /** Package manager: apk. */
  Apk = "APK",
  /** Package manager: bun. */
  Bun = "BUN",
  /** Package manager: bundler. */
  Bundler = "BUNDLER",
  /** Package manager: cargo. */
  Cargo = "CARGO",
  /** Package manager: composer. */
  Composer = "COMPOSER",
  /** Package manager: conan. */
  Conan = "CONAN",
  /** Package manager: conda. */
  Conda = "CONDA",
  /** Package manager: go. */
  Go = "GO",
  /** Package manager: gradle. */
  Gradle = "GRADLE",
  /** Package manager: maven. */
  Maven = "MAVEN",
  /** Package manager: npm. */
  Npm = "NPM",
  /** Package manager: nuget. */
  Nuget = "NUGET",
  /** Package manager: pip. */
  Pip = "PIP",
  /** Package manager: pipenv. */
  Pipenv = "PIPENV",
  /** Package manager: pnpm. */
  Pnpm = "PNPM",
  /** Package manager: poetry. */
  Poetry = "POETRY",
  /** Package manager: pub. */
  Pub = "PUB",
  /** Package manager: sbt. */
  Sbt = "SBT",
  /** Package manager: setuptools. */
  Setuptools = "SETUPTOOLS",
  /** Package manager: yarn. */
  Yarn = "YARN",
}

/** Source of the package metadata advisory. */
export enum PackageMetadataAdvisorySource {
  /** Advisory from glad */
  Glad = "GLAD",
  /** Advisory from trivy-db */
  TrivyDb = "TRIVY_DB",
}

/** Values for sorting package */
export enum PackageSort {
  /** Ordered by created_at in ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Ordered by created_at in descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Ordered by name in ascending order. */
  NameAsc = "NAME_ASC",
  /** Ordered by name in descending order. */
  NameDesc = "NAME_DESC",
  /** Ordered by type in ascending order. */
  TypeAsc = "TYPE_ASC",
  /** Ordered by type in descending order. */
  TypeDesc = "TYPE_DESC",
  /** Ordered by version in ascending order. */
  VersionAsc = "VERSION_ASC",
  /** Ordered by version in descending order. */
  VersionDesc = "VERSION_DESC",
}

export enum PackageStatus {
  /** Packages with a default status */
  Default = "DEFAULT",
  /** Packages with a deprecated status */
  Deprecated = "DEPRECATED",
  /** Packages with a error status */
  Error = "ERROR",
  /** Packages with a hidden status */
  Hidden = "HIDDEN",
  /** Packages with a pending_destruction status */
  PendingDestruction = "PENDING_DESTRUCTION",
  /** Packages with a processing status */
  Processing = "PROCESSING",
}

export enum PackageTypeEnum {
  /** Packages from the Cargo package manager */
  Cargo = "CARGO",
  /** Packages from the Composer package manager */
  Composer = "COMPOSER",
  /** Packages from the Conan package manager */
  Conan = "CONAN",
  /** Packages from the Debian package manager */
  Debian = "DEBIAN",
  /** Packages from the Generic package manager */
  Generic = "GENERIC",
  /** Packages from the Golang package manager */
  Golang = "GOLANG",
  /** Packages from the Helm package manager */
  Helm = "HELM",
  /** Packages from the Maven package manager */
  Maven = "MAVEN",
  /** Packages from the Ml_model package manager */
  MlModel = "ML_MODEL",
  /** Packages from the npm package manager */
  Npm = "NPM",
  /** Packages from the Nuget package manager */
  Nuget = "NUGET",
  /** Packages from the PyPI package manager */
  Pypi = "PYPI",
  /** Packages from the Rpm package manager */
  Rpm = "RPM",
  /** Packages from the Rubygems package manager */
  Rubygems = "RUBYGEMS",
  /** Packages from the Terraform Module package manager */
  TerraformModule = "TERRAFORM_MODULE",
}

export enum PackagesCleanupKeepDuplicatedPackageFilesEnum {
  /** Value to keep all package files */
  AllPackageFiles = "ALL_PACKAGE_FILES",
  /** Value to keep 50 package files */
  FiftyPackageFiles = "FIFTY_PACKAGE_FILES",
  /** Value to keep 40 package files */
  FortyPackageFiles = "FORTY_PACKAGE_FILES",
  /** Value to keep 1 package files */
  OnePackageFile = "ONE_PACKAGE_FILE",
  /** Value to keep 10 package files */
  TenPackageFiles = "TEN_PACKAGE_FILES",
  /** Value to keep 30 package files */
  ThirtyPackageFiles = "THIRTY_PACKAGE_FILES",
  /** Value to keep 20 package files */
  TwentyPackageFiles = "TWENTY_PACKAGE_FILES",
}

/** Access level of a package protection rule resource */
export enum PackagesProtectionRuleAccessLevel {
  /** Admin access. */
  Admin = "ADMIN",
  /** Maintainer access. */
  Maintainer = "MAINTAINER",
  /** Owner access. */
  Owner = "OWNER",
}

/** Access level for the deletion of a package protection rule resource. */
export enum PackagesProtectionRuleAccessLevelForDelete {
  /** Admin access. Available only when feature flag `packages_protected_packages_delete` is enabled. */
  Admin = "ADMIN",
  /** Owner access. Available only when feature flag `packages_protected_packages_delete` is enabled. */
  Owner = "OWNER",
}

/** Package type of a package protection rule resource */
export enum PackagesProtectionRulePackageType {
  /** Packages of the Conan format. */
  Conan = "CONAN",
  /** Packages of the Generic format. */
  Generic = "GENERIC",
  /** Packages of the Helm format. */
  Helm = "HELM",
  /** Packages of the Maven format. */
  Maven = "MAVEN",
  /** Packages of the npm format. */
  Npm = "NPM",
  /** Packages of the NuGet format. */
  Nuget = "NUGET",
  /** Packages of the PyPI format. */
  Pypi = "PYPI",
  /** Packages of the Terraform module format. */
  TerraformModule = "TERRAFORM_MODULE",
}

/** Autogenerated input type of PagesMarkOnboardingComplete */
export type PagesMarkOnboardingCompleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Type of resource that the permission can be applied to. */
export enum PermissionBoundary {
  /** Group. */
  Group = "GROUP",
  /** Instance. */
  Instance = "INSTANCE",
  /** Project. */
  Project = "PROJECT",
  /** User. */
  User = "USER",
}

/** Autogenerated input type of PersonalAccessTokenCreate */
export type PersonalAccessTokenCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the token. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Expiration date of the token. */
  expiresAt?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /** List of granular scopes to assign to the token. */
  granularScopes: Array<GranularScopeInput>;
  /** Name of the token. */
  name: Scalars["String"]["input"];
  /** Whether the token can impersonate other users with sudo. Requires the token owner to be an administrator. */
  sudo?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Autogenerated input type of PersonalAccessTokenRevoke */
export type PersonalAccessTokenRevokeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the personal access token that will be revoked. */
  id: Scalars["PersonalAccessTokenID"]["input"];
};

/** Autogenerated input type of PersonalAccessTokenRotate */
export type PersonalAccessTokenRotateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Expiration date of the token. */
  expiresAt?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /** Global ID of the personal access token that will be rotated. */
  id: Scalars["PersonalAccessTokenID"]["input"];
};

export enum PipelineAnalyticsJobStatus {
  /** Jobs with any status. */
  Any = "ANY",
  /** Job that failed. */
  Failed = "FAILED",
  /** Job that was canceled or skipped. */
  Other = "OTHER",
  /** Job that succeeded. */
  Success = "SUCCESS",
}

/** Autogenerated input type of PipelineCancel */
export type PipelineCancelInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline to mutate. */
  id: Scalars["CiPipelineID"]["input"];
};

export enum PipelineConfigSourceEnum {
  /** Auto DevOps source. */
  AutoDevopsSource = "AUTO_DEVOPS_SOURCE",
  /** Bridge source. */
  BridgeSource = "BRIDGE_SOURCE",
  /** Compliance source. */
  ComplianceSource = "COMPLIANCE_SOURCE",
  /** External project source. */
  ExternalProjectSource = "EXTERNAL_PROJECT_SOURCE",
  /** Parameter source. */
  ParameterSource = "PARAMETER_SOURCE",
  /** Pipeline execution policy forced. */
  PipelineExecutionPolicyForced = "PIPELINE_EXECUTION_POLICY_FORCED",
  /** Remote source. */
  RemoteSource = "REMOTE_SOURCE",
  /** Repository source. */
  RepositorySource = "REPOSITORY_SOURCE",
  /** Security policies default source. */
  SecurityPoliciesDefaultSource = "SECURITY_POLICIES_DEFAULT_SOURCE",
  /** Security scan profiles source. */
  SecurityScanProfilesSource = "SECURITY_SCAN_PROFILES_SOURCE",
  /** Unknown source. */
  UnknownSource = "UNKNOWN_SOURCE",
  /** Webide source. */
  WebideSource = "WEBIDE_SOURCE",
}

/** Autogenerated input type of PipelineCreate */
export type PipelineCreateInput = {
  /**
   * When `true`, the request does not wait for the pipeline to be created, and returns a unique identifier that can be used to check the creation status. Introduced in GitLab 17.8: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.8.
   */
  async?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Inputs for the pipeline. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  inputs?: InputMaybe<Array<CiInputsInput>>;
  /** IID of the merge request to create pipeline for. */
  mergeRequestIid?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project that is triggering the pipeline. */
  projectPath: Scalars["ID"]["input"];
  /** Ref on which to run the pipeline. Ignored when `mergeRequestIid` is provided; the merge request ref path is used instead. */
  ref: Scalars["String"]["input"];
  /** Variables for the pipeline. */
  variables?: InputMaybe<Array<CiVariableInput>>;
};

/** Autogenerated input type of PipelineDestroy */
export type PipelineDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline to mutate. */
  id: Scalars["CiPipelineID"]["input"];
};

/** Autogenerated input type of PipelineExecutionSchedulePolicyTestRun */
export type PipelineExecutionSchedulePolicyTestRunInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the pipeline execution schedule policy to test. */
  policyId: Scalars["SecurityPolicyID"]["input"];
  /** Full path of the project to run the test on. */
  projectPath: Scalars["ID"]["input"];
};

/** Event type of the pipeline associated with a merge request */
export enum PipelineMergeRequestEventType {
  /** Pipeline run on the changes in the merge request source branch. */
  Detached = "DETACHED",
  /** Pipeline run on the changes from the source branch combined with the target branch. */
  MergedResult = "MERGED_RESULT",
  /** Pipeline ran as part of a merge train. */
  MergeTrain = "MERGE_TRAIN",
}

/** Autogenerated input type of PipelineRetry */
export type PipelineRetryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline to mutate. */
  id: Scalars["CiPipelineID"]["input"];
};

/** Autogenerated input type of PipelineScheduleCreate */
export type PipelineScheduleCreateInput = {
  /** Indicates if the pipeline schedule should be active or not. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Cron expression of the pipeline schedule. */
  cron: Scalars["String"]["input"];
  /**
   *                     Cron time zone supported by `ActiveSupport::TimeZone`.
   *                     For example: `Pacific Time (US & Canada)` (default: `UTC`).
   *
   */
  cronTimezone?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the pipeline schedule. */
  description: Scalars["String"]["input"];
  /**
   * Inputs for the pipeline schedule. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  inputs?: InputMaybe<Array<CiInputsInput>>;
  /** Full path of the project the pipeline schedule is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Ref of the pipeline schedule. */
  ref: Scalars["String"]["input"];
  /** Variables for the pipeline schedule. */
  variables?: InputMaybe<Array<PipelineScheduleVariableInput>>;
};

/** Autogenerated input type of PipelineScheduleDelete */
export type PipelineScheduleDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline schedule to mutate. */
  id: Scalars["CiPipelineScheduleID"]["input"];
};

/** Autogenerated input type of PipelineSchedulePlay */
export type PipelineSchedulePlayInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline schedule to mutate. */
  id: Scalars["CiPipelineScheduleID"]["input"];
};

/** Values for sorting pipeline schedules. */
export enum PipelineScheduleSort {
  /** Sort pipeline schedules by created date in ascending order. */
  CreatedAtAsc = "CREATED_AT_ASC",
  /** Sort pipeline schedules by created date in descending order. */
  CreatedAtDesc = "CREATED_AT_DESC",
  /** Sort pipeline schedules by description in ascending order. */
  DescriptionAsc = "DESCRIPTION_ASC",
  /** Sort pipeline schedules by description in descending order. */
  DescriptionDesc = "DESCRIPTION_DESC",
  /** Sort pipeline schedules by ID in ascending order. */
  IdAsc = "ID_ASC",
  /** Sort pipeline schedules by ID in descending order. */
  IdDesc = "ID_DESC",
  /** Sort pipeline schedules by next run in ascending order. */
  NextRunAtAsc = "NEXT_RUN_AT_ASC",
  /** Sort pipeline schedules by next run in descending order. */
  NextRunAtDesc = "NEXT_RUN_AT_DESC",
  /** Sort pipeline schedules by target in ascending order. */
  RefAsc = "REF_ASC",
  /** Sort pipeline schedules by target in descending order. */
  RefDesc = "REF_DESC",
  /** Sort pipeline schedules by updated date in ascending order. */
  UpdatedAtAsc = "UPDATED_AT_ASC",
  /** Sort pipeline schedules by updated date in descending order. */
  UpdatedAtDesc = "UPDATED_AT_DESC",
}

export enum PipelineScheduleStatus {
  /** Active pipeline schedules. */
  Active = "ACTIVE",
  /** Inactive pipeline schedules. */
  Inactive = "INACTIVE",
}

/** Autogenerated input type of PipelineScheduleTakeOwnership */
export type PipelineScheduleTakeOwnershipInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline schedule to mutate. */
  id: Scalars["CiPipelineScheduleID"]["input"];
};

/** Autogenerated input type of PipelineScheduleUpdate */
export type PipelineScheduleUpdateInput = {
  /** Indicates if the pipeline schedule should be active or not. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Cron expression of the pipeline schedule. */
  cron?: InputMaybe<Scalars["String"]["input"]>;
  /**
   *                     Cron time zone supported by `ActiveSupport::TimeZone`.
   *                     For example: `Pacific Time (US & Canada)` (default: `UTC`).
   *
   */
  cronTimezone?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the pipeline schedule. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline schedule to mutate. */
  id: Scalars["CiPipelineScheduleID"]["input"];
  /**
   * Inputs for the pipeline schedule. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  inputs?: InputMaybe<Array<CiInputsInput>>;
  /** Ref of the pipeline schedule. */
  ref?: InputMaybe<Scalars["String"]["input"]>;
  /** Variables for the pipeline schedule. */
  variables?: InputMaybe<Array<PipelineScheduleVariableInput>>;
};

/** Attributes for the pipeline schedule variable. */
export type PipelineScheduleVariableInput = {
  /** Boolean option to destroy the variable. */
  destroy?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** ID of the variable to mutate. */
  id?: InputMaybe<Scalars["CiPipelineScheduleVariableID"]["input"]>;
  /** Name of the variable. */
  key: Scalars["String"]["input"];
  /** Value of the variable. */
  value: Scalars["String"]["input"];
  /** Type of the variable. */
  variableType: CiVariableType;
};

export enum PipelineScopeEnum {
  /** Branches. */
  Branches = "BRANCHES",
  /** Pipeline has completed. */
  Finished = "FINISHED",
  /** Pipeline has not started running yet. */
  Pending = "PENDING",
  /** Pipeline is running. */
  Running = "RUNNING",
  /** Tags. */
  Tags = "TAGS",
}

/** Pipeline security report finding sort values */
export enum PipelineSecurityReportFindingSort {
  /** Severity in ascending order. */
  SeverityAsc = "severity_asc",
  /** Severity in descending order. */
  SeverityDesc = "severity_desc",
}

export enum PipelineStatusEnum {
  /** Pipeline was canceled before completion. */
  Canceled = "CANCELED",
  /** Pipeline is in the process of canceling. */
  Canceling = "CANCELING",
  /** Pipeline has been created. */
  Created = "CREATED",
  /** At least one stage of the pipeline failed. */
  Failed = "FAILED",
  /** Pipeline needs to be manually started. */
  Manual = "MANUAL",
  /** Pipeline has not started running yet. */
  Pending = "PENDING",
  /** Pipeline is preparing to run. */
  Preparing = "PREPARING",
  /** Pipeline is running. */
  Running = "RUNNING",
  /** Pipeline is scheduled to run. */
  Scheduled = "SCHEDULED",
  /** Pipeline was skipped. */
  Skipped = "SKIPPED",
  /** Pipeline completed successfully. */
  Success = "SUCCESS",
  /** Pipeline is waiting for an external action. */
  WaitingForCallback = "WAITING_FOR_CALLBACK",
  /** A resource (for example, a runner) that the pipeline requires to run is unavailable. */
  WaitingForResource = "WAITING_FOR_RESOURCE",
}

/** Autogenerated input type of PipelineTriggerCreate */
export type PipelineTriggerCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the pipeline trigger token. */
  description: Scalars["String"]["input"];
  /** Timestamp of when the pipeline trigger token expires. */
  expiresAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Full path of the project that the pipeline trigger token to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of PipelineTriggerDelete */
export type PipelineTriggerDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the pipeline trigger token to delete. */
  id: Scalars["CiTriggerID"]["input"];
};

/** Autogenerated input type of PipelineTriggerUpdate */
export type PipelineTriggerUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the pipeline trigger token. */
  description: Scalars["String"]["input"];
  /** ID of the pipeline trigger token to update. */
  id: Scalars["CiTriggerID"]["input"];
};

/** Pipeline variables minimum override roles. */
export enum PipelineVariablesDefaultRoleType {
  /** Developer */
  Developer = "DEVELOPER",
  /** Maintainer */
  Maintainer = "MAINTAINER",
  /** No one allowed */
  NoOneAllowed = "NO_ONE_ALLOWED",
  /** Owner */
  Owner = "OWNER",
}

export enum PolicyEnforcementType {
  /** Represents an enforced policy type. */
  Enforce = "ENFORCE",
  /** Represents a warn mode policy type. */
  Warn = "WARN",
}

/** Types of security policy project created status. */
export enum PolicyProjectCreatedStatus {
  /** Creating the security policy project failed. */
  Error = "ERROR",
  /** Creating the security policy project was successful. */
  Success = "SUCCESS",
}

/** State of a policy schedule test run. */
export enum PolicyScheduleTestRunState {
  /** Test run completed successfully. */
  Complete = "COMPLETE",
  /** Test run failed. */
  Failed = "FAILED",
  /** Test run is pending and waiting for pipeline creation. */
  Pending = "PENDING",
  /** Test run is in progress. */
  Running = "RUNNING",
}

/** Specifies how multiple policy scope conditions are combined. */
export enum PolicyScopeMatchMode {
  /** All specified conditions must match (AND logic). This is the default behavior. */
  All = "ALL",
  /** At least one specified condition must match (OR logic). */
  Any = "ANY",
}

/** Lists the status of a virtual registry cleanup policy */
export enum PolicyStatus {
  /** Cleanup policy status failed. */
  Failed = "FAILED",
  /** Cleanup policy status running. */
  Running = "RUNNING",
  /** Cleanup policy status scheduled. */
  Scheduled = "SCHEDULED",
}

export enum PolicyType {
  /** Approval policy. */
  ApprovalPolicy = "APPROVAL_POLICY",
  /**
   * Dependency firewall policy. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  DependencyFirewallPolicy = "DEPENDENCY_FIREWALL_POLICY",
  /** Pipeline execution policy. */
  PipelineExecutionPolicy = "PIPELINE_EXECUTION_POLICY",
  /** Pipeline execution schedule policy. */
  PipelineExecutionSchedulePolicy = "PIPELINE_EXECUTION_SCHEDULE_POLICY",
  /** Scan execution policy. */
  ScanExecutionPolicy = "SCAN_EXECUTION_POLICY",
  /** Vulnerability management policy. */
  VulnerabilityManagementPolicy = "VULNERABILITY_MANAGEMENT_POLICY",
}

export enum PolicyViolationErrorType {
  /** Represents error which occurs when pipeline is misconfigured and does not include necessary artifacts to evaluate a policy. */
  ArtifactsMissing = "ARTIFACTS_MISSING",
  /** Represents error which occurs when a security scan job did not complete successfully (e.g., was canceled or failed), preventing policy evaluation. */
  ScanNotSucceeded = "SCAN_NOT_SUCCEEDED",
  /** Represents mismatch between the scans of the source and target pipelines. */
  ScanRemoved = "SCAN_REMOVED",
  /** Represents unknown error. */
  Unknown = "UNKNOWN",
}

export enum PolicyViolationStatus {
  /** Represents a failed policy violation. */
  Failed = "FAILED",
  /** Represents a running policy violation. */
  Running = "RUNNING",
  /** Represents a skipped policy violation. */
  Skipped = "SKIPPED",
  /** Represents a policy violation warning. */
  Warning = "WARNING",
}

export enum PolicyViolations {
  /** Dismissed in Merge request bypass reason. */
  DismissedInMr = "DISMISSED_IN_MR",
}

/** Representation of who is provided access to. For eg: User/Role/MemberRole/Group. */
export type PrincipalInput = {
  /** Full path of the group principal. Only used when type is GROUP. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the principal. Required unless group_path is provided for Group type. */
  id?: InputMaybe<Scalars["Int"]["input"]>;
  /** Type of the principal. */
  type: PrincipalType;
};

/** Types of principal that can have secrets permissions */
export enum PrincipalType {
  /** group. */
  Group = "GROUP",
  /** member role. */
  MemberRole = "MEMBER_ROLE",
  /** predefined role. */
  Role = "ROLE",
  /** user. */
  User = "USER",
}

/** Autogenerated input type of ProcessUserBillablePromotionRequest */
export type ProcessUserBillablePromotionRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Status for the member approval request (approved, denied, pending). */
  status: MemberApprovalStatusType;
  /** Global ID of user to be promoted. */
  userId: Scalars["UserID"]["input"];
};

/** Values for the archived argument */
export enum ProjectArchived {
  /** Exclude archived projects. */
  Exclude = "EXCLUDE",
  /** Include archived projects. */
  Include = "INCLUDE",
  /** Only archived projects. */
  Only = "ONLY",
}

/** Autogenerated input type of ProjectCiCdSettingsUpdate */
export type ProjectCiCdSettingsUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates the ability to push to this repository using a job token from an allowlisted project */
  crossProjectPushForJobTokenAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether pipeline variables can be displayed in the UI. */
  displayPipelineVariables?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full Path of the project the settings belong to. */
  fullPath: Scalars["ID"]["input"];
  /** Indicates whether group runners are enabled for the project. */
  groupRunnersEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether CI/CD job tokens generated in other projects have restricted access to this project. */
  inboundJobTokenScopeEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Indicates whether CI/CD job tokens generated in this project have restricted access to other projects. Deprecated in GitLab 16.0: Outbound job token scope is being removed. This field can now only be set to false.
   * @deprecated Outbound job token scope is being removed. This field can now only be set to false. Deprecated in GitLab 16.0.
   */
  jobTokenScopeEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether the latest artifact should be kept for the project. */
  keepLatestArtifact?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Maximum number of parallel pipelines per merge train. */
  maxPipelinesPerMergeTrain?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates if merged results pipelines are enabled for the project. */
  mergePipelinesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Merge train enforcement level for the project. */
  mergeTrainEnforcement?: InputMaybe<MergeTrainEnforcement>;
  /** Indicates if merge trains are enabled for the project. */
  mergeTrainsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether an option is allowed to merge without refreshing the merge train. Ignored unless the `merge_trains_skip_train` feature flag is also enabled. */
  mergeTrainsSkipTrainAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Minimum role required to set variables when creating a pipeline or running a job. */
  pipelineVariablesMinimumOverrideRole?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates the ability to push to the original project repository using a job token */
  pushRepositoryForJobTokenAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Default process mode for resource groups in the project. */
  resourceGroupDefaultProcessMode?: InputMaybe<ResourceGroupsProcessMode>;
  /** Indicates whether branch pipelines are skipped if a merge request is open. */
  skipBranchPipelinesForMrs?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Compliance status of the project control. */
export enum ProjectComplianceControlStatus {
  /** Fail */
  Fail = "FAIL",
  /** Pass */
  Pass = "PASS",
  /** Pending */
  Pending = "PENDING",
}

export type ProjectComplianceControlStatusInput = {
  /** Compliance requirement id of the statuses. */
  complianceRequirementId?: InputMaybe<
    Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementID"]["input"]
  >;
};

/** Values for order_by field for project requirement statuses. */
export enum ProjectComplianceRequirementStatusOrderBy {
  /** Order by frameworks. */
  Framework = "FRAMEWORK",
  /** Order by projects. */
  Project = "PROJECT",
  /** Order by requirements. */
  Requirement = "REQUIREMENT",
}

/** Filters for project compliance violations. */
export type ProjectComplianceViolationFilterInput = {
  /** Control ID for which to filter compliance violations. */
  controlId?: InputMaybe<
    Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementsControlID"]["input"]
  >;
  /** Compliance violations created on or after the date (inclusive). */
  createdAfter?: InputMaybe<Scalars["Date"]["input"]>;
  /** Compliance violations created on or before the date (inclusive). */
  createdBefore?: InputMaybe<Scalars["Date"]["input"]>;
  /** Project ID for which to filter compliance violations. */
  projectId?: InputMaybe<Scalars["ProjectID"]["input"]>;
  /** Status of the project compliance violation. */
  status?: InputMaybe<Array<ComplianceViolationStatus>>;
};

/** Autogenerated input type of ProjectCustomAttributeSet */
export type ProjectCustomAttributeSetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Key of the custom attribute. */
  key: Scalars["String"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** Value of the custom attribute. */
  value: Scalars["String"]["input"];
};

/** Access level of a project feature */
export enum ProjectFeatureAccessLevel {
  /** Not enabled for anyone. */
  Disabled = "DISABLED",
  /** Enabled for everyone able to access the project. */
  Enabled = "ENABLED",
  /** Enabled only for team members. */
  Private = "PRIVATE",
}

/** Autogenerated input type of ProjectMemberBulkUpdate */
export type ProjectMemberBulkUpdateInput = {
  /** Access level to update the members to. */
  accessLevel: MemberAccessLevel;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Date and time the membership expires. */
  expiresAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Global ID of the project. */
  projectId: Scalars["ProjectID"]["input"];
  /** Global IDs of the members. */
  userIds: Array<Scalars["UserID"]["input"]>;
};

/** Project member relation */
export enum ProjectMemberRelation {
  /** Descendants members */
  Descendants = "DESCENDANTS",
  /** Direct members */
  Direct = "DIRECT",
  /** Inherited members */
  Inherited = "INHERITED",
  /** Invited Groups members */
  InvitedGroups = "INVITED_GROUPS",
  /** Shared Into Ancestors members */
  SharedIntoAncestors = "SHARED_INTO_ANCESTORS",
}

export type ProjectRequirementComplianceStatusInput = {
  /** Filter compliance requirement statuses by compliance framework. */
  frameworkId?: InputMaybe<Scalars["ComplianceManagementFrameworkID"]["input"]>;
  /** Filter compliance requirement statuses by compliance requirement. */
  requirementId?: InputMaybe<
    Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementID"]["input"]
  >;
};

/** Autogenerated input type of ProjectSavedReplyCreate */
export type ProjectSavedReplyCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Content of the saved reply. */
  content: Scalars["String"]["input"];
  /** Name of the saved reply. */
  name: Scalars["String"]["input"];
  /** Project for the saved reply. */
  projectId: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of ProjectSavedReplyDestroy */
export type ProjectSavedReplyDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the project-level saved reply. */
  id: Scalars["ProjectsSavedReplyID"]["input"];
};

/** Autogenerated input type of ProjectSavedReplyUpdate */
export type ProjectSavedReplyUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Content of the saved reply. */
  content: Scalars["String"]["input"];
  /** Global ID of the project-level saved reply. */
  id: Scalars["ProjectsSavedReplyID"]["input"];
  /** Name of the saved reply. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of ProjectSecretCreate */
export type ProjectSecretCreateInput = {
  /** Branches that can access the secret. */
  branch: Scalars["String"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the project secret. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Environments that can access the secret. */
  environment: Scalars["String"]["input"];
  /** Name of the project secret. */
  name: Scalars["String"]["input"];
  /** Project of the secret. */
  projectPath: Scalars["ID"]["input"];
  /** Number of days between rotation reminders for the secret. */
  rotationIntervalDays?: InputMaybe<Scalars["Int"]["input"]>;
  /** Value of the project secret. */
  secret: Scalars["String"]["input"];
};

/** Autogenerated input type of ProjectSecretDelete */
export type ProjectSecretDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the project secret. */
  name: Scalars["String"]["input"];
  /** Project of the secret. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ProjectSecretUpdate */
export type ProjectSecretUpdateInput = {
  /** New branches that can access the secret. */
  branch?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** New description of the project secret. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** New environments that can access the secret. */
  environment?: InputMaybe<Scalars["String"]["input"]>;
  /** This should match the current metadata version of the project secret being updated. */
  metadataCas: Scalars["Int"]["input"];
  /** Name of the project secret to update. */
  name: Scalars["String"]["input"];
  /** Project of the secret. */
  projectPath: Scalars["ID"]["input"];
  /** Number of days between rotation reminders for the secret. */
  rotationIntervalDays?: InputMaybe<Scalars["Int"]["input"]>;
  /** New value of the project secret. */
  secret?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ProjectSecretsManagerDeprovision */
export type ProjectSecretsManagerDeprovisionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project of the secrets manager. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ProjectSecretsManagerInitialize */
export type ProjectSecretsManagerInitializeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Project of the secrets manager. */
  projectPath: Scalars["ID"]["input"];
};

/** Values for the project secrets manager status */
export enum ProjectSecretsManagerStatus {
  /** Secrets manager has been provisioned and enabled. */
  Active = "ACTIVE",
  /** Secrets manager is being deprovisioned. */
  Deprovisioning = "DEPROVISIONING",
  /** Secrets manager is being provisioned. */
  Provisioning = "PROVISIONING",
}

/** Autogenerated input type of ProjectSecretsPermissionDelete */
export type ProjectSecretsPermissionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** User/MemberRole/Role/Group whose access is being removed. */
  principal: PrincipalInput;
  /** Project from which the permissions are removed. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ProjectSecretsPermissionUpdate */
export type ProjectSecretsPermissionUpdateInput = {
  /** Actions that can be performed on secrets. */
  actions: Array<SecretsManagementAction>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Expiration date for Secret Permission (optional). */
  expiredAt?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /** User/MemberRole/Role/Group that is provided access. */
  principal: PrincipalInput;
  /** Project to which the permissions are added. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ProjectSecurityExclusionCreate */
export type ProjectSecurityExclusionCreateInput = {
  /** Whether the exclusion is active. */
  active: Scalars["Boolean"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Optional description for the exclusion. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project the exclusion will be associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Scanner to ignore values for based on the exclusion. */
  scanner: ExclusionScannerEnum;
  /** Type of the exclusion. */
  type: ExclusionTypeEnum;
  /** Value of the exclusion. */
  value: Scalars["String"]["input"];
};

/** Autogenerated input type of ProjectSecurityExclusionDelete */
export type ProjectSecurityExclusionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the exclusion to be deleted. */
  id: Scalars["SecurityProjectSecurityExclusionID"]["input"];
};

/** Autogenerated input type of ProjectSecurityExclusionUpdate */
export type ProjectSecurityExclusionUpdateInput = {
  /** Whether the exclusion is active. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Optional description for the exclusion. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the exclusion to be updated. */
  id: Scalars["SecurityProjectSecurityExclusionID"]["input"];
  /** Scanner to ignore values for based on the exclusion. */
  scanner?: InputMaybe<ExclusionScannerEnum>;
  /** Type of the exclusion. */
  type?: InputMaybe<ExclusionTypeEnum>;
  /** Value of the exclusion. */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of ProjectSetComplianceFramework */
export type ProjectSetComplianceFrameworkInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the compliance framework to assign to the project. Set to `null` to unset. */
  complianceFrameworkId?: InputMaybe<
    Scalars["ComplianceManagementFrameworkID"]["input"]
  >;
  /** ID of the project to change the compliance framework of. */
  projectId: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of ProjectSetContinuousVulnerabilityScanning */
export type ProjectSetContinuousVulnerabilityScanningInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for continuous vulnerability scanning feature. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ProjectSetLocked */
export type ProjectSetLockedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path to the file. */
  filePath: Scalars["String"]["input"];
  /** Whether or not to lock the file path. */
  lock: Scalars["Boolean"]["input"];
  /** Full path of the project to mutate. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of ProjectSettingsUpdate */
export type ProjectSettingsUpdateInput = {
  /**
   * Indicates whether AI audit events are stored for the project. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  aiAuditEventsStorageEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Settings for excluding files from Duo context. */
  duoContextExclusionSettings?: InputMaybe<DuoContextExclusionSettingsInput>;
  /** Indicates whether GitLab Duo features are enabled for the project. */
  duoFeaturesEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether SAST False Positive Detection is enabled for the project. */
  duoSastFpDetectionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether SAST Vulnerability Resolution workflow is enabled for the project. */
  duoSastVrWorkflowEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether Secret Detection False Positive Detection is enabled for the project. */
  duoSecretDetectionFpEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full Path of the project the settings belong to. */
  fullPath: Scalars["ID"]["input"];
  /** Indicates whether tool approval for Duo Workflow sessions is enabled for the project. */
  toolApprovalForSessionEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Indicates whether web-based commit signing is enabled for the project. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  webBasedCommitSigningEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Values for sorting projects */
export enum ProjectSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** ID by ascending order. */
  IdAsc = "ID_ASC",
  /** ID by descending order. */
  IdDesc = "ID_DESC",
  /** Latest activity by ascending order. */
  LatestActivityAsc = "LATEST_ACTIVITY_ASC",
  /** Latest activity by descending order. */
  LatestActivityDesc = "LATEST_ACTIVITY_DESC",
  /** Name by ascending order. */
  NameAsc = "NAME_ASC",
  /** Name by descending order. */
  NameDesc = "NAME_DESC",
  /** Path by ascending order. */
  PathAsc = "PATH_ASC",
  /** Path by descending order. */
  PathDesc = "PATH_DESC",
  /** Stars by ascending order. */
  StarsAsc = "STARS_ASC",
  /** Stars by descending order. */
  StarsDesc = "STARS_DESC",
  /** Storage size by ascending order. */
  StorageSizeAsc = "STORAGE_SIZE_ASC",
  /** Storage size by descending order. */
  StorageSizeDesc = "STORAGE_SIZE_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Autogenerated input type of ProjectSubscriptionCreate */
export type ProjectSubscriptionCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the downstream project of the Project Subscription. */
  projectPath: Scalars["String"]["input"];
  /** Full path of the upstream project of the Project Subscription. */
  upstreamPath: Scalars["String"]["input"];
};

/** Autogenerated input type of ProjectSubscriptionDelete */
export type ProjectSubscriptionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the subscription to delete. */
  subscriptionId: Scalars["CiSubscriptionsProjectID"]["input"];
};

/** Autogenerated input type of ProjectSyncFork */
export type ProjectSyncForkInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project to initialize. */
  projectPath: Scalars["ID"]["input"];
  /** Ref of the fork to fetch into. */
  targetBranch: Scalars["String"]["input"];
};

/** Autogenerated input type of ProjectTargetBranchRuleCreate */
export type ProjectTargetBranchRuleCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name for the target branch rule. */
  name: Scalars["String"]["input"];
  /** Project ID for the target branch rule. */
  projectId: Scalars["ProjectID"]["input"];
  /** Target branch for the target branch rule. */
  targetBranch: Scalars["String"]["input"];
};

/** Autogenerated input type of ProjectTargetBranchRuleDestroy */
export type ProjectTargetBranchRuleDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID for the target branch rule. */
  id: Scalars["ProjectsTargetBranchRuleID"]["input"];
};

/** The context type of the tracked context */
export enum ProjectTrackedContext {
  /** Branch type */
  Branch = "BRANCH",
  /** Tag type */
  Tag = "TAG",
}

/** Input for specifying a project tracked context */
export type ProjectTrackedContextInput = {
  /** Name of the tracked context. */
  name: Scalars["String"]["input"];
  /** Type of the tracked context. */
  type: ProjectTrackedContext;
};

/** Autogenerated input type of ProjectUpdateComplianceFrameworks */
export type ProjectUpdateComplianceFrameworksInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of the compliance framework to update for the project. */
  complianceFrameworkIds: Array<
    Scalars["ComplianceManagementFrameworkID"]["input"]
  >;
  /** ID of the project to change the compliance framework of. */
  projectId: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of PrometheusIntegrationCreate */
export type PrometheusIntegrationCreateInput = {
  /** Whether the integration is receiving alerts. */
  active: Scalars["Boolean"]["input"];
  /**
   * Endpoint at which Prometheus can be queried. Deprecated in GitLab 18.2: Feature removed in 16.0.
   * @deprecated Feature removed in 16.0. Deprecated in GitLab 18.2.
   */
  apiUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the integration. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Custom mapping of GitLab alert attributes to fields from the payload example. */
  payloadAttributeMappings?: InputMaybe<
    Array<AlertManagementPayloadAlertFieldInput>
  >;
  /** Example of an alert payload. */
  payloadExample?: InputMaybe<Scalars["JsonString"]["input"]>;
  /** Project to create the integration in. */
  projectPath: Scalars["ID"]["input"];
  /** Type of integration to create. Cannot be changed after creation. */
  type?: InputMaybe<AlertManagementIntegrationType>;
};

/** Autogenerated input type of PrometheusIntegrationResetToken */
export type PrometheusIntegrationResetTokenInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the integration to mutate. */
  id: Scalars["IntegrationsPrometheusID"]["input"];
};

/** Autogenerated input type of PrometheusIntegrationUpdate */
export type PrometheusIntegrationUpdateInput = {
  /** Whether the integration is receiving alerts. */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Endpoint at which Prometheus can be queried. Deprecated in GitLab 18.2: Feature removed in 16.0.
   * @deprecated Feature removed in 16.0. Deprecated in GitLab 18.2.
   */
  apiUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the integration to mutate. */
  id: Scalars["IntegrationsPrometheusID"]["input"];
  /** Name of the integration. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Custom mapping of GitLab alert attributes to fields from the payload example. */
  payloadAttributeMappings?: InputMaybe<
    Array<AlertManagementPayloadAlertFieldInput>
  >;
  /** Example of an alert payload. */
  payloadExample?: InputMaybe<Scalars["JsonString"]["input"]>;
};

/** Autogenerated input type of PromoteToEpic */
export type PromoteToEpicInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group the promoted epic will belong to. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
};

/** Values for prompt injection protection for a namespace. */
export enum PromptInjectionProtectionLevel {
  /** Scan and block detected prompt injection attempts. */
  Interrupt = "INTERRUPT",
  /** Scan and log results, but do not block requests. */
  LogOnly = "LOG_ONLY",
  /** Turn off scanning entirely. No prompt data is sent to third-party services. */
  NoChecks = "NO_CHECKS",
}

/** Defines which user roles, users, deploy keys, or groups can push to a protected branch. */
export type PushAccessLevelInput = {
  /** Access level allowed to perform action. */
  accessLevel?: InputMaybe<Scalars["Int"]["input"]>;
  /** Deploy key assigned to the access level. */
  deployKeyId?: InputMaybe<Scalars["DeployKeyID"]["input"]>;
  /** Group associated with the access level. */
  groupId?: InputMaybe<Scalars["GroupID"]["input"]>;
  /**
   * Custom member role associated with the access level. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  memberRoleId?: InputMaybe<Scalars["MemberRoleID"]["input"]>;
  /** User associated with the access level. */
  userId?: InputMaybe<Scalars["UserID"]["input"]>;
};

/** Dependency reachability status */
export enum ReachabilityType {
  /** Dependency is imported and in use. */
  InUse = "IN_USE",
  /** Dependency is not in use. */
  NotFound = "NOT_FOUND",
  /** Dependency reachability status is not available. */
  Unknown = "UNKNOWN",
}

/** Type of ref */
export enum RefType {
  /** Ref type for branches. */
  Heads = "HEADS",
  /** Ref type for tags. */
  Tags = "TAGS",
}

/** Autogenerated input type of RefreshFindingTokenStatus */
export type RefreshFindingTokenStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Vulnerability whose token status should be refreshed. */
  vulnerabilityId: Scalars["VulnerabilityID"]["input"];
};

/** Autogenerated input type of RefreshSecurityFindingTokenStatus */
export type RefreshSecurityFindingTokenStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** UUID of the Security::Finding whose token status should be refreshed (MR context). */
  securityFindingUuid: Scalars["String"]["input"];
};

/** Autogenerated input type of RefreshStandardsAdherenceChecks */
export type RefreshStandardsAdherenceChecksInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group path. */
  groupPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of RefreshVulnerabilityFindingTokenStatus */
export type RefreshVulnerabilityFindingTokenStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Vulnerability whose token status should be refreshed. */
  vulnerabilityId: Scalars["VulnerabilityID"]["input"];
};

/** State of a Geo registry */
export enum RegistryState {
  /** Registry that failed to sync. */
  Failed = "FAILED",
  /** Registry waiting to be synced. */
  Pending = "PENDING",
  /** Registry currently syncing. */
  Started = "STARTED",
  /** Registry that is synced. */
  Synced = "SYNCED",
}

/** Relationship of the policies to resync. */
export enum RelationshipType {
  /** Policies defined for the project/group only. */
  Direct = "DIRECT",
  /** Policies defined for the project/group and ancestor groups. */
  Inherited = "INHERITED",
}

/** The position to which the object should be moved */
export enum RelativePositionType {
  /** Object is moved after an adjacent object. */
  After = "AFTER",
  /** Object is moved before an adjacent object. */
  Before = "BEFORE",
}

/** Autogenerated input type of ReleaseAssetLinkCreate */
export type ReleaseAssetLinkCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Relative path for a direct asset link. */
  directAssetPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Type of the asset link. */
  linkType?: InputMaybe<ReleaseAssetLinkType>;
  /** Name of the asset link. */
  name: Scalars["String"]["input"];
  /** Full path of the project the asset link is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Name of the associated release's tag. */
  tagName: Scalars["String"]["input"];
  /** URL of the asset link. */
  url: Scalars["String"]["input"];
};

/** Autogenerated input type of ReleaseAssetLinkDelete */
export type ReleaseAssetLinkDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the release asset link to delete. */
  id: Scalars["ReleasesLinkID"]["input"];
};

/** Fields that are available when modifying a release asset link */
export type ReleaseAssetLinkInput = {
  /** Relative path for a direct asset link. */
  directAssetPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Type of the asset link. */
  linkType?: InputMaybe<ReleaseAssetLinkType>;
  /** Name of the asset link. */
  name: Scalars["String"]["input"];
  /** URL of the asset link. */
  url: Scalars["String"]["input"];
};

/** Type of the link: `other`, `runbook`, `image`, `package` */
export enum ReleaseAssetLinkType {
  /** Image link type */
  Image = "IMAGE",
  /** Other link type */
  Other = "OTHER",
  /** Package link type */
  Package = "PACKAGE",
  /** Runbook link type */
  Runbook = "RUNBOOK",
}

/** Autogenerated input type of ReleaseAssetLinkUpdate */
export type ReleaseAssetLinkUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Relative path for a direct asset link. */
  directAssetPath?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the release asset link to update. */
  id: Scalars["ReleasesLinkID"]["input"];
  /** Type of the asset link. */
  linkType?: InputMaybe<ReleaseAssetLinkType>;
  /** Name of the asset link. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** URL of the asset link. */
  url?: InputMaybe<Scalars["String"]["input"]>;
};

/** Fields that are available when modifying release assets */
export type ReleaseAssetsInput = {
  /** List of asset links to associate to the release. */
  links?: InputMaybe<Array<ReleaseAssetLinkInput>>;
};

/** Autogenerated input type of ReleaseCreate */
export type ReleaseCreateInput = {
  /** Assets associated to the release. */
  assets?: InputMaybe<ReleaseAssetsInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description (also known as "release notes") of the release. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Title of each milestone the release is associated with. GitLab Premium customers can specify group milestones. */
  milestones?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Name of the release. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project the release is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Commit SHA or branch name to use if creating a new tag. */
  ref?: InputMaybe<Scalars["String"]["input"]>;
  /** Date and time for the release. Defaults to the current time. Expected in ISO 8601 format (`2019-03-15T08:00:00Z`). Only provide this field if creating an upcoming or historical release. */
  releasedAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Message to use if creating a new annotated tag. */
  tagMessage?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the tag to associate with the release. */
  tagName: Scalars["String"]["input"];
};

/** Autogenerated input type of ReleaseDelete */
export type ReleaseDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project the release is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Name of the tag associated with the release to delete. */
  tagName: Scalars["String"]["input"];
};

/** Values for sorting releases */
export enum ReleaseSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Released at by ascending order. */
  ReleasedAtAsc = "RELEASED_AT_ASC",
  /** Released at by descending order. */
  ReleasedAtDesc = "RELEASED_AT_DESC",
}

/** Release tag ID wildcard values */
export enum ReleaseTagWildcardId {
  /** Release tag is assigned. */
  Any = "ANY",
  /** No release tag is assigned. */
  None = "NONE",
}

/** Autogenerated input type of ReleaseUpdate */
export type ReleaseUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description (release notes) of the release. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Title of each milestone the release is associated with. GitLab Premium customers can specify group milestones. */
  milestones?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Name of the release. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project the release is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Release date. */
  releasedAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Name of the tag associated with the release. */
  tagName: Scalars["String"]["input"];
};

/** Autogenerated input type of RemoveProjectFromSecurityDashboard */
export type RemoveProjectFromSecurityDashboardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the project to remove from the Instance Security Dashboard. */
  id: Scalars["ProjectID"]["input"];
};

export enum ReplicationStateEnum {
  /** Replication process finished but failed. */
  Failed = "FAILED",
  /** Replication process has not started. */
  Pending = "PENDING",
  /** Replication process is in progress. */
  Started = "STARTED",
  /** Replication process finished successfully. */
  Synced = "SYNCED",
}

/** Autogenerated input type of RepositionImageDiffNote */
export type RepositionImageDiffNoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the DiffNote to update. */
  id: Scalars["DiffNoteID"]["input"];
  /** Position of the note on a diff. */
  position: UpdateDiffImagePositionInput;
};

export type RequirementLegacyFilterInput = {
  /** List of legacy requirement IIDs of work items. or example `["1", "2"]`. */
  legacyIids: Array<Scalars["String"]["input"]>;
};

/** State of a requirement */
export enum RequirementState {
  /** Archived requirement. */
  Archived = "ARCHIVED",
  /** Open requirement. */
  Opened = "OPENED",
}

/** Status of a requirement based on last test report */
export enum RequirementStatusFilter {
  /** Failed test report. */
  Failed = "FAILED",
  /** Requirements without any test report. */
  Missing = "MISSING",
  /** Passed test report. */
  Passed = "PASSED",
}

/** Process mode for resource groups */
export enum ResourceGroupsProcessMode {
  /** Newest first. */
  NewestFirst = "NEWEST_FIRST",
  /** Newest ready first. */
  NewestReadyFirst = "NEWEST_READY_FIRST",
  /** Oldest first. */
  OldestFirst = "OLDEST_FIRST",
  /** Unordered. */
  Unordered = "UNORDERED",
}

/** Autogenerated input type of RestorePagesDeployment */
export type RestorePagesDeploymentInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the Pages Deployment. */
  id: Scalars["PagesDeploymentID"]["input"];
};

/** Autogenerated input type of ResyncSecurityPolicies */
export type ResyncSecurityPoliciesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project or group. */
  fullPath: Scalars["String"]["input"];
  /** Relationship of the policies to resync. */
  relationship?: InputMaybe<RelationshipType>;
};

/** Reviewer ID wildcard values */
export enum ReviewerWildcardId {
  /** Any reviewer is assigned. */
  Any = "ANY",
  /** No reviewer is assigned. */
  None = "NONE",
}

/** Risk rating levels based on score ranges */
export enum RiskRating {
  /** Critical risk (76–100). */
  Critical = "CRITICAL",
  /** High risk (51–75). */
  High = "HIGH",
  /** Low risk (0–25). */
  Low = "LOW",
  /** Medium risk (26–50). */
  Medium = "MEDIUM",
  /** Unknown risk level. */
  Unknown = "UNKNOWN",
}

/** Autogenerated input type of RunnerAssignToProject */
export type RunnerAssignToProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project to which the runner will be assigned. */
  projectPath: Scalars["ID"]["input"];
  /** ID of the runner to assign to the project . */
  runnerId: Scalars["CiRunnerID"]["input"];
};

/** Autogenerated input type of RunnerBulkPause */
export type RunnerBulkPauseInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of the runners to pause or unpause. */
  ids: Array<Scalars["CiRunnerID"]["input"]>;
  /** Indicates the runner is not allowed to receive jobs. */
  paused: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of RunnerCacheClear */
export type RunnerCacheClearInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the project that will have its runner cache cleared. */
  projectId: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of RunnerCreate */
export type RunnerCreateInput = {
  /** Access level of the runner. */
  accessLevel?: InputMaybe<CiRunnerAccessLevel>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the runner. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the group that the runner is created in (valid only for group runner). */
  groupId?: InputMaybe<Scalars["GroupID"]["input"]>;
  /** Indicates the runner is locked. */
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Runner's maintenance notes. */
  maintenanceNote?: InputMaybe<Scalars["String"]["input"]>;
  /** Maximum timeout (in seconds) for jobs processed by the runner. */
  maximumTimeout?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates the runner is not allowed to receive jobs. */
  paused?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Private projects' "compute cost factor" associated with the runner (GitLab.com only). Introduced in GitLab 17.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.7.
   */
  privateProjectsMinutesCostFactor?: InputMaybe<Scalars["Float"]["input"]>;
  /** Global ID of the project that the runner is created in (valid only for project runner). */
  projectId?: InputMaybe<Scalars["ProjectID"]["input"]>;
  /**
   * Public projects' "compute cost factor" associated with the runner (GitLab.com only). Introduced in GitLab 17.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.7.
   */
  publicProjectsMinutesCostFactor?: InputMaybe<Scalars["Float"]["input"]>;
  /** Indicates the runner is able to run untagged jobs. */
  runUntagged?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Type of the runner to create. */
  runnerType: CiRunnerType;
  /** Tags associated with the runner. */
  tagList?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Token expiration time (ISO 8601 format). Must be between 5 minutes and 15 days in the future, and cannot exceed instance/group/project limits. */
  tokenExpiresAt?: InputMaybe<Scalars["Time"]["input"]>;
  /**
   * Deadline for token rotation (ISO 8601 format). Requires tokenExpiresAt. Must be <= tokenExpiresAt. Setting both to the same value disables token rotation. Introduced in GitLab 18.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.10.
   */
  tokenRotationDeadline?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Autogenerated input type of RunnerDelete */
export type RunnerDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the runner to delete. */
  id: Scalars["CiRunnerID"]["input"];
};

/** Autogenerated input type of RunnerUnassignFromProject */
export type RunnerUnassignFromProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project from which the runner will be unassigned. */
  projectPath: Scalars["ID"]["input"];
  /** ID of the runner to unassign from the project. */
  runnerId: Scalars["CiRunnerID"]["input"];
};

/** Autogenerated input type of RunnerUpdate */
export type RunnerUpdateInput = {
  /** Access level of the runner. */
  accessLevel?: InputMaybe<CiRunnerAccessLevel>;
  /**
   * Indicates the runner is allowed to receive jobs. Deprecated in GitLab 14.8: Renamed.
   * @deprecated Renamed. Use `paused` instead. Deprecated in GitLab 14.8.
   */
  active?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Projects associated with the runner. Available only for project runners. */
  associatedProjects?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the runner. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the runner to update. */
  id: Scalars["CiRunnerID"]["input"];
  /** Indicates the runner is locked. */
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Runner's maintenance notes. */
  maintenanceNote?: InputMaybe<Scalars["String"]["input"]>;
  /** Maximum timeout (in seconds) for jobs processed by the runner. */
  maximumTimeout?: InputMaybe<Scalars["Int"]["input"]>;
  /** Indicates the runner is not allowed to receive jobs. */
  paused?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Private projects' "compute cost factor" associated with the runner (GitLab.com only). Introduced in GitLab 17.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.7.
   */
  privateProjectsMinutesCostFactor?: InputMaybe<Scalars["Float"]["input"]>;
  /**
   * Public projects' "compute cost factor" associated with the runner (GitLab.com only). Introduced in GitLab 17.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.7.
   */
  publicProjectsMinutesCostFactor?: InputMaybe<Scalars["Float"]["input"]>;
  /** Indicates the runner is able to run untagged jobs. */
  runUntagged?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Tags associated with the runner. */
  tagList?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of RunnersExportUsage */
export type RunnersExportUsageInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** UTC start date of the period to report on. Defaults to the start of last full month. */
  fromDate?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /** Filter jobs by the full path of the group or project they belong to. For example, `gitlab-org` or `gitlab-org/gitlab`. Available only to administrators and users with the Maintainer role for the group (when a group is specified), or project (when a project is specified). Limited to runners from 5000 child projects. */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Maximum number of projects to return. All other runner usage will be attributed to an `<Other projects>` entry. Defaults to 1000 projects. */
  maxProjectCount?: InputMaybe<Scalars["Int"]["input"]>;
  /** Scope of the runners to include in the report. */
  runnerType?: InputMaybe<CiRunnerType>;
  /**
   * UTC end date of the period to report on. " \
   *             "Defaults to the end of the month specified by `fromDate`.
   */
  toDate?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
};

/** Autogenerated input type of RunnersRegistrationTokenReset */
export type RunnersRegistrationTokenResetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the project or group to reset the token for. Omit if resetting instance runner token. */
  id?: InputMaybe<Scalars["ID"]["input"]>;
  /** Scope of the object to reset the token for. */
  type: CiRunnerType;
};

/** Autogenerated input type of SafeDisablePipelineVariables */
export type SafeDisablePipelineVariablesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group to disable pipeline variables for. */
  fullPath: Scalars["ID"]["input"];
};

/** Represents the analyzers entity in SAST CI configuration */
export type SastCiConfigurationAnalyzersEntityInput = {
  /** State of the analyzer. */
  enabled: Scalars["Boolean"]["input"];
  /** Name of analyzer. */
  name: Scalars["String"]["input"];
  /** List of variables for the analyzer. */
  variables?: InputMaybe<Array<SastCiConfigurationEntityInput>>;
};

/** Represents an entity in SAST CI configuration */
export type SastCiConfigurationEntityInput = {
  /** Default value that is used if value is empty. */
  defaultValue: Scalars["String"]["input"];
  /** CI keyword of entity. */
  field: Scalars["String"]["input"];
  /** Current value of the entity. */
  value: Scalars["String"]["input"];
};

/** Represents a CI configuration of SAST */
export type SastCiConfigurationInput = {
  /** List of analyzers and related variables for the SAST configuration. */
  analyzers?: InputMaybe<Array<SastCiConfigurationAnalyzersEntityInput>>;
  /** List of global entities related to SAST configuration. */
  global?: InputMaybe<Array<SastCiConfigurationEntityInput>>;
  /** List of pipeline entities related to SAST configuration. */
  pipeline?: InputMaybe<Array<SastCiConfigurationEntityInput>>;
};

/** Size of UI component in SAST configuration page */
export enum SastUiComponentSize {
  /** Size of UI component in SAST configuration page is large. */
  Large = "LARGE",
  /** Size of UI component in SAST configuration page is medium. */
  Medium = "MEDIUM",
  /** Size of UI component in SAST configuration page is small. */
  Small = "SMALL",
}

/** Autogenerated input type of SavedReplyCreate */
export type SavedReplyCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Content of the saved reply. */
  content: Scalars["String"]["input"];
  /** Name of the saved reply. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of SavedReplyDestroy */
export type SavedReplyDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the user saved reply. */
  id: Scalars["UsersSavedReplyID"]["input"];
};

/** Autogenerated input type of SavedReplyUpdate */
export type SavedReplyUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Content of the saved reply. */
  content: Scalars["String"]["input"];
  /** Global ID of the user saved reply. */
  id: Scalars["UsersSavedReplyID"]["input"];
  /** Name of the saved reply. */
  name: Scalars["String"]["input"];
};

/** Values for sbom source types */
export enum SbomSourceType {
  /** Source Type: container_scanning. */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Source Type: container_scanning_for_registry. */
  ContainerScanningForRegistry = "CONTAINER_SCANNING_FOR_REGISTRY",
  /** Source Type: dependency_scanning. */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** Enum source nil. */
  NilSource = "NIL_SOURCE",
}

/** Autogenerated input type of ScanExecutionPolicyCommit */
export type ScanExecutionPolicyCommitInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  fullPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the policy. If the name is null, the `name` field from `policy_yaml` is used. */
  name: Scalars["String"]["input"];
  /** Changes the operation mode. */
  operationMode: MutationOperationMode;
  /** YAML snippet of the policy. */
  policyYaml: Scalars["String"]["input"];
  /**
   * Full path of the project. Deprecated in GitLab 14.10: Use `fullPath`.
   * @deprecated Use `fullPath`. Deprecated in GitLab 14.10.
   */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Options for filtering by scan mode. */
export enum ScanModeEnum {
  /** Return results from all scans. */
  All = "ALL",
  /** Return results from full scans. */
  Full = "FULL",
  /** Return results from partial scans. */
  Partial = "PARTIAL",
}

/** Computed display status for a scan profile. */
export enum ScanProfileStatus {
  /** Scans succeeding and not stale. */
  Active = "ACTIVE",
  /** 3+ consecutive scan failures. */
  Failed = "FAILED",
  /** Profile is not applied for the scan type. */
  NotConfigured = "NOT_CONFIGURED",
  /** Profile is attached but no scan has completed yet. */
  Pending = "PENDING",
  /** No scan activity in 90 days. */
  Stale = "STALE",
  /** Fewer than 3 consecutive scan failures. */
  Warning = "WARNING",
}

/** Scan profile trigger type */
export enum ScanProfileTriggerType {
  /** Default branch pipeline */
  DefaultBranchPipeline = "DEFAULT_BRANCH_PIPELINE",
  /** Git push event */
  GitPushEvent = "GIT_PUSH_EVENT",
  /** Merge request pipeline */
  MergeRequestPipeline = "MERGE_REQUEST_PIPELINE",
  /**
   * SBOM ingested. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  SbomIngested = "SBOM_INGESTED",
}

/** The status of the security scan */
export enum ScanStatus {
  /** The scan has been created. */
  Created = "CREATED",
  /** The related CI build failed. */
  JobFailed = "JOB_FAILED",
  /** Report couldn't be prepared. */
  PreparationFailed = "PREPARATION_FAILED",
  /** Preparing the report for the scan. */
  Preparing = "PREPARING",
  /** Report for the scan has been removed from the database. */
  Purged = "PURGED",
  /** The report artifact provided by the CI build couldn't be parsed. */
  ReportError = "REPORT_ERROR",
  /** The report has been successfully prepared. */
  Succeeded = "SUCCEEDED",
}

/** Level of search */
export enum SearchLevel {
  /** Global search including all groups and projects. */
  Global = "GLOBAL",
  /** Group search. */
  Group = "GROUP",
  /** Project search. */
  Project = "PROJECT",
}

/** Type of search */
export enum SearchType {
  /** Advanced search. */
  Advanced = "ADVANCED",
  /** Basic search. */
  Basic = "BASIC",
  /** Exact code search. */
  Zoekt = "ZOEKT",
}

/** Autogenerated input type of SecretPermissionDelete */
export type SecretPermissionDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whose permission to be deleted. */
  principal: PrincipalInput;
  /** Project permissions for the secret. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of SecretPermissionUpdate */
export type SecretPermissionUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Expiration date for Secret Permission (optional). */
  expiredAt?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /** Permissions to be provided. ['create', 'update', 'read', 'delete']. */
  permissions: Array<Scalars["String"]["input"]>;
  /** User/MemberRole/Role/Group that is provided access. */
  principal: PrincipalInput;
  /** Project to which the permissions are added. */
  projectPath: Scalars["ID"]["input"];
};

/** Status of secret rotation */
export enum SecretRotationStatus {
  /** Rotation is due within 7 days. */
  Approaching = "APPROACHING",
  /** Rotation is not due soon. */
  Ok = "OK",
  /** Rotation is overdue (reminder was sent). */
  Overdue = "OVERDUE",
}

/** Status of secret */
export enum SecretStatus {
  /** Secret is complete. */
  Completed = "COMPLETED",
  /** Secret creation is in progress. */
  CreateInProgress = "CREATE_IN_PROGRESS",
  /** Secret creation appears stale (started long ago or missing completion timestamp). */
  CreateStale = "CREATE_STALE",
  /** Secret update is in progress. */
  UpdateInProgress = "UPDATE_IN_PROGRESS",
  /** Secret update appears stale (started long ago or missing completion timestamp). */
  UpdateStale = "UPDATE_STALE",
}

/** Actions that can be performed on secrets */
export enum SecretsManagementAction {
  /** Delete secrets. */
  Delete = "DELETE",
  /** Read secrets. */
  Read = "READ",
  /** Read secret values. */
  ReadValue = "READ_VALUE",
  /** Create and update secrets. */
  Write = "WRITE",
}

/** Reason a Secrets Manager entitlement is blocked. */
export enum SecretsManagerEntitlementBlockedReason {
  /**
   * No trial credits remain. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  CreditsExhausted = "CREDITS_EXHAUSTED",
  /**
   * Subscription has expired; access is read-only during the grace window. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  Grace = "GRACE",
  /**
   * On-demand purchasing is disabled for the namespace. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  OnDemandDisabled = "ON_DEMAND_DISABLED",
  /**
   * Subscription is expired and the grace window has elapsed. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  SubscriptionGracePeriodExpired = "SUBSCRIPTION_GRACE_PERIOD_EXPIRED",
  /**
   * Trial period has ended. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  TrialExpired = "TRIAL_EXPIRED",
}

/** State of a Secrets Manager entitlement for a top-level group. */
export enum SecretsManagerEntitlementState {
  /**
   * Entitlement is blocked; see blockedReason for the cause. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  Blocked = "BLOCKED",
  /**
   * Not eligible for Secrets Manager. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  Ineligible = "INELIGIBLE",
  /**
   * Paid subscription on an offline-licensed self-managed install. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  OfflinePaid = "OFFLINE_PAID",
  /**
   * Paid subscription on a SaaS or online-cloud-licensed self-managed install. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  Paid = "PAID",
  /**
   * Active trial. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  Trial = "TRIAL",
  /**
   * Eligible to start a trial. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  TrialEligible = "TRIAL_ELIGIBLE",
}

/** Autogenerated input type of SecretsManagerStartTrial */
export type SecretsManagerStartTrialInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the top-level group to start a Secrets Manager trial for. */
  groupPath: Scalars["ID"]["input"];
};

/** Reason a Secrets Manager write was denied due to entitlement. */
export enum SecretsManagerWriteDenialReason {
  /** No trial credits remain. */
  CreditsExhausted = "CREDITS_EXHAUSTED",
  /** Subscription has expired; access is read-only during the grace window. */
  Grace = "GRACE",
  /** Namespace is not eligible for Secrets Manager. */
  Ineligible = "INELIGIBLE",
  /** On-demand purchasing is disabled for the namespace. */
  OnDemandDisabled = "ON_DEMAND_DISABLED",
  /** Subscription is expired and the grace window has elapsed. */
  SubscriptionGracePeriodExpired = "SUBSCRIPTION_GRACE_PERIOD_EXPIRED",
  /** Trial period has ended. */
  TrialExpired = "TRIAL_EXPIRED",
  /** A trial must be started before writes are allowed. */
  TrialRequired = "TRIAL_REQUIRED",
}

/** Mode for bulk updating security attributes */
export enum SecurityAttributeBulkUpdateMode {
  /** Add attributes to projects (keeps existing attributes). */
  Add = "ADD",
  /** Remove attributes from projects. */
  Remove = "REMOVE",
  /** Replace all existing attributes with the specified attributes. */
  Replace = "REPLACE",
}

/** Autogenerated input type of SecurityAttributeCreate */
export type SecurityAttributeCreateInput = {
  /** Attributes to create. */
  attributes: Array<SecurityAttributeInput>;
  /** Global ID of the security category. */
  categoryId: Scalars["SecurityCategoryID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the namespace. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Autogenerated input type of SecurityAttributeDestroy */
export type SecurityAttributeDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the security attribute to destroy. */
  id: Scalars["SecurityAttributeID"]["input"];
};

/** Input type for security attribute */
export type SecurityAttributeInput = {
  /** Color of the security attribute. */
  color: Scalars["Color"]["input"];
  /** Description of the security attribute. */
  description: Scalars["String"]["input"];
  /** Name of the security attribute. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityAttributeProjectUpdate */
export type SecurityAttributeProjectUpdateInput = {
  /** Global IDs of the security attributes to add to the project. */
  addAttributeIds?: InputMaybe<Array<Scalars["SecurityAttributeID"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the project. */
  projectId: Scalars["ProjectID"]["input"];
  /** Global IDs of the security attributes to remove from the project. */
  removeAttributeIds?: InputMaybe<
    Array<Scalars["SecurityAttributeID"]["input"]>
  >;
};

/** Autogenerated input type of SecurityAttributeUpdate */
export type SecurityAttributeUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Color of the security attribute. */
  color?: InputMaybe<Scalars["Color"]["input"]>;
  /** Description of the security attribute. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the security attribute. */
  id: Scalars["SecurityAttributeID"]["input"];
  /** Name of the security attribute. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of SecurityCategoryCreate */
export type SecurityCategoryCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the security category. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether multiple attributes can be selected. */
  multipleSelection?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Name of the security category. */
  name: Scalars["String"]["input"];
  /** Global ID of the category namespace. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Autogenerated input type of SecurityCategoryDestroy */
export type SecurityCategoryDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the security category to destroy. */
  id: Scalars["SecurityCategoryID"]["input"];
};

/** Editable state for security categories and attributes */
export enum SecurityCategoryEditableState {
  /** Editable state. */
  Editable = "EDITABLE",
  /** Editable attributes state. */
  EditableAttributes = "EDITABLE_ATTRIBUTES",
  /** Locked state. */
  Locked = "LOCKED",
}

/** Template type for predefined security categories */
export enum SecurityCategoryTemplateType {
  /** Application category. */
  Application = "APPLICATION",
  /** Business impact category. */
  BusinessImpact = "BUSINESS_IMPACT",
  /** Business unit category. */
  BusinessUnit = "BUSINESS_UNIT",
  /** Exposure category. */
  Exposure = "EXPOSURE",
}

/** Autogenerated input type of SecurityCategoryUpdate */
export type SecurityCategoryUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the security category. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the security category. */
  id: Scalars["SecurityCategoryID"]["input"];
  /** Name of the security category. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the category namespace. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Autogenerated input type of SecurityFindingCreateIssue */
export type SecurityFindingCreateIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the project to attach the issue to. */
  project: Scalars["ProjectID"]["input"];
  /** UUID of the security finding to be used to create an issue. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityFindingCreateMergeRequest */
export type SecurityFindingCreateMergeRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** UUID of the security finding to be used to create a merge request. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityFindingCreateVulnerability */
export type SecurityFindingCreateVulnerabilityInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** UUID of the security finding to be used to create a vulnerability. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityFindingDismiss */
export type SecurityFindingDismissInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment why finding should be dismissed. */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** Reason why finding should be dismissed. */
  dismissalReason?: InputMaybe<VulnerabilityDismissalReason>;
  /** UUID of the finding to be dismissed. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityFindingExternalIssueLinkCreate */
export type SecurityFindingExternalIssueLinkCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** External tracker type of the external issue link. */
  externalTracker: VulnerabilityExternalIssueLinkExternalTracker;
  /** Type of the external issue link. */
  linkType: VulnerabilityExternalIssueLinkType;
  /** ID of the project to attach the issue to. */
  project: Scalars["ProjectID"]["input"];
  /** UUID of the security finding to be used to create an issue. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityFindingJiraIssueFormUrlCreate */
export type SecurityFindingJiraIssueFormUrlCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the project to attach the issue to. */
  project: Scalars["ProjectID"]["input"];
  /** UUID of the security finding to be used to create an issue. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityFindingRevertToDetected */
export type SecurityFindingRevertToDetectedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment that explains why finding was reverted to detected status. */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** UUID of the finding to be dismissed. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityFindingSeverityOverride */
export type SecurityFindingSeverityOverrideInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** New severity value for the finding. */
  severity: VulnerabilitySeverity;
  /** UUID of the finding to modify. */
  uuid: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityPolicyProjectAssign */
export type SecurityPolicyProjectAssignInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project or group. */
  fullPath?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Full path of the project. Deprecated in GitLab 14.10: Use `fullPath`.
   * @deprecated Use `fullPath`. Deprecated in GitLab 14.10.
   */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** ID of the security policy project. */
  securityPolicyProjectId: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of SecurityPolicyProjectCreateAsync */
export type SecurityPolicyProjectCreateAsyncInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project or group. */
  fullPath: Scalars["String"]["input"];
};

/** Autogenerated input type of SecurityPolicyProjectCreate */
export type SecurityPolicyProjectCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project or group. */
  fullPath?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Full path of the project. Deprecated in GitLab 14.10: Use `fullPath`.
   * @deprecated Use `fullPath`. Deprecated in GitLab 14.10.
   */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Autogenerated input type of SecurityPolicyProjectUnassign */
export type SecurityPolicyProjectUnassignInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project or group. */
  fullPath?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Full path of the project. Deprecated in GitLab 14.10: Use `fullPath`.
   * @deprecated Use `fullPath`. Deprecated in GitLab 14.10.
   */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
};

export enum SecurityPolicyRelationType {
  /** Policies defined for the group's descendant projects/groups only. Only valid for group policies. Policies apply only to the 50 most recently created descendant policy projects. */
  Descendant = "DESCENDANT",
  /** Policies defined for the project/group only. */
  Direct = "DIRECT",
  /** Policies defined for the project/group and ancestor groups. */
  Inherited = "INHERITED",
  /** Policies defined for the project/group's ancestor groups only. */
  InheritedOnly = "INHERITED_ONLY",
}

export enum SecurityPreferredLicenseSourceConfiguration {
  /** Use internal instance license database as a source of license information for dependencies. */
  Pmdb = "PMDB",
  /** Use the SBOM as a source of license information for dependencies. */
  Sbom = "SBOM",
}

export type SecurityRefInput = {
  /** Name of the ref. */
  name: Scalars["String"]["input"];
  /** Type of ref (branch or tag). */
  refType: SecurityTrackedRefType;
};

/** Autogenerated input type of SecurityRefsTrack */
export type SecurityRefsTrackInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** Array of refs to be tracked. */
  refs: Array<SecurityRefInput>;
};

/** Autogenerated input type of SecurityRefsUntrack */
export type SecurityRefsUntrackInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the tracked refs to stop tracking. */
  refIds: Array<Scalars["SecurityProjectTrackedContextID"]["input"]>;
};

export enum SecurityReportTypeEnum {
  /** API FUZZING scan report */
  ApiFuzzing = "API_FUZZING",
  /** CLUSTER IMAGE SCANNING scan report */
  ClusterImageScanning = "CLUSTER_IMAGE_SCANNING",
  /** CONTAINER SCANNING scan report */
  ContainerScanning = "CONTAINER_SCANNING",
  /** COVERAGE FUZZING scan report */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** DAST scan report */
  Dast = "DAST",
  /** DEPENDENCY SCANNING scan report */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** SAST scan report */
  Sast = "SAST",
  /** SAST ADVANCED scan report */
  SastAdvanced = "SAST_ADVANCED",
  /** SAST IAC scan report */
  SastIac = "SAST_IAC",
  /** SECRET DETECTION scan report */
  SecretDetection = "SECRET_DETECTION",
}

/** Autogenerated input type of SecurityScanProfileAttach */
export type SecurityScanProfileAttachInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group IDs to attach the profile to. */
  groupIds?: InputMaybe<Array<Scalars["GroupID"]["input"]>>;
  /** Project IDs to attach the profile to. */
  projectIds?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
  /** Security scan profile ID to attach. */
  securityScanProfileId: Scalars["SecurityScanProfileID"]["input"];
};

/** Autogenerated input type of SecurityScanProfileDetach */
export type SecurityScanProfileDetachInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Group IDs to detach the profile from. */
  groupIds?: InputMaybe<Array<Scalars["GroupID"]["input"]>>;
  /** Project IDs to detach the profile from. */
  projectIds?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
  /** Security scan profile ID to detach. */
  securityScanProfileId: Scalars["SecurityScanProfileID"]["input"];
};

/** Scan profile type */
export enum SecurityScanProfileType {
  /** Container scanning */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Dependency scanning */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /**
   * Dependency scanning post processing. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  DependencyScanningPostProcessing = "DEPENDENCY_SCANNING_POST_PROCESSING",
  /** Sast */
  Sast = "SAST",
  /** Secret detection */
  SecretDetection = "SECRET_DETECTION",
}

/** The type of the security scanner */
export enum SecurityScannerType {
  /** API fuzzing scanner */
  ApiFuzzing = "API_FUZZING",
  /** Cluster image scanning scanner */
  ClusterImageScanning = "CLUSTER_IMAGE_SCANNING",
  /** Container scanning scanner */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Coverage fuzzing scanner */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** DAST scanner */
  Dast = "DAST",
  /** Dependency scanning scanner */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** SAST scanner */
  Sast = "SAST",
  /** SAST advanced scanner */
  SastAdvanced = "SAST_ADVANCED",
  /** SAST IaC scanner */
  SastIac = "SAST_IAC",
  /** Secret detection scanner */
  SecretDetection = "SECRET_DETECTION",
}

/** Return vulnerabilities scoped to certain types of refs. */
export enum SecurityTrackedRefScope {
  /** Returns all tracked refs. This is the same as omitting the filter. */
  AllRefs = "ALL_REFS",
  /** Returns vulnerabilities that are on a default branch. */
  DefaultBranches = "DEFAULT_BRANCHES",
}

/** State of security tracked ref. */
export enum SecurityTrackedRefState {
  /** Ref is being tracked for vulnerabilities. */
  Tracked = "TRACKED",
  /** Ref is not being tracked for vulnerabilities. */
  Untracked = "UNTRACKED",
}

/** Type of ref being tracked for security vulnerabilities. */
export enum SecurityTrackedRefType {
  /** Branch ref. */
  Branch = "BRANCH",
  /** Tag ref. */
  Tag = "TAG",
}

/** Autogenerated input type of SecurityTrainingUpdate */
export type SecurityTrainingUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Sets the training provider as enabled for the project. */
  isEnabled: Scalars["Boolean"]["input"];
  /** Sets the training provider as primary for the project. */
  isPrimary?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** ID of the provider. */
  providerId: Scalars["SecurityTrainingProviderID"]["input"];
};

/** State of a Sentry error */
export enum SentryErrorStatus {
  /** Error has been ignored. */
  Ignored = "IGNORED",
  /** Error has been resolved. */
  Resolved = "RESOLVED",
  /** Error has been ignored until next release. */
  ResolvedInNextRelease = "RESOLVED_IN_NEXT_RELEASE",
  /** Error is unresolved. */
  Unresolved = "UNRESOLVED",
}

export enum ServiceType {
  /** Apple App Store Connect integration */
  AppleAppStoreService = "APPLE_APP_STORE_SERVICE",
  /** Asana integration */
  AsanaService = "ASANA_SERVICE",
  /** Assembla integration */
  AssemblaService = "ASSEMBLA_SERVICE",
  /** Atlassian Bamboo integration */
  BambooService = "BAMBOO_SERVICE",
  /** Bugzilla integration */
  BugzillaService = "BUGZILLA_SERVICE",
  /** Buildkite integration */
  BuildkiteService = "BUILDKITE_SERVICE",
  /** Campfire integration */
  CampfireService = "CAMPFIRE_SERVICE",
  /** ClickUp integration */
  ClickupService = "CLICKUP_SERVICE",
  /** Confluence Workspace integration */
  ConfluenceService = "CONFLUENCE_SERVICE",
  /** Custom issue tracker integration */
  CustomIssueTrackerService = "CUSTOM_ISSUE_TRACKER_SERVICE",
  /** Datadog integration */
  DatadogService = "DATADOG_SERVICE",
  /** Diffblue Cover integration */
  DiffblueCoverService = "DIFFBLUE_COVER_SERVICE",
  /** Discord Notifications integration */
  DiscordService = "DISCORD_SERVICE",
  /** Drone integration */
  DroneCiService = "DRONE_CI_SERVICE",
  /** Emails on push integration */
  EmailsOnPushService = "EMAILS_ON_PUSH_SERVICE",
  /** EWM integration */
  EwmService = "EWM_SERVICE",
  /** External wiki integration */
  ExternalWikiService = "EXTERNAL_WIKI_SERVICE",
  /** GitHub integration */
  GithubService = "GITHUB_SERVICE",
  /** GitLab for Slack app integration */
  GitlabSlackApplicationService = "GITLAB_SLACK_APPLICATION_SERVICE",
  /** GitGuardian integration */
  GitGuardianService = "GIT_GUARDIAN_SERVICE",
  /** Google Artifact Management integration (SaaS only) */
  GoogleCloudPlatformArtifactRegistryService = "GOOGLE_CLOUD_PLATFORM_ARTIFACT_REGISTRY_SERVICE",
  /** Google Cloud IAM integration (SaaS only) */
  GoogleCloudPlatformWorkloadIdentityFederationService = "GOOGLE_CLOUD_PLATFORM_WORKLOAD_IDENTITY_FEDERATION_SERVICE",
  /** Google Play integration */
  GooglePlayService = "GOOGLE_PLAY_SERVICE",
  /** Google Chat integration */
  HangoutsChatService = "HANGOUTS_CHAT_SERVICE",
  /** Harbor integration */
  HarborService = "HARBOR_SERVICE",
  /** irker (IRC gateway) integration */
  IrkerService = "IRKER_SERVICE",
  /** Jenkins integration */
  JenkinsService = "JENKINS_SERVICE",
  /** GitLab for Jira Cloud app integration */
  JiraCloudAppService = "JIRA_CLOUD_APP_SERVICE",
  /** Jira issues integration */
  JiraService = "JIRA_SERVICE",
  /** Linear integration */
  LinearService = "LINEAR_SERVICE",
  /** Matrix notifications integration */
  MatrixService = "MATRIX_SERVICE",
  /** Mattermost notifications integration */
  MattermostService = "MATTERMOST_SERVICE",
  /** Mattermost slash commands integration */
  MattermostSlashCommandsService = "MATTERMOST_SLASH_COMMANDS_SERVICE",
  /** Microsoft Teams notifications integration */
  MicrosoftTeamsService = "MICROSOFT_TEAMS_SERVICE",
  /** Packagist integration */
  PackagistService = "PACKAGIST_SERVICE",
  /** Phorge integration */
  PhorgeService = "PHORGE_SERVICE",
  /** Pipeline status emails integration */
  PipelinesEmailService = "PIPELINES_EMAIL_SERVICE",
  /** Pivotal Tracker integration */
  PivotaltrackerService = "PIVOTALTRACKER_SERVICE",
  /** Pumble integration */
  PumbleService = "PUMBLE_SERVICE",
  /** Pushover integration */
  PushoverService = "PUSHOVER_SERVICE",
  /** Redmine integration */
  RedmineService = "REDMINE_SERVICE",
  /** Slack notifications integration */
  SlackService = "SLACK_SERVICE",
  /** Squash TM integration */
  SquashTmService = "SQUASH_TM_SERVICE",
  /** JetBrains TeamCity integration */
  TeamcityService = "TEAMCITY_SERVICE",
  /** Telegram integration */
  TelegramService = "TELEGRAM_SERVICE",
  /** Unify Circuit integration */
  UnifyCircuitService = "UNIFY_CIRCUIT_SERVICE",
  /** Webex Teams integration */
  WebexTeamsService = "WEBEX_TEAMS_SERVICE",
  /** JetBrains YouTrack integration */
  YoutrackService = "YOUTRACK_SERVICE",
  /** ZenTao integration */
  ZentaoService = "ZENTAO_SERVICE",
}

/** Autogenerated input type of SetContainerScanningForRegistry */
export type SetContainerScanningForRegistryInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for container scanning for registry feature. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the namespace (project). */
  namespacePath: Scalars["ID"]["input"];
};

/** Autogenerated input type of SetCvsForContainerScanning */
export type SetCvsForContainerScanningInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for CVS for container scanning. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of SetCvsForDependencyScanning */
export type SetCvsForDependencyScanningInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for CVS for dependency scanning. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of SetGroupCustomAttribute */
export type SetGroupCustomAttributeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group. */
  groupPath: Scalars["ID"]["input"];
  /** Key of the custom attribute. */
  key: Scalars["String"]["input"];
  /** Value of the custom attribute. */
  value: Scalars["String"]["input"];
};

/** Autogenerated input type of SetGroupSecretPushProtection */
export type SetGroupSecretPushProtectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group. */
  namespacePath: Scalars["ID"]["input"];
  /** IDs of projects to exclude from the feature. */
  projectsToExclude?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Whether to enable the feature. */
  secretPushProtectionEnabled: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of SetGroupValidityChecks */
export type SetGroupValidityChecksInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group. */
  namespacePath: Scalars["ID"]["input"];
  /** IDs of projects to exclude from validity checks configuration. */
  projectsToExclude?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Whether to enable validity checks for all projects in the group. */
  validityChecksEnabled: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of SetLicenseConfigurationSource */
export type SetLicenseConfigurationSourceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
  /** Preferred source of license information for dependencies. */
  source: SecurityPreferredLicenseSourceConfiguration;
};

/** Autogenerated input type of SetLicenseScanningForCyclonedx */
export type SetLicenseScanningForCyclonedxInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for license scanning for CycloneDX files. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the project. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of SetPagesForceHttps */
export type SetPagesForceHttpsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Path of the project to set the pages force HTTPS. */
  projectPath: Scalars["ID"]["input"];
  /** Indicates user wants to enforce HTTPS on their pages. */
  value: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of SetPagesUseUniqueDomain */
export type SetPagesUseUniqueDomainInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Path of the project to set the pages to use unique domains. */
  projectPath: Scalars["ID"]["input"];
  /** Indicates user wants to use unique subdomains for their pages. */
  value: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of SetPreReceiveSecretDetection */
export type SetPreReceiveSecretDetectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for secret push protection feature. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the namespace (project). */
  namespacePath: Scalars["ID"]["input"];
};

/** Autogenerated input type of SetSecretPushProtection */
export type SetSecretPushProtectionInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for secret push protection feature. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the namespace (project). */
  namespacePath: Scalars["ID"]["input"];
};

/** Autogenerated input type of SetValidityChecks */
export type SetValidityChecksInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired status for validity checks feature. */
  enable: Scalars["Boolean"]["input"];
  /** Full path of the namespace (project). */
  namespacePath: Scalars["ID"]["input"];
};

/** How to format SHA strings. */
export enum ShaFormat {
  /** Unabbreviated format. */
  Long = "LONG",
  /** Abbreviated format. Short SHAs are typically eight characters long. */
  Short = "SHORT",
}

export enum SharedRunnersSetting {
  /** Sharing of runners is disabled and overridable. */
  DisabledAndOverridable = "DISABLED_AND_OVERRIDABLE",
  /** Sharing of runners is disabled and unoverridable. */
  DisabledAndUnoverridable = "DISABLED_AND_UNOVERRIDABLE",
  /** Sharing of runners is enabled. */
  Enabled = "ENABLED",
}

/** Type of a snippet blob input action */
export enum SnippetBlobActionEnum {
  /** Create a snippet blob. */
  Create = "create",
  /** Delete a snippet blob. */
  Delete = "delete",
  /** Move a snippet blob. */
  Move = "move",
  /** Update a snippet blob. */
  Update = "update",
}

/** Represents an action to perform over a snippet file */
export type SnippetBlobActionInputType = {
  /** Type of input action. */
  action: SnippetBlobActionEnum;
  /** Snippet file content. */
  content?: InputMaybe<Scalars["String"]["input"]>;
  /** Path of the snippet file. */
  filePath: Scalars["String"]["input"];
  /** Previous path of the snippet file. */
  previousPath?: InputMaybe<Scalars["String"]["input"]>;
};

/** Common sort values */
export enum Sort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** Values for sort direction */
export enum SortDirectionEnum {
  /** Ascending order. */
  Asc = "ASC",
  /** Descending order. */
  Desc = "DESC",
}

/** Analyzer types that project lists can be sorted by. */
export enum SortableAnalyzerType {
  /** Sort by Dependency scanning analyzer status. */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** Sort by Sast analyzer status. */
  Sast = "SAST",
  /** Sort by Secret detection analyzer status. */
  SecretDetection = "SECRET_DETECTION",
}

/** Values for sorting the mapping of users on source instance to users on destination instance. */
export enum SourceUserSort {
  /** ID of the source user by ascending order. */
  IdAsc = "ID_ASC",
  /** ID of the source user by descending order. */
  IdDesc = "ID_DESC",
  /** Instance source name by ascending order. */
  SourceNameAsc = "SOURCE_NAME_ASC",
  /** Instance source name by descending order. */
  SourceNameDesc = "SOURCE_NAME_DESC",
  /** Status of the mapping by ascending order. */
  StatusAsc = "STATUS_ASC",
  /** Status of the mapping by descending order. */
  StatusDesc = "STATUS_DESC",
}

/** Options for default squash behaviour for merge requests */
export enum SquashOptionSetting {
  /** Allow. */
  Allowed = "ALLOWED",
  /** Require. */
  Always = "ALWAYS",
  /** Encourage. */
  Encouraged = "ENCOURAGED",
  /** Do not allow. */
  Never = "NEVER",
}

/** Autogenerated input type of StarProject */
export type StarProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project to star or unstar. */
  projectId: Scalars["ProjectID"]["input"];
  /** Indicates whether to star or unstar the project. */
  starred: Scalars["Boolean"]["input"];
};

/** Input for mapping a removed status to a replacement status */
export type StatusMappingInput = {
  /** Global ID of the replacement status. */
  newStatusId: Scalars["WorkItemsStatusesStatusID"]["input"];
  /** Global ID of the status being removed/replaced. */
  oldStatusId: Scalars["WorkItemsStatusesStatusID"]["input"];
};

/** Types of change for a subscription history record */
export enum SubscriptionHistoryChangeType {
  /** This was the previous state before the subscription was destroyed. */
  GitlabSubscriptionDestroyed = "GITLAB_SUBSCRIPTION_DESTROYED",
  /** This was the previous state before the subscription was updated. */
  GitlabSubscriptionUpdated = "GITLAB_SUBSCRIPTION_UPDATED",
}

/** Status of the subscription to an issuable. */
export enum SubscriptionStatus {
  /** User is explicitly subscribed to the issuable. */
  ExplicitlySubscribed = "EXPLICITLY_SUBSCRIBED",
  /** User is explicitly unsubscribed from the issuable. */
  ExplicitlyUnsubscribed = "EXPLICITLY_UNSUBSCRIBED",
}

/** Autogenerated input type of TagCreate */
export type TagCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Tagging message. */
  message?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the tag. */
  name: Scalars["String"]["input"];
  /** Project full path the branch is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** Tag name or commit SHA to create tag from. */
  ref: Scalars["String"]["input"];
};

/** Autogenerated input type of TagDelete */
export type TagDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the tag. */
  name: Scalars["String"]["input"];
  /** Project full path the branch is associated with. */
  projectPath: Scalars["ID"]["input"];
};

/** Toggles a single task list item checkbox instead of replacing the full Markdown source. */
export type TaskListToggleInput = {
  /** Indicates the state the task list item should be toggled to. */
  checked: Scalars["Boolean"]["input"];
  /** Full Markdown source of the line containing the task list item; used to detect concurrent edits. */
  lineSource: Scalars["String"]["input"];
  /** Source position of the task list item in the Markdown source; for example, `5:1-5:14`. */
  lineSourcepos: Scalars["String"]["input"];
};

/** Autogenerated input type of TerraformStateDelete */
export type TerraformStateDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Terraform state. */
  id: Scalars["TerraformStateID"]["input"];
};

/** Autogenerated input type of TerraformStateLock */
export type TerraformStateLockInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Terraform state. */
  id: Scalars["TerraformStateID"]["input"];
};

/** Access level for Terraform state protection rule write operations. */
export enum TerraformStateProtectionRuleAccessLevel {
  /**
   * Admin access. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  Admin = "ADMIN",
  /**
   * Developer access. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  Developer = "DEVELOPER",
  /**
   * Maintainer access. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  Maintainer = "MAINTAINER",
  /**
   * Owner access. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  Owner = "OWNER",
}

/** Source restriction for Terraform state protection rule write operations. */
export enum TerraformStateProtectionRuleAllowedFrom {
  /**
   * Anywhere. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  Anywhere = "ANYWHERE",
  /**
   * Ci only. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  CiOnly = "CI_ONLY",
  /**
   * Ci on protected branch only. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  CiOnProtectedBranchOnly = "CI_ON_PROTECTED_BRANCH_ONLY",
}

/** Autogenerated input type of TerraformStateUnlock */
export type TerraformStateUnlockInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Terraform state. */
  id: Scalars["TerraformStateID"]["input"];
};

export enum TestCaseStatus {
  /** Test case that has a status of error. */
  Error = "error",
  /** Test case that has a status of failed. */
  Failed = "failed",
  /** Test case that has a status of skipped. */
  Skipped = "skipped",
  /** Test case that has a status of success. */
  Success = "success",
}

/** State of a test report */
export enum TestReportState {
  /** Failed test report. */
  Failed = "FAILED",
  /** Passed test report. */
  Passed = "PASSED",
}

/** Category of error. */
export enum TimeboxReportErrorReason {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Label priority by ascending order. */
  LabelPriorityAsc = "LABEL_PRIORITY_ASC",
  /** Label priority by descending order. */
  LabelPriorityDesc = "LABEL_PRIORITY_DESC",
  /** Milestone due date by ascending order. */
  MilestoneDueAsc = "MILESTONE_DUE_ASC",
  /** Milestone due date by descending order. */
  MilestoneDueDesc = "MILESTONE_DUE_DESC",
  /** One or both of start_date and due_date is missing. */
  MissingDates = "MISSING_DATES",
  /** Priority by ascending order. */
  PriorityAsc = "PRIORITY_ASC",
  /** Priority by descending order. */
  PriorityDesc = "PRIORITY_DESC",
  /** There are too many events. */
  TooManyEvents = "TOO_MANY_EVENTS",
  /** This type does not support timebox reports. */
  Unsupported = "UNSUPPORTED",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** A time-frame defined as a closed inclusive range of two dates */
export type Timeframe = {
  /** End of the range. */
  end: Scalars["Date"]["input"];
  /** Start of the range. */
  start: Scalars["Date"]["input"];
};

/** Autogenerated input type of TimelineEventCreate */
export type TimelineEventCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Incident ID of the timeline event. */
  incidentId: Scalars["IssueID"]["input"];
  /** Text note of the timeline event. */
  note: Scalars["String"]["input"];
  /** Timestamp of when the event occurred. */
  occurredAt: Scalars["Time"]["input"];
  /** Tags for the incident timeline event. */
  timelineEventTagNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of TimelineEventDestroy */
export type TimelineEventDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Timeline event ID to remove. */
  id: Scalars["IncidentManagementTimelineEventID"]["input"];
};

/** Autogenerated input type of TimelineEventPromoteFromNote */
export type TimelineEventPromoteFromNoteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Note ID from which the timeline event promoted. */
  noteId: Scalars["NoteID"]["input"];
};

/** Autogenerated input type of TimelineEventTagCreate */
export type TimelineEventTagCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the tag. */
  name: Scalars["String"]["input"];
  /** Project to create the timeline event tag in. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of TimelineEventUpdate */
export type TimelineEventUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the timeline event to update. */
  id: Scalars["IncidentManagementTimelineEventID"]["input"];
  /** Text note of the timeline event. */
  note?: InputMaybe<Scalars["String"]["input"]>;
  /** Timestamp when the event occurred. */
  occurredAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Tags for the incident timeline event. */
  timelineEventTagNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of TimelogCreate */
export type TimelogCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the issuable (Issue, WorkItem or MergeRequest). */
  issuableId: Scalars["IssuableID"]["input"];
  /** Timestamp of when the time was spent. If empty, defaults to current time. */
  spentAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Summary of time spent. */
  summary: Scalars["String"]["input"];
  /** Amount of time spent. */
  timeSpent: Scalars["String"]["input"];
};

/** Autogenerated input type of TimelogDelete */
export type TimelogDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the timelog. */
  id: Scalars["TimelogID"]["input"];
};

/** Values for sorting timelogs */
export enum TimelogSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Spent at ascending order. */
  SpentAtAsc = "SPENT_AT_ASC",
  /** Spent at descending order. */
  SpentAtDesc = "SPENT_AT_DESC",
  /** Time spent ascending order. */
  TimeSpentAsc = "TIME_SPENT_ASC",
  /** Time spent descending order. */
  TimeSpentDesc = "TIME_SPENT_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** A closed, inclusive range of two timestamps */
export type TimestampRange = {
  /** End of the range. */
  end: Scalars["Time"]["input"];
  /** Start of the range. */
  start: Scalars["Time"]["input"];
};

export enum TodoActionEnum {
  /** Todo action name for added_approver. */
  AddedApprover = "added_approver",
  /** Todo action name for approval_required. */
  ApprovalRequired = "approval_required",
  /** Todo action name for assigned. */
  Assigned = "assigned",
  /** Todo action name for build_failed. */
  BuildFailed = "build_failed",
  /** Todo action name for directly_addressed. */
  DirectlyAddressed = "directly_addressed",
  /** Todo action name for duo_core_access_granted. */
  DuoCoreAccessGranted = "duo_core_access_granted",
  /** Todo action name for duo_enterprise_access_granted. */
  DuoEnterpriseAccessGranted = "duo_enterprise_access_granted",
  /** Todo action name for duo_pro_access_granted. */
  DuoProAccessGranted = "duo_pro_access_granted",
  /** Todo action name for duo_workflow_input_required. */
  DuoWorkflowInputRequired = "duo_workflow_input_required",
  /** Todo action name for marked. */
  Marked = "marked",
  /** Todo action name for member_access_requested. */
  MemberAccessRequested = "member_access_requested",
  /** Todo action name for mentioned. */
  Mentioned = "mentioned",
  /** Todo action name for merge_train_removed. */
  MergeTrainRemoved = "merge_train_removed",
  /** Todo action name for okr_checkin_requested. */
  OkrCheckinRequested = "okr_checkin_requested",
  /** Todo action name for review_requested. */
  ReviewRequested = "review_requested",
  /** Todo action name for review_submitted. */
  ReviewSubmitted = "review_submitted",
  /** Todo action name for ssh_key_expired. */
  SshKeyExpired = "ssh_key_expired",
  /** Todo action name for ssh_key_expiring_soon. */
  SshKeyExpiringSoon = "ssh_key_expiring_soon",
  /** Todo action name for transfer_failed. */
  TransferFailed = "transfer_failed",
  /** Todo action name for unmergeable. */
  Unmergeable = "unmergeable",
}

/** Autogenerated input type of TodoCreate */
export type TodoCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the to-do item's parent. Issues, merge requests, designs, and epics are supported. */
  targetId: Scalars["TodoableID"]["input"];
};

/** Autogenerated input type of TodoDeleteAllDone */
export type TodoDeleteAllDoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** To-do items marked as done before the timestamp will be deleted. */
  updatedBefore?: InputMaybe<Scalars["Time"]["input"]>;
};

/** Autogenerated input type of TodoDeleteMany */
export type TodoDeleteManyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the to-do items to process (a maximum of 100 is supported at once). */
  ids: Array<Scalars["TodoID"]["input"]>;
};

/** Autogenerated input type of TodoMarkDone */
export type TodoMarkDoneInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the to-do item to mark as done. */
  id: Scalars["TodoID"]["input"];
};

/** Autogenerated input type of TodoResolveMany */
export type TodoResolveManyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the to-do items to process (a maximum of 100 is supported at once). */
  ids: Array<Scalars["TodoID"]["input"]>;
};

/** Autogenerated input type of TodoRestore */
export type TodoRestoreInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the to-do item to restore. */
  id: Scalars["TodoID"]["input"];
};

/** Autogenerated input type of TodoRestoreMany */
export type TodoRestoreManyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the to-do items to process (a maximum of 100 is supported at once). */
  ids: Array<Scalars["TodoID"]["input"]>;
};

/** Autogenerated input type of TodoSnooze */
export type TodoSnoozeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the to-do item to be snoozed. */
  id: Scalars["TodoID"]["input"];
  /** Time until which the todo should be snoozed. */
  snoozeUntil: Scalars["Time"]["input"];
};

/** Autogenerated input type of TodoSnoozeMany */
export type TodoSnoozeManyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the to-do items to process (a maximum of 100 is supported at once). */
  ids: Array<Scalars["TodoID"]["input"]>;
  /** Time until which the todos should be snoozed. */
  snoozeUntil: Scalars["Time"]["input"];
};

/** Sort options for todos. */
export enum TodoSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** By label priority in ascending order. */
  LabelPriorityAsc = "LABEL_PRIORITY_ASC",
  /** By label priority in descending order. */
  LabelPriorityDesc = "LABEL_PRIORITY_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

export enum TodoStateEnum {
  /** State of the todo is done. */
  Done = "done",
  /** State of the todo is pending. */
  Pending = "pending",
}

export enum TodoTargetEnum {
  /** Alert. */
  Alert = "ALERT",
  /** Commit. */
  Commit = "COMMIT",
  /** Project Compliance Violation. */
  ComplianceViolation = "COMPLIANCE_VIOLATION",
  /** Design. */
  Design = "DESIGN",
  /** Duo Workflow session. */
  DuoWorkflow = "DUO_WORKFLOW",
  /** An Epic. */
  Epic = "EPIC",
  /** Issue. */
  Issue = "ISSUE",
  /** SSH key. */
  Key = "KEY",
  /** Merge request. */
  Mergerequest = "MERGEREQUEST",
  /** Namespace. */
  Namespace = "NAMESPACE",
  /** Project. */
  Project = "PROJECT",
  /** User. */
  User = "USER",
  /** Vulnerability. */
  Vulnerability = "VULNERABILITY",
  /** Wiki page. */
  Wikipagemeta = "WIKIPAGEMETA",
  /** Work item. */
  Workitem = "WORKITEM",
}

/** Autogenerated input type of TodoUnSnooze */
export type TodoUnSnoozeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the to-do item to be snoozed. */
  id: Scalars["TodoID"]["input"];
};

/** Autogenerated input type of TodoUnsnoozeMany */
export type TodoUnsnoozeManyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the to-do items to process (a maximum of 100 is supported at once). */
  ids: Array<Scalars["TodoID"]["input"]>;
};

/** Autogenerated input type of TodosMarkAllDone */
export type TodosMarkAllDoneInput = {
  /** Action to be filtered. */
  action?: InputMaybe<Array<TodoActionEnum>>;
  /** ID of an author. */
  authorId?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of a group. */
  groupId?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** ID of a project. */
  projectId?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Global ID of the to-do item's parent. Issues, merge requests, designs, and epics are supported. If argument is omitted, all pending to-do items of the current user are marked as done. */
  targetId?: InputMaybe<Scalars["TodoableID"]["input"]>;
  /** Type of the todo. */
  type?: InputMaybe<Array<TodoTargetEnum>>;
};

/** Attributes for defining a tracking event. */
export type TrackingEventInput = {
  /** Event action. */
  action: Scalars["String"]["input"];
  /** Event category. */
  category: Scalars["String"]["input"];
  /** Extra metadata for the event. */
  extra?: InputMaybe<Scalars["JSON"]["input"]>;
  /** Event label. */
  label?: InputMaybe<Scalars["String"]["input"]>;
  /** Event property. */
  property?: InputMaybe<Scalars["String"]["input"]>;
  /** Event value. */
  value?: InputMaybe<Scalars["String"]["input"]>;
};

/** Status of the request to the training provider. The URL of a TrainingUrl is calculated asynchronously. When PENDING, the URL of the TrainingUrl will be null. When COMPLETED, the URL of the TrainingUrl will be available. */
export enum TrainingUrlRequestStatus {
  /** Completed request. */
  Completed = "COMPLETED",
  /** Pending request. */
  Pending = "PENDING",
}

export enum TypeEnum {
  /** Snippet created independent of any project. */
  Personal = "personal",
  /** Snippet related to a specific project. */
  Project = "project",
}

export type UnionedEpicFilterInput = {
  /**
   * Filters epics that are authored by one of the given users. Deprecated in GitLab 16.6: Use authorUsernames instead.
   * @deprecated Use authorUsernames instead. Deprecated in GitLab 16.6.
   */
  authorUsername?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters epics that are authored by one of the given users. */
  authorUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Filter custom fields by one of the given values. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /**
   * Filters epics that have at least one of the given labels. Deprecated in GitLab 16.6: Use labelNames instead.
   * @deprecated Use labelNames instead. Deprecated in GitLab 16.6.
   */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters epics that have at least one of the given labels. */
  labelNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UnionedIssueFilterInput = {
  /** Filters issues that are assigned to at least one of the given users. */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters issues that are authored by one of the given users. */
  authorUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Filter custom fields by one of the given values. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filters issues that have at least one of the given labels. */
  labelNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type UnionedMergeRequestFilterInput = {
  /** Filters MRs that are assigned to at least one of the given users. */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Filters merge requests that have no reviewer OR only reviewer. Only compatible with reviewerWildcard. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  onlyReviewerUsername?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filters merge requests that have been reviewed. Only compatible with reviewerWildcard. Introduced in GitLab 18.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.0.
   */
  reviewStates?: InputMaybe<Array<MergeRequestReviewState>>;
  /**
   * Filter by reviewer presence. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  reviewerWildcard?: InputMaybe<ReviewerWildcardId>;
};

export type UnionedWorkItemFilterInput = {
  /** Filters work items that are assigned to at least one of the given users (maximum is 100 usernames). */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filters work items that are authored by one of the given users (maximum is 100 usernames). */
  authorUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Filter custom fields by one of the given values. Introduced in GitLab 18.4: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.4.
   */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filters work items that have at least one of the given labels (maximum is 100 labels). */
  labelNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of UnlinkProjectComplianceViolationIssue */
export type UnlinkProjectComplianceViolationIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the issue to be unlinked. */
  issueIid: Scalars["String"]["input"];
  /** Full path of the project the issue belongs to. */
  projectPath: Scalars["ID"]["input"];
  /** Global ID of the project compliance violation. */
  violationId: Scalars["ComplianceManagementProjectsComplianceViolationID"]["input"];
};

/** Autogenerated input type of UpdateAiToolRule */
export type UpdateAiToolRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the root namespace to update the tool rule for. */
  fullPath: Scalars["ID"]["input"];
  /** Permission mode for local or IDE surface. */
  localAccess?: InputMaybe<AiToolPermission>;
  /** Full path of the project to update the tool rule for. When provided, creates a project-level rule that can only be stricter than the namespace rule. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Tool name string identifying the tool to update. For example, "create_issue". */
  toolId: Scalars["String"]["input"];
  /** Permission mode for web surface. */
  webAccess?: InputMaybe<AiToolPermission>;
};

/** Autogenerated input type of UpdateAlertStatus */
export type UpdateAlertStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the alert to mutate. */
  iid: Scalars["String"]["input"];
  /** Project the alert to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** Status to set the alert. */
  status: AlertManagementStatus;
};

/** Autogenerated input type of UpdateBoardEpicUserPreferences */
export type UpdateBoardEpicUserPreferencesInput = {
  /** Board global ID. */
  boardId: Scalars["BoardID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether the epic should be collapsed in the board. */
  collapsed: Scalars["Boolean"]["input"];
  /** ID of an epic to set preferences for. */
  epicId: Scalars["EpicID"]["input"];
};

/** Autogenerated input type of UpdateBoard */
export type UpdateBoardInput = {
  /** ID of user to be assigned to the board. */
  assigneeId?: InputMaybe<Scalars["UserID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether or not backlog list is hidden. */
  hideBacklogList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether or not closed list is hidden. */
  hideClosedList?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Board global ID. */
  id: Scalars["BoardID"]["input"];
  /** ID of iteration cadence to be assigned to the board. */
  iterationCadenceId?: InputMaybe<Scalars["IterationsCadenceID"]["input"]>;
  /** ID of iteration to be assigned to the board. */
  iterationId?: InputMaybe<Scalars["IterationID"]["input"]>;
  /** IDs of labels to be added to the board. */
  labelIds?: InputMaybe<Array<Scalars["LabelID"]["input"]>>;
  /** Labels of the issue. */
  labels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** ID of milestone to be assigned to the board. */
  milestoneId?: InputMaybe<Scalars["MilestoneID"]["input"]>;
  /** Board name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Weight value to be assigned to the board. */
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of UpdateBoardList */
export type UpdateBoardListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates if the list is collapsed for the user. */
  collapsed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the list. */
  listId: Scalars["ListID"]["input"];
  /** Position of list within the board. */
  position?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of UpdateComplianceFramework */
export type UpdateComplianceFrameworkInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the compliance framework to update. */
  id: Scalars["ComplianceManagementFrameworkID"]["input"];
  /** Parameters to update the compliance framework with. */
  params: ComplianceFrameworkInput;
};

/** Autogenerated input type of UpdateComplianceRequirement */
export type UpdateComplianceRequirementInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Controls to add or update to the compliance requirement. */
  controls?: InputMaybe<Array<ComplianceRequirementsControlInput>>;
  /** Global ID of the compliance requirement to update. */
  id: Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementID"]["input"];
  /** Parameters to update the compliance requirement with. */
  params: ComplianceRequirementInput;
};

/** Autogenerated input type of UpdateComplianceRequirementsControl */
export type UpdateComplianceRequirementsControlInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the compliance requirement control to update. */
  id: Scalars["ComplianceManagementComplianceFrameworkComplianceRequirementsControlID"]["input"];
  /** Parameters to update the compliance requirement control with. */
  params: ComplianceRequirementsControlInput;
};

/** Autogenerated input type of UpdateContainerExpirationPolicy */
export type UpdateContainerExpirationPolicyInput = {
  /** Schedule of the container expiration policy. */
  cadence?: InputMaybe<ContainerExpirationPolicyCadenceEnum>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates whether the container expiration policy is enabled. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Number of tags to retain. */
  keepN?: InputMaybe<ContainerExpirationPolicyKeepEnum>;
  /** Tags with names matching the regex pattern will expire. */
  nameRegex?: InputMaybe<Scalars["UntrustedRegexp"]["input"]>;
  /** Tags with names matching the regex pattern will be preserved. */
  nameRegexKeep?: InputMaybe<Scalars["UntrustedRegexp"]["input"]>;
  /** Tags older than the given age will expire. */
  olderThan?: InputMaybe<ContainerExpirationPolicyOlderThanEnum>;
  /** Project path where the container expiration policy is located. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of UpdateContainerProtectionRepositoryRule */
export type UpdateContainerProtectionRepositoryRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the container repository protection rule to be updated. */
  id: Scalars["ContainerRegistryProtectionRuleID"]["input"];
  /**
   * Minimum GitLab access level required to delete container images from the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, the default minimum access level is `DEVELOPER`. Valid only when feature flag `container_registry_protected_containers_delete` is enabled. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  minimumAccessLevelForDelete?: InputMaybe<ContainerProtectionRepositoryRuleAccessLevel>;
  /** Minimum GitLab access level required to push container images to the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, the default minimum access level is `DEVELOPER`. */
  minimumAccessLevelForPush?: InputMaybe<ContainerProtectionRepositoryRuleAccessLevel>;
  /** Container repository path pattern protected by the protection rule. Must start with the project’s full path. For example: `my-project/*-prod-*`. Wildcard character `*` is allowed anywhere after the project’s full path. */
  repositoryPathPattern?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of UpdateContainerProtectionTagRule */
export type UpdateContainerProtectionTagRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the tag protection rule to update. */
  id: Scalars["ContainerRegistryProtectionTagRuleID"]["input"];
  /** Minimum GitLab access level required to delete container image tags from the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, no access level can delete tags.  */
  minimumAccessLevelForDelete?: InputMaybe<ContainerProtectionTagRuleAccessLevel>;
  /** Minimum GitLab access level required to push container image tags to the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, no access level can push tags.  */
  minimumAccessLevelForPush?: InputMaybe<ContainerProtectionTagRuleAccessLevel>;
  /** The pattern that matches container image tags to protect. For example, `v1.*`. Wildcard character `*` allowed. */
  tagNamePattern?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of UpdateCustomDashboard */
export type UpdateCustomDashboardInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Dashboard layout/config. */
  config?: InputMaybe<CustomDashboardConfigInput>;
  /** Dashboard description. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the dashboard to update. */
  id: Scalars["AnalyticsCustomDashboardsDashboardID"]["input"];
  /** Dashboard name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of UpdateDependencyProxyImageTtlGroupPolicy */
export type UpdateDependencyProxyImageTtlGroupPolicyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates whether the policy is enabled or disabled. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Group path for the group dependency proxy image TTL policy. */
  groupPath: Scalars["ID"]["input"];
  /** Number of days to retain a cached image file. */
  ttl?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of UpdateDependencyProxyPackagesSettings */
export type UpdateDependencyProxyPackagesSettingsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates whether the dependency proxy for packages is enabled for the project. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Password for the external Maven packages registry. Introduced in 16.5: This feature is an Experiment. It can be changed or removed at any time. */
  mavenExternalRegistryPassword?: InputMaybe<Scalars["String"]["input"]>;
  /** URL for the external Maven packages registry. */
  mavenExternalRegistryUrl?: InputMaybe<Scalars["String"]["input"]>;
  /** Username for the external Maven packages registry. */
  mavenExternalRegistryUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** Project path for the dependency proxy for packages settings. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of UpdateDependencyProxySettings */
export type UpdateDependencyProxySettingsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates whether the policy is enabled or disabled. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Group path for the group dependency proxy. */
  groupPath: Scalars["ID"]["input"];
  /** Identity credential used to authenticate with Docker Hub when pulling images. Can be a username (for password or personal access token (PAT)) or organization name (for organization access token (OAT)). */
  identity?: InputMaybe<Scalars["String"]["input"]>;
  /** Secret credential used to authenticate with Docker Hub when pulling images. Can be a password, personal access token (PAT), or organization access token (OAT). */
  secret?: InputMaybe<Scalars["String"]["input"]>;
};

export type UpdateDiffImagePositionInput = {
  /** Total height of the image. */
  height?: InputMaybe<Scalars["Int"]["input"]>;
  /** Total width of the image. */
  width?: InputMaybe<Scalars["Int"]["input"]>;
  /** X position of the note. */
  x?: InputMaybe<Scalars["Int"]["input"]>;
  /** Y position of the note. */
  y?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of UpdateDuoWorkflowAgentPrivileges */
export type UpdateDuoWorkflowAgentPrivilegesInput = {
  /** Replaces the set of actions the agent is allowed to perform. */
  agentPrivileges?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Replaces the set of actions the agent can perform without asking for approval. */
  preApprovedAgentPrivileges?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  /** Global ID of the workflow to update. */
  workflowId: Scalars["AiDuoWorkflowsWorkflowID"]["input"];
};

/** Autogenerated input type of UpdateDuoWorkflowToolCallApprovals */
export type UpdateDuoWorkflowToolCallApprovalsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Glob pattern to approve for matching tool call arguments. */
  pattern?: InputMaybe<Scalars["String"]["input"]>;
  /** Arguments for the tool call. */
  toolCallArgs?: InputMaybe<Scalars["JSON"]["input"]>;
  /** Name of the tool to approve. */
  toolName: Scalars["String"]["input"];
  /** Global ID of the workflow to update. */
  workflowId: Scalars["AiDuoWorkflowsWorkflowID"]["input"];
};

/** Autogenerated input type of UpdateEpicBoardList */
export type UpdateEpicBoardListInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates if the list is collapsed for the user. */
  collapsed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Global ID of the epic list. */
  listId: Scalars["BoardsEpicListID"]["input"];
  /** Position of list within the board. */
  position?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of UpdateEpic */
export type UpdateEpicInput = {
  /** IDs of labels to be added to the epic. */
  addLabelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Array of labels to be added to the epic. */
  addLabels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Color of the epic. */
  color?: InputMaybe<Scalars["Color"]["input"]>;
  /** Indicates if the epic is confidential. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Description of the epic. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** End date of the epic. */
  dueDateFixed?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates end date should be sourced from due_date_fixed field not the issue milestones. */
  dueDateIsFixed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Group the epic to mutate is in. */
  groupPath: Scalars["ID"]["input"];
  /** IID of the epic to mutate. */
  iid: Scalars["ID"]["input"];
  /** IDs of labels to be removed from the epic. */
  removeLabelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Array of labels to be removed from the epic. */
  removeLabels?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Start date of the epic. */
  startDateFixed?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates start date should be sourced from start_date_fixed field not the issue milestones. */
  startDateIsFixed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** State event for the epic. */
  stateEvent?: InputMaybe<EpicStateEvent>;
  /** Title of the epic. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of UpdateImageDiffNote */
export type UpdateImageDiffNoteInput = {
  /** Content of the note. */
  body?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the note to update. */
  id: Scalars["NoteID"]["input"];
  /** Position of the note on a diff. */
  position?: InputMaybe<UpdateDiffImagePositionInput>;
};

/** Autogenerated input type of UpdateIssue */
export type UpdateIssueInput = {
  /** IDs of labels to be added to the issue. */
  addLabelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates the issue is confidential. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Description of the issue. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Due date of the issue. */
  dueDate?: InputMaybe<Scalars["ISO8601Date"]["input"]>;
  /**
   * ID of the parent epic. NULL when removing the association. Deprecated in GitLab 17.5: This will be replaced by WorkItem hierarchyWidget.
   * @deprecated This will be replaced by WorkItem hierarchyWidget. Deprecated in GitLab 17.5.
   */
  epicId?: InputMaybe<Scalars["EpicID"]["input"]>;
  /** Desired health status. */
  healthStatus?: InputMaybe<HealthStatus>;
  /** IID of the issue to mutate. */
  iid: Scalars["String"]["input"];
  /** IDs of labels to be set. Replaces existing issue labels. */
  labelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Indicates discussion is locked on the issue. */
  locked?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** ID of the milestone to assign to the issue. Accepts either a global ID, for example `"gid://gitlab/Milestone/42"`, or a numeric ID, for example `"42"`. On update milestone will be removed if set to null. */
  milestoneId?: InputMaybe<Scalars["ID"]["input"]>;
  /** Project the issue to mutate is in. */
  projectPath: Scalars["ID"]["input"];
  /** IDs of labels to be removed from the issue. */
  removeLabelIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Close or reopen an issue. */
  stateEvent?: InputMaybe<IssueStateEvent>;
  /** Estimated time to complete the issue. Use `null` or `0` to remove the current estimate. */
  timeEstimate?: InputMaybe<Scalars["String"]["input"]>;
  /** Title of the issue. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** Type of the issue. */
  type?: InputMaybe<IssueType>;
  /** Weight of the issue. */
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of UpdateIteration */
export type UpdateIterationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the iteration. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** End date of the iteration. */
  dueDate?: InputMaybe<Scalars["String"]["input"]>;
  /** Group of the iteration. */
  groupPath: Scalars["ID"]["input"];
  /** Global ID of the iteration. */
  id: Scalars["ID"]["input"];
  /** Start date of the iteration. */
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  /** Title of the iteration. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of UpdateNamespacePackageSettings */
export type UpdateNamespacePackageSettingsInput = {
  /** Indicates whether audit events are created when publishing or deleting a package in the namespace (Premium and Ultimate only). */
  auditEventsEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** When generic_duplicates_allowed is false, you can publish duplicate packages with names that match this regex. Otherwise, this setting has no effect. */
  genericDuplicateExceptionRegex?: InputMaybe<
    Scalars["UntrustedRegexp"]["input"]
  >;
  /** Indicates whether duplicate generic packages are allowed for the namespace. */
  genericDuplicatesAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether Maven package forwarding is locked for all descendent namespaces. */
  lockMavenPackageRequestsForwarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether npm package forwarding is locked for all descendent namespaces. */
  lockNpmPackageRequestsForwarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether PyPI package forwarding is locked for all descendent namespaces. */
  lockPypiPackageRequestsForwarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When maven_duplicates_allowed is false, you can publish duplicate packages with names that match this regex. Otherwise, this setting has no effect. */
  mavenDuplicateExceptionRegex?: InputMaybe<
    Scalars["UntrustedRegexp"]["input"]
  >;
  /** Indicates whether duplicate Maven packages are allowed for the namespace. */
  mavenDuplicatesAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether Maven package forwarding is allowed for the namespace. */
  mavenPackageRequestsForwarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Namespace path where the namespace package setting is located. */
  namespacePath: Scalars["ID"]["input"];
  /** Indicates whether npm package forwarding is allowed for the namespace. */
  npmPackageRequestsForwarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When nuget_duplicates_allowed is false, you can publish duplicate packages with names that match this regex. Otherwise, this setting has no effect.  */
  nugetDuplicateExceptionRegex?: InputMaybe<
    Scalars["UntrustedRegexp"]["input"]
  >;
  /** Indicates whether duplicate NuGet packages are allowed for the namespace. */
  nugetDuplicatesAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether the NuGet symbol server is enabled for the namespace. */
  nugetSymbolServerEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Indicates whether PyPI package forwarding is allowed for the namespace. */
  pypiPackageRequestsForwarding?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** When terraform_module_duplicates_allowed is false, you can publish duplicate packages with names that match this regex. Otherwise, this setting has no effect. */
  terraformModuleDuplicateExceptionRegex?: InputMaybe<
    Scalars["UntrustedRegexp"]["input"]
  >;
  /** Indicates whether duplicate Terraform packages are allowed for the namespace. */
  terraformModuleDuplicatesAllowed?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Autogenerated input type of UpdateNote */
export type UpdateNoteInput = {
  /** Content of the note. */
  body?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the note to update. */
  id: Scalars["NoteID"]["input"];
};

/** Autogenerated input type of UpdatePackagesCleanupPolicy */
export type UpdatePackagesCleanupPolicyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Number of duplicated package files to retain. */
  keepNDuplicatedPackageFiles?: InputMaybe<PackagesCleanupKeepDuplicatedPackageFilesEnum>;
  /** Project path where the packages cleanup policy is located. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of UpdatePackagesProtectionRule */
export type UpdatePackagesProtectionRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the package protection rule to be updated. */
  id: Scalars["PackagesProtectionRuleID"]["input"];
  /**
   * Minimum GitLab access required to delete packages from the package registry. Valid values include `OWNER` or `ADMIN`. If the value is `nil`, the default minimum access level is `MAINTAINER`. Available only when feature flag `packages_protected_packages_delete` is enabled. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  minimumAccessLevelForDelete?: InputMaybe<PackagesProtectionRuleAccessLevelForDelete>;
  /** Minimum GitLab access required to push packages to the package registry. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, the default minimum access level is `DEVELOPER`. */
  minimumAccessLevelForPush?: InputMaybe<PackagesProtectionRuleAccessLevel>;
  /** Package name protected by the protection rule. For example, `@my-scope/my-package-*`. Wildcard character `*` allowed. */
  packageNamePattern?: InputMaybe<Scalars["String"]["input"]>;
  /** Package type protected by the protection rule. For example, `NPM`, `PYPI`. */
  packageType?: InputMaybe<PackagesProtectionRulePackageType>;
};

/** Autogenerated input type of UpdateProjectComplianceViolation */
export type UpdateProjectComplianceViolationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the project compliance violation to update. */
  id: Scalars["ComplianceManagementProjectsComplianceViolationID"]["input"];
  /** New status for the project compliance violation. */
  status: ComplianceViolationStatus;
};

/** Autogenerated input type of UpdateRequirement */
export type UpdateRequirementInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the requirement. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * IID of the requirement to update. Deprecated in GitLab 15.8: Use work_item_iid instead.
   * @deprecated Use work_item_iid instead. Deprecated in GitLab 15.8.
   */
  iid?: InputMaybe<Scalars["String"]["input"]>;
  /** Creates a test report for the requirement with the given state. */
  lastTestReportState?: InputMaybe<TestReportState>;
  /** Full project path the requirement is associated with. */
  projectPath: Scalars["ID"]["input"];
  /** State of the requirement. */
  state?: InputMaybe<RequirementState>;
  /** Title of the requirement. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** IID of the requirement work item to update. */
  workItemIid?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of UpdateSnippet */
export type UpdateSnippetInput = {
  /** Actions to perform over the snippet repository and blobs. */
  blobActions?: InputMaybe<Array<SnippetBlobActionInputType>>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the snippet. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the snippet to update. */
  id: Scalars["SnippetID"]["input"];
  /** Title of the snippet. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** Visibility level of the snippet. */
  visibilityLevel?: InputMaybe<VisibilityLevelsEnum>;
};

/** Autogenerated input type of UpdateTerraformStateProtectionRule */
export type UpdateTerraformStateProtectionRuleInput = {
  /**
   * Restriction on the source of write requests. `ANYWHERE` allows all sources, `CI_ONLY` requires a CI job token, `CI_ON_PROTECTED_BRANCH_ONLY` requires a CI job on a protected branch. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  allowedFrom?: InputMaybe<TerraformStateProtectionRuleAllowedFrom>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the Terraform state protection rule to update. */
  id: Scalars["TerraformStateProtectionRuleID"]["input"];
  /**
   * Minimum GitLab access level required to perform write operations on the Terraform state. Valid values include `DEVELOPER`, `MAINTAINER`, `OWNER`, or `ADMIN`. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  minimumAccessLevelForWrite?: InputMaybe<TerraformStateProtectionRuleAccessLevel>;
  /**
   * Terraform state name protected by the rule. Introduced in GitLab 18.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.11.
   */
  stateName?: InputMaybe<Scalars["String"]["input"]>;
};

/** Attributes to update value stream stage. */
export type UpdateValueStreamStageInput = {
  /** Whether the stage is customized. If false, it assigns a built-in default stage by name. */
  custom?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** End event identifier. */
  endEventIdentifier?: InputMaybe<ValueStreamStageEvent>;
  /** Label ID associated with the end event identifier. */
  endEventLabelId?: InputMaybe<Scalars["LabelID"]["input"]>;
  /** Whether the stage is hidden. */
  hidden?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** ID of the stage to be updated. */
  id?: InputMaybe<Scalars["AnalyticsCycleAnalyticsStageID"]["input"]>;
  /** Name of the stage. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Start event identifier. */
  startEventIdentifier?: InputMaybe<ValueStreamStageEvent>;
  /** Label ID associated with the start event identifier. */
  startEventLabelId?: InputMaybe<Scalars["LabelID"]["input"]>;
};

/** Autogenerated input type of UpdateVirtualRegistriesSetting */
export type UpdateVirtualRegistriesSettingInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Enable or disable the virtual registries. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Group path for the group virtual registries. */
  fullPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of UploadCreate */
export type UploadCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** File to upload. */
  file: Scalars["Upload"]["input"];
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Autogenerated input type of UploadDelete */
export type UploadDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Upload filename. */
  filename: Scalars["String"]["input"];
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Secret part of upload path. */
  secret: Scalars["String"]["input"];
};

/** Autogenerated input type of UpsertFlatUserCap */
export type UpsertFlatUserCapInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Default per-user budget cap applied to all users. */
  flatUserCap: Scalars["Float"]["input"];
  /** Whether the flat per-user budget cap is enabled. */
  flatUserCapEnabled: Scalars["Boolean"]["input"];
  /** Path of the top-level group namespace. Omit for self-managed instance scope. */
  namespacePath?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of UpsertUserBudgetCapOverrides */
export type UpsertUserBudgetCapOverridesInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Path of the top-level group namespace. Omit for self-managed instance scope. */
  namespacePath?: InputMaybe<Scalars["String"]["input"]>;
  /** List of per-user budget cap overrides to upsert. */
  overrides: Array<BudgetCapUserOverrideInput>;
};

/** Autogenerated input type of UserAchievementPrioritiesUpdate */
export type UserAchievementPrioritiesUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the user achievements being prioritized, ordered from highest to lowest priority. */
  userAchievementIds: Array<Scalars["AchievementsUserAchievementID"]["input"]>;
};

/** Autogenerated input type of UserAchievementsDelete */
export type UserAchievementsDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the user achievement being deleted. */
  userAchievementId: Scalars["AchievementsUserAchievementID"]["input"];
};

/** Autogenerated input type of UserAchievementsUpdate */
export type UserAchievementsUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates whether or not the user achievement is visible on the profile. */
  showOnProfile: Scalars["Boolean"]["input"];
  /** Global ID of the user achievement being updated. */
  userAchievementId: Scalars["AchievementsUserAchievementID"]["input"];
};

/** Autogenerated input type of UserAddOnAssignmentBulkCreate */
export type UserAddOnAssignmentBulkCreateInput = {
  /** Global ID of AddOnPurchase to be assigned to. */
  addOnPurchaseId: Scalars["GitlabSubscriptionsAddOnPurchaseID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of user to be assigned. */
  userIds: Array<Scalars["UserID"]["input"]>;
};

/** Autogenerated input type of UserAddOnAssignmentBulkRemove */
export type UserAddOnAssignmentBulkRemoveInput = {
  /** Global ID of AddOnPurchase to be unassigned from. */
  addOnPurchaseId: Scalars["GitlabSubscriptionsAddOnPurchaseID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of user to be unassigned. */
  userIds: Array<Scalars["UserID"]["input"]>;
};

/** Autogenerated input type of UserAddOnAssignmentCreate */
export type UserAddOnAssignmentCreateInput = {
  /** Global ID of AddOnPurchase to be assigned to. */
  addOnPurchaseId: Scalars["GitlabSubscriptionsAddOnPurchaseID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of user to be assigned. */
  userId: Scalars["UserID"]["input"];
};

/** Autogenerated input type of UserAddOnAssignmentRemove */
export type UserAddOnAssignmentRemoveInput = {
  /** Global ID of AddOnPurchase assignment belongs to. */
  addOnPurchaseId: Scalars["GitlabSubscriptionsAddOnPurchaseID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of user whose assignment will be removed. */
  userId: Scalars["UserID"]["input"];
};

/** Autogenerated input type of UserCalloutCreate */
export type UserCalloutCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Feature name you want to dismiss the callout for. */
  featureName: Scalars["String"]["input"];
};

/** Name of the feature that the callout is for. */
export enum UserCalloutFeatureNameEnum {
  /** Callout feature name for active_user_count_threshold. */
  ActiveUserCountThreshold = "ACTIVE_USER_COUNT_THRESHOLD",
  /** Callout feature name for branch_rules_tip_callout. */
  BranchRulesTipCallout = "BRANCH_RULES_TIP_CALLOUT",
  /** Callout feature name for buy_pipeline_minutes_notification_dot. */
  BuyPipelineMinutesNotificationDot = "BUY_PIPELINE_MINUTES_NOTIFICATION_DOT",
  /** Callout feature name for canary_deployment. */
  CanaryDeployment = "CANARY_DEPLOYMENT",
  /** Callout feature name for ci_deprecation_warning_for_types_keyword. */
  CiDeprecationWarningForTypesKeyword = "CI_DEPRECATION_WARNING_FOR_TYPES_KEYWORD",
  /** Callout feature name for ci_minutes_limit_alert_danger_stage. */
  CiMinutesLimitAlertDangerStage = "CI_MINUTES_LIMIT_ALERT_DANGER_STAGE",
  /** Callout feature name for ci_minutes_limit_alert_exceeded_stage. */
  CiMinutesLimitAlertExceededStage = "CI_MINUTES_LIMIT_ALERT_EXCEEDED_STAGE",
  /** Callout feature name for ci_minutes_limit_alert_warning_stage. */
  CiMinutesLimitAlertWarningStage = "CI_MINUTES_LIMIT_ALERT_WARNING_STAGE",
  /** Callout feature name for cluster_security_warning. */
  ClusterSecurityWarning = "CLUSTER_SECURITY_WARNING",
  /** Callout feature name for duo_amazon_q_alert. */
  DuoAmazonQAlert = "DUO_AMAZON_Q_ALERT",
  /** Callout feature name for duo_panel_auto_expanded. */
  DuoPanelAutoExpanded = "DUO_PANEL_AUTO_EXPANDED",
  /** Callout feature name for duo_panel_empty_state_auto_expanded. */
  DuoPanelEmptyStateAutoExpanded = "DUO_PANEL_EMPTY_STATE_AUTO_EXPANDED",
  /** Callout feature name for email_otp_enrollment_callout. */
  EmailOtpEnrollmentCallout = "EMAIL_OTP_ENROLLMENT_CALLOUT",
  /** Callout feature name for expired_trial_status_widget. */
  ExpiredTrialStatusWidget = "EXPIRED_TRIAL_STATUS_WIDGET",
  /** Callout feature name for feature_flags_new_version. */
  FeatureFlagsNewVersion = "FEATURE_FLAGS_NEW_VERSION",
  /** Callout feature name for file_tree_browser_popover. */
  FileTreeBrowserPopover = "FILE_TREE_BROWSER_POPOVER",
  /** Callout feature name for focused_vulnerability_reporting. */
  FocusedVulnerabilityReporting = "FOCUSED_VULNERABILITY_REPORTING",
  /** Callout feature name for geo_enable_hashed_storage. */
  GeoEnableHashedStorage = "GEO_ENABLE_HASHED_STORAGE",
  /** Callout feature name for geo_migrate_hashed_storage. */
  GeoMigrateHashedStorage = "GEO_MIGRATE_HASHED_STORAGE",
  /** Callout feature name for gke_cluster_integration. */
  GkeClusterIntegration = "GKE_CLUSTER_INTEGRATION",
  /** Callout feature name for gold_trial_billings. */
  GoldTrialBillings = "GOLD_TRIAL_BILLINGS",
  /** Callout feature name for inline_blame_popover. */
  InlineBlamePopover = "INLINE_BLAME_POPOVER",
  /** Callout feature name for joining_a_project_alert. */
  JoiningAProjectAlert = "JOINING_A_PROJECT_ALERT",
  /** Callout feature name for merge_request_dashboard_display_preferences_popover. */
  MergeRequestDashboardDisplayPreferencesPopover = "MERGE_REQUEST_DASHBOARD_DISPLAY_PREFERENCES_POPOVER",
  /** Callout feature name for merge_request_dashboard_show_drafts. */
  MergeRequestDashboardShowDrafts = "MERGE_REQUEST_DASHBOARD_SHOW_DRAFTS",
  /** Callout feature name for namespace_over_storage_users_combined_alert. */
  NamespaceOverStorageUsersCombinedAlert = "NAMESPACE_OVER_STORAGE_USERS_COMBINED_ALERT",
  /** Callout feature name for namespace_storage_limit_alert_alert_threshold. */
  NamespaceStorageLimitAlertAlertThreshold = "NAMESPACE_STORAGE_LIMIT_ALERT_ALERT_THRESHOLD",
  /** Callout feature name for namespace_storage_limit_alert_error_threshold. */
  NamespaceStorageLimitAlertErrorThreshold = "NAMESPACE_STORAGE_LIMIT_ALERT_ERROR_THRESHOLD",
  /** Callout feature name for namespace_storage_limit_alert_warning_threshold. */
  NamespaceStorageLimitAlertWarningThreshold = "NAMESPACE_STORAGE_LIMIT_ALERT_WARNING_THRESHOLD",
  /** Callout feature name for namespace_storage_pre_enforcement_banner. */
  NamespaceStoragePreEnforcementBanner = "NAMESPACE_STORAGE_PRE_ENFORCEMENT_BANNER",
  /** Callout feature name for new_user_signups_cap_reached. */
  NewUserSignupsCapReached = "NEW_USER_SIGNUPS_CAP_REACHED",
  /** Callout feature name for openssl_callout. */
  OpensslCallout = "OPENSSL_CALLOUT",
  /** Callout feature name for period_in_terraform_state_name_alert. */
  PeriodInTerraformStateNameAlert = "PERIOD_IN_TERRAFORM_STATE_NAME_ALERT",
  /** Callout feature name for personal_access_token_expiry. */
  PersonalAccessTokenExpiry = "PERSONAL_ACCESS_TOKEN_EXPIRY",
  /** Callout feature name for personal_project_limitations_banner. */
  PersonalProjectLimitationsBanner = "PERSONAL_PROJECT_LIMITATIONS_BANNER",
  /** Callout feature name for pipeline_needs_banner. */
  PipelineNeedsBanner = "PIPELINE_NEEDS_BANNER",
  /** Callout feature name for pipeline_needs_hover_tip. */
  PipelineNeedsHoverTip = "PIPELINE_NEEDS_HOVER_TIP",
  /** Callout feature name for pipl_compliance_alert. */
  PiplComplianceAlert = "PIPL_COMPLIANCE_ALERT",
  /** Callout feature name for preview_user_over_limit_free_plan_alert. */
  PreviewUserOverLimitFreePlanAlert = "PREVIEW_USER_OVER_LIMIT_FREE_PLAN_ALERT",
  /** Callout feature name for profile_personal_access_token_expiry. */
  ProfilePersonalAccessTokenExpiry = "PROFILE_PERSONAL_ACCESS_TOKEN_EXPIRY",
  /** Callout feature name for project_repository_limit_alert_warning_threshold. */
  ProjectRepositoryLimitAlertWarningThreshold = "PROJECT_REPOSITORY_LIMIT_ALERT_WARNING_THRESHOLD",
  /** Callout feature name for registration_enabled_callout. */
  RegistrationEnabledCallout = "REGISTRATION_ENABLED_CALLOUT",
  /** Callout feature name for secrets_manager_nav_badge. */
  SecretsManagerNavBadge = "SECRETS_MANAGER_NAV_BADGE",
  /** Callout feature name for security_configuration_devops_alert. */
  SecurityConfigurationDevopsAlert = "SECURITY_CONFIGURATION_DEVOPS_ALERT",
  /** Callout feature name for security_configuration_upgrade_banner. */
  SecurityConfigurationUpgradeBanner = "SECURITY_CONFIGURATION_UPGRADE_BANNER",
  /** Callout feature name for security_manager_role. */
  SecurityManagerRole = "SECURITY_MANAGER_ROLE",
  /** Callout feature name for security_policy_protected_branch_modification. */
  SecurityPolicyProtectedBranchModification = "SECURITY_POLICY_PROTECTED_BRANCH_MODIFICATION",
  /** Callout feature name for security_scanner_profiles_announcement. */
  SecurityScannerProfilesAnnouncement = "SECURITY_SCANNER_PROFILES_ANNOUNCEMENT",
  /** Callout feature name for single_origin_fallback_callout. */
  SingleOriginFallbackCallout = "SINGLE_ORIGIN_FALLBACK_CALLOUT",
  /** Callout feature name for submit_license_usage_data_banner. */
  SubmitLicenseUsageDataBanner = "SUBMIT_LICENSE_USAGE_DATA_BANNER",
  /** Callout feature name for suggest_pipeline. */
  SuggestPipeline = "SUGGEST_PIPELINE",
  /** Callout feature name for suggest_popover_dismissed. */
  SuggestPopoverDismissed = "SUGGEST_POPOVER_DISMISSED",
  /** Callout feature name for tabs_position_highlight. */
  TabsPositionHighlight = "TABS_POSITION_HIGHLIGHT",
  /** Callout feature name for threat_monitoring_info. */
  ThreatMonitoringInfo = "THREAT_MONITORING_INFO",
  /** Callout feature name for transition_to_jihu_callout. */
  TransitionToJihuCallout = "TRANSITION_TO_JIHU_CALLOUT",
  /** Callout feature name for trial_status_reminder_d3. */
  TrialStatusReminderD3 = "TRIAL_STATUS_REMINDER_D3",
  /** Callout feature name for trial_status_reminder_d14. */
  TrialStatusReminderD14 = "TRIAL_STATUS_REMINDER_D14",
  /** Callout feature name for ultimate_trial. */
  UltimateTrial = "ULTIMATE_TRIAL",
  /** Callout feature name for unfinished_tag_cleanup_callout. */
  UnfinishedTagCleanupCallout = "UNFINISHED_TAG_CLEANUP_CALLOUT",
  /** Callout feature name for user_reached_limit_free_plan_alert. */
  UserReachedLimitFreePlanAlert = "USER_REACHED_LIMIT_FREE_PLAN_ALERT",
  /** Callout feature name for verification_reminder. */
  VerificationReminder = "VERIFICATION_REMINDER",
  /** Callout feature name for virtual_registry_permission_change_alert. */
  VirtualRegistryPermissionChangeAlert = "VIRTUAL_REGISTRY_PERMISSION_CHANGE_ALERT",
  /** Callout feature name for vulnerability_archival. */
  VulnerabilityArchival = "VULNERABILITY_ARCHIVAL",
  /** Callout feature name for vulnerability_report_limited_experience. */
  VulnerabilityReportLimitedExperience = "VULNERABILITY_REPORT_LIMITED_EXPERIENCE",
  /** Callout feature name for web_ide_alert_dismissed. */
  WebIdeAlertDismissed = "WEB_IDE_ALERT_DISMISSED",
  /** Callout feature name for web_ide_ci_environments_guidance. */
  WebIdeCiEnvironmentsGuidance = "WEB_IDE_CI_ENVIRONMENTS_GUIDANCE",
  /** Callout feature name for work_items_onboarding_modal. */
  WorkItemsOnboardingModal = "WORK_ITEMS_ONBOARDING_MODAL",
  /** Callout feature name for work_item_epic_feedback. */
  WorkItemEpicFeedback = "WORK_ITEM_EPIC_FEEDBACK",
}

/** Autogenerated input type of UserCustomAttributeSet */
export type UserCustomAttributeSetInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Key of the custom attribute. */
  key: Scalars["String"]["input"];
  /** Global ID of the user. */
  userId: Scalars["UserID"]["input"];
  /** Value of the custom attribute. */
  value: Scalars["String"]["input"];
};

/** Filter for user activity events. */
export enum UserEventFilter {
  /** All events. */
  All = "ALL",
  /** Comment events. */
  Comments = "COMMENTS",
  /** Design events. */
  Designs = "DESIGNS",
  /** Issue events. */
  Issue = "ISSUE",
  /** Merge events. */
  Merged = "MERGED",
  /** Push events. */
  Push = "PUSH",
  /** Team events. */
  Team = "TEAM",
  /** Wiki page events. */
  Wiki = "WIKI",
}

/** Autogenerated input type of UserGroupCalloutCreate */
export type UserGroupCalloutCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Feature name you want to dismiss the callout for. */
  featureName: Scalars["String"]["input"];
  /** Group for the callout. */
  groupId: Scalars["GroupID"]["input"];
};

/** Name of the feature that the callout is for. */
export enum UserGroupCalloutFeatureName {
  /** Callout feature name for all_seats_used_alert. */
  AllSeatsUsedAlert = "ALL_SEATS_USED_ALERT",
  /** Callout feature name for approaching_seat_count_threshold. */
  ApproachingSeatCountThreshold = "APPROACHING_SEAT_COUNT_THRESHOLD",
  /** Callout feature name for ci_minutes_limit_alert_danger_stage. */
  CiMinutesLimitAlertDangerStage = "CI_MINUTES_LIMIT_ALERT_DANGER_STAGE",
  /** Callout feature name for ci_minutes_limit_alert_exceeded_stage. */
  CiMinutesLimitAlertExceededStage = "CI_MINUTES_LIMIT_ALERT_EXCEEDED_STAGE",
  /** Callout feature name for ci_minutes_limit_alert_warning_stage. */
  CiMinutesLimitAlertWarningStage = "CI_MINUTES_LIMIT_ALERT_WARNING_STAGE",
  /** Callout feature name for duo_code_review_enabled_by_default. */
  DuoCodeReviewEnabledByDefault = "DUO_CODE_REVIEW_ENABLED_BY_DEFAULT",
  /** Callout feature name for end_of_trial_modal. */
  EndOfTrialModal = "END_OF_TRIAL_MODAL",
  /** Callout feature name for enforcement_at_limit_alert. */
  EnforcementAtLimitAlert = "ENFORCEMENT_AT_LIMIT_ALERT",
  /** Callout feature name for expired_duo_enterprise_trial_widget. */
  ExpiredDuoEnterpriseTrialWidget = "EXPIRED_DUO_ENTERPRISE_TRIAL_WIDGET",
  /** Callout feature name for expired_duo_pro_trial_widget. */
  ExpiredDuoProTrialWidget = "EXPIRED_DUO_PRO_TRIAL_WIDGET",
  /** Callout feature name for expired_trial_status_widget. */
  ExpiredTrialStatusWidget = "EXPIRED_TRIAL_STATUS_WIDGET",
  /** Callout feature name for free_group_limited_alert. */
  FreeGroupLimitedAlert = "FREE_GROUP_LIMITED_ALERT",
  /** Callout feature name for namespace_over_storage_users_combined_alert. */
  NamespaceOverStorageUsersCombinedAlert = "NAMESPACE_OVER_STORAGE_USERS_COMBINED_ALERT",
  /** Callout feature name for namespace_storage_limit_alert_alert_threshold. */
  NamespaceStorageLimitAlertAlertThreshold = "NAMESPACE_STORAGE_LIMIT_ALERT_ALERT_THRESHOLD",
  /** Callout feature name for namespace_storage_limit_alert_error_threshold. */
  NamespaceStorageLimitAlertErrorThreshold = "NAMESPACE_STORAGE_LIMIT_ALERT_ERROR_THRESHOLD",
  /** Callout feature name for namespace_storage_limit_alert_warning_threshold. */
  NamespaceStorageLimitAlertWarningThreshold = "NAMESPACE_STORAGE_LIMIT_ALERT_WARNING_THRESHOLD",
  /** Callout feature name for namespace_storage_pre_enforcement_banner. */
  NamespaceStoragePreEnforcementBanner = "NAMESPACE_STORAGE_PRE_ENFORCEMENT_BANNER",
  /** Callout feature name for namespace_user_cap_reached_alert. */
  NamespaceUserCapReachedAlert = "NAMESPACE_USER_CAP_REACHED_ALERT",
  /** Callout feature name for overage_seat_count_threshold. */
  OverageSeatCountThreshold = "OVERAGE_SEAT_COUNT_THRESHOLD",
  /** Callout feature name for preview_usage_quota_free_plan_alert. */
  PreviewUsageQuotaFreePlanAlert = "PREVIEW_USAGE_QUOTA_FREE_PLAN_ALERT",
  /** Callout feature name for preview_user_over_limit_free_plan_alert. */
  PreviewUserOverLimitFreePlanAlert = "PREVIEW_USER_OVER_LIMIT_FREE_PLAN_ALERT",
  /** Callout feature name for project_repository_limit_alert_warning_threshold. */
  ProjectRepositoryLimitAlertWarningThreshold = "PROJECT_REPOSITORY_LIMIT_ALERT_WARNING_THRESHOLD",
  /** Callout feature name for reached_seat_count_threshold. */
  ReachedSeatCountThreshold = "REACHED_SEAT_COUNT_THRESHOLD",
  /** Callout feature name for usage_quota_trial_alert. */
  UsageQuotaTrialAlert = "USAGE_QUOTA_TRIAL_ALERT",
  /** Callout feature name for user_reached_limit_free_plan_alert. */
  UserReachedLimitFreePlanAlert = "USER_REACHED_LIMIT_FREE_PLAN_ALERT",
  /** Callout feature name for web_hook_disabled. */
  WebHookDisabled = "WEB_HOOK_DISABLED",
}

/** Autogenerated input type of UserPreferencesUpdate */
export type UserPreferencesUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Default namespace context for Duo features when namespace can not be inferred. */
  duoDefaultNamespaceId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Status of the Web IDE Extension Marketplace opt-in for the user. */
  extensionsMarketplaceOptInStatus?: InputMaybe<ExtensionsMarketplaceOptInStatus>;
  /** Sort order for issue lists. */
  issuesSort?: InputMaybe<IssueSort>;
  /** Governing and billing namespace for Orbit. */
  knowledgeGraphGoverningNamespaceId?: InputMaybe<Scalars["Int"]["input"]>;
  /** Merge request dashboard list rendering type. */
  mergeRequestDashboardListType?: InputMaybe<MergeRequestsDashboardListType>;
  /** Show draft merge requests on the merge request dashboard. */
  mergeRequestDashboardShowDrafts?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Sort order for issue lists. */
  mergeRequestsSort?: InputMaybe<MergeRequestSort>;
  /**
   * Orbit agent settings, e.g.: "{ enabled: false }". Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  orbitSettings?: InputMaybe<Scalars["JSON"]["input"]>;
  /**
   * Default list view for organization groups and projects. Introduced in GitLab 17.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.2.
   */
  organizationGroupsProjectsDisplay?: InputMaybe<OrganizationGroupProjectDisplay>;
  /**
   * Sort order for organization groups and projects. Introduced in GitLab 17.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.2.
   */
  organizationGroupsProjectsSort?: InputMaybe<OrganizationGroupProjectSort>;
  /** Sort order for projects. */
  projectsSort?: InputMaybe<ProjectSort>;
  /** Use work item view instead of legacy issue view. */
  useWorkItemsView?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Determines whether the pipeline list shows ID or IID. */
  visibilityPipelineIdType?: InputMaybe<VisibilityPipelineIdType>;
  /**
   * Whether to skip the commit message modal and use the auto-generated commit message when saving changes to a wiki document. Introduced in GitLab 18.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.10.
   */
  wikiUseAutoCommitMessage?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Display settings for the work item lists, e.g.: "{ shouldOpenItemsInSidePanel: false }". Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  workItemsDisplaySettings?: InputMaybe<Scalars["JSON"]["input"]>;
};

/** Types of User Promotion States. */
export enum UserPromotionStatusType {
  /** Failed to apply promotion requests for user. */
  Failed = "FAILED",
  /** User promotion was successful, but all promotion requests were not successfully applied. */
  PartialSuccess = "PARTIAL_SUCCESS",
  /** Successfully applied all promotion requests for user. */
  Success = "SUCCESS",
}

/** Autogenerated input type of UserSetNamespaceCommitEmail */
export type UserSetNamespaceCommitEmailInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the email to set. */
  emailId?: InputMaybe<Scalars["EmailID"]["input"]>;
  /** ID of the namespace to set the namespace commit email for. */
  namespaceId: Scalars["NamespaceID"]["input"];
};

/** Possible states of a user */
export enum UserState {
  /** User is active and can use the system. */
  Active = "active",
  /** User is blocked, and their contributions are hidden. */
  Banned = "banned",
  /** User has been blocked by an administrator and cannot use the system. */
  Blocked = "blocked",
  /** User is blocked and pending approval. */
  BlockedPendingApproval = "blocked_pending_approval",
  /** User is no longer active and cannot use the system. */
  Deactivated = "deactivated",
  /** User has been blocked by the system. */
  LdapBlocked = "ldap_blocked",
}

/** Possible types of user */
export enum UserType {
  /** Admin bot */
  AdminBot = "ADMIN_BOT",
  /** Alert bot */
  AlertBot = "ALERT_BOT",
  /** Automation bot */
  AutomationBot = "AUTOMATION_BOT",
  /** Duo code review bot */
  DuoCodeReviewBot = "DUO_CODE_REVIEW_BOT",
  /** Ghost */
  Ghost = "GHOST",
  /** Human */
  Human = "HUMAN",
  /** Import user */
  ImportUser = "IMPORT_USER",
  /** Placeholder */
  Placeholder = "PLACEHOLDER",
  /** Project bot */
  ProjectBot = "PROJECT_BOT",
  /** Security bot */
  SecurityBot = "SECURITY_BOT",
  /** Security policy bot */
  SecurityPolicyBot = "SECURITY_POLICY_BOT",
  /** Service account */
  ServiceAccount = "SERVICE_ACCOUNT",
  /** Service user */
  ServiceUser = "SERVICE_USER",
  /** Support bot */
  SupportBot = "SUPPORT_BOT",
  /** Visual review bot */
  VisualReviewBot = "VISUAL_REVIEW_BOT",
}

/** Autogenerated input type of ValueStreamCreate */
export type ValueStreamCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Value stream name. */
  name: Scalars["String"]["input"];
  /** Full path of the namespace(project or group) the value stream is created in. */
  namespacePath: Scalars["ID"]["input"];
  /** Value stream configuration. */
  setting?: InputMaybe<ValueStreamSettingInput>;
  /** Value stream stages. */
  stages?: InputMaybe<Array<CreateValueStreamStageInput>>;
};

/** Possible identifier types for a measurement */
export enum ValueStreamDashboardMetric {
  /** Contributor count. EXPERIMENTAL: Only available on the SaaS version of GitLab when the ClickHouse database backend is enabled. */
  Contributors = "CONTRIBUTORS",
  /** Group count. */
  Groups = "GROUPS",
  /** Issue count. */
  Issues = "ISSUES",
  /** Merge request count. */
  MergeRequests = "MERGE_REQUESTS",
  /** Pipeline count. */
  Pipelines = "PIPELINES",
  /** Project count. */
  Projects = "PROJECTS",
  /** User count. */
  Users = "USERS",
}

/** Possible identifier types for project-level measurement */
export enum ValueStreamDashboardProjectLevelMetric {
  /** Contributor count. EXPERIMENTAL: Only available on the SaaS version of GitLab when the ClickHouse database backend is enabled. */
  Contributors = "CONTRIBUTORS",
  /** Issue count. */
  Issues = "ISSUES",
  /** Merge request count. */
  MergeRequests = "MERGE_REQUESTS",
  /** Pipeline count. */
  Pipelines = "PIPELINES",
}

/** Autogenerated input type of ValueStreamDestroy */
export type ValueStreamDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the value stream to destroy. */
  id: Scalars["AnalyticsCycleAnalyticsValueStreamID"]["input"];
};

/** Attributes for value stream setting. */
export type ValueStreamSettingInput = {
  /** Projects' global IDs used to filter value stream data. */
  projectIdsFilter?: InputMaybe<Array<Scalars["ProjectID"]["input"]>>;
};

/** Stage event identifiers */
export enum ValueStreamStageEvent {
  /** Code stage start event. */
  CodeStageStart = "CODE_STAGE_START",
  /** Issue closed event. */
  IssueClosed = "ISSUE_CLOSED",
  /** Issue created event. */
  IssueCreated = "ISSUE_CREATED",
  /** Issue deployed to production event. */
  IssueDeployedToProduction = "ISSUE_DEPLOYED_TO_PRODUCTION",
  /** Issue first added to board event. */
  IssueFirstAddedToBoard = "ISSUE_FIRST_ADDED_TO_BOARD",
  /** Issue first added to iteration event. */
  IssueFirstAddedToIteration = "ISSUE_FIRST_ADDED_TO_ITERATION",
  /** Issue first assigned at event. */
  IssueFirstAssignedAt = "ISSUE_FIRST_ASSIGNED_AT",
  /** Issue first associated with milestone event. */
  IssueFirstAssociatedWithMilestone = "ISSUE_FIRST_ASSOCIATED_WITH_MILESTONE",
  /** Issue first mentioned in commit event. */
  IssueFirstMentionedInCommit = "ISSUE_FIRST_MENTIONED_IN_COMMIT",
  /** Issue label added event. */
  IssueLabelAdded = "ISSUE_LABEL_ADDED",
  /** Issue label removed event. */
  IssueLabelRemoved = "ISSUE_LABEL_REMOVED",
  /** Issue last edited event. */
  IssueLastEdited = "ISSUE_LAST_EDITED",
  /** Issue stage end event. */
  IssueStageEnd = "ISSUE_STAGE_END",
  /** Merge request closed event. */
  MergeRequestClosed = "MERGE_REQUEST_CLOSED",
  /** Merge request created event. */
  MergeRequestCreated = "MERGE_REQUEST_CREATED",
  /** Merge request first assigned at event. */
  MergeRequestFirstAssignedAt = "MERGE_REQUEST_FIRST_ASSIGNED_AT",
  /** Merge request first commit at event. */
  MergeRequestFirstCommitAt = "MERGE_REQUEST_FIRST_COMMIT_AT",
  /** Merge request first deployed to production event. */
  MergeRequestFirstDeployedToProduction = "MERGE_REQUEST_FIRST_DEPLOYED_TO_PRODUCTION",
  /** Merge request label added event. */
  MergeRequestLabelAdded = "MERGE_REQUEST_LABEL_ADDED",
  /** Merge request label removed event. */
  MergeRequestLabelRemoved = "MERGE_REQUEST_LABEL_REMOVED",
  /** Merge request last approved at event. */
  MergeRequestLastApprovedAt = "MERGE_REQUEST_LAST_APPROVED_AT",
  /** Merge request last build finished event. */
  MergeRequestLastBuildFinished = "MERGE_REQUEST_LAST_BUILD_FINISHED",
  /** Merge request last build started event. */
  MergeRequestLastBuildStarted = "MERGE_REQUEST_LAST_BUILD_STARTED",
  /** Merge request last edited event. */
  MergeRequestLastEdited = "MERGE_REQUEST_LAST_EDITED",
  /** Merge request merged event. */
  MergeRequestMerged = "MERGE_REQUEST_MERGED",
  /** Merge request reviewer first assigned event. */
  MergeRequestReviewerFirstAssigned = "MERGE_REQUEST_REVIEWER_FIRST_ASSIGNED",
  /** Plan stage start event. */
  PlanStageStart = "PLAN_STAGE_START",
}

/** Sorting values available to value stream stage items */
export enum ValueStreamStageItemSort {
  /** Duration by ascending order. */
  DurationAsc = "DURATION_ASC",
  /** Duration by ascending order. */
  DurationDesc = "DURATION_DESC",
  /** Stage end event time by ascending order. */
  EndEventAsc = "END_EVENT_ASC",
  /** Stage end event time by descending order. */
  EndEventDesc = "END_EVENT_DESC",
}

/** Autogenerated input type of ValueStreamUpdate */
export type ValueStreamUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the value stream to update. */
  id: Scalars["AnalyticsCycleAnalyticsValueStreamID"]["input"];
  /** Value stream name. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Value stream configuration. */
  setting?: InputMaybe<ValueStreamSettingInput>;
  /** Value stream stages. */
  stages?: InputMaybe<Array<UpdateValueStreamStageInput>>;
};

export enum VerificationStateEnum {
  /** Verification process is disabled. */
  Disabled = "DISABLED",
  /** Verification process finished but failed. */
  Failed = "FAILED",
  /** Verification process has not started. */
  Pending = "PENDING",
  /** Verification process is in progress. */
  Started = "STARTED",
  /** Verification process finished successfully. */
  Succeeded = "SUCCEEDED",
}

/** Verification status of a GPG, X.509 or SSH signature for a commit. */
export enum VerificationStatus {
  /** expired_key verification status. */
  ExpiredKey = "EXPIRED_KEY",
  /** multiple_signatures verification status. */
  MultipleSignatures = "MULTIPLE_SIGNATURES",
  /** other_user verification status. */
  OtherUser = "OTHER_USER",
  /** revoked_key verification status. */
  RevokedKey = "REVOKED_KEY",
  /** same_user_different_email verification status. */
  SameUserDifferentEmail = "SAME_USER_DIFFERENT_EMAIL",
  /** unknown_key verification status. */
  UnknownKey = "UNKNOWN_KEY",
  /** unverified verification status. */
  Unverified = "UNVERIFIED",
  /** unverified_author_email verification status. */
  UnverifiedAuthorEmail = "UNVERIFIED_AUTHOR_EMAIL",
  /** unverified_key verification status. */
  UnverifiedKey = "UNVERIFIED_KEY",
  /** verified verification status. */
  Verified = "VERIFIED",
  /** verified_ca verification status. */
  VerifiedCa = "VERIFIED_CA",
  /** verified_system verification status. */
  VerifiedSystem = "VERIFIED_SYSTEM",
}

export type VerificationStatusFilterInput = {
  /** Verification status of the work item. */
  verificationStatus: RequirementStatusFilter;
};

export type VerificationStatusInput = {
  /** Verification status of the work item. */
  verificationStatus: TestReportState;
};

/** Autogenerated input type of VerifiedNamespaceCreate */
export type VerifiedNamespaceCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Root namespace path. */
  namespacePath: Scalars["ID"]["input"];
  /** Verification level for a root namespace. */
  verificationLevel: CiCatalogResourceVerificationLevel;
};

/** Autogenerated input type of VirtualRegistriesCleanupPolicyUpsert */
export type VirtualRegistriesCleanupPolicyUpsertInput = {
  /** Job cadence for the cleanup process. Allowed values are 1, 7, 14, 30, 90. Default is 7. */
  cadence?: InputMaybe<Scalars["Int"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Enable or disable the virtual registries cleanup policy. Default is `false`. */
  enabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Group path for the group virtual registries. */
  fullPath: Scalars["ID"]["input"];
  /** Keep packages for the period after download. Range is 1-365. Default is 30. */
  keepNDaysAfterDownload?: InputMaybe<Scalars["Int"]["input"]>;
  /** Whether to notify group owners when cleanup runs fail. Default is `false`. */
  notifyOnFailure?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Whether to notify group owners when cleanup runs succeed. Default is `false`. */
  notifyOnSuccess?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export enum VisibilityLevelsEnum {
  /** Internal visibility level. */
  Internal = "internal",
  /** Private visibility level. */
  Private = "private",
  /** Public visibility level. */
  Public = "public",
}

/** Determines whether the pipeline list shows ID or IID */
export enum VisibilityPipelineIdType {
  /** Display pipeline ID. */
  Id = "ID",
  /** Display pipeline IID. */
  Iid = "IID",
}

export enum VisibilityScopesEnum {
  /** Snippet is visible for any logged in user except external users. */
  Internal = "internal",
  /** Snippet is visible only to the snippet creator. */
  Private = "private",
  /** Snippet can be accessed without any authentication. */
  Public = "public",
}

/** Autogenerated input type of VulnerabilitiesArchive */
export type VulnerabilitiesArchiveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Last update date of vulnerabilities being archived. */
  date: Scalars["Date"]["input"];
  /** ID of the project to attach the vulnerability to. */
  projectId: Scalars["ProjectID"]["input"];
};

/** Autogenerated input type of VulnerabilitiesCreateIssue */
export type VulnerabilitiesCreateIssueInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the project to attach the issue to. */
  project: Scalars["ProjectID"]["input"];
  /** IDs of vulnerabilities to link to the given issue.  Up to 100 can be provided. */
  vulnerabilityIds: Array<Scalars["VulnerabilityID"]["input"]>;
};

/** Autogenerated input type of VulnerabilitiesDismiss */
export type VulnerabilitiesDismissInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment why vulnerability was dismissed (maximum 50,000 characters). */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** Reason why vulnerability should be dismissed. */
  dismissalReason?: InputMaybe<VulnerabilityDismissalReason>;
  /** IDs of the vulnerabilities to be dismissed (maximum 100 entries). */
  vulnerabilityIds: Array<Scalars["VulnerabilityID"]["input"]>;
};

/** Autogenerated input type of VulnerabilitiesRemoveAllFromProject */
export type VulnerabilitiesRemoveAllFromProjectInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** IDs of project for which all Vulnerabilities should be removed. The deletion will happen in the background so the changes will not be visible immediately. */
  projectIds: Array<Scalars["ProjectID"]["input"]>;
  /** When set as `true`, deletes only the vulnerabilities no longer detected. When set as `false`, deletes only the vulnerabilities still detected. */
  resolvedOnDefaultBranch?: InputMaybe<Scalars["Boolean"]["input"]>;
};

/** Autogenerated input type of VulnerabilityAutoRemediation */
export type VulnerabilityAutoRemediationInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the vulnerability to remediate. */
  vulnerabilityId: Scalars["VulnerabilityID"]["input"];
};

/** Outcome of triggering auto-remediation for a vulnerability. */
export enum VulnerabilityAutoRemediationStatus {
  /** Auto-remediation was triggered and a merge request will be created if a fix is produced. */
  InProgress = "IN_PROGRESS",
  /** No fix is available for the vulnerability, so auto-remediation was not triggered. */
  NoFixAvailable = "NO_FIX_AVAILABLE",
  /** No auto-remediation path is available for the vulnerability, so it was not triggered. */
  Unsupported = "UNSUPPORTED",
}

/** Autogenerated input type of VulnerabilityConfirm */
export type VulnerabilityConfirmInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment why vulnerability was confirmed (maximum 50,000 characters). */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the vulnerability to be confirmed. */
  id: Scalars["VulnerabilityID"]["input"];
};

/** Input type for filtering projects by vulnerability count and severity */
export type VulnerabilityCountFilterInput = {
  /** Number of vulnerabilities to filter by. */
  count: Scalars["Int"]["input"];
  /** Comparison operator for the vulnerability count. */
  operator: ComparisonOperator;
  /** Severity level of vulnerabilities to filter by. */
  severity: VulnerabilitySeverity;
};

/** Autogenerated input type of VulnerabilityCreate */
export type VulnerabilityCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Timestamp of when the vulnerability state changed to confirmed (defaults to creation time if status is `confirmed`). */
  confirmedAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Long text section that describes the vulnerability in more detail. */
  description: Scalars["String"]["input"];
  /** Timestamp of when the vulnerability was first detected (defaults to creation time). */
  detectedAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Timestamp of when the vulnerability state changed to dismissed (defaults to creation time if status is `dismissed`). */
  dismissedAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Array of CVE or CWE identifiers for the vulnerability. */
  identifiers: Array<VulnerabilityIdentifierInput>;
  /** Name of the vulnerability. */
  name: Scalars["String"]["input"];
  /** ID of the project to attach the vulnerability to. */
  project: Scalars["ProjectID"]["input"];
  /** Tracked context to associate with the vulnerability. */
  projectTrackedContext?: InputMaybe<ProjectTrackedContextInput>;
  /** Timestamp of when the vulnerability state changed to resolved (defaults to creation time if status is `resolved`). */
  resolvedAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Information about the scanner used to discover the vulnerability. */
  scanner: VulnerabilityScannerInput;
  /** Severity of the vulnerability (defaults to `unknown`). */
  severity?: InputMaybe<VulnerabilitySeverity>;
  /** Instructions for how to fix the vulnerability. */
  solution?: InputMaybe<Scalars["String"]["input"]>;
  /** State of the vulnerability (defaults to `detected`). */
  state?: InputMaybe<VulnerabilityState>;
};

/** Autogenerated input type of VulnerabilityDismissFalsePositiveFlag */
export type VulnerabilityDismissFalsePositiveFlagInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the vulnerability to dismiss false positive flag for. */
  id: Scalars["VulnerabilityID"]["input"];
};

/** Autogenerated input type of VulnerabilityDismiss */
export type VulnerabilityDismissInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment why vulnerability was dismissed (maximum 50,000 characters). */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** Reason why vulnerability should be dismissed. */
  dismissalReason?: InputMaybe<VulnerabilityDismissalReason>;
  /** ID of the vulnerability to be dismissed. */
  id: Scalars["VulnerabilityID"]["input"];
};

/** The dismissal reason of the Vulnerability */
export enum VulnerabilityDismissalReason {
  /** The vulnerability is known, and has not been remediated or mitigated, but is considered to be an acceptable business risk. */
  AcceptableRisk = "ACCEPTABLE_RISK",
  /** An error in reporting in which a test result incorrectly indicates the presence of a vulnerability in a system when the vulnerability is not present. */
  FalsePositive = "FALSE_POSITIVE",
  /** A management, operational, or technical control (that is, safeguard or countermeasure) employed by an organization that provides equivalent or comparable protection for an information system. */
  MitigatingControl = "MITIGATING_CONTROL",
  /** The vulnerability is known, and has not been remediated or mitigated, but is considered to be in a part of the application that will not be updated. */
  NotApplicable = "NOT_APPLICABLE",
  /** The finding is not a vulnerability because it is part of a test or is test data. */
  UsedInTests = "USED_IN_TESTS",
}

/** Autogenerated input type of VulnerabilityExternalIssueLinkCreate */
export type VulnerabilityExternalIssueLinkCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** External tracker type of the external issue link. */
  externalTracker: VulnerabilityExternalIssueLinkExternalTracker;
  /** ID of the vulnerability. */
  id: Scalars["VulnerabilityID"]["input"];
  /** Type of the external issue link. */
  linkType: VulnerabilityExternalIssueLinkType;
};

/** Autogenerated input type of VulnerabilityExternalIssueLinkDestroy */
export type VulnerabilityExternalIssueLinkDestroyInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the vulnerability external issue link. */
  id: Scalars["VulnerabilitiesExternalIssueLinkID"]["input"];
};

/** The external tracker of the external issue link related to a vulnerability */
export enum VulnerabilityExternalIssueLinkExternalTracker {
  /** Jira external tracker */
  Jira = "JIRA",
}

/** The type of the external issue link related to a vulnerability */
export enum VulnerabilityExternalIssueLinkType {
  /** Created link type. */
  Created = "CREATED",
}

/** Status of vulnerability flag false positive detection */
export enum VulnerabilityFalsePositiveDetectionStatus {
  /** Detection is detected as fp */
  DetectedAsFp = "DETECTED_AS_FP",
  /** Detection is detected as not fp */
  DetectedAsNotFp = "DETECTED_AS_NOT_FP",
  /** Detection is dismissed */
  Dismissed = "DISMISSED",
  /** Detection is failed */
  Failed = "FAILED",
  /** Detection is not started */
  NotStarted = "NOT_STARTED",
}

/** Status of a secret token found in a vulnerability */
export enum VulnerabilityFindingTokenStatusState {
  /** Token is active and can be exploited. */
  Active = "ACTIVE",
  /** Token is inactive and cannot be exploited. */
  Inactive = "INACTIVE",
  /** Token status is unknown. */
  Unknown = "UNKNOWN",
}

/** Status of a step in the vulnerability resolution funnel. */
export enum VulnerabilityFunnelStepStatus {
  /** Data is available and count is populated. */
  Available = "AVAILABLE",
  /** Licensed but the underlying feature is disabled in settings. */
  UnavailableDisabled = "UNAVAILABLE_DISABLED",
  /** User's plan does not include the required capability. */
  UnavailableNoLicense = "UNAVAILABLE_NO_LICENSE",
  /** An earlier step in the funnel is unavailable, so no data can be shown for the step. */
  UnavailableUpstreamDisabled = "UNAVAILABLE_UPSTREAM_DISABLED",
}

/** The grade of the vulnerable project */
export enum VulnerabilityGrade {
  /** A grade */
  A = "A",
  /** B grade */
  B = "B",
  /** C grade */
  C = "C",
  /** D grade */
  D = "D",
  /** F grade */
  F = "F",
}

export type VulnerabilityIdentifierInput = {
  /** External ID of the vulnerability identifier. */
  externalId?: InputMaybe<Scalars["String"]["input"]>;
  /** External type of the vulnerability identifier. */
  externalType?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the vulnerability identifier. */
  name: Scalars["String"]["input"];
  /** URL of the vulnerability identifier. */
  url: Scalars["String"]["input"];
};

/** Autogenerated input type of VulnerabilityIssueLinkCreate */
export type VulnerabilityIssueLinkCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the issue to link to. */
  issueId: Scalars["IssueID"]["input"];
  /** IDs of vulnerabilities to link to the given issue.  Up to 100 can be provided. */
  vulnerabilityIds: Array<Scalars["VulnerabilityID"]["input"]>;
};

/** The type of the issue link related to a vulnerability */
export enum VulnerabilityIssueLinkType {
  /** Issue is created for the vulnerability */
  Created = "CREATED",
  /** Has a related issue */
  Related = "RELATED",
}

/** Autogenerated input type of VulnerabilityLinkMergeRequest */
export type VulnerabilityLinkMergeRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the merge request. */
  mergeRequestId: Scalars["MergeRequestID"]["input"];
  /** Confidence rating representing the estimated accuracy of the fix in the AI generated merge request. Decimal value between 0 and 1, with 1 being the highest. */
  readinessScore?: InputMaybe<Scalars["Float"]["input"]>;
  /** ID of the vulnerability. */
  vulnerabilityId: Scalars["VulnerabilityID"]["input"];
};

/** `OwaspTop10` vulnerability categories for OWASP 2021 */
export enum VulnerabilityOwasp2021Top10 {
  /**
   * A01:2021-Broken Access Control, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A01_2021 = "A01_2021",
  /**
   * A02:2021-Cryptographic Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A02_2021 = "A02_2021",
  /**
   * A03:2021-Injection, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A03_2021 = "A03_2021",
  /**
   * A04:2021-Insecure Design, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A04_2021 = "A04_2021",
  /**
   * A05:2021-Security Misconfiguration, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A05_2021 = "A05_2021",
  /**
   * A06:2021-Vulnerable and Outdated Components, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A06_2021 = "A06_2021",
  /**
   * A07:2021-Identification and Authentication Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A07_2021 = "A07_2021",
  /**
   * A08:2021-Software and Data Integrity Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A08_2021 = "A08_2021",
  /**
   * A09:2021-Security Logging and Monitoring Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A09_2021 = "A09_2021",
  /**
   * A1:2021-Broken Access Control, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A1_2021 = "A1_2021",
  /**
   * A2:2021-Cryptographic Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A2_2021 = "A2_2021",
  /**
   * A3:2021-Injection, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A3_2021 = "A3_2021",
  /**
   * A4:2021-Insecure Design, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A4_2021 = "A4_2021",
  /**
   * A5:2021-Security Misconfiguration, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A5_2021 = "A5_2021",
  /**
   * A6:2021-Vulnerable and Outdated Components, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A6_2021 = "A6_2021",
  /**
   * A7:2021-Identification and Authentication Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A7_2021 = "A7_2021",
  /**
   * A8:2021-Software and Data Integrity Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A8_2021 = "A8_2021",
  /**
   * A9:2021-Security Logging and Monitoring Failures, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A9_2021 = "A9_2021",
  /**
   * A10:2021-Server-Side Request Forgery, OWASP top 10 category. Introduced in GitLab 18.1: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.1.
   */
  A10_2021 = "A10_2021",
  /** No OWASP top 10 category. */
  None = "NONE",
}

/** `OwaspTop10` vulnerability categories for OWASP 2025 */
export enum VulnerabilityOwasp2025Top10 {
  /**
   * A01:2025-Broken Access Control, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A01_2025 = "A01_2025",
  /**
   * A02:2025-Security Misconfiguration, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A02_2025 = "A02_2025",
  /**
   * A03:2025-Software Supply Chain Failures, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A03_2025 = "A03_2025",
  /**
   * A04:2025-Cryptographic Failures, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A04_2025 = "A04_2025",
  /**
   * A05:2025-Injection, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A05_2025 = "A05_2025",
  /**
   * A06:2025-Insecure Design, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A06_2025 = "A06_2025",
  /**
   * A07:2025-Authentication Failures, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A07_2025 = "A07_2025",
  /**
   * A08:2025-Software or Data Integrity Failures, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A08_2025 = "A08_2025",
  /**
   * A09:2025-Security Logging and Alerting Failures, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A09_2025 = "A09_2025",
  /**
   * A10:2025-Mishandling of Exceptional Conditions, OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  A10_2025 = "A10_2025",
  /**
   * No OWASP top 10 2025 category. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  None = "NONE",
}

/** OwaspTop10 category of the vulnerability */
export enum VulnerabilityOwaspTop10 {
  /** A1:2017-Injection, OWASP top 10 2017 category. */
  A1_2017 = "A1_2017",
  /** A2:2017-Broken Authentication, OWASP top 10 2017 category. */
  A2_2017 = "A2_2017",
  /** A3:2017-Sensitive Data Exposure, OWASP top 10 2017 category. */
  A3_2017 = "A3_2017",
  /** A4:2017-XML External Entities (XXE), OWASP top 10 2017 category. */
  A4_2017 = "A4_2017",
  /** A5:2017-Broken Access Control, OWASP top 10 2017 category. */
  A5_2017 = "A5_2017",
  /** A6:2017-Security Misconfiguration, OWASP top 10 2017 category. */
  A6_2017 = "A6_2017",
  /** A7:2017-Cross-Site Scripting (XSS), OWASP top 10 2017 category. */
  A7_2017 = "A7_2017",
  /** A8:2017-Insecure Deserialization, OWASP top 10 2017 category. */
  A8_2017 = "A8_2017",
  /** A9:2017-Using Components with Known Vulnerabilities, OWASP top 10 2017 category. */
  A9_2017 = "A9_2017",
  /** A10:2017-Insufficient Logging & Monitoring, OWASP top 10 2017 category. */
  A10_2017 = "A10_2017",
  /** No OWASP top 10 2017 category. */
  None = "NONE",
}

/** The type of the security scan that found the vulnerability */
export enum VulnerabilityReportType {
  /** API fuzzing report */
  ApiFuzzing = "API_FUZZING",
  /** Cluster image scanning report */
  ClusterImageScanning = "CLUSTER_IMAGE_SCANNING",
  /** Container scanning report */
  ContainerScanning = "CONTAINER_SCANNING",
  /** Container scanning for registry report */
  ContainerScanningForRegistry = "CONTAINER_SCANNING_FOR_REGISTRY",
  /** Coverage fuzzing report */
  CoverageFuzzing = "COVERAGE_FUZZING",
  /** DAST report */
  Dast = "DAST",
  /** Dependency scanning report */
  DependencyScanning = "DEPENDENCY_SCANNING",
  /** Generic report */
  Generic = "GENERIC",
  /** Sarif report */
  Sarif = "SARIF",
  /** SAST report */
  Sast = "SAST",
  /** Secret detection report */
  SecretDetection = "SECRET_DETECTION",
}

/** Autogenerated input type of VulnerabilityResolve */
export type VulnerabilityResolveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment why vulnerability was resolved (maximum 50,000 characters). */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the vulnerability to be resolved. */
  id: Scalars["VulnerabilityID"]["input"];
};

/** Autogenerated input type of VulnerabilityRevertToDetected */
export type VulnerabilityRevertToDetectedInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment why vulnerability was reverted to detected (maximum 50,000 characters). */
  comment?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the vulnerability to be reverted to detected. */
  id: Scalars["VulnerabilityID"]["input"];
};

export type VulnerabilityScannerInput = {
  /** Unique ID that identifies the scanner. */
  id: Scalars["String"]["input"];
  /** Human readable value that identifies the analyzer, not required to be unique. */
  name: Scalars["String"]["input"];
  /** Link to more information about the analyzer. */
  url: Scalars["String"]["input"];
  /** Information about vendor/maintainer of the scanner. */
  vendor?: InputMaybe<VulnerabilityScannerVendorInput>;
  /** Version of the scanner. */
  version: Scalars["String"]["input"];
};

export type VulnerabilityScannerVendorInput = {
  /** Name of the vendor/maintainer. */
  name: Scalars["String"]["input"];
};

/** The severity of the vulnerability */
export enum VulnerabilitySeverity {
  /** Critical severity */
  Critical = "CRITICAL",
  /** High severity */
  High = "HIGH",
  /** Info severity */
  Info = "INFO",
  /** Low severity */
  Low = "LOW",
  /** Medium severity */
  Medium = "MEDIUM",
  /** Unknown severity */
  Unknown = "UNKNOWN",
}

/** Vulnerability sort values */
export enum VulnerabilitySort {
  /** Detection timestamp in ascending order. */
  DetectedAsc = "detected_asc",
  /** Detection timestamp in descending order. */
  DetectedDesc = "detected_desc",
  /** Severity in ascending order. */
  SeverityAsc = "severity_asc",
  /** Severity in descending order. */
  SeverityDesc = "severity_desc",
}

/** The state of the vulnerability */
export enum VulnerabilityState {
  /** For details, see [vulnerability status values](https://docs.gitlab.com/user/application_security/vulnerabilities/#vulnerability-status-values). */
  Confirmed = "CONFIRMED",
  /** For details, see [vulnerability status values](https://docs.gitlab.com/user/application_security/vulnerabilities/#vulnerability-status-values). */
  Detected = "DETECTED",
  /** For details, see [vulnerability status values](https://docs.gitlab.com/user/application_security/vulnerabilities/#vulnerability-status-values). */
  Dismissed = "DISMISSED",
  /** For details, see [vulnerability status values](https://docs.gitlab.com/user/application_security/vulnerabilities/#vulnerability-status-values). */
  Resolved = "RESOLVED",
}

/** Autogenerated input type of VulnerabilityUnlinkMergeRequest */
export type VulnerabilityUnlinkMergeRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the merge request. */
  mergeRequestId: Scalars["MergeRequestID"]["input"];
  /** ID of the vulnerability. */
  vulnerabilityId: Scalars["VulnerabilityID"]["input"];
};

/** Workflow name for vulnerability triggered workflows */
export enum VulnerabilityWorkflowName {
  /** Workflow name is resolve sast vulnerability */
  ResolveSastVulnerability = "RESOLVE_SAST_VULNERABILITY",
  /** Workflow name is sast fp detection */
  SastFpDetection = "SAST_FP_DETECTION",
  /** Workflow name is secrets fp detection */
  SecretsFpDetection = "SECRETS_FP_DETECTION",
}

/** Webhook auto-disabling alert status */
export enum WebhookAlertStatus {
  /** Webhook has been permanently disabled and will not be automatically re-enabled. */
  Disabled = "DISABLED",
  /** Webhook is executable. */
  Executable = "EXECUTABLE",
  /** Webhook has been temporarily disabled and will be automatically re-enabled. */
  TemporarilyDisabled = "TEMPORARILY_DISABLED",
}

/** Strategy for filtering push events by branch name */
export enum WebhookBranchFilterStrategy {
  /** Receive push events from all branches. */
  AllBranches = "ALL_BRANCHES",
  /** Receive push events from branches that match a regular expression (regex). */
  Regex = "REGEX",
  /** Receive push events from branches that match a wildcard pattern. */
  Wildcard = "WILDCARD",
}

/** Weight ID wildcard values */
export enum WeightWildcardId {
  /** Weight is assigned. */
  Any = "ANY",
  /** No weight is assigned. */
  None = "NONE",
}

/** Autogenerated input type of WikiPageSubscribe */
export type WikiPageSubscribeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the wiki page meta record. */
  id: Scalars["WikiPageMetaID"]["input"];
  /** Desired state of the subscription. */
  subscribed: Scalars["Boolean"]["input"];
};

/** Autogenerated input type of WorkItemAddClosingMergeRequest */
export type WorkItemAddClosingMergeRequestInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the context namespace (project or group). Only project full paths are used to find a merge request using a short reference syntax like `!1`. Ignored for full references and URLs. Defaults to the namespace of the work item if not provided. */
  contextNamespacePath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
  /** Merge request reference (short, full or URL). Example: `!1`, `project_full_path!1` or `https://gitlab.com/gitlab-org/gitlab/-/merge_requests/1`. */
  mergeRequestReference: Scalars["String"]["input"];
};

/** Autogenerated input type of WorkItemAddLinkedItems */
export type WorkItemAddLinkedItemsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
  /** Type of link. Defaults to `RELATED`. */
  linkType?: InputMaybe<WorkItemRelatedLinkType>;
  /** Global IDs of the items to link. Maximum number of IDs you can provide: 10. */
  workItemsIds: Array<Scalars["WorkItemID"]["input"]>;
};

/** Action to apply to work item type availability */
export enum WorkItemAvailabilityAction {
  /** Disable the work item type in the namespace. */
  Disable = "DISABLE",
  /** Enable the work item type in the namespace. */
  Enable = "ENABLE",
}

/** Scope to which a work item type availability change applies */
export enum WorkItemAvailabilityScope {
  /** Apply to the namespace and propagate to all existing child namespaces. */
  AllChildren = "ALL_CHILDREN",
  /** Apply only to the namespace. */
  This = "THIS",
}

/** Autogenerated input type of WorkItemAvailabilityToggle */
export type WorkItemAvailabilityToggleInput = {
  /** Whether to enable or disable the work item type. */
  action: WorkItemAvailabilityAction;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group or project. */
  fullPath: Scalars["ID"]["input"];
  /** Whether to apply to the namespace or propagate to all existing children. */
  scope: WorkItemAvailabilityScope;
  /** Global ID of the work item type. */
  workItemTypeId: Scalars["WorkItemsTypeID"]["input"];
};

/** Values for work item award emoji update enum */
export enum WorkItemAwardEmojiUpdateAction {
  /** Adds the emoji. */
  Add = "ADD",
  /** Removes the emoji. */
  Remove = "REMOVE",
  /** Toggles the status of the emoji. */
  Toggle = "TOGGLE",
}

/** Autogenerated input type of WorkItemBulkMove */
export type WorkItemBulkMoveInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID array of the work items that will be moved. IDs that the user can't move will be ignored. A max of 100 can be provided. */
  ids: Array<Scalars["WorkItemID"]["input"]>;
  /** Full path of the source namespace. For example, `gitlab-org/gitlab-foss`. */
  sourceFullPath: Scalars["String"]["input"];
  /** Full path of the target namespace. For example, `gitlab-org/gitlab-foss`. User paths are not supported. */
  targetFullPath: Scalars["String"]["input"];
};

/** Autogenerated input type of WorkItemBulkUpdate */
export type WorkItemBulkUpdateInput = {
  /**
   * Input for assignees widget. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  assigneesWidget?: InputMaybe<WorkItemWidgetAssigneesInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Sets the work item confidentiality. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path of the project or group (Premium and Ultimate only) containing the work items that will be updated. User paths are not supported. */
  fullPath: Scalars["ID"]["input"];
  /**
   * Input for health status widget. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  healthStatusWidget?: InputMaybe<WorkItemWidgetHealthStatusInput>;
  /**
   * Input for hierarchy widget. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  hierarchyWidget?: InputMaybe<WorkItemWidgetHierarchyCreateInput>;
  /** Global ID array of the work items that will be updated. IDs that the user can't update will be ignored. A max of 100 can be provided. */
  ids: Array<Scalars["WorkItemID"]["input"]>;
  /**
   * Input for iteration widget. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  iterationWidget?: InputMaybe<WorkItemWidgetIterationInput>;
  /** Input for labels widget. */
  labelsWidget?: InputMaybe<WorkItemWidgetLabelsUpdateInput>;
  /**
   * Input for milestone widget. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  milestoneWidget?: InputMaybe<WorkItemWidgetMilestoneInput>;
  /**
   * Close or reopen multiple work items at once. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  stateEvent?: InputMaybe<WorkItemStateEvent>;
  /**
   * Input for status widget. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  statusWidget?: InputMaybe<WorkItemWidgetStatusInput>;
  /**
   * Subscribe or unsubscribe from the work items. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  subscriptionEvent?: InputMaybe<WorkItemSubscriptionEvent>;
};

/** Autogenerated input type of WorkItemConvert */
export type WorkItemConvertInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
  /** Global ID of the new work item type. */
  workItemTypeId: Scalars["WorkItemsTypeID"]["input"];
};

export type WorkItemConvertTaskInput = {
  /** Last line in the Markdown source that defines the list item task. */
  lineNumberEnd: Scalars["Int"]["input"];
  /** First line in the Markdown source that defines the list item task. */
  lineNumberStart: Scalars["Int"]["input"];
  /** Current lock version of the work item containing the task in the description. */
  lockVersion: Scalars["Int"]["input"];
  /** Full string of the task to be replaced. New title for the created work item. */
  title: Scalars["String"]["input"];
  /** Global ID of the work item type used to create the new work item. */
  workItemTypeId: Scalars["WorkItemsTypeID"]["input"];
};

/** Autogenerated input type of WorkItemCreateFromTask */
export type WorkItemCreateFromTaskInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
  /** Arguments necessary to convert a task into a work item. */
  workItemData: WorkItemConvertTaskInput;
};

/** Autogenerated input type of WorkItemCreate */
export type WorkItemCreateInput = {
  /**
   * Input for agent plan widget. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  agentPlanWidget?: InputMaybe<WorkItemWidgetAgentPlanInput>;
  /** Input for assignees widget. */
  assigneesWidget?: InputMaybe<WorkItemWidgetAssigneesInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Input for color widget. */
  colorWidget?: InputMaybe<WorkItemWidgetColorInput>;
  /** Sets the work item confidentiality. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Source which triggered the creation of the work item. Used only for tracking purposes. */
  createSource?: InputMaybe<Scalars["String"]["input"]>;
  /** Timestamp when the work item was created. Available only for admins and project owners. */
  createdAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Input for CRM contacts widget. */
  crmContactsWidget?: InputMaybe<WorkItemWidgetCrmContactsCreateInput>;
  /**
   * Input for custom fields widget. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  customFieldsWidget?: InputMaybe<
    Array<WorkItemWidgetCustomFieldValueInputType>
  >;
  /**
   * Description of the work item. Deprecated in GitLab 16.9: use description widget instead.
   * @deprecated use description widget instead. Deprecated in GitLab 16.9.
   */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Input for description widget. */
  descriptionWidget?: InputMaybe<WorkItemWidgetDescriptionInput>;
  /** Input for development widget. */
  developmentWidget?: InputMaybe<WorkItemWidgetDevelopmentCreateInput>;
  /** Information required to resolve discussions in a noteable, when the work item is created. */
  discussionsToResolve?: InputMaybe<WorkItemResolveDiscussionsInput>;
  /** Input for health status widget. */
  healthStatusWidget?: InputMaybe<WorkItemWidgetHealthStatusInput>;
  /** Input for hierarchy widget. */
  hierarchyWidget?: InputMaybe<WorkItemWidgetHierarchyCreateInput>;
  /** Iteration widget of the work item. */
  iterationWidget?: InputMaybe<WorkItemWidgetIterationInput>;
  /** Input for labels widget. */
  labelsWidget?: InputMaybe<WorkItemWidgetLabelsCreateInput>;
  /** Input for linked items widget. */
  linkedItemsWidget?: InputMaybe<WorkItemWidgetLinkedItemsCreateInput>;
  /** Input for milestone widget. */
  milestoneWidget?: InputMaybe<WorkItemWidgetMilestoneInput>;
  /** Full path of the namespace(project or group) the work item is created in. */
  namespacePath?: InputMaybe<Scalars["ID"]["input"]>;
  /**
   * Full path of the project the work item is associated with. Deprecated in GitLab 15.10: Please use namespacePath instead. That will cover for both projects and groups.
   * @deprecated Please use namespacePath instead. That will cover for both projects and groups. Deprecated in GitLab 15.10.
   */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Input for start and due date widget. */
  startAndDueDateWidget?: InputMaybe<WorkItemWidgetStartAndDueDateUpdateInput>;
  /**
   * Input for status widget. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  statusWidget?: InputMaybe<WorkItemWidgetStatusInput>;
  /** Title of the work item. */
  title: Scalars["String"]["input"];
  /**
   * Input for linking an existing vulnerability to created work item. Introduced in GitLab 17.9: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.9.
   */
  vulnerabilityId?: InputMaybe<Scalars["VulnerabilityID"]["input"]>;
  /** Input for weight widget. */
  weightWidget?: InputMaybe<WorkItemWidgetWeightInput>;
  /** Global ID of a work item type. */
  workItemTypeId: Scalars["WorkItemsTypeID"]["input"];
};

/** Autogenerated input type of WorkItemDelete */
export type WorkItemDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
};

export type WorkItemDescriptionTemplateContentInput = {
  /** Full path of the group or project using the template. */
  fromNamespace?: InputMaybe<Scalars["String"]["input"]>;
  /** Name of the description template. */
  name: Scalars["String"]["input"];
  /** ID of the project the template belongs to. */
  projectId: Scalars["Int"]["input"];
};

/** Values for sorting work item discussions */
export enum WorkItemDiscussionsSort {
  /** Created at in ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at in descending order. */
  CreatedDesc = "CREATED_DESC",
}

/** Autogenerated input type of WorkItemExport */
export type WorkItemExportInput = {
  /** Usernames of users assigned to the work item (maximum is 100 usernames). */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by assignee wildcard. Incompatible with `assigneeUsernames`. */
  assigneeWildcardId?: InputMaybe<AssigneeWildcardId>;
  /** Filter work items by author username. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Work items closed after the date. */
  closedAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items closed before the date. */
  closedBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter for confidential work items. If `false`, excludes confidential work items. If `true`, returns only confidential work items. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Work items created after the timestamp. */
  createdAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items created before the timestamp. */
  createdBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter by ID of CRM contact. */
  crmContactId?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by ID of CRM contact organization. */
  crmOrganizationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Work items due after the timestamp. */
  dueAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items due before the timestamp. */
  dueBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /**
   * Health status of the work items, "none" and "any" values are supported. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  healthStatusFilter?: InputMaybe<HealthStatusFilter>;
  /**
   * Filtering options related to the work item hierarchy. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  hierarchyFilters?: InputMaybe<HierarchyFilterInput>;
  /** Filter by global IDs of work items (maximum is 100 IDs). */
  ids?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /** List of IIDs of work items. For example, `["1", "2"]` (maximum is 100 IIDs). */
  iids?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Specify the fields to perform the search in.
   * Defaults to `[TITLE, DESCRIPTION]`. Requires the `search` argument.'
   *
   */
  in?: InputMaybe<Array<IssuableSearchableField>>;
  /**
   * Whether to include work items of descendant parents when filtering by parent_ids. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  includeDescendantWorkItems?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Filter by a list of iteration cadence IDs. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  iterationCadenceId?: InputMaybe<
    Array<Scalars["IterationsCadenceID"]["input"]>
  >;
  /**
   * List of iteration Global IDs applied to the work items. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  iterationId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /**
   * Filter by iteration ID wildcard. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  iterationWildcardId?: InputMaybe<IterationWildcardId>;
  /** Labels applied to the work item (maximum is 100 labels). */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Milestone applied to the work item (maximum is 100 milestones). */
  milestoneTitle?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by milestone ID wildcard. Incompatible with `milestoneTitle`. */
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. Wildcard values `NONE` and `ANY` are supported. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Negated work item arguments. */
  not?: InputMaybe<NegatedWorkItemFilterInput>;
  /** List of arguments with inclusive `OR`. */
  or?: InputMaybe<UnionedWorkItemFilterInput>;
  /** Filter work items by global IDs of their parent items (maximum is 100 IDs). */
  parentIds?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /**
   * Filter by parent ID wildcard. Incompatible with parentIds. Introduced in GitLab 18.5: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.5.
   */
  parentWildcardId?: InputMaybe<WorkItemParentWildcardId>;
  /** Full project path. */
  projectPath: Scalars["ID"]["input"];
  /** Release tag associated with the work item's milestone (maximum is 100 tags). Ignored when parent is a group. */
  releaseTag?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by release tag wildcard. */
  releaseTagWildcardId?: InputMaybe<ReleaseTagWildcardId>;
  /** Search query for title or description. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** List of selected fields to be exported. Omit to export all available fields. */
  selectedFields?: InputMaybe<Array<AvailableExportFields>>;
  /** Current state of the work item. */
  state?: InputMaybe<IssuableState>;
  /**
   * Filter by status. Introduced in GitLab 18.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.7.
   */
  status?: InputMaybe<WorkItemWidgetStatusFilterInput>;
  /** Work items the current user is subscribed to. */
  subscribed?: InputMaybe<SubscriptionStatus>;
  /** Filter work items by the given work item types. */
  types?: InputMaybe<Array<IssueType>>;
  /** Work items updated after the timestamp. */
  updatedAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items updated before the timestamp. */
  updatedBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /**
   * Weight applied to the work item, "none" and "any" values are supported. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  weight?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filter by weight ID wildcard. Incompatible with weight. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  weightWildcardId?: InputMaybe<WeightWildcardId>;
  /** Filter work items by work item type global IDs. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

/** Autogenerated input type of WorkItemHierarchyAddChildrenItems */
export type WorkItemHierarchyAddChildrenItemsInput = {
  /** Global IDs of children work items. */
  childrenIds: Array<Scalars["WorkItemID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
};

/** Parent ID wildcard values */
export enum WorkItemParentWildcardId {
  /** Any parent is assigned. */
  Any = "ANY",
  /** No parent is assigned. */
  None = "NONE",
}

/** Values for work item link types */
export enum WorkItemRelatedLinkType {
  /** Blocked by type. */
  BlockedBy = "BLOCKED_BY",
  /** Blocks type. */
  Blocks = "BLOCKS",
  /** Related type. */
  Related = "RELATED",
}

/** Autogenerated input type of WorkItemRemoveLinkedItems */
export type WorkItemRemoveLinkedItemsInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
  /** Global IDs of the items to unlink. Maximum number of IDs you can provide: 10. */
  workItemsIds: Array<Scalars["WorkItemID"]["input"]>;
};

export type WorkItemResolveDiscussionsInput = {
  /** ID of a discussion to resolve. */
  discussionId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the noteable where discussions will be resolved when the work item is created. Only `MergeRequestID` is supported at the moment. */
  noteableId: Scalars["NoteableID"]["input"];
};

/** Autogenerated input type of WorkItemSavedViewCreate */
export type WorkItemSavedViewCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the saved view. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Display settings associated with the saved view. */
  displaySettings: Scalars["JSON"]["input"];
  /** Filters associated with the saved view. */
  filters: WorkItemSavedViewFilterInput;
  /** Whether the saved view is private. Default is true. */
  isPrivate?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Name of the saved view. */
  name: Scalars["String"]["input"];
  /** Full path of the namespace to create the saved view in. */
  namespacePath: Scalars["ID"]["input"];
  /**
   * Whether the saved view is private. Default is true. Deprecated in GitLab 18.10: Replaced by `isPrivate` argument.
   * @deprecated Replaced by `isPrivate` argument. Deprecated in GitLab 18.10.
   */
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Sort option associated with the saved view. */
  sort: WorkItemSort;
};

/** Autogenerated input type of WorkItemSavedViewDelete */
export type WorkItemSavedViewDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the saved view. */
  id: Scalars["WorkItemsSavedViewsSavedViewID"]["input"];
};

export type WorkItemSavedViewFilterInput = {
  /** Filter values for assignee usernames filter(maximum is 100 usernames). */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter values for assignee wildcard id filter. Incompatible with `assigneeUsernames`. */
  assigneeWildcardId?: InputMaybe<AssigneeWildcardId>;
  /** Filter value for author username filter. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter value for closed after filter. */
  closedAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for closed before filter. */
  closedBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for confidential filter. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter value for created after filter. */
  createdAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for created before filter. */
  createdBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for crm contact id filter. */
  crmContactId?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter value for crm organization id filter. */
  crmOrganizationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter value for custom field filter. (maximum is 100 fields). */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filter value for due after filter. */
  dueAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for due before filter. */
  dueBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for exclude group work items filter. */
  excludeGroupWorkItems?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter value for exclude projects filter. */
  excludeProjects?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter value for full path filter. */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Filter value for health status filter. */
  healthStatusFilter?: InputMaybe<HealthStatusFilter>;
  /** Filter value for hierarchy filter. */
  hierarchyFilters?: InputMaybe<HierarchyFilterInput>;
  /** Filter value for IID filter. */
  iid?: InputMaybe<Scalars["String"]["input"]>;
  /** "Filter value for in filter. */
  in?: InputMaybe<Array<IssuableSearchableField>>;
  /** Filter value for include descendant work items filter. */
  includeDescendantWorkItems?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter value for include descendants filter. */
  includeDescendants?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Filter value for iteration cadence id filter. (maximum is 100 IDs). */
  iterationCadenceId?: InputMaybe<
    Array<Scalars["IterationsCadenceID"]["input"]>
  >;
  /** Filter value for iteration id filter. */
  iterationId?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Filter value for iteration wildcard id filter. */
  iterationWildcardId?: InputMaybe<IterationWildcardId>;
  /** Filter value for label name filter. (maximum is 100 labels). */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for milestone title filter. (maximum is 100 milestones). */
  milestoneTitle?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for milestone wildcard id filter. Incompatible with `milestoneTitle`. */
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  /** Filter value for my reaction emoji filter. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter value for not filter. */
  not?: InputMaybe<WorkItemSavedViewNegatedFilterInput>;
  /** Filter values for or filter. */
  or?: InputMaybe<WorkItemSavedViewUnionedFilterInput>;
  /** Filter value for release tag filter (maximum is 100 tags). */
  releaseTag?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for release tag wildcard id filter. */
  releaseTagWildcardId?: InputMaybe<ReleaseTagWildcardId>;
  /** Filter value for search filter. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter value for state filter. */
  state?: InputMaybe<IssuableState>;
  /** Filter value for status filter. */
  status?: InputMaybe<WorkItemWidgetStatusFilterInput>;
  /** Filter value for subscribed filter. */
  subscribed?: InputMaybe<SubscriptionStatus>;
  /** Filter value for types filter. */
  types?: InputMaybe<Array<IssueType>>;
  /** Filter value for updated after filter. */
  updatedAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for updated before filter. */
  updatedBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter value for weight filter. */
  weight?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter value for weight wildcard id filter. */
  weightWildcardId?: InputMaybe<WeightWildcardId>;
  /** Filter value for work item type global IDs. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

export type WorkItemSavedViewNegatedFilterInput = {
  /** Filter value for not assignee username filter. (maximum is 100 usernames). */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for not author username filter. (maximum is 100 usernames). */
  authorUsername?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for not custom field filter. */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filter values for not health status filter. */
  healthStatusFilter?: InputMaybe<Array<HealthStatus>>;
  /** Filter values for not iteration id filter. (maximum is 100 IDs). */
  iterationId?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Filter value for not iteration wildcard id filter. */
  iterationWildcardId?: InputMaybe<IterationWildcardId>;
  /** Filter value for not label name filter. (maximum is 100 labels). */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for not milestone title filter.(maximum is 100 milestones). */
  milestoneTitle?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for not milestone wildcard id filter. */
  milestoneWildcardId?: InputMaybe<NegatedMilestoneWildcardId>;
  /** Filter value for not my reaction emoji filter. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter work items by global IDs who don't belong to parent items (maximum is 100 IDs). */
  parentIds?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /** File value for not release tag filter. (maximum is 100 tags). */
  releaseTag?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for not types filter. */
  types?: InputMaybe<Array<IssueType>>;
  /** Filter values for not weight filter. */
  weight?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter value for not work item type global IDs filter. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

/** Autogenerated input type of WorkItemSavedViewReorder */
export type WorkItemSavedViewReorderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the saved view to be reordered. */
  id: Scalars["WorkItemsSavedViewsSavedViewID"]["input"];
  /** Global ID of a saved view that the reordered view should be placed after. */
  moveAfterId?: InputMaybe<Scalars["WorkItemsSavedViewsSavedViewID"]["input"]>;
  /** Global ID of a saved view that the reordered view should be placed before. */
  moveBeforeId?: InputMaybe<Scalars["WorkItemsSavedViewsSavedViewID"]["input"]>;
};

/** Autogenerated input type of WorkItemSavedViewSubscribe */
export type WorkItemSavedViewSubscribeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the saved view to subscribe to. */
  id: Scalars["WorkItemsSavedViewsSavedViewID"]["input"];
};

export type WorkItemSavedViewUnionedFilterInput = {
  /** Filter value for unioned assignee usernames filter. (maximum is 100 usernames). */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for unioned author usernames filter. (maximum is 100 usernames). */
  authorUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter value for unioned custom field filter. */
  customField?: InputMaybe<Array<WorkItemWidgetCustomFieldFilterInputType>>;
  /** Filter value for unioned label names filter.(maximum is 100 labels). */
  labelNames?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

/** Autogenerated input type of WorkItemSavedViewUnsubscribe */
export type WorkItemSavedViewUnsubscribeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the saved view to unsubscribe from. */
  id: Scalars["WorkItemsSavedViewsSavedViewID"]["input"];
};

/** Autogenerated input type of WorkItemSavedViewUpdate */
export type WorkItemSavedViewUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the saved view. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** Display settings associated with the saved view. */
  displaySettings?: InputMaybe<Scalars["JSON"]["input"]>;
  /** Filters associated with the saved view. */
  filters?: InputMaybe<WorkItemSavedViewFilterInput>;
  /** Global ID of the saved view. */
  id: Scalars["WorkItemsSavedViewsSavedViewID"]["input"];
  /** Whether the saved view is private. */
  isPrivate?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Name of the saved view. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Whether the saved view is private. Deprecated in GitLab 18.10: Replaced by `isPrivate` argument.
   * @deprecated Replaced by `isPrivate` argument. Deprecated in GitLab 18.10.
   */
  private?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Sorting option associated with the saved view. */
  sort?: InputMaybe<WorkItemSort>;
};

/** Autogenerated input type of WorkItemSettingsUpdate */
export type WorkItemSettingsUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Whether namespace admins can configure per-type work item visibility. */
  customizableTypeVisibility?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path of the root group. Omit to use the current organization. */
  fullPath?: InputMaybe<Scalars["ID"]["input"]>;
};

/** Values for sorting work items */
export enum WorkItemSort {
  /** Blocking items count by ascending order. */
  BlockingIssuesAsc = "BLOCKING_ISSUES_ASC",
  /** Blocking items count by descending order. */
  BlockingIssuesDesc = "BLOCKING_ISSUES_DESC",
  /**
   * Closed time by ascending order. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  ClosedAtAsc = "CLOSED_AT_ASC",
  /**
   * Closed time by descending order. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  ClosedAtDesc = "CLOSED_AT_DESC",
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /**
   * Due date by ascending order. Introduced in GitLab 17.9: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.9.
   */
  DueDateAsc = "DUE_DATE_ASC",
  /**
   * Due date by descending order. Introduced in GitLab 17.9: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.9.
   */
  DueDateDesc = "DUE_DATE_DESC",
  /**
   * Status from triggered to resolved. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  EscalationStatusAsc = "ESCALATION_STATUS_ASC",
  /**
   * Status from resolved to triggered. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  EscalationStatusDesc = "ESCALATION_STATUS_DESC",
  /**
   * Health status by ascending order. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  HealthStatusAsc = "HEALTH_STATUS_ASC",
  /**
   * Health status by descending order. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  HealthStatusDesc = "HEALTH_STATUS_DESC",
  /** Label priority by ascending order. */
  LabelPriorityAsc = "LABEL_PRIORITY_ASC",
  /** Label priority by descending order. */
  LabelPriorityDesc = "LABEL_PRIORITY_DESC",
  /** Milestone due date by ascending order. */
  MilestoneDueAsc = "MILESTONE_DUE_ASC",
  /** Milestone due date by descending order. */
  MilestoneDueDesc = "MILESTONE_DUE_DESC",
  /**
   * Number of upvotes (awarded "thumbs up" emoji) by ascending order. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  PopularityAsc = "POPULARITY_ASC",
  /**
   * Number of upvotes (awarded "thumbs up" emoji) by descending order. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  PopularityDesc = "POPULARITY_DESC",
  /**
   * Priority by ascending order. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  PriorityAsc = "PRIORITY_ASC",
  /**
   * Priority by descending order. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  PriorityDesc = "PRIORITY_DESC",
  /**
   * Relative position by ascending order. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  RelativePositionAsc = "RELATIVE_POSITION_ASC",
  /**
   * Severity from less critical to more critical. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  SeverityAsc = "SEVERITY_ASC",
  /**
   * Severity from more critical to less critical. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  SeverityDesc = "SEVERITY_DESC",
  /**
   * Start date by ascending order. Introduced in GitLab 17.9: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.9.
   */
  StartDateAsc = "START_DATE_ASC",
  /**
   * Start date by descending order. Introduced in GitLab 17.9: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.9.
   */
  StartDateDesc = "START_DATE_DESC",
  /**
   * Status by ascending order. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  StatusAsc = "STATUS_ASC",
  /**
   * Status by descending order. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  StatusDesc = "STATUS_DESC",
  /** Title by ascending order. */
  TitleAsc = "TITLE_ASC",
  /** Title by descending order. */
  TitleDesc = "TITLE_DESC",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Weight by ascending order. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  WeightAsc = "WEIGHT_ASC",
  /**
   * Weight by descending order. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  WeightDesc = "WEIGHT_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** State of a GitLab work item */
export enum WorkItemState {
  /** In closed state. */
  Closed = "CLOSED",
  /** In open state. */
  Open = "OPEN",
}

/** Values for work item state events */
export enum WorkItemStateEvent {
  /** Closes the work item. */
  Close = "CLOSE",
  /** Reopens the work item. */
  Reopen = "REOPEN",
}

/** Category of the work item status */
export enum WorkItemStatusCategoryEnum {
  /** Canceled status category */
  Canceled = "CANCELED",
  /** Done status category */
  Done = "DONE",
  /** In progress status category */
  InProgress = "IN_PROGRESS",
  /** To do status category */
  ToDo = "TO_DO",
  /** Triage status category */
  Triage = "TRIAGE",
}

export type WorkItemStatusInput = {
  /** Category of the status. */
  category?: InputMaybe<WorkItemStatusCategoryEnum>;
  /** Color of the status. */
  color?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the status. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** ID of the status. If not provided, a new status will be created. */
  id?: InputMaybe<Scalars["GlobalID"]["input"]>;
  /** Name of the status. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of WorkItemSubscribe */
export type WorkItemSubscribeInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
  /** Desired state of the subscription. */
  subscribed: Scalars["Boolean"]["input"];
};

/** Values for work item subscription events */
export enum WorkItemSubscriptionEvent {
  /** Subscribe to a work item. */
  Subscribe = "SUBSCRIBE",
  /** Unsubscribe from a work item. */
  Unsubscribe = "UNSUBSCRIBE",
}

/** Values for work item to-do update enum */
export enum WorkItemTodoUpdateAction {
  /** Adds the to-do. */
  Add = "ADD",
  /** Marks the to-do as done. */
  MarkAsDone = "MARK_AS_DONE",
}

/** Autogenerated input type of WorkItemTypeCreate */
export type WorkItemTypeCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates the type is enabled by default for new child namespaces. */
  enabledByDefaultForNewNamespaces?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path of the root group. */
  fullPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Icon name for the work item type. Use the `workItemTypeIconDefinitions` query to retrieve the list of available icon names. */
  iconName: Scalars["String"]["input"];
  /** Name for the work item type. */
  name: Scalars["String"]["input"];
};

/** Autogenerated input type of WorkItemTypeUpdate */
export type WorkItemTypeUpdateInput = {
  /** Whether to archive the work item type. */
  archive?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Indicates the type is enabled by default for new child namespaces. */
  enabledByDefaultForNewNamespaces?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Full path of the root group. */
  fullPath?: InputMaybe<Scalars["String"]["input"]>;
  /** Icon name for the work item type. Use the `workItemTypeIconDefinitions` query to retrieve the list of available icon names. */
  iconName?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item type to update. */
  id: Scalars["WorkItemsTypeID"]["input"];
  /** New name for the work item type. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of WorkItemUpdate */
export type WorkItemUpdateInput = {
  /**
   * Input for agent plan widget. Introduced in GitLab 19.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.0.
   */
  agentPlanWidget?: InputMaybe<WorkItemWidgetAgentPlanInput>;
  /** Input for assignees widget. */
  assigneesWidget?: InputMaybe<WorkItemWidgetAssigneesInput>;
  /** Input for emoji reactions widget. */
  awardEmojiWidget?: InputMaybe<WorkItemWidgetAwardEmojiUpdateInput>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Input for color widget. */
  colorWidget?: InputMaybe<WorkItemWidgetColorInput>;
  /** Sets the work item confidentiality. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Input for CRM contacts widget. */
  crmContactsWidget?: InputMaybe<WorkItemWidgetCrmContactsUpdateInput>;
  /** Input for to-dos widget. */
  currentUserTodosWidget?: InputMaybe<WorkItemWidgetCurrentUserTodosInput>;
  /**
   * Input for custom fields widget. Introduced in GitLab 17.10: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.10.
   */
  customFieldsWidget?: InputMaybe<
    Array<WorkItemWidgetCustomFieldValueInputType>
  >;
  /** Input for description widget. */
  descriptionWidget?: InputMaybe<WorkItemWidgetDescriptionInput>;
  /** Input for health status widget. */
  healthStatusWidget?: InputMaybe<WorkItemWidgetHealthStatusInput>;
  /** Input for hierarchy widget. */
  hierarchyWidget?: InputMaybe<WorkItemWidgetHierarchyUpdateInput>;
  /** Global ID of the work item. */
  id: Scalars["WorkItemID"]["input"];
  /** Input for iteration widget. */
  iterationWidget?: InputMaybe<WorkItemWidgetIterationInput>;
  /** Input for labels widget. */
  labelsWidget?: InputMaybe<WorkItemWidgetLabelsUpdateInput>;
  /** Input for milestone widget. */
  milestoneWidget?: InputMaybe<WorkItemWidgetMilestoneInput>;
  /**
   * Global ID of a work item that should be placed after the work item. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  moveAfterId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
  /**
   * Global ID of a work item that should be placed before the work item. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  moveBeforeId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
  /** Input for notes widget. */
  notesWidget?: InputMaybe<WorkItemWidgetNotesInput>;
  /** Input for notifications widget. */
  notificationsWidget?: InputMaybe<WorkItemWidgetNotificationsUpdateInput>;
  /** Input for progress widget. */
  progressWidget?: InputMaybe<WorkItemWidgetProgressInput>;
  /** Input for start and due date widget. */
  startAndDueDateWidget?: InputMaybe<WorkItemWidgetStartAndDueDateUpdateInput>;
  /** Close or reopen a work item. */
  stateEvent?: InputMaybe<WorkItemStateEvent>;
  /**
   * Input for status widget. Introduced in GitLab 17.11: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 17.11.
   */
  statusWidget?: InputMaybe<WorkItemWidgetStatusInput>;
  /** Input for time tracking widget. */
  timeTrackingWidget?: InputMaybe<WorkItemWidgetTimeTrackingInput>;
  /** Title of the work item. */
  title?: InputMaybe<Scalars["String"]["input"]>;
  /** Input for verification status widget. */
  verificationStatusWidget?: InputMaybe<VerificationStatusInput>;
  /** Input for weight widget. */
  weightWidget?: InputMaybe<WorkItemWidgetWeightInput>;
};

/** Autogenerated input type of WorkItemUserPreferenceUpdate */
export type WorkItemUserPreferenceUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Display settings for the work item lists. */
  displaySettings?: InputMaybe<Scalars["JSON"]["input"]>;
  /** Full path of the namespace on which the preference is set. */
  namespacePath: Scalars["ID"]["input"];
  /** Sort order for work item lists. */
  sort?: InputMaybe<WorkItemSort>;
  /** Global ID of a work item type. */
  workItemTypeId?: InputMaybe<Scalars["WorkItemsTypeID"]["input"]>;
};

export type WorkItemWidgetAgentPlanInput = {
  /** Content of the agent plan. */
  content: Scalars["String"]["input"];
};

export type WorkItemWidgetAssigneesInput = {
  /** Global IDs of assignees. */
  assigneeIds: Array<Scalars["UserID"]["input"]>;
};

export type WorkItemWidgetAwardEmojiUpdateInput = {
  /** Action for the update. */
  action: WorkItemAwardEmojiUpdateAction;
  /** Emoji name. */
  name: Scalars["String"]["input"];
};

export type WorkItemWidgetColorInput = {
  /** Color of the work item. */
  color: Scalars["Color"]["input"];
};

export type WorkItemWidgetCrmContactsCreateInput = {
  /** CRM contact IDs to set. */
  contactIds: Array<Scalars["CustomerRelationsContactID"]["input"]>;
};

export type WorkItemWidgetCrmContactsUpdateInput = {
  /** CRM contact IDs to set. Replaces existing contacts by default. */
  contactIds: Array<Scalars["CustomerRelationsContactID"]["input"]>;
  /** Set the operation mode. */
  operationMode?: InputMaybe<MutationOperationMode>;
};

export type WorkItemWidgetCurrentUserTodosInput = {
  /** Action for the update. */
  action: WorkItemTodoUpdateAction;
  /** Global ID of the to-do. If not present, all to-dos of the work item will be updated. */
  todoId?: InputMaybe<Scalars["TodoID"]["input"]>;
};

export type WorkItemWidgetCustomFieldFilterInputType = {
  /** Global ID of the custom field. */
  customFieldId?: InputMaybe<Scalars["IssuablesCustomFieldID"]["input"]>;
  /** Name of the custom field. */
  customFieldName?: InputMaybe<Scalars["String"]["input"]>;
  /** Global IDs of the selected options for custom fields with select type (maximum is 100 IDs). */
  selectedOptionIds?: InputMaybe<
    Array<Scalars["IssuablesCustomFieldSelectOptionID"]["input"]>
  >;
  /** Values of the selected options for custom fields with select type (maximum is 100 values). */
  selectedOptionValues?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type WorkItemWidgetCustomFieldValueInputType = {
  /** Global ID of the custom field. */
  customFieldId: Scalars["IssuablesCustomFieldID"]["input"];
  /** Value for custom fields with date type. */
  dateValue?: InputMaybe<Scalars["Date"]["input"]>;
  /** Value for custom fields with number type. */
  numberValue?: InputMaybe<Scalars["Float"]["input"]>;
  /** Global IDs of the selected options for custom fields with select type. */
  selectedOptionIds?: InputMaybe<
    Array<Scalars["IssuablesCustomFieldSelectOptionID"]["input"]>
  >;
  /** Value for custom fields with text type. */
  textValue?: InputMaybe<Scalars["String"]["input"]>;
};

export type WorkItemWidgetDescriptionInput = {
  /** Description of the work item. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Toggle a single task list item instead of replacing the full description. Only supported when updating a work item, and only when the `work_items_task_list_toggle` feature flag is enabled. Introduced in GitLab 19.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 19.2.
   */
  taskListToggle?: InputMaybe<TaskListToggleInput>;
};

export type WorkItemWidgetDevelopmentCreateInput = {
  /** Type of link. Defaults to `RELATED`. */
  linkType?: InputMaybe<MergeRequestWorkItemLinkType>;
  /** Global IDs of the merge requests to link. Maximum number of IDs you can provide: 100. */
  mergeRequestIds: Array<Scalars["MergeRequestID"]["input"]>;
};

export type WorkItemWidgetHealthStatusInput = {
  /** Health status to be assigned to the work item. */
  healthStatus?: InputMaybe<HealthStatus>;
};

export type WorkItemWidgetHierarchyCreateInput = {
  /** Global ID of the parent work item. */
  parentId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
};

export type WorkItemWidgetHierarchyUpdateInput = {
  /** ID of the work item to be switched with. */
  adjacentWorkItemId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
  /** Global IDs of children work items. */
  childrenIds?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /** Global ID of the parent work item. Use `null` to remove the association. */
  parentId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
  /** Type of switch. Valid values are `BEFORE` or `AFTER`. */
  relativePosition?: InputMaybe<RelativePositionType>;
};

export type WorkItemWidgetIterationInput = {
  /** Iteration to assign to the work item. */
  iterationId?: InputMaybe<Scalars["IterationID"]["input"]>;
};

export type WorkItemWidgetLabelsCreateInput = {
  /** IDs of labels to be added to the work item. */
  labelIds: Array<Scalars["LabelID"]["input"]>;
};

export type WorkItemWidgetLabelsUpdateInput = {
  /** Global IDs of labels to be added to the work item. */
  addLabelIds?: InputMaybe<Array<Scalars["LabelID"]["input"]>>;
  /** Global IDs of labels to be removed from the work item. */
  removeLabelIds?: InputMaybe<Array<Scalars["LabelID"]["input"]>>;
};

export type WorkItemWidgetLinkedItemsCreateInput = {
  /** Type of link. Defaults to `RELATED`. */
  linkType?: InputMaybe<WorkItemRelatedLinkType>;
  /** Global IDs of the items to link. Maximum number of IDs you can provide: 10. */
  workItemsIds: Array<Scalars["WorkItemID"]["input"]>;
};

export type WorkItemWidgetMilestoneInput = {
  /** Milestone to assign to the work item. */
  milestoneId?: InputMaybe<Scalars["MilestoneID"]["input"]>;
};

export type WorkItemWidgetNotesInput = {
  /** Discussion lock attribute for notes widget of the work item. */
  discussionLocked: Scalars["Boolean"]["input"];
};

export type WorkItemWidgetNotificationsUpdateInput = {
  /** Desired state of the subscription. */
  subscribed: Scalars["Boolean"]["input"];
};

export type WorkItemWidgetProgressInput = {
  /** Current progress value of the work item. */
  currentValue: Scalars["Int"]["input"];
  /** End value of the work item. */
  endValue?: InputMaybe<Scalars["Int"]["input"]>;
  /** Start value of the work item. */
  startValue?: InputMaybe<Scalars["Int"]["input"]>;
};

export type WorkItemWidgetStartAndDueDateUpdateInput = {
  /** Due date for the work item. */
  dueDate?: InputMaybe<Scalars["Date"]["input"]>;
  /** Indicates if the work item is using fixed dates. */
  isFixed?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Start date for the work item. */
  startDate?: InputMaybe<Scalars["Date"]["input"]>;
};

export type WorkItemWidgetStatusFilterInput = {
  /** Global ID of the status. */
  id?: InputMaybe<Scalars["WorkItemsStatusesStatusID"]["input"]>;
  /** Name of the status. */
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type WorkItemWidgetStatusInput = {
  /** Name of the status. Resolved case-insensitively against the work item's status lifecycle. Mutually exclusive with `status`. */
  name?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the status. Mutually exclusive with `name`. */
  status?: InputMaybe<Scalars["WorkItemsStatusesStatusID"]["input"]>;
};

export type WorkItemWidgetTimeTrackingInput = {
  /** Time estimate for the work item in human readable format. For example: 1h 30m. */
  timeEstimate?: InputMaybe<Scalars["String"]["input"]>;
  /** Timelog data for time spent on the work item. */
  timelog?: InputMaybe<WorkItemWidgetTimeTrackingTimelogInput>;
};

export type WorkItemWidgetTimeTrackingTimelogInput = {
  /** Timestamp of when the time tracked was spent at, if not provided would be set to current timestamp. */
  spentAt?: InputMaybe<Scalars["Time"]["input"]>;
  /** Summary of how the time was spent. */
  summary?: InputMaybe<Scalars["String"]["input"]>;
  /** Amount of time spent in human readable format. For example: 1h 30m. */
  timeSpent: Scalars["String"]["input"];
};

/** Type of a work item widget */
export enum WorkItemWidgetType {
  /** Agent Plan widget. */
  AgentPlan = "AGENT_PLAN",
  /** Ai Session widget. */
  AiSession = "AI_SESSION",
  /** Assignees widget. */
  Assignees = "ASSIGNEES",
  /** Award Emoji widget. */
  AwardEmoji = "AWARD_EMOJI",
  /** Color widget. */
  Color = "COLOR",
  /** Crm Contacts widget. */
  CrmContacts = "CRM_CONTACTS",
  /** Current User Todos widget. */
  CurrentUserTodos = "CURRENT_USER_TODOS",
  /** Custom Fields widget. */
  CustomFields = "CUSTOM_FIELDS",
  /** Description widget. */
  Description = "DESCRIPTION",
  /** Designs widget. */
  Designs = "DESIGNS",
  /** Development widget. */
  Development = "DEVELOPMENT",
  /** Email Participants widget. */
  EmailParticipants = "EMAIL_PARTICIPANTS",
  /** Error Tracking widget. */
  ErrorTracking = "ERROR_TRACKING",
  /** Health Status widget. */
  HealthStatus = "HEALTH_STATUS",
  /** Hierarchy widget. */
  Hierarchy = "HIERARCHY",
  /** Iteration widget. */
  Iteration = "ITERATION",
  /** Labels widget. */
  Labels = "LABELS",
  /** Linked Items widget. */
  LinkedItems = "LINKED_ITEMS",
  /** Linked Resources widget. */
  LinkedResources = "LINKED_RESOURCES",
  /** Milestone widget. */
  Milestone = "MILESTONE",
  /** Notes widget. */
  Notes = "NOTES",
  /** Notifications widget. */
  Notifications = "NOTIFICATIONS",
  /** Participants widget. */
  Participants = "PARTICIPANTS",
  /** Progress widget. */
  Progress = "PROGRESS",
  /** Requirement Legacy widget. */
  RequirementLegacy = "REQUIREMENT_LEGACY",
  /** Start And Due Date widget. */
  StartAndDueDate = "START_AND_DUE_DATE",
  /** Status widget. */
  Status = "STATUS",
  /** Test Reports widget. */
  TestReports = "TEST_REPORTS",
  /** Time Tracking widget. */
  TimeTracking = "TIME_TRACKING",
  /** Verification Status widget. */
  VerificationStatus = "VERIFICATION_STATUS",
  /** Vulnerabilities widget. */
  Vulnerabilities = "VULNERABILITIES",
  /** Weight widget. */
  Weight = "WEIGHT",
}

export type WorkItemWidgetWeightInput = {
  /** Weight of the work item. */
  weight?: InputMaybe<Scalars["Int"]["input"]>;
};

/** Autogenerated input type of WorkItemsCsvExport */
export type WorkItemsCsvExportInput = {
  /** Usernames of users assigned to the work item (maximum is 100 usernames). */
  assigneeUsernames?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by assignee wildcard. Incompatible with `assigneeUsernames`. */
  assigneeWildcardId?: InputMaybe<AssigneeWildcardId>;
  /** Filter work items by author username. */
  authorUsername?: InputMaybe<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Work items closed after the date. */
  closedAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items closed before the date. */
  closedBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter for confidential work items. If `false`, excludes confidential work items. If `true`, returns only confidential work items. */
  confidential?: InputMaybe<Scalars["Boolean"]["input"]>;
  /** Work items created after the timestamp. */
  createdAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items created before the timestamp. */
  createdBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /** Filter by ID of CRM contact. */
  crmContactId?: InputMaybe<Scalars["String"]["input"]>;
  /** Filter by ID of CRM contact organization. */
  crmOrganizationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Work items due after the timestamp. */
  dueAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items due before the timestamp. */
  dueBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /**
   * Health status of the work items, "none" and "any" values are supported. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  healthStatusFilter?: InputMaybe<HealthStatusFilter>;
  /**
   * Filtering options related to the work item hierarchy. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  hierarchyFilters?: InputMaybe<HierarchyFilterInput>;
  /** Filter by global IDs of work items (maximum is 100 IDs). */
  ids?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /** List of IIDs of work items. For example, `["1", "2"]` (maximum is 100 IIDs). */
  iids?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /**
   * Specify the fields to perform the search in.
   * Defaults to `[TITLE, DESCRIPTION]`. Requires the `search` argument.'
   *
   */
  in?: InputMaybe<Array<IssuableSearchableField>>;
  /**
   * Whether to include work items of descendant parents when filtering by parent_ids. Introduced in GitLab 18.3: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.3.
   */
  includeDescendantWorkItems?: InputMaybe<Scalars["Boolean"]["input"]>;
  /**
   * Filter by a list of iteration cadence IDs. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  iterationCadenceId?: InputMaybe<
    Array<Scalars["IterationsCadenceID"]["input"]>
  >;
  /**
   * List of iteration Global IDs applied to the work items. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  iterationId?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  /**
   * Filter by iteration ID wildcard. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  iterationWildcardId?: InputMaybe<IterationWildcardId>;
  /** Labels applied to the work item (maximum is 100 labels). */
  labelName?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Milestone applied to the work item (maximum is 100 milestones). */
  milestoneTitle?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by milestone ID wildcard. Incompatible with `milestoneTitle`. */
  milestoneWildcardId?: InputMaybe<MilestoneWildcardId>;
  /** Filter by reaction emoji applied by the current user. Wildcard values `NONE` and `ANY` are supported. */
  myReactionEmoji?: InputMaybe<Scalars["String"]["input"]>;
  /** Negated work item arguments. */
  not?: InputMaybe<NegatedWorkItemFilterInput>;
  /** List of arguments with inclusive `OR`. */
  or?: InputMaybe<UnionedWorkItemFilterInput>;
  /** Filter work items by global IDs of their parent items (maximum is 100 IDs). */
  parentIds?: InputMaybe<Array<Scalars["WorkItemID"]["input"]>>;
  /**
   * Filter by parent ID wildcard. Incompatible with parentIds. Introduced in GitLab 18.5: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.5.
   */
  parentWildcardId?: InputMaybe<WorkItemParentWildcardId>;
  /** Full project path. */
  projectPath: Scalars["ID"]["input"];
  /** Release tag associated with the work item's milestone (maximum is 100 tags). Ignored when parent is a group. */
  releaseTag?: InputMaybe<Array<Scalars["String"]["input"]>>;
  /** Filter by release tag wildcard. */
  releaseTagWildcardId?: InputMaybe<ReleaseTagWildcardId>;
  /** Search query for title or description. */
  search?: InputMaybe<Scalars["String"]["input"]>;
  /** List of selected fields to be exported. Omit to export all available fields. */
  selectedFields?: InputMaybe<Array<AvailableExportFields>>;
  /** Current state of the work item. */
  state?: InputMaybe<IssuableState>;
  /**
   * Filter by status. Introduced in GitLab 18.7: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.7.
   */
  status?: InputMaybe<WorkItemWidgetStatusFilterInput>;
  /** Work items the current user is subscribed to. */
  subscribed?: InputMaybe<SubscriptionStatus>;
  /** Filter work items by the given work item types. */
  types?: InputMaybe<Array<IssueType>>;
  /** Work items updated after the timestamp. */
  updatedAfter?: InputMaybe<Scalars["Time"]["input"]>;
  /** Work items updated before the timestamp. */
  updatedBefore?: InputMaybe<Scalars["Time"]["input"]>;
  /**
   * Weight applied to the work item, "none" and "any" values are supported. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  weight?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Filter by weight ID wildcard. Incompatible with weight. Introduced in GitLab 18.2: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.2.
   */
  weightWildcardId?: InputMaybe<WeightWildcardId>;
  /** Filter work items by work item type global IDs. */
  workItemTypeIds?: InputMaybe<Array<Scalars["WorkItemsTypeID"]["input"]>>;
};

/** Autogenerated input type of WorkItemsCsvImport */
export type WorkItemsCsvImportInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** CSV file to import work items from. */
  file: Scalars["Upload"]["input"];
  /** Full project path. */
  projectPath: Scalars["ID"]["input"];
};

/** Values for sorting saved views */
export enum WorkItemsSavedViewsSort {
  /** Created at ascending order. */
  CreatedAsc = "CREATED_ASC",
  /** Created at descending order. */
  CreatedDesc = "CREATED_DESC",
  /** Ordered by id. */
  Id = "ID",
  /** Alphabetically by name in ascending order. */
  NameAsc = "NAME_ASC",
  /** Relative position by ascending order. If user is logged out, or explicitly subscribed is not passed, falls back to id sort. */
  RelativePosition = "RELATIVE_POSITION",
  /** Updated at ascending order. */
  UpdatedAsc = "UPDATED_ASC",
  /** Updated at descending order. */
  UpdatedDesc = "UPDATED_DESC",
  /**
   * Created at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  CreatedAsc = "created_asc",
  /**
   * Created at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `CREATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  CreatedDesc = "created_desc",
  /**
   * Updated at ascending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_ASC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedAsc = "updated_asc",
  /**
   * Updated at descending order. Deprecated in GitLab 13.5: Renamed.
   * @deprecated Renamed. Use `UPDATED_DESC` instead. Deprecated in GitLab 13.5.
   */
  UpdatedDesc = "updated_desc",
}

/** The environment of a workflow. */
export enum WorkflowEnvironment {
  /** Ambient environment */
  Ambient = "AMBIENT",
  /** Chat environment */
  Chat = "CHAT",
  /** Chat Partial environment */
  ChatPartial = "CHAT_PARTIAL",
  /**
   * Ide environment Deprecated in GitLab 18.6: Renamed.
   * @deprecated Renamed. Use `CHAT` instead. Deprecated in GitLab 18.6.
   */
  Ide = "IDE",
  /**
   * Web environment Deprecated in GitLab 18.6: Renamed.
   * @deprecated Renamed. Use `AMBIENT` instead. Deprecated in GitLab 18.6.
   */
  Web = "WEB",
}

/** Autogenerated input type of WorkspaceCreate */
export type WorkspaceCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** GlobalID of the cluster agent the created workspace will be associated with. */
  clusterAgentId: Scalars["ClustersAgentID"]["input"];
  /** Desired state of the created workspace. */
  desiredState: Scalars["String"]["input"];
  /** Project path containing the devfile used to configure the workspace. If not provided, the GitLab default devfile is used. */
  devfilePath?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Project repo git ref containing the devfile used to configure the workspace. Deprecated in GitLab 17.8: Argument is renamed to project_ref.
   * @deprecated Argument is renamed to project_ref. Deprecated in GitLab 17.8.
   */
  devfileRef?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Editor to inject into the created workspace. Must match a configured template. Deprecated in GitLab 17.5: Argument is not used.
   * @deprecated Argument is not used. Deprecated in GitLab 17.5.
   */
  editor?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Maximum hours the workspace can exist before it is automatically terminated. Deprecated in GitLab 17.9: Field is not used.
   * @deprecated Field is not used. Deprecated in GitLab 17.9.
   */
  maxHoursBeforeTermination?: InputMaybe<Scalars["Int"]["input"]>;
  /** ID of the project that will provide the Devfile for the created workspace. */
  projectId: Scalars["ProjectID"]["input"];
  /** Project repo git ref. */
  projectRef?: InputMaybe<Scalars["String"]["input"]>;
  /**
   * Variables to inject into the workspace. Deprecated in GitLab 18.0: Argument is renamed to workspace_variables.
   * @deprecated Argument is renamed to workspace_variables. Deprecated in GitLab 18.0.
   */
  variables?: InputMaybe<Array<WorkspaceVariableInput>>;
  /**
   * Variables to inject into the workspace. Introduced in GitLab 18.0: Status: Experiment.
   * @deprecated Status: Experiment. Introduced in GitLab 18.0.
   */
  workspaceVariables?: InputMaybe<Array<WorkspaceVariableInput>>;
};

/** Autogenerated input type of WorkspaceUpdate */
export type WorkspaceUpdateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Desired state of the created workspace. */
  desiredState: Scalars["String"]["input"];
  /** Global ID of the workspace. */
  id: Scalars["RemoteDevelopmentWorkspaceID"]["input"];
};

/** Attributes for defining a variable to be injected in a workspace. */
export type WorkspaceVariableInput = {
  /** Name of the workspace variable. */
  key: Scalars["String"]["input"];
  /**
   * Type of the variable to be injected in a workspace. Deprecated in GitLab 17.9: Use `variableType` instead.
   * @deprecated Use `variableType` instead. Deprecated in GitLab 17.9.
   */
  type?: InputMaybe<WorkspaceVariableInputType>;
  /** Value of the variable. */
  value: Scalars["String"]["input"];
  /** Type of the variable to be injected in a workspace. */
  variableType?: InputMaybe<WorkspaceVariableType>;
};

/** Enum for the type of the variable to be injected in a workspace. */
export enum WorkspaceVariableInputType {
  /** Name type. */
  Environment = "ENVIRONMENT",
}

/** Enum for the type of the variable injected in a workspace. */
export enum WorkspaceVariableType {
  /** Environment type. */
  Environment = "ENVIRONMENT",
}

/** Autogenerated input type of approvalProjectRuleDelete */
export type ApprovalProjectRuleDeleteInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the approval project rule to delete. */
  id: Scalars["ApprovalProjectRuleID"]["input"];
};

/** Autogenerated input type of approvalProjectRuleUpdate */
export type ApprovalProjectRuleUpdateInput = {
  /** How many approvals are required to satisfy rule. */
  approvalsRequired: Scalars["Int"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Minimum code coverage threshold (0-100). Approval is required if coverage falls below the specified threshold. */
  coverageMinimumThreshold?: InputMaybe<Scalars["Float"]["input"]>;
  /** List of IDs of Groups that can approval rule. */
  groupIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Global ID of the approval rule to destroy. */
  id: Scalars["ApprovalProjectRuleID"]["input"];
  /** Name of the approval rule. */
  name: Scalars["String"]["input"];
  /** List of IDs of Users that can approval rule. */
  userIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Autogenerated input type of branchRuleApprovalProjectRuleCreate */
export type BranchRuleApprovalProjectRuleCreateInput = {
  /** How many approvals are required to satisfy rule. */
  approvalsRequired: Scalars["Int"]["input"];
  /** Global ID of the branch rule to destroy. */
  branchRuleId: Scalars["ProjectsBranchRuleID"]["input"];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Minimum code coverage threshold (0-100). Approval is required if coverage falls below the specified threshold. */
  coverageMinimumThreshold?: InputMaybe<Scalars["Float"]["input"]>;
  /** List of IDs of Groups that can approval rule. */
  groupIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  /** Name of the approval rule. */
  name: Scalars["String"]["input"];
  /** List of IDs of Users that can approval rule. */
  userIds?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

/** Autogenerated input type of createContainerProtectionTagRule */
export type CreateContainerProtectionTagRuleInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Minimum GitLab access level required to delete container image tags from the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, no access level can delete tags.  */
  minimumAccessLevelForDelete?: InputMaybe<ContainerProtectionTagRuleAccessLevel>;
  /** Minimum GitLab access level required to push container image tags to the container repository. Valid values include `MAINTAINER`, `OWNER`, or `ADMIN`. If the value is `nil`, no access level can push tags.  */
  minimumAccessLevelForPush?: InputMaybe<ContainerProtectionTagRuleAccessLevel>;
  /** Full path of the project containing the container image tags. */
  projectPath: Scalars["ID"]["input"];
  /** The pattern that matches container image tags to protect. For example, `v1.*`. Wildcard character `*` allowed. */
  tagNamePattern: Scalars["String"]["input"];
};

/** Autogenerated input type of iterationCreate */
export type IterationCreateInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Description of the iteration. */
  description?: InputMaybe<Scalars["String"]["input"]>;
  /** End date of the iteration. */
  dueDate?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the group with which the resource is associated. */
  groupPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Global ID of the iteration cadence to be assigned to the new iteration. */
  iterationsCadenceId?: InputMaybe<Scalars["IterationsCadenceID"]["input"]>;
  /** Full path of the project with which the resource is associated. */
  projectPath?: InputMaybe<Scalars["ID"]["input"]>;
  /** Start date of the iteration. */
  startDate?: InputMaybe<Scalars["String"]["input"]>;
  /** Title of the iteration. */
  title?: InputMaybe<Scalars["String"]["input"]>;
};

/** Autogenerated input type of projectBlobsRemove */
export type ProjectBlobsRemoveInput = {
  /** List of blob oids. */
  blobOids: Array<Scalars["String"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project to replace. */
  projectPath: Scalars["ID"]["input"];
};

/** Autogenerated input type of projectTextReplace */
export type ProjectTextReplaceInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Full path of the project to replace. */
  projectPath: Scalars["ID"]["input"];
  /** List of text patterns to replace project-wide. */
  replacements: Array<Scalars["String"]["input"]>;
};

/** Autogenerated input type of vulnerabilitiesSeverityOverride */
export type VulnerabilitiesSeverityOverrideInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Comment why vulnerability severity was changed (maximum 50,000 characters). */
  comment: Scalars["String"]["input"];
  /** New severity value for the severities. */
  severity: VulnerabilitySeverity;
  /** IDs of the vulnerabilities for which severity needs to be changed (maximum 100 entries). */
  vulnerabilityIds: Array<Scalars["VulnerabilityID"]["input"]>;
};

/** Autogenerated input type of workItemsHierarchyReorder */
export type WorkItemsHierarchyReorderInput = {
  /** ID of the work item to move next to. For example, the item above or below. */
  adjacentWorkItemId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item to be reordered. */
  id: Scalars["WorkItemID"]["input"];
  /** Global ID of the new parent work item. */
  parentId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
  /** Position relative to the adjacent work item. Valid values are `BEFORE` or `AFTER`. */
  relativePosition?: InputMaybe<RelativePositionType>;
};

/** Autogenerated input type of workItemsReorder */
export type WorkItemsReorderInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars["String"]["input"]>;
  /** Global ID of the work item to be reordered. */
  id: Scalars["WorkItemID"]["input"];
  /** Global ID of a work item that should be placed after the work item. */
  moveAfterId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
  /** Global ID of a work item that should be placed before the work item. */
  moveBeforeId?: InputMaybe<Scalars["WorkItemID"]["input"]>;
};

export type GitLabPullRequestFragment = {
  __typename?: "MergeRequestConnection";
  nodes?: Array<{
    __typename?: "MergeRequest";
    title: string;
    id: string;
    iid: string;
    webUrl?: string | null;
    draft: boolean;
    diffHeadSha?: string | null;
    approved: boolean;
    approvalsRequired?: number | null;
    conflicts: boolean;
    resolvableDiscussionsCount?: number | null;
    resolvedDiscussionsCount?: number | null;
    userNotesCount?: number | null;
    createdAt: any;
    updatedAt: any;
    author?: {
      __typename?: "MergeRequestAuthor";
      name: string;
      username: string;
      avatarUrl?: string | null;
      bot: boolean;
    } | null;
    reviewers?: {
      __typename?: "MergeRequestReviewerConnection";
      nodes?: Array<{
        __typename?: "MergeRequestReviewer";
        name: string;
        username: string;
        avatarUrl?: string | null;
        mergeRequestInteraction?: {
          __typename?: "UserMergeRequestInteraction";
          approved: boolean;
          reviewState?: MergeRequestReviewState | null;
        } | null;
      } | null> | null;
    } | null;
    commenters: {
      __typename?: "UserCoreConnection";
      nodes?: Array<{
        __typename?: "UserCore";
        username: string;
      } | null> | null;
    };
    sourceProject?: { __typename?: "Project"; name: string; id: string } | null;
    targetProject: {
      __typename?: "Project";
      id: string;
      name: string;
      fullPath: string;
    };
    headPipeline?: {
      __typename?: "Pipeline";
      status: PipelineStatusEnum;
      detailedStatus: {
        __typename?: "DetailedStatus";
        detailsPath?: string | null;
      };
    } | null;
  } | null> | null;
} & { " $fragmentName"?: "GitLabPullRequestFragment" };

export type AcceptGitLabMergeRequestMutationVariables = Exact<{
  input: MergeRequestAcceptInput;
}>;

export type AcceptGitLabMergeRequestMutation = {
  __typename?: "Mutation";
  mergeRequestAccept?: {
    __typename?: "MergeRequestAcceptPayload";
    errors: Array<string>;
    mergeRequest?: {
      __typename?: "MergeRequest";
      id: string;
      state: MergeRequestState;
    } | null;
  } | null;
};

export type GetCurrentUserQueryVariables = Exact<{ [key: string]: never }>;

export type GetCurrentUserQuery = {
  __typename?: "Query";
  currentUser?: {
    __typename?: "CurrentUser";
    id: any;
    avatarUrl?: string | null;
    username: string;
    name: string;
  } | null;
};

export type GetGitLabPullRequestsQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetGitLabPullRequestsQuery = {
  __typename?: "Query";
  currentUser?: {
    __typename?: "CurrentUser";
    contributedProjects?: {
      __typename?: "ProjectConnection";
      nodes?: Array<{
        __typename?: "Project";
        archived?: boolean | null;
        mergeRequests?:
          | ({ __typename?: "MergeRequestConnection" } & {
              " $fragmentRefs"?: {
                GitLabPullRequestFragment: GitLabPullRequestFragment;
              };
            })
          | null;
      } | null> | null;
    } | null;
  } | null;
};

export const GitLabPullRequestFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GitLabPullRequest" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "MergeRequestConnection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "iid" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                { kind: "Field", name: { kind: "Name", value: "draft" } },
                { kind: "Field", name: { kind: "Name", value: "diffHeadSha" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatarUrl" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "bot" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "reviewers" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "username" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatarUrl" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "mergeRequestInteraction",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "approved" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "reviewState",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "commenters" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "username" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sourceProject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "targetProject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullPath" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "approved" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "approvalsRequired" },
                },
                { kind: "Field", name: { kind: "Name", value: "conflicts" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resolvableDiscussionsCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resolvedDiscussionsCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "userNotesCount" },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "headPipeline" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "detailedStatus" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "detailsPath" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GitLabPullRequestFragment, unknown>;
export const AcceptGitLabMergeRequestDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "AcceptGitLabMergeRequest" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "input" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "MergeRequestAcceptInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "mergeRequestAccept" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "input" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "input" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "errors" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "mergeRequest" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "state" } },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  AcceptGitLabMergeRequestMutation,
  AcceptGitLabMergeRequestMutationVariables
>;
export const GetCurrentUserDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetCurrentUser" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currentUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "avatarUrl" } },
                { kind: "Field", name: { kind: "Name", value: "username" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetCurrentUserQuery, GetCurrentUserQueryVariables>;
export const GetGitLabPullRequestsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetGitLabPullRequests" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "currentUser" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "contributedProjects" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "archived" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "mergeRequests" },
                              arguments: [
                                {
                                  kind: "Argument",
                                  name: { kind: "Name", value: "state" },
                                  value: { kind: "EnumValue", value: "opened" },
                                },
                              ],
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "FragmentSpread",
                                    name: {
                                      kind: "Name",
                                      value: "GitLabPullRequest",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "GitLabPullRequest" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "MergeRequestConnection" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "nodes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "title" } },
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "iid" } },
                { kind: "Field", name: { kind: "Name", value: "webUrl" } },
                { kind: "Field", name: { kind: "Name", value: "draft" } },
                { kind: "Field", name: { kind: "Name", value: "diffHeadSha" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "author" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "username" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "avatarUrl" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "bot" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "reviewers" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "name" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "username" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "avatarUrl" },
                            },
                            {
                              kind: "Field",
                              name: {
                                kind: "Name",
                                value: "mergeRequestInteraction",
                              },
                              selectionSet: {
                                kind: "SelectionSet",
                                selections: [
                                  {
                                    kind: "Field",
                                    name: { kind: "Name", value: "approved" },
                                  },
                                  {
                                    kind: "Field",
                                    name: {
                                      kind: "Name",
                                      value: "reviewState",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "commenters" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nodes" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "username" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "sourceProject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                    ],
                  },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "targetProject" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "id" } },
                      { kind: "Field", name: { kind: "Name", value: "name" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "fullPath" },
                      },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "approved" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "approvalsRequired" },
                },
                { kind: "Field", name: { kind: "Name", value: "conflicts" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resolvableDiscussionsCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "resolvedDiscussionsCount" },
                },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "userNotesCount" },
                },
                { kind: "Field", name: { kind: "Name", value: "createdAt" } },
                { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "headPipeline" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "detailedStatus" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "detailsPath" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetGitLabPullRequestsQuery,
  GetGitLabPullRequestsQueryVariables
>;
