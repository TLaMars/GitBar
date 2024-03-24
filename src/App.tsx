import { ScrollView } from "react-native";

import Body from "components/body/body";
import ThemeProvider from "contexts/theme";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <ScrollView>
        <Body />
      </ScrollView>
    </ThemeProvider>
  );
}

export default App;
