import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectError = (state) => state.error || initialState;

// ? leave it here. The function below is in beta
// const makeSelectError = (actions) =>
//   createSelector(selectError, (errorState) => {
//     if (actions instanceof Array) {
//       return actions
//         .map((action) => errorState[action])
//         .filter(Boolean)
//         .find(() => true);
//     }

//     return errorState[actions];
//   });

const makeSelectError = (actions) =>
  createSelector(selectError, (errorState) => {
    if (actions instanceof Array) {
      return errorState[actions.find((action) => errorState[action])];
    }

    return errorState[actions];
  });

export { makeSelectError };
