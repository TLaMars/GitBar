// import { Picker, PickerItemProps } from "@react-native-picker/picker";
import React from "react";

import ListItem, { ListItmeProps } from "./list-item";

type Props = {
  onValueChange: (value: string) => void;
  selectedValue: string;
  disabled?: boolean;
  width?: number;
  // pickerItems: PickerItemProps<string>[];
} & ListItmeProps;

// TODO FIX
const ListItemPicker: React.FC<Props> = ({
  label,
  onValueChange,
  selectedValue,
  border,
  // pickerItems,
  disabled,
  width = 150,
}) => (
  <ListItem label={label} border={border}>
    {/* <Picker
      enabled={!disabled}
      style={{ width }}
      selectedValue={selectedValue}
      onValueChange={(itemValue) => onValueChange(itemValue)}
    >
      {pickerItems.map((item) => (
        <Picker.Item key={item.value} label={item.label} value={item.value} />
      ))}
    </Picker> */}
  </ListItem>
);

export default ListItemPicker;
