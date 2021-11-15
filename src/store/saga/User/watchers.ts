import { takeLatest } from 'redux-saga/effects';
import {
  requestSignInAction,
  requestSignUpAction,
} from './actions';
import { userSignInWorkSaga, userSignUpWorkSaga } from './workers';

export function* userWatchSaga() {
  yield takeLatest(requestSignInAction.type, userSignInWorkSaga);
  yield takeLatest(requestSignUpAction.type, userSignUpWorkSaga);
}
