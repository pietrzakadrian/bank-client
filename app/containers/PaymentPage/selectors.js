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

const makeSelectSenderBillUuid = () =>
  createSelector(
    selectPaymentPageDomain,
    (substate) => substate.senderBill?.uuid,
  );

const makeSelectRecipientBill = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.recipientBill);

const makeSelectRecipientBillUuid = () =>
  createSelector(
    selectPaymentPageDomain,
    (substate) => substate.recipientBill?.uuid,
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

const makeSelectHasCreatedTransaction = () =>
  createSelector(
    selectPaymentPageDomain,
    (substate) => substate.hasCreatedTransaction,
  );

const makeSelectHasConfirmedTransaction = () =>
  createSelector(
    selectPaymentPageDomain,
    (substate) => substate.hasConfirmedTransaction,
  );

const makeSelectTransaction = () =>
  createSelector(selectPaymentPageDomain, (substate) => substate.transaction);

export {
  selectPaymentPageDomain,
  makeSelectBills,
  makeSelectRecipients,
  makeSelectSenderBill,
  makeSelectRecipientBill,
  makeSelectAmountMoney,
  makeSelectTransferTitle,
  makeSelectAuthorizationKey,
  makeSelectCurrentStep,
  makeSelectHasCreatedTransaction,
  makeSelectHasConfirmedTransaction,
  makeSelectTransaction,
  makeSelectSenderBillUuid,
  makeSelectRecipientBillUuid,
};
