/*
 *
 * RegisterPage actions
 *
 */

import {
  CHANGE_INPUT,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  CHECK_EMAIL_INVALID,
  NEXT_STEP,
  PREVIOUS_STEP,
  REGISTER_REQUEST,
  CHECK_EMAIL_REQUEST,
  LOGIN_EXPRESS_REQUEST,
  LOGIN_EXPRESS_SUCCESS,
  LOGIN_EXPRESS_ERROR,
} from './constants';

export function changeInputAction({ name, value }) {
  return {
    type: CHANGE_INPUT,
    name,
    value,
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
    type: LOGIN_EXPRESS_REQUEST,
  };
}

export function loginExpressSuccessAction(user, token) {
  return {
    type: LOGIN_EXPRESS_SUCCESS,
    user,
    token,
  };
}

export function loginExpressErrorAction(error) {
  return {
    type: LOGIN_EXPRESS_ERROR,
    error,
  };
}
