import React from "react";
import { View } from "react-native";

import BlobBackground from "components/blob-background/blob-background";
import Body from "components/body/body";
import ReduxProvider from "contexts/redux-provider";
import ThemeProvider from "contexts/theme";

const Onboarding: React.FC = () => (
  <ReduxProvider>
    <ThemeProvider>
      <BlobBackground>
        <View>
          <Body>Window Onboarding</Body>
        </View>
      </BlobBackground>
    </ThemeProvider>
  </ReduxProvider>
);

export default Onboarding;
