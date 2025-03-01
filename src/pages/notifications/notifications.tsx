import { ActivityIndicator, Image, View } from "react-native";
import { FlatList } from "react-native-macos";

import GitNotificationsImage from "assets/illustrations/onboarding/git-notifications.jpg";
import Body from "components/body/body";
import Button from "components/button/button";
import IssueCard from "components/issue-card/issue-card";
import PageHeader from "components/page-header/page-header";
import Spacer from "components/spacer/spacer";
import useDispatch from "hooks/use-dispatch";
import useNotifications from "hooks/use-notifications";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import DefaultLayout from "layouts/default-layout/default-layout";
import { selectIsGitNotificationsEnabled } from "store/selectors/user";
import { setIsGitNotificationsEnabled } from "store/slices/user";

import useStyles from "./notifications.styles";

const Notifications: React.FC = () => {
  const $ = useStyles();
  const { t } = useTranslation();
  const { notifications, updatedAt, isLoading } = useNotifications();
  const gitNotificationsEnabled = useSelector(selectIsGitNotificationsEnabled);
  const dispatch = useDispatch();

  const onEnable = (enabled: boolean) => {
    dispatch(setIsGitNotificationsEnabled(enabled));
  };

  return (
    <DefaultLayout>
      <View style={$.container}>
        <PageHeader
          title={t("Notifications/Heading/Title")}
          updatedAt={updatedAt}
          buttonToggleOptions={[
            { label: t("Notifications/Heading/Issues"), onPress: () => {} },
          ]}
        />
        {isLoading && <ActivityIndicator />}
        {gitNotificationsEnabled === undefined && (
          <Spacer mt={4}>
            <Body>{t("Onboarding/GitNotifications/Body")}</Body>
            <View style={$.onboardingButtons}>
              <Button
                style={$.onboardingButton}
                size="xs"
                type="secondary"
                label={t("General/Button/No")}
                onPress={() => onEnable(false)}
              />
              <Button
                style={$.onboardingButton}
                size="xs"
                type="neutral"
                label={t("General/Button/Yes")}
                onPress={() => onEnable(true)}
              />
            </View>
            <Image
              source={GitNotificationsImage}
              style={$.onboardingImage}
              accessibilityIgnoresInvertColors
            />
          </Spacer>
        )}
        {gitNotificationsEnabled === false && (
          <View>
            <Body>{t("Notifications/Disabled/Body")}</Body>
          </View>
        )}
        {gitNotificationsEnabled === true && (
          <FlatList
            data={notifications}
            contentContainerStyle={$.list}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <IssueCard
                title={item.title}
                updatedAt={item.updatedAt}
                projectPath={item.projectPath}
                url={item.url}
              />
            )}
          />
        )}
      </View>
    </DefaultLayout>
  );
};

export default Notifications;
