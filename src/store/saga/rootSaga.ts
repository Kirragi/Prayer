import { all } from 'redux-saga/effects';
import { userWatchSaga } from './User/watchers';

export default function* rootSaga() {
    yield all([userWatchSaga()]);
}
