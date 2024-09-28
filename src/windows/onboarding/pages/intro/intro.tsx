import React from "react";
import { Image, View } from "react-native";

import IntroImage from "assets/illustrations/onboarding/intro.jpg";
import Body from "components/body/body";
import Button from "components/button/button";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";

import useStyles from "./intro.styles";

const Intro: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();

  return (
    <OnboardingLayout title={t("Onboarding/Intro/Heading")} titleSpacing={2}>
      <View style={$.wrapper}>
        <View>
          <Body textAlign="center">{t("Onboarding/Intro/SubHeading")}</Body>
          <Spacer mt={10} />
          <Image
            style={$.image}
            source={IntroImage}
            accessibilityIgnoresInvertColors
          />
        </View>
        <View style={$.buttonContainer}>
          <Button
            size="xs"
            label={t("Onboarding/Intro/GetStarted")}
            onPress={() => {}}
          />
        </View>
      </View>
    </OnboardingLayout>
  );
};

export default Intro;
