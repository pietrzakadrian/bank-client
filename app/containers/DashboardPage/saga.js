import { takeEvery, call, put, select } from 'redux-saga/effects';
import {
  makeSelectToken,
  makeSelectIsCollapsedSidebar,
} from 'containers/App/selectors';
import { api, request, colors, routes } from 'utils';
import { notification } from 'antd';
import { push } from 'connected-react-router';
import {
  GET_AMOUNT_MONEY,
  GET_ACCOUNT_BALANCE_HISTORY,
  GET_BILLS,
  GET_ACCOUNT_BALANCE,
  GET_RECENT_TRANSACTIONS,
  CREATE_NEW_BILL,
  GET_CURRENCIES,
} from './constants';
import {
  getAmountMoneySuccessAction,
  getAmountMoneyErrorAction,
  getAccountBalanceHistorySuccessAction,
  getAccountBalanceHistoryErrorAction,
  getBillsSuccessAction,
  getBillsErrorAction,
  getAccountBalanceSuccessAction,
  getAccountBalanceErrorAction,
  getRecentTransactionsSuccessAction,
  getRecentTransactionsErrorAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  createNewBillSuccessAction,
  createNewBillErrorAction,
} from './actions';
import { makeSelectCurrency } from './selectors';

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

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.login.path));
        break;
      default:
        yield put(push(routes.login.path));
        break;
    }
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

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.login.path));
        break;
      default:
        yield put(push(routes.login.path));
        break;
    }
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

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.login.path));
        break;
      default:
        yield put(push(routes.login.path));
        break;
    }
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

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.login.path));
        break;
      default:
        yield put(push(routes.login.path));
        break;
    }
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

    switch (error.statusCode) {
      case 401:
        yield put(push(routes.login.path));
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
      message: 'Bill has been created',
      description:
        'New bill has been assigned to your account and appeared in your bills widget.',
      style,
      placement,
    });
  } catch (error) {
    let message;
    let description;

    switch (error.statusCode) {
      case 400:
        message = 'Bill has not been created';
        description =
          'You cannot create a new account because the maximum number of accounts has been exceeded.';
        break;
      default:
        message = 'Server problem';
        description =
          'Work on the bank application is underway. Please try again in a moment.';
        break;
    }

    notification.error({
      message,
      description,
      style,
      placement,
    });

    yield put(createNewBillErrorAction(message));
  }
}

export default function* dashboardPageSaga() {
  yield takeEvery(GET_AMOUNT_MONEY, getAmountMoney);
  yield takeEvery(GET_ACCOUNT_BALANCE, getAccountBalance);
  yield takeEvery(GET_ACCOUNT_BALANCE_HISTORY, getAccountBalanceHistory);
  yield takeEvery(GET_BILLS, getBills);
  yield takeEvery(GET_RECENT_TRANSACTIONS, getRecentTransactions);
  yield takeEvery(CREATE_NEW_BILL, createNewBill);
  yield takeEvery(GET_CURRENCIES, getCurrencies);
}
