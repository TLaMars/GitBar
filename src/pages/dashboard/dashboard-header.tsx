import React, { useEffect, useState } from "react";
import { View } from "react-native";

import Body from "components/body/body";
import ButtonToggle from "components/button-toggle/button-toggle";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import useTranslation from "hooks/use-translation";
import calculateMinutesAgo from "utils/calculate-minutes-ago";

import useStyles from "./dashboard.styles";

type Props = {
  isRelevant: boolean;
  setIsRelevant: (isRelevant: boolean) => void;
  executedAt: number;
};

const DashboardHeader: React.FC<Props> = ({
  executedAt,
  isRelevant,
  setIsRelevant,
}) => {
  const $ = useStyles();
  const { t } = useTranslation();
  const [minutesAgo, setMinutesAgo] = useState(Date.now());

  useEffect(() => {
    setMinutesAgo(calculateMinutesAgo(executedAt));
    const minutesAgeInterval = setInterval(() => {
      setMinutesAgo(calculateMinutesAgo(executedAt));
    }, 20000);

    return () => clearInterval(minutesAgeInterval);
  }, [executedAt]);

  return (
    <View style={$.header}>
      <View style={$.headerLeft}>
        <Heading size="s">{t("Dashboard/Heading/PullRequests")}</Heading>
        <View style={$.poller}>
          <Icon name="Refresh" size={14} />
          <Body size="xs" color="textSecondary">
            {t("Dashboard/Body/LastUpdated", { minutesAgo })}
          </Body>
        </View>
      </View>
      <View style={$.headerRight}>
        <ButtonToggle
          preActiveButtonIndex={isRelevant ? 0 : 1}
          buttons={[
            {
              label: t("Dashboard/Button/Relevant"),
              onPress: () => setIsRelevant(true),
            },
            {
              label: t("Dashboard/Button/All"),
              onPress: () => setIsRelevant(false),
            },
          ]}
        />
      </View>
    </View>
  );
};

export default DashboardHeader;
