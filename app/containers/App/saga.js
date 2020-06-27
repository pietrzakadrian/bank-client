import { takeLatest, call, put, select } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import { makeSelectToken } from 'containers/App/selectors';
import { FormattedMessage } from 'react-intl';
import React from 'react';
import { LOGOUT_REQUEST, GET_CURRENCIES_REQUEST } from './constants';
import {
  logoutSuccessAction,
  logoutErrorAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
} from './actions';
import messages from './messages';

export function* logout() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.auth.logout;
  const requestParameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };

  try {
    yield call(request, requestURL, requestParameters);
    yield put(logoutSuccessAction());
    yield put(push(routes.home.path));
  } catch (error) {
    yield put(logoutErrorAction(error));

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.home.path));
        break;
      default:
        yield put(push(routes.login.path));
        break;
    }
  }
}

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

export default function* loginPageSaga() {
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(GET_CURRENCIES_REQUEST, getCurrencies);
}
