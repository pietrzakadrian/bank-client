/*
 *
 * RegisterPage reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  GET_CURRENCIES_SUCCESS,
  CHANGE_INPUT,
  SELECT_CURRENCY,
  REGISTER_SUCCESS,
  NEXT_STEP,
  PREVIOUS_STEP,
} from './constants';

export const initialState = {
  firstName: '',
  lastName: '',
  currency: '',
  email: '',
  password: '',
  pinCode: '',
  currencies: [],
  currentStep: 0,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const registerPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_CURRENCIES_SUCCESS:
      draft.currencies = action.data;
      break;
    case REGISTER_SUCCESS:
      draft.pinCode = action.pinCode;
      break;
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
    case LOCATION_CHANGE:
      return initialState;
  }
}, initialState);

export default registerPageReducer;
