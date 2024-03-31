import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";

import Logo from "assets/illustrations/logo.png";
import Button from "components/button/button";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";

import useStyles from "./welcome.styles";

const OnboardingWelcome: React.FC = () => {
  const { t } = useTranslation();
  const $ = useStyles();
  const { navigate } = useNavigation();

  return (
    <View style={$.container}>
      <Image accessibilityIgnoresInvertColors source={Logo} style={$.logo} />
      <Spacer mt={2} />
      <Heading size="l">{t("Onboarding/Heading/Welcome")}</Heading>
      <Spacer mt={1} />
      <Button
        size="xs"
        label={t("Onboarding/Button/AddAccount")}
        onPress={() => navigate("OnboardingAddAccount")}
      />
    </View>
  );
};

export default OnboardingWelcome;
