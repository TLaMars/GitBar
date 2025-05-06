import React from "react";
import { Image, View } from "react-native";
import { useStyles } from "react-native-unistyles";
import { useDispatch } from "react-redux";

import ReadyToGoImage from "assets/illustrations/onboarding/ready-to-go.jpg";
import Body from "components/body/body";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import AppModule from "modules/app-module";
import WindowModule from "modules/window-module/src/WindowModule";
import { setIsOnboarded } from "store/slices/user";

import styles from "./ready-to-go.styles";

const ReadyToGo: React.FC = () => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsOnboarded(true));
    // TODO: fix this so it can use WindowNavigator
    void WindowModule.closeWindow("Onboarding");
    AppModule.hideDockIcon();
  };

  return (
    <OnboardingLayout
      title={t("Onboarding/ReadyToGo/Heading")}
      titleSpacing={2}
      buttons={[
        {
          type: "neutral",
          label: t("Onboarding/ReadyToGo/GetStarted"),
          analyticsLabel: "Onboarding/ReadyToGo/GetStarted",
          onPress,
        },
      ]}
    >
      <View style={$.wrapper}>
        <Body>{t("Onboarding/ReadyToGo/Body")}</Body>
        <Spacer mt={10} />
        <Image
          style={$.image}
          source={ReadyToGoImage}
          accessibilityIgnoresInvertColors
        />
      </View>
    </OnboardingLayout>
  );
};

export default ReadyToGo;
