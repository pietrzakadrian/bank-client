import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = (state) => state.loginPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectPinCode = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.pinCode);

const makeSelectPassword = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.password);

const makeSelectCurrentStep = () =>
  createSelector(selectLoginPageDomain, (substate) => substate.currentStep);

export {
  selectLoginPageDomain,
  makeSelectPinCode,
  makeSelectPassword,
  makeSelectCurrentStep,
};
