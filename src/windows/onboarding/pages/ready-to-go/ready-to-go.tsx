import React from "react";
import { Image, View } from "react-native";
import { useDispatch } from "react-redux";

import ReadyToGoImage from "assets/illustrations/onboarding/ready-to-go.jpg";
import Body from "components/body/body";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import OnboardingLayout from "layouts/onboarding-layout/onboarding-layout";
import PopoverModule from "modules/popover-module";
import { setIsOnboarded } from "store/slices/user";

import useStyles from "./ready-to-go.styles";

const ReadyToGo: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const onPress = () => {
    dispatch(setIsOnboarded(true));
    PopoverModule.open();
  };

  return (
    <OnboardingLayout
      title={t("Onboarding/ReadyToGo/Heading")}
      titleSpacing={2}
      buttons={[
        {
          type: "neutral",
          label: t("Onboarding/ReadyToGo/GetStarted"),
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
