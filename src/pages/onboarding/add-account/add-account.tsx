import React from "react";
import { Linking, View } from "react-native";

import Button from "components/button/button";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import GITHUB_OAUTH_AUTHORIZE from "constants/github-oauth";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "src/layouts/default-layout/default-layout";

import useStyles from "./add-account.styles";

const OnboardingAddAccount: React.FC = () => {
  const { t } = useTranslation();
  const $ = useStyles();

  return (
    <DefaultLayout blobBackground sideBarHidden>
      <View style={$.container}>
        <Heading size="m">{t("Onboarding/Heading/AddAccount")}</Heading>
        <Spacer mt={2} />
        <Button
          boldText={false}
          size="xs"
          type="secondary"
          label={t("Onboarding/Button/GitHub")}
          onPress={() => Linking.openURL(GITHUB_OAUTH_AUTHORIZE)}
        />
      </View>
    </DefaultLayout>
  );
};

export default OnboardingAddAccount;
