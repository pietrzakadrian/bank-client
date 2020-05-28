/*
 *
 * DashboardPage actions
 *
 */

import {
  GET_BILLS,
  GET_BILLS_SUCCESS,
  GET_BILLS_ERROR,
  GET_AMOUNT_MONEY,
  GET_AMOUNT_MONEY_SUCCESS,
  GET_AMOUNT_MONEY_ERROR,
  GET_ACCOUNT_BALANCE,
  GET_ACCOUNT_BALANCE_SUCCESS,
  GET_ACCOUNT_BALANCE_ERROR,
  GET_ACCOUNT_BALANCE_HISTORY,
  GET_ACCOUNT_BALANCE_HISTORY_SUCCESS,
  GET_ACCOUNT_BALANCE_HISTORY_ERROR,
  GET_RECENT_TRANSACTIONS,
  GET_RECENT_TRANSACTIONS_SUCCESS,
  GET_RECENT_TRANSACTIONS_ERROR,
  CHANGE_LAYOUT,
} from './constants';

export function getBillsAction() {
  return {
    type: GET_BILLS,
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
    type: GET_AMOUNT_MONEY,
  };
}

export function getAmountMoneySuccessAction(amountMoney, currencyName) {
  return {
    type: GET_AMOUNT_MONEY_SUCCESS,
    amountMoney,
    currencyName,
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
    type: GET_ACCOUNT_BALANCE,
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
    type: GET_ACCOUNT_BALANCE_HISTORY,
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
    type: GET_RECENT_TRANSACTIONS,
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
