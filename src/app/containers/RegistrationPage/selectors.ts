import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) =>
  state.registrationPage || initialState;

export const selectRegistrationPage = createSelector(
  [selectDomain],
  registrationPageState => registrationPageState,
);
