import React from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import PageHeader from "components/page-header/page-header";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";

import styles from "./issues.styles";

const Issues: React.FC = () => {
  const { t } = useTranslation();
  const { styles: $ } = useStyles(styles);

  return (
    <DefaultLayout>
      <View style={$.container}>
        <PageHeader title={t("Issues/Heading/Issues")} updatedAt={Date.now()} />
      </View>
    </DefaultLayout>
  );
};

export default Issues;
