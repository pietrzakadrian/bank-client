import produce from 'immer';
import {
  registerAction,
  registerSuccessAction,
  registerErrorAction,
  checkEmailAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
  checkEmailInvalidAction,
  getCurrenciesAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
} from 'containers/RegisterPage/actions';
import {
  loginAction,
  loginSuccessAction,
  loginErrorAction,
} from 'containers/LoginPage/actions';
import { logoutSuccessAction } from '../actions';
import appReducer from '../reducer';

/* eslint-disable default-case, no-param-reassign */
describe('registerPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      isLogged: false,
      isLoading: false,
      error: '',
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

  it('should handle the getCurrenciesSuccess action correctly', () => {
    const fixture = false;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, getCurrenciesSuccessAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the registerSuccess action correctly', () => {
    const fixture = false;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, registerSuccessAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the checkEmailSuccess action correctly', () => {
    const fixture = false;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, checkEmailSuccessAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the checkEmailInvalid action correctly', () => {
    const fixture = false;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture;
    });

    expect(appReducer(state, checkEmailInvalidAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loginError action correctly', () => {
    const fixture = {
      isLoading: false,
      error: {},
    };
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture.isLoading;
      draft.error = fixture.error;
    });

    expect(appReducer(state, loginErrorAction(fixture.error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the checkEmailError action correctly', () => {
    const fixture = {
      isLoading: false,
      error: {},
    };
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture.isLoading;
      draft.error = fixture.error;
    });

    expect(appReducer(state, checkEmailErrorAction(fixture.error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the registerError action correctly', () => {
    const fixture = {
      isLoading: false,
      error: {},
    };
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture.isLoading;
      draft.error = fixture.error;
    });

    expect(appReducer(state, registerErrorAction(fixture.error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the getCurrenciesError action correctly', () => {
    const fixture = {
      isLoading: false,
      error: {},
    };
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture.isLoading;
      draft.error = fixture.error;
    });

    expect(appReducer(state, getCurrenciesErrorAction(fixture.error))).toEqual(
      expectedResult,
    );
  });

  it('should handle the loginSuccess action correctly', () => {
    const fixture = {
      isLoading: false,
      isLogged: true,
      token: {},
      user: {},
    };
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = fixture.isLoading;
      draft.isLogged = fixture.isLogged;
      draft.token = fixture.token;
      draft.user = fixture.user;
    });

    expect(
      appReducer(state, loginSuccessAction(fixture.user, fixture.token)),
    ).toEqual(expectedResult);
  });

  it('should handle the logoutSuccessAction action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.isLogged = state.isLogged;
      draft.token = state.token;
      draft.user = state.user;
    });

    expect(appReducer(state, logoutSuccessAction())).toEqual(expectedResult);
  });
});
