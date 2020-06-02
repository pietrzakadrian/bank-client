/*
 *
 * RegisterPage actions
 *
 */

import {
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  CHANGE_INPUT,
  SELECT_CURRENCY,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  CHECK_EMAIL_INVALID,
  NEXT_STEP,
  PREVIOUS_STEP,
  REGISTER_REQUEST,
  CHECK_EMAIL_REQUEST,
  GET_CURRENCIES_REQUEST,
  LOGIN_EXPRESS,
} from './constants';

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

export function changeInputAction({ name, value }) {
  return {
    type: CHANGE_INPUT,
    name,
    value,
  };
}

export function selectCurrencyAction(currency) {
  return {
    type: SELECT_CURRENCY,
    currency,
  };
}

export function registerAction() {
  return {
    type: REGISTER_REQUEST,
  };
}

export function registerSuccessAction(pinCode) {
  return {
    type: REGISTER_SUCCESS,
    pinCode,
  };
}

export function registerErrorAction(error) {
  return {
    type: REGISTER_ERROR,
    error,
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

export function loginExpressAction() {
  return {
    type: LOGIN_EXPRESS,
  };
}
