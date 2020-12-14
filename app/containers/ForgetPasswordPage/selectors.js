import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the forgetPasswordPage state domain
 */

const selectForgetPasswordPageDomain = (state) =>
  state.forgetPasswordPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ForgetPasswordPage
 */

const makeSelectForgetPasswordPage = () =>
  createSelector(selectForgetPasswordPageDomain, (substate) => substate);


const makeSelectEmail = () =>
  createSelector(selectForgetPasswordPageDomain, (substate) => substate.email);

  const makeSelectIsSuccess = () =>
  createSelector(selectForgetPasswordPageDomain, (substate) => substate.isSuccess);


export default makeSelectForgetPasswordPage;
export {  makeSelectEmail, makeSelectIsSuccess };
