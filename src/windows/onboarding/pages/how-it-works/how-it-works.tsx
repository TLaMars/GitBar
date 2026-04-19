import { useGuavaClient } from "@guava-analytics/react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { ImageSourcePropType, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import HowItWorksCIStatusImage from "assets/illustrations/onboarding/how-it-works-ci-status.jpg";
import HowItWorksCompactImage from "assets/illustrations/onboarding/how-it-works-compact.jpg";
import HowItWorksHideImage from "assets/illustrations/onboarding/how-it-works-hide.jpg";
import HowItWorksMRStatusImage from "assets/illustrations/onboarding/how-it-works-mr-status.jpg";
import HowItWorksRelevantImage from "assets/illustrations/onboarding/how-it-works-relevant.jpg";
import FeatureItem from "components/feature-item/feature-item";
import { TranslationKey } from "contexts/intl";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import { OnboardingStackParamList } from "models/onboarding-stack-param-list";
import AppModule from "modules/app-module";

import styles from "./how-it-works.styles";

const ITEMS_PER_PAGE = 3;

type Feature = {
  image: ImageSourcePropType;
  headingKey: TranslationKey;
  bodyKey: TranslationKey;
};

const features: Feature[] = [
  {
    image: HowItWorksRelevantImage,
    headingKey: "Onboarding/HowItWorks/RelevantTabHeading",
    bodyKey: "Onboarding/HowItWorks/RelevantTabBody",
  },
  {
    image: HowItWorksHideImage,
    headingKey: "Onboarding/HowItWorks/HidePRsHeading",
    bodyKey: "Onboarding/HowItWorks/HidePRsBody",
  },
  {
    image: HowItWorksMRStatusImage,
    headingKey: "Onboarding/HowItWorks/MRStatusHeading",
    bodyKey: "Onboarding/HowItWorks/MRStatusBody",
  },
  {
    image: HowItWorksCIStatusImage,
    headingKey: "Onboarding/HowItWorks/CIStatusHeading",
    bodyKey: "Onboarding/HowItWorks/CIStatusBody",
  },
  {
    image: HowItWorksCompactImage,
    headingKey: "Onboarding/HowItWorks/CompactHeading",
    bodyKey: "Onboarding/HowItWorks/CompactBody",
  },
];

const HowItWorks: React.FC = () => {
  const client = useGuavaClient();
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const { navigate } =
    useNavigation<NavigationProp<OnboardingStackParamList>>();

  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = Math.ceil(features.length / ITEMS_PER_PAGE);
  const isLastPage = pageIndex === totalPages - 1;

  const visibleFeatures = features.slice(
    pageIndex * ITEMS_PER_PAGE,
    pageIndex * ITEMS_PER_PAGE + ITEMS_PER_PAGE,
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
