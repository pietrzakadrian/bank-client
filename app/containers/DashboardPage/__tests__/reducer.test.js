import produce from 'immer';

// import { onLocationChanged } from 'connected-react-router';
import dashboardPageReducer from '../reducer';
import {
  getBillsSuccessAction,
  getAccountBalanceSuccessAction,
  getAvailableFundsSuccessAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('dashboardPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isOpenedModal: false,
      amountMoney: '',
      currencyName: '',
      savings: '',
      savingsData: [],
      savingsColors: [],
      bills: [],
      accountBalanceHistory: [0, 0],
      recentTransactions: [],
      currency: null,
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
      accountBalanceHistory: [0, 2],
    };
    const expectedResult = produce(state, (draft) => {
      draft.amountMoney = fixture.amountMoney;
      draft.currencyName = fixture.currencyName;
      draft.accountBalanceHistory = fixture.accountBalanceHistory;
    });

    expect(
      dashboardPageReducer(
        state,
        getAvailableFundsSuccessAction(
          fixture.amountMoney,
          fixture.currencyName,
          fixture.accountBalanceHistory,
        ),
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
});
