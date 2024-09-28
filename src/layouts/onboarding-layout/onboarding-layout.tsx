import React, { PropsWithChildren } from "react";
import { View } from "react-native";

import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import { ThemeSpacingScale } from "constants/theme";

import useStyles from "./onboarding-layout.styles";

type Props = {
  title: string;
  titleSpacing?: ThemeSpacingScale;
} & PropsWithChildren;

const OnboardingLayout: React.FC<Props> = ({
  children,
  title,
  titleSpacing,
}) => {
  const $ = useStyles();

  return (
    <View style={$.container}>
      <Heading textAlign="center" size="l">
        {title}
      </Heading>
      {titleSpacing && <Spacer mt={titleSpacing} />}
      {children}
    </View>
  );
};

export default OnboardingLayout;
