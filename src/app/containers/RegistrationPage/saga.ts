import { call, put, takeLatest, select } from 'redux-saga/effects';
import { actions } from './slice';
import api from 'utils/api';
import i18n from 'i18next';
import { translations } from 'locales/i18n';
import { request } from 'utils/request';
import {
  selectRegistrationPage,
  selectPinCode,
  selectPassword,
} from './selectors';
import { push } from 'connected-react-router';
import routes from 'utils/routes';

export function* register() {
  const { firstName, lastName, email, password, currency } = yield select(
    selectRegistrationPage,
  );

  const requestURL = api.auth.register;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ firstName, lastName, email, password, currency }),
  };

  try {
    const { userAuth } = yield call(request, requestURL, requestParameters);
    yield put(actions.registrationSuccessAction(userAuth.pinCode));
  } catch (error) {
    yield put(
      actions.registrationErrorAction(i18n.t(translations.serverError)),
    );
  }
}

export function* loginExpress() {
  const pinCode: number = yield select(selectPinCode);
  const password: string = yield select(selectPassword);

  const requestURL = api.auth.login;
  const requestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ pinCode, password }),
  };

  try {
    const response = yield call(request, requestURL, requestParameters);
    yield put(actions.loginExpressSuccessAction(response));
    yield put(push(routes.dashboard.path));
  } catch (error) {
    yield put(
      actions.loginExpressErrorAction(i18n.t(translations.serverError)),
    );
  }
}

export function* registrationPageSaga() {
  yield takeLatest(actions.registrationRequestAction.type, register);
  yield takeLatest(actions.loginExpressRequestAction.type, loginExpress);
}
