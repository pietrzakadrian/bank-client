/*
 *
 * PaymentPage actions
 *
 */

import {
  GET_BILLS_REQUEST,
  GET_BILLS_SUCCESS,
  GET_BILLS_ERROR,
  SEARCH_RECIPIENT_REQUEST,
  SEARCH_RECIPIENT_SUCCESS,
  SEARCH_RECIPIENT_ERROR,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_ERROR,
  GET_AUTHORIZATION_KEY_REQUEST,
  GET_AUTHORIZATION_KEY_SUCCESS,
  GET_AUTHORIZATION_KEY_ERROR,
  CONFIRM_TRANSACTION_REQUEST,
  CONFIRM_TRANSACTION_SUCCESS,
  CONFIRM_TRANSACTION_INCORRECT,
  CHECK_RECIPIENT,
  CHECK_RECIPIENT_CORRECT,
  CHECK_RECIPIENT_INCORRECT,
  SELECT_SENDER_BILL,
} from './constants';

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

export function searchRecipientAction(value) {
  return {
    type: SEARCH_RECIPIENT_REQUEST,
    value: value.replace(/ /g, ''),
  };
}

export function searchRecipientSuccessAction(recipients) {
  return {
    type: SEARCH_RECIPIENT_SUCCESS,
    recipients,
  };
}

export function searchRecipientErrorAction(error) {
  return {
    type: SEARCH_RECIPIENT_ERROR,
    error,
  };
}

export function checkRecipientAction() {
  return {
    type: CHECK_RECIPIENT,
  };
}

export function checkRecipientCorrectAction() {
  return {
    type: CHECK_RECIPIENT_CORRECT,
  };
}

export function checkRecipientIncorrectAction(error) {
  return {
    type: CHECK_RECIPIENT_INCORRECT,
    error,
  };
}

export function createTransactionAction() {
  return {
    type: CREATE_TRANSACTION_REQUEST,
  };
}

export function createTransactionSuccessAction(uuid) {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
    uuid,
  };
}

export function createTransactionErrorAction(error) {
  return {
    type: CREATE_TRANSACTION_ERROR,
    error,
  };
}

export function getAuthorizationKeyAction() {
  return {
    type: GET_AUTHORIZATION_KEY_REQUEST,
  };
}

export function getAuthorizationKeySuccessAction(authorizationKey) {
  return {
    type: GET_AUTHORIZATION_KEY_SUCCESS,
    authorizationKey,
  };
}

export function getAuthorizationKeyErrorAction(error) {
  return {
    type: GET_AUTHORIZATION_KEY_ERROR,
    error,
  };
}

export function confirmTransactionAction(snippets) {
  return {
    type: CONFIRM_TRANSACTION_REQUEST,
    snippets,
  };
}

export function confirmTransactionSuccessAction(snippets) {
  return {
    type: CONFIRM_TRANSACTION_SUCCESS,
    snippets,
  };
}

export function confirmTransactionIncorrectAction(error) {
  return {
    type: CONFIRM_TRANSACTION_INCORRECT,
    error,
  };
}

export function selectSenderBillAction(uuid) {
  return {
    type: SELECT_SENDER_BILL,
    uuid,
  };
}
