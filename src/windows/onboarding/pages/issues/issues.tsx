import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import HowItWorksRelevantImage from "assets/illustrations/onboarding/issues.jpg";
import Body from "components/body/body";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import { OnboardingStackParamList } from "models/onboarding-stack-param-list";

import styles from "./issues.styles";

const Issues: React.FC = () => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const { navigate } =
    useNavigation<NavigationProp<OnboardingStackParamList>>();

  return (
    <OnboardingLayout
      title={t("Onboarding/Issues/Heading")}
      titleSpacing={6}
      buttons={[
        {
          type: "neutral",
          label: t("General/Button/Next"),
          analyticsLabel: "General/Button/Next",
          onPress: () => navigate("ReadyToGo"),
        },
      ]}
    >
      <View style={$.wrapper}>
        <Image
          style={$.image}
          source={HowItWorksRelevantImage}
          accessibilityIgnoresInvertColors
        />
        <View style={$.content}>
          <Body size="s">{t("Onboarding/Issues/Body")}</Body>
        </View>
      </View>
    </OnboardingLayout>
  );
};

export default Issues;
