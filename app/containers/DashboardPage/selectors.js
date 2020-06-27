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

const makeSelectSavings = () =>
  createSelector(selectDashboardPageDomain, (substate) => substate.savings);

const makeSelectSavingsData = () =>
  createSelector(selectDashboardPageDomain, (substate) => substate.savingsData);

const makeSelectSavingsColors = () =>
  createSelector(
    selectDashboardPageDomain,
    (substate) => substate.savingsColors,
  );

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

const makeSelectRecentTransactions = () =>
  createSelector(
    selectDashboardPageDomain,
    (substate) => substate.recentTransactions,
  );

const makeSelectCurrency = () =>
  createSelector(selectDashboardPageDomain, (substate) => substate.currency);

const makeSelectIsOpenedModal = () =>
  createSelector(
    selectDashboardPageDomain,
    (substate) => substate.isOpenedModal,
  );

export {
  selectDashboardPageDomain,
  makeSelectAmountMoney,
  makeSelectSavings,
  makeSelectSavingsData,
  makeSelectSavingsColors,
  makeSelectCurrencyName,
  makeSelectBills,
  makeSelectAccountBalanceHistory,
  makeSelectRecentTransactions,
  makeSelectCurrency,
  makeSelectIsOpenedModal,
};
