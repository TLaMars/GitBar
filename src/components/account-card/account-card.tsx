import React from "react";
import { View } from "react-native";

import Attendee from "components/attendee/attendee";
import Body from "components/body/body";
import Heading from "components/heading/heading";
import Icon from "components/icon/icon";
import IconButton from "components/icon-button/icon-button";
import AccountMap from "constants/account-map";
import { AccountType } from "models/account";

import useStyles from "./account-card.styles";

type Props = {
  type: AccountType;
  userName: string;
  avatarUrl: string;
  name?: string;
  border?: boolean;
  onDeletePress: () => void;
};

const AccountCard: React.FC<Props> = ({
  type,
  userName,
  avatarUrl,
  name,
  border = true,
  onDeletePress,
}) => {
  const $ = useStyles();

  const typeIcon = AccountMap[type];

  return (
    <View style={[$.card, border && $.border]}>
      <View>
        <Attendee avatarUrl={avatarUrl} size={36} />
        <View style={$.type}>
          <Icon name={typeIcon} size={18} />
        </View>
      </View>
      <View style={$.info}>
        <Heading size="x2s">{userName}</Heading>
        {name && <Body size="xs">{name}</Body>}
      </View>
      <View style={$.right}>
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
