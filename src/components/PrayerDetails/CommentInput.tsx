import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { CommentInput } from '../../styles/components/PrayerDetailsStyle';
interface CommentInput extends FieldRenderProps<string> {
  onChangeText(val: string): void;
  value: string;
  title: string;
}
const AddCommentInput: React.FC<CommentInput> = (props) => {
  return (
    <CommentInput
      placeholder="Add a comment..."
      defaultValue={props.title}
      onChangeText={(text: string) => {
        props.onChangeText(text);
      }}
    />
  );
};
export default AddCommentInput;
