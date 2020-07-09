import {
  registerAction,
  registerSuccessAction,
  registerErrorAction,
} from '../actions';
import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_ERROR,
} from '../constants';

describe('RegisterPage actions', () => {
  describe('registerAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: REGISTER_REQUEST,
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
});
