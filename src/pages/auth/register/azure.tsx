import { useNavigation } from "@react-navigation/native";
import { encode } from "js-base64";
import React, { useEffect, useState } from "react";
import { View } from "react-native";

import GitLabLogo from "assets/illustrations/gitlab.svg";
import Button from "components/button/button";
import Spacer from "components/spacer/spacer";
import TextInput from "components/text-input/text-input";
import useDispatch from "hooks/use-dispatch";
import useTranslation from "hooks/use-translation";
import RegisteredLayout from "layouts/registered-layout/registered-layout";
import { AccountType } from "models/account";
import azureApi from "services/api/azure/api";
import { ProfileResponse } from "services/api/azure/models/profile-response";
import { upsertOneAccount } from "store/slices/accounts";

import useStyles from "./register.styles";

const RegisterAzure: React.FC = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const $ = useStyles();
  const { goBack } = useNavigation();
  const [organization, setOrganization] = useState("");
  const [token, setToken] = useState("");
  const [data, setData] = useState<ProfileResponse>();

  const getAzureUser = React.useCallback(async () => {
    const encodedToken = encode(`gition:${token}`);
    const responseData = await azureApi.get(
      "/:organization/_apis/profile/profiles/me",
      {
        params: {
          organization,
        },
        headers: {
          Authorization: `Basic ${encodedToken}`,
        },
      },
    );

    setData(responseData);
  }, [organization, token]);

  useEffect(() => {
    if (data) {
      dispatch(
        upsertOneAccount({
          type: AccountType.Azure,
          organization,
          token,
          accountId: data.id,
          userName: data.displayName,
        }),
      );
    }
  }, [data, dispatch, organization, token]);

  return (
    <>
      {!data && (
        <View style={$.container}>
          <GitLabLogo width={60} height={60} />
          <Spacer mt={4} />
          <TextInput
            accessibilityHint={t("RegisterAzure/Label/Organization")}
            accessibilityLabel={t("RegisterAzure/Label/Organization")}
            label={t("RegisterAzure/Label/Organization")}
            placeholder="Organization"
            onChangeText={setOrganization}
          />
          <Spacer mt={1} />
          <TextInput
            accessibilityHint={t("RegisterAzure/Label/Token")}
            accessibilityLabel={t("RegisterAzure/Label/Token")}
            label={t("RegisterAzure/Label/Token")}
            placeholder={t("RegisterAzure/Placeholder/Token")}
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
              onPress={getAzureUser}
              style={{ flex: 1 }}
            />
          </View>
        </View>
      )}
      {data && (
        <RegisteredLayout
          name={data.displayName}
          type={AccountType.Azure}
          onRetryPress={getAzureUser}
        />
      )}
    </>
  );
};

export default RegisterAzure;
