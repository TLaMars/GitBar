import React from "react";

import Heading from "components/heading/heading";
import useTranslation from "hooks/use-translation";

const Test: React.FC = () => {
  const { t } = useTranslation();

  return <Heading>{t("Test/Translation/Label")}</Heading>;
};
export default Test;
