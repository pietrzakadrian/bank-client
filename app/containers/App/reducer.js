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
  LOGIN,
  LOGIN_ERROR,
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
import {
  LOGOUT_SUCCESS,
  COLLAPSED_SIDEBAR,
  COLLAPSED_DRAWER,
} from './constants';
import { CHANGE_LAYOUT } from '../DashboardPage/constants';

export const initialState = {
  isCollapsedSidebar: true,
  isCollapsedDrawer: false,
  isLogged: false,
  isLoading: false,
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
      draft.error = initialState.error;
      break;
    case LOGIN_SUCCESS:
      draft.isLogged = true;
      draft.isLoading = false;
      draft.token = action.token;
      draft.user = action.user;
      break;
    case LOGOUT_SUCCESS:
      draft.isLogged = initialState.isLogged;
      draft.token = initialState.token;
      draft.user = initialState.user;
      draft.isCollapsedSidebar = initialState.isCollapsedSidebar;
      draft.isCollapsedDrawer = initialState.isCollapsedDrawer;
      break;
    case CHECK_EMAIL:
    case REGISTER:
    case GET_CURRENCIES:
    case LOGIN:
      draft.isLoading = true;
      break;
    case GET_CURRENCIES_SUCCESS:
    case REGISTER_SUCCESS:
    case CHECK_EMAIL_SUCCESS:
    case CHECK_EMAIL_INVALID:
      draft.isLoading = false;
      break;
    case LOGIN_ERROR:
    case CHECK_EMAIL_ERROR:
    case REGISTER_ERROR:
    case GET_CURRENCIES_ERROR:
      draft.isLoading = false;
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
