/*
 *
 * App actions
 *
 */

import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  COLLAPSED_SIDEBAR,
  COLLAPSED_DRAWER,
  SELECT_CURRENCY,
  GET_CURRENCIES_REQUEST,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  NEXT_STEP,
  PREVIOUS_STEP,
  CHANGE_INPUT_NUMBER,
  CHANGE_INPUT,
  TOGGLE_MODAL,
  CHECK_EMAIL_REQUEST,
  CHECK_EMAIL_INVALID,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  GET_MESSAGES_REQUEST,
  GET_MESSAGES_SUCCESS,
  GET_MESSAGES_ERROR,
  OPEN_MESSAGE_MODAL,
  CLOSE_MESSAGE_MODAL,
  READ_ALL_MESSAGES_REQUEST,
  READ_ALL_MESSAGES_SUCCESS,
  READ_ALL_MESSAGES_ERROR,
  GET_NOTIFICATIONS_REQUEST,
  GET_NOTIFICATIONS_SUCCESS,
  GET_NOTIFICATIONS_ERROR,
  READ_MESSAGE_REQUEST,
  READ_MESSAGE_SUCCESS,
  READ_MESSAGE_ERROR,
  TOGGLE_CONFIRM_MODAL,
} from './constants';

export function logoutAction() {
  return {
    type: LOGOUT_REQUEST,
  };
}

export function logoutSuccessAction() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutErrorAction(error) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}

export function collapsedSidebarAction() {
  return {
    type: COLLAPSED_SIDEBAR,
  };
}

export function collapsedDrawerAction() {
  return {
    type: COLLAPSED_DRAWER,
  };
}

export function selectCurrencyAction(currency) {
  return {
    type: SELECT_CURRENCY,
    currency,
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

export function changeInputNumberAction({ name, value }) {
  return {
    type: CHANGE_INPUT_NUMBER,
    name,
    value,
  };
}

export function changeInputAction({ name, value }) {
  return {
    type: CHANGE_INPUT,
    name,
    value,
  };
}

export function toggleModalAction() {
  return {
    type: TOGGLE_MODAL,
  };
}

export function toggleConfirmModalAction() {
  return {
    type: TOGGLE_CONFIRM_MODAL,
  };
}

export function checkEmailAction(value, reject, resolve) {
  return {
    type: CHECK_EMAIL_REQUEST,
    value,
    reject,
    resolve,
  };
}

export function checkEmailInvalidAction() {
  return {
    type: CHECK_EMAIL_INVALID,
  };
}

export function checkEmailSuccessAction() {
  return {
    type: CHECK_EMAIL_SUCCESS,
  };
}

export function checkEmailErrorAction(error) {
  return {
    type: CHECK_EMAIL_ERROR,
    error,
  };
}

export function getMessagesAction() {
  return {
    type: GET_MESSAGES_REQUEST,
  };
}

export function getMessagesSuccessAction(data) {
  return {
    type: GET_MESSAGES_SUCCESS,
    data,
  };
}

export function getMessagesErrorAction(error) {
  return {
    type: GET_MESSAGES_ERROR,
    error,
  };
}

export function openMessageModalAction(uuid) {
  return {
    type: OPEN_MESSAGE_MODAL,
    uuid,
  };
}

export function closeMessageModalAction() {
  return {
    type: CLOSE_MESSAGE_MODAL,
  };
}

export function readMessageAction() {
  return {
    type: READ_MESSAGE_REQUEST,
  };
}

export function readMessageSuccessAction() {
  return {
    type: READ_MESSAGE_SUCCESS,
  };
}

export function readMessageErrorAction(error) {
  return {
    type: READ_MESSAGE_ERROR,
    error,
  };
}

export function readAllMessagesAction() {
  return {
    type: READ_ALL_MESSAGES_REQUEST,
  };
}

export function readAllMessagesSuccessAction() {
  return {
    type: READ_ALL_MESSAGES_SUCCESS,
  };
}

export function readAllMessagesErrorAction(error) {
  return {
    type: READ_ALL_MESSAGES_ERROR,
    error,
  };
}

export function getNotificationsAction() {
  return {
    type: GET_NOTIFICATIONS_REQUEST,
  };
}

export function getNotificationsSuccessAction(data) {
  return {
    type: GET_NOTIFICATIONS_SUCCESS,
    data,
  };
}

export function getNotificationsErrorAction(error) {
  return {
    type: GET_NOTIFICATIONS_ERROR,
    error,
  };
}
