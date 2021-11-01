import React from 'react';
import { InputAuth } from '../../styles/components/AuthStyle';

export function InputPass() {
  const [password, onChangePassword] = React.useState('');
  return (
    <InputAuth
      onChangeText={onChangePassword}
      value={password}
      placeholder="Password"
      secureTextEntry={true}
    />
  );
}
