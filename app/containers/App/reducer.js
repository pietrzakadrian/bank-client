/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import {
  CHANGE_PINCODE,
  CHANGE_PASSWORD,
  LOGIN_SUCCESS,
  LOGIN_REQUEST,
  LOGIN_ERROR,
  PREVIOUS_STEP,
} from 'containers/LoginPage/constants';
import {
  CHANGE_INPUT,
  CHECK_EMAIL,
  REGISTER,
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  REGISTER_SUCCESS,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_INVALID,
  GET_CURRENCIES_ERROR,
  REGISTER_ERROR,
  CHECK_EMAIL_ERROR,
} from 'containers/RegisterPage/constants';
import { CHANGE_LAYOUT } from 'containers/DashboardPage/constants';
import {
  LOGOUT_SUCCESS,
  COLLAPSED_SIDEBAR,
  COLLAPSED_DRAWER,
} from './constants';

export const initialState = {
  isCollapsedSidebar: true,
  isCollapsedDrawer: false,
  isLogged: false,
  error: '',
  token: {},
  user: {},
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_PINCODE:
    case CHANGE_PASSWORD:
    case CHANGE_INPUT:
    case PREVIOUS_STEP:
      draft.error = initialState.error;
      break;
    case LOGIN_SUCCESS:
      draft.isLogged = true;
      draft.token = action.token;
      draft.user = action.user;
      break;
    case LOGOUT_SUCCESS:
      return initialState;
    case LOGIN_ERROR:
    case CHECK_EMAIL_ERROR:
    case REGISTER_ERROR:
    case GET_CURRENCIES_ERROR:
      draft.error = action.error;
      break;
    case COLLAPSED_SIDEBAR:
      draft.isCollapsedSidebar = !draft.isCollapsedSidebar;
      break;
    case COLLAPSED_DRAWER:
      draft.isCollapsedDrawer = !draft.isCollapsedDrawer;
      break;
    case CHANGE_LAYOUT:
      draft.layout = JSON.parse(JSON.stringify(action.layout));
      break;
  }
}, initialState);

export default appReducer;
