import { GuavaProvider } from "@guava-analytics/react-native";
import { PropsWithChildren } from "react";

const Guava: React.FC<PropsWithChildren> = ({ children }) => (
  <GuavaProvider
    apiKey={process.env.EXPO_PUBLIC_GUAVA_KEY}
    host={process.env.EXPO_PUBLIC_GUAVA_HOST}
    debug={__DEV__}
  >
    {children}
  </GuavaProvider>
);

export default Guava;
