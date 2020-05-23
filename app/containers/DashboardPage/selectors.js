import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the dashboardPage state domain
 */

const selectDashboardPageDomain = (state) =>
  state.dashboardPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by DashboardPage
 */

const makeSelectAmountMoney = () =>
  createSelector(selectDashboardPageDomain, (substate) => substate.amountMoney);

const makeSelectRevenues = () =>
  createSelector(selectDashboardPageDomain, (substate) => substate.revenues);

const makeSelectExpenses = () =>
  createSelector(selectDashboardPageDomain, (substate) => substate.expenses);

const makeSelectCurrencyName = () =>
  createSelector(
    selectDashboardPageDomain,
    (substate) => substate.currencyName,
  );

const makeSelectBills = () =>
  createSelector(selectDashboardPageDomain, (substate) => substate.bills);

const makeSelectAccountBalanceHistory = () =>
  createSelector(
    selectDashboardPageDomain,
    (substate) => substate.accountBalanceHistory,
  );

export {
  selectDashboardPageDomain,
  makeSelectAmountMoney,
  makeSelectRevenues,
  makeSelectExpenses,
  makeSelectCurrencyName,
  makeSelectBills,
  makeSelectAccountBalanceHistory,
};
