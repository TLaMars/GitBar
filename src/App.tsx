import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";

import BlobBackground from "components/blob-background/blob-background";
import linkingConfig from "constants/linking-config";
import AccountsProvider from "contexts/accounts";
import IntlProvider from "contexts/intl";
import ReduxProvider from "contexts/redux-provider";
import ThemeProvider from "contexts/theme";
import RootStack from "pages/routes";

import client from "./core/services/apollo-client";

Sentry.init({
  dsn: "https://e4459bd169456448afd4a22a2ec5345a@o4507833408552960.ingest.de.sentry.io/4507833413009488",

  // uncomment the line below to enable Spotlight (https://spotlightjs.com)
  // enableSpotlight: __DEV__,
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ReduxProvider>
      <AccountsProvider>
        <ThemeProvider>
          <IntlProvider>
            <BlobBackground>
              <NavigationContainer
                linking={linkingConfig}
                theme={{
                  // Override the default theme
                  dark: false,
                  colors: {
                    notification: "transparent",
                    background: "transparent",
                    border: "transparent",
                    card: "transparent",
                    primary: "transparent",
                    text: "transparent",
                  },
                }}
              >
                <RootStack />
              </NavigationContainer>
            </BlobBackground>
          </IntlProvider>
        </ThemeProvider>
      </AccountsProvider>
    </ReduxProvider>
  </ApolloProvider>
);

export default App;
