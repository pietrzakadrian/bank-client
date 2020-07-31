import { actions } from './slice';
import { call, put, takeLatest } from 'redux-saga/effects';
import api from 'utils/api';
import i18n from 'i18next';
import { translations } from 'locales/i18n';
import { request } from 'utils/request';

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

export function* appSaga() {
  yield takeLatest(actions.getCurrenciesRequestAction.type, getCurrencies);
}
