import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the HistoryPage container
export const initialState: ContainerState = {
  transactions: [],
};

const historyPageSlice = createSlice({
  name: 'historyPage',
  initialState,
  reducers: {
    getTransactionHistoryRequestAction(state, action: PayloadAction<any>) {},
    getTransactionHistorySuccessAction(state, action: PayloadAction<any>) {
      state.transactions = action.payload;
    },
    getTransactionHistoryErrorAction(state, action: PayloadAction<any>) {},
    getConfirmationFileRequestAction(state, action: PayloadAction<any>) {},
    getConfirmationFileSuccessAction() {},
    getConfirmationFileErrorAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = historyPageSlice;
