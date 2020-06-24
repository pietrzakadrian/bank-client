import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectLoading = (state) => state.loading || initialState;

// const makeSelectIsLoading = (action) =>
//   createSelector(selectLoading, (loadingState) => loadingState[action]);

const makeSelectIsLoading = (actions) =>
  createSelector(selectLoading, (loadingState) => {
    if (actions instanceof Array) {
      return loadingState[actions.find((action) => loadingState[action])];
    }

    return loadingState[actions];
  });

export { makeSelectIsLoading };
