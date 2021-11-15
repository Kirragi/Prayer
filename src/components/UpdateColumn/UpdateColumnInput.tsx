import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { ColumnInput } from '../../styles/components/ColumnActionsStyle';
interface CulumnInput extends FieldRenderProps<string> {
  onChangeText(val: string): void;
  value: string;
  title: string;
}
const UpdateColumnInput: React.FC<CulumnInput> = (props) => {
  return (
    <ColumnInput
      placeholder="New name column"
      defaultValue={props.title}
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};
export default UpdateColumnInput;
