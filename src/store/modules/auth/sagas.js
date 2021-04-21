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

    yield put(signInSucess(token, data.user));

    history.push('/me');
    toast.success('Login success!');
  } catch (err) {
    toast.error('Login fail, email or password incorrect');
    yield put(signFailure());
  }
}

export default all([takeLatest('@auth/SIGN_IN_REQUEST', signIn)]);
