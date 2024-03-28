import { RouteProp, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";

import Heading from "components/heading/heading";
import githubAuthEndpoints from "constants/github-auth-endpoints";
import { RootStackParamList } from "models/root-stack-param-list";
import DefaultLayout from "src/layouts/default-layout/default-layout";

const RegisterGithub: React.FC = () => {
  const {
    params: { code },
  } = useRoute<RouteProp<RootStackParamList, "RegisterGitHub">>();

  useEffect(() => {
    const fetchToken = async () => {
      const body = new FormData();
      body.append("client_id", process.env.GITHUB_CLIENT_ID);
      body.append("code", code);
      body.append("client_secret", process.env.GITHUB_CLIENT_SECRET);
      const response = await fetch(`${githubAuthEndpoints.accessToken}`, {
        method: "POST",
        headers: {
          Accept: "application/json",
        },
        body,
      });

      const data = await response.json();
    };

    void fetchToken();
  }, [code]);

  return (
    <DefaultLayout>
      <Heading>ADded GitHub Account</Heading>
    </DefaultLayout>
  );
};

export default RegisterGithub;
