/*
 *
 * HistoryPage actions
 *
 */

import {
  GET_TRANSACTION_HISTORY_REQUEST,
  GET_TRANSACTION_HISTORY_ERROR,
  GET_TRANSACTION_HISTORY_SUCCESS,
} from './constants';

export function getTransactionHistoryAction(currentPage) {
  return {
    type: GET_TRANSACTION_HISTORY_REQUEST,
    currentPage,
  };
}

export function getTransactionHistorySuccessAction(transactions) {
  return {
    type: GET_TRANSACTION_HISTORY_SUCCESS,
    transactions,
  };
}

export function getTransactionHistoryErrorAction(error) {
  return {
    type: GET_TRANSACTION_HISTORY_ERROR,
    error,
  };
}
