import {
  logoutAction,
  logoutSuccessAction,
  logoutErrorAction,
} from '../actions';
import { LOGOUT, LOGOUT_SUCCESS, LOGOUT_ERROR } from '../constants';

describe('App actions', () => {
  describe('logoutAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGOUT,
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
});
