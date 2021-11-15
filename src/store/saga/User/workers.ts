import { call, put } from 'redux-saga/effects';
import {
    signInAction,
    requestSignInAction,
    requestSignUpAction,
    signUpAction,
    onErrorAction,
} from '../User/actions';
import { signIn, signUp } from '../../../api/User/requests';
import { setUserLoaderAction } from '../Loader/actions';

export function* userSignInWorkSaga({
    payload,
}: ReturnType<typeof requestSignInAction>) {
    yield put({
        type: setUserLoaderAction.type,
        payload: {
            newValue: true,
        },
    });
    const { data } = yield call(signIn, payload.email, payload.password);
    if (data.name === 'EntityNotFound') {
        yield put({
            type: onErrorAction.type,
            payload: {
                errorExists: true,
                errorText: 'Неправильное имя пользователя или пароль',
            },
        });
        yield put({
            type: setUserLoaderAction.type,
            payload: {
                newValue: false,
            },
        });
    } else {
        yield put({
            type: onErrorAction.type,
            payload: {
                errorExists: false,
                errorText: '',
            },
        });
        yield put({
            type: signInAction.type,
            payload: {
                logged: true,
                userId: data.id,
                userEmail: data.email,
                userName: data.name,
                userToken: data.token,
                errorExists: false,
                errorText: '',
            },
        });
        yield put({
            type: setUserLoaderAction.type,
            payload: {
                newValue: false,
            },
        });
    }
}

export function* userSignUpWorkSaga({
    payload,
}: ReturnType<typeof requestSignUpAction>) {
    const { data } = yield call(
        signUp,
        payload.email,
        payload.name,
        payload.password,
    );

    if (data.severity === 'ERROR') {
        yield put({
            type: onErrorAction.type,
            payload: {
                errorExists: true,
                errorText: 'Пользователь уже зарегистрирован',
            },
        });
    } else {
        yield put({
            type: onErrorAction.type,
            payload: {
                errorExists: false,
                errorText: '',
            },
        });
        yield put({

            type: signUpAction.type,
            payload: {
                logged: true,
                userId: data.id,
                userEmail: data.email,
                userName: data.name,
                userToken: data.token,
                userPass: data.password,
            },
        });
    }
}
