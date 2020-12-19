/*
 *
 * ResetPasswordPage actions
 *
 */

import { RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_ERROR } from './constants';


export function resetPasswordAction() {
  return {
    type: RESET_PASSWORD_REQUEST,
  };
}

export function resetPasswordSuccessAction() {
  return {
    type: RESET_PASSWORD_SUCCESS,
  };
}

export function resetPasswordErrorAction(error) {
  return {
    type: RESET_PASSWORD_ERROR,
    error,
  };
}