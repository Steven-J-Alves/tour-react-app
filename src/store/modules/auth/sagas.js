import { takeLatest, call, put, all } from 'redux-saga/effects';

import api from '../../../services/api';
import history from '../../../services/history';

import { signInSucess } from './actions';

/* TODO: Test Functions */
export function* signIn({ payload }) {
  const { email, password } = payload;

  const response = yield call(api.post, 'users/login', {
    email,
    password,
  });

  const { token, data } = response.data;

  yield put(signInSucess(token, data.user));

  history.push('/me');
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
