import produce from 'immer';

// import { getAction } from 'connected-react-router';
import { onLocationChanged } from 'connected-react-router';
import registerPageReducer from '../reducer';
import {
  getCurrenciesAction,
  getCurrenciesSuccessAction,
  getCurrenciesErrorAction,
  changeInputAction,
  selectCurrencyAction,
  registerAction,
  registerSuccessAction,
  registerErrorAction,
  checkEmailAction,
  checkEmailInvalidAction,
  checkEmailSuccessAction,
  checkEmailErrorAction,
  nextStepAction,
  previousStepAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('registerPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      firstName: '',
      lastName: '',
      currency: '',
      email: '',
      password: '',
      isLoading: false,
      pinCode: '',
      currencies: [],
      error: '',
      currentStep: 0,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(registerPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the getCurrencies action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = true;
    });

    expect(registerPageReducer(state, getCurrenciesAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the getCurrenciesSuccess action correctly', () => {
    const fixture = [{ name: 'USD' }, { name: 'EUR' }, { name: 'PLN' }];
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = false;
      draft.currencies = fixture;
    });

    expect(
      registerPageReducer(state, getCurrenciesSuccessAction(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the getCurrenciesError action correctly', () => {
    const fixture = 'test';
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = false;
      draft.error = fixture;
    });

    expect(
      registerPageReducer(state, getCurrenciesErrorAction(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the changeInput action correctly', () => {
    const fixture = { name: 'firstName', value: 'Adrian' };
    const expectedResult = produce(state, (draft) => {
      draft[fixture.name] = fixture.value;
    });

    expect(registerPageReducer(state, changeInputAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the selectCurrency action correctly', () => {
    const fixture = 'f464c93d-d9cd-4240-9d39-f524d559df83';
    const expectedResult = produce(state, (draft) => {
      draft.currency = fixture;
    });

    expect(registerPageReducer(state, selectCurrencyAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the register action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = true;
    });

    expect(registerPageReducer(state, registerAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the registerSuccess action correctly', () => {
    const fixture = 1231;

    const expectedResult = produce(state, (draft) => {
      draft.isLoading = false;
      draft.pinCode = fixture;
    });

    expect(registerPageReducer(state, registerSuccessAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the registerError action correctly', () => {
    const fixture = 'error';

    const expectedResult = produce(state, (draft) => {
      draft.isLoading = false;
      draft.error = fixture;
    });

    expect(registerPageReducer(state, registerErrorAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the checkEmail action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = true;
    });

    expect(registerPageReducer(state, checkEmailAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the checkEmailSuccess action correctly', () => {
    const fixture = true;
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = false;
    });

    expect(
      registerPageReducer(state, checkEmailSuccessAction(fixture)),
    ).toEqual(expectedResult);
  });

  it('should handle the checkEmailError action correctly', () => {
    const fixture = 'error';
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = false;
      draft.error = fixture;
    });

    expect(registerPageReducer(state, checkEmailErrorAction(fixture))).toEqual(
      expectedResult,
    );
  });

  it('should handle the checkEmailInvalid action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.isLoading = false;
    });

    expect(registerPageReducer(state, checkEmailInvalidAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the nextStep action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.currentStep += 1;
    });

    expect(registerPageReducer(state, nextStepAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the previousStep action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.currentStep -= 1;
    });

    expect(registerPageReducer(state, previousStepAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the LocationChangeAction action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.firstName = state.firstName;
      draft.lastName = state.lastName;
      draft.currency = state.currency;
      draft.email = state.email;
      draft.password = state.password;
      draft.isLoading = state.isLoading;
      draft.pinCode = state.pinCode;
      draft.currencies = state.currencies;
      draft.error = state.error;
      draft.currentStep = state.currentStep;
    });

    expect(registerPageReducer(state, onLocationChanged())).toEqual(
      expectedResult,
    );
  });
});
