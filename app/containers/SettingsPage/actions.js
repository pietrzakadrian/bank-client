/*
 *
 * SettingsPage actions
 *
 */

import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
} from './constants';

export function getUserDataAction() {
  return {
    type: GET_USER_DATA_REQUEST,
  };
}

export function getUserDataSuccessAction(userData) {
  return {
    type: GET_USER_DATA_SUCCESS,
    userData,
  };
}

export function getUserDataErrorAction(error) {
  return {
    type: GET_USER_DATA_ERROR,
    error,
  };
}
