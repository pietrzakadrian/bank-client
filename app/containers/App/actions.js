/*
 *
 * App actions
 *
 */

import {
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  COLLAPSED_SIDEBAR,
  COLLAPSED_DRAWER,
} from './constants';

export function logoutAction() {
  return {
    type: LOGOUT,
  };
}

export function logoutSuccessAction() {
  return {
    type: LOGOUT_SUCCESS,
  };
}

export function logoutErrorAction(error) {
  return {
    type: LOGOUT_ERROR,
    error,
  };
}

export function collapsedSidebarAction() {
  return {
    type: COLLAPSED_SIDEBAR,
  };
}

export function collapsedDrawerAction() {
  return {
    type: COLLAPSED_DRAWER,
  };
}
