/*
 *
 * LoginPage reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  CHANGE_INPUT_NUMBER,
  CHANGE_INPUT,
  PREVIOUS_STEP,
  NEXT_STEP,
} from './constants';

export const initialState = {
  pinCode: '',
  password: '',
  currentStep: 0,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const loginPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_INPUT_NUMBER:
      draft[action.name] = parseInt(action.value, 10) || '';
      break;
    case CHANGE_INPUT:
      draft[action.name] = action.value;
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

export default loginPageReducer;
