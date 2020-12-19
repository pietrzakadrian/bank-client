/*
 *
 * ResetPasswordPage reducer
 *
 */

import { LOCATION_CHANGE } from 'connected-react-router';
import { CHANGE_INPUT } from 'containers/App/constants';
import produce from 'immer';
import { routes } from 'utils';
import { RESET_PASSWORD_SUCCESS } from './constants';

export const initialState = {
  password: '',
  password2: '',
  isSuccess: false,
  token: '',
};

/* eslint-disable default-case, no-param-reassign */
const resetPasswordPageReducer = produce((draft, action) => {
  if (window.location.pathname.includes(routes.resetPassword.path)) {
    switch (action.type) {
      case CHANGE_INPUT:
        draft[action.name] = action.value;
        break;
      case RESET_PASSWORD_SUCCESS:
        draft.isSuccess = true;
        break;
    }
  }

  switch (action.type) {
    case LOCATION_CHANGE:
      return initialState;
  }
}, initialState);

export default resetPasswordPageReducer;
