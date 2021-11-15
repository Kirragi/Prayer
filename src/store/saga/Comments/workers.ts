import { call, put } from 'redux-saga/effects';
import {
    createComment,
    deleteComment,
    getComments,
} from '../../../api/Comments/requests';
import { setCommentsLoaderAction } from '../Loader/actions';
import {
    deleteCommentAction,
    requestCreateCommentAction,
    responseCreateCommentAction,
    responseGetCommentsAction,
} from './actions';

export function* getCommentsWorkSaga() {
    yield put({
        type: setCommentsLoaderAction.type,
        payload: {
            newValue: true,
        },
    });
    const { data } = yield call(getComments);
    yield put({
        type: responseGetCommentsAction.type,
        payload: data,
    });
    yield put({
        type: setCommentsLoaderAction.type,
        payload: {
            newValue: false,
        },
    });
}

export function* createCommentWorkSaga({
    payload,
}: ReturnType<typeof requestCreateCommentAction>) {
    yield put({
        type: setCommentsLoaderAction.type,
        payload: {
            newValue: true,
        },
    });
    const { data } = yield call(createComment, payload.id, payload.body);
    yield put({
        type: responseCreateCommentAction.type,
        payload: {
            id: data.id,
            body: data.body,
            created: data.created,
            prayerId: data.prayerId,
            userId: data.userId,
        },
    });
    yield put({
        type: setCommentsLoaderAction.type,
        payload: {
            newValue: false,
        },
    });
}

export function* deleteCommentWorkSaga({
    payload,
}: ReturnType<typeof deleteCommentAction>) {
    const { data } = yield call(deleteComment, payload.id);
}