/*
 *
 * RegisterPage actions
 *
 */

import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
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
