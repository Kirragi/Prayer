import { call, put } from 'redux-saga/effects';
import {
    responseGetPrayerAction,
    responseCreatePrayerAction,
    requestCreatePrayerAction,
    deletePrayerAction,
    updatePrayerCheckedAction
} from './actions';
import { getPrayer, createPrayer, deletePrayer, updatePrayer } from '../../../api/Prayer/requests';
import { setPrayerLoaderAction } from '../Loader/actions';

export function* getPrayerWorkSaga() {
    yield put({
        type: setPrayerLoaderAction.type,
        payload: { newValue: true, },
    });
    const { data } = yield call(getPrayer);
    yield put({
        type: responseGetPrayerAction.type,
        payload: data,
    });
    yield put({
        type: setPrayerLoaderAction.type,
        payload: { newValue: false, },
    });
}

export function* createPrayerWorkSaga({
    payload,
}: ReturnType<typeof requestCreatePrayerAction>) {
    yield put({
        type: setPrayerLoaderAction.type,
        payload: { newValue: true, },
    });
    const { data } = yield call(
        createPrayer,
        payload.columnId,
        payload.title
    );
    if (data) {
        yield put({
            type: responseCreatePrayerAction.type,
            payload: {
                id: data.id,
                title: data.title,
                description: data.description,
                checked: data.checked,
                columnId: data.columnId,
            },
        });
    } else { }
    yield put({
        type: setPrayerLoaderAction.type,
        payload: { newValue: false, },
    });
}
export function* deletePrayerWorkSaga({
    payload,
}: ReturnType<typeof deletePrayerAction>) {
    const { data } = yield call(deletePrayer, payload.id);
}
export function* updatePrayerCheckedWorkSaga({
    payload,
}: ReturnType<typeof updatePrayerCheckedAction>) {
    const { data } = yield call(updatePrayer, payload.id, payload.title, payload.checked);
}