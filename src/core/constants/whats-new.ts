import { ImageSourcePropType } from "react-native";

import HowItWorksCIStatusImage from "assets/illustrations/onboarding/how-it-works-ci-status.jpg";
import HowItWorksCompactImage from "assets/illustrations/onboarding/how-it-works-compact.jpg";
import HowItWorksHideImage from "assets/illustrations/onboarding/how-it-works-hide.jpg";
import HowItWorksMRStatusImage from "assets/illustrations/onboarding/how-it-works-mr-status.jpg";
import HowItWorksRelevantImage from "assets/illustrations/onboarding/how-it-works-relevant.jpg";
import { TranslationKey } from "contexts/intl";
import AppModule from "modules/app-module";

export const WHATS_NEW_ITEMS_PER_PAGE = 3;

export type WhatsNewFeature = {
  image: ImageSourcePropType;
  headingKey: TranslationKey;
  bodyKey: TranslationKey;
  sinceVersion: string;
};

export const whatsNewFeatures: WhatsNewFeature[] = [
  {
    image: HowItWorksRelevantImage,
    headingKey: "Onboarding/HowItWorks/RelevantTabHeading",
    bodyKey: "Onboarding/HowItWorks/RelevantTabBody",
    sinceVersion: "1.15.0",
  },
  {
    image: HowItWorksHideImage,
    headingKey: "Onboarding/HowItWorks/HidePRsHeading",
    bodyKey: "Onboarding/HowItWorks/HidePRsBody",
    sinceVersion: "1.15.0",
  },
  {
    image: HowItWorksMRStatusImage,
    headingKey: "Onboarding/HowItWorks/MRStatusHeading",
    bodyKey: "Onboarding/HowItWorks/MRStatusBody",
    sinceVersion: "2.0.0",
  },
  {
    image: HowItWorksCIStatusImage,
    headingKey: "Onboarding/HowItWorks/CIStatusHeading",
    bodyKey: "Onboarding/HowItWorks/CIStatusBody",
    sinceVersion: "2.0.0",
  },
  {
    image: HowItWorksCompactImage,
    headingKey: "Onboarding/HowItWorks/CompactHeading",
    bodyKey: "Onboarding/HowItWorks/CompactBody",
    sinceVersion: "2.0.0",
  },
];

const compareVersions = (a: string, b: string): number => {
  const aParts = a.split(".").map((part) => parseInt(part, 10) || 0);
  const bParts = b.split(".").map((part) => parseInt(part, 10) || 0);
  const length = Math.max(aParts.length, bParts.length);
  for (let i = 0; i < length; i += 1) {
    const diff = (aParts[i] ?? 0) - (bParts[i] ?? 0);
    if (diff !== 0) return diff;
  }
  return 0;
};

/**
 * Returns features released after the user's last seen version, capped at the
 * currently running app version so items tagged for future releases stay
 * hidden until that build ships.
 */
export const getUnseenWhatsNewFeatures = (
  lastSeenVersion: string | null,
): WhatsNewFeature[] => {
  const floor = lastSeenVersion ?? "1.15.0";
  const ceiling = AppModule.APP_VERSION;
  return whatsNewFeatures.filter(
    (feature) =>
      compareVersions(feature.sinceVersion, floor) > 0 &&
      compareVersions(feature.sinceVersion, ceiling) <= 0,
  );
};
