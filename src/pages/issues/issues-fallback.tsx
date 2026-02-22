import React from "react";
import { View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import Button from "components/button/button";
import Heading from "components/heading/heading";
import Spacer from "components/spacer/spacer";

import styles from "./issues.styles";

export type FallbackProps = {
  heading: string;
  body: string;
  action?: string;
  actionAnalyticsLabel?: string;
  onPress?: () => void;
};

const IssuesFallback: React.FC<FallbackProps> = ({
  heading,
  body,
  action,
  actionAnalyticsLabel,
  onPress,
}) => {
  const { styles: $ } = useStyles(styles);

  return (
    <View style={$.fallback}>
      <Heading size="s">{heading}</Heading>
      <Spacer mt={1} />
      <Body color="textSecondary" size="s">
        {body}
      </Body>
      {action && actionAnalyticsLabel && onPress && (
        <>
          <Spacer mt={3} />
          <Button
            analyticsLabel={actionAnalyticsLabel}
            size="xs"
            label={action}
            onPress={onPress}
          />
        </>
      )}
    </View>
  );
};

export default IssuesFallback;
