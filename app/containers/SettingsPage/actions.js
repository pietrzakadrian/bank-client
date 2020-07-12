/*
 *
 * SettingsPage actions
 *
 */

import {
  GET_USER_DATA_REQUEST,
  GET_USER_DATA_SUCCESS,
  GET_USER_DATA_ERROR,
  SET_USER_DATA_REQUEST,
  SET_USER_DATA_SUCCESS,
  SET_USER_DATA_INCORRECT,
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

export function setUserDataAction(snippets) {
  return {
    type: SET_USER_DATA_REQUEST,
    snippets,
  };
}

export function setUserDataSuccessAction(userData) {
  return {
    type: SET_USER_DATA_SUCCESS,
    userData,
  };
}

export function setUserDataIncorrectAction(error) {
  return {
    type: SET_USER_DATA_INCORRECT,
    error,
  };
}
