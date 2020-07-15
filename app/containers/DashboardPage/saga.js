import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import {
  makeSelectToken,
  makeSelectIsCollapsedSidebar,
} from 'containers/App/selectors';
import { api, request, colors, routes } from 'utils';
import { notification } from 'antd';
import { push } from 'connected-react-router';
import {
  GET_BILLS_REQUEST,
  GET_ACCOUNT_BALANCE_REQUEST,
  GET_RECENT_TRANSACTIONS_REQUEST,
  CREATE_NEW_BILL_REQUEST,
  GET_AVAILABLE_FUNDS_REQUEST,
} from './constants';
import {
  getBillsSuccessAction,
  getBillsErrorAction,
  getAccountBalanceSuccessAction,
  getAccountBalanceErrorAction,
  getRecentTransactionsSuccessAction,
  getRecentTransactionsErrorAction,
  createNewBillSuccessAction,
  createNewBillIncorrectAction,
  createNewBillErrorAction,
  getAvailableFundsErrorAction,
  getAvailableFundsSuccessAction,
} from './actions';

import { makeSelectCurrency } from './selectors';

export function* getAvailableFunds() {
  try {
    const [{ amountMoney, currencyName }, accountBalanceHistory] = yield all([
      call(getAmountMoney),
      call(getAccountBalanceHistory),
    ]);

    yield put(
      getAvailableFundsSuccessAction(
        amountMoney,
        currencyName,
        accountBalanceHistory,
      ),
    );
  } catch (error) {
    yield put(getAvailableFundsErrorAction(error));
    yield put(push(routes.login.path));
  }
}

function* getAmountMoney() {
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

    return yield { amountMoney, currencyName };
  } catch (error) {
    throw new Error(error);
  }
}

function* getAccountBalanceHistory() {
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

    return yield accountBalanceHistory;
  } catch (error) {
    throw new Error(error);
  }
}

export function* getAccountBalance() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = api.bills('accountBalance');
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { revenues, expenses, currencyName } = yield call(
      request,
      requestURL,
      requestParameters,
    );

    const revenuesPercent =
      ((Number(revenues) - Number(expenses)) / Number(revenues)) * 100;
    let savingsPercent;
    let savingsData;
    let savingsColors;

    if (Number(revenues) === Infinity) {
      savingsPercent = 100;
      savingsColors = [colors.primaryBlue, colors.red];
      savingsData = [
        { name: 'revenues', value: parseFloat(revenues) },
        { name: 'expenses', value: parseFloat(expenses) },
      ];
    } else if (Number(expenses) === Infinity) {
      savingsPercent = 0;
      savingsColors = [colors.primaryBlue, colors.red];
      savingsData = [
        { name: 'revenues', value: parseFloat(revenues) },
        { name: 'expenses', value: parseFloat(expenses) },
      ];
    } else if (!Number(revenues) && !Number(expenses)) {
      savingsPercent = 0;
      savingsColors = ['#b8b8b8'];
      savingsData = [{ name: 'savings', value: 100 }];
    } else {
      savingsPercent = Math.max(0, revenuesPercent);
      savingsColors = [colors.primaryBlue, colors.red];
      savingsData = [
        { name: 'revenues', value: parseFloat(revenues) },
        { name: 'expenses', value: parseFloat(expenses) },
      ];
    }

    yield put(
      getAccountBalanceSuccessAction(
        currencyName,
        savingsPercent,
        savingsData,
        savingsColors,
      ),
    );
  } catch (error) {
    yield put(getAccountBalanceErrorAction(error));
    yield put(push(routes.login.path));
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
    yield put(push(routes.login.path));
  }
}

export function* getRecentTransactions() {
  const { accessToken } = yield select(makeSelectToken());
  const requestURL = `${api.transactions()}?take=4&order=DESC`;
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${accessToken}` },
  };

  try {
    const { data } = yield call(request, requestURL, requestParameters);
    yield put(getRecentTransactionsSuccessAction(data));
  } catch (error) {
    yield put(getRecentTransactionsErrorAction(error));
    yield put(push(routes.login.path));
  }
}

export function* createNewBill({ snippets }) {
  const currency = yield select(makeSelectCurrency());
  const isCollapsedSidebar = yield select(makeSelectIsCollapsedSidebar());
  const { accessToken } = yield select(makeSelectToken());

  const requestURL = api.bills();
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ currency }),
  };

  const style = { width: 400, marginLeft: isCollapsedSidebar ? 80 : 250 };
  const placement = 'bottomLeft';

  try {
    const bill = yield call(request, requestURL, requestParameters);
    delete bill.user;

    yield put(createNewBillSuccessAction(bill));

    notification.success({
      message: snippets.success.title,
      description: snippets.success.description,
      style,
      placement,
    });
  } catch (error) {
    switch (error.statusCode) {
      case 400:
        yield put(createNewBillIncorrectAction(error));

        notification.error({
          message: snippets.error.title,
          description: snippets.error.description,
          style,
          placement,
        });
        break;
      default:
        yield put(createNewBillErrorAction(error));
        yield put(push(routes.login.path));
        break;
    }
  }
}

export default function* dashboardPageSaga() {
  yield takeLatest(GET_AVAILABLE_FUNDS_REQUEST, getAvailableFunds);
  yield takeLatest(GET_ACCOUNT_BALANCE_REQUEST, getAccountBalance);
  yield takeLatest(GET_BILLS_REQUEST, getBills);
  yield takeLatest(GET_RECENT_TRANSACTIONS_REQUEST, getRecentTransactions);
  yield takeLatest(CREATE_NEW_BILL_REQUEST, createNewBill);
}
