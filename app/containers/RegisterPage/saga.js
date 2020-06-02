import { call, put, select, takeLatest, delay } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { emailValidation } from 'helpers';
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { push } from 'connected-react-router';
import messages from './messages';
import {
  GET_CURRENCIES_REQUEST,
  REGISTER_REQUEST,
  CHECK_EMAIL_REQUEST,
  LOGIN_EXPRESS,
} from './constants';
import {
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  registerSuccessAction,
  registerErrorAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
  checkEmailInvalidAction,
} from './actions';
import {
  makeSelectFirstName,
  makeSelectEmail,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectCurrency,
  makeSelectPinCode,
} from './selectors';
import { loginSuccessAction, loginErrorAction } from '../LoginPage/actions';

export function* getCurrencies() {
  const requestURL = api.currencies;

  try {
    const { data } = yield call(request, requestURL);
    yield put(getCurrenciesSuccessAction(data));
  } catch (error) {
    const message = <FormattedMessage {...messages.serverError} />;
    yield put(getCurrenciesErrorAction(message));
  }
}

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

export function* checkEmail({ value, reject, resolve }) {
  const requestURL = api.users('checkEmail')(value);

  if (!value) {
    yield call(resolve);
  }

  if (emailValidation(value)) {
    try {
      yield delay(400);
      const { exist } = yield call(request, requestURL);
      yield put(checkEmailSuccessAction(exist));

      if (exist) {
        yield call(reject);
      } else {
        yield call(resolve);
      }
    } catch (error) {
      const message = <FormattedMessage {...messages.serverError} />;
      yield put(checkEmailErrorAction(message));
    }
  } else {
    yield put(checkEmailInvalidAction());
    yield call(resolve);
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
    yield put(loginSuccessAction(user, token));
    yield put(push(routes.dashboard.path));
  } catch (error) {
    const message = <FormattedMessage {...messages.serverError} />;
    yield put(loginErrorAction(message));
  }
}

export default function* registerPageSaga() {
  yield takeLatest(GET_CURRENCIES_REQUEST, getCurrencies);
  yield takeLatest(REGISTER_REQUEST, register);
  yield takeLatest(CHECK_EMAIL_REQUEST, checkEmail);
  yield takeLatest(LOGIN_EXPRESS, loginExpress);
}
