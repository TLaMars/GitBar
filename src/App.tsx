import Test from "components/test/test";
import IntlProvider from "contexts/intl";
import ThemeProvider from "contexts/theme";

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <IntlProvider>
        <Test />
      </IntlProvider>
    </ThemeProvider>
  );
}

export default App;
