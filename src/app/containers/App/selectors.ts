import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.global || initialState;

const selectRouter = state => state.router;

export const selectApp = createSelector([selectDomain], appState => appState);

export const selectLocation = createSelector(
  [selectRouter],
  routerState => routerState.location,
);

export const selectOpenedMessageTemplate = locale =>
  createSelector([selectDomain], appState =>
    appState.openedMessage?.templates?.find(
      ({ language }) => language.code === locale,
    ),
  );
