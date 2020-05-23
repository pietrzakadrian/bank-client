import { takeEvery, call, put, select } from 'redux-saga/effects';
import { makeSelectToken } from 'containers/App/selectors';
import { api, request } from 'utils';
import {
  GET_AMOUNT_MONEY,
  GET_ACCOUNT_BALANCE_HISTORY,
  GET_BILLS,
} from './constants';
import {
  getAmountMoneySuccessAction,
  getAmountMoneyErrorAction,
  getAccountBalanceHistorySuccessAction,
  getAccountBalanceHistoryErrorAction,
  getBillsSuccessAction,
  getBillsErrorAction,
} from './actions';

export function* getAmountMoney() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.bills('amountMoney');
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { amountMoney, currencyName } = yield call(
      request,
      requestURL,
      requestParameters,
    );
    yield put(getAmountMoneySuccessAction(amountMoney, currencyName));
  } catch (error) {
    yield put(getAmountMoneyErrorAction(error));
  }
}

export function* getAccountBalanceHistory() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.bills('accountBalanceHistory');
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { accountBalanceHistory } = yield call(
      request,
      requestURL,
      requestParameters,
    );
    yield put(getAccountBalanceHistorySuccessAction(accountBalanceHistory));
  } catch (error) {
    yield put(getAccountBalanceHistoryErrorAction(error));
  }
}

export function* getBills() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.bills();
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { data } = yield call(request, requestURL, requestParameters);
    yield put(getBillsSuccessAction(data));
  } catch (error) {
    yield put(getBillsErrorAction(error));
  }
}

export default function* dashboardPageSaga() {
  yield takeEvery(GET_AMOUNT_MONEY, getAmountMoney);
  yield takeEvery(GET_ACCOUNT_BALANCE_HISTORY, getAccountBalanceHistory);
  yield takeEvery(GET_BILLS, getBills);
}
