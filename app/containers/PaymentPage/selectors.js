import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the paymentPage state domain
 */

const selectPaymentPageDomain = (state) => state.paymentPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PaymentPage
 */

const makeSelectBills = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.bills);

const makeSelectRecipients = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.recipients);

const makeSelectSenderBill = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.senderBill);

const makeSelectRecipientBill = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.recipientBill);

const makeSelectRecipientBillNumber = () =>
  createSelector(
    selectPaymentPageDomain,
    (substate) => substate.recipientBillNumber,
  );

const makeSelectAmountMoney = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.amountMoney);

const makeSelectTransferTitle = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.transferTitle);

const makeSelectAuthorizationKey = () =>
  createSelector(
    selectPaymentPageDomain,
    (substate) => substate.authorizationKey,
  );

const makeSelectCurrentStep = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.currentStep);

export {
  makeSelectBills,
  makeSelectRecipients,
  makeSelectSenderBill,
  makeSelectRecipientBill,
  makeSelectRecipientBillNumber,
  makeSelectAmountMoney,
  makeSelectTransferTitle,
  makeSelectAuthorizationKey,
  makeSelectCurrentStep,
};
