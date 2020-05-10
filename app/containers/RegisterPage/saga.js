import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { GET_CURRENCIES } from './constants';
import {
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
} from './actions';

export function* getCurrencies() {
  const requestURL = `https://bank2.pietrzakadrian.com/api/currencies`;

  try {
    const { data } = yield call(request, requestURL);
    yield put(getCurrenciesSuccessAction(data));
  } catch (error) {
    yield put(getCurrenciesErrorAction(error));
  }
}

export default function* registerPageSaga() {
  yield takeLatest(GET_CURRENCIES, getCurrencies);
}
