import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.loading || initialState;

export const selectLoading = state =>
  createSelector([selectDomain], loadingState =>
    state instanceof Array
      ? loadingState[state.find(action => loadingState[action])]
      : loadingState[state],
  );
