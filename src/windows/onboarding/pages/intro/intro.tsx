import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import IntroImage from "assets/illustrations/onboarding/intro.jpg";
import Body from "components/body/body";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import { OnboardingStackParamList } from "models/onboarding-stack-param-list";

import styles from "./intro.styles";

const Intro: React.FC = () => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const { navigate } =
    useNavigation<NavigationProp<OnboardingStackParamList>>();

  return (
    <OnboardingLayout
      title={t("Onboarding/Intro/Heading")}
      titleSpacing={2}
      buttons={[
        {
          type: "neutral",
          label: t("Onboarding/Intro/GetStarted"),
          analyticsLabel: "Onboarding/Intro/GetStarted",
          onPress: () => navigate("HowItWorks"),
        },
      ]}
    >
      <View>
        <Body textAlign="center">{t("Onboarding/Intro/SubHeading")}</Body>
        <Spacer mt={10} />
        <Image
          style={$.image}
          source={IntroImage}
          accessibilityIgnoresInvertColors
          resizeMode="cover"
        />
      </View>
    </OnboardingLayout>
  );
};

export default Intro;
