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
  CONFIRM_TRANSACTION_ERROR,
  CHANGE_INPUT,
  CHANGE_INPUT_NUMBER,
  SELECT_SENDER_BILL,
  NEXT_STEP,
  PREVIOUS_STEP,
  CHECK_RECIPIENT,
  CHECK_RECIPIENT_CORRECT,
  CHECK_RECIPIENT_INCORRECT,
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

export function createTransactionSuccessAction() {
  return {
    type: CREATE_TRANSACTION_SUCCESS,
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

export function confirmTransactionAction() {
  return {
    type: CONFIRM_TRANSACTION_REQUEST,
  };
}

export function confirmTransactionSuccessAction() {
  return {
    type: CONFIRM_TRANSACTION_SUCCESS,
  };
}

export function confirmTransactionErrorAction(error) {
  return {
    type: CONFIRM_TRANSACTION_ERROR,
    error,
  };
}

export function changeInputAction({ name, value }) {
  return {
    type: CHANGE_INPUT,
    name,
    value,
  };
}

export function changeInputNumberAction({ name, value }) {
  return {
    type: CHANGE_INPUT_NUMBER,
    name,
    value,
  };
}

export function nextStepAction() {
  return {
    type: NEXT_STEP,
  };
}

export function previousStepAction() {
  return {
    type: PREVIOUS_STEP,
  };
}

export function selectSenderBillAction(senderBill) {
  return {
    type: SELECT_SENDER_BILL,
    senderBill,
  };
}
