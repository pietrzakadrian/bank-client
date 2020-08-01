import { actions } from './slice';
import { call, put, takeLatest, delay } from 'redux-saga/effects';
import api, { EndpointNames } from 'utils/api';
import i18n from 'i18next';
import { translations } from 'locales/i18n';
import { request } from 'utils/request';
import { emailValidation } from 'utils/helpers';

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

export function* appSaga() {
  yield takeLatest(actions.getCurrenciesRequestAction.type, getCurrencies);
  yield takeLatest(actions.checkEmailRequestAction.type, checkEmail);
}
