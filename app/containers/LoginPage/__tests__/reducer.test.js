import produce from 'immer';

import { onLocationChanged } from 'connected-react-router';
import loginPageReducer from '../reducer';

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
