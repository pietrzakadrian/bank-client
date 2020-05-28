import produce from 'immer';

// import { onLocationChanged } from 'connected-react-router';
import dashboardPageReducer from '../reducer';
import {
  getBillsSuccessAction,
  getAmountMoneySuccessAction,
  getAccountBalanceSuccessAction,
  getAccountBalanceHistorySuccessAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('dashboardPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      amountMoney: '',
      currencyName: '',
      savings: '',
      savingsData: [],
      savingsColors: [],
      bills: [],
      accountBalanceHistory: [],
      recentTransactions: [],
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(dashboardPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getBillsSuccessAction action correctly', () => {
    const fixture = {
      bills: [],
    };
    const expectedResult = produce(state, (draft) => {
      draft.bills = fixture.bills;
    });

    expect(
      dashboardPageReducer(state, getBillsSuccessAction(fixture.bills)),
    ).toEqual(expectedResult);
  });

  it('should handle the getAmountMoneySuccessAction action correctly', () => {
    const fixture = {
      amountMoney: '1',
      currencyName: 'PLN',
    };
    const expectedResult = produce(state, (draft) => {
      draft.amountMoney = fixture.amountMoney;
      draft.currencyName = fixture.currencyName;
    });

    expect(
      dashboardPageReducer(
        state,
        getAmountMoneySuccessAction(fixture.amountMoney, fixture.currencyName),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the getAccountBalanceSuccessAction action correctly', () => {
    const fixture = {
      currencyName: 'PLN',
      savings: 1,
      savingsData: [],
      savingsColors: [],
    };
    const expectedResult = produce(state, (draft) => {
      draft.currencyName = fixture.currencyName;
      draft.savings = fixture.savings.toFixed(1).replace('.', ',');
      draft.savingsData = fixture.savingsData;
      draft.savingsColors = fixture.savingsColors;
    });

    expect(
      dashboardPageReducer(
        state,
        getAccountBalanceSuccessAction(
          fixture.currencyName,
          fixture.savings,
          fixture.savingsData,
          fixture.savingsColors,
        ),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the getAccountBalanceHistorySuccessAction action correctly', () => {
    const fixture = {
      accountBalanceHistory: [],
    };
    const expectedResult = produce(state, (draft) => {
      draft.accountBalanceHistory = fixture.accountBalanceHistory;
    });

    expect(
      dashboardPageReducer(
        state,
        getAccountBalanceHistorySuccessAction(fixture.accountBalanceHistory),
      ),
    ).toEqual(expectedResult);
  });
});
