import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the historyPage state domain
 */

const selectHistoryPageDomain = (state) => state.historyPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by HistoryPage
 */

const makeSelectTransactions = () =>
  createSelector(selectHistoryPageDomain, (substate) => substate.transactions);

export { selectHistoryPageDomain, makeSelectTransactions };
