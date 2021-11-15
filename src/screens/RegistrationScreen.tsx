import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  ButtonSign,
  ButtonReg,
  ButtonContainer,
  MainContainer,
  SvgContainer,
  AuthText,
  SignText,
  RegText,
} from '../styles/components/AuthStyle';
import {
  validationEmail,
  validationPass,
  validationName,
} from '../store/validation';
import { Form, Field } from 'react-final-form';
import { useDispatch, useSelector } from 'react-redux';
import { registrationScreenProp } from '../types/navigationsType';
import { requestSignUpAction } from '../store/saga/User/actions';
import SvgProfile from '../assets/svg/profile';
import { Text, View } from 'react-native';
import AuthInput from '../components/Authentication/AuthInput';
import { slelectUser } from '../store/saga/User/reducer';
function Registration() {
  const navigations = useNavigation<registrationScreenProp>();
  const dispatch = useDispatch();
  const user = useSelector(slelectUser);
  const [email, onChangeEmail] = React.useState('');
  const [name, onChangeName] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  function onSubmit() {
    if (
      !validationPass(password).errorExists &&
      !validationEmail(email).errorExists &&
      !validationName(name).errorExists
    ) {
      dispatch(
        requestSignUpAction({
          email: email,
          name: name,
          password: password,
        }),
      );
    }
  }
  return (
    <MainContainer>
      <SvgContainer>
        <SvgProfile />
      </SvgContainer>
      <AuthText>Registration</AuthText>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => (
          <View>
            <Field
              name="email"
              lable="Email"
              component={AuthInput}
              valid={validationEmail}
              onChangeText={(val: string) => {
                onChangeEmail(val);
              }}
            />
            <Field
              name="name"
              lable="Name"
              component={AuthInput}
              valid={validationName}
              onChangeText={(val: string) => {
                onChangeName(val);
              }}
            />
            <Field
              name="passwprd"
              lable="Passwprd"
              component={AuthInput}
              secureTextEntry={true}
              valid={validationPass}
              onChangeText={(val: string) => {
                onChangePassword(val);
              }}
              errorExists={user.errorExists}
              errorText={user.errorText}
            />
            <ButtonContainer>
              <ButtonSign onPress={handleSubmit}>
                <SignText>Registration</SignText>
              </ButtonSign>
              <ButtonReg onPress={() => navigations.navigate('Authentication')}>
                <RegText>Sign in </RegText>
              </ButtonReg>
            </ButtonContainer>
            <Text>{user.errorText}</Text>
          </View>
        )}
      />
    </MainContainer>
  );
}
export default Registration;
