import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the registerPage state domain
 */

const selectRegisterPageDomain = (state) => state.registerPage || initialState;

/**
 * Other specific selectors
 */

const makeSelectFirstName = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.firstName);

const makeSelectLastName = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.lastName);

const makeSelectPassword = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.password);

const makeSelectCurrency = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.currency);

const makeSelectEmail = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.email);

const makeSelectPinCode = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.pinCode);

const makeSelectError = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.error);

const makeSelectCurrentStep = () =>
  createSelector(selectRegisterPageDomain, (substate) => substate.currentStep);

/**
 * Default selector used by RegisterPage
 */

export {
  selectRegisterPageDomain,
  makeSelectFirstName,
  makeSelectLastName,
  makeSelectPassword,
  makeSelectCurrency,
  makeSelectEmail,
  makeSelectPinCode,
  makeSelectError,
  makeSelectCurrentStep,
};
