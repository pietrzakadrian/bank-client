import produce from 'immer';
import {
  registerAction,
  //   registerSuccessAction,
  //   registerErrorAction,
  checkEmailAction,
  //   checkEmailSuccessAction,
  //   checkEmailErrorAction,
  //   checkEmailInvalidAction,
  getCurrenciesAction,
  //   getCurrenciesSuccessAction,
  //   getCurrenciesErrorAction,
} from 'containers/RegisterPage/actions';
import {
  loginAction,
  //   loginSuccessAction,
  //   loginErrorAction,
} from 'containers/LoginPage/actions';
import appReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('registerPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isLogged: false,
      isLoading: false,
      error: {},
      token: {},
      user: {},
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the register action correctly', () => {
    const fixture = true;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, registerAction(fixture))).toEqual(expectedResult);
  });

  it('should handle the checkEmail action correctly', () => {
    const fixture = true;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, checkEmailAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the login action correctly', () => {
    const fixture = true;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, loginAction(fixture))).toEqual(expectedResult);
  });

  it('should handle the getCurrencies action correctly', () => {
    const fixture = true;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, getCurrenciesAction(fixture))).toEqual(
      expectedResult,
    );
  });
});
