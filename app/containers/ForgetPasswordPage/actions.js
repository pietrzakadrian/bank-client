/*
 *
 * ForgetPasswordPage actions
 *
 */

import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_ERROR } from './constants';

export function forgotPasswordAction() {
  return {
    type: FORGOT_PASSWORD_REQUEST,
  };
}

export function forgotPasswordSuccessAction() {
  return {
    type: FORGOT_PASSWORD_SUCCESS,
  };
}

export function forgotPasswordErrorAction(error) {
  return {
    type: FORGOT_PASSWORD_ERROR,
    error,
  };
}
