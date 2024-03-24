import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Pressable } from "react-native";

import Heading from "components/heading/heading";
import { TranslationKey } from "contexts/intl";
import useTranslation from "hooks/use-translation";
import { RootStackParamList } from "models/root-stack-param-list";

const RootStackNavigator = createStackNavigator();

type Props = {
  name: TranslationKey;
  linkPage: keyof RootStackParamList;
};

const TestPage: React.FC<Props> = ({ name, linkPage }) => {
  const { navigate } = useNavigation();
  const { t } = useTranslation();

  return (
    <>
      <Heading>{t(name)}</Heading>
      <Pressable accessibilityRole="button" onPress={() => navigate(linkPage)}>
        <Heading>Go to {linkPage}</Heading>
      </Pressable>
    </>
  );
};

const Home = () => <TestPage name="Home/Heading/Label" linkPage="Details" />;

const Details = () => <TestPage name="Details/Heading/Label" linkPage="Home" />;

const RootStack: React.FC = () => (
  <RootStackNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <RootStackNavigator.Screen name="Home" component={Home} />
    <RootStackNavigator.Screen name="Details" component={Details} />
  </RootStackNavigator.Navigator>
);

export default RootStack;
