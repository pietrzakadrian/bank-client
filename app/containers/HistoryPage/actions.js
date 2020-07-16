/*
 *
 * HistoryPage actions
 *
 */

import {
  GET_TRANSACTION_HISTORY_REQUEST,
  GET_TRANSACTION_HISTORY_ERROR,
  GET_TRANSACTION_HISTORY_SUCCESS,
  GET_CONFIRMATION_FILE_REQUEST,
  GET_CONFIRMATION_FILE_SUCCESS,
  GET_CONFIRMATION_FILE_ERROR,
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

export function getConfirmationFileAction(uuid) {
  return {
    type: GET_CONFIRMATION_FILE_REQUEST,
    uuid,
  };
}

export function getConfirmationFileSuccessAction() {
  return {
    type: GET_CONFIRMATION_FILE_SUCCESS,
  };
}

export function getConfirmationFileErrorAction(error) {
  return {
    type: GET_CONFIRMATION_FILE_ERROR,
    error,
  };
}
