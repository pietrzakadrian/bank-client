import produce from 'immer';

import { onLocationChanged } from 'connected-react-router';
import loginPageReducer from '../reducer';
import {
  changeInputNumberAction,
  changeInputAction,
  nextStepAction,
  previousStepAction,
} from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('registerPageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      pinCode: '',
      password: '',
      currentStep: 0,
    };
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(loginPageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeInputNumber action correctly', () => {
    const fixture = {
      pinCode: 121,
    };
    const expectedResult = produce(state, (draft) => {
      draft.pinCode = parseInt(fixture.pinCode, 10) || '';
    });

    expect(
      loginPageReducer(state, changeInputNumberAction(fixture.pinCode)),
    ).toEqual(expectedResult);
  });

  it('should handle the changeInput action correctly', () => {
    const fixture = {
      name: 'test',
      value: 'test',
    };
    const expectedResult = produce(state, (draft) => {
      draft.password = fixture.password;
    });

    expect(
      loginPageReducer(
        state,
        changeInputAction({ name: fixture.name, value: fixture.value }),
      ),
    ).toEqual(expectedResult);
  });

  it('should handle the nextStep action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.currentStep += 1;
    });

    expect(loginPageReducer(state, nextStepAction())).toEqual(expectedResult);
  });

  it('should handle the previousStep action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.currentStep -= 1;
    });

    expect(loginPageReducer(state, previousStepAction())).toEqual(
      expectedResult,
    );
  });

  it('should handle the LocationChangeAction action correctly', () => {
    const expectedResult = produce(state, (draft) => {
      draft.password = state.password;
      draft.pinCode = state.pinCode;

      draft.currentStep = state.currentStep;
    });

    expect(loginPageReducer(state, onLocationChanged())).toEqual(
      expectedResult,
    );
  });
});
