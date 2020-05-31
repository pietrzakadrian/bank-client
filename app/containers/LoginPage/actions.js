/*
 *
 * LoginPage actions
 *
 */

import {
  CHANGE_PINCODE,
  CHANGE_PASSWORD,
  NEXT_STEP,
  PREVIOUS_STEP,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from './constants';

export function changePinCodeAction(pinCode) {
  return {
    type: CHANGE_PINCODE,
    pinCode,
  };
}

export function changePasswordAction(password) {
  return {
    type: CHANGE_PASSWORD,
    password,
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
