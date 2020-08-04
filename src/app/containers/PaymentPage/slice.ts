import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

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
          state.recipients?.find(
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
    searchRecipientSuccessAction(state, action: PayloadAction<any>) {},
    searchRecipientErrorAction(state, action: PayloadAction<any>) {},

    createTransactionRequestAction(state, action: PayloadAction<any>) {},
    createTransactionSuccessAction(state, action: PayloadAction<any>) {
      state.hasCreatedTransaction = true;
      state.transaction = action.payload;
    },
    createTransactionErrorAction(state, action: PayloadAction<any>) {},

    confirmTransactionRequestAction(state, action: PayloadAction<any>) {},
    confirmTransactionSuccessAction(state, action: PayloadAction<any>) {},
    confirmTransactionErrorAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = paymentPageSlice;
