/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import { LOGIN_SUCCESS } from 'containers/LoginPage/constants';
import { CHANGE_LAYOUT } from 'containers/DashboardPage/constants';
import { LOCATION_CHANGE } from 'connected-react-router';
import { LOGIN_EXPRESS_SUCCESS } from 'containers/RegisterPage/constants';
import {
  LOGOUT_SUCCESS,
  COLLAPSED_SIDEBAR,
  COLLAPSED_DRAWER,
} from './constants';

export const initialState = {
  isCollapsedSidebar: false,
  isCollapsedDrawer: false,
  isLogged: false,
  token: {},
  user: {},
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const appReducer = produce((draft, action) => {
  if (/(.*)_ERROR/.test(action.type)) {
    return initialState;
  }

  switch (action.type) {
    case LOGIN_SUCCESS:
    case LOGIN_EXPRESS_SUCCESS:
      draft.isLogged = true;
      draft.token = action.token;
      draft.user = action.user;
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
    case LOCATION_CHANGE:
      draft.isCollapsedDrawer = false;
      break;
    case LOGOUT_SUCCESS:
      return initialState;
  }
}, initialState);

export default appReducer;
