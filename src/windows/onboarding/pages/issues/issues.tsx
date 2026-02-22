import { useGuavaClient } from "@guava-analytics/react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import HowItWorksRelevantImage from "assets/illustrations/onboarding/issues.jpg";
import Body from "components/body/body";
import useDispatch from "hooks/use-dispatch";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import { OnboardingStackParamList } from "models/onboarding-stack-param-list";
import { setShowIssues } from "store/slices/settings";

import styles from "./issues.styles";

const Issues: React.FC = () => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const { navigate } =
    useNavigation<NavigationProp<OnboardingStackParamList>>();
  const dispatch = useDispatch();
  const client = useGuavaClient();

  const onPress = () => {
    dispatch(setShowIssues(true));
    client.trackEvent("onboarding_issues_enabled", {
      value: "true",
    });
    navigate("ReadyToGo");
  };

  return (
    <OnboardingLayout
      title={t("Onboarding/Issues/Heading")}
      titleSpacing={6}
      buttons={[
        {
          type: "neutral",
          label: t("General/Button/Next"),
          analyticsLabel: "General/Button/Next",
          onPress,
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
