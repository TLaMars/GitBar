import { useLazyQuery } from "@apollo/client";
import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

import Body from "components/body/body";
import Heading from "components/heading/heading";
import useDispatch from "hooks/use-dispatch";
import { AccountType } from "models/account";
import { RootStackParamList } from "models/root-stack-param-list";
import QueryGetViewer from "src/core/gql/github/queries/viewer";
import gitHubOauthApi from "src/core/services/api/github/api";
import { upsertOneAccount } from "src/core/store/slices/accounts";
import DefaultLayout from "src/layouts/default-layout/default-layout";

const RegisterGithub: React.FC = () => {
  const dispatch = useDispatch();
  const [fetchViewer, { data }] = useLazyQuery(QueryGetViewer);
  const [token, setToken] = useState<string>();
  const [error, setError] = useState(false);

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
          setError(true);
          console.error(err);
        });

      if (response) {
        setToken(response.access_token);
        await fetchViewer({
          context: {
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
          userName: data.viewer.login,
          avatarUrl: data.viewer.avatarUrl,
          accessToken: token,
        }),
      );
    }
  }, [data, dispatch, token]);

  return (
    <DefaultLayout>
      <Heading>GitHub Account Added</Heading>
      {error && <Body>There was an error adding your GitHub account</Body>}
    </DefaultLayout>
  );
};

export default RegisterGithub;
