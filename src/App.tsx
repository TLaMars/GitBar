import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import * as Sentry from "@sentry/react-native";

import BlobBackground from "components/blob-background/blob-background";
import Toasts from "components/toasts/toasts";
import linkingConfig from "constants/linking-config";
import AccountsProvider from "contexts/accounts";
import IntlProvider from "contexts/intl";
import ReduxProvider from "contexts/redux-provider";
import ThemeProvider from "contexts/theme";
import ToastProvider from "contexts/toasts";
import RootStack from "pages/routes";

import client from "./core/services/apollo-client";

Sentry.init({
  dsn: "https://e4459bd169456448afd4a22a2ec5345a@o4507833408552960.ingest.de.sentry.io/4507833413009488",
  enabled: !__DEV__,
});

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ReduxProvider>
      <AccountsProvider>
        <ThemeProvider>
          <IntlProvider>
            <BlobBackground>
              <ToastProvider>
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
                <Toasts />
              </ToastProvider>
            </BlobBackground>
          </IntlProvider>
        </ThemeProvider>
      </AccountsProvider>
    </ReduxProvider>
  </ApolloProvider>
);

export default App;
