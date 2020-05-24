/*
 *
 * DashboardPage reducer
 *
 */

import produce from 'immer';
import {
  GET_BILLS_SUCCESS,
  GET_AMOUNT_MONEY_SUCCESS,
  GET_ACCOUNT_BALANCE_SUCCESS,
  GET_ACCOUNT_BALANCE_HISTORY_SUCCESS,
} from './constants';

export const initialState = {
  amountMoney: '',
  currencyName: '',
  savings: '',
  savingsData: [],
  savingsColors: [],
  bills: [],
  accountBalanceHistory: [],
};

/* eslint-disable default-case, no-param-reassign */
const dashboardPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_BILLS_SUCCESS:
      draft.bills = action.bills;
      break;
    case GET_AMOUNT_MONEY_SUCCESS:
      draft.amountMoney = action.amountMoney;
      draft.currencyName = action.currencyName;
      break;
    case GET_ACCOUNT_BALANCE_SUCCESS:
      draft.currencyName = action.currencyName;
      draft.savings = action.savings.toFixed(1).replace('.', ',');
      draft.savingsData = action.savingsData;
      draft.savingsColors = action.savingsColors;
      break;
    case GET_ACCOUNT_BALANCE_HISTORY_SUCCESS:
      draft.accountBalanceHistory =
        action.accountBalanceHistory.length === 1
          ? [...action.accountBalanceHistory, 0]
          : action.accountBalanceHistory;
      break;
  }
}, initialState);

export default dashboardPageReducer;
