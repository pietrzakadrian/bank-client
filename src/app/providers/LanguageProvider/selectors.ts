import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.language || initialState;

export const selectLanguage = createSelector(
  [selectDomain],
  languageState => languageState,
);
