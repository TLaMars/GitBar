import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";

import BlobBackground from "components/blob-background/blob-background";
import linkingConfig from "constants/linking-config";
import IntlProvider from "contexts/intl";
import ReduxProvider from "contexts/redux-provider";
import ThemeProvider from "contexts/theme";
import RootStack from "pages/routes";

import client from "./core/services/apollo-client";

const App: React.FC = () => (
  <ApolloProvider client={client}>
    <ReduxProvider>
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
    </ReduxProvider>
  </ApolloProvider>
);

export default App;
