import {
  getTransactionHistoryAction,
  getTransactionHistorySuccessAction,
  getTransactionHistoryErrorAction,
} from '../actions';
import {
  GET_TRANSACTION_HISTORY_REQUEST,
  GET_TRANSACTION_HISTORY_ERROR,
  GET_TRANSACTION_HISTORY_SUCCESS,
} from '../constants';

describe('HistoryPage actions', () => {
  describe('getTransactionHistoryAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_TRANSACTION_HISTORY_REQUEST,
      };
      expect(getTransactionHistoryAction()).toEqual(expectedResult);
    });
  });

  describe('getTransactionHistorySuccessAction', () => {
    it('should return the correct type', () => {
      const transactions = 'data';
      const expectedResult = {
        type: GET_TRANSACTION_HISTORY_SUCCESS,
        transactions,
      };
      expect(getTransactionHistorySuccessAction(transactions)).toEqual(
        expectedResult,
      );
    });
  });

  describe('getTransactionHistoryErrorAction', () => {
    it('should return the correct type', () => {
      const error = '12';
      const expectedResult = {
        type: GET_TRANSACTION_HISTORY_ERROR,
        error,
      };
      expect(getTransactionHistoryErrorAction(error)).toEqual(expectedResult);
    });
  });
});
