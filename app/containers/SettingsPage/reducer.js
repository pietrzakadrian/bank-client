/*
 *
 * SettingsPage reducer
 *
 */

import produce from 'immer';
import { SELECT_CURRENCY, CHANGE_INPUT } from 'containers/App/constants';
import { routes } from 'utils';
import { GET_USER_DATA_SUCCESS, SET_USER_DATA_SUCCESS } from './constants';

export const initialState = {
  user: {},
  newData: {},
};

/* eslint-disable default-case, no-param-reassign */
const settingsPageReducer = produce((draft, action) => {
  if (window.location.pathname === routes.settings.path) {
    switch (action.type) {
      case SELECT_CURRENCY:
        draft.newData.currency = action.currency;
        break;
      case CHANGE_INPUT:
        draft.newData[action.name] = action.value;
        break;
    }
  }

  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
    case SET_USER_DATA_SUCCESS:
      draft.user = action.userData;
      draft.newData = initialState.newData;
      break;
  }
}, initialState);

export default settingsPageReducer;
