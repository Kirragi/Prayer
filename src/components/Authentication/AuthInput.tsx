import React, { useState } from 'react';
import { InputAuth } from '../../styles/components/AuthStyle';
import { FieldRenderProps } from 'react-final-form';
import { View, Text } from 'react-native';

interface AuthInput extends FieldRenderProps<string> {
  lable: string;
  secureTextEntry?: boolean;
  valid(val: string): { errorExists: boolean; errorText: string };
  onChangeText(val: string): void;
  errorExists: boolean;
  errorText: string;
}
const AuthInput: React.FC<AuthInput> = (props) => {
  const [error, setError] = useState({
    errorExists: false,
    errorText: '',
  });
  const [text, setText] = useState('');
  return (
    <View>
      <InputAuth
        placeholder={props.lable}
        secureTextEntry={props.secureTextEntry}
        onChangeText={(text: string) => {
          setText(text);
          props.onChangeText(text);
        }}
        onBlur={() => {
          const error = props.valid(text);
          setError({
            errorExists: error.errorExists,
            errorText: error.errorText,
          });
        }}
      />
      <Text>{error.errorText} </Text>
    </View>
  );
};
export default AuthInput;
