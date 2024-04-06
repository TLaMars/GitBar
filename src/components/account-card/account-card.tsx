import React from "react";
import { View } from "react-native";

import Attendee from "components/attendee/attendee";
import Body from "components/body/body";
import Heading from "components/heading/heading";
import IconButton from "components/icon-button/icon-button";
import AccountMap from "constants/account-map";
import useTheme from "hooks/use-theme";
import { AccountType } from "models/account";

import useStyles from "./account-card.styles";

type Props = {
  type: AccountType;
  userName: string;
  avatarUrl?: string;
  name?: string;
  border?: boolean;
  aditionalInfo?: string;
  onDeletePress: () => void;
};

const AccountCard: React.FC<Props> = ({
  type,
  userName,
  avatarUrl,
  name,
  border = true,
  aditionalInfo,
  onDeletePress,
}) => {
  const $ = useStyles();
  const { colors } = useTheme();

  const TypeIcon = AccountMap[type];

  return (
    <View style={[$.card, border && $.border]}>
      <View>
        <Attendee name={name ?? userName} avatarUrl={avatarUrl} size={36} />
        <View style={$.type}>
          <TypeIcon width={18} height={18} color={colors.text} />
        </View>
      </View>
      <View style={$.info}>
        <Heading size="x2s">{userName}</Heading>
        {name && <Body size="xs">{name}</Body>}
      </View>
      <View style={$.right}>
        {aditionalInfo && <Body size="xs">{aditionalInfo}</Body>}
        <IconButton
          icon="Cross"
          spacing={4}
          onPress={onDeletePress}
          type="danger"
        />
      </View>
    </View>
  );
};

export default AccountCard;
