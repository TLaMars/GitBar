import { useLazyQuery } from "@apollo/client";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect } from "react";
import { View } from "react-native";

import GitLabLogo from "assets/illustrations/gitlab.svg";
import Button from "components/button/button";
import Spacer from "components/spacer/spacer";
import TextInput from "components/text-input/text-input";
import URI_PATHS from "constants/uri-paths";
import QueryGetGitLabCurrentUser from "gql/gitlab/queries/current-user";
import useDispatch from "hooks/use-dispatch";
import useTranslation from "hooks/use-translation";
import RegisteredLayout from "layouts/registered-layout/registered-layout";
import { AccountType } from "models/account";
import { upsertOneAccount } from "store/slices/accounts";

import useStyles from "./register.styles";

const RegisterGitLab: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const $ = useStyles();
  const { goBack } = useNavigation();
  const [domain, setDomain] = React.useState("");
  const [token, setToken] = React.useState("");
  const [fetchUser, { data }] = useLazyQuery(QueryGetGitLabCurrentUser);
  const getGitLabUser = useCallback(async () => {
    try {
      await fetchUser({
        context: {
          uri: `${domain}${URI_PATHS.gitlabGql}`,
          headers: {
            "Private-Token": token,
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
  }, [domain, fetchUser, token]);

  useEffect(() => {
    if (data) {
      dispatch(
        upsertOneAccount({
          type: AccountType.GitLab,
          domain: `${domain}`,
          privateToken: token,
          accountId: data.currentUser?.id ?? "",
          avatarUrl: `${domain}${data.currentUser?.avatarUrl}`,
          name: data.currentUser?.name ?? "",
          userName: data.currentUser?.username ?? "",
        }),
      );
    }
  }, [data, dispatch, domain, token]);

  return (
    <>
      {!data && (
        <View style={$.container}>
          <GitLabLogo width={60} height={60} />
          <Spacer mt={4} />
          <TextInput
            accessibilityHint="GitLab Domain URL"
            accessibilityLabel="GitLab domain input field"
            label={t("AddGitLab/Label/Host")}
            placeholder="https://gitlab.com"
            onChangeText={setDomain}
          />
          <Spacer mt={1} />
          <TextInput
            accessibilityHint="GitLab token"
            accessibilityLabel="GitLab token input field"
            label={t("AddGitLab/Label/Token")}
            placeholder="Enter your GitLab token"
            onChangeText={setToken}
          />
          <Spacer mt={1} />
          <View style={$.buttonGroup}>
            <Button
              boldText={false}
              size="xs"
              type="secondary"
              label={t("General/Button/Back")}
              onPress={goBack}
              style={{ flex: 1 }}
            />
            <Button
              boldText={false}
              size="xs"
              label={t("General/Button/Continue")}
              onPress={getGitLabUser}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      )}
      {data && (
        <RegisteredLayout
          avatarUrl={`${domain}${data.currentUser?.avatarUrl}`}
          name={data.currentUser?.name ?? ""}
          type={AccountType.GitLab}
          onRetryPress={getGitLabUser}
        />
      )}
    </>
  );
};

export default RegisterGitLab;
