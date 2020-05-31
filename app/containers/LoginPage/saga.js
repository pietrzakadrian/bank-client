import React from 'react';
import { takeLatest, call, put, select } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { api, request, routes } from 'utils';
import { FormattedMessage } from 'react-intl';
import { LOGIN_REQUEST } from './constants';
import { makeSelectPassword, makeSelectPinCode } from './selectors';
import { loginSuccessAction, loginErrorAction } from './actions';
import messages from './messages';

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
    yield put(push(routes.dashboard.path));
  } catch (error) {
    let message;

    switch (error.statusCode) {
      case 404:
        message = (
          <FormattedMessage
            {...messages.accountNotFound}
            values={{ pinCode }}
          />
        );
        break;
      case 403:
        message = <FormattedMessage {...messages.passwordInvalid} />;
        break;
      default:
        message = <FormattedMessage {...messages.serverError} />;
        break;
    }

    yield put(loginErrorAction(message));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_REQUEST, login);
}
