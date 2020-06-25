/*
 *
 * HistoryPage actions
 *
 */

import {
  GET_TRANSFER_HISTORY_REQUEST,
  GET_TRANSFER_HISTORY_SUCCESS,
  GET_TRANSFER_HISTORY_ERROR,
} from './constants';

export function getTransferHistoryAction() {
  return {
    type: GET_TRANSFER_HISTORY_REQUEST,
  };
}

export function getTransferHistorySuccessAction(data) {
  return {
    type: GET_TRANSFER_HISTORY_SUCCESS,
    data,
  };
}

export function getTransferHistoryErrorAction(error) {
  return {
    type: GET_TRANSFER_HISTORY_ERROR,
    error,
  };
}
