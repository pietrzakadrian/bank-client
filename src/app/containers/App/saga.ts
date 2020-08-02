import { actions } from './slice';
import { call, put, takeLatest, delay, select } from 'redux-saga/effects';
import api, { EndpointNames } from 'utils/api';
import i18n from 'i18next';
import { translations } from 'locales/i18n';
import { request } from 'utils/request';
import { emailValidation } from 'utils/helpers';
import { selectApp } from './selectors';
import { push } from 'connected-react-router';
import routes from 'utils/routes';

export function* logout() {
  const { accessToken } = yield select(selectApp);

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
    yield put(actions.logoutSuccessAction());
    yield put(push(routes.home.path));
  } catch (error) {
    yield put(actions.logoutErrorAction(i18n.t(translations.serverError)));
    yield put(push(routes.home.path));
  }
}

export function* getCurrencies() {
  const requestURL = api.currencies;

  try {
    const { data } = yield call(request, requestURL);
    yield put(actions.getCurrenciesSuccessAction(data));
  } catch (error) {
    yield put(
      actions.getCurrenciesErrorAction(i18n.t(translations.serverError)),
    );
  }
}

export function* checkEmail({
  payload,
}: ReturnType<typeof actions.checkEmailRequestAction>) {
  const requestURL = api.users(EndpointNames.checkEmail, payload.value);

  if (!payload.value) {
    yield call(payload.resolve);
  }

  if (emailValidation(payload.value)) {
    try {
      yield delay(400);

      const { exist } = yield call(request, requestURL);
      yield put(actions.checkEmailSuccessAction(exist));

      if (exist) {
        yield call(payload.reject);
      } else {
        yield call(payload.resolve);
      }
    } catch (error) {
      yield put(
        actions.checkEmailErrorAction(i18n.t(translations.serverError)),
      );
    }
  } else {
    yield put(actions.checkEmailInvalidAction());
    yield call(payload.resolve);
  }
}
export function* getMessages() {
  const { accessToken } = yield select(selectApp);
  const requestURL = api.messages;
  const requestParameters = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const response = yield call(request, requestURL, requestParameters);
    yield put(actions.getMessagesSuccessAction(response));
  } catch (error) {
    yield put(actions.getMessagesErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export function* getNotifications() {
  const { accessToken, user } = yield select(selectApp);
  const requestURL = `${api.notifications}?take=${user?.userConfig?.notificationCount}&order=DESC`;

  const requestParameters = {
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const response = yield call(request, requestURL, requestParameters);
    yield put(actions.getNotificationsSuccessAction(response));
  } catch (error) {
    yield put(actions.getNotificationsErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export function* appSaga() {
  yield takeLatest(actions.getCurrenciesRequestAction.type, getCurrencies);
  yield takeLatest(actions.checkEmailRequestAction.type, checkEmail);
  yield takeLatest(actions.logoutRequestAction.type, logout);
  yield takeLatest(actions.getMessagesRequestAction.type, getMessages);
  yield takeLatest(
    actions.getNotificationsRequestAction.type,
    getNotifications,
  );
}
