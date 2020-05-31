/*
 *
 * DashboardPage actions
 *
 */

import {
  CREATE_NEW_BILL_SUCCESS,
  CREATE_NEW_BILL_ERROR,
  GET_BILLS_SUCCESS,
  GET_BILLS_ERROR,
  GET_AMOUNT_MONEY_SUCCESS,
  GET_AMOUNT_MONEY_ERROR,
  GET_ACCOUNT_BALANCE_SUCCESS,
  GET_ACCOUNT_BALANCE_ERROR,
  GET_ACCOUNT_BALANCE_HISTORY_SUCCESS,
  GET_ACCOUNT_BALANCE_HISTORY_ERROR,
  GET_RECENT_TRANSACTIONS_SUCCESS,
  GET_RECENT_TRANSACTIONS_ERROR,
  CHANGE_LAYOUT,
  GET_CURRENCIES_REQUEST,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  SELECT_CURRENCY,
  TOGGLE_MODAL,
  CREATE_NEW_BILL_REQUEST,
  GET_BILLS_REQUEST,
  GET_AMOUNT_MONEY_REQUEST,
  GET_ACCOUNT_BALANCE_REQUEST,
  GET_ACCOUNT_BALANCE_HISTORY_REQUEST,
  GET_RECENT_TRANSACTIONS_REQUEST,
} from './constants';

export function toggleModalAction() {
  return {
    type: TOGGLE_MODAL,
  };
}

export function getCurrenciesAction() {
  return {
    type: GET_CURRENCIES_REQUEST,
  };
}

export function getCurrenciesSuccessAction(data) {
  return {
    type: GET_CURRENCIES_SUCCESS,
    data,
  };
}

export function getCurrenciesErrorAction(error) {
  return {
    type: GET_CURRENCIES_ERROR,
    error,
  };
}

export function selectCurrencyAction(currency) {
  return {
    type: SELECT_CURRENCY,
    currency,
  };
}

export function createNewBillAction() {
  return {
    type: CREATE_NEW_BILL_REQUEST,
  };
}

export function createNewBillSuccessAction(bill) {
  return {
    type: CREATE_NEW_BILL_SUCCESS,
    bill,
  };
}

export function createNewBillErrorAction(error) {
  return {
    type: CREATE_NEW_BILL_ERROR,
    error,
  };
}

export function getBillsAction() {
  return {
    type: GET_BILLS_REQUEST,
  };
}

export function getBillsSuccessAction(bills) {
  return {
    type: GET_BILLS_SUCCESS,
    bills,
  };
}

export function getBillsErrorAction(error) {
  return {
    type: GET_BILLS_ERROR,
    error,
  };
}

export function getAmountMoneyAction() {
  return {
    type: GET_AMOUNT_MONEY_REQUEST,
  };
}

export function getAmountMoneySuccessAction(
  amountMoney,
  currencyName,
  accountBalanceHistory,
) {
  return {
    type: GET_AMOUNT_MONEY_SUCCESS,
    amountMoney,
    currencyName,
    accountBalanceHistory,
  };
}

export function getAmountMoneyErrorAction(error) {
  return {
    type: GET_AMOUNT_MONEY_ERROR,
    error,
  };
}

export function getAccountBalanceAction() {
  return {
    type: GET_ACCOUNT_BALANCE_REQUEST,
  };
}

export function getAccountBalanceSuccessAction(
  currencyName,
  savings,
  savingsData,
  savingsColors,
) {
  return {
    type: GET_ACCOUNT_BALANCE_SUCCESS,
    currencyName,
    savings,
    savingsData,
    savingsColors,
  };
}

export function getAccountBalanceErrorAction(error) {
  return {
    type: GET_ACCOUNT_BALANCE_ERROR,
    error,
  };
}

export function getAccountBalanceHistoryAction() {
  return {
    type: GET_ACCOUNT_BALANCE_HISTORY_REQUEST,
  };
}

export function getAccountBalanceHistorySuccessAction(accountBalanceHistory) {
  return {
    type: GET_ACCOUNT_BALANCE_HISTORY_SUCCESS,
    accountBalanceHistory,
  };
}

export function getAccountBalanceHistoryErrorAction(error) {
  return {
    type: GET_ACCOUNT_BALANCE_HISTORY_ERROR,
    error,
  };
}

export function getRecentTransactionsAction() {
  return {
    type: GET_RECENT_TRANSACTIONS_REQUEST,
  };
}

export function getRecentTransactionsSuccessAction(recentTransactions) {
  return {
    type: GET_RECENT_TRANSACTIONS_SUCCESS,
    recentTransactions,
  };
}

export function getRecentTransactionsErrorAction(error) {
  return {
    type: GET_RECENT_TRANSACTIONS_ERROR,
    error,
  };
}

export function changeLayoutAction(layout) {
  return {
    type: CHANGE_LAYOUT,
    layout,
  };
}
