import {
  logoutAction,
  logoutSuccessAction,
  logoutErrorAction,
  nextStepAction,
  previousStepAction,
  changeInputNumberAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
  checkEmailInvalidAction,
  changeInputAction,
  getCurrenciesAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  selectCurrencyAction,
  checkEmailAction,
} from '../actions';
import {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  NEXT_STEP,
  PREVIOUS_STEP,
  CHANGE_INPUT_NUMBER,
  CHECK_EMAIL_ERROR,
  CHECK_EMAIL_INVALID,
  CHANGE_INPUT,
  GET_CURRENCIES_REQUEST,
  GET_CURRENCIES_SUCCESS,
  SELECT_CURRENCY,
  CHECK_EMAIL_REQUEST,
  GET_CURRENCIES_ERROR,
  CHECK_EMAIL_SUCCESS,
} from '../constants';

describe('App actions', () => {
  describe('logoutAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGOUT_REQUEST,
      };
      expect(logoutAction()).toEqual(expectedResult);
    });
  });

  describe('logoutSuccessAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGOUT_SUCCESS,
      };
      expect(logoutSuccessAction()).toEqual(expectedResult);
    });
  });
  describe('logoutErrorAction', () => {
    it('should return the correct type', () => {
      const error = {};
      const expectedResult = {
        type: LOGOUT_ERROR,
        error,
      };
      expect(logoutErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('nextStepAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: NEXT_STEP,
      };
      expect(nextStepAction()).toEqual(expectedResult);
    });
  });

  describe('previousStepAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: PREVIOUS_STEP,
      };
      expect(previousStepAction()).toEqual(expectedResult);
    });
  });

  describe('changeInputNumberAction', () => {
    it('should return the correct type', () => {
      const value = 121;
      const name = 'login';
      const expectedResult = {
        type: CHANGE_INPUT_NUMBER,
        name,
        value,
      };
      expect(changeInputNumberAction({ name, value })).toEqual(expectedResult);
    });
  });

  describe('changeInputAction', () => {
    it('should return the correct type', () => {
      const name = 'password';
      const value = 'test';
      const expectedResult = {
        type: CHANGE_INPUT,
        name,
        value,
      };
      expect(changeInputAction({ name, value })).toEqual(expectedResult);
    });
  });

  describe('getCurrenciesAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_CURRENCIES_REQUEST,
      };
      expect(getCurrenciesAction()).toEqual(expectedResult);
    });
  });

  describe('getCurrenciesSuccessAction', () => {
    it('should return the correct type', () => {
      const data = [{ name: 'USD' }, { name: 'EUR' }, { name: 'PLN' }];
      const expectedResult = {
        type: GET_CURRENCIES_SUCCESS,
        data,
      };
      expect(getCurrenciesSuccessAction(data)).toEqual(expectedResult);
    });
  });

  describe('getCurrenciesErrorAction', () => {
    it('should return the correct type', () => {
      const error = 'connection time out';
      const expectedResult = {
        type: GET_CURRENCIES_ERROR,
        error,
      };
      expect(getCurrenciesErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('selectCurrencyAction', () => {
    it('should return the correct type', () => {
      const currency = 'f464c93d-d9cd-4240-9d39-f524d559df83';
      const expectedResult = {
        type: SELECT_CURRENCY,
        currency,
      };
      expect(selectCurrencyAction(currency)).toEqual(expectedResult);
    });
  });

  describe('checkEmailAction', () => {
    it('should return the correct type', () => {
      const value = 'test@o2.com';
      const reject = {};
      const resolve = {};
      const expectedResult = {
        type: CHECK_EMAIL_REQUEST,
        value,
        reject,
        resolve,
      };
      expect(checkEmailAction(value, reject, resolve)).toEqual(expectedResult);
    });
  });

  describe('checkEmailSuccessAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHECK_EMAIL_SUCCESS,
      };
      expect(checkEmailSuccessAction()).toEqual(expectedResult);
    });
  });

  describe('checkEmailErrorAction', () => {
    it('should return the correct type', () => {
      const error = 'error';
      const expectedResult = {
        type: CHECK_EMAIL_ERROR,
        error,
      };
      expect(checkEmailErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('checkEmailInvalidAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CHECK_EMAIL_INVALID,
      };
      expect(checkEmailInvalidAction()).toEqual(expectedResult);
    });
  });
});
