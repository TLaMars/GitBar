import { useGuavaClient } from "@guava-analytics/react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import HowItWorksHideImage from "assets/illustrations/onboarding/how-it-works-hide.jpg";
import HowItWorksRelevantImage from "assets/illustrations/onboarding/how-it-works-relevant.jpg";
import FeatureItem from "components/feature-item/feature-item";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import { OnboardingStackParamList } from "models/onboarding-stack-param-list";
import AppModule from "modules/app-module";

import styles from "./how-it-works.styles";

const HowItWorks: React.FC = () => {
  const client = useGuavaClient();
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const { navigate } =
    useNavigation<NavigationProp<OnboardingStackParamList>>();

  const navigateToNextPage = async () => {
    const supported = await AppModule.isLaunchAtLoginSupported();
    if (!supported) {
      client.trackEvent("onboarding_launch_at_login_not_supported");
      navigate("Notifications");
      return;
    }
    navigate("LaunchAtLogin");
  };

  return (
    <OnboardingLayout
      title={t("Onboarding/HowItWorks/Heading")}
      titleSpacing={6}
      buttons={[
        {
          type: "neutral",
          label: t("General/Button/Next"),
          analyticsLabel: "General/Button/Next",
          onPress: navigateToNextPage,
        },
      ]}
    >
      <View style={$.wrapper}>
        <FeatureItem
          image={HowItWorksRelevantImage}
          heading={t("Onboarding/HowItWorks/RelevantTabHeading")}
          body={t("Onboarding/HowItWorks/RelevantTabBody")}
        />
        <FeatureItem
          image={HowItWorksHideImage}
          heading={t("Onboarding/HowItWorks/HidePRsHeading")}
          body={t("Onboarding/HowItWorks/HidePRsBody")}
        />
      </View>
    </OnboardingLayout>
  );
};

export default HowItWorks;
