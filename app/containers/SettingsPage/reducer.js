/*
 *
 * SettingsPage reducer
 *
 */

import produce from 'immer';
import { SELECT_CURRENCY } from 'containers/App/constants';
import { routes } from 'utils';
import { GET_USER_DATA_SUCCESS, SET_USER_DATA_SUCCESS } from './constants';

export const initialState = {
  user: {},
  newData: {},
};

/* eslint-disable default-case, no-param-reassign */
const settingsPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
    case SET_USER_DATA_SUCCESS:
      draft.user = action.userData;
      break;
    case SELECT_CURRENCY:
      if (window.location.pathname === routes.register.path) {
        draft.currency = action.currency;
      }

      break;
  }
}, initialState);

export default settingsPageReducer;
