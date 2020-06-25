import React from 'react';
import { takeLatest, call, put, select, all } from 'redux-saga/effects';
import {
  makeSelectToken,
  makeSelectIsCollapsedSidebar,
} from 'containers/App/selectors';
import { api, request, colors, routes } from 'utils';
import { notification } from 'antd';
import { push } from 'connected-react-router';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import {
  GET_BILLS_REQUEST,
  GET_ACCOUNT_BALANCE_REQUEST,
  GET_RECENT_TRANSACTIONS_REQUEST,
  CREATE_NEW_BILL_REQUEST,
  GET_CURRENCIES_REQUEST,
  GET_AVAILABLE_FUNDS_REQUEST,
} from './constants';
import {
  getBillsSuccessAction,
  getBillsErrorAction,
  getAccountBalanceSuccessAction,
  getAccountBalanceErrorAction,
  getRecentTransactionsSuccessAction,
  getRecentTransactionsErrorAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  createNewBillSuccessAction,
  createNewBillIncorrectAction,
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

    const expensesPercent = (expenses * 100) / revenues;
    const revenuesPercent = 100 - expensesPercent || 0;

    let savingsData;
    let savingsColors;

    if (revenues === '0.00' && expenses === '0.00') {
      savingsColors = ['#b8b8b8'];
      savingsData = [{ id: 1, name: 'savings', value: 100 }];
    } else {
      savingsColors = [colors.primaryBlue, colors.red];
      savingsData = [
        { name: 'revenues', value: parseFloat(revenues) },
        { name: 'expenses', value: parseFloat(expenses) },
      ];
    }

    yield put(
      getAccountBalanceSuccessAction(
        currencyName,
        revenuesPercent,
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

export function* getCurrencies() {
  const requestURL = api.currencies;

  try {
    const { data } = yield call(request, requestURL);
    yield put(getCurrenciesSuccessAction(data));
  } catch (error) {
    yield put(getCurrenciesErrorAction(error));
  }
}

export function* createNewBill() {
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
      message: <FormattedMessage {...messages.billHasBeenCreated} />,
      description: (
        <FormattedMessage {...messages.billHasBeenCreatedDescription} />
      ),
      style,
      placement,
    });
  } catch (error) {
    yield put(createNewBillIncorrectAction(message));

    let message;
    let description;

    switch (error.statusCode) {
      case 400:
        message = <FormattedMessage {...messages.billHasNotBeenCreated} />;
        description = (
          <FormattedMessage {...messages.billHasNotBeenCreatedDescription} />
        );
        break;
      default:
        message = <FormattedMessage {...messages.serverError} />;
        description = <FormattedMessage {...messages.serverErrorDescription} />;
        break;
    }

    notification.error({
      message,
      description,
      style,
      placement,
    });
  }
}

export default function* dashboardPageSaga() {
  yield takeLatest(GET_AVAILABLE_FUNDS_REQUEST, getAvailableFunds);
  yield takeLatest(GET_ACCOUNT_BALANCE_REQUEST, getAccountBalance);
  yield takeLatest(GET_BILLS_REQUEST, getBills);
  yield takeLatest(GET_RECENT_TRANSACTIONS_REQUEST, getRecentTransactions);
  yield takeLatest(CREATE_NEW_BILL_REQUEST, createNewBill);
  yield takeLatest(GET_CURRENCIES_REQUEST, getCurrencies);
}
