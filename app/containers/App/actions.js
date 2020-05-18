/*
 *
 * App actions
 *
 */

import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from './constants';

export function logoutAction() {
  return {
    type: LOGOUT,
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
