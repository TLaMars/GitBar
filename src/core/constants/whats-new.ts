import { ImageSourcePropType } from "react-native";

import HowItWorksCompactImage from "assets/illustrations/onboarding/how-it-works-compact.jpg";
import HowItWorksMergeImage from "assets/illustrations/onboarding/how-it-works-merge.jpg";
import HowItWorksNeedsYouImage from "assets/illustrations/onboarding/how-it-works-needs-you.jpg";
import HowItWorksSnoozeHideImage from "assets/illustrations/onboarding/how-it-works-snooze-hide.jpg";
import HowItWorksStatusImage from "assets/illustrations/onboarding/how-it-works-status.jpg";
import HowItWorksUrgencyDotImage from "assets/illustrations/onboarding/how-it-works-urgency-dot.jpg";
import NotificationImage from "assets/illustrations/onboarding/notification.jpg";
import { TranslationKey } from "contexts/intl";
import AppModule from "modules/app-module";

export const WHATS_NEW_ITEMS_PER_PAGE = 3;
// The popover card is shorter than the onboarding window; three items clip the heading and button.
export const WHATS_NEW_MODAL_ITEMS_PER_PAGE = 2;

export type WhatsNewFeature = {
  image: ImageSourcePropType;
  headingKey: TranslationKey;
  bodyKey: TranslationKey;
  sinceVersion: string;
};

export const whatsNewFeatures: WhatsNewFeature[] = [
  {
    image: HowItWorksNeedsYouImage,
    headingKey: "Onboarding/HowItWorks/NeedsYouHeading",
    bodyKey: "Onboarding/HowItWorks/NeedsYouBody",
    sinceVersion: "2.1.0",
  },
  {
    image: HowItWorksMergeImage,
    headingKey: "Onboarding/HowItWorks/MergeHeading",
    bodyKey: "Onboarding/HowItWorks/MergeBody",
    sinceVersion: "2.1.0",
  },
  {
    image: HowItWorksUrgencyDotImage,
    headingKey: "Onboarding/HowItWorks/UrgencyDotHeading",
    bodyKey: "Onboarding/HowItWorks/UrgencyDotBody",
    sinceVersion: "2.1.0",
  },
  {
    image: HowItWorksSnoozeHideImage,
    headingKey: "Onboarding/HowItWorks/SnoozeHideHeading",
    bodyKey: "Onboarding/HowItWorks/SnoozeHideBody",
    sinceVersion: "2.1.0",
  },
  {
    image: NotificationImage,
    headingKey: "Onboarding/HowItWorks/NotificationsHeading",
    bodyKey: "Onboarding/HowItWorks/NotificationsBody",
    sinceVersion: "2.1.0",
  },
  {
    image: HowItWorksStatusImage,
    headingKey: "Onboarding/HowItWorks/StatusHeading",
    bodyKey: "Onboarding/HowItWorks/StatusBody",
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
