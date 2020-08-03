import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the DashboardPage container
export const initialState: ContainerState = {
  amountMoney: '',
  currencyName: '',
  savingsPercent: '',
  savingsData: [],
  savingsColors: [],
  bills: [],
  accountBalanceHistory: [0, 0],
  recentTransactions: [],
  currency: '',
};

const dashboardPageSlice = createSlice({
  name: 'dashboardPage',
  initialState,
  reducers: {
    createNewBillRequestAction(state, action: PayloadAction<any>) {},
    createNewBillSuccessAction(state, action: PayloadAction<any>) {
      state.bills = [...state.bills, action.payload];
      state.currency = initialState.currency;
    },
    createNewBillErrorAction(state, action: PayloadAction<any>) {},
    getBillsRequestAction() {},
    getBillsSuccessAction(state, action: PayloadAction<any>) {
      state.bills = action.payload;
    },
    getBillsErrorAction(state, action: PayloadAction<any>) {},
    getAvailableFundsRequestAction() {},
    getAvailableFundsSuccessAction(state, action: PayloadAction<any>) {
      state.amountMoney = action.payload.amountMoney;
      state.currencyName = action.payload.currencyName;
      state.accountBalanceHistory =
        action.payload.accountBalanceHistory.length === 1
          ? [...action.payload.accountBalanceHistory, 0]
          : action.payload.accountBalanceHistory;
    },
    getAvailableFundsErrorAction(state, action: PayloadAction<any>) {},
    getAccountBalanceRequestAction() {},
    getAccountBalanceSuccessAction(state, action: PayloadAction<any>) {
      state.currencyName = action.payload.currencyName;
      state.savingsPercent = action.payload.savingsPercent
        .toFixed(1)
        .replace('.', ',');
      state.savingsData = action.payload.savingsData;
      state.savingsColors = action.payload.savingsColors;
    },
    getAccountBalanceErrorAction(state, action: PayloadAction<any>) {},
    getRecentTransactionsRequestAction() {},
    getRecentTransactionsSuccessAction(state, action: PayloadAction<any>) {
      state.recentTransactions = action.payload;
    },
    getRecentTransactionsErrorAction(state, action: PayloadAction<any>) {},
    selectCurrencyAction(state, action: PayloadAction<any>) {
      state.currency = action.payload;
    },
    changeLayoutAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions, reducer, name: sliceKey } = dashboardPageSlice;
