import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  ButtonSign,
  ButtonReg,
  ButtonContainer,
  MainContainer,
  AurhText,
  SignText,
  RegText,
} from '../styles/components/AuthStyle';
import { ProfileImg } from '../components/Authorization/ProfileImg';
import { InputLogin } from '../components/Authorization/InputLogin';
import { InputPass } from '../components/Authorization/InputPass';
import { authenticationScreenProp } from '../types';

function Authentication() {
  const navigations = useNavigation<authenticationScreenProp>();
  return (
    <MainContainer>
      <ProfileImg />
      <AurhText>Authorization</AurhText>
      <InputLogin />
      <InputPass />
      <ButtonContainer>
        <ButtonSign>
          <SignText>Sign in</SignText>
        </ButtonSign>
        <ButtonReg onPress={() => navigations.navigate('Registration')}>
          <RegText>Registration </RegText>
        </ButtonReg>
      </ButtonContainer>
    </MainContainer>
  );
}
export default Authentication;
