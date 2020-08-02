import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.dashboardPage || initialState;

export const selectDashboardPage = createSelector(
  [selectDomain],
  dashboardPageState => dashboardPageState,
);
