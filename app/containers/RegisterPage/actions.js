/*
 *
 * RegisterPage actions
 *
 */

import {
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  REGISTER_REQUEST,
  LOGIN_EXPRESS_REQUEST,
  LOGIN_EXPRESS_SUCCESS,
  LOGIN_EXPRESS_ERROR,
} from './constants';

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
