import {
  changeInputAction,
  changeInputNumberAction,
  loginAction,
  loginSuccessAction,
  loginErrorAction,
  nextStepAction,
  previousStepAction,
} from '../actions';
import {
  CHANGE_INPUT_NUMBER,
  CHANGE_INPUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  NEXT_STEP,
  PREVIOUS_STEP,
} from '../constants';

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
      const expectedResult = {
        type: CHANGE_INPUT_NUMBER,
        value,
      };
      expect(changeInputNumberAction(value)).toEqual(expectedResult);
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
});
