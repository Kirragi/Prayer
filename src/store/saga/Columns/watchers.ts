import { takeLatest } from 'redux-saga/effects';
import {
    deleteColumnAction,
    requestCreateColumnAction,
    requestGetColumnsAction,
    updateColumnTitleAction,
} from '../Columns/actions';
import {
    createColumnWorkSaga,
    deleteColumnWorkSaga,
    getColumnsWorkSaga,
    updateColumnTitleWorkSaga,
} from './workers';

export function* columnsWatchSaga() {
    yield takeLatest(requestGetColumnsAction, getColumnsWorkSaga);
    yield takeLatest(deleteColumnAction, deleteColumnWorkSaga);
    yield takeLatest(requestCreateColumnAction, createColumnWorkSaga);
    yield takeLatest(updateColumnTitleAction, updateColumnTitleWorkSaga);
}
