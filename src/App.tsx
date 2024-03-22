/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from "react";

import Body from "components/body/body";
import Heading from "components/heading/heading";
import ThemeProvider from "contexts/theme";

const App: React.FC = () => (
  <ThemeProvider>
    <Heading>Open up App.tsx to start working on your app!</Heading>
    <Body>Hello World</Body>
  </ThemeProvider>
);

export default App;
