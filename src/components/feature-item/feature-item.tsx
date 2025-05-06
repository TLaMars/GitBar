import React from "react";
import { Image, ImageSourcePropType, View } from "react-native";
import { useStyles } from "react-native-unistyles";

import Body from "components/body/body";
import Heading from "components/heading/heading";

import styles from "./feature-item.styles";

type Props = {
  image: ImageSourcePropType;
  heading: string;
  body: string;
};

const FeatureItem: React.FC<Props> = ({ image, heading, body }) => {
  const { styles: $ } = useStyles(styles);

  return (
    <View style={$.container}>
      <Image style={$.image} source={image} accessibilityIgnoresInvertColors />
      <View style={$.content}>
        <Heading size="x2s">{heading}</Heading>
        <Body size="s">{body}</Body>
      </View>
    </View>
  );
};

export default FeatureItem;
