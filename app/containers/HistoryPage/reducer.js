/*
 *
 * HistoryPage reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { LOGOUT_SUCCESS, LOGOUT_ERROR } from 'containers/App/constants';
import { GET_TRANSFER_HISTORY_SUCCESS } from './constants';

export const initialState = {
  transferHistory: [],
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const historyPageReducer = produce((draft, action) => {
  switch (action.type) {
    case GET_TRANSFER_HISTORY_SUCCESS:
      draft.transferHistory = action.data;
      break;
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
    case LOCATION_CHANGE:
      return initialState;
  }
}, initialState);

export default historyPageReducer;
