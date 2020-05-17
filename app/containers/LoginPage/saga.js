import { takeLatest, call, put, select } from 'redux-saga/effects';
import { api, request } from 'utils';
import { LOGIN } from './constants';
import { makeSelectPassword, makeSelectPinCode } from './selectors';
import { loginSuccessAction, loginErrorAction } from './actions';

export function* login() {
  const pinCode = yield select(makeSelectPinCode());
  const password = yield select(makeSelectPassword());

  const requestURL = api.auth.login;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ pinCode, password }),
  };

  try {
    const { user, token } = yield call(request, requestURL, requestParameters);
    yield put(loginSuccessAction(user, token));
  } catch (error) {
    yield put(loginErrorAction(error));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN, login);
}
