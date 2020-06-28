/*
 *
 * DashboardPage reducer
 *
 */

import produce from 'immer';
import { formatBill } from 'helpers';
import { routes } from 'utils';
import {
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SELECT_CURRENCY,
  TOGGLE_MODAL,
} from 'containers/App/constants';
import { LOCATION_CHANGE } from 'connected-react-router';
import {
  GET_BILLS_SUCCESS,
  GET_AVAILABLE_FUNDS_SUCCESS,
  GET_ACCOUNT_BALANCE_SUCCESS,
  GET_RECENT_TRANSACTIONS_SUCCESS,
  CREATE_NEW_BILL_SUCCESS,
} from './constants';

export const initialState = {
  isOpenedModal: false,
  amountMoney: '',
  currencyName: '',
  savings: '',
  savingsData: [],
  savingsColors: [],
  bills: [],
  accountBalanceHistory: [0, 0],
  recentTransactions: [],
  currency: null,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const dashboardPageReducer = produce((draft, action) => {
  if (window.location.pathname === routes.dashboard.path) {
    switch (action.type) {
      case SELECT_CURRENCY:
        draft.currency = action.currency;
        break;
      case TOGGLE_MODAL:
        draft.isOpenedModal = !draft.isOpenedModal;
        break;
    }
  }

  switch (action.type) {
    case GET_BILLS_SUCCESS:
      draft.bills = action.bills.map(formatBill);
      break;
    case CREATE_NEW_BILL_SUCCESS:
      draft.bills = [...draft.bills, formatBill(action.bill)];
      draft.currency = initialState.currency;
      break;
    case GET_AVAILABLE_FUNDS_SUCCESS:
      draft.amountMoney = action.amountMoney;
      draft.currencyName = action.currencyName;
      draft.accountBalanceHistory =
        action.accountBalanceHistory.length === 1
          ? [...action.accountBalanceHistory, 0]
          : action.accountBalanceHistory;
      break;
    case GET_ACCOUNT_BALANCE_SUCCESS:
      draft.currencyName = action.currencyName;
      draft.savings = action.savings.toFixed(1).replace('.', ',');
      draft.savingsData = action.savingsData;
      draft.savingsColors = action.savingsColors;
      break;
    case GET_RECENT_TRANSACTIONS_SUCCESS:
      draft.recentTransactions = action.recentTransactions;
      break;

    case LOCATION_CHANGE:
    case LOGOUT_SUCCESS:
    case LOGOUT_ERROR:
      return initialState;
  }
}, initialState);

export default dashboardPageReducer;
