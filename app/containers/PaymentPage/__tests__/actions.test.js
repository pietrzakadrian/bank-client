import {
  getBillsAction,
  getBillsSuccessAction,
  getBillsErrorAction,
  searchRecipientAction,
  searchRecipientSuccessAction,
  searchRecipientErrorAction,
  createTransactionAction,
  createTransactionSuccessAction,
  createTransactionErrorAction,
  getAuthorizationKeyAction,
  getAuthorizationKeySuccessAction,
  getAuthorizationKeyErrorAction,
  confirmTransactionAction,
  confirmTransactionSuccessAction,
  selectSenderBillAction,
  checkRecipientAction,
  checkRecipientCorrectAction,
  checkRecipientIncorrectAction,
  confirmTransactionIncorrectAction,
} from '../actions';
import {
  GET_BILLS_REQUEST,
  GET_BILLS_SUCCESS,
  GET_BILLS_ERROR,
  SEARCH_RECIPIENT_REQUEST,
  SEARCH_RECIPIENT_SUCCESS,
  SEARCH_RECIPIENT_ERROR,
  CREATE_TRANSACTION_REQUEST,
  CREATE_TRANSACTION_SUCCESS,
  CREATE_TRANSACTION_ERROR,
  GET_AUTHORIZATION_KEY_REQUEST,
  GET_AUTHORIZATION_KEY_SUCCESS,
  GET_AUTHORIZATION_KEY_ERROR,
  CONFIRM_TRANSACTION_REQUEST,
  CONFIRM_TRANSACTION_SUCCESS,
  SELECT_SENDER_BILL,
  CHECK_RECIPIENT,
  CHECK_RECIPIENT_CORRECT,
  CHECK_RECIPIENT_INCORRECT,
  CONFIRM_TRANSACTION_INCORRECT,
} from '../constants';

describe('Payment actions', () => {
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
      const bills = ['bills'];
      const expectedResult = {
        type: GET_BILLS_SUCCESS,
        bills,
      };
      expect(getBillsSuccessAction(bills)).toEqual(expectedResult);
    });
  });

  describe('getBillsErrorAction', () => {
    it('should return the correct type', () => {
      const error = {};
      const expectedResult = {
        type: GET_BILLS_ERROR,
        error,
      };
      expect(getBillsErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('searchRecipientAction', () => {
    it('should return the correct type', () => {
      const value = 'test';
      const expectedResult = {
        type: SEARCH_RECIPIENT_REQUEST,
        value: value.replace(/ /g, ''),
      };
      expect(searchRecipientAction(value)).toEqual(expectedResult);
    });
  });

  describe('searchRecipientSuccessAction', () => {
    it('should return the correct type', () => {
      const recipients = ['recipients'];
      const expectedResult = {
        type: SEARCH_RECIPIENT_SUCCESS,
        recipients,
      };
      expect(searchRecipientSuccessAction(recipients)).toEqual(expectedResult);
    });
  });

  describe('searchRecipientErrorAction', () => {
    it('should return the correct type', () => {
      const error = 'err';
      const expectedResult = {
        type: SEARCH_RECIPIENT_ERROR,
        error,
      };
      expect(searchRecipientErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('createTransactionAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CREATE_TRANSACTION_REQUEST,
      };
      expect(createTransactionAction()).toEqual(expectedResult);
    });
  });

  describe('createTransactionSuccessAction', () => {
    it('should return the correct type', () => {
      const uuid = '12-3w23';
      const expectedResult = {
        type: CREATE_TRANSACTION_SUCCESS,
        uuid,
      };
      expect(createTransactionSuccessAction(uuid)).toEqual(expectedResult);
    });
  });

  describe('createTransactionErrorAction', () => {
    it('should return the correct type', () => {
      const error = 'err';
      const expectedResult = {
        type: CREATE_TRANSACTION_ERROR,
        error,
      };
      expect(createTransactionErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('getAuthorizationKeyAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_AUTHORIZATION_KEY_REQUEST,
      };
      expect(getAuthorizationKeyAction()).toEqual(expectedResult);
    });
  });

  describe('getAuthorizationKeySuccessAction', () => {
    it('should return the correct type', () => {
      const authorizationKey = '12-3w23';
      const expectedResult = {
        type: GET_AUTHORIZATION_KEY_SUCCESS,
        authorizationKey,
      };
      expect(getAuthorizationKeySuccessAction(authorizationKey)).toEqual(
        expectedResult,
      );
    });
  });

  describe('getAuthorizationKeyErrorAction', () => {
    it('should return the correct type', () => {
      const error = 'err';
      const expectedResult = {
        type: GET_AUTHORIZATION_KEY_ERROR,
        error,
      };
      expect(getAuthorizationKeyErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('confirmTransactionAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CONFIRM_TRANSACTION_REQUEST,
      };
      expect(confirmTransactionAction()).toEqual(expectedResult);
    });
  });

  describe('confirmTransactionSuccessAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CONFIRM_TRANSACTION_SUCCESS,
      };
      expect(confirmTransactionSuccessAction()).toEqual(expectedResult);
    });
  });

  describe('confirmTransactionIncorrectAction', () => {
    it('should return the correct type', () => {
      const error = 'err';
      const expectedResult = {
        type: CONFIRM_TRANSACTION_INCORRECT,
        error,
      };
      expect(confirmTransactionIncorrectAction(error)).toEqual(expectedResult);
    });
  });

  describe('selectSenderBillAction', () => {
    it('should return the correct type', () => {
      const uuid = '12121';
      const expectedResult = {
        type: SELECT_SENDER_BILL,
        uuid,
      };
      expect(selectSenderBillAction(uuid)).toEqual(expectedResult);
    });
  });

  describe('checkRecipientAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHECK_RECIPIENT,
      };
      expect(checkRecipientAction()).toEqual(expectedResult);
    });
  });

  describe('checkRecipientCorrectAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHECK_RECIPIENT_CORRECT,
      };
      expect(checkRecipientCorrectAction()).toEqual(expectedResult);
    });
  });

  describe('checkRecipientIncorrectAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHECK_RECIPIENT_INCORRECT,
      };
      expect(checkRecipientIncorrectAction()).toEqual(expectedResult);
    });
  });
});
