/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  CHANGE_PINCODE,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  PREVIOUS_STEP,
  NEXT_STEP,
} from './constants';

export const initialState = {
  pinCode: '',
  password: '',
  isLoading: false,
  error: '',
  currentStep: 0,
};

/* eslint-disable default-case, no-param-reassign */
const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_PINCODE:
      draft.pinCode = parseInt(action.pinCode, 10) || '';
      break;
    case CHANGE_PASSWORD:
      draft.password = action.password;
      break;
    case LOGIN:
      draft.isLoading = true;
      break;
    case LOGIN_SUCCESS:
      draft.isLoading = false;
      break;
    case LOGIN_ERROR:
      draft.isLoading = false;
      draft.error = action.error;
      break;
    case NEXT_STEP:
      draft.currentStep += 1;
      break;
    case PREVIOUS_STEP:
      draft.currentStep -= 1;
      break;
    case LOCATION_CHANGE:
      draft.pinCode = initialState.pinCode;
      draft.password = initialState.password;
      draft.isLoading = initialState.isLoading;
      draft.error = initialState.error;
      draft.currentStep = initialState.currentStep;
      break;
  }
}, initialState);

export default loginPageReducer;
