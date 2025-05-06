import { DefaultTheme, NavigationContainer } from "@react-navigation/native";
import React from "react";

import BlobBackground from "components/blob-background/blob-background";
import Guava from "contexts/guava";
import IntlProvider from "contexts/intl";
import ReduxProvider from "contexts/redux-provider";

import OnboardingStack from "./pages/routes";

const Onboarding: React.FC = () => (
  <ReduxProvider>
    <BlobBackground>
      <IntlProvider>
        <NavigationContainer
          theme={{
            colors: {
              background: "transparent",
              primary: "transparent",
              card: "transparent",
              text: "transparent",
              border: "transparent",
              notification: "transparent",
            },
            fonts: DefaultTheme.fonts,
            dark: true,
          }}
        >
          <Guava>
            <OnboardingStack />
          </Guava>
        </NavigationContainer>
      </IntlProvider>
    </BlobBackground>
  </ReduxProvider>
);

export default Onboarding;
