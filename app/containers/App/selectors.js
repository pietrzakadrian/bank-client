import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobalDomain = (state) => state.global || initialState;

const selectRouter = (state) => state.router;

const makeSelectIsLogged = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.isLogged);

const makeSelectToken = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.token);

const makeSelectUser = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.user);

const makeSelectIsCollapsedSidebar = () =>
  createSelector(
    selectGlobalDomain,
    (globalState) => globalState.isCollapsedSidebar,
  );

const makeSelectIsCollapsedDrawer = () =>
  createSelector(
    selectGlobalDomain,
    (globalState) => globalState.isCollapsedDrawer,
  );

const makeSelectLayout = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.layout);

const makeSelectCurrencies = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.currencies);

const makeSelectMessages = () =>
  createSelector(selectGlobalDomain, (globalState) => globalState.messages);

const makeSelectIsOpenedMessage = () =>
  createSelector(
    selectGlobalDomain,
    (globalState) => globalState.isOpenedMessage,
  );

const makeSelectOpenedMessage = () =>
  createSelector(
    selectGlobalDomain,
    (globalState) => globalState.openedMessage,
  );

const makeSelectNotifications = () =>
  createSelector(
    selectGlobalDomain,
    (globalState) => globalState.notifications,
  );

const makeSelectIsOpenedModal = () =>
  createSelector(
    selectGlobalDomain,
    (globalState) => globalState.isOpenedModal,
  );

const makeSelectLocation = () =>
  createSelector(selectRouter, (routerState) => routerState.location);

export {
  selectGlobalDomain,
  makeSelectIsLogged,
  makeSelectToken,
  makeSelectUser,
  makeSelectLocation,
  makeSelectIsCollapsedSidebar,
  makeSelectIsCollapsedDrawer,
  makeSelectLayout,
  makeSelectCurrencies,
  makeSelectMessages,
  makeSelectIsOpenedMessage,
  makeSelectOpenedMessage,
  makeSelectNotifications,
  makeSelectIsOpenedModal,
};
