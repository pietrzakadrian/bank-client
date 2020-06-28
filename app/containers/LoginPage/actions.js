/*
 *
 * LoginPage actions
 *
 */

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from './constants';

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
