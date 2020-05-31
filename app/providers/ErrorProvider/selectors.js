import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoading = (state) => state.loading || initialState;

const makeSelectLoading = (action) =>
  createSelector(selectLoading, (loadingState) => loadingState[action]);

export { makeSelectLoading };
