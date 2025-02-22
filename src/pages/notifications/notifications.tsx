import { View } from "react-native";

import PageHeader from "components/page-header/page-header";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";

import useStyles from "./notifications.styles";

const Notifications: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();

  return (
    <DefaultLayout>
      <View style={$.container}>
        <PageHeader
          title={t("Notifications/Heading/Title")}
          updatedAt={0}
          buttonToggleOptions={[
            { label: t("Notifications/Heading/Issues"), onPress: () => {} },
          ]}
        />
      </View>
    </DefaultLayout>
  );
};

export default Notifications;
