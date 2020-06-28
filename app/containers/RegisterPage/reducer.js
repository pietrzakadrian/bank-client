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
  if (window.location.pathname === routes.register.path) {
    switch (action.type) {
      case CHANGE_INPUT:
        draft[action.name] = action.value.trim();
        break;
      case SELECT_CURRENCY:
        draft.currency = action.currency;
        break;
      case NEXT_STEP:
        draft.currentStep += 1;
        break;
      case PREVIOUS_STEP:
        draft.currentStep -= 1;
        break;
    }
  }

  switch (action.type) {
    case REGISTER_SUCCESS:
      draft.pinCode = action.pinCode;
      break;
    case LOCATION_CHANGE:
      return initialState;
  }
}, initialState);

export default registerPageReducer;
