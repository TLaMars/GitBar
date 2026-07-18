import React, { useState } from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Button from "components/button/button";
import FeatureItem from "components/feature-item/feature-item";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";
import {
  getUnseenWhatsNewFeatures,
  WHATS_NEW_ITEMS_PER_PAGE,
} from "constants/whats-new";
import useSelector from "hooks/use-selector";
import useTranslation from "hooks/use-translation";
import { selectLastSeenWhatsNewVersion } from "store/selectors/user";

import styles from "./whats-new-modal.styles";

type Props = {
  visible: boolean;
  onClose: () => void;
};

const WhatsNewModal: React.FC<Props> = ({ visible, onClose }) => {
  const { styles: $ } = useStyles(styles);
  const { t } = useTranslation();
  const lastSeenVersion = useSelector(selectLastSeenWhatsNewVersion);

  const features = getUnseenWhatsNewFeatures(lastSeenVersion);
  const [pageIndex, setPageIndex] = useState(0);
  const totalPages = Math.max(
    1,
    Math.ceil(features.length / WHATS_NEW_ITEMS_PER_PAGE),
  );
  const isLastPage = pageIndex >= totalPages - 1;

  const visibleFeatures = features.slice(
    pageIndex * WHATS_NEW_ITEMS_PER_PAGE,
    pageIndex * WHATS_NEW_ITEMS_PER_PAGE + WHATS_NEW_ITEMS_PER_PAGE,
  );

  const onNextPress = () => {
    if (isLastPage) {
      onClose();
      setPageIndex(0);
      return;
    }
    setPageIndex((index) => index + 1);
  };

  if (!visible || features.length === 0) {
    return null;
  }

  return (
    <View style={$.overlay} pointerEvents="auto">
      <View style={$.card}>
        <Heading textAlign="center" size="l">
          {t("WhatsNew/Heading")}
        </Heading>
        <Spacer mt={6} />
        <View style={$.wrapper}>
          {visibleFeatures.map((feature) => (
            <FeatureItem
              key={feature.headingKey}
              image={feature.image}
              heading={t(feature.headingKey)}
              body={t(feature.bodyKey)}
            />
          ))}
        </View>
        <Spacer mt={6} />
        <View style={$.buttonGroup}>
          <Button
            analyticsLabel="WhatsNew/Button/Next"
            size="xs"
            type="neutral"
            label={
              isLastPage ? t("WhatsNew/Button/Done") : t("General/Button/Next")
            }
            onPress={onNextPress}
          />
        </View>
      </View>
    </View>
  );
};

export default WhatsNewModal;
