/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_INPUT_NUMBER,
  CHANGE_INPUT,
  NEXT_STEP,
  PREVIOUS_STEP,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

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

export function loginAction() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccessAction(user, token) {
  return {
    type: LOGIN_SUCCESS,
    user,
    token,
  };
}

export function loginErrorAction(error) {
  return {
    type: LOGIN_ERROR,
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
