import React, { useContext } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import Icon from "components/icon/icon";
import { DataContext } from "contexts/data";
import useTranslation from "hooks/use-translation";

import styles from "./offline-banner.styles";

const OfflineBanner: React.FC = () => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const { pullRequests } = useContext(DataContext);

  const hasAccounts = pullRequests.length > 0;
  const allFailing =
    hasAccounts &&
    pullRequests.every((query) => query.isError && !query.isFetching);

  if (!allFailing) return null;

  return (
    <View style={$.container}>
      <Icon name="PowerOff" size={16} />
      <Body size="xs" color="textOnCtaDanger">
        {t("App/Offline/Banner")}
      </Body>
    </View>
  );
};

export default OfflineBanner;
