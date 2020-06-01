import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectError = (state) => state.error || initialState;

const makeSelectError = (action) =>
  createSelector(selectError, (errorState) => errorState[action]);

export { makeSelectError };
