/*
 *
 * SettingsPage reducer
 *
 */

import produce from 'immer';
import {
  SELECT_CURRENCY,
  CHANGE_INPUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  TOGGLE_MODAL,
} from 'containers/App/constants';
import { routes } from 'utils';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  GET_USER_DATA_SUCCESS,
  SET_USER_DATA_SUCCESS,
  SET_USER_DATA_INCORRECT,
} from './constants';

export const initialState = {
  isOpenedModal: false,
  user: {},
  newData: {},
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const settingsPageReducer = produce((draft, action) => {
  if (window.location.pathname === routes.settings.path) {
    switch (action.type) {
      case SELECT_CURRENCY:
        if (draft.user?.userConfig?.currency?.uuid !== action?.currency) {
          draft.newData.currency = action.currency;
          draft.isOpenedModal = true;
        }
        break;
      case CHANGE_INPUT:
        if (draft.user[action.name] === action.value || !action.value.length) {
          delete draft.newData[action.name];
        } else {
          draft.newData[action.name] = action.value;
        }
        break;
      case TOGGLE_MODAL:
        draft.isOpenedModal = !draft.isOpenedModal;
        delete draft.newData.currency;
        break;
    }
  }

  switch (action.type) {
    case GET_USER_DATA_SUCCESS:
    case SET_USER_DATA_SUCCESS:
      draft.user = action.userData;
      draft.newData = initialState.newData;
      draft.isOpenedModal = false;
      break;
    case SET_USER_DATA_INCORRECT:
      draft.isOpenedModal = false;
      break;
    case LOCATION_CHANGE:
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
      return initialState;
  }
}, initialState);

export default settingsPageReducer;
