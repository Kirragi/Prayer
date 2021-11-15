import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { ColumnInput } from '../../styles/components/ColumnActionsStyle';
interface CulumnInput extends FieldRenderProps<string> {
  onChangeText(val: string): void;
  value: string;
}
const CreateColumnInput: React.FC<CulumnInput> = (props) => {
  return (
    <ColumnInput
      placeholder="Name column..."
      value={props.value}
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};
export default CreateColumnInput;
