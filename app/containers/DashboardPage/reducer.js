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
  GET_RECENT_TRANSACTIONS_SUCCESS,
} from './constants';

export const initialState = {
  amountMoney: '',
  currencyName: '',
  savings: '',
  savingsData: [],
  savingsColors: [],
  bills: [],
  accountBalanceHistory: [],
  recentTransactions: [],
};

/* eslint-disable default-case, no-param-reassign */
const dashboardPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_BILLS_SUCCESS:
      draft.bills = action.bills.map((bill) => ({
        ...bill,
        amountMoney: bill.amountMoney.replace(/\B(?=(\d{3})+(?!\d))/g, ' '),
        accountBillNumber: bill.accountBillNumber
          .replace(/(^\d{2}|\d{4})+?/g, '$1 ')
          .trim(),
      }));
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
    case GET_RECENT_TRANSACTIONS_SUCCESS:
      draft.recentTransactions = action.recentTransactions;
      break;
  }
}, initialState);

export default dashboardPageReducer;
