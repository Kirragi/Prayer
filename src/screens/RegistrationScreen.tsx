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
import { useDispatch } from 'react-redux';
import { registrationScreenProp } from '../types';
import { requestSignUpActionCreator } from '../store/saga/User/actions';
function Registration() {
  const navigations = useNavigation<registrationScreenProp>();
  const dispatch = useDispatch();
  return (
    <MainContainer>
      <ProfileImg />
      <AurhText>Registration</AurhText>
      <InputLogin />
      <InputPass />
      <InputPass />
      <ButtonContainer>
        <ButtonSign
          onPress={() =>
            dispatch(
              requestSignUpActionCreator({
                email: 'zhurba2001012@mail.ru',
                name: 'Kirragi',
                password: 'jonceglaa01',
              }),
            )
          }>
          <SignText>Registration</SignText>
        </ButtonSign>
        <ButtonReg onPress={() => navigations.navigate('Authentication')}>
          <RegText>Sign in </RegText>
        </ButtonReg>
      </ButtonContainer>
    </MainContainer>
  );
}
export default Registration;
