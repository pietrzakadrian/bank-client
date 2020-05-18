import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalDomain = (state) => state.global || initialState;

const selectRouter = (state) => state.router;

const makeSelectIsLogged = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.isLogged);

const makeSelectIsLoading = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.isLoading);

const makeSelectToken = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.token);

const makeSelectUser = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.user);

const makeSelectLocation = () =>
  createSelector(selectRouter, (routerState) => routerState.location);

export {
  selectGlobalDomain,
  makeSelectIsLogged,
  makeSelectIsLoading,
  makeSelectToken,
  makeSelectUser,
  makeSelectLocation,
};
