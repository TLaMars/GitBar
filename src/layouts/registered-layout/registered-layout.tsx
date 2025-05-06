import { useGuavaClient } from "@guava/react-native";
import { StackActions, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Avatar from "components/attendee/attendee";
import Body from "components/body/body";
import Button from "components/button/button";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import { AccountType } from "models/account";

import styles from "./registered-layout.styles";

type Props = {
  type: AccountType;
  avatarUrl?: string;
  error?: string;
  name: string;
  onRetryPress?: () => void;
};

const RegisteredLayout: React.FC<Props> = ({
  avatarUrl,
  error,
  name,
  type,
  onRetryPress,
}) => {
  const { styles: $ } = useStyles(styles);
  const client = useGuavaClient();
  const { t } = useTranslation();
  const navigation = useNavigation();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (!error) {
      // Navigate to dashboard after 3 seconds
      interval = setInterval(() => {
        setSeconds((prev) => prev - 1);
        if (seconds === 0) {
          navigation.dispatch(StackActions.popTo("Dashboard"));
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [error, seconds, navigation]);

  useEffect(() => {
    if (error) {
      client.trackEvent("account_added_error", {
        account_type: type,
      });
    }
  }, [client, type, error]);

  return (
    <DefaultLayout>
      <View style={$.container}>
        {!error && (
          <>
            <Heading size="m">
              {t("RegisteredLayout/Heading/Added", { type })}
            </Heading>
            <Spacer mt={4} />
            <Avatar avatarUrl={avatarUrl} name={name} size={100} />
            <Spacer mt={2} />
            <Heading>{name}</Heading>
            <Spacer mt={4} />
            <Body>
              {t("RegisteredLayout/Label/Redirect", {
                seconds,
              })}
            </Body>
            <Spacer mt={6} />
            <Button
              analyticsLabel="RegisteredLayout/Button/GoToPullRequests"
              label={t("RegisteredLayout/Button/GoToPullRequests")}
              onPress={() =>
                navigation.dispatch(StackActions.popTo("Dashboard"))
              }
            />
          </>
        )}
        {error && (
          <>
            <Heading size="m">{t("RegisteredLayout/Heading/Error")}</Heading>
            <Body>{t("RegisteredLayout/Body/Error", { type })}</Body>
            <Body>{error}</Body>
            <Spacer mt={5} />
            <Button
              analyticsLabel="RegisteredLayout/Button/Retry"
              label={t("RegisteredLayout/Button/Retry")}
              onPress={onRetryPress}
            />
          </>
        )}
      </View>
    </DefaultLayout>
  );
};

export default RegisteredLayout;
