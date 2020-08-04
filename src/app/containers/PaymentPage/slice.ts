import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';
import { actions as appActions } from 'app/containers/App/slice';

// The initial state of the PaymentPage container
export const initialState: ContainerState = {
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
};

const paymentPageSlice = createSlice({
  name: 'paymentPage',
  initialState,
  reducers: {
    changeInputAction(state, action: PayloadAction<any>) {
      if (action.payload.name === 'recipientAccountBillNumber') {
        state.recipientBill =
          state.recipients?.data?.find(
            bill =>
              bill.accountBillNumber.replace(/ /g, '') ===
              action.payload.value.trim(),
          ) || '';
      } else {
        state[action.payload.name] = action.payload.value.trim();
      }
    },
    nextStepAction(state) {
      state.currentStep += 1;
    },
    previousStepAction(state) {
      state.currentStep -= 1;
    },
    getAuthorizationKeyRequestAction() {},
    getAuthorizationKeySuccessAction(state, action: PayloadAction<string>) {
      state.authorizationKey = action.payload;
    },
    getAuthorizationKeyErrorAction(state, action: PayloadAction<any>) {},
    searchRecipientRequestAction(state, action: PayloadAction<any>) {},
    searchRecipientSuccessAction(state, action: PayloadAction<any>) {
      state.recipients = action.payload;
    },
    searchRecipientErrorAction(state, action: PayloadAction<any>) {},
    createTransactionRequestAction() {},
    createTransactionSuccessAction(state, action: PayloadAction<any>) {
      state.hasCreatedTransaction = true;
      state.transaction = action.payload;
    },
    createTransactionErrorAction(state, action: PayloadAction<any>) {},

    confirmTransactionRequestAction() {},
    confirmTransactionSuccessAction() {},
    confirmTransactionErrorAction(state, action: PayloadAction<any>) {},
    selectSenderBillAction(state, action: PayloadAction<any>) {
      state.senderBill =
        state.bills?.find(bill => bill.uuid === action.payload) || '';
    },
    checkRecipientAction() {},
    checkRecipientCorrectAction(state) {
      state.currentStep += 1;
    },
    checkRecipientIncorrectAction(state, action: PayloadAction<any>) {},
  },
  extraReducers: {
    [appActions.getBillsSuccessAction.type]: (
      state,
      action: PayloadAction<any>,
    ) => {
      state.bills = action.payload;
    },
  },
});

export const { actions, reducer, name: sliceKey } = paymentPageSlice;
