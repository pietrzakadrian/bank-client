import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { selectPinCode, selectPassword } from './selectors';
import { actions } from './slice';
import api from 'utils/api';
import { translations } from 'locales/i18n';
import i18n from 'i18next';

interface IRequestParameters {
  method?: string;
  headers?: any;
  body?: string;
}

export function* login() {
  const pinCode: number = yield select(selectPinCode);
  const password: string = yield select(selectPassword);

  const requestURL: string = api.auth.login;
  const requestParameters: IRequestParameters = {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({ pinCode, password }),
  };

  try {
    const response = yield call(request, requestURL, requestParameters);
    yield put(actions.loginSuccessAction(response));
  } catch (error) {
    if (error.response?.status) {
      yield put(actions.loginErrorAction(i18n.t(translations.serverError)));
    } else {
      yield put(actions.loginErrorAction(i18n.t(translations.serverError)));
    }
  }
}

export function* loginPageSaga() {
  yield takeLatest(actions.loginRequestAction.type, login);
}
