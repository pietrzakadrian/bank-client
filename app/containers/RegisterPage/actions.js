/*
 *
 * RegisterPage actions
 *
 */

import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  CHANGE_INPUT,
  SELECT_CURRENCY,
  CHANGE_CHECKBOX,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CHECK_EMAIL,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  CHECK_EMAIL_INVALID,
} from './constants';

export function getCurrenciesAction() {
  return {
    type: GET_CURRENCIES,
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

export function changeCheckboxAction(checked) {
  return {
    type: CHANGE_CHECKBOX,
    checked,
  };
}

export function registerAction() {
  return {
    type: REGISTER,
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
    type: CHECK_EMAIL,
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

export function checkEmailSuccessAction(exist) {
  return {
    type: CHECK_EMAIL_SUCCESS,
    exist,
  };
}

export function checkEmailErrorAction(error) {
  return {
    type: CHECK_EMAIL_ERROR,
    error,
  };
}
