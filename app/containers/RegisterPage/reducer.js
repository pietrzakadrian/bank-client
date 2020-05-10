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
} from './constants';

export const initialState = {
  isLoading: false,
  currencies: [],
  error: [],
};

/* eslint-disable default-case, no-param-reassign */
const registerPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_CURRENCIES:
      draft.isLoading = true;
      break;
    case GET_CURRENCIES_SUCCESS:
      draft.isLoading = false;
      draft.currencies = action.data;
      break;
    case GET_CURRENCIES_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
  }
}, initialState);

export default registerPageReducer;
