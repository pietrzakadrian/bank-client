import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.settingsPage || initialState;

export const selectSettingsPage = createSelector(
  [selectDomain],
  settingsPageState => settingsPageState,
);
