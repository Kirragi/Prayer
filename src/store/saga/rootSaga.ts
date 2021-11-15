import { all } from 'redux-saga/effects';
import { userWatchSaga } from './User/watchers';
import { columnsWatchSaga } from './Columns/watchers';
import { prayerWatchSaga } from './Prayer/watchers';
import { commentsWatchSaga } from './Comments/watchers';

export default function* rootSaga() {
    yield all([
        userWatchSaga(),
        columnsWatchSaga(),
        prayerWatchSaga(),
        commentsWatchSaga(),
    ]);
}
