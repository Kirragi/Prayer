import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { PrayerInput } from '../../styles/components/PrayerStyle';
interface PrayerInput extends FieldRenderProps<string> {
  onChangeText(val: string): void;
  value: string;
  title: string;
}

const AddPrayerInput: React.FC<PrayerInput> = (props) => {
  return (
    <PrayerInput
      placeholder="Add a prayer..."
      defaultValue={props.title}
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};
export default AddPrayerInput;
