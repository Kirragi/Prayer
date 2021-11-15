import { takeLatest } from 'redux-saga/effects';
import {
    requestGetPrayerAction,
    requestCreatePrayerAction,
    deletePrayerAction,
    updatePrayerCheckedAction
} from './actions';
import { getPrayerWorkSaga, createPrayerWorkSaga, deletePrayerWorkSaga, updatePrayerCheckedWorkSaga } from './workers';

export function* prayerWatchSaga() {
    yield takeLatest(requestGetPrayerAction, getPrayerWorkSaga);
    yield takeLatest(requestCreatePrayerAction, createPrayerWorkSaga);
    yield takeLatest(deletePrayerAction, deletePrayerWorkSaga);
    yield takeLatest(updatePrayerCheckedAction, updatePrayerCheckedWorkSaga);
}

