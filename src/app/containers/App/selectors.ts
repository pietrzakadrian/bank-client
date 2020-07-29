import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.global || initialState;

export const selectApp = createSelector([selectDomain], appState => appState);
