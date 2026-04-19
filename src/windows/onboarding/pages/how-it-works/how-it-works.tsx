import { useGuavaClient } from "@guava-analytics/react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import FeatureItem from "components/feature-item/feature-item";
import {
  WHATS_NEW_ITEMS_PER_PAGE,
  whatsNewFeatures,
} from "constants/whats-new";
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

  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = Math.ceil(
    whatsNewFeatures.length / WHATS_NEW_ITEMS_PER_PAGE,
  );
  const isLastPage = pageIndex === totalPages - 1;

  const visibleFeatures = whatsNewFeatures.slice(
    pageIndex * WHATS_NEW_ITEMS_PER_PAGE,
    pageIndex * WHATS_NEW_ITEMS_PER_PAGE + WHATS_NEW_ITEMS_PER_PAGE,
  );

  const navigateToNextPage = async () => {
    const supported = await AppModule.isLaunchAtLoginSupported();
    if (!supported) {
      client.trackEvent("onboarding_launch_at_login_not_supported");
      navigate("Notifications");
      return;
    }
    navigate("LaunchAtLogin");
  };

  const onNextPress = () => {
    if (isLastPage) {
      void navigateToNextPage();
      return;
    }
    setPageIndex((index) => index + 1);
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
          onPress: onNextPress,
        },
      ]}
    >
      <View style={$.wrapper}>
        {visibleFeatures.map((feature) => (
          <FeatureItem
            key={feature.headingKey}
            image={feature.image}
            heading={t(feature.headingKey)}
            body={t(feature.bodyKey)}
          />
        ))}
      </View>
    </OnboardingLayout>
  );
};

export default HowItWorks;
