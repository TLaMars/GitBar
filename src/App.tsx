import { NavigationContainer } from "@react-navigation/native";

import linkingConfig from "constants/linking-config";
import IntlProvider from "contexts/intl";
import ThemeProvider from "contexts/theme";
import RootStack from "pages/routes";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <IntlProvider>
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
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
