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
} from './constants';

export const initialState = {
  bills: [],
  recipients: [],
  senderBill: '',
  recipientBill: '',
  recipient: {},
  amountMoney: '',
  transferTitle: '',
  authorizationKey: '',
  currentStep: 0,
};

/* eslint-disable default-case, no-param-reassign, consistent-return */
const paymentPageReducer = produce((draft, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      draft[action.name] = action.value.trim();

      if (action.name === 'recipientBill') {
        draft.recipient = draft.recipients.find(
          (recipient) => recipient.accountBillNumber === action.value,
        );
      }
      break;
    case CHANGE_INPUT_NUMBER:
      draft[action.name] = action.value;
      break;
    case NEXT_STEP:
      draft.currentStep += 1;
      break;
    case PREVIOUS_STEP:
      draft.currentStep -= 1;
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
      draft.senderBill = action.senderBill;
      break;
    case LOCATION_CHANGE:
      return initialState;
  }
}, initialState);

export default paymentPageReducer;
