/*
 *
 * PaymentPage reducer
 *
 */

import produce from 'immer';
import { LOCATION_CHANGE } from 'connected-react-router';
import { formatBill } from 'helpers';
import {
  GET_BILLS_SUCCESS,
  SEARCH_RECIPIENT_SUCCESS,
  GET_AUTHORIZATION_KEY_SUCCESS,
  CHANGE_INPUT,
  CHANGE_INPUT_NUMBER,
  NEXT_STEP,
  SELECT_SENDER_BILL,
  PREVIOUS_STEP,
  CHECK_RECIPIENT_CORRECT,
  CREATE_TRANSACTION_SUCCESS,
  CONFIRM_TRANSACTION_SUCCESS,
} from './constants';

export const initialState = {
  transaction: '',
  bills: [],
  recipients: [],
  senderBill: {},
  recipientBill: {},
  amountMoney: '',
  transferTitle: '',
  authorizationKey: '',
  currentStep: 0,
  hasCreatedTransaction: false,
  hasConfirmedTransaction: false,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const paymentPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      if (action.name === 'recipientAccountBillNumber') {
        draft.recipientBill =
          draft.recipients?.find(
            (bill) => bill.accountBillNumber.replace(/ /g, '') === action.value,
          ) || '';
      } else {
        draft[action.name] = action.value.trim();
      }

      break;
    case CHANGE_INPUT_NUMBER:
      draft[action.name] = action.value || initialState.amountMoney;
      break;
    case CHECK_RECIPIENT_CORRECT:
    case NEXT_STEP:
      draft.currentStep += 1;
      break;
    case PREVIOUS_STEP:
      draft.currentStep -= 1;
      draft.hasCreatedTransaction = false;
      draft.authorizationKey = initialState.authorizationKey;
      break;
    case GET_AUTHORIZATION_KEY_SUCCESS:
      draft.authorizationKey = action.authorizationKey;
      break;
    case GET_BILLS_SUCCESS:
      draft.bills = action.bills.map(formatBill);
      break;
    case SEARCH_RECIPIENT_SUCCESS:
      draft.recipients = action.recipients.map(formatBill);
      break;
    case SELECT_SENDER_BILL:
      draft.senderBill =
        draft.bills?.find((bill) => bill.uuid === action.uuid) || '';
      break;
    case CREATE_TRANSACTION_SUCCESS:
      draft.hasCreatedTransaction = true;
      draft.transaction = action.uuid;
      break;
    case CONFIRM_TRANSACTION_SUCCESS:
      draft.hasConfirmedTransaction = true;
      break;
    case LOCATION_CHANGE:
      return initialState;
  }
}, initialState);

export default paymentPageReducer;
