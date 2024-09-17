import React from "react";
import { View } from "react-native";

import Body from "components/body/body";
import Heading from "components/heading/heading";
import useTranslation from "hooks/use-translation";

import useStyles from "./error-container.styles";

type Props = {
  errors: Error[];
};

const ErrorContainer: React.FC<Props> = ({ errors }) => {
  const $ = useStyles();
  const { t } = useTranslation();

  return (
    <View style={$.errorContainer}>
      <Heading size="x2s">{t("ErrorContainer/Heading/Error")}</Heading>
      {errors.map((error) => (
        <Body key={error.message} size="xs">
          ⏺︎ {error.message}
        </Body>
      ))}
    </View>
  );
};

export default ErrorContainer;
