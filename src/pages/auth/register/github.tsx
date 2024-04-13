import { useLazyQuery } from "@apollo/client";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Linking } from "react-native";

import DOMAINS from "constants/domains";
import URI_PATHS from "constants/uri-paths";
import QueryGetViewer from "gql/github/queries/viewer";
import useDispatch from "hooks/use-dispatch";
import RegisteredLayout from "layouts/registered-layout/registered-layout";
import { AccountType } from "models/account";
import { RootStackParamList } from "models/root-stack-param-list";
import gitHubOauthApi from "services/api/github/api";
import { upsertOneAccount } from "store/slices/accounts";

const RegisterGithub: React.FC = () => {
  const dispatch = useDispatch();
  const [fetchViewer, { data }] = useLazyQuery(QueryGetViewer);
  const [token, setToken] = useState<string>("");
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
        setToken(response.data.access_token);
        await fetchViewer({
          fetchPolicy: "network-only",
          context: {
            uri: `${DOMAINS.githubApi}${URI_PATHS.githubGql}`,
            headers: {
              Authorization: `bearer ${response.data.access_token}`,
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
          id: data.viewer.id,
          type: AccountType.GitHub,
          auth: {
            accessToken: token,
          },
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
        void Linking.openURL(
          `${DOMAINS.github}${URI_PATHS.githubOauthAuthorize}`,
        );
      }}
    />
  );
};

export default RegisterGithub;
