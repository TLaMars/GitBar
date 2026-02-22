import { ApolloClient } from "@apollo/client";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";

import { AccountType } from "models/account";
import Issue from "models/issue";
import Profile, { AccountState } from "models/profile";
import { PullRequest } from "models/pull-request";

import Provider from "./provider";

abstract class BaseProvider implements Provider {
  id: string;

  auth: Record<string, string>;

  protected client?: ApolloClient;

  protected profile?: Profile;

  protected userIdentifier: string;

  protected accountType: AccountType;

  constructor(
    id: string,
    auth: Record<string, string>,
    userIdentifier: string,
    accountType: AccountType,
  ) {
    this.id = id;
    this.auth = auth;
    this.userIdentifier = userIdentifier;
    this.accountType = accountType;
  }

  protected async query<TData, TVariables = { [key: string]: never }>(
    query: TypedDocumentNode<TData, TVariables>,
  ) {
    if (!this.client) {
      throw new Error("GraphQL client not initialized");
    }

    try {
      const { data } = await this.client.query<TData>({ query });

      if (!data) {
        throw new Error("No data returned from query");
      }

      return data;
    } catch (e: any) {
      const isTokenExpired =
        e?.networkError?.statusCode === 401 ||
        e?.message?.includes("401") ||
        e?.message?.toLowerCase().includes("unauthorized");

      const message = isTokenExpired
        ? "Your access token has expired. Please reconnect your account in Settings."
        : e.message;

      throw new Error(`${this.accountType} ${this.userIdentifier}: ${message}`);
    }
  }

  abstract getProfile(): Promise<Profile>;
  abstract getPullRequests(): Promise<PullRequest[]>;
  abstract getIssues(): Promise<Issue[]>;

  async getValidatedProfile(): Promise<Profile> {
    try {
      return await this.getProfile();
    } catch {
      return {
        id: this.id,
        name: this.userIdentifier,
        type: this.accountType,
        state: AccountState.Invalid,
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        provider: this.auth.domain ?? this.auth.organization ?? "",
      };
    }
  }
}

export default BaseProvider;
