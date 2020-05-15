/*
 *
 * RegisterPage reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  CHANGE_INPUT,
  SELECT_CURRENCY,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CHECK_EMAIL,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  CHECK_EMAIL_INVALID,
  NEXT_STEP,
  PREVIOUS_STEP,
} from './constants';

export const initialState = {
  firstName: '',
  lastName: '',
  currency: '',
  email: '',
  password: '',
  isLoading: false,
  pinCode: '',
  currencies: [],
  error: '',
  currentStep: 0,
};

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHECK_EMAIL:
    case REGISTER:
    case GET_CURRENCIES:
      draft.isLoading = true;
      break;
    case GET_CURRENCIES_SUCCESS:
      draft.isLoading = false;
      draft.currencies = action.data;
      break;
    case REGISTER_SUCCESS:
      draft.isLoading = false;
      draft.pinCode = action.pinCode;
      break;
    case CHECK_EMAIL_SUCCESS:
    case CHECK_EMAIL_INVALID:
      draft.isLoading = false;
      break;
    case CHECK_EMAIL_ERROR:
    case REGISTER_ERROR:
    case GET_CURRENCIES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case CHANGE_INPUT:
      draft[action.name] = action.value;
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
      draft.firstName = initialState.firstName;
      draft.lastName = initialState.lastName;
      draft.currency = initialState.currency;
      draft.email = initialState.email;
      draft.password = initialState.password;
      draft.isLoading = initialState.isLoading;
      draft.pinCode = initialState.pinCode;
      draft.currencies = initialState.currencies;
      draft.error = initialState.error;
      draft.currentStep = initialState.currentStep;
      break;
  }
}, initialState);

export default registerPageReducer;
