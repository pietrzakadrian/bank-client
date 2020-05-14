import {
  getCurrenciesAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  changeInputAction,
  selectCurrencyAction,
  changeCheckboxAction,
  registerAction,
  registerSuccessAction,
  registerErrorAction,
  checkEmailAction,
  checkEmailInvalidAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
} from '../actions';
import {
  GET_CURRENCIES,
  GET_CURRENCIES_SUCCESS,
  GET_CURRENCIES_ERROR,
  CHANGE_INPUT,
  SELECT_CURRENCY,
  CHANGE_CHECKBOX,
  CHECK_EMAIL_INVALID,
  CHECK_EMAIL,
  CHECK_EMAIL_SUCCESS,
  CHECK_EMAIL_ERROR,
  REGISTER,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../constants';

describe('RegisterPage actions', () => {
  describe('getCurrenciesAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: GET_CURRENCIES,
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

  describe('changeInputAction', () => {
    it('should return the correct type', () => {
      const name = 'firstname';
      const value = 'Adrian';
      const expectedResult = {
        type: CHANGE_INPUT,
        name,
        value,
      };
      expect(changeInputAction({ name, value })).toEqual(expectedResult);
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

  describe('changeCheckboxAction', () => {
    it('should return the correct type', () => {
      const checked = true;
      const expectedResult = {
        type: CHANGE_CHECKBOX,
        checked,
      };
      expect(changeCheckboxAction(checked)).toEqual(expectedResult);
    });
  });

  describe('registerAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: REGISTER,
      };
      expect(registerAction()).toEqual(expectedResult);
    });
  });

  describe('registerSuccessAction', () => {
    it('should return the correct type', () => {
      const pinCode = 12313;
      const expectedResult = {
        type: REGISTER_SUCCESS,
        pinCode,
      };
      expect(registerSuccessAction(pinCode)).toEqual(expectedResult);
    });
  });

  describe('registerErrorAction', () => {
    it('should return the correct type', () => {
      const error = 'Error';
      const expectedResult = {
        type: REGISTER_ERROR,
        error,
      };
      expect(registerErrorAction(error)).toEqual(expectedResult);
    });
  });

  describe('checkEmailAction', () => {
    it('should return the correct type', () => {
      const value = 'test@o2.com';
      const reject = {};
      const resolve = {};
      const expectedResult = {
        type: CHECK_EMAIL,
        value,
        reject,
        resolve,
      };
      expect(checkEmailAction(value, reject, resolve)).toEqual(expectedResult);
    });
  });

  describe('checkEmailSuccessAction', () => {
    it('should return the correct type', () => {
      const exist = true;
      const expectedResult = {
        type: CHECK_EMAIL_SUCCESS,
        exist,
      };
      expect(checkEmailSuccessAction(exist)).toEqual(expectedResult);
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
