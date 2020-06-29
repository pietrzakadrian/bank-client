import { call, put, select, takeLatest } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { push } from 'connected-react-router';
import messages from './messages';
import { REGISTER_REQUEST, LOGIN_EXPRESS_REQUEST } from './constants';
import {
  registerSuccessAction,
  registerErrorAction,
  loginExpressErrorAction,
  loginExpressSuccessAction,
} from './actions';
import {
  makeSelectFirstName,
  makeSelectEmail,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectCurrency,
  makeSelectPinCode,
} from './selectors';

export function* register() {
  const firstName = yield select(makeSelectFirstName());
  const lastName = yield select(makeSelectLastName());
  const email = yield select(makeSelectEmail());
  const password = yield select(makeSelectPassword());
  const currency = yield select(makeSelectCurrency());

  const requestURL = api.auth.register;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password, currency }),
  };

  try {
    const {
      userAuth: { pinCode },
    } = yield call(request, requestURL, requestParameters);
    yield put(registerSuccessAction(pinCode));
  } catch (error) {
    let message;

    switch (error.statusCode) {
      case 409:
        message = <FormattedMessage {...messages.emailUnique} />;
        break;

      default:
        message = <FormattedMessage {...messages.serverError} />;
        break;
    }

    yield put(registerErrorAction(message));
  }
}

export function* loginExpress() {
  const pinCode = yield select(makeSelectPinCode());
  const password = yield select(makeSelectPassword());

  const requestURL = api.auth.login;
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ pinCode, password }),
  };

  try {
    const { user, token } = yield call(request, requestURL, requestParameters);
    yield put(loginExpressSuccessAction(user, token));
    yield put(push(routes.dashboard.path));
  } catch (error) {
    const message = <FormattedMessage {...messages.serverError} />;
    yield put(loginExpressErrorAction(message));
  }
}

export default function* registerPageSaga() {
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(LOGIN_EXPRESS_REQUEST, loginExpress);
}
