/*
 *
 * RegisterPage reducer
 *
 */

import produce from 'immer';
import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  CHANGE_INPUT,
  SELECT_CURRENCY,
  CHANGE_CHECKBOX,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
  CHECK_EMAIL,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  CHECK_EMAIL_INVALID,
} from './constants';

export const initialState = {
  firstName: '',
  lastName: '',
  currency: '',
  email: '',
  isExistEmail: false,
  isAllowProcessingData: false,
  isLoading: false,
  pinCode: '',
  currencies: [],
  error: '',
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
      draft.isLoading = false;
      draft.isExistEmail = action.exist;
      break;
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
    case CHANGE_CHECKBOX:
      draft.isAllowProcessingData = action.checked;
      break;
  }
}, initialState);

export default registerPageReducer;
