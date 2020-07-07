import { takeLatest, call, put, select, delay } from 'redux-saga/effects';
import { api, request, routes } from 'utils';
import { push } from 'connected-react-router';
import {
  makeSelectToken,
  makeSelectOpenedMessage,
  makeSelectMessages,
  makeSelectUser,
} from 'containers/App/selectors';
import { FormattedMessage } from 'react-intl';
import { emailValidation } from 'helpers';
import React from 'react';
import {
  LOGOUT_REQUEST,
  GET_CURRENCIES_REQUEST,
  CHECK_EMAIL_REQUEST,
  GET_MESSAGES_REQUEST,
  READ_ALL_MESSAGES_REQUEST,
  OPEN_MESSAGE_MODAL,
  GET_NOTIFICATIONS_REQUEST,
} from './constants';
import {
  logoutSuccessAction,
  logoutErrorAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
  checkEmailInvalidAction,
  getMessagesSuccessAction,
  getMessagesErrorAction,
  readAllMessagesSuccessAction,
  readAllMessagesErrorAction,
  readMessageSuccessAction,
  readMessageErrorAction,
  readMessageAction,
  getNotificationsSuccessAction,
  getNotificationsErrorAction,
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

export function* getMessages() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.messages;
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const response = yield call(request, requestURL, requestParameters);
    yield put(getMessagesSuccessAction(response));
  } catch (error) {
    yield put(getMessagesErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export function* readAllMessages() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.messages;
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
    yield put(readAllMessagesSuccessAction());
  } catch (error) {
    yield put(readAllMessagesErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export function* openMessageModal({ uuid }) {
  const { data } = yield select(makeSelectMessages());
  const isReadedMessage = data.find((message) => message.uuid === uuid).readed;

  if (!isReadedMessage) {
    yield call(readMessage);
  }
}

export function* readMessage() {
  const { accessToken } = yield select(makeSelectToken());
  const openedMessage = yield select(makeSelectOpenedMessage());
  const requestURL = api.messages;
  const requestParameters = {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ uuid: openedMessage }),
  };

  try {
    yield put(readMessageAction());
    yield call(request, requestURL, requestParameters);
    yield put(readMessageSuccessAction());
  } catch (error) {
    yield put(readMessageErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export function* getNotifications() {
  const { accessToken } = yield select(makeSelectToken());
  const user = yield select(makeSelectUser());
  const requestURL = `${api.notifications}?take=${user?.userConfig?.notificationCount}&order=DESC`;

  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const response = yield call(request, requestURL, requestParameters);
    yield put(getNotificationsSuccessAction(response));
  } catch (error) {
    yield put(getNotificationsErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGOUT_REQUEST, logout);
  yield takeLatest(GET_CURRENCIES_REQUEST, getCurrencies);
  yield takeLatest(CHECK_EMAIL_REQUEST, checkEmail);
  yield takeLatest(GET_MESSAGES_REQUEST, getMessages);
  yield takeLatest(READ_ALL_MESSAGES_REQUEST, readAllMessages);
  yield takeLatest(OPEN_MESSAGE_MODAL, openMessageModal);
  yield takeLatest(GET_NOTIFICATIONS_REQUEST, getNotifications);
}
