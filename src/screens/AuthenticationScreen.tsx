import React from 'react';
import { useNavigation } from '@react-navigation/core';
import {
  ButtonSign,
  ButtonReg,
  ButtonContainer,
  MainContainer,
  AuthText,
  SignText,
  SvgContainer,
  RegText,
} from '../styles/components/AuthStyle';
import { Text, View } from 'react-native';
import AuthInput from '../components/Authentication/AuthInput';
import { authenticationScreenProp } from '../types/navigationsType';
import { requestSignInAction } from '../store/saga/User/actions';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Field } from 'react-final-form';
import { validationEmail, validationPass } from '../store/validation';
import { slelectUser } from '../store/saga/User/reducer';
import { slelectUserLoader } from '../store/saga/Loader/reducer';
import SvgProfile from '../assets/svg/profile';
function Authentication() {
  const user = useSelector(slelectUser);
  const userLoader = useSelector(slelectUserLoader);
  const [email, onChangeEmail] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  const dispatch = useDispatch();
  const navigations = useNavigation<authenticationScreenProp>();
  function onSubmit() {
    if (
      !validationPass(password).errorExists &&
      !validationEmail(email).errorExists
    ) {
      dispatch(
        requestSignInAction({
          email: email,
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
      <AuthText>Authorization</AuthText>
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
                <SignText>{userLoader ? 'load...' : 'Sign in'}</SignText>
              </ButtonSign>
              <ButtonReg onPress={() => navigations.navigate('Registration')}>
                <RegText>Registration </RegText>
              </ButtonReg>
            </ButtonContainer>
            <Text>{user.errorText}</Text>
          </View>
        )}
      />
    </MainContainer>
  );
}
export default Authentication;
