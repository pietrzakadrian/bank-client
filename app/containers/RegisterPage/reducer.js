/*
 *
 * RegisterPage reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  SELECT_CURRENCY,
  NEXT_STEP,
  CHANGE_INPUT,
  PREVIOUS_STEP,
} from 'containers/App/constants';
import { routes } from 'utils';
import { REGISTER_SUCCESS } from './constants';

export const initialState = {
  firstName: '',
  lastName: '',
  currency: null,
  email: '',
  password: '',
  pinCode: '',
  currentStep: 0,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const registerPageReducer = produce((draft, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
      draft.pinCode = action.pinCode;
      break;
    case CHANGE_INPUT:
      if (window.location.pathname === routes.register.path) {
        draft[action.name] = action.value.trim();
      }

      break;
    case SELECT_CURRENCY:
      if (window.location.pathname === routes.register.path) {
        draft.currency = action.currency;
      }

      break;
    case NEXT_STEP:
      if (window.location.pathname === routes.register.path) {
        draft.currentStep += 1;
      }

      break;
    case PREVIOUS_STEP:
      if (window.location.pathname === routes.register.path) {
        draft.currentStep -= 1;
      }

      break;
    case LOCATION_CHANGE:
      return initialState;
  }
}, initialState);

export default registerPageReducer;
