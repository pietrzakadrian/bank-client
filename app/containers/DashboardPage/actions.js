/*
 *
 * DashboardPage actions
 *
 */

import {
  CREATE_NEW_BILL_REQUEST,
  CREATE_NEW_BILL_SUCCESS,
  CREATE_NEW_BILL_INCORRECT,
  CREATE_NEW_BILL_ERROR,
  GET_BILLS_REQUEST,
  GET_BILLS_SUCCESS,
  GET_BILLS_ERROR,
  GET_ACCOUNT_BALANCE_REQUEST,
  GET_ACCOUNT_BALANCE_SUCCESS,
  GET_ACCOUNT_BALANCE_ERROR,
  GET_RECENT_TRANSACTIONS_REQUEST,
  GET_RECENT_TRANSACTIONS_SUCCESS,
  GET_RECENT_TRANSACTIONS_ERROR,
  CHANGE_LAYOUT,
  GET_AVAILABLE_FUNDS_REQUEST,
  GET_AVAILABLE_FUNDS_SUCCESS,
  GET_AVAILABLE_FUNDS_ERROR,
} from './constants';

export function getAvailableFundsAction() {
  return {
    type: GET_AVAILABLE_FUNDS_REQUEST,
  };
}

export function getAvailableFundsSuccessAction(
  amountMoney,
  currencyName,
  accountBalanceHistory,
) {
  return {
    type: GET_AVAILABLE_FUNDS_SUCCESS,
    amountMoney,
    currencyName,
    accountBalanceHistory,
  };
}

export function getAvailableFundsErrorAction(error) {
  return {
    type: GET_AVAILABLE_FUNDS_ERROR,
    error,
  };
}

export function createNewBillAction(snippets) {
  return {
    type: CREATE_NEW_BILL_REQUEST,
    snippets,
  };
}

export function createNewBillSuccessAction(bill) {
  return {
    type: CREATE_NEW_BILL_SUCCESS,
    bill,
  };
}

export function createNewBillIncorrectAction(error) {
  return {
    type: CREATE_NEW_BILL_INCORRECT,
    error,
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
