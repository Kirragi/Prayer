import { takeLatest } from 'redux-saga/effects';
import {
    requestGetCommentsAction,
    deleteCommentAction,
    requestCreateCommentAction,
} from './actions';
import { createCommentWorkSaga, deleteCommentWorkSaga, getCommentsWorkSaga } from './workers';

export function* commentsWatchSaga() {
    yield takeLatest(requestGetCommentsAction, getCommentsWorkSaga);
    yield takeLatest(requestCreateCommentAction, createCommentWorkSaga);
    yield takeLatest(deleteCommentAction, deleteCommentWorkSaga);
}