import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the settingsPage state domain
 */

const selectSettingsPageDomain = (state) => state.settingsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by SettingsPage
 */

const makeSelectUser = () =>
  createSelector(selectSettingsPageDomain, (substate) => substate.user);

const makeSelectNewData = () =>
  createSelector(selectSettingsPageDomain, (substate) => substate.newData);

const makeSelectIsOpenedModal = () =>
  createSelector(
    selectSettingsPageDomain,
    (substate) => substate.isOpenedModal,
  );

export {
  selectSettingsPageDomain,
  makeSelectUser,
  makeSelectNewData,
  makeSelectIsOpenedModal,
};
