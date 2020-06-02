import {
  getBillsAction,
  getBillsSuccessAction,
  getBillsErrorAction,
  getAccountBalanceAction,
  getAccountBalanceSuccessAction,
  getAccountBalanceErrorAction,
  getAvailableFundsAction,
  getAvailableFundsSuccessAction,
  getAvailableFundsErrorAction,
} from '../actions';
import {
  GET_ACCOUNT_BALANCE_REQUEST,
  GET_AVAILABLE_FUNDS_SUCCESS,
  GET_BILLS_SUCCESS,
  GET_BILLS_ERROR,
  GET_ACCOUNT_BALANCE_SUCCESS,
  GET_ACCOUNT_BALANCE_ERROR,
  GET_BILLS_REQUEST,
  GET_AVAILABLE_FUNDS_ERROR,
  GET_AVAILABLE_FUNDS_REQUEST,
} from '../constants';

describe('DashboardPage actions', () => {
  describe('getBillsAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_BILLS_REQUEST,
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

  describe('getAvailableFundsAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_AVAILABLE_FUNDS_REQUEST,
      };
      expect(getAvailableFundsAction()).toEqual(expectedResult);
    });
  });

  describe('getAvailableFundsSuccessAction', () => {
    it('should return the correct type', () => {
      const amountMoney = '0.00';
      const currencyName = 'PLN';
      const accountBalanceHistory = [0, 0];
      const expectedResult = {
        type: GET_AVAILABLE_FUNDS_SUCCESS,
        amountMoney,
        currencyName,
        accountBalanceHistory,
      };
      expect(
        getAvailableFundsSuccessAction(
          amountMoney,
          currencyName,
          accountBalanceHistory,
        ),
      ).toEqual(expectedResult);
    });
  });

  describe('getAvailableFundsErrorAction', () => {
    it('should return the correct type', () => {
      const error = '';
      const expectedResult = {
        type: GET_AVAILABLE_FUNDS_ERROR,
        error,
      };
      expect(getAvailableFundsErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('getAccountBalanceAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_ACCOUNT_BALANCE_REQUEST,
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
});
