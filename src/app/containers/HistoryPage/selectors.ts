import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.historyPage || initialState;

export const selectHistoryPage = createSelector(
  [selectDomain],
  historyPageState => historyPageState,
);
