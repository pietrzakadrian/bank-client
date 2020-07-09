import { loginAction, loginSuccessAction, loginErrorAction } from '../actions';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../constants';

describe('LoginPage actions', () => {
  describe('loginAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGIN_REQUEST,
      };
      expect(loginAction()).toEqual(expectedResult);
    });
  });

  describe('loginSuccessAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGIN_SUCCESS,
      };
      expect(loginSuccessAction()).toEqual(expectedResult);
    });
  });

  describe('loginErrorAction', () => {
    it('should return the correct type', () => {
      const error = {};
      const expectedResult = {
        type: LOGIN_ERROR,
        error,
      };
      expect(loginErrorAction(error)).toEqual(expectedResult);
    });
  });
});
