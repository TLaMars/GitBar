import { GuavaProvider } from "@guava-analytics/react-native";
import { PropsWithChildren } from "react";

const Guava: React.FC<PropsWithChildren> = ({ children }) => (
  <GuavaProvider
    apiKey={process.env.GUAVA_KEY}
    host={process.env.GUAVA_HOST}
    debug={__DEV__}
  >
    {children}
  </GuavaProvider>
);

export default Guava;
