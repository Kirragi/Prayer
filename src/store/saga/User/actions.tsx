import { userSlice } from './reducer';

export const {
  signIn: signInAction,
  signUp: signUpAction,
  requestSignIn: requestSignInAction,
  requestSignUp: requestSignUpAction,
  onError: onErrorAction,
  logOut: logOutAction,
} = userSlice.actions;
