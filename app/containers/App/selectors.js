import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = (state) => state.global || initialState;

const selectRouter = (state) => state.router;

const makeSelectIsLogged = () =>
  createSelector(selectGlobal, (globalState) => globalState.isLogged);

const makeSelectIsLoading = () =>
  createSelector(selectGlobal, (globalState) => globalState.isLoading);

const makeSelectToken = () =>
  createSelector(selectGlobal, (globalState) => globalState.token);

const makeSelectUser = () =>
  createSelector(selectGlobal, (globalState) => globalState.user);

const makeSelectLocation = () =>
  createSelector(selectRouter, (routerState) => routerState.location);

export {
  makeSelectIsLogged,
  makeSelectIsLoading,
  makeSelectToken,
  makeSelectUser,
  makeSelectLocation,
};
