import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.paymentPage || initialState;

export const selectPaymentPage = createSelector(
  [selectDomain],
  paymentPageState => paymentPageState,
);
