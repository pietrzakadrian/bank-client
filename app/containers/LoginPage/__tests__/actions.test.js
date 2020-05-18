import {
  changePinCodeAction,
  changePasswordAction,
  loginAction,
  loginSuccessAction,
  loginErrorAction,
  nextStepAction,
  previousStepAction,
} from '../actions';
import {
  CHANGE_PINCODE,
  CHANGE_PASSWORD,
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  NEXT_STEP,
  PREVIOUS_STEP,
} from '../constants';

describe('LoginPage actions', () => {
  describe('loginAction', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOGIN,
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

  describe('changePinCodeAction', () => {
    it('should return the correct type', () => {
      const pinCode = 121;
      const expectedResult = {
        type: CHANGE_PINCODE,
        pinCode,
      };
      expect(changePinCodeAction(pinCode)).toEqual(expectedResult);
    });
  });

  describe('changePasswordAction', () => {
    it('should return the correct type', () => {
      const password = 'password';
      const expectedResult = {
        type: CHANGE_PASSWORD,
        password,
      };
      expect(changePasswordAction(password)).toEqual(expectedResult);
    });
  });
});
