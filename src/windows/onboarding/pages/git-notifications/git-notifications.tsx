import { useGuavaClient } from "@guava/react-native";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, View } from "react-native";

import GitNotificationsImage from "assets/illustrations/onboarding/git-notifications.jpg";
import Body from "components/body/body";
import useDispatch from "hooks/use-dispatch";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import { OnboardingStackParamList } from "models/onboarding-stack-param-list";
import { setIsGitNotificationsEnabled } from "store/slices/user";

import useStyles from "./git-notifications.styles";

const GitNotifications: React.FC = () => {
  const client = useGuavaClient();
  const $ = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { navigate } =
    useNavigation<NavigationProp<OnboardingStackParamList>>();

  const onContinue = async (accepted: boolean) => {
    dispatch(setIsGitNotificationsEnabled(accepted));
    client.trackEvent("onboarding_git_notifications_enabled", {
      value: accepted.toString(),
    });
    navigate("ReadyToGo");
  };

  return (
    <OnboardingLayout
      title={t("Onboarding/GitNotifications/Heading")}
      titleSpacing={6}
      buttons={[
        {
          type: "secondary",
          analyticsLabel: "General/Button/Skip",
          label: t("General/Button/Skip"),
          onPress: () => onContinue(false),
        },
        {
          type: "neutral",
          analyticsLabel: "General/Button/Yes",
          label: t("General/Button/Yes"),
          onPress: () => onContinue(true),
        },
      ]}
    >
      <View style={$.wrapper}>
        <Image
          style={$.image}
          source={GitNotificationsImage}
          accessibilityIgnoresInvertColors
        />
        <View style={$.content}>
          <Body size="s">{t("Onboarding/GitNotifications/Body")}</Body>
        </View>
      </View>
    </OnboardingLayout>
  );
};

export default GitNotifications;
