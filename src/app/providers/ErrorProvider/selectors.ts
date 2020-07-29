import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.error || initialState;

export const selectError = state =>
  createSelector([selectDomain], errorState =>
    state instanceof Array
      ? errorState[state.find(action => errorState[action])]
      : errorState[state],
  );
