import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the resetPasswordPage state domain
 */

const selectResetPasswordPageDomain = (state) =>
  state.resetPasswordPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ResetPasswordPage
 */

const makeSelectResetPasswordPage = () =>
  createSelector(selectResetPasswordPageDomain, (substate) => substate);

  const makeSelectPassword = () =>
  createSelector(selectResetPasswordPageDomain, (substate) => substate.password);

  const makeSelectPassword2 = () =>
  createSelector(selectResetPasswordPageDomain, (substate) => substate.password2);

  const makeSelectIsSuccess = () =>
  createSelector(selectResetPasswordPageDomain, (substate) => substate.isSuccess);

  const makeSelectToken = () =>
  createSelector(selectResetPasswordPageDomain, (substate) => substate.token);


export default makeSelectResetPasswordPage;
export { makeSelectPassword, makeSelectPassword2, makeSelectIsSuccess, makeSelectToken };
