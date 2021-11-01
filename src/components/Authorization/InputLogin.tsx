import React from 'react';
import { InputAuth } from '../../styles/components/AuthStyle';

export function InputLogin() {
  const [login, onChangeLogin] = React.useState('');
  return (
    <InputAuth onChangeText={onChangeLogin} value={login} placeholder="Login" />
  );
}
