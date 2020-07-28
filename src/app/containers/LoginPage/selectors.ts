import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.loginPage || initialState;

export const selectLoginPage = createSelector(
  [selectDomain],
  loginPageState => loginPageState,
);

export const selectPinCode = createSelector(
  [selectDomain],
  loginPageState => loginPageState.pinCode,
);

export const selectPassword = createSelector(
  [selectDomain],
  loginPageState => loginPageState.password,
);

export const selectCurrentStep = createSelector(
  [selectDomain],
  loginPageState => loginPageState.currentStep,
);
