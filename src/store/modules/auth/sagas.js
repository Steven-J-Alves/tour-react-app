import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSucess, signFailure } from './actions';

/* TODO: Test Functions */
export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'users/login', {
      email,
      password,
    });

    const { token, data } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSucess(token, data.user));

    history.push('/');
    toast.success('Login success!');
  } catch (err) {
    toast.error('Login fail, email or password incorrect');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password, confirmPassword } = payload;

    yield call(api.post, 'users/signup', {
      name,
      email,
      password,
      passwordConfirm: confirmPassword,
    });

    history.push('/signin');
    toast.success('Registration success!');
  } catch (err) {
    toast.error('Registration fail, verify your data!');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/signin');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
