/*
 *
 * App reducer
 *
 */

import produce from 'immer';
import { LOGIN_SUCCESS } from 'containers/LoginPage/constants';

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
  token: {},
  user: {},
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const appReducer = produce((draft, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
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
    case LOGOUT_SUCCESS:
      return initialState;
  }
}, initialState);

export default appReducer;
