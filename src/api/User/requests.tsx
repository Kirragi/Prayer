import { api } from '..';
import { SIGN_IN_LINK, SIGN_UP_LINK } from '../constants';

export async function signIn(email: string, password: string) {
  return await api
    .post(SIGN_IN_LINK, {
      email: email,
      password: password,
    })
    .catch((error) => {
      return error;
    });
}

export async function signUp(email: string, name: string, password: string) {
  return await api
    .post(SIGN_UP_LINK, {
      email: email,
      name: name,
      password: password,
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
}
