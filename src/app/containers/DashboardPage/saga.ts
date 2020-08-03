import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { actions } from './slice';
import { selectApp } from '../App/selectors';
import api, { EndpointNames } from 'utils/api';
import { request } from 'utils/request';
import { selectDashboardPage } from './selectors';
import { notification } from 'antd';

export function* getAvailableFunds() {
  try {
    const [{ amountMoney, currencyName }, accountBalanceHistory] = yield all([
      call(getAmountMoney),
      call(getAccountBalanceHistory),
    ]);

    yield put(
      actions.getAvailableFundsSuccessAction({
        amountMoney,
        currencyName,
        accountBalanceHistory,
      }),
    );
  } catch (error) {
    yield put(actions.getAvailableFundsErrorAction(error));
  }
}

function* getAmountMoney() {
  const { token } = yield select(selectApp);
  const requestURL = api.bills(EndpointNames.amountMoney);
  const requestParameters = {
    headers: { Authorization: `Bearer ${token.accessToken}` },
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
  const { token } = yield select(selectApp);
  const requestURL = api.bills(EndpointNames.accountBalanceHistory);
  const requestParameters = {
    headers: { Authorization: `Bearer ${token.accessToken}` },
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
  const { token } = yield select(selectApp);
  const requestURL = api.bills(EndpointNames.accountBalance);
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${token.accessToken}` },
  };

  try {
    const { revenues, expenses, currencyName } = yield call(
      request,
      requestURL,
      requestParameters,
    );

    const revenuesPercent = ((+revenues - +expenses) / +revenues) * 100;
    let savingsPercent;
    let savingsData;
    let savingsColors;

    if (+revenues === Infinity) {
      savingsPercent = 100;
      savingsColors = ['#1890ff', 'rgb(229, 0, 0)'];
      savingsData = [
        { name: 'revenues', value: parseFloat(revenues) },
        { name: 'expenses', value: parseFloat(expenses) },
      ];
    } else if (+expenses === Infinity) {
      savingsPercent = 0;
      savingsColors = ['#1890ff', 'rgb(229, 0, 0)'];
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
      savingsColors = ['#1890ff', 'rgb(229, 0, 0)'];
      savingsData = [
        { name: 'revenues', value: parseFloat(revenues) },
        { name: 'expenses', value: parseFloat(expenses) },
      ];
    }

    yield put(
      actions.getAccountBalanceSuccessAction({
        currencyName,
        savingsPercent,
        savingsData,
        savingsColors,
      }),
    );
  } catch (error) {
    yield put(actions.getAccountBalanceErrorAction(error));
  }
}

export function* getBills() {
  const { token } = yield select(selectApp);
  const requestURL = api.bills();
  const requestParameters = {
    headers: { Authorization: `Bearer ${token.accessToken}` },
  };

  try {
    const { data } = yield call(request, requestURL, requestParameters);
    yield put(actions.getBillsSuccessAction(data));
  } catch (error) {
    yield put(actions.getBillsErrorAction(error));
  }
}

export function* getRecentTransactions() {
  const { token } = yield select(selectApp);
  const requestURL = `${api.transactions()}?take=4&order=DESC`;
  const requestParameters = {
    method: 'GET',
    headers: { Authorization: `Bearer ${token.accessToken}` },
  };

  try {
    const { data } = yield call(request, requestURL, requestParameters);
    yield put(actions.getRecentTransactionsSuccessAction(data));
  } catch (error) {
    yield put(actions.getRecentTransactionsErrorAction(error));
  }
}

export function* createNewBill() {
  const { currency } = yield select(selectDashboardPage);
  const { isCollapsedSidebar, token } = yield select(selectApp);

  const requestURL = api.bills();
  const requestParameters = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token.accessToken}`,
    },
    body: JSON.stringify({ currency }),
  };

  const style = { width: 400, marginLeft: isCollapsedSidebar ? 80 : 250 };
  const placement = 'bottomLeft';

  try {
    const bill = yield call(request, requestURL, requestParameters);
    delete bill.user;

    yield put(actions.createNewBillSuccessAction(bill));

    notification.success({
      message: 'test',
      description: 'test',
      style,
      placement,
    });
  } catch (error) {
    yield put(actions.createNewBillErrorAction(error));
  }
}

export function* dashboardPageSaga() {
  yield takeLatest(
    actions.getAvailableFundsRequestAction.type,
    getAvailableFunds,
  );
  yield takeLatest(
    actions.getAccountBalanceRequestAction.type,
    getAccountBalance,
  );
  yield takeLatest(actions.getBillsRequestAction.type, getBills);
  yield takeLatest(
    actions.getRecentTransactionsRequestAction.type,
    getRecentTransactions,
  );
  yield takeLatest(actions.createNewBillRequestAction.type, createNewBill);
}
