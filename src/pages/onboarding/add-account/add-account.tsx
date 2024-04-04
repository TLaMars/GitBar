import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Linking, View } from "react-native";

import Button from "components/button/button";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import DOMAINS from "constants/domains";
import URI_PATHS from "constants/uri-paths";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import { RootStackParamList } from "models/root-stack-param-list";

import useStyles from "./add-account.styles";

const OnboardingAddAccount: React.FC = () => {
  const { t } = useTranslation();
  const { params } =
    useRoute<RouteProp<RootStackParamList, "OnboardingAddAccount">>();
  const $ = useStyles();
  const { navigate } = useNavigation();

  return (
    <DefaultLayout sideBarHidden>
      <View style={$.container}>
        <Heading size="m">{t("Onboarding/Heading/AddAccount")}</Heading>
        <Spacer mt={2} />
        <View style={$.buttonGroup}>
          <Button
            boldText={false}
            size="xs"
            type="secondary"
            label={t("Onboarding/Button/GitHub")}
            onPress={() =>
              Linking.openURL(
                `${DOMAINS.github}${URI_PATHS.githubOauthAuthorize}`,
              )
            }
          />
          <Button
            boldText={false}
            size="xs"
            type="secondary"
            label={t("Onboarding/Button/GitLab")}
            onPress={() => {
              navigate("RegisterGitLab");
            }}
          />
          <Button
            boldText={false}
            size="xs"
            type="secondary"
            label={t("Onboarding/Button/Azure")}
            onPress={() => {
              navigate("RegisterAzure");
            }}
          />
          {params?.showBackButton && (
            <Button
              boldText={false}
              size="xs"
              type="neutral"
              label={t("General/Button/Back")}
              onPress={() => navigate("Settings")}
            />
          )}
        </View>
      </View>
    </DefaultLayout>
  );
};

export default OnboardingAddAccount;
