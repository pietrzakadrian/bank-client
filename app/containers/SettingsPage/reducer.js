/*
 *
 * SettingsPage reducer
 *
 */

import produce from 'immer';
import { SELECT_CURRENCY } from 'containers/App/constants';
import { GET_USER_DATA_SUCCESS } from './constants';

export const initialState = {
  user: {},
  currency: '',
};

/* eslint-disable default-case, no-param-reassign */
const settingsPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
      draft.user = action.userData;
      break;
    case SELECT_CURRENCY:
      draft.currency = action.currency;
      break;
  }
}, initialState);

export default settingsPageReducer;
