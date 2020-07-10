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
import { SET_USER_DATA_SUCCESS } from 'containers/SettingsPage/constants';
import {
  LOGOUT_SUCCESS,
  COLLAPSED_SIDEBAR,
  COLLAPSED_DRAWER,
  GET_CURRENCIES_SUCCESS,
  LOGOUT_ERROR,
  GET_MESSAGES_SUCCESS,
  OPEN_MESSAGE_MODAL,
  CLOSE_MESSAGE_MODAL,
  GET_NOTIFICATIONS_SUCCESS,
  READ_MESSAGE_SUCCESS,
  READ_ALL_MESSAGES_SUCCESS,
  TOGGLE_CONFIRM_MODAL,
} from './constants';

export const initialState = {
  isCollapsedSidebar: false,
  isCollapsedDrawer: false,
  isLogged: false,
  token: {},
  user: {},
  currencies: [],
  messages: [],
  notifications: [],
  isOpenedMessage: false,
  isOpenedModal: false,
  openedMessage: '',
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
    case SET_USER_DATA_SUCCESS:
      draft.user = action.userData;
      break;
    case TOGGLE_CONFIRM_MODAL:
      draft.isOpenedModal = !draft.isOpenedModal;
      break;
    case GET_CURRENCIES_SUCCESS:
      draft.currencies = action.data;
      break;
    case GET_MESSAGES_SUCCESS:
      draft.messages = action.data;
      break;
    case GET_NOTIFICATIONS_SUCCESS:
      draft.notifications = action.data;

      if (draft.user.userConfig.notificationCount) {
        draft.user.userConfig.notificationCount = 0;
      }
      break;
    case OPEN_MESSAGE_MODAL:
      draft.isOpenedMessage = true;
      draft.openedMessage = action.uuid;
      break;
    case READ_MESSAGE_SUCCESS:
      draft.messages.data.find(
        ({ uuid }) => uuid === draft.openedMessage,
      ).readed = true;

      if (draft.user.userConfig.messageCount) {
        draft.user.userConfig.messageCount -= 1;
      }
      break;
    case READ_ALL_MESSAGES_SUCCESS:
      draft.messages.data = draft.messages.data.map((message) => ({
        ...message,
        readed: true,
      }));

      if (draft.user.userConfig.messageCount) {
        draft.user.userConfig.messageCount = 0;
      }
      break;
    case CLOSE_MESSAGE_MODAL:
      draft.isOpenedMessage = initialState.isOpenedMessage;
      draft.openedMessage = initialState.openedMessage;
      break;
    case LOCATION_CHANGE:
      draft.isCollapsedDrawer = initialState.isCollapsedDrawer;
      draft.isOpenedMessage = initialState.isOpenedMessage;
      draft.openedMessage = initialState.openedMessage;
      break;
    case LOGOUT_ERROR:
    case LOGOUT_SUCCESS:
      return initialState;
  }
}, initialState);

export default appReducer;
