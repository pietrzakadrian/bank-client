import {
  getBillsAction,
  getBillsSuccessAction,
  getBillsErrorAction,
  getAmountMoneyAction,
  getAmountMoneySuccessAction,
  getAmountMoneyErrorAction,
  getAccountBalanceAction,
  getAccountBalanceSuccessAction,
  getAccountBalanceErrorAction,
  getAccountBalanceHistoryAction,
  getAccountBalanceHistorySuccessAction,
  getAccountBalanceHistoryErrorAction,
} from '../actions';
import {
  GET_BILLS,
  GET_BILLS_SUCCESS,
  GET_BILLS_ERROR,
  GET_AMOUNT_MONEY,
  GET_AMOUNT_MONEY_SUCCESS,
  GET_AMOUNT_MONEY_ERROR,
  GET_ACCOUNT_BALANCE,
  GET_ACCOUNT_BALANCE_SUCCESS,
  GET_ACCOUNT_BALANCE_ERROR,
  GET_ACCOUNT_BALANCE_HISTORY,
  GET_ACCOUNT_BALANCE_HISTORY_SUCCESS,
  GET_ACCOUNT_BALANCE_HISTORY_ERROR,
} from '../constants';

describe('DashboardPage actions', () => {
  describe('getBillsAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_BILLS,
      };
      expect(getBillsAction()).toEqual(expectedResult);
    });
  });

  describe('getBillsSuccessAction', () => {
    it('should return the correct type', () => {
      const bills = [];
      const expectedResult = {
        type: GET_BILLS_SUCCESS,
        bills,
      };
      expect(getBillsSuccessAction(bills)).toEqual(expectedResult);
    });
  });

  describe('getBillsErrorAction', () => {
    it('should return the correct type', () => {
      const error = '';
      const expectedResult = {
        type: GET_BILLS_ERROR,
        error,
      };
      expect(getBillsErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('getAmountMoneyAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_AMOUNT_MONEY,
      };
      expect(getAmountMoneyAction()).toEqual(expectedResult);
    });
  });

  describe('getAmountMoneySuccessAction', () => {
    it('should return the correct type', () => {
      const amountMoney = '0.00';
      const currencyName = 'PLN';
      const expectedResult = {
        type: GET_AMOUNT_MONEY_SUCCESS,
        amountMoney,
        currencyName,
      };
      expect(getAmountMoneySuccessAction(amountMoney, currencyName)).toEqual(
        expectedResult,
      );
    });
  });

  describe('getAmountMoneyErrorAction', () => {
    it('should return the correct type', () => {
      const error = '';
      const expectedResult = {
        type: GET_AMOUNT_MONEY_ERROR,
        error,
      };
      expect(getAmountMoneyErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('getAccountBalanceAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_ACCOUNT_BALANCE,
      };
      expect(getAccountBalanceAction()).toEqual(expectedResult);
    });
  });

  describe('getAccountBalanceSuccessAction', () => {
    it('should return the correct type', () => {
      const currencyName = 'PLN';
      const savings = '0.23';
      const savingsData = [];
      const savingsColors = [];
      const expectedResult = {
        type: GET_ACCOUNT_BALANCE_SUCCESS,
        currencyName,
        savings,
        savingsData,
        savingsColors,
      };
      expect(
        getAccountBalanceSuccessAction(
          currencyName,
          savings,
          savingsData,
          savingsColors,
        ),
      ).toEqual(expectedResult);
    });
  });

  describe('getAccountBalanceErrorAction', () => {
    it('should return the correct type', () => {
      const error = '';
      const expectedResult = {
        type: GET_ACCOUNT_BALANCE_ERROR,
        error,
      };
      expect(getAccountBalanceErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('getAccountBalanceHistoryAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_ACCOUNT_BALANCE_HISTORY,
      };
      expect(getAccountBalanceHistoryAction()).toEqual(expectedResult);
    });
  });

  describe('getAccountBalanceHistorySuccessAction', () => {
    it('should return the correct type', () => {
      const accountBalanceHistory = [];
      const expectedResult = {
        type: GET_ACCOUNT_BALANCE_HISTORY_SUCCESS,
        accountBalanceHistory,
      };
      expect(
        getAccountBalanceHistorySuccessAction(accountBalanceHistory),
      ).toEqual(expectedResult);
    });
  });

  describe('getAccountBalanceHistoryErrorAction', () => {
    it('should return the correct type', () => {
      const error = '';
      const expectedResult = {
        type: GET_ACCOUNT_BALANCE_HISTORY_ERROR,
        error,
      };
      expect(getAccountBalanceHistoryErrorAction(error)).toEqual(
        expectedResult,
      );
    });
  });
});
