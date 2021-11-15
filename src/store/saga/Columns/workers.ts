import { call, put } from 'redux-saga/effects';
import {
    deleteColumnAction,
    requestCreateColumnAction,
    responseCreateColumnAction,
    responseGetColumnsAction,
    updateColumnTitleAction,
} from '../Columns/actions';
import {
    createColumn,
    deleteColumn,
    getColumns,
    updateColumn,
} from '../../../api/Columns/requests';
import { setColumnsLoaderAction } from '../Loader/actions';

export function* getColumnsWorkSaga() {
    yield put({
        type: setColumnsLoaderAction.type,
        payload: {
            newValue: true,
        },
    });

    const { data } = yield call(getColumns);
    yield put({
        type: responseGetColumnsAction.type,
        payload: data,
    });

    yield put({
        type: setColumnsLoaderAction.type,
        payload: {
            newValue: false,
        },
    });
}

export function* createColumnWorkSaga({
    payload,
}: ReturnType<typeof requestCreateColumnAction>) {
    yield put({
        type: setColumnsLoaderAction.type,
        payload: {
            newValue: true,
        },
    });

    const { data } = yield call(createColumn, payload.title);
    yield put({
        type: responseCreateColumnAction.type,
        payload: {
            id: data.id,
            title: data.title,
            description: data.description,
            userId: data.userId,
        },
    });

    yield put({
        type: setColumnsLoaderAction.type,
        payload: {
            newValue: false,
        },
    });
}

export function* deleteColumnWorkSaga({
    payload,
}: ReturnType<typeof deleteColumnAction>) {
    const { data } = yield call(deleteColumn, payload.id);
}

export function* updateColumnTitleWorkSaga({
    payload,
}: ReturnType<typeof updateColumnTitleAction>) {
    const { data } = yield call(updateColumn, payload.id, payload.title);
}