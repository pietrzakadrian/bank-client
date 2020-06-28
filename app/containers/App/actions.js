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
