import { useLazyQuery } from "@apollo/client";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Linking } from "react-native";

import GITHUB_OAUTH_AUTHORIZE, {
  GITHUB_GRAPHQL_ENDPOINT,
} from "constants/github";
import useDispatch from "hooks/use-dispatch";
import { AccountType } from "models/account";
import { RootStackParamList } from "models/root-stack-param-list";
import QueryGetViewer from "src/core/gql/github/queries/viewer";
import gitHubOauthApi from "src/core/services/api/github/api";
import { upsertOneAccount } from "src/core/store/slices/accounts";
import RegisteredLayout from "src/layouts/registered-layout/registered-layout";

const RegisterGithub: React.FC = () => {
  const dispatch = useDispatch();
  const [fetchViewer, { data }] = useLazyQuery(QueryGetViewer);
  const [token, setToken] = useState<string>();
  const [error, setError] = useState<string>();

  const {
    params: { code },
  } = useRoute<RouteProp<RootStackParamList, "RegisterGitHub">>();

  useEffect(() => {
    const fetchToken = async () => {
      const response = await gitHubOauthApi
        .post(
          "/access_token",
          {
            client_id: process.env.GITHUB_CLIENT_ID ?? "",
            code,
            client_secret: process.env.GITHUB_CLIENT_SECRET ?? "",
          },
          {
            headers: {
              Accept: "application/json",
            },
          },
        )
        .catch((err) => {
          setError("Failed to fetch token");
          console.error(err);
        });

      if (response) {
        setToken(response.access_token);
        await fetchViewer({
          context: {
            uri: GITHUB_GRAPHQL_ENDPOINT,
            headers: {
              Authorization: `bearer ${response.access_token}`,
            },
          },
        });
      }
    };

    void fetchToken();
  }, [code, fetchViewer]);

  useEffect(() => {
    if (data && token) {
      dispatch(
        upsertOneAccount({
          accountId: data.viewer.id,
          type: AccountType.GitHub,
          name: data.viewer.name ?? undefined,
          userName: data.viewer.login,
          avatarUrl: data.viewer.avatarUrl,
          accessToken: token,
          domain: GITHUB_GRAPHQL_ENDPOINT,
        }),
      );
    }
  }, [data, dispatch, token]);

  return (
    <RegisteredLayout
      avatarUrl={data?.viewer.avatarUrl}
      error={error}
      name={data?.viewer.login ?? ""}
      type={AccountType.GitHub}
      onRetryPress={() => {
        void Linking.openURL(GITHUB_OAUTH_AUTHORIZE);
      }}
    />
  );
};

export default RegisterGithub;
